import os
import time
import random
import smtplib
from datetime import datetime, timedelta
from email.message import EmailMessage

from flask import Flask, send_from_directory, jsonify, request
from dotenv import load_dotenv
from google import genai


# ======================================================
# LOAD ENVIRONMENT VARIABLES
# ======================================================

load_dotenv()


# ======================================================
# FLASK APP
# ======================================================

app = Flask(__name__)


# ======================================================
# GEMINI AI SETUP
# ======================================================

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key) if api_key else None


# ======================================================
# RESET OTP STORAGE
# ======================================================

reset_codes = {}


# ======================================================
# HOME PAGE
# ======================================================

@app.route("/")
def home():
    return send_from_directory(".", "index.html")


# ======================================================
# CSS
# ======================================================

@app.route("/style.css")
def style():
    return send_from_directory(".", "style.css")


# ======================================================
# JAVASCRIPT
# ======================================================

@app.route("/script.js")
def script():
    return send_from_directory(".", "script.js")


# ======================================================
# HEALTH CHECK
# ======================================================

@app.route("/api/health")
def health():
    return jsonify({
        "status": "success",
        "message": "SkillMirror AI backend is running!"
    })


# ======================================================
# AI TEACHER
# ======================================================

@app.route("/api/teacher", methods=["POST"])
def teacher():

    if client is None:
        return jsonify({
            "answer": "API key setup nahi hui. Please check your .env file."
        }), 500

    data = request.get_json(silent=True) or {}

    question = data.get("question", "").strip()

    if not question:
        return jsonify({
            "answer": "Please enter your question."
        }), 400

    prompt = (
        "You are SkillMirror AI Teacher. "
        "Answer questions from any subject, including computer science, "
        "biology, physics, chemistry, and mathematics. "
        "Understand the exact question and answer directly in simple English. "
        "Keep the answer clear, useful, and concise. "
        "Use examples only when helpful. "
        "Do not give unrelated information. "
        "Student's question: " + question
    )

    for attempt in range(3):

        try:

            response = client.models.generate_content(
                model="gemini-3.8-flash",
                contents=prompt
            )

            return jsonify({
                "answer": response.text
            })

        except Exception as e:

            print(
                "Gemini attempt",
                attempt + 1,
                "failed:",
                e
            )

            if attempt < 2:
                time.sleep(2)

    return jsonify({
        "answer": "AI is busy right now. Please try again in a moment."
    }), 503


# ======================================================
# EMAIL OTP SENDER
# ======================================================

def send_email_otp(email, otp):

    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    smtp_from = os.getenv("SMTP_FROM", smtp_username)

    if not all([
        smtp_host,
        smtp_username,
        smtp_password,
        smtp_from
    ]):
        print("SMTP settings are missing.")
        return False

    message = EmailMessage()

    message["Subject"] = "SkillMirror AI - Password Reset Code"
    message["From"] = smtp_from
    message["To"] = email

    message.set_content(
        f"""
Hello,

Your SkillMirror AI password reset code is:

{otp}

This code is valid for 15 minutes.

If you did not request a password reset, please ignore this email.

Regards,
SkillMirror AI
"""
    )

    try:

        with smtplib.SMTP(
            smtp_host,
            smtp_port,
            timeout=20
        ) as server:

            server.starttls()

            server.login(
                smtp_username,
                smtp_password
            )

            server.send_message(message)

        return True

    except Exception as e:

        print("Email sending failed:", e)

        return False


# ======================================================
# SEND RESET CODE
# ======================================================

@app.route("/api/send-reset-code", methods=["POST"])
def send_reset_code():

    data = request.get_json(silent=True) or {}

    contact = data.get("contact", "").strip()

    if not contact:

        return jsonify({
            "success": False,
            "message": "Please enter your email or mobile number."
        }), 400

    # --------------------------------------------------
    # CHECK EXISTING OTP / 60 SECOND RESEND COOLDOWN
    # --------------------------------------------------

    existing = reset_codes.get(contact)

    if existing:

        seconds_since_last = (
            datetime.now() - existing["sent_at"]
        ).total_seconds()

        if seconds_since_last < 60:

            remaining = 60 - int(seconds_since_last)

            return jsonify({
                "success": False,
                "message": (
                    f"Please wait {remaining} seconds "
                    "before requesting another code."
                ),
                "retry_after": remaining
            }), 429

    # --------------------------------------------------
    # GENERATE 6 DIGIT OTP
    # --------------------------------------------------

    otp = str(random.randint(100000, 999999))

    now = datetime.now()

    expires_at = now + timedelta(minutes=15)

    # --------------------------------------------------
    # SAVE OTP
    # --------------------------------------------------

    reset_codes[contact] = {
        "code": otp,
        "sent_at": now,
        "expires_at": expires_at,
        "attempts": 0
    }

    # --------------------------------------------------
    # EMAIL
    # --------------------------------------------------

    is_email = "@" in contact

    if is_email:

        sent = send_email_otp(
            contact,
            otp
        )

        if not sent:

            reset_codes.pop(contact, None)

            return jsonify({
                "success": False,
                "message": (
                    "Email could not be sent. "
                    "Please check your email settings."
                )
            }), 500

    else:

        # ------------------------------------------------
        # SMS SETUP
        # ------------------------------------------------
        #
        # SMS delivery requires Twilio credentials.
        # If SMS credentials are not configured,
        # return a clear message instead of showing
        # the OTP on the screen.
        # ------------------------------------------------

        twilio_sid = os.getenv(
            "TWILIO_ACCOUNT_SID"
        )

        twilio_token = os.getenv(
            "TWILIO_AUTH_TOKEN"
        )

        twilio_from = os.getenv(
            "TWILIO_FROM_NUMBER"
        )

        if not all([
            twilio_sid,
            twilio_token,
            twilio_from
        ]):

            reset_codes.pop(contact, None)

            return jsonify({
                "success": False,
                "message": (
                    "SMS service is not configured yet. "
                    "Please use your registered email "
                    "or configure SMS settings."
                )
            }), 500

        try:

            from twilio.rest import Client as TwilioClient

            twilio_client = TwilioClient(
                twilio_sid,
                twilio_token
            )

            twilio_client.messages.create(
                body=(
                    "Your SkillMirror AI password "
                    f"reset code is {otp}. "
                    "It is valid for 15 minutes."
                ),
                from_=twilio_from,
                to=contact
            )

        except Exception as e:

            print(
                "SMS sending failed:",
                e
            )

            reset_codes.pop(contact, None)

            return jsonify({
                "success": False,
                "message": (
                    "SMS could not be sent. "
                    "Please check your mobile number "
                    "or SMS settings."
                )
            }), 500

    # --------------------------------------------------
    # SUCCESS
    # --------------------------------------------------

    return jsonify({
        "success": True,
        "message": (
            "Reset code sent successfully. "
            "It should arrive within 60 seconds. "
            "The code is valid for 15 minutes."
        ),
        "expires_in": 900,
        "resend_after": 60
    })


# ======================================================
# RESET PASSWORD
# ======================================================

@app.route("/api/reset-password", methods=["POST"])
def reset_password():

    data = request.get_json(silent=True) or {}

    contact = data.get("contact", "").strip()
    code = data.get("code", "").strip()
    new_password = data.get("newPassword", "")

    if not contact:

        return jsonify({
            "success": False,
            "message": "Please enter your email or mobile number."
        }), 400

    if not code:

        return jsonify({
            "success": False,
            "message": "Please enter the reset code."
        }), 400

    if not new_password:

        return jsonify({
            "success": False,
            "message": "Please enter a new password."
        }), 400

    if len(new_password) < 6:

        return jsonify({
            "success": False,
            "message": (
                "Password must be at least 6 characters."
            )
        }), 400

    # --------------------------------------------------
    # FIND OTP
    # --------------------------------------------------

    existing = reset_codes.get(contact)

    if not existing:

        return jsonify({
            "success": False,
            "message": (
                "No active reset code found. "
                "Please request a new code."
            )
        }), 400

    # --------------------------------------------------
    # CHECK EXPIRY
    # --------------------------------------------------

    if datetime.now() > existing["expires_at"]:

        reset_codes.pop(contact, None)

        return jsonify({
            "success": False,
            "message": (
                "This reset code has expired. "
                "Please request a new code."
            )
        }), 400

    # --------------------------------------------------
    # CHECK ATTEMPTS
    # --------------------------------------------------

    if existing["attempts"] >= 5:

        reset_codes.pop(contact, None)

        return jsonify({
            "success": False,
            "message": (
                "Too many incorrect attempts. "
                "Please request a new code."
            )
        }), 429

    # --------------------------------------------------
    # VERIFY OTP
    # --------------------------------------------------

    if code != existing["code"]:

        existing["attempts"] += 1

        remaining_attempts = (
            5 - existing["attempts"]
        )

        return jsonify({
            "success": False,
            "message": (
                "Incorrect reset code. "
                f"{remaining_attempts} attempts remaining."
            )
        }), 400

    # --------------------------------------------------
    # OTP VERIFIED
    # --------------------------------------------------

    reset_codes.pop(contact, None)

    return jsonify({
        "success": True,
        "message": (
            "Reset code verified successfully. "
            "Your new password can now be saved."
        )
    })


# ======================================================
# RUN APP
# ======================================================

if __name__ == "__main__":

    app.run(
        debug=True
    )