// ======================================================
// SKILLMIRROR AI - MAIN SCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // ELEMENTS
    // ==================================================

    const loginScreen = document.getElementById("loginScreen");
    const signupScreen = document.getElementById("signupScreen");
    const forgotScreen = document.getElementById("forgotScreen");
    const goalScreen = document.getElementById("goalScreen");
    const home = document.getElementById("home");

    const userName = document.getElementById("userName");
    const userPassword = document.getElementById("userPassword");
    const loginBtn = document.getElementById("loginBtn");
    const loginMessage = document.getElementById("loginMessage");
    const rememberMe = document.getElementById("rememberMe");

    const createAccountBtn =
        document.getElementById("createAccountBtn");

    const signupBtn =
        document.getElementById("signupBtn");

    const signupMessage =
        document.getElementById("signupMessage");

    const firstName =
        document.getElementById("firstName");

    const lastName =
        document.getElementById("lastName");

    const signupEmail =
        document.getElementById("signupEmail");

    const mobileNumber =
        document.getElementById("mobileNumber");

    const collegeName =
        document.getElementById("collegeName");

    const gender =
        document.getElementById("gender");

    const signupPassword =
        document.getElementById("signupPassword");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const termsCheckbox =
        document.getElementById("termsCheckbox");

    const backToLoginFromSignup =
        document.getElementById(
            "backToLoginFromSignup"
        );

    const forgotPasswordBtn =
        document.getElementById(
            "forgotPasswordBtn"
        );

    const resetContact =
        document.getElementById(
            "resetContact"
        );

    const sendResetCodeBtn =
        document.getElementById(
            "sendResetCodeBtn"
        );

    const resetForm =
        document.getElementById(
            "resetForm"
        );

    const resetCode =
        document.getElementById(
            "resetCode"
        );

    const newPassword =
        document.getElementById(
            "newPassword"
        );

    const newConfirmPassword =
        document.getElementById(
            "newConfirmPassword"
        );

    const resetPasswordBtn =
        document.getElementById(
            "resetPasswordBtn"
        );

    const forgotMessage =
        document.getElementById(
            "forgotMessage"
        );

    const backToLoginFromForgot =
        document.getElementById(
            "backToLoginFromForgot"
        );

    const goalCards =
        document.querySelectorAll(
            ".goal-card"
        );

    const continueGoalBtn =
        document.getElementById(
            "continueGoalBtn"
        );

    const aiChooseBtn =
        document.getElementById(
            "aiChooseBtn"
        );

    const selectedGoalText =
        document.getElementById(
            "selectedGoalText"
        );

    const roadmapScreen =
        document.getElementById(
            "roadmapScreen"
        );

    const performanceScreen =
        document.getElementById(
            "performanceScreen"
        );

    const menuPanel =
        document.getElementById(
            "menuPanel"
        );

    const menuOverlay =
        document.getElementById(
            "menuOverlay"
        );

    const changeGoalBtn =
        document.getElementById(
            "changeGoalBtn"
        );

    const roadmapGoalTitle =
        document.getElementById(
            "roadmapGoalTitle"
        );

    const homeRoadmap =
        document.getElementById(
            "homeRoadmap"
        );

    const fullRoadmap =
        document.getElementById(
            "fullRoadmap"
        );
        console.log("FULL ROADMAP ELEMENT:", fullRoadmap);
console.log("GENERATE ROADMAP:", typeof generateRoadmap);


    // ==================================================
    // AI CLASS ELEMENTS
    // ==================================================

    const aiClassScreen =
        document.getElementById(
            "aiClassScreen"
        );

    const backFromAIClass =
        document.getElementById(
            "backFromAIClass"
        );

    const aiClassTopic =
        document.getElementById(
            "aiClassTopic"
        );

    const aiClassSubtitle =
        document.getElementById(
            "aiClassSubtitle"
        );

    const aiClassProgressFill =
        document.getElementById(
            "aiClassProgressFill"
        );

    const aiClassProgressText =
        document.getElementById(
            "aiClassProgressText"
        );

    const teacherSpeaking =
        document.getElementById(
            "teacherSpeaking"
        );

    const boardTitle =
        document.getElementById(
            "boardTitle"
        );

    const boardText =
        document.getElementById(
            "boardText"
        );

    const boardExample =
        document.getElementById(
            "boardExample"
        );

    const classDoubtInput =
        document.getElementById(
            "classDoubtInput"
        );

    const classAskBtn =
        document.getElementById(
            "classAskBtn"
        );

    const classTeacherResponse =
        document.getElementById(
            "classTeacherResponse"
        );

    const askQuestionQuickBtn =
        document.getElementById(
            "askQuestionQuickBtn"
        );

    const explainAgainBtn =
        document.getElementById(
            "explainAgainBtn"
        );

    const exampleBtn =
        document.getElementById(
            "exampleBtn"
        );

    const doubtBtn =
        document.getElementById(
            "doubtBtn"
        );

    const classQuestionText =
        document.getElementById(
            "classQuestionText"
        );

    const answerOptions =
        document.querySelectorAll(
            ".answer-option"
        );

    const submitClassAnswer =
        document.getElementById(
            "submitClassAnswer"
        );

    const classQuestionFeedback =
        document.getElementById(
            "classQuestionFeedback"
        );

    const classVoiceBtn =
        document.getElementById(
            "classVoiceBtn"
        );

    const classPauseBtn =
        document.getElementById(
            "classPauseBtn"
        );

    const classContinueBtn =
        document.getElementById(
            "classContinueBtn"
        );

    const classCompleteBox =
        document.getElementById(
            "classCompleteBox"
        );

    const classScore =
        document.getElementById(
            "classScore"
        );

    const nextClassBtn =
        document.getElementById(
            "nextClassBtn"
        );
const nextLessonBtn =
    document.getElementById(
        "nextLessonBtn"
    );
    if (nextLessonBtn) {

    nextLessonBtn.addEventListener(
        "click",
        () => {

            const courseData =
                lessonLibrary[currentClassCourse];

            if (
                !courseData ||
                !courseData.lessons
            ) {
                return;
            }

            if (
                currentLessonIndex <
                courseData.lessons.length - 1
            ) {

            
                loadClassLesson();

                startClassFromBeginning();
if (nextLessonBtn) {
    nextLessonBtn.style.display = "none";
}
            } else {

                const courses =
                    careerCourses[selectedGoal] ||
                    careerCourses["Not Sure Yet"];

                const currentModuleIndex =
                    courses.indexOf(
                        currentClassCourse
                    );

                if (
                    currentModuleIndex <
                    courses.length - 1
                ) {

                    const nextModule =
                        courses[
                            currentModuleIndex + 1
                        ];

                    openAIClass(nextModule);

                } else {

                    alert(
                        "🎉 Congratulations! You completed your entire roadmap."
                    );
                }
            }
        }
    );
}

    // ==================================================
    // CAREER ROADMAP DATA
    // ==================================================

    const careerCourses = {

        "AI / ML Engineer": [
            "Python Fundamentals",
            "Mathematics for AI",
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Generative AI",
            "AI Projects"
        ],

        "Software Developer": [
            "Programming Fundamentals",
            "Data Structures",
            "Algorithms",
            "Object Oriented Programming",
            "Database Fundamentals",
            "APIs",
            "Software Development",
            "Real World Projects"
        ],

        "Full Stack Developer": [
            "HTML & CSS",
            "JavaScript",
            "Frontend Development",
            "React",
            "Backend Development",
            "Databases",
            "APIs & Authentication",
            "Full Stack Project"
        ],

        "Data Analyst": [
            "Excel",
            "SQL",
            "Statistics",
            "Python for Data Analysis",
            "Pandas",
            "Data Visualization",
            "Power BI",
            "Analytics Project"
        ],

        "Cybersecurity Specialist": [
            "Cybersecurity Basics",
            "Networking",
            "Linux",
            "Ethical Hacking",
            "Web Security",
            "Cryptography",
            "Digital Forensics",
            "Security Project"
        ],

        "Cloud Engineer": [
            "Cloud Fundamentals",
            "Linux",
            "Networking",
            "AWS Basics",
            "Azure Basics",
            "Cloud Security",
            "DevOps",
            "Cloud Project"
        ],

        "App Developer": [
            "Programming Basics",
            "UI Design",
            "Android Development",
            "Flutter",
            "APIs",
            "Databases",
            "Authentication",
            "Mobile App Project"
        ],

        "UI/UX Designer": [
            "Design Fundamentals",
            "Color & Typography",
            "User Research",
            "Wireframing",
            "Figma",
            "Prototyping",
            "Usability Testing",
            "UX Portfolio"
        ],

        "Digital Marketing Specialist": [
            "Marketing Fundamentals",
            "Content Marketing",
            "SEO",
            "Social Media",
            "Email Marketing",
            "Google Ads",
            "Analytics",
            "Marketing Campaign"
        ],

        "Data Scientist": [
            "Python",
            "Statistics",
            "Probability",
            "SQL",
            "Pandas & NumPy",
            "Machine Learning",
            "Data Visualization",
            "Data Science Project"
        ],

        "DevOps Engineer": [
            "Linux",
            "Networking",
            "Git & GitHub",
            "Docker",
            "CI/CD",
            "Cloud Computing",
            "Kubernetes",
            "DevOps Project"
        ],

        "Database Management": [
            "Database Fundamentals",
            "SQL Basics",
            "Relational Databases",
            "Database Design",
            "Normalization",
            "MySQL",
            "Advanced SQL",
            "Database Project"
        ],

        "Tech Entrepreneur": [
            "Problem Identification",
            "Idea Validation",
            "Product Design",
            "MVP Development",
            "Business Model",
            "Marketing",
            "Startup Finance",
            "Launch Strategy"
        ],

        "Business & Management": [
            "Business Fundamentals",
            "Communication",
            "Leadership",
            "Marketing",
            "Finance Basics",
            "Project Management",
            "Strategy",
            "Business Project"
        ],

        "Not Sure Yet": [
            "Digital Skills",
            "Programming Basics",
            "Communication",
            "Problem Solving",
            "AI Fundamentals",
            "Career Exploration",
            "Mini Projects",
            "Choose Your Career"
        ]
    };


    // ==================================================
    // AI CLASS LESSON DATA
    // ==================================================

    const lessonLibrary = {

    "Python Fundamentals": {
        title: "Python Fundamentals",
        subtitle: "Learn the building blocks of Python.",
        lessons: [
            {
                title: "Introduction to Python",
                text: "Python is a high-level, beginner-friendly programming language used in web development, automation, data science and AI.",
                example: "Example: print('Hello World') displays Hello World on the screen.",
                question: "What is Python?",
                options: [
                    "A programming language",
                    "An operating system",
                    "A database",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Variables & Data Types",
                text: "A variable stores data that a program can use later. Common Python data types include integers, floats, strings and booleans.",
                example: "Example: age = 19 stores the number 19 in the variable age.",
                question: "What is the purpose of a variable?",
                options: [
                    "To store data",
                    "To delete files",
                    "To connect Wi-Fi",
                    "To design a website"
                ],
                answer: 0
            },
            {
                title: "Operators",
                text: "Operators are symbols used to perform calculations and comparisons.",
                example: "Example: 10 + 5 gives 15.",
                question: "Which symbol is used for addition?",
                options: ["+", "-", "*", "/"],
                answer: 0
            },
            {
                title: "Conditional Statements",
                text: "Conditional statements allow a program to make decisions based on conditions.",
                example: "Example: if age >= 18: checks whether age is at least 18.",
                question: "Which keyword is used for a condition in Python?",
                options: ["if", "loop", "check", "condition"],
                answer: 0
            },
            {
                title: "Loops",
                text: "Loops repeat a block of code multiple times. Python commonly uses for and while loops.",
                example: "Example: a for loop can print numbers from 1 to 5.",
                question: "Why are loops used?",
                options: [
                    "To repeat instructions",
                    "To delete variables",
                    "To create hardware",
                    "To open Wi-Fi"
                ],
                answer: 0
            },
            {
                title: "Functions",
                text: "A function is a reusable block of code designed to perform a particular task.",
                example: "Example: def add(a, b): creates a function named add.",
                question: "Why are functions useful?",
                options: [
                    "They allow code reuse",
                    "They increase screen size",
                    "They replace the operating system",
                    "They store electricity"
                ],
                answer: 0
            },
            {
                title: "Lists, Tuples & Sets",
                text: "Python provides collections such as lists, tuples and sets for storing multiple values.",
                example: "Example: numbers = [10, 20, 30] creates a list.",
                question: "Which collection uses square brackets?",
                options: ["List", "Tuple", "Set", "Dictionary"],
                answer: 0
            },
            {
                title: "Dictionaries",
                text: "A dictionary stores data using key-value pairs.",
                example: "Example: student = {'name': 'Isha', 'age': 19}.",
                question: "How does a Python dictionary store information?",
                options: [
                    "Key-value pairs",
                    "Only numbers",
                    "Only images",
                    "Only files"
                ],
                answer: 0
            },
            {
                title: "File Handling",
                text: "Python can create, read, write and update files using built-in file handling functions.",
                example: "Example: open('data.txt', 'r') opens a file for reading.",
                question: "Which function is commonly used to open a file?",
                options: ["open()", "file()", "read()", "load()"],
                answer: 0
            },
            {
                title: "Exception Handling",
                text: "Exception handling allows programs to handle errors without suddenly stopping.",
                example: "Example: try and except can handle an error safely.",
                question: "Which keyword handles an exception?",
                options: ["except", "error", "catchError", "handle"],
                answer: 0
            }
        ]
    },

    "Mathematics for AI": {
        title: "Mathematics for AI",
        subtitle: "Build the mathematical foundation needed for AI.",
        lessons: [
            {
                title: "Algebra Basics",
                text: "Algebra uses variables, numbers and mathematical operations to represent relationships.",
                example: "Example: x + 5 = 10 gives x = 5.",
                question: "What does a variable represent?",
                options: [
                    "An unknown or changing value",
                    "Only text",
                    "A computer",
                    "A file"
                ],
                answer: 0
            },
            {
                title: "Functions",
                text: "A mathematical function maps input values to output values.",
                example: "Example: f(x) = 2x produces 10 when x = 5.",
                question: "What does a function map?",
                options: [
                    "Inputs to outputs",
                    "Files to folders",
                    "Screens to keyboards",
                    "Users to passwords"
                ],
                answer: 0
            },
            {
                title: "Vectors",
                text: "A vector is an ordered collection of numbers and is widely used to represent features in AI.",
                example: "Example: [2, 5, 8] can represent three numerical features.",
                question: "What can a vector represent?",
                options: [
                    "A collection of numerical values",
                    "Only a paragraph",
                    "Only an image file",
                    "A computer program"
                ],
                answer: 0
            },
            {
                title: "Matrices",
                text: "A matrix is a rectangular arrangement of numbers organized into rows and columns.",
                example: "Example: a 3 × 3 matrix has 3 rows and 3 columns.",
                question: "How are matrices organized?",
                options: [
                    "Rows and columns",
                    "Only circles",
                    "Only files",
                    "Only words"
                ],
                answer: 0
            },
            {
                title: "Probability Basics",
                text: "Probability measures how likely an event is to occur.",
                example: "Example: the probability of getting heads from a fair coin is 0.5.",
                question: "What does probability measure?",
                options: [
                    "Likelihood of an event",
                    "Computer speed",
                    "Storage size",
                    "Screen resolution"
                ],
                answer: 0
            },
            {
                title: "Statistics Basics",
                text: "Statistics helps us collect, summarize and understand data.",
                example: "Example: the mean is calculated by adding values and dividing by their count.",
                question: "What does statistics help us understand?",
                options: [
                    "Data",
                    "Only hardware",
                    "Only networks",
                    "Only websites"
                ],
                answer: 0
            },
            {
                title: "Mean, Median & Mode",
                text: "Mean, median and mode are common ways to describe the center of a dataset.",
                example: "For 2, 4, 4, 6, 9, the mode is 4.",
                question: "Which measure represents the most frequent value?",
                options: ["Mode", "Mean", "Median", "Range"],
                answer: 0
            },
            {
                title: "Correlation",
                text: "Correlation measures the relationship between two variables.",
                example: "Example: study time and exam scores may show positive correlation.",
                question: "What does correlation describe?",
                options: [
                    "Relationship between variables",
                    "Computer memory",
                    "File size",
                    "Internet speed"
                ],
                answer: 0
            }
        ]
    },

    "Machine Learning": {
        title: "Machine Learning",
        subtitle: "Learn how machines learn patterns from data.",
        lessons: [
            {
                title: "What is Machine Learning?",
                text: "Machine learning enables computers to learn patterns from data and make predictions or decisions.",
                example: "Example: a model can learn from previous house prices and predict a new price.",
                question: "What does machine learning learn from?",
                options: ["Data", "Electricity", "Keyboard input", "Printers"],
                answer: 0
            },
            {
                title: "Types of Machine Learning",
                text: "The major types include supervised learning, unsupervised learning and reinforcement learning.",
                example: "Example: classification with labelled data is supervised learning.",
                question: "Which is a type of machine learning?",
                options: [
                    "Supervised learning",
                    "Screen learning",
                    "Cable learning",
                    "Battery learning"
                ],
                answer: 0
            },
            {
                title: "Dataset & Features",
                text: "A dataset contains examples used for analysis or model training. Features are input variables used by a model.",
                example: "Example: house size and location can be features for price prediction.",
                question: "What is a feature?",
                options: [
                    "An input variable",
                    "A monitor",
                    "A password",
                    "A folder"
                ],
                answer: 0
            },
            {
                title: "Data Preprocessing",
                text: "Data preprocessing prepares raw data by cleaning missing values, handling categories and scaling numerical features.",
                example: "Example: replacing missing values before training a model.",
                question: "Why is preprocessing important?",
                options: [
                    "To prepare data for learning",
                    "To increase screen brightness",
                    "To install Windows",
                    "To create a keyboard"
                ],
                answer: 0
            },
            {
                title: "Train & Test Split",
                text: "Data is commonly divided into training and testing sets so model performance can be evaluated on unseen data.",
                example: "Example: training data teaches the model while test data evaluates it.",
                question: "Why do we use test data?",
                options: [
                    "To evaluate the model",
                    "To write emails",
                    "To store passwords",
                    "To design UI"
                ],
                answer: 0
            },
            {
                title: "Linear Regression",
                text: "Linear regression predicts a numerical value using relationships between variables.",
                example: "Example: predicting house price from area.",
                question: "What does linear regression commonly predict?",
                options: [
                    "Numerical values",
                    "Only images",
                    "Only text",
                    "Only passwords"
                ],
                answer: 0
            },
            {
                title: "Logistic Regression",
                text: "Logistic regression is commonly used for classification problems.",
                example: "Example: predicting whether an email is spam or not spam.",
                question: "What is logistic regression commonly used for?",
                options: [
                    "Classification",
                    "Image editing",
                    "File compression",
                    "Video playback"
                ],
                answer: 0
            },
            {
                title: "Decision Trees",
                text: "A decision tree makes predictions by following a sequence of decisions based on feature values.",
                example: "Example: deciding whether a customer is likely to buy a product.",
                question: "What does a decision tree use?",
                options: [
                    "A sequence of decisions",
                    "Only random numbers",
                    "Only images",
                    "Only passwords"
                ],
                answer: 0
            },
            {
                title: "Model Evaluation",
                text: "Model evaluation measures how well a machine learning model performs using suitable metrics.",
                example: "Accuracy can measure the percentage of correct classifications.",
                question: "Why do we evaluate models?",
                options: [
                    "To measure performance",
                    "To change the keyboard",
                    "To increase storage",
                    "To open websites"
                ],
                answer: 0
            },
            {
                title: "Overfitting & Underfitting",
                text: "Overfitting happens when a model learns training data too closely, while underfitting means the model is too simple.",
                example: "A highly complex model may perform well on training data but poorly on unseen data.",
                question: "What is overfitting?",
                options: [
                    "Learning training data too closely",
                    "Deleting training data",
                    "Increasing RAM",
                    "Changing the screen"
                ],
                answer: 0
            }
        ]
    },

    "Deep Learning": {
        title: "Deep Learning",
        subtitle: "Explore neural networks and modern deep learning.",
        lessons: [
            {
                title: "Introduction to Neural Networks",
                text: "Neural networks are computing models inspired by interconnected neurons and are widely used in AI.",
                example: "Neural networks can learn patterns from images, text and numerical data.",
                question: "What is central to deep learning?",
                options: ["Neural networks", "Spreadsheets", "Printers", "Browsers"],
                answer: 0
            },
            {
                title: "Neurons & Layers",
                text: "Neural networks contain interconnected neurons arranged into layers such as input, hidden and output layers.",
                example: "An image classification network receives image data as input.",
                question: "What are neural networks organized into?",
                options: ["Layers", "Folders", "Files", "Browsers"],
                answer: 0
            },
            {
                title: "Activation Functions",
                text: "Activation functions introduce non-linearity into neural networks, allowing them to learn complex patterns.",
                example: "ReLU is commonly used in hidden layers.",
                question: "Why are activation functions used?",
                options: [
                    "To model complex patterns",
                    "To store files",
                    "To connect monitors",
                    "To format documents"
                ],
                answer: 0
            },
            {
                title: "Forward Propagation",
                text: "Forward propagation passes input data through the network to produce an output.",
                example: "Image pixels can pass through network layers to produce a class prediction.",
                question: "What happens during forward propagation?",
                options: [
                    "Input moves through the network",
                    "Files are deleted",
                    "RAM is increased",
                    "Wi-Fi is connected"
                ],
                answer: 0
            },
            {
                title: "Backpropagation",
                text: "Backpropagation calculates how model parameters contributed to error and helps update them during training.",
                example: "The model adjusts weights after calculating prediction error.",
                question: "What does backpropagation help update?",
                options: ["Model weights", "Screen size", "Keyboard keys", "File names"],
                answer: 0
            },
            {
                title: "CNN Basics",
                text: "Convolutional Neural Networks are especially useful for image-related tasks.",
                example: "CNNs can identify visual patterns such as edges and shapes.",
                question: "CNNs are especially useful for?",
                options: [
                    "Image-related tasks",
                    "Charging batteries",
                    "Typing documents",
                    "Sending emails"
                ],
                answer: 0
            },
            {
                title: "RNN Basics",
                text: "Recurrent Neural Networks are designed to process sequential information.",
                example: "Sequences of words can be processed using recurrent architectures.",
                question: "What type of information can RNNs process?",
                options: ["Sequential data", "Only images", "Only files", "Only hardware"],
                answer: 0
            },
            {
                title: "Deep Learning Project",
                text: "A project combines data preparation, model design, training and evaluation into one practical workflow.",
                example: "Build an image classifier using a small labelled dataset.",
                question: "What is an important part of a deep learning project?",
                options: [
                    "Model evaluation",
                    "Changing the monitor",
                    "Formatting a document",
                    "Installing a printer"
                ],
                answer: 0
            }
        ]
    },

    "Natural Language Processing": {
        title: "Natural Language Processing",
        subtitle: "Teach computers to work with human language.",
        lessons: [
            {
                title: "Introduction to NLP",
                text: "NLP enables computers to process, understand and generate human language.",
                example: "Chatbots use NLP to understand user messages.",
                question: "What does NLP work with?",
                options: ["Human language", "Computer cables", "Batteries", "Monitors"],
                answer: 0
            },
            {
                title: "Text Preprocessing",
                text: "Text preprocessing cleans and prepares language data for analysis or machine learning.",
                example: "Removing unwanted symbols can simplify text processing.",
                question: "Why preprocess text?",
                options: [
                    "To prepare text data",
                    "To increase RAM",
                    "To repair screens",
                    "To charge phones"
                ],
                answer: 0
            },
            {
                title: "Tokenization",
                text: "Tokenization divides text into smaller units such as words or subwords.",
                example: "The sentence 'AI is useful' can be split into individual tokens.",
                question: "What does tokenization do?",
                options: [
                    "Splits text into tokens",
                    "Deletes computers",
                    "Creates hardware",
                    "Changes screen size"
                ],
                answer: 0
            },
            {
                title: "Word Embeddings",
                text: "Word embeddings represent words as numerical vectors that capture useful relationships.",
                example: "Words with similar meanings can have similar vector representations.",
                question: "How are words represented by embeddings?",
                options: ["Numerical vectors", "Images only", "Audio only", "Passwords"],
                answer: 0
            },
            {
                title: "Sentiment Analysis",
                text: "Sentiment analysis identifies the emotional or opinion-based tone of text.",
                example: "A review can be classified as positive, negative or neutral.",
                question: "What does sentiment analysis identify?",
                options: [
                    "Text sentiment",
                    "Screen brightness",
                    "Internet speed",
                    "Storage size"
                ],
                answer: 0
            },
            {
                title: "Text Classification",
                text: "Text classification assigns text to predefined categories.",
                example: "Emails can be classified as spam or not spam.",
                question: "What does text classification do?",
                options: [
                    "Assigns categories to text",
                    "Creates images",
                    "Changes hardware",
                    "Compresses batteries"
                ],
                answer: 0
            },
            {
                title: "Transformers",
                text: "Transformers are neural network architectures that use attention mechanisms and are fundamental to many modern language models.",
                example: "Transformer architectures power many modern language AI systems.",
                question: "What is an important mechanism in transformers?",
                options: ["Attention", "Bluetooth", "GPS", "USB"],
                answer: 0
            },
            {
                title: "LLM Basics",
                text: "Large Language Models are trained on large amounts of text to understand and generate language.",
                example: "An LLM can generate an answer based on a user prompt.",
                question: "What does LLM stand for?",
                options: [
                    "Large Language Model",
                    "Local Learning Machine",
                    "Long Logic Memory",
                    "Language Link Module"
                ],
                answer: 0
            }
        ]
    },

    "Computer Vision": {
        title: "Computer Vision",
        subtitle: "Help computers understand images and visual information.",
        lessons: [
            {
                title: "Introduction to Computer Vision",
                text: "Computer vision enables computers to process and interpret images and videos.",
                example: "A vision system can identify objects in a photograph.",
                question: "What does computer vision analyze?",
                options: [
                    "Visual information",
                    "Only passwords",
                    "Only sound",
                    "Only keyboards"
                ],
                answer: 0
            },
            {
                title: "Images & Pixels",
                text: "Digital images are made up of pixels, with each pixel containing numerical information.",
                example: "A grayscale pixel can be represented by an intensity value.",
                question: "What is an image made of?",
                options: ["Pixels", "Folders", "Passwords", "Web pages"],
                answer: 0
            },
            {
                title: "Image Processing",
                text: "Image processing applies operations that improve, transform or analyze images.",
                example: "Resizing an image is a basic image-processing operation.",
                question: "What is image processing used for?",
                options: [
                    "Transforming or analyzing images",
                    "Charging devices",
                    "Creating passwords",
                    "Sending emails"
                ],
                answer: 0
            },
            {
                title: "OpenCV Basics",
                text: "OpenCV is a popular computer vision library used for image and video processing.",
                example: "OpenCV can read an image and apply transformations.",
                question: "What is OpenCV?",
                options: [
                    "A computer vision library",
                    "A database",
                    "An operating system",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Image Classification",
                text: "Image classification assigns an image to one or more predefined categories.",
                example: "A model can classify an image as cat or dog.",
                question: "What does image classification do?",
                options: [
                    "Assigns categories to images",
                    "Deletes images",
                    "Creates keyboards",
                    "Stores passwords"
                ],
                answer: 0
            },
            {
                title: "Object Detection",
                text: "Object detection identifies objects and their locations within an image.",
                example: "A traffic system can detect cars and pedestrians.",
                question: "What does object detection identify?",
                options: [
                    "Objects and their locations",
                    "Only file names",
                    "Only audio",
                    "Only passwords"
                ],
                answer: 0
            }
        ]
    },

    "Generative AI": {
        title: "Generative AI",
        subtitle: "Learn how AI creates new content.",
        lessons: [
            {
                title: "What is Generative AI?",
                text: "Generative AI creates new content such as text, images, audio or code based on learned patterns.",
                example: "A language model can generate a paragraph from a prompt.",
                question: "What can generative AI create?",
                options: ["New content", "Only electricity", "Only cables", "Only screens"],
                answer: 0
            },
            {
                title: "Generative Models",
                text: "Generative models learn patterns in data and use those patterns to generate new outputs.",
                example: "A model trained on text can generate new text.",
                question: "What do generative models learn?",
                options: [
                    "Patterns in data",
                    "Keyboard layouts",
                    "Battery levels",
                    "Screen brightness"
                ],
                answer: 0
            },
            {
                title: "Prompt Engineering",
                text: "Prompt engineering involves writing clear instructions that guide an AI model toward a useful response.",
                example: "Adding context and expected output format can make a prompt clearer.",
                question: "What is prompt engineering?",
                options: [
                    "Designing effective AI instructions",
                    "Programming a keyboard",
                    "Repairing a laptop",
                    "Creating a database"
                ],
                answer: 0
            },
            {
                title: "Large Language Models",
                text: "Large Language Models process and generate natural language using patterns learned during training.",
                example: "An LLM can summarize text or answer questions.",
                question: "What do LLMs primarily work with?",
                options: [
                    "Language",
                    "Electricity",
                    "Cables",
                    "Printers"
                ],
                answer: 0
            },
            {
                title: "Embeddings",
                text: "Embeddings convert information such as text into numerical vectors that capture useful relationships.",
                example: "Text embeddings can be compared to find semantically similar content.",
                question: "What are embeddings?",
                options: [
                    "Numerical representations",
                    "Physical cables",
                    "Passwords",
                    "Images only"
                ],
                answer: 0
            },
            {
                title: "RAG Basics",
                text: "Retrieval-Augmented Generation combines information retrieval with generation so an AI system can use relevant external information.",
                example: "A chatbot can retrieve information from a knowledge base before answering.",
                question: "What does RAG combine?",
                options: [
                    "Retrieval and generation",
                    "Gaming and graphics",
                    "Email and SMS",
                    "Hardware and batteries"
                ],
                answer: 0
            },
            {
                title: "AI Agents Basics",
                text: "AI agents can use tools and follow multi-step processes to accomplish tasks.",
                example: "An agent can retrieve information, reason about it and perform an allowed action.",
                question: "What can an AI agent use?",
                options: [
                    "Tools",
                    "Only images",
                    "Only keyboards",
                    "Only batteries"
                ],
                answer: 0
            },
            {
                title: "Responsible AI",
                text: "Responsible AI considers fairness, privacy, safety, transparency and appropriate use of AI systems.",
                example: "Sensitive information should be handled carefully when building AI applications.",
                question: "Which is important in responsible AI?",
                options: [
                    "Privacy and safety",
                    "Screen size",
                    "Keyboard color",
                    "Speaker volume"
                ],
                answer: 0
            }
        ]
    },

    "Programming Fundamentals": {
        title: "Programming Fundamentals",
        subtitle: "Understand how software is built.",
        lessons: [
            {
                title: "Programming Basics",
                text: "Programming means writing instructions that a computer can execute to solve problems.",
                example: "A program can calculate the total price of products.",
                question: "What is programming?",
                options: [
                    "Writing instructions for computers",
                    "Designing hardware",
                    "Charging a phone",
                    "Creating electricity"
                ],
                answer: 0
            },
            {
                title: "Variables",
                text: "Variables store values that programs can use and modify.",
                example: "score = 90 stores a score value.",
                question: "What do variables store?",
                options: ["Values", "Electricity", "Screens", "Cables"],
                answer: 0
            },
            {
                title: "Conditions",
                text: "Conditions allow programs to make decisions.",
                example: "if marks >= 40 can determine whether a student passed.",
                question: "Why are conditions used?",
                options: [
                    "To make decisions",
                    "To increase RAM",
                    "To connect Wi-Fi",
                    "To print documents"
                ],
                answer: 0
            },
            {
                title: "Loops",
                text: "Loops repeat instructions efficiently.",
                example: "A loop can process every item in a list.",
                question: "What do loops do?",
                options: [
                    "Repeat instructions",
                    "Delete programs",
                    "Create hardware",
                    "Change passwords"
                ],
                answer: 0
            },
            {
                title: "Functions",
                text: "Functions group reusable instructions into named blocks.",
                example: "A calculateTotal() function can calculate an order total.",
                question: "Why use functions?",
                options: [
                    "For reusable code",
                    "For charging laptops",
                    "For changing screens",
                    "For storing electricity"
                ],
                answer: 0
            }
        ]
    },

    "Data Structures": {
        title: "Data Structures",
        subtitle: "Learn how data is organized and accessed.",
        lessons: [
            {
                title: "Arrays",
                text: "Arrays store multiple values in an ordered structure.",
                example: "An array can store marks of several students.",
                question: "What can an array store?",
                options: [
                    "Multiple values",
                    "Only one character",
                    "Only passwords",
                    "Only images"
                ],
                answer: 0
            },
            {
                title: "Linked Lists",
                text: "A linked list consists of nodes connected through references.",
                example: "Each node can contain data and a link to another node.",
                question: "What connects nodes in a linked list?",
                options: [
                    "References",
                    "Screens",
                    "Printers",
                    "Passwords"
                ],
                answer: 0
            },
            {
                title: "Stacks",
                text: "A stack follows the Last In, First Out principle.",
                example: "The last item added to a stack is removed first.",
                question: "What principle does a stack follow?",
                options: [
                    "LIFO",
                    "FIFO",
                    "Random only",
                    "Alphabetical order"
                ],
                answer: 0
            },
            {
                title: "Queues",
                text: "A queue generally follows the First In, First Out principle.",
                example: "People waiting in a line behave like a queue.",
                question: "What principle does a queue follow?",
                options: [
                    "FIFO",
                    "LIFO",
                    "Random order",
                    "Reverse sorting"
                ],
                answer: 0
            },
            {
                title: "Trees",
                text: "Trees organize data in hierarchical structures using nodes and edges.",
                example: "A file-system hierarchy can be represented as a tree.",
                question: "What type of structure is a tree?",
                options: [
                    "Hierarchical",
                    "Flat only",
                    "Circular only",
                    "Random only"
                ],
                answer: 0
            },
            {
                title: "Graphs",
                text: "Graphs represent relationships between entities using vertices and edges.",
                example: "A social network can be represented as a graph.",
                question: "What do graph edges represent?",
                options: [
                    "Relationships",
                    "Passwords",
                    "Screen pixels",
                    "File sizes"
                ],
                answer: 0
            }
        ]
    },

    "Algorithms": {
        title: "Algorithms",
        subtitle: "Learn systematic problem solving.",
        lessons: [
            {
                title: "Algorithm Basics",
                text: "An algorithm is a finite sequence of steps used to solve a problem.",
                example: "A recipe is a simple real-world example of step-by-step instructions.",
                question: "What is an algorithm?",
                options: [
                    "A step-by-step procedure",
                    "A computer screen",
                    "A cable",
                    "A battery"
                ],
                answer: 0
            },
            {
                title: "Big-O Complexity",
                text: "Big-O notation describes how an algorithm's resource usage grows as input size increases.",
                example: "Linear search has O(n) time complexity.",
                question: "What does Big-O describe?",
                options: [
                    "Algorithm growth",
                    "Screen size",
                    "Internet speed",
                    "File color"
                ],
                answer: 0
            },
            {
                title: "Searching",
                text: "Searching algorithms find a particular value within a collection of data.",
                example: "Binary search efficiently searches a sorted collection.",
                question: "What is searching used for?",
                options: [
                    "Finding data",
                    "Deleting hardware",
                    "Charging devices",
                    "Designing screens"
                ],
                answer: 0
            },
            {
                title: "Sorting",
                text: "Sorting algorithms arrange data according to a chosen order.",
                example: "Numbers can be sorted from smallest to largest.",
                question: "What does sorting do?",
                options: [
                    "Arranges data",
                    "Deletes data",
                    "Encrypts hardware",
                    "Creates electricity"
                ],
                answer: 0
            },
            {
                title: "Recursion",
                text: "Recursion occurs when a function calls itself to solve smaller versions of a problem.",
                example: "Factorial can be defined recursively.",
                question: "What happens in recursion?",
                options: [
                    "A function calls itself",
                    "A computer shuts down",
                    "A file is deleted",
                    "A monitor changes"
                ],
                answer: 0
            },
            {
                title: "Dynamic Programming",
                text: "Dynamic programming solves complex problems by breaking them into overlapping subproblems and storing results.",
                example: "Fibonacci numbers can be computed efficiently using dynamic programming.",
                question: "What does dynamic programming often store?",
                options: [
                    "Previously computed results",
                    "Passwords",
                    "Images",
                    "Screen settings"
                ],
                answer: 0
            }
        ]
    },
    "Object Oriented Programming": {
        title: "Object Oriented Programming",
        subtitle: "Learn how software is designed using objects and classes.",
        lessons: [
            {
                title: "Introduction to OOP",
                text: "Object Oriented Programming is a programming approach that organizes software around objects containing data and behavior.",
                example: "Example: A Student object can contain a name, age and methods such as study().",
                question: "What does OOP organize software around?",
                options: [
                    "Objects",
                    "Only files",
                    "Only numbers",
                    "Only screens"
                ],
                answer: 0
            },
            {
                title: "Classes & Objects",
                text: "A class is a blueprint for creating objects, while an object is an instance created from a class.",
                example: "Example: Car can be a class, while a specific car is an object.",
                question: "What is a class?",
                options: [
                    "A blueprint for objects",
                    "A database",
                    "A web browser",
                    "A hardware device"
                ],
                answer: 0
            },
            {
                title: "Encapsulation",
                text: "Encapsulation combines data and methods inside a class and controls how that data is accessed.",
                example: "Example: A bank account can protect its balance and provide methods for deposits and withdrawals.",
                question: "What does encapsulation help with?",
                options: [
                    "Protecting and controlling data",
                    "Increasing screen size",
                    "Connecting Wi-Fi",
                    "Deleting files"
                ],
                answer: 0
            },
            {
                title: "Inheritance",
                text: "Inheritance allows one class to reuse properties and methods from another class.",
                example: "Example: A Dog class can inherit common features from an Animal class.",
                question: "What is a benefit of inheritance?",
                options: [
                    "Code reuse",
                    "Increasing RAM",
                    "Creating electricity",
                    "Changing screen resolution"
                ],
                answer: 0
            },
            {
                title: "Polymorphism",
                text: "Polymorphism allows the same interface or method name to behave differently depending on the object.",
                example: "Example: different classes can implement the same speak() method in different ways.",
                question: "What does polymorphism allow?",
                options: [
                    "Different behavior through a common interface",
                    "Only one type of object",
                    "Deleting classes",
                    "Increasing storage"
                ],
                answer: 0
            },
            {
                title: "Abstraction",
                text: "Abstraction hides unnecessary implementation details and exposes only the important features.",
                example: "Example: A user can drive a car without knowing how every engine component works.",
                question: "What does abstraction hide?",
                options: [
                    "Unnecessary implementation details",
                    "All program data",
                    "The operating system",
                    "The computer screen"
                ],
                answer: 0
            },
            {
                title: "Constructors",
                text: "A constructor is used to initialize an object when it is created.",
                example: "Example: A constructor can assign a student's name and age when a Student object is created.",
                question: "When is a constructor commonly used?",
                options: [
                    "When creating an object",
                    "When deleting a file",
                    "When opening a browser",
                    "When connecting Wi-Fi"
                ],
                answer: 0
            },
            {
                title: "OOP Mini Project",
                text: "A small OOP project combines classes, objects, methods and other OOP concepts into a working program.",
                example: "Example: Build a simple Student Management System using Student and Course classes.",
                question: "What can an OOP project combine?",
                options: [
                    "Classes, objects and methods",
                    "Only images",
                    "Only passwords",
                    "Only web pages"
                ],
                answer: 0
            }
        ]
    },


    "Database Fundamentals": {
        title: "Database Fundamentals",
        subtitle: "Learn how applications store and manage data.",
        lessons: [
            {
                title: "What is a Database?",
                text: "A database is an organized collection of data that can be stored, managed and retrieved efficiently.",
                example: "Example: A college database can store student names, roll numbers and marks.",
                question: "What is a database?",
                options: [
                    "An organized collection of data",
                    "A programming language",
                    "A web browser",
                    "A computer cable"
                ],
                answer: 0
            },
            {
                title: "DBMS",
                text: "A Database Management System is software used to create, store, update and manage databases.",
                example: "MySQL and PostgreSQL are examples of database systems.",
                question: "What does a DBMS manage?",
                options: [
                    "Databases",
                    "Computer screens",
                    "Keyboards",
                    "Internet cables"
                ],
                answer: 0
            },
            {
                title: "Tables & Records",
                text: "Relational databases organize information into tables containing rows and columns.",
                example: "A Student table can contain columns such as ID, Name and Marks.",
                question: "What does a row usually represent?",
                options: [
                    "A record",
                    "A database server",
                    "A programming language",
                    "A password"
                ],
                answer: 0
            },
            {
                title: "Primary Keys",
                text: "A primary key uniquely identifies each record in a database table.",
                example: "A unique student ID can be used as a primary key.",
                question: "What is the purpose of a primary key?",
                options: [
                    "Uniquely identify records",
                    "Store images only",
                    "Connect Wi-Fi",
                    "Create web pages"
                ],
                answer: 0
            },
            {
                title: "Relationships",
                text: "Database relationships connect data between tables.",
                example: "A student table can be connected to a course enrollment table.",
                question: "Why are relationships used?",
                options: [
                    "To connect related data",
                    "To increase screen size",
                    "To create passwords",
                    "To edit videos"
                ],
                answer: 0
            },
            {
                title: "SQL Basics",
                text: "SQL is a language used to interact with relational databases.",
                example: "SELECT * FROM students; retrieves records from a students table.",
                question: "What is SQL used for?",
                options: [
                    "Working with databases",
                    "Designing hardware",
                    "Editing photos",
                    "Creating electricity"
                ],
                answer: 0
            },
            {
                title: "CRUD Operations",
                text: "CRUD represents Create, Read, Update and Delete operations commonly performed on data.",
                example: "An application can create a user, read user details, update them and delete the account.",
                question: "What does CRUD stand for?",
                options: [
                    "Create, Read, Update, Delete",
                    "Copy, Run, Upload, Download",
                    "Create, Remove, Use, Display",
                    "Code, Read, Update, Design"
                ],
                answer: 0
            },
            {
                title: "Database Project",
                text: "A database project combines tables, relationships and SQL operations into a practical application.",
                example: "Build a Student Management Database with student, course and marks tables.",
                question: "What can a database project include?",
                options: [
                    "Tables and SQL operations",
                    "Only images",
                    "Only animations",
                    "Only passwords"
                ],
                answer: 0
            }
        ]
    },


    "APIs": {
        title: "APIs",
        subtitle: "Learn how applications communicate with each other.",
        lessons: [
            {
                title: "What is an API?",
                text: "An API is a set of rules that allows different software applications to communicate and exchange data.",
                example: "Example: A weather app can request weather data from a weather API.",
                question: "What is an API used for?",
                options: [
                    "Communication between software",
                    "Increasing RAM",
                    "Changing screen brightness",
                    "Creating electricity"
                ],
                answer: 0
            },
            {
                title: "API Requests",
                text: "Applications send requests to APIs to ask for data or perform an operation.",
                example: "A mobile app can send a request to retrieve a user's profile.",
                question: "What does an application send to an API?",
                options: [
                    "A request",
                    "A battery",
                    "A monitor",
                    "A keyboard"
                ],
                answer: 0
            },
            {
                title: "HTTP Methods",
                text: "Common HTTP methods include GET, POST, PUT and DELETE for interacting with resources.",
                example: "GET is commonly used to retrieve data.",
                question: "Which method is commonly used to retrieve data?",
                options: ["GET", "POST", "DELETE", "PUT"],
                answer: 0
            },
            {
                title: "JSON",
                text: "JSON is a lightweight data format commonly used to exchange structured information between applications.",
                example: "A user object can be represented as JSON with fields such as name and age.",
                question: "What is JSON commonly used for?",
                options: [
                    "Data exchange",
                    "Screen repair",
                    "Battery charging",
                    "Keyboard design"
                ],
                answer: 0
            },
            {
                title: "API Authentication",
                text: "APIs often use authentication methods such as API keys, tokens or OAuth to control access.",
                example: "A server may require a token before allowing access to protected data.",
                question: "Why is API authentication used?",
                options: [
                    "To control access",
                    "To increase screen size",
                    "To delete databases",
                    "To improve speakers"
                ],
                answer: 0
            },
            {
                title: "API Errors",
                text: "APIs can return status codes and error messages when a request fails or cannot be completed.",
                example: "A 404 response commonly indicates that a requested resource was not found.",
                question: "What can an API return when a request fails?",
                options: [
                    "An error response",
                    "A keyboard",
                    "A battery",
                    "A monitor"
                ],
                answer: 0
            },
            {
                title: "Using APIs in Projects",
                text: "Developers use APIs to connect applications with external services and data sources.",
                example: "A travel application can use a maps API to display locations.",
                question: "Why do developers use APIs?",
                options: [
                    "To connect applications with services",
                    "To increase RAM",
                    "To repair hardware",
                    "To create electricity"
                ],
                answer: 0
            },
            {
                title: "API Mini Project",
                text: "An API project combines requests, responses and data handling into a working application.",
                example: "Build a weather dashboard that retrieves weather information from an API.",
                question: "What can an API project demonstrate?",
                options: [
                    "Requests and responses",
                    "Only animations",
                    "Only hardware",
                    "Only passwords"
                ],
                answer: 0
            }
        ]
    },


    "Software Development": {
        title: "Software Development",
        subtitle: "Understand the process of building reliable software.",
        lessons: [
            {
                title: "Software Development Basics",
                text: "Software development is the process of designing, building, testing and maintaining software applications.",
                example: "A team may develop a college management application through several development stages.",
                question: "What does software development involve?",
                options: [
                    "Building and maintaining software",
                    "Only designing hardware",
                    "Only browsing websites",
                    "Only editing videos"
                ],
                answer: 0
            },
            {
                title: "Software Requirements",
                text: "Requirements describe what a software system should do and what users need from it.",
                example: "A login system may require users to enter a valid email and password.",
                question: "What do requirements describe?",
                options: [
                    "What the software should do",
                    "Screen color only",
                    "Computer weight",
                    "Battery size"
                ],
                answer: 0
            },
            {
                title: "SDLC",
                text: "The Software Development Life Cycle describes common stages involved in developing software.",
                example: "Planning, analysis, design, development, testing and maintenance are common SDLC activities.",
                question: "What does SDLC stand for?",
                options: [
                    "Software Development Life Cycle",
                    "System Data Learning Code",
                    "Software Design Logic Control",
                    "System Development Language Course"
                ],
                answer: 0
            },
            {
                title: "Version Control",
                text: "Version control systems track changes in source code and help developers collaborate safely.",
                example: "Git can be used to track changes in a software project.",
                question: "Why is version control useful?",
                options: [
                    "To track code changes",
                    "To increase RAM",
                    "To repair screens",
                    "To charge devices"
                ],
                answer: 0
            },
            {
                title: "Git & GitHub",
                text: "Git is a distributed version control system, while GitHub is a platform for hosting and collaborating on repositories.",
                example: "Developers can commit changes to Git and push them to GitHub.",
                question: "What is Git mainly used for?",
                options: [
                    "Version control",
                    "Video editing",
                    "Database storage only",
                    "Screen design"
                ],
                answer: 0
            },
            {
                title: "Software Testing",
                text: "Software testing checks whether an application behaves as expected and helps identify defects.",
                example: "A login test can verify that valid credentials allow access.",
                question: "Why is software testing important?",
                options: [
                    "To find defects and verify behavior",
                    "To increase screen size",
                    "To change keyboard keys",
                    "To charge laptops"
                ],
                answer: 0
            },
            {
                title: "Debugging",
                text: "Debugging is the process of finding and fixing errors in software.",
                example: "A developer can inspect an error message and trace the code causing the problem.",
                question: "What is debugging?",
                options: [
                    "Finding and fixing software errors",
                    "Creating hardware",
                    "Installing a printer",
                    "Designing a monitor"
                ],
                answer: 0
            },
            {
                title: "Software Project",
                text: "A software project combines requirements, design, coding, testing and deployment to solve a real problem.",
                example: "Build a simple student attendance management application.",
                question: "What does a software project combine?",
                options: [
                    "Multiple development stages",
                    "Only coding",
                    "Only design",
                    "Only testing"
                ],
                answer: 0
            }
        ]
    },


    "Real World Projects": {
        title: "Real World Projects",
        subtitle: "Turn your programming knowledge into practical projects.",
        lessons: [
            {
                title: "Choosing a Project Idea",
                text: "A good project starts with a clear problem that the application aims to solve.",
                example: "A student task manager can help students organize assignments and deadlines.",
                question: "What should a project start with?",
                options: [
                    "A clear problem",
                    "Random code",
                    "Only animations",
                    "A new keyboard"
                ],
                answer: 0
            },
            {
                title: "Project Requirements",
                text: "Project requirements define the features, users and expected behavior of the application.",
                example: "A task manager may require task creation, editing and deletion.",
                question: "What do project requirements define?",
                options: [
                    "Features and expected behavior",
                    "Laptop weight",
                    "Screen brightness",
                    "Keyboard color"
                ],
                answer: 0
            },
            {
                title: "Project Architecture",
                text: "Software architecture describes how different parts of an application are organized and communicate.",
                example: "A web application may have frontend, backend and database components.",
                question: "What does software architecture describe?",
                options: [
                    "How application parts are organized",
                    "Only the screen color",
                    "Only the keyboard",
                    "Only the computer battery"
                ],
                answer: 0
            },
            {
                title: "Building the MVP",
                text: "An MVP, or Minimum Viable Product, contains the essential features needed to test a project idea.",
                example: "A task manager MVP may include only task creation and completion.",
                question: "What does MVP mean?",
                options: [
                    "Minimum Viable Product",
                    "Maximum Visual Program",
                    "Main Version Platform",
                    "Model Verification Process"
                ],
                answer: 0
            },
            {
                title: "Testing the Project",
                text: "Testing checks whether the project works correctly and handles expected and unexpected situations.",
                example: "Test a login form with valid, invalid and empty inputs.",
                question: "Why should projects be tested?",
                options: [
                    "To verify correct behavior",
                    "To increase RAM",
                    "To change hardware",
                    "To create electricity"
                ],
                answer: 0
            },
            {
                title: "Deployment Basics",
                text: "Deployment makes a software application available for users to access and use.",
                example: "A web application can be deployed to a cloud hosting platform.",
                question: "What is deployment?",
                options: [
                    "Making software available to users",
                    "Deleting source code",
                    "Changing a keyboard",
                    "Installing RAM"
                ],
                answer: 0
            },
            {
                title: "Documentation",
                text: "Documentation explains how a project works, how to install it and how users or developers can use it.",
                example: "A README file can describe project features and setup steps.",
                question: "Why is documentation useful?",
                options: [
                    "To explain the project",
                    "To increase internet speed",
                    "To change screen resolution",
                    "To charge devices"
                ],
                answer: 0
            },
            {
                title: "Portfolio Project",
                text: "A portfolio project demonstrates your technical skills and shows potential employers what you can build.",
                example: "Create a complete application, publish it and explain the technologies used.",
                question: "What is the purpose of a portfolio project?",
                options: [
                    "To demonstrate your skills",
                    "To increase RAM",
                    "To repair hardware",
                    "To change passwords"
                ],
                answer: 0
            }
        ]
    },
        "HTML & CSS": {
        title: "HTML & CSS",
        subtitle: "Build and style modern web pages.",
        lessons: [
            {
                title: "Introduction to HTML",
                text: "HTML stands for HyperText Markup Language. It provides the structure of a web page.",
                example: "Example: <h1>Hello</h1> creates a main heading.",
                question: "What does HTML provide?",
                options: ["Web page structure", "Database storage", "Server hardware", "Internet speed"],
                answer: 0
            },
            {
                title: "HTML Elements",
                text: "HTML elements are building blocks such as headings, paragraphs, links, images and buttons.",
                example: "Example: <p>Hello World</p> creates a paragraph.",
                question: "What are HTML elements?",
                options: ["Building blocks of web pages", "Database tables", "Programming languages", "Servers"],
                answer: 0
            },
            {
                title: "HTML Forms",
                text: "Forms collect information from users through inputs, buttons and other form controls.",
                example: "A login form can contain email and password fields.",
                question: "What are HTML forms used for?",
                options: ["Collecting user input", "Increasing RAM", "Editing videos", "Managing hardware"],
                answer: 0
            },
            {
                title: "Introduction to CSS",
                text: "CSS stands for Cascading Style Sheets. It controls the appearance and layout of web pages.",
                example: "CSS can change colors, fonts, spacing and layouts.",
                question: "What is CSS mainly used for?",
                options: ["Styling web pages", "Storing databases", "Running servers", "Writing SQL"],
                answer: 0
            },
            {
                title: "CSS Selectors",
                text: "CSS selectors identify HTML elements that should receive specific styles.",
                example: "A class selector can style all elements with the same class.",
                question: "What do CSS selectors identify?",
                options: ["HTML elements to style", "Database records", "Servers", "Files only"],
                answer: 0
            },
            {
                title: "CSS Layout",
                text: "CSS layout techniques such as Flexbox and Grid help arrange elements on a page.",
                example: "Flexbox can arrange navigation items horizontally.",
                question: "What can Flexbox help with?",
                options: ["Arranging elements", "Storing data", "Sending emails", "Creating databases"],
                answer: 0
            },
            {
                title: "Responsive Design",
                text: "Responsive design makes websites adapt to different screen sizes such as phones, tablets and desktops.",
                example: "A responsive website can rearrange its layout on a mobile screen.",
                question: "What is responsive design?",
                options: ["Design that adapts to screen sizes", "Database design", "Server programming", "Password security"],
                answer: 0
            },
            {
                title: "HTML & CSS Mini Project",
                text: "Combine HTML structure and CSS styling to create a complete responsive webpage.",
                example: "Build a personal portfolio page with a header, skills section and contact form.",
                question: "What can an HTML & CSS project create?",
                options: ["A styled web page", "Only a database", "Only a server", "Only a mobile app"],
                answer: 0
            }
        ]
    },


    "JavaScript": {
        title: "JavaScript",
        subtitle: "Learn programming for interactive web pages.",
        lessons: [
            {
                title: "Introduction to JavaScript",
                text: "JavaScript is a programming language commonly used to make websites interactive.",
                example: "JavaScript can respond when a user clicks a button.",
                question: "What is JavaScript commonly used for?",
                options: ["Web interactivity", "Database hardware", "Screen manufacturing", "Internet cables"],
                answer: 0
            },
            {
                title: "Variables",
                text: "Variables store values that can be used and changed in a program.",
                example: "let name = 'Isha'; stores a name in a variable.",
                question: "What do variables store?",
                options: ["Values", "Only images", "Only websites", "Hardware"],
                answer: 0
            },
            {
                title: "Data Types",
                text: "JavaScript supports data types such as strings, numbers, booleans, arrays and objects.",
                example: "A string stores text while a number stores numeric values.",
                question: "Which is a JavaScript data type?",
                options: ["String", "Monitor", "Keyboard", "Router"],
                answer: 0
            },
            {
                title: "Functions",
                text: "Functions are reusable blocks of code designed to perform a specific task.",
                example: "A calculateTotal() function can calculate the total price.",
                question: "Why are functions useful?",
                options: ["They make code reusable", "They increase RAM", "They create hardware", "They replace databases"],
                answer: 0
            },
            {
                title: "Conditions",
                text: "Conditional statements allow programs to make decisions based on conditions.",
                example: "if marks >= 40 can be used to check whether a student passed.",
                question: "What do conditions help programs do?",
                options: ["Make decisions", "Store electricity", "Design hardware", "Create cables"],
                answer: 0
            },
            {
                title: "Loops",
                text: "Loops repeat a block of code while a condition is true or for a specified number of times.",
                example: "A for loop can print numbers from 1 to 10.",
                question: "What is the purpose of a loop?",
                options: ["Repeat code", "Delete databases", "Increase storage", "Create hardware"],
                answer: 0
            },
            {
                title: "DOM Manipulation",
                text: "The Document Object Model allows JavaScript to access and change HTML elements.",
                example: "JavaScript can change the text of a button after it is clicked.",
                question: "What does DOM allow JavaScript to do?",
                options: ["Access and modify web page elements", "Increase RAM", "Manage electricity", "Create processors"],
                answer: 0
            },
            {
                title: "JavaScript Mini Project",
                text: "Combine JavaScript concepts to create an interactive webpage.",
                example: "Build a simple calculator or interactive to-do list.",
                question: "What can a JavaScript project add to a website?",
                options: ["Interactivity", "Only hardware", "Only databases", "Only images"],
                answer: 0
            }
        ]
    },


    "Frontend Development": {
        title: "Frontend Development",
        subtitle: "Create user-facing parts of modern web applications.",
        lessons: [
            {
                title: "What is Frontend Development?",
                text: "Frontend development focuses on the part of a website or application that users see and interact with.",
                example: "Navigation bars, forms, buttons and dashboards are frontend components.",
                question: "What does frontend development focus on?",
                options: ["User-facing interfaces", "Database servers", "Computer hardware", "Network cables"],
                answer: 0
            },
            {
                title: "UI Components",
                text: "UI components are reusable interface elements such as buttons, cards, menus and forms.",
                example: "A reusable button component can be used throughout an application.",
                question: "What is a UI component?",
                options: ["A reusable interface element", "A database", "A server", "A network"],
                answer: 0
            },
            {
                title: "Events",
                text: "Events represent actions such as clicks, typing and mouse movement that applications can respond to.",
                example: "A click event can open a menu.",
                question: "What can a click event represent?",
                options: ["A user action", "A database", "A server", "A programming language"],
                answer: 0
            },
            {
                title: "Forms & Validation",
                text: "Form validation checks whether user input meets required rules before it is submitted.",
                example: "An email field can be checked to ensure a valid email format.",
                question: "Why is form validation used?",
                options: ["To check user input", "To increase RAM", "To create hardware", "To edit videos"],
                answer: 0
            },
            {
                title: "Responsive Interfaces",
                text: "A responsive interface adjusts its layout and components according to the user's screen size.",
                example: "A desktop navigation menu can become a mobile menu.",
                question: "What does a responsive interface do?",
                options: ["Adapts to different screens", "Stores passwords", "Runs databases", "Creates servers"],
                answer: 0
            },
            {
                title: "Frontend Performance",
                text: "Frontend performance focuses on making web pages load quickly and respond smoothly.",
                example: "Optimizing images can reduce page loading time.",
                question: "Why is frontend performance important?",
                options: ["For faster user experiences", "To increase keyboard size", "To create databases", "To repair hardware"],
                answer: 0
            },
            {
                title: "Accessibility",
                text: "Web accessibility helps people with different abilities use websites effectively.",
                example: "Providing labels for form fields helps screen-reader users understand forms.",
                question: "What is web accessibility?",
                options: ["Making websites usable by more people", "Increasing RAM", "Creating databases", "Managing servers"],
                answer: 0
            },
            {
                title: "Frontend Project",
                text: "A frontend project combines HTML, CSS and JavaScript to create a complete user interface.",
                example: "Build a student dashboard with navigation, profile and performance sections.",
                question: "What can a frontend project combine?",
                options: ["HTML, CSS and JavaScript", "Only SQL", "Only Python", "Only databases"],
                answer: 0
            }
        ]
    },


    "React": {
        title: "React",
        subtitle: "Build modern interfaces using reusable components.",
        lessons: [
            {
                title: "Introduction to React",
                text: "React is a JavaScript library used to build user interfaces using reusable components.",
                example: "A dashboard can be divided into Navbar, Sidebar and Card components.",
                question: "What is React used for?",
                options: ["Building user interfaces", "Managing hardware", "Creating databases", "Editing videos"],
                answer: 0
            },
            {
                title: "Components",
                text: "React applications are built using components, which are reusable pieces of UI.",
                example: "A Button component can be reused in multiple places.",
                question: "What is a React component?",
                options: ["A reusable UI building block", "A database", "A server", "A network"],
                answer: 0
            },
            {
                title: "JSX",
                text: "JSX is a syntax extension that allows developers to write HTML-like structures inside JavaScript.",
                example: "A React component can return JSX containing headings and buttons.",
                question: "What does JSX allow?",
                options: ["HTML-like syntax in JavaScript", "Database queries", "Hardware control", "Network routing"],
                answer: 0
            },
            {
                title: "Props",
                text: "Props allow data to be passed from one React component to another.",
                example: "A UserCard component can receive a user's name through props.",
                question: "What are props used for?",
                options: ["Passing data to components", "Creating databases", "Increasing RAM", "Managing hardware"],
                answer: 0
            },
            {
                title: "State",
                text: "State stores information that can change during the lifetime of a React component.",
                example: "A counter can store its current number in state.",
                question: "What does React state store?",
                options: ["Changing component data", "Only CSS", "Hardware information", "Database servers"],
                answer: 0
            },
            {
                title: "Hooks",
                text: "React Hooks allow functional components to use features such as state and lifecycle behavior.",
                example: "useState is commonly used to manage component state.",
                question: "What is useState used for?",
                options: ["Managing state", "Creating databases", "Styling images", "Managing hardware"],
                answer: 0
            },
            {
                title: "React Events",
                text: "React can respond to user interactions such as clicks, typing and form submissions.",
                example: "An onClick handler can run a function when a button is clicked.",
                question: "What can React event handlers respond to?",
                options: ["User interactions", "Database tables", "Hardware damage", "Internet cables"],
                answer: 0
            },
            {
                title: "React Project",
                text: "A React project combines components, props, state and events into an interactive application.",
                example: "Build a task manager using reusable React components.",
                question: "What can a React project combine?",
                options: ["Components, state and events", "Only SQL", "Only CSS", "Only hardware"],
                answer: 0
            }
        ]
    },


    "Backend Development": {
        title: "Backend Development",
        subtitle: "Learn how servers process application logic and data.",
        lessons: [
            {
                title: "What is Backend Development?",
                text: "Backend development focuses on server-side logic, databases, authentication and APIs.",
                example: "A backend can process a login request and verify a user's credentials.",
                question: "What does backend development handle?",
                options: ["Server-side logic", "Only page colors", "Only animations", "Only screen design"],
                answer: 0
            },
            {
                title: "Servers",
                text: "A server is a system that receives requests and provides responses or services to clients.",
                example: "A web server can receive a browser request and return a webpage.",
                question: "What does a server do?",
                options: ["Processes requests and provides responses", "Only displays images", "Only stores keyboards", "Only controls screens"],
                answer: 0
            },
            {
                title: "Node.js",
                text: "Node.js allows JavaScript to run outside the browser and is commonly used for backend development.",
                example: "Node.js can be used to create web servers and APIs.",
                question: "What does Node.js allow?",
                options: ["JavaScript on the server", "SQL on a keyboard", "CSS on hardware", "HTML on a database"],
                answer: 0
            },
            {
                title: "Routes",
                text: "Routes define how a server responds to different URLs and HTTP requests.",
                example: "GET /users can return a list of users.",
                question: "What do backend routes define?",
                options: ["How requests are handled", "Screen brightness", "Keyboard shortcuts", "Database hardware"],
                answer: 0
            },
            {
                title: "Middleware",
                text: "Middleware is code that runs between receiving a request and sending a response.",
                example: "Authentication middleware can check whether a user is logged in.",
                question: "What is middleware?",
                options: ["Code that processes requests", "A database table", "A monitor", "A programming language"],
                answer: 0
            },
            {
                title: "Authentication",
                text: "Authentication verifies the identity of a user before allowing access to protected features.",
                example: "A login system can verify an email and password.",
                question: "What does authentication verify?",
                options: ["User identity", "Screen size", "Internet speed", "Computer weight"],
                answer: 0
            },
            {
                title: "Backend Security",
                text: "Backend security protects application data, APIs and user accounts from unauthorized access.",
                example: "Passwords should be stored securely rather than as plain text.",
                question: "Why is backend security important?",
                options: ["To protect application data", "To increase RAM", "To change colors", "To improve speakers"],
                answer: 0
            },
            {
                title: "Backend Project",
                text: "A backend project combines routes, APIs, authentication and database operations.",
                example: "Build a user management API with login and profile endpoints.",
                question: "What can a backend project include?",
                options: ["APIs, authentication and database operations", "Only CSS", "Only images", "Only animations"],
                answer: 0
            }
        ]
    },


    "Databases": {
        title: "Databases",
        subtitle: "Store and retrieve application data efficiently.",
        lessons: [
            {
                title: "Databases in Web Applications",
                text: "Web applications use databases to permanently store information such as users, products and orders.",
                example: "An online store stores product and customer information in a database.",
                question: "Why do web applications use databases?",
                options: ["To store application data", "To increase screen size", "To edit videos", "To create hardware"],
                answer: 0
            },
            {
                title: "SQL Databases",
                text: "SQL databases store structured data in tables made up of rows and columns.",
                example: "MySQL and PostgreSQL are popular SQL databases.",
                question: "How is data organized in SQL databases?",
                options: ["Tables", "Only images", "Only folders", "Only videos"],
                answer: 0
            },
            {
                title: "NoSQL Databases",
                text: "NoSQL databases use flexible data models and are useful for certain large-scale or rapidly changing applications.",
                example: "MongoDB stores data using document-style structures.",
                question: "What is a feature of many NoSQL databases?",
                options: ["Flexible data models", "Only fixed tables", "No data storage", "Only hardware control"],
                answer: 0
            },
            {
                title: "Database Queries",
                text: "Queries are instructions used to retrieve, insert, update or delete database information.",
                example: "A SELECT query can retrieve users from a database.",
                question: "What are queries used for?",
                options: ["Working with database data", "Changing screen size", "Creating hardware", "Editing videos"],
                answer: 0
            },
            {
                title: "Indexes",
                text: "Database indexes can improve the speed of searching and retrieving records.",
                example: "An index on an email column can speed up user searches.",
                question: "Why are indexes used?",
                options: ["To improve query performance", "To increase RAM", "To style pages", "To create servers"],
                answer: 0
            },
            {
                title: "Database Security",
                text: "Database security protects stored information from unauthorized access, modification and loss.",
                example: "Access permissions can restrict who can read or modify sensitive data.",
                question: "What does database security protect?",
                options: ["Stored data", "Only screens", "Only keyboards", "Only images"],
                answer: 0
            },
            {
                title: "Connecting Backend to Database",
                text: "Backend applications use database drivers or libraries to communicate with databases.",
                example: "A Node.js application can connect to MongoDB or PostgreSQL.",
                question: "How does a backend communicate with a database?",
                options: ["Using database drivers or libraries", "Using a monitor", "Using a keyboard", "Using CSS"],
                answer: 0
            },
            {
                title: "Database Project",
                text: "A database project combines data modeling, queries and backend integration.",
                example: "Build a product database for an online shopping application.",
                question: "What can a database project demonstrate?",
                options: ["Data storage and retrieval", "Only CSS styling", "Only animations", "Only hardware"],
                answer: 0
            }
        ]
    },


    "APIs & Authentication": {
        title: "APIs & Authentication",
        subtitle: "Connect applications securely through APIs.",
        lessons: [
            {
                title: "REST APIs",
                text: "REST APIs use standard HTTP methods to allow applications to communicate with resources.",
                example: "GET /products can retrieve a list of products.",
                question: "What do REST APIs commonly use?",
                options: ["HTTP methods", "Only CSS", "Only hardware", "Only images"],
                answer: 0
            },
            {
                title: "GET and POST",
                text: "GET is commonly used to retrieve data, while POST is commonly used to send new data to a server.",
                example: "A registration form may send user details using POST.",
                question: "Which method commonly sends new data?",
                options: ["POST", "GET", "DELETE", "HEAD"],
                answer: 0
            },
            {
                title: "Authentication vs Authorization",
                text: "Authentication verifies who a user is, while authorization determines what the user is allowed to access.",
                example: "A login verifies identity; an admin role determines access to admin pages.",
                question: "What does authorization determine?",
                options: ["What a user can access", "Who created the computer", "Screen size", "Internet speed"],
                answer: 0
            },
            {
                title: "Tokens",
                text: "Tokens can be used to represent an authenticated session when communicating with an API.",
                example: "A client may send a token with requests to protected endpoints.",
                question: "What can tokens be used for?",
                options: ["Representing authenticated access", "Changing screen color", "Increasing RAM", "Creating databases"],
                answer: 0
            },
            {
                title: "Protected Routes",
                text: "Protected routes require users to satisfy authentication or authorization rules before accessing them.",
                example: "Only logged-in users may access a profile endpoint.",
                question: "What is a protected route?",
                options: ["A route requiring access checks", "A CSS class", "A database table", "A hardware component"],
                answer: 0
            },
            {
                title: "Password Security",
                text: "Passwords should be handled securely, commonly by hashing them before storage.",
                example: "A backend can hash a password before saving it to a database.",
                question: "Why should passwords be hashed?",
                options: ["To protect stored passwords", "To increase RAM", "To improve graphics", "To create APIs"],
                answer: 0
            },
            {
                title: "API Error Handling",
                text: "Good APIs return meaningful status codes and messages when requests fail.",
                example: "A 401 response can indicate that authentication is required.",
                question: "Why is API error handling useful?",
                options: ["To clearly communicate failures", "To change CSS", "To increase storage", "To create hardware"],
                answer: 0
            },
            {
                title: "Secure API Project",
                text: "A secure API project combines authentication, authorization, validation and protected routes.",
                example: "Build a task API where users can access only their own tasks.",
                question: "What can a secure API project include?",
                options: ["Authentication and protected routes", "Only images", "Only CSS", "Only animations"],
                answer: 0
            }
        ]
    },


    "Full Stack Project": {
        title: "Full Stack Project",
        subtitle: "Build a complete application from frontend to backend.",
        lessons: [
            {
                title: "Planning a Full Stack App",
                text: "A full stack project should begin by defining the problem, users and main features.",
                example: "Plan a student productivity app with tasks, notes and progress tracking.",
                question: "What should you define first?",
                options: ["Problem, users and features", "Only colors", "Only animations", "Only database passwords"],
                answer: 0
            },
            {
                title: "Frontend Setup",
                text: "The frontend provides the interface through which users interact with the application.",
                example: "Create pages for login, dashboard, profile and tasks.",
                question: "What does the frontend provide?",
                options: ["User interface", "Only database storage", "Only server hardware", "Only network cables"],
                answer: 0
            },
            {
                title: "Backend Setup",
                text: "The backend handles application logic, APIs, authentication and communication with databases.",
                example: "A backend can provide /login and /tasks endpoints.",
                question: "What does the backend handle?",
                options: ["Application logic and APIs", "Only colors", "Only animations", "Only images"],
                answer: 0
            },
            {
                title: "Database Integration",
                text: "The database stores persistent application information that the backend can create, read, update and delete.",
                example: "User accounts and tasks can be stored in a database.",
                question: "Why integrate a database?",
                options: ["To persist application data", "To style pages", "To create animations", "To increase RAM"],
                answer: 0
            },
            {
                title: "Connecting Frontend & Backend",
                text: "The frontend communicates with backend APIs to send requests and receive data.",
                example: "A dashboard can request the current user's tasks from an API.",
                question: "How do frontend and backend communicate?",
                options: ["Through APIs", "Through CSS", "Through images", "Through keyboard drivers"],
                answer: 0
            },
            {
                title: "Testing the Application",
                text: "A full stack application should be tested across frontend, backend, API and database functionality.",
                example: "Test login, data creation, editing and logout.",
                question: "What should be tested?",
                options: ["Frontend, backend and data flow", "Only colors", "Only fonts", "Only images"],
                answer: 0
            },
            {
                title: "Deployment",
                text: "Deployment publishes the frontend, backend and required services so users can access the application.",
                example: "A full stack application can be deployed using cloud hosting services.",
                question: "What is deployment?",
                options: ["Publishing the application for users", "Deleting the application", "Changing CSS", "Writing only HTML"],
                answer: 0
            },
            {
                title: "Full Stack Final Project",
                text: "The final project combines frontend, backend, APIs, authentication and database functionality into one complete application.",
                example: "Build a student career platform with login, dashboard, courses and progress tracking.",
                question: "What does a full stack project combine?",
                options: ["Frontend, backend, APIs and database", "Only HTML", "Only CSS", "Only SQL"],
                answer: 0
            }
        ]
    },
        "Excel": {
        title: "Excel",
        subtitle: "Learn spreadsheets for data analysis.",
        lessons: [
            {
                title: "Excel Basics",
                text: "Excel is a spreadsheet tool used to organize, calculate and analyze data.",
                example: "A student marks sheet can be created using rows and columns.",
                question: "What is Excel commonly used for?",
                options: ["Organizing and analyzing data", "Creating hardware", "Writing operating systems", "Managing networks"],
                answer: 0
            },
            {
                title: "Rows & Columns",
                text: "Excel organizes information using rows and columns. Their intersection is called a cell.",
                example: "A1 refers to the cell in column A and row 1.",
                question: "What is the intersection of a row and column called?",
                options: ["Cell", "Sheet", "Formula", "Chart"],
                answer: 0
            },
            {
                title: "Formulas",
                text: "Formulas perform calculations using values stored in cells.",
                example: "=A1+B1 adds the values in A1 and B1.",
                question: "What are Excel formulas used for?",
                options: ["Performing calculations", "Creating networks", "Editing videos", "Managing hardware"],
                answer: 0
            },
            {
                title: "Functions",
                text: "Excel functions are predefined formulas that perform common calculations.",
                example: "SUM can calculate the total of a range of numbers.",
                question: "What does the SUM function do?",
                options: ["Adds values", "Deletes cells", "Creates passwords", "Changes hardware"],
                answer: 0
            },
            {
                title: "Sorting & Filtering",
                text: "Sorting arranges data in a specific order, while filtering displays only data matching selected conditions.",
                example: "Filter a marks sheet to show students who scored above 80.",
                question: "What does filtering do?",
                options: ["Shows matching data", "Deletes all data", "Creates hardware", "Changes the operating system"],
                answer: 0
            },
            {
                title: "Charts",
                text: "Charts convert numerical data into visual representations that make patterns easier to understand.",
                example: "A bar chart can compare marks of different students.",
                question: "Why are charts useful?",
                options: ["They visualize data", "They increase storage", "They create databases", "They manage networks"],
                answer: 0
            }
        ]
    },


    "SQL": {
        title: "SQL",
        subtitle: "Learn how to retrieve and manage data using SQL.",
        lessons: [
            {
                title: "Introduction to SQL",
                text: "SQL stands for Structured Query Language and is used to work with relational databases.",
                example: "SQL can retrieve customer records from a database.",
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Structured Quick List"],
                answer: 0
            },
            {
                title: "SELECT",
                text: "The SELECT statement is used to retrieve data from database tables.",
                example: "SELECT * FROM students;",
                question: "What is SELECT used for?",
                options: ["Retrieving data", "Deleting a database", "Creating hardware", "Changing screen size"],
                answer: 0
            },
            {
                title: "WHERE",
                text: "The WHERE clause filters records based on a specified condition.",
                example: "WHERE marks > 80 selects students whose marks are above 80.",
                question: "What does WHERE do?",
                options: ["Filters records", "Deletes tables", "Creates users", "Changes columns"],
                answer: 0
            },
            {
                title: "INSERT",
                text: "The INSERT statement adds new records to a database table.",
                example: "INSERT INTO students adds a new student record.",
                question: "What does INSERT do?",
                options: ["Adds records", "Removes records", "Only reads records", "Creates hardware"],
                answer: 0
            },
            {
                title: "UPDATE",
                text: "The UPDATE statement modifies existing records in a database.",
                example: "UPDATE students can change a student's marks.",
                question: "What does UPDATE do?",
                options: ["Modifies existing data", "Creates a monitor", "Deletes the database", "Retrieves only"],
                answer: 0
            },
            {
                title: "DELETE",
                text: "The DELETE statement removes records from a database table.",
                example: "DELETE FROM students WHERE id = 5;",
                question: "What does DELETE do?",
                options: ["Removes records", "Adds records", "Creates tables only", "Displays charts"],
                answer: 0
            },
            {
                title: "GROUP BY",
                text: "GROUP BY combines rows with similar values so aggregate calculations can be performed on groups.",
                example: "GROUP BY department can calculate the number of students in each department.",
                question: "What is GROUP BY used for?",
                options: ["Grouping similar records", "Deleting databases", "Creating hardware", "Changing passwords"],
                answer: 0
            },
            {
                title: "SQL Mini Project",
                text: "A SQL project combines queries to retrieve, insert, update and analyze database information.",
                example: "Create a student database and write queries to analyze marks.",
                question: "What can a SQL project demonstrate?",
                options: ["Database querying skills", "Only web design", "Only hardware", "Only image editing"],
                answer: 0
            }
        ]
    },


    "Statistics": {
        title: "Statistics",
        subtitle: "Understand data using statistical concepts.",
        lessons: [
            {
                title: "Introduction to Statistics",
                text: "Statistics is the study of collecting, organizing, analyzing and interpreting data.",
                example: "A college can analyze students' marks using statistics.",
                question: "What does statistics help us do?",
                options: ["Analyze data", "Create hardware", "Design keyboards", "Build networks"],
                answer: 0
            },
            {
                title: "Mean",
                text: "The mean is calculated by adding all values and dividing by the number of values.",
                example: "The mean of 10, 20 and 30 is 20.",
                question: "How is mean calculated?",
                options: ["Sum divided by number of values", "Largest value only", "Smallest value only", "Number of columns"],
                answer: 0
            },
            {
                title: "Median",
                text: "The median is the middle value when data is arranged in order.",
                example: "For 2, 4, 6, 8, 10, the median is 6.",
                question: "What is the median?",
                options: ["The middle value", "The largest value", "The smallest value", "The total"],
                answer: 0
            },
            {
                title: "Mode",
                text: "The mode is the value that occurs most frequently in a dataset.",
                example: "In 2, 3, 3, 4, the mode is 3.",
                question: "What is the mode?",
                options: ["Most frequent value", "Middle value", "Average value", "Smallest value"],
                answer: 0
            },
            {
                title: "Range",
                text: "The range is the difference between the maximum and minimum values.",
                example: "For 10, 20 and 40, the range is 30.",
                question: "How is range calculated?",
                options: ["Maximum minus minimum", "Mean plus median", "Total divided by count", "Minimum minus maximum"],
                answer: 0
            },
            {
                title: "Variance",
                text: "Variance measures how spread out data values are from their mean.",
                example: "A larger variance indicates greater spread in the data.",
                question: "What does variance measure?",
                options: ["Data spread", "Only the maximum", "Only the minimum", "Number of rows"],
                answer: 0
            }
        ]
    },


    "Python for Data Analysis": {
        title: "Python for Data Analysis",
        subtitle: "Use Python to work with real-world datasets.",
        lessons: [
            {
                title: "Python for Data",
                text: "Python is widely used for data analysis because of its simple syntax and powerful libraries.",
                example: "Python can load, clean and analyze CSV datasets.",
                question: "Why is Python popular for data analysis?",
                options: ["Powerful libraries and simple syntax", "It requires no computer", "It replaces all databases", "It only creates websites"],
                answer: 0
            },
            {
                title: "Reading Data",
                text: "Python libraries can load data from CSV, Excel and other file formats.",
                example: "Pandas can read a CSV file into a DataFrame.",
                question: "What can Python load for analysis?",
                options: ["Datasets", "Only images", "Only videos", "Only hardware"],
                answer: 0
            },
            {
                title: "Data Cleaning",
                text: "Data cleaning identifies and handles missing, duplicate or incorrect values.",
                example: "Missing ages in a dataset can be handled before analysis.",
                question: "Why is data cleaning important?",
                options: ["To improve data quality", "To increase RAM", "To create hardware", "To design websites"],
                answer: 0
            },
            {
                title: "Exploratory Data Analysis",
                text: "Exploratory Data Analysis helps understand patterns, relationships and unusual values in a dataset.",
                example: "Analyze student marks to find average scores and unusual results.",
                question: "What is EDA used for?",
                options: ["Understanding datasets", "Creating keyboards", "Managing networks", "Building processors"],
                answer: 0
            },
            {
                title: "Data Aggregation",
                text: "Aggregation combines data into useful summaries such as totals, averages and counts.",
                example: "Calculate the average salary for each department.",
                question: "What does aggregation create?",
                options: ["Data summaries", "Hardware components", "Web browsers", "Operating systems"],
                answer: 0
            },
            {
                title: "Data Analysis Project",
                text: "A data analysis project uses Python to clean, explore and summarize a real dataset.",
                example: "Analyze a student performance dataset and identify important patterns.",
                question: "What can a data analysis project demonstrate?",
                options: ["Practical data analysis skills", "Only web design", "Only hardware", "Only networking"],
                answer: 0
            }
        ]
    },


    "Pandas": {
        title: "Pandas",
        subtitle: "Learn the essential Python library for data analysis.",
        lessons: [
            {
                title: "Introduction to Pandas",
                text: "Pandas is a Python library designed for working with structured and tabular data.",
                example: "Pandas can load a CSV file into a DataFrame.",
                question: "What is Pandas used for?",
                options: ["Data analysis", "Hardware design", "Network installation", "Video editing"],
                answer: 0
            },
            {
                title: "Series",
                text: "A Pandas Series is a one-dimensional labeled data structure.",
                example: "A Series can contain student marks with student names as labels.",
                question: "What is a Pandas Series?",
                options: ["One-dimensional labeled data", "A database server", "A web page", "A hardware device"],
                answer: 0
            },
            {
                title: "DataFrame",
                text: "A DataFrame is a two-dimensional table-like data structure with rows and columns.",
                example: "A student DataFrame can contain Name, Age and Marks columns.",
                question: "What is a DataFrame?",
                options: ["A table-like data structure", "A programming language", "A server", "A network"],
                answer: 0
            },
            {
                title: "Reading CSV",
                text: "Pandas provides functions for loading CSV data into DataFrames.",
                example: "pd.read_csv('students.csv') can load a CSV file.",
                question: "What does read_csv do?",
                options: ["Loads CSV data", "Deletes a CSV", "Creates hardware", "Changes screen size"],
                answer: 0
            },
            {
                title: "Filtering Data",
                text: "Pandas allows rows to be filtered using conditions.",
                example: "Select students whose marks are greater than 80.",
                question: "What can filtering do?",
                options: ["Select matching rows", "Delete all data", "Create servers", "Edit hardware"],
                answer: 0
            },
            {
                title: "Missing Values",
                text: "Pandas provides tools for detecting and handling missing values.",
                example: "isna() can help identify missing values in a DataFrame.",
                question: "Why should missing values be handled?",
                options: ["To improve data quality", "To increase RAM", "To create APIs", "To design hardware"],
                answer: 0
            },
            {
                title: "Grouping Data",
                text: "The groupby operation allows data to be grouped and summarized based on one or more columns.",
                example: "Group sales by product category and calculate total sales.",
                question: "What is groupby useful for?",
                options: ["Summarizing groups of data", "Creating keyboards", "Managing servers", "Editing images"],
                answer: 0
            },
            {
                title: "Pandas Project",
                text: "A Pandas project combines loading, cleaning, filtering and analyzing a dataset.",
                example: "Analyze an e-commerce dataset using Pandas.",
                question: "What can a Pandas project demonstrate?",
                options: ["Practical data manipulation skills", "Only HTML", "Only networking", "Only hardware"],
                answer: 0
            }
        ]
    },


    "Data Visualization": {
        title: "Data Visualization",
        subtitle: "Turn data into clear and meaningful visuals.",
        lessons: [
            {
                title: "What is Data Visualization?",
                text: "Data visualization represents information graphically so patterns and trends are easier to understand.",
                example: "A line chart can show sales growth over several months.",
                question: "Why is data visualization useful?",
                options: ["To understand patterns visually", "To increase RAM", "To create databases", "To manage hardware"],
                answer: 0
            },
            {
                title: "Bar Charts",
                text: "Bar charts compare values across different categories.",
                example: "Compare sales across different products using a bar chart.",
                question: "What are bar charts useful for?",
                options: ["Comparing categories", "Showing passwords", "Creating databases", "Managing servers"],
                answer: 0
            },
            {
                title: "Line Charts",
                text: "Line charts are useful for showing changes and trends over an ordered period.",
                example: "Display monthly revenue using a line chart.",
                question: "What do line charts commonly show?",
                options: ["Trends over time", "Only categories", "Hardware details", "Database passwords"],
                answer: 0
            },
            {
                title: "Pie Charts",
                text: "Pie charts show how categories contribute to a whole.",
                example: "Show the percentage of students in different departments.",
                question: "What does a pie chart represent?",
                options: ["Parts of a whole", "Only time", "Only hardware", "Only text"],
                answer: 0
            },
            {
                title: "Scatter Plots",
                text: "Scatter plots show the relationship between two numerical variables.",
                example: "Compare study hours and exam marks using a scatter plot.",
                question: "What can a scatter plot show?",
                options: ["Relationships between variables", "Only categories", "Only passwords", "Only images"],
                answer: 0
            },
            {
                title: "Choosing the Right Chart",
                text: "Different charts are suitable for different types of analysis and communication.",
                example: "Use a line chart for trends and a bar chart for category comparisons.",
                question: "Why should chart types be chosen carefully?",
                options: ["To communicate data clearly", "To increase storage", "To create hardware", "To improve internet speed"],
                answer: 0
            }
        ]
    },


    "Power BI": {
        title: "Power BI",
        subtitle: "Create interactive dashboards and business reports.",
        lessons: [
            {
                title: "Introduction to Power BI",
                text: "Power BI is a business intelligence tool used to analyze data and create interactive reports.",
                example: "A company can create a sales dashboard in Power BI.",
                question: "What is Power BI used for?",
                options: ["Data analysis and visualization", "Hardware design", "Video editing", "Network installation"],
                answer: 0
            },
            {
                title: "Importing Data",
                text: "Power BI can connect to data sources such as Excel files, databases and CSV files.",
                example: "Import an Excel sales sheet into Power BI.",
                question: "What can Power BI connect to?",
                options: ["Data sources", "Only keyboards", "Only monitors", "Only cameras"],
                answer: 0
            },
            {
                title: "Data Transformation",
                text: "Data transformation prepares raw data for analysis by cleaning and reshaping it.",
                example: "Remove duplicate records before creating a report.",
                question: "Why transform data?",
                options: ["To prepare it for analysis", "To increase RAM", "To create hardware", "To edit videos"],
                answer: 0
            },
            {
                title: "Visualizations",
                text: "Power BI provides charts, tables, cards and other visuals for presenting data.",
                example: "A dashboard can show total sales using a card and monthly sales using a line chart.",
                question: "What do Power BI visuals do?",
                options: ["Present data visually", "Store passwords", "Create hardware", "Manage networks"],
                answer: 0
            },
            {
                title: "Dashboards",
                text: "A dashboard combines important visuals in one place to provide a quick overview of information.",
                example: "A sales dashboard can show revenue, orders and top products.",
                question: "What is a dashboard?",
                options: ["A collection of useful visuals", "A database server", "A programming language", "A hardware device"],
                answer: 0
            },
            {
                title: "Power BI Project",
                text: "A Power BI project combines data import, transformation, visualization and dashboard design.",
                example: "Create a sales performance dashboard for a business.",
                question: "What can a Power BI project demonstrate?",
                options: ["Business intelligence skills", "Only programming", "Only hardware", "Only networking"],
                answer: 0
            }
        ]
    },


    "Analytics Project": {
        title: "Analytics Project",
        subtitle: "Apply data analysis skills to a real business problem.",
        lessons: [
            {
                title: "Define the Business Problem",
                text: "A good analytics project begins by clearly defining the question the analysis should answer.",
                example: "A company may want to know why monthly sales are decreasing.",
                question: "What should an analytics project begin with?",
                options: ["A clear business question", "Random charts", "Only coding", "Only database design"],
                answer: 0
            },
            {
                title: "Collect Data",
                text: "Relevant data must be collected from appropriate sources before analysis begins.",
                example: "Sales data can come from databases, spreadsheets or business systems.",
                question: "Why collect relevant data?",
                options: ["To answer the business question", "To increase RAM", "To create hardware", "To design websites"],
                answer: 0
            },
            {
                title: "Clean the Data",
                text: "Raw datasets often contain missing, duplicate or incorrect values that should be handled before analysis.",
                example: "Remove duplicate customer records before calculating customer counts.",
                question: "Why clean data?",
                options: ["To improve analysis quality", "To create servers", "To increase screen size", "To edit videos"],
                answer: 0
            },
            {
                title: "Analyze the Data",
                text: "Analysis uses statistical methods and tools to identify patterns, trends and relationships.",
                example: "Compare sales across regions to identify the strongest market.",
                question: "What does data analysis identify?",
                options: ["Patterns and insights", "Only hardware problems", "Only passwords", "Only screen colors"],
                answer: 0
            },
            {
                title: "Create Visualizations",
                text: "Charts and dashboards communicate important findings in a way that is easier for others to understand.",
                example: "Use a bar chart to compare regional sales.",
                question: "Why create visualizations?",
                options: ["To communicate insights clearly", "To increase storage", "To create databases", "To manage hardware"],
                answer: 0
            },
            {
                title: "Present Insights",
                text: "The final step is to communicate findings and recommendations to decision makers.",
                example: "Explain which products are performing poorly and suggest actions.",
                question: "What should analytics results provide?",
                options: ["Useful insights and recommendations", "Only raw data", "Only code", "Only images"],
                answer: 0
            }
        ]
    },
        "Cybersecurity Basics": {
        title: "Cybersecurity Basics",
        subtitle: "Learn the fundamentals of protecting digital systems.",
        lessons: [
            {
                title: "What is Cybersecurity?",
                text: "Cybersecurity is the practice of protecting computers, networks, applications and data from unauthorized access and attacks.",
                example: "Using strong passwords and security updates helps protect an account.",
                question: "What does cybersecurity protect?",
                options: ["Digital systems and data", "Only keyboards", "Only monitors", "Only printers"],
                answer: 0
            },
            {
                title: "Common Cyber Threats",
                text: "Cyber threats include phishing, malware, unauthorized access and other attempts to compromise systems.",
                example: "A fake email asking for a password can be a phishing attempt.",
                question: "Which is a common cyber threat?",
                options: ["Phishing", "Screen brightness", "Keyboard layout", "File formatting"],
                answer: 0
            },
            {
                title: "Malware",
                text: "Malware is malicious software designed to damage systems, steal information or perform unauthorized actions.",
                example: "A malicious program may attempt to access files without permission.",
                question: "What is malware?",
                options: ["Malicious software", "A database", "A programming language", "A network cable"],
                answer: 0
            },
            {
                title: "Phishing",
                text: "Phishing uses deceptive messages or websites to trick people into revealing sensitive information.",
                example: "An attacker may send a fake login page that looks like a real service.",
                question: "What is phishing?",
                options: ["A deceptive attempt to obtain information", "A database system", "A coding language", "A hardware upgrade"],
                answer: 0
            },
            {
                title: "Strong Passwords",
                text: "Strong passwords are difficult to guess and should be unique for important accounts.",
                example: "Using a unique long password is safer than reusing a simple password.",
                question: "What makes a password safer?",
                options: ["Being strong and unique", "Being very short", "Using the same password everywhere", "Sharing it with others"],
                answer: 0
            },
            {
                title: "Multi-Factor Authentication",
                text: "Multi-factor authentication adds another verification step in addition to a password.",
                example: "A login may require a password and a verification code.",
                question: "Why is MFA useful?",
                options: ["It adds another layer of security", "It increases storage", "It changes screen size", "It speeds up the internet"],
                answer: 0
            },
            {
                title: "Security Updates",
                text: "Software updates often include fixes for security vulnerabilities.",
                example: "Installing an operating system security update can fix known weaknesses.",
                question: "Why are security updates important?",
                options: ["They can fix security vulnerabilities", "They increase keyboard size", "They delete all files", "They create databases"],
                answer: 0
            },
            {
                title: "Cybersecurity Project",
                text: "A cybersecurity project can demonstrate safe practices such as password security, awareness and basic system protection.",
                example: "Create a cybersecurity awareness dashboard for students.",
                question: "What can a cybersecurity project demonstrate?",
                options: ["Security awareness and protection skills", "Only graphic design", "Only hardware repair", "Only video editing"],
                answer: 0
            }
        ]
    },


    "Networking": {
        title: "Networking",
        subtitle: "Understand how computers communicate with each other.",
        lessons: [
            {
                title: "Introduction to Networks",
                text: "A computer network connects devices so they can communicate and share resources.",
                example: "Computers in a college lab can share files and internet access through a network.",
                question: "What is a computer network?",
                options: ["Connected devices that communicate", "A programming language", "A database", "A monitor"],
                answer: 0
            },
            {
                title: "IP Addresses",
                text: "An IP address identifies a device or network interface on a network.",
                example: "A device may have an IP address such as 192.168.1.10 on a local network.",
                question: "What does an IP address identify?",
                options: ["A device or network interface", "A programming language", "A database table", "A keyboard"],
                answer: 0
            },
            {
                title: "MAC Address",
                text: "A MAC address is a hardware-related identifier associated with a network interface.",
                example: "A network adapter has its own MAC address.",
                question: "What is a MAC address associated with?",
                options: ["A network interface", "A database query", "A website design", "A password"],
                answer: 0
            },
            {
                title: "DNS",
                text: "DNS translates human-readable domain names into IP addresses used by networks.",
                example: "DNS helps a browser find the server associated with a domain name.",
                question: "What does DNS do?",
                options: ["Maps domain names to IP addresses", "Creates passwords", "Stores images", "Repairs hardware"],
                answer: 0
            },
            {
                title: "HTTP and HTTPS",
                text: "HTTP is used for web communication, while HTTPS adds encryption to help protect data in transit.",
                example: "Websites using HTTPS protect communication between the browser and server.",
                question: "What does HTTPS add to HTTP?",
                options: ["Encryption and security", "More RAM", "A database", "A programming language"],
                answer: 0
            },
            {
                title: "Firewalls",
                text: "A firewall monitors and controls network traffic according to security rules.",
                example: "A firewall can block unauthorized network connections.",
                question: "What does a firewall control?",
                options: ["Network traffic", "Screen brightness", "Keyboard input", "Database columns"],
                answer: 0
            },
            {
                title: "Network Security",
                text: "Network security protects communication systems and connected devices from unauthorized access and threats.",
                example: "Secure Wi-Fi settings help reduce unauthorized access.",
                question: "What does network security protect?",
                options: ["Networks and connected systems", "Only images", "Only keyboards", "Only documents"],
                answer: 0
            },
            {
                title: "Networking Project",
                text: "A networking project can demonstrate how devices communicate and how basic security controls protect a network.",
                example: "Design a secure network diagram for a college laboratory.",
                question: "What can a networking project demonstrate?",
                options: ["Network communication and security", "Only web design", "Only programming", "Only video editing"],
                answer: 0
            }
        ]
    },


    "Linux": {
        title: "Linux",
        subtitle: "Learn the Linux operating system and command line.",
        lessons: [
            {
                title: "Introduction to Linux",
                text: "Linux is an open-source operating system widely used in servers, development and cybersecurity.",
                example: "Many web servers run Linux.",
                question: "What is Linux?",
                options: ["An operating system", "A database", "A browser", "A programming language"],
                answer: 0
            },
            {
                title: "Linux File System",
                text: "Linux organizes files and directories in a hierarchical file system.",
                example: "The /home directory commonly contains user files.",
                question: "How does Linux organize files?",
                options: ["Using a hierarchical file system", "Using only databases", "Using web pages", "Using spreadsheets"],
                answer: 0
            },
            {
                title: "Basic Commands",
                text: "Linux provides command-line tools for navigating and managing files and directories.",
                example: "The pwd command displays the current working directory.",
                question: "What does pwd commonly show?",
                options: ["Current working directory", "Network password", "CPU speed", "Screen size"],
                answer: 0
            },
            {
                title: "File Permissions",
                text: "Linux permissions control who can read, write or execute files.",
                example: "A file can have different permissions for its owner and other users.",
                question: "What do Linux permissions control?",
                options: ["Access to files", "Screen colors", "Internet speed", "Database size"],
                answer: 0
            },
            {
                title: "Processes",
                text: "A process is a running instance of a program.",
                example: "A web server runs as a process on a Linux system.",
                question: "What is a process?",
                options: ["A running program", "A database table", "A network cable", "A screen"],
                answer: 0
            },
            {
                title: "Users and Groups",
                text: "Linux uses users and groups to organize accounts and control access to resources.",
                example: "A user can belong to a group with access to specific files.",
                question: "Why are Linux groups useful?",
                options: ["Managing permissions for multiple users", "Changing screen size", "Creating websites", "Editing videos"],
                answer: 0
            },
            {
                title: "Linux Security",
                text: "Linux security includes permissions, user management, updates and secure configuration.",
                example: "Restricting file permissions can prevent unauthorized access.",
                question: "What can Linux security controls include?",
                options: ["Permissions and user management", "Only colors", "Only images", "Only animations"],
                answer: 0
            },
            {
                title: "Linux Project",
                text: "A Linux project can demonstrate command-line navigation, file management and basic system administration.",
                example: "Create and organize a secure project directory using Linux commands.",
                question: "What can a Linux project demonstrate?",
                options: ["Command-line and system skills", "Only graphic design", "Only databases", "Only networking"],
                answer: 0
            }
        ]
    },


    "Ethical Hacking": {
        title: "Ethical Hacking",
        subtitle: "Understand authorized security testing concepts.",
        lessons: [
            {
                title: "What is Ethical Hacking?",
                text: "Ethical hacking is authorized security testing performed to identify and help fix weaknesses in systems.",
                example: "A company may authorize security professionals to test its own application.",
                question: "What makes hacking ethical?",
                options: ["Proper authorization", "Hiding activity", "Accessing random systems", "Ignoring permission"],
                answer: 0
            },
            {
                title: "Security Testing",
                text: "Security testing evaluates whether systems and applications are protected against known threats.",
                example: "A company can test its login system for security weaknesses.",
                question: "What is security testing?",
                options: ["Evaluating security controls", "Changing screen colors", "Creating hardware", "Editing videos"],
                answer: 0
            },
            {
                title: "Vulnerabilities",
                text: "A vulnerability is a weakness that could potentially be exploited to compromise a system.",
                example: "An outdated component with a known security flaw may be a vulnerability.",
                question: "What is a vulnerability?",
                options: ["A security weakness", "A database", "A monitor", "A programming language"],
                answer: 0
            },
            {
                title: "Reconnaissance",
                text: "Reconnaissance is the information-gathering stage of an authorized security assessment.",
                example: "A security team may identify the systems and technologies belonging to an organization it has permission to test.",
                question: "What is reconnaissance?",
                options: ["Information gathering", "Deleting data", "Creating hardware", "Changing passwords"],
                answer: 0
            },
            {
                title: "Risk Assessment",
                text: "Risk assessment evaluates the likelihood and potential impact of security threats.",
                example: "A critical vulnerability affecting customer data may receive a high risk rating.",
                question: "What does risk assessment evaluate?",
                options: ["Likelihood and impact of threats", "Screen size", "Keyboard layout", "Internet speed"],
                answer: 0
            },
            {
                title: "Security Reports",
                text: "Ethical hackers document findings clearly so organizations can understand and fix security issues.",
                example: "A report can describe the issue, impact and recommended remediation.",
                question: "Why are security reports important?",
                options: ["They help organizations fix issues", "They increase RAM", "They create databases", "They design websites"],
                answer: 0
            },
            {
                title: "Responsible Disclosure",
                text: "Responsible disclosure means reporting discovered vulnerabilities through an appropriate process so they can be addressed safely.",
                example: "A researcher can report a vulnerability to the affected organization's security team.",
                question: "What is responsible disclosure?",
                options: ["Reporting vulnerabilities appropriately", "Publishing passwords", "Sharing private data", "Ignoring security issues"],
                answer: 0
            },
            {
                title: "Ethical Hacking Project",
                text: "A safe ethical hacking project can focus on authorized testing, vulnerability identification and security reporting.",
                example: "Create a security assessment report for a practice application you own or have permission to test.",
                question: "What should an ethical hacking project require?",
                options: ["Authorization", "Random targets", "Private passwords", "Unauthorized access"],
                answer: 0
            }
        ]
    },


    "Web Security": {
        title: "Web Security",
        subtitle: "Learn fundamental concepts for securing web applications.",
        lessons: [
            {
                title: "Introduction to Web Security",
                text: "Web security protects websites and web applications from unauthorized access, data theft and other threats.",
                example: "Secure authentication helps protect user accounts.",
                question: "What does web security protect?",
                options: ["Web applications and their data", "Only monitors", "Only keyboards", "Only printers"],
                answer: 0
            },
            {
                title: "Input Validation",
                text: "Input validation checks whether user-provided data follows expected rules before processing it.",
                example: "A form can verify that an age field contains an appropriate numeric value.",
                question: "Why validate input?",
                options: ["To safely handle user data", "To increase RAM", "To create hardware", "To change screen size"],
                answer: 0
            },
            {
                title: "Authentication Security",
                text: "Secure authentication protects accounts by verifying users and safely handling credentials.",
                example: "A website can use secure password hashing and multi-factor authentication.",
                question: "What does authentication security protect?",
                options: ["User accounts", "Only images", "Only CSS", "Only hardware"],
                answer: 0
            },
            {
                title: "Authorization",
                text: "Authorization determines which resources and actions an authenticated user is allowed to access.",
                example: "Only administrators may access an admin dashboard.",
                question: "What does authorization determine?",
                options: ["Allowed access and actions", "Screen size", "Network speed", "Database color"],
                answer: 0
            },
            {
                title: "Secure Sessions",
                text: "Web sessions allow applications to maintain a user's authenticated state across requests.",
                example: "A secure session helps a website remember that a user has logged in.",
                question: "What do sessions help maintain?",
                options: ["User authentication state", "Screen brightness", "Keyboard settings", "Hardware temperature"],
                answer: 0
            },
            {
                title: "HTTPS",
                text: "HTTPS protects data exchanged between a browser and server by using encryption.",
                example: "Login information sent through HTTPS is protected while in transit.",
                question: "What does HTTPS protect?",
                options: ["Data in transit", "Computer RAM", "Keyboard hardware", "Screen resolution"],
                answer: 0
            },
            {
                title: "Security Headers",
                text: "Security headers provide browsers with instructions that can help reduce certain web security risks.",
                example: "A Content Security Policy can restrict which resources a page is allowed to load.",
                question: "What can security headers help with?",
                options: ["Reducing web security risks", "Increasing storage", "Creating databases", "Editing videos"],
                answer: 0
            },
            {
                title: "Web Security Project",
                text: "A web security project can review authentication, authorization, input validation and secure communication.",
                example: "Create a checklist for reviewing the security of a practice web application.",
                question: "What can a web security project review?",
                options: ["Authentication and input validation", "Only colors", "Only animations", "Only hardware"],
                answer: 0
            }
        ]
    },


    "Cryptography": {
        title: "Cryptography",
        subtitle: "Understand how information can be protected using mathematical techniques.",
        lessons: [
            {
                title: "Introduction to Cryptography",
                text: "Cryptography uses mathematical techniques to protect information and secure communication.",
                example: "Encryption can transform readable data into protected ciphertext.",
                question: "What is cryptography used for?",
                options: ["Protecting information", "Increasing RAM", "Creating hardware", "Designing websites"],
                answer: 0
            },
            {
                title: "Encryption",
                text: "Encryption transforms readable plaintext into ciphertext using a cryptographic process.",
                example: "Sensitive information can be encrypted before transmission.",
                question: "What does encryption transform?",
                options: ["Plaintext into ciphertext", "Hardware into software", "Images into keyboards", "Databases into screens"],
                answer: 0
            },
            {
                title: "Decryption",
                text: "Decryption converts protected ciphertext back into readable information when the required key or process is available.",
                example: "An authorized recipient can decrypt protected data.",
                question: "What is decryption?",
                options: ["Converting ciphertext back to readable data", "Deleting data", "Creating hardware", "Changing passwords"],
                answer: 0
            },
            {
                title: "Symmetric Encryption",
                text: "Symmetric encryption uses the same secret key for encryption and decryption.",
                example: "A shared secret key can be used by authorized parties.",
                question: "What key is used in symmetric encryption?",
                options: ["The same secret key", "Only a public key", "No key", "A database key"],
                answer: 0
            },
            {
                title: "Asymmetric Encryption",
                text: "Asymmetric cryptography uses a pair of keys: a public key and a private key.",
                example: "A public key can be shared while the private key is kept secret.",
                question: "What does asymmetric cryptography use?",
                options: ["Public and private keys", "Only one shared password", "No keys", "Only database keys"],
                answer: 0
            },
            {
                title: "Hashing",
                text: "Hashing converts data into a fixed-length representation and is commonly used for integrity checks and password storage.",
                example: "Password systems can store password hashes instead of plain passwords.",
                question: "What is hashing commonly used for?",
                options: ["Integrity and secure password storage", "Increasing RAM", "Creating websites", "Managing screens"],
                answer: 0
            },
            {
                title: "Digital Signatures",
                text: "Digital signatures help verify the authenticity and integrity of digital information.",
                example: "A signed document can be checked to verify that it came from the expected signer and was not altered.",
                question: "What can digital signatures help verify?",
                options: ["Authenticity and integrity", "Screen size", "Internet speed", "Keyboard layout"],
                answer: 0
            },
            {
                title: "Cryptography Project",
                text: "A cryptography project can demonstrate concepts such as encryption, hashing and digital signatures in a safe educational environment.",
                example: "Build a small educational app that demonstrates hashing and encryption concepts.",
                question: "What can a cryptography project demonstrate?",
                options: ["Information protection concepts", "Only hardware", "Only web design", "Only networking"],
                answer: 0
            }
        ]
    },


    "Digital Forensics": {
        title: "Digital Forensics",
        subtitle: "Learn how digital evidence is examined responsibly.",
        lessons: [
            {
                title: "What is Digital Forensics?",
                text: "Digital forensics is the process of identifying, preserving and analyzing digital evidence.",
                example: "Investigators may examine authorized copies of digital evidence during an investigation.",
                question: "What does digital forensics analyze?",
                options: ["Digital evidence", "Only websites", "Only hardware designs", "Only spreadsheets"],
                answer: 0
            },
            {
                title: "Digital Evidence",
                text: "Digital evidence can include files, logs, messages and other information relevant to an investigation.",
                example: "System logs can provide information about events on a computer.",
                question: "What can be digital evidence?",
                options: ["Files and system logs", "Only monitors", "Only keyboards", "Only cables"],
                answer: 0
            },
            {
                title: "Evidence Preservation",
                text: "Evidence should be preserved carefully so that its original state and integrity are maintained.",
                example: "Investigators use controlled procedures when handling digital evidence.",
                question: "Why preserve evidence carefully?",
                options: ["To maintain its integrity", "To increase storage", "To create passwords", "To change files"],
                answer: 0
            },
            {
                title: "File Metadata",
                text: "Metadata contains information about files, such as timestamps, size and other attributes.",
                example: "File metadata may show when a document was created or modified.",
                question: "What is metadata?",
                options: ["Information about data", "A programming language", "A network", "A monitor"],
                answer: 0
            },
            {
                title: "System Logs",
                text: "System logs record events and activities occurring on computers, applications or networks.",
                example: "Login logs can help investigators understand account activity.",
                question: "What do system logs record?",
                options: ["System events", "Only images", "Only passwords", "Only screen colors"],
                answer: 0
            },
            {
                title: "Evidence Analysis",
                text: "Forensic analysis examines collected evidence to identify relevant facts and patterns.",
                example: "Investigators may analyze logs to reconstruct a sequence of events.",
                question: "What is the purpose of evidence analysis?",
                options: ["Find relevant facts and patterns", "Delete evidence", "Change hardware", "Increase RAM"],
                answer: 0
            },
            {
                title: "Forensic Reporting",
                text: "Forensic findings should be documented clearly, accurately and objectively.",
                example: "A report can explain the evidence examined and the findings obtained.",
                question: "Why is forensic reporting important?",
                options: ["To document findings clearly", "To increase storage", "To design websites", "To create networks"],
                answer: 0
            },
            {
                title: "Digital Forensics Project",
                text: "A safe educational forensics project can focus on analyzing sample evidence and creating a structured report.",
                example: "Analyze a provided sample log file and identify important events.",
                question: "What can a forensics project demonstrate?",
                options: ["Evidence analysis and reporting", "Only web design", "Only hardware repair", "Only programming"],
                answer: 0
            }
        ]
    },


    "Security Project": {
        title: "Security Project",
        subtitle: "Apply cybersecurity concepts to a safe authorized project.",
        lessons: [
            {
                title: "Choose a Security Problem",
                text: "Start by selecting a clear security problem that can be studied or addressed with proper authorization.",
                example: "Create a cybersecurity awareness system for students.",
                question: "What should a security project start with?",
                options: ["A clear security problem", "Random targets", "Private passwords", "Unauthorized access"],
                answer: 0
            },
            {
                title: "Define the Scope",
                text: "Project scope defines which systems, users and activities are included in the security assessment.",
                example: "A project may be limited to a practice application created for testing.",
                question: "Why define scope?",
                options: ["To clearly define what is being tested", "To access random systems", "To hide activity", "To collect private data"],
                answer: 0
            },
            {
                title: "Security Assessment",
                text: "A security assessment reviews systems for weaknesses and evaluates existing security controls.",
                example: "Review authentication and access controls in a practice application.",
                question: "What does a security assessment review?",
                options: ["Security controls and weaknesses", "Only colors", "Only animations", "Only hardware"],
                answer: 0
            },
            {
                title: "Risk Analysis",
                text: "Risk analysis helps prioritize security issues based on their likelihood and potential impact.",
                example: "A vulnerability affecting sensitive information may receive high priority.",
                question: "Why prioritize risks?",
                options: ["To focus on important issues", "To increase RAM", "To change screen size", "To create databases"],
                answer: 0
            },
            {
                title: "Security Recommendations",
                text: "Security recommendations explain practical ways to reduce identified risks.",
                example: "Recommend stronger authentication for accounts with sensitive information.",
                question: "What do security recommendations provide?",
                options: ["Ways to reduce risks", "Only source code", "Only images", "Only hardware"],
                answer: 0
            },
            {
                title: "Testing Improvements",
                text: "After security improvements are applied, testing can verify whether the changes work as intended.",
                example: "Verify that access controls correctly restrict unauthorized users.",
                question: "Why retest after improvements?",
                options: ["To verify security changes", "To delete data", "To create hardware", "To change colors"],
                answer: 0
            },
            {
                title: "Final Security Report",
                text: "A final report summarizes scope, findings, risks and recommended improvements.",
                example: "Create a report containing the project's objectives, findings and recommendations.",
                question: "What should a final security report include?",
                options: ["Findings and recommendations", "Only passwords", "Only images", "Only source code"],
                answer: 0
            },
            {
                title: "Security Project Presentation",
                text: "A good security project presentation clearly explains the problem, methodology, findings and improvements.",
                example: "Present a cybersecurity awareness project to your college team.",
                question: "What makes a security presentation useful?",
                options: ["Clear explanation of findings and solutions", "Sharing private credentials", "Showing unauthorized access", "Hiding the project scope"],
                answer: 0
            }
        ]
    },
        "Cloud Fundamentals": {
        title: "Cloud Fundamentals",
        subtitle: "Understand the basics of cloud computing and modern infrastructure.",
        lessons: [
            {
                title: "What is Cloud Computing?",
                text: "Cloud computing means using computing resources such as servers, storage, and software over the internet.",
                example: "Google Drive lets you store files online instead of only on your computer.",
                question: "What is cloud computing?",
                options: [
                    "Using computing resources over the internet",
                    "Only using a personal computer",
                    "Writing code without a computer",
                    "Using only offline software"
                ],
                answer: 0
            },
            {
                title: "Types of Cloud Services",
                text: "The main cloud service models are IaaS, PaaS, and SaaS. They provide different levels of control and management.",
                example: "AWS EC2 is an example of IaaS, while Google Docs is SaaS.",
                question: "Which is a cloud service model?",
                options: [
                    "IaaS",
                    "HTML",
                    "RAM",
                    "CPU"
                ],
                answer: 0
            },
            {
                title: "Public and Private Cloud",
                text: "Public clouds are shared cloud infrastructure provided by companies. Private clouds are dedicated to a specific organization.",
                example: "AWS provides public cloud services used by many organizations.",
                question: "What is a public cloud?",
                options: [
                    "Cloud infrastructure provided for use by multiple customers",
                    "A computer without internet",
                    "A local hard disk",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Cloud Storage",
                text: "Cloud storage allows users to save and access data through the internet.",
                example: "Amazon S3 can store images, videos, documents, and application data.",
                question: "What is cloud storage used for?",
                options: [
                    "Storing data online",
                    "Only running games",
                    "Replacing a keyboard",
                    "Creating passwords"
                ],
                answer: 0
            },
            {
                title: "Virtual Machines",
                text: "A virtual machine is a software-based computer that runs inside a physical computer or cloud server.",
                example: "A cloud provider can create multiple virtual machines on one physical server.",
                question: "What is a virtual machine?",
                options: [
                    "A software-based computer",
                    "A physical keyboard",
                    "A database table",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Scalability",
                text: "Scalability means increasing or decreasing resources according to application demand.",
                example: "An online shopping website can add more servers during a festival sale.",
                question: "What does scalability mean?",
                options: [
                    "Adjusting resources according to demand",
                    "Deleting all servers",
                    "Changing a programming language",
                    "Removing internet access"
                ],
                answer: 0
            },
            {
                title: "Cloud Regions and Availability Zones",
                text: "Cloud providers divide their infrastructure into geographic regions and availability zones to improve reliability.",
                example: "An application can run in multiple availability zones to reduce downtime.",
                question: "Why are availability zones useful?",
                options: [
                    "They improve reliability and availability",
                    "They remove all databases",
                    "They replace programming languages",
                    "They disable servers"
                ],
                answer: 0
            },
            {
                title: "Cloud Computing Benefits",
                text: "Cloud computing can provide flexibility, scalability, faster deployment, and reduced infrastructure management.",
                example: "A startup can launch an application without buying physical servers.",
                question: "Which is a benefit of cloud computing?",
                options: [
                    "Easy scalability",
                    "No internet access",
                    "More physical hardware requirements",
                    "Only offline access"
                ],
                answer: 0
            }
        ]
    },

    "AWS Basics": {
        title: "AWS Basics",
        subtitle: "Learn the essential AWS services used in cloud computing.",
        lessons: [
            {
                title: "Introduction to AWS",
                text: "Amazon Web Services is a cloud platform that provides computing, storage, databases, networking, and many other services.",
                example: "A developer can use AWS to host a web application.",
                question: "What is AWS?",
                options: [
                    "A cloud computing platform",
                    "A programming language",
                    "A database only",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Amazon EC2",
                text: "Amazon EC2 provides virtual servers that can be used to run applications in the cloud.",
                example: "A company can run its backend application on an EC2 instance.",
                question: "What does EC2 provide?",
                options: [
                    "Virtual servers",
                    "Only cloud storage",
                    "Email accounts",
                    "Programming courses"
                ],
                answer: 0
            },
            {
                title: "Amazon S3",
                text: "Amazon S3 is an object storage service used to store and retrieve files and other data.",
                example: "A website can store user-uploaded images in an S3 bucket.",
                question: "What is Amazon S3 mainly used for?",
                options: [
                    "Object storage",
                    "Running a keyboard",
                    "Creating operating systems",
                    "Editing videos offline"
                ],
                answer: 0
            },
            {
                title: "Amazon RDS",
                text: "Amazon RDS is a managed service for relational databases.",
                example: "A web application can use an RDS database to store customer information.",
                question: "What does Amazon RDS provide?",
                options: [
                    "Managed relational databases",
                    "Only virtual machines",
                    "Network cables",
                    "Image editing"
                ],
                answer: 0
            },
            {
                title: "AWS IAM",
                text: "AWS Identity and Access Management controls who can access AWS resources and what actions they can perform.",
                example: "An administrator can give a developer permission to access only specific services.",
                question: "What is AWS IAM used for?",
                options: [
                    "Managing identities and permissions",
                    "Storing videos",
                    "Creating websites automatically",
                    "Replacing EC2"
                ],
                answer: 0
            },
            {
                title: "AWS VPC",
                text: "Amazon VPC allows you to create an isolated virtual network for AWS resources.",
                example: "An application can place servers inside a VPC with controlled network access.",
                question: "What does VPC provide?",
                options: [
                    "A virtual network",
                    "A programming language",
                    "A database table",
                    "A physical laptop"
                ],
                answer: 0
            },
            {
                title: "AWS Regions",
                text: "AWS regions are geographic locations containing AWS infrastructure.",
                example: "A company can choose a region closer to its users to reduce latency.",
                question: "Why are AWS regions important?",
                options: [
                    "They provide geographically distributed infrastructure",
                    "They are programming languages",
                    "They replace databases",
                    "They only store passwords"
                ],
                answer: 0
            },
            {
                title: "AWS Security Basics",
                text: "AWS security includes identity management, permissions, encryption, monitoring, and secure network configuration.",
                example: "IAM policies can restrict access to important AWS resources.",
                question: "Which is important for AWS security?",
                options: [
                    "Access control",
                    "Sharing every password",
                    "Disabling authentication",
                    "Removing permissions"
                ],
                answer: 0
            }
        ]
    },

    "Azure Basics": {
        title: "Azure Basics",
        subtitle: "Understand Microsoft's Azure cloud platform and its core services.",
        lessons: [
            {
                title: "Introduction to Microsoft Azure",
                text: "Microsoft Azure is a cloud platform offering computing, storage, databases, networking, AI, and many other services.",
                example: "A company can deploy its web application using Azure services.",
                question: "What is Microsoft Azure?",
                options: [
                    "A cloud computing platform",
                    "A programming language",
                    "A physical server",
                    "A database table"
                ],
                answer: 0
            },
            {
                title: "Azure Virtual Machines",
                text: "Azure Virtual Machines provide scalable virtual servers for running applications.",
                example: "A developer can create a Linux virtual machine in Azure.",
                question: "What does an Azure Virtual Machine provide?",
                options: [
                    "A virtual server",
                    "Only cloud storage",
                    "A spreadsheet",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Azure Blob Storage",
                text: "Azure Blob Storage is designed for storing large amounts of unstructured data such as images and videos.",
                example: "A video application can store uploaded videos using Blob Storage.",
                question: "What is Azure Blob Storage used for?",
                options: [
                    "Storing unstructured data",
                    "Writing Python code",
                    "Creating keyboards",
                    "Managing employees"
                ],
                answer: 0
            },
            {
                title: "Azure SQL Database",
                text: "Azure SQL Database is a managed relational database service provided by Microsoft Azure.",
                example: "A business application can store customer records in Azure SQL Database.",
                question: "Azure SQL Database is a:",
                options: [
                    "Managed relational database",
                    "Virtual keyboard",
                    "Programming language",
                    "Network cable"
                ],
                answer: 0
            },
            {
                title: "Azure Resource Groups",
                text: "Resource groups help organize related Azure resources such as virtual machines, databases, and storage.",
                example: "All resources belonging to one application can be placed in the same resource group.",
                question: "Why are resource groups used?",
                options: [
                    "To organize Azure resources",
                    "To write Java programs",
                    "To replace databases",
                    "To create physical servers"
                ],
                answer: 0
            },
            {
                title: "Azure Virtual Network",
                text: "Azure Virtual Network allows Azure resources to communicate securely within a private network.",
                example: "A virtual machine and database can communicate through a configured virtual network.",
                question: "What does Azure Virtual Network provide?",
                options: [
                    "Private networking",
                    "Video editing",
                    "Programming lessons",
                    "Cloud storage only"
                ],
                answer: 0
            },
            {
                title: "Azure Identity",
                text: "Microsoft Entra ID helps manage users, identities, authentication, and access to resources.",
                example: "An organization can control which employees can access cloud applications.",
                question: "What is identity management used for?",
                options: [
                    "Managing users and access",
                    "Storing images",
                    "Running games",
                    "Creating hardware"
                ],
                answer: 0
            },
            {
                title: "Azure Security",
                text: "Azure provides security features such as identity management, encryption, monitoring, and access control.",
                example: "Organizations can restrict access to sensitive cloud resources.",
                question: "Which is part of cloud security?",
                options: [
                    "Access control",
                    "Sharing passwords publicly",
                    "Removing authentication",
                    "Disabling monitoring"
                ],
                answer: 0
            }
        ]
    },

    "Cloud Security": {
        title: "Cloud Security",
        subtitle: "Learn how to protect cloud applications, data, and infrastructure.",
        lessons: [
            {
                title: "What is Cloud Security?",
                text: "Cloud security protects cloud-based systems, applications, networks, and data from unauthorized access and attacks.",
                example: "Using strong authentication protects cloud accounts.",
                question: "What is the main goal of cloud security?",
                options: [
                    "Protect cloud resources and data",
                    "Increase screen brightness",
                    "Remove authentication",
                    "Delete backups"
                ],
                answer: 0
            },
            {
                title: "Identity and Access Management",
                text: "Identity and Access Management controls which users can access resources and what actions they can perform.",
                example: "A developer may be allowed to deploy applications but not delete databases.",
                question: "What does IAM control?",
                options: [
                    "User access and permissions",
                    "Computer temperature",
                    "Screen resolution",
                    "Keyboard layout"
                ],
                answer: 0
            },
            {
                title: "Authentication",
                text: "Authentication verifies the identity of a user or system before allowing access.",
                example: "A password combined with a one-time code provides stronger authentication.",
                question: "What does authentication verify?",
                options: [
                    "Identity",
                    "Internet speed",
                    "Storage size",
                    "Screen size"
                ],
                answer: 0
            },
            {
                title: "Encryption",
                text: "Encryption converts readable information into protected data that can only be understood with the correct key.",
                example: "Sensitive customer data can be encrypted before storage.",
                question: "Why is encryption used?",
                options: [
                    "To protect sensitive data",
                    "To increase CPU size",
                    "To remove passwords",
                    "To delete files"
                ],
                answer: 0
            },
            {
                title: "Network Security",
                text: "Cloud networks can be protected using firewalls, security groups, private networks, and controlled access rules.",
                example: "A database can be restricted so only application servers can connect to it.",
                question: "Which can help protect a cloud network?",
                options: [
                    "Firewall rules",
                    "Public passwords",
                    "Open access for everyone",
                    "Removing network controls"
                ],
                answer: 0
            },
            {
                title: "Secure Cloud Storage",
                text: "Cloud storage should use proper permissions, encryption, monitoring, and backup strategies.",
                example: "Private storage should not be accidentally exposed to the public internet.",
                question: "What should sensitive cloud storage use?",
                options: [
                    "Proper access controls",
                    "Public access for everyone",
                    "No authentication",
                    "Shared passwords"
                ],
                answer: 0
            },
            {
                title: "Security Monitoring",
                text: "Monitoring helps detect unusual activity, unauthorized access, and potential security incidents.",
                example: "A sudden login from an unusual location can trigger a security alert.",
                question: "Why is security monitoring important?",
                options: [
                    "It helps detect suspicious activity",
                    "It removes all users",
                    "It disables encryption",
                    "It deletes logs"
                ],
                answer: 0
            },
            {
                title: "Cloud Security Best Practices",
                text: "Important practices include least privilege, strong authentication, encryption, regular updates, backups, and monitoring.",
                example: "Giving users only the permissions they need reduces security risks.",
                question: "What does least privilege mean?",
                options: [
                    "Give users only the permissions they need",
                    "Give everyone administrator access",
                    "Remove all security controls",
                    "Share one password with everyone"
                ],
                answer: 0
            }
        ]
    },

    "DevOps": {
        title: "DevOps",
        subtitle: "Learn how development and operations work together to deliver software faster.",
        lessons: [
            {
                title: "What is DevOps?",
                text: "DevOps combines software development and IT operations practices to improve collaboration, automation, and delivery.",
                example: "Developers and operations teams can work together to automatically deploy applications.",
                question: "What is the main idea of DevOps?",
                options: [
                    "Better collaboration and automation",
                    "Only writing documentation",
                    "Removing testing",
                    "Avoiding automation"
                ],
                answer: 0
            },
            {
                title: "Version Control",
                text: "Version control tracks changes in source code and allows developers to collaborate safely.",
                example: "Git can track changes made by multiple developers.",
                question: "What does version control do?",
                options: [
                    "Tracks code changes",
                    "Only stores passwords",
                    "Runs databases",
                    "Creates hardware"
                ],
                answer: 0
            },
            {
                title: "Continuous Integration",
                text: "Continuous Integration automatically builds and tests code changes frequently.",
                example: "Every code push can trigger automated tests.",
                question: "What does CI stand for?",
                options: [
                    "Continuous Integration",
                    "Cloud Installation",
                    "Code Internet",
                    "Computer Interface"
                ],
                answer: 0
            },
            {
                title: "Continuous Deployment",
                text: "Continuous Deployment automatically releases tested changes to production.",
                example: "A successful pipeline can deploy a new application version automatically.",
                question: "What is Continuous Deployment?",
                options: [
                    "Automatically releasing tested changes",
                    "Manually deleting code",
                    "Writing code without testing",
                    "Turning off servers"
                ],
                answer: 0
            },
            {
                title: "Automation",
                text: "Automation reduces repetitive manual tasks and makes software delivery faster and more consistent.",
                example: "A deployment pipeline can automatically build, test, and deploy an application.",
                question: "Why is automation useful in DevOps?",
                options: [
                    "It reduces repetitive manual work",
                    "It increases manual tasks",
                    "It removes testing",
                    "It prevents deployment"
                ],
                answer: 0
            },
            {
                title: "Infrastructure as Code",
                text: "Infrastructure as Code allows infrastructure to be defined and managed using configuration files or code.",
                example: "Tools can automatically create cloud servers from configuration files.",
                question: "What does Infrastructure as Code manage?",
                options: [
                    "Infrastructure using code or configuration",
                    "Only application colors",
                    "Keyboard settings",
                    "User passwords"
                ],
                answer: 0
            },
            {
                title: "Monitoring",
                text: "Monitoring tracks application and infrastructure performance, availability, and errors.",
                example: "A monitoring system can alert a team when a server becomes unavailable.",
                question: "What is monitoring used for?",
                options: [
                    "Tracking system health and performance",
                    "Deleting applications",
                    "Writing essays",
                    "Changing screen size"
                ],
                answer: 0
            },
            {
                title: "DevOps Culture",
                text: "DevOps encourages collaboration, shared responsibility, automation, continuous improvement, and fast feedback.",
                example: "Development and operations teams jointly solve deployment problems.",
                question: "Which is an important DevOps practice?",
                options: [
                    "Collaboration",
                    "Working completely separately",
                    "Avoiding feedback",
                    "Manual repetition"
                ],
                answer: 0
            }
        ]
    },

    "Cloud Project": {
        title: "Cloud Project",
        subtitle: "Apply cloud concepts by planning and deploying a simple cloud application.",
        lessons: [
            {
                title: "Choose a Cloud Project",
                text: "Start by selecting a simple application that can benefit from cloud infrastructure.",
                example: "Build a student task manager that stores tasks in a cloud database.",
                question: "What should you do first?",
                options: [
                    "Choose and define the project",
                    "Delete the application",
                    "Buy random hardware",
                    "Skip planning"
                ],
                answer: 0
            },
            {
                title: "Design the Architecture",
                text: "Plan the application's frontend, backend, database, storage, and networking components.",
                example: "A web app can use a frontend, API server, and cloud database.",
                question: "Why design architecture first?",
                options: [
                    "To plan how components work together",
                    "To avoid understanding the project",
                    "To remove the database",
                    "To skip deployment"
                ],
                answer: 0
            },
            {
                title: "Create Cloud Resources",
                text: "Create only the cloud resources required by the project and configure them securely.",
                example: "Create a virtual server and database for the application.",
                question: "What should you create?",
                options: [
                    "Required cloud resources",
                    "Every available cloud service",
                    "Random servers",
                    "Unsecured public databases"
                ],
                answer: 0
            },
            {
                title: "Deploy the Application",
                text: "Deployment means making the application available on cloud infrastructure.",
                example: "Upload the application to a cloud server and configure the required services.",
                question: "What does deployment mean?",
                options: [
                    "Making an application available to users",
                    "Deleting the source code",
                    "Turning off the server",
                    "Removing the database"
                ],
                answer: 0
            },
            {
                title: "Configure Security",
                text: "Protect the project using authentication, permissions, encryption, secure networking, and secret management.",
                example: "Database credentials should not be stored directly in public source code.",
                question: "What should you protect?",
                options: [
                    "Credentials and cloud resources",
                    "Only the project logo",
                    "Nothing",
                    "Public passwords"
                ],
                answer: 0
            },
            {
                title: "Add Monitoring",
                text: "Monitoring helps you understand application health, performance, errors, and resource usage.",
                example: "Set an alert when CPU usage remains unusually high.",
                question: "Why add monitoring?",
                options: [
                    "To track application health",
                    "To remove logs",
                    "To disable security",
                    "To delete resources"
                ],
                answer: 0
            },
            {
                title: "Test the Application",
                text: "Test functionality, performance, security, and reliability before considering the project complete.",
                example: "Test login, database operations, and error handling.",
                question: "Why should a cloud project be tested?",
                options: [
                    "To find problems before release",
                    "To avoid finding bugs",
                    "To remove security",
                    "To skip deployment"
                ],
                answer: 0
            },
            {
                title: "Present the Cloud Project",
                text: "A good project presentation explains the problem, solution, architecture, cloud services, security, and results.",
                example: "Show the architecture diagram and demonstrate the deployed application.",
                question: "What should a project presentation explain?",
                options: [
                    "Problem, solution, architecture, and results",
                    "Only the project name",
                    "Only the source code",
                    "Only the logo"
                ],
                answer: 0
            }
        ]
    },
        "UI Design": {
        title: "UI Design",
        subtitle: "Learn the fundamentals of designing clean and user-friendly mobile interfaces.",
        lessons: [
            {
                title: "What is UI Design?",
                text: "UI design focuses on how an application's screens, buttons, colors, and visual elements look and work.",
                example: "A login screen with clear buttons and readable text is good UI design.",
                question: "What does UI design focus on?",
                options: [
                    "The visual interface of an application",
                    "Only the database",
                    "Only the server",
                    "Computer hardware"
                ],
                answer: 0
            },
            {
                title: "Layout and Structure",
                text: "A good layout organizes content so users can understand and navigate an application easily.",
                example: "A mobile app can place the logo at the top, content in the center, and navigation at the bottom.",
                question: "Why is layout important?",
                options: [
                    "It makes the interface easier to understand",
                    "It deletes application data",
                    "It replaces the backend",
                    "It increases storage"
                ],
                answer: 0
            },
            {
                title: "Colors",
                text: "Colors help create visual hierarchy, communicate meaning, and establish an application's identity.",
                example: "A red button can be used to indicate a destructive action.",
                question: "What can colors help communicate?",
                options: [
                    "Meaning and visual hierarchy",
                    "Database structure",
                    "CPU speed",
                    "Internet bandwidth"
                ],
                answer: 0
            },
            {
                title: "Typography",
                text: "Typography is the selection and arrangement of fonts, sizes, spacing, and text styles.",
                example: "Headings can use larger text while descriptions use smaller readable text.",
                question: "What is typography?",
                options: [
                    "The design and arrangement of text",
                    "A database system",
                    "A programming language",
                    "A network protocol"
                ],
                answer: 0
            },
            {
                title: "Buttons and Components",
                text: "Buttons, cards, input fields, menus, and navigation bars are common UI components.",
                example: "A Submit button allows users to send information from a form.",
                question: "Which is a UI component?",
                options: [
                    "Button",
                    "Database server",
                    "CPU",
                    "Router"
                ],
                answer: 0
            },
            {
                title: "Responsive Design",
                text: "Responsive design allows an interface to adapt to different screen sizes and orientations.",
                example: "A mobile app should remain usable on both small and large phone screens.",
                question: "What is responsive design?",
                options: [
                    "Design that adapts to different screen sizes",
                    "Design for only one device",
                    "A database technique",
                    "A networking method"
                ],
                answer: 0
            },
            {
                title: "Accessibility",
                text: "Accessible interfaces are designed so that people with different abilities can use them effectively.",
                example: "Using readable text and sufficient contrast improves accessibility.",
                question: "Why is accessibility important?",
                options: [
                    "It makes applications usable by more people",
                    "It makes databases faster",
                    "It removes all buttons",
                    "It increases storage"
                ],
                answer: 0
            },
            {
                title: "Good UI Principles",
                text: "Good UI should be simple, consistent, readable, responsive, and easy to navigate.",
                example: "Using the same button style throughout an application improves consistency.",
                question: "Which is a good UI principle?",
                options: [
                    "Consistency",
                    "Unclear navigation",
                    "Tiny unreadable text",
                    "Random layouts"
                ],
                answer: 0
            }
        ]
    },

    "Android Development": {
        title: "Android Development",
        subtitle: "Learn the fundamentals of building applications for Android devices.",
        lessons: [
            {
                title: "Introduction to Android",
                text: "Android is a mobile operating system used on smartphones, tablets, TVs, and other devices.",
                example: "Apps such as messaging and shopping applications can run on Android phones.",
                question: "What is Android?",
                options: [
                    "A mobile operating system",
                    "A database",
                    "A programming language",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Android Studio",
                text: "Android Studio is the official integrated development environment commonly used for Android application development.",
                example: "Developers can write code, design screens, and test Android applications in Android Studio.",
                question: "What is Android Studio?",
                options: [
                    "An IDE for Android development",
                    "A database server",
                    "A cloud storage service",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Activities",
                text: "An Activity represents a screen or entry point in an Android application.",
                example: "A login screen can be implemented as an Activity.",
                question: "What does an Activity commonly represent?",
                options: [
                    "A screen or entry point in an app",
                    "A database table",
                    "A cloud server",
                    "A network cable"
                ],
                answer: 0
            },
            {
                title: "Layouts",
                text: "Layouts define how UI elements are arranged on an Android screen.",
                example: "A layout can arrange text fields and buttons on a login screen.",
                question: "What do Android layouts define?",
                options: [
                    "The arrangement of UI elements",
                    "Database passwords",
                    "Internet speed",
                    "CPU architecture"
                ],
                answer: 0
            },
            {
                title: "User Input",
                text: "Mobile applications often collect input through text fields, buttons, checkboxes, and other controls.",
                example: "A registration screen can collect a user's name and email.",
                question: "Which can collect user input?",
                options: [
                    "Text field",
                    "CPU",
                    "Router",
                    "Hard disk"
                ],
                answer: 0
            },
            {
                title: "App Permissions",
                text: "Android permissions control access to sensitive device features and data.",
                example: "A camera application may request permission to use the camera.",
                question: "Why are app permissions used?",
                options: [
                    "To control access to device features",
                    "To increase screen size",
                    "To replace databases",
                    "To improve keyboard speed"
                ],
                answer: 0
            },
            {
                title: "Testing Android Apps",
                text: "Testing helps developers find crashes, UI problems, and incorrect application behavior.",
                example: "A developer can test login and navigation before releasing the app.",
                question: "Why test an Android application?",
                options: [
                    "To find and fix problems",
                    "To remove all features",
                    "To delete the application",
                    "To avoid user feedback"
                ],
                answer: 0
            },
            {
                title: "Publishing an App",
                text: "Before publishing an application, developers should test it, prepare app information, and follow store requirements.",
                example: "A finished Android app can be prepared for release through the Google Play ecosystem.",
                question: "What should developers do before publishing?",
                options: [
                    "Test and prepare the application",
                    "Delete the source code",
                    "Remove security",
                    "Skip testing"
                ],
                answer: 0
            }
        ]
    },

    "Flutter": {
        title: "Flutter",
        subtitle: "Learn the basics of building cross-platform applications with Flutter.",
        lessons: [
            {
                title: "What is Flutter?",
                text: "Flutter is a UI toolkit for building applications for multiple platforms from a shared codebase.",
                example: "A developer can build mobile applications for Android and iOS using Flutter.",
                question: "What is Flutter?",
                options: [
                    "A UI toolkit for building applications",
                    "A database",
                    "A cloud provider",
                    "A web browser"
                ],
                answer: 0
            },
            {
                title: "Dart Language",
                text: "Flutter applications are commonly developed using the Dart programming language.",
                example: "A Flutter application can use Dart classes, functions, and variables.",
                question: "Which language is commonly used with Flutter?",
                options: [
                    "Dart",
                    "SQL",
                    "HTML only",
                    "Assembly only"
                ],
                answer: 0
            },
            {
                title: "Widgets",
                text: "Flutter uses widgets as the basic building blocks of its user interface.",
                example: "Text, Button, Image, and Container can all be used as widgets.",
                question: "What are the basic building blocks of Flutter UI?",
                options: [
                    "Widgets",
                    "Tables",
                    "Servers",
                    "Routers"
                ],
                answer: 0
            },
            {
                title: "Stateless Widgets",
                text: "A StatelessWidget represents UI that does not maintain changing internal state.",
                example: "A simple static title can be displayed using a stateless widget.",
                question: "What is a StatelessWidget?",
                options: [
                    "A widget without changing internal state",
                    "A database",
                    "A cloud server",
                    "A network protocol"
                ],
                answer: 0
            },
            {
                title: "Stateful Widgets",
                text: "A StatefulWidget can maintain state that changes during the application's lifetime.",
                example: "A counter whose value changes when a button is pressed can use stateful behavior.",
                question: "When are StatefulWidgets useful?",
                options: [
                    "When UI state changes",
                    "Only for databases",
                    "Only for networking",
                    "Only for images"
                ],
                answer: 0
            },
            {
                title: "Navigation",
                text: "Flutter navigation allows users to move between different screens of an application.",
                example: "Tapping a Login button can navigate to a Home screen.",
                question: "What is navigation used for?",
                options: [
                    "Moving between screens",
                    "Creating databases",
                    "Increasing RAM",
                    "Managing hardware"
                ],
                answer: 0
            },
            {
                title: "Flutter Packages",
                text: "Packages provide reusable functionality that can be added to Flutter applications.",
                example: "A package can provide networking, charts, or image-related functionality.",
                question: "Why are packages useful?",
                options: [
                    "They provide reusable functionality",
                    "They remove all code",
                    "They replace the operating system",
                    "They increase screen size"
                ],
                answer: 0
            },
            {
                title: "Building a Flutter App",
                text: "A Flutter project typically contains Dart code, UI widgets, assets, configuration, and dependencies.",
                example: "A student can build a simple task manager using Flutter widgets and local or cloud data.",
                question: "What is used to build Flutter interfaces?",
                options: [
                    "Widgets",
                    "Only SQL tables",
                    "Only network cables",
                    "Only hardware"
                ],
                answer: 0
            }
        ]
    },

    "Databases": {
        title: "Databases",
        subtitle: "Learn how mobile applications store and manage data.",
        lessons: [
            {
                title: "What is a Database?",
                text: "A database is an organized collection of data that applications can store, retrieve, and manage.",
                example: "A shopping app can store products and customer information in a database.",
                question: "What is a database?",
                options: [
                    "An organized collection of data",
                    "A programming language",
                    "A monitor",
                    "A network cable"
                ],
                answer: 0
            },
            {
                title: "Local Databases",
                text: "Local databases store data directly on a device and can allow applications to work with limited or no internet access.",
                example: "A notes app can store notes locally on a phone.",
                question: "Where does a local database store data?",
                options: [
                    "On the device",
                    "Only on a remote server",
                    "Only in RAM",
                    "Only in a browser"
                ],
                answer: 0
            },
            {
                title: "Cloud Databases",
                text: "Cloud databases store data on remote infrastructure and can allow applications to access shared data through a network.",
                example: "A mobile app can retrieve a user's profile from a cloud database.",
                question: "Where is a cloud database hosted?",
                options: [
                    "On remote cloud infrastructure",
                    "Only inside the keyboard",
                    "Only in a local text file",
                    "Only on a USB cable"
                ],
                answer: 0
            },
            {
                title: "CRUD Operations",
                text: "CRUD stands for Create, Read, Update, and Delete, the common operations performed on stored data.",
                example: "A task app can create a task, read it, update it, or delete it.",
                question: "What does CRUD stand for?",
                options: [
                    "Create, Read, Update, Delete",
                    "Code, Run, Upload, Download",
                    "Create, Remove, Use, Deploy",
                    "Connect, Read, Use, Debug"
                ],
                answer: 0
            },
            {
                title: "Data Models",
                text: "A data model describes how information is organized and related inside a database.",
                example: "A user record can contain a name, email, and user ID.",
                question: "What does a data model describe?",
                options: [
                    "How data is organized",
                    "Screen brightness",
                    "CPU temperature",
                    "Internet speed"
                ],
                answer: 0
            },
            {
                title: "Database Security",
                text: "Database security protects stored information using authentication, authorization, encryption, and secure connections.",
                example: "Only authorized users should be able to access private customer information.",
                question: "Why is database security important?",
                options: [
                    "To protect stored information",
                    "To increase screen size",
                    "To remove authentication",
                    "To delete records"
                ],
                answer: 0
            },
            {
                title: "Data Synchronization",
                text: "Synchronization keeps data consistent between a mobile device and a remote service.",
                example: "A task created on one device can appear on another after synchronization.",
                question: "What does synchronization help with?",
                options: [
                    "Keeping data consistent across systems",
                    "Increasing battery size",
                    "Changing screen colors",
                    "Removing databases"
                ],
                answer: 0
            },
            {
                title: "Choosing a Database",
                text: "The choice of database depends on the application's data structure, scale, performance, offline needs, and security requirements.",
                example: "A simple mobile app may use local storage while a large application may use a cloud database.",
                question: "What should influence database selection?",
                options: [
                    "Application requirements",
                    "Only the logo color",
                    "Only screen size",
                    "Only keyboard type"
                ],
                answer: 0
            }
        ]
    },

    "Authentication": {
        title: "Authentication",
        subtitle: "Learn how mobile applications securely identify and authorize users.",
        lessons: [
            {
                title: "What is Authentication?",
                text: "Authentication verifies that a user is who they claim to be.",
                example: "A user enters an email and password to sign in.",
                question: "What does authentication verify?",
                options: [
                    "A user's identity",
                    "A phone's screen size",
                    "Database speed",
                    "Internet bandwidth"
                ],
                answer: 0
            },
            {
                title: "Passwords",
                text: "Passwords are commonly used as one factor for authentication and should be strong and securely stored by services.",
                example: "A strong password is harder for attackers to guess.",
                question: "What is a password used for?",
                options: [
                    "Helping verify a user's identity",
                    "Increasing storage",
                    "Changing screen resolution",
                    "Replacing a database"
                ],
                answer: 0
            },
            {
                title: "Multi-Factor Authentication",
                text: "Multi-factor authentication uses more than one type of verification to improve account security.",
                example: "A password plus a one-time verification code provides two factors.",
                question: "What does MFA provide?",
                options: [
                    "Additional verification",
                    "More storage space",
                    "Faster internet",
                    "A larger screen"
                ],
                answer: 0
            },
            {
                title: "Authorization",
                text: "Authorization determines what an authenticated user is allowed to access or do.",
                example: "A normal user may view their profile while an administrator can manage users.",
                question: "What is authorization?",
                options: [
                    "Determining what a user can access",
                    "Verifying only the password",
                    "Increasing RAM",
                    "Creating a database"
                ],
                answer: 0
            },
            {
                title: "Sessions",
                text: "A session allows an application to remember that a user has successfully authenticated.",
                example: "A user can move between screens without signing in again each time.",
                question: "Why are sessions useful?",
                options: [
                    "They maintain an authenticated state",
                    "They increase storage",
                    "They replace the UI",
                    "They remove security"
                ],
                answer: 0
            },
            {
                title: "Tokens",
                text: "Tokens can be used by applications to represent authenticated access to protected resources.",
                example: "A mobile app can send an access token when requesting protected API data.",
                question: "What can a token represent?",
                options: [
                    "Authenticated access",
                    "Screen resolution",
                    "Battery level",
                    "CPU temperature"
                ],
                answer: 0
            },
            {
                title: "Secure Authentication",
                text: "Secure authentication uses strong credentials, secure communication, proper session handling, and appropriate access controls.",
                example: "Applications should protect login credentials and use secure connections.",
                question: "Which improves authentication security?",
                options: [
                    "Secure communication",
                    "Sharing passwords",
                    "Disabling verification",
                    "Using public credentials"
                ],
                answer: 0
            },
            {
                title: "Logout and Session Management",
                text: "Applications should properly end sessions when users log out and protect stored authentication information.",
                example: "A banking app should not remain accessible after the user logs out.",
                question: "Why is logout important?",
                options: [
                    "It ends the authenticated session",
                    "It increases storage",
                    "It creates a database",
                    "It removes the application"
                ],
                answer: 0
            }
        ]
    },

    "Mobile App Project": {
        title: "Mobile App Project",
        subtitle: "Build a complete mobile application by combining UI, logic, APIs, databases, and authentication.",
        lessons: [
            {
                title: "Choose the App Idea",
                text: "Start by identifying a real problem and defining a simple mobile application that solves it.",
                example: "Build a student task manager for tracking assignments.",
                question: "What should you do first?",
                options: [
                    "Define the problem and app idea",
                    "Start coding randomly",
                    "Delete the project",
                    "Skip planning"
                ],
                answer: 0
            },
            {
                title: "Plan the Features",
                text: "List the most important features before development so the project remains focused.",
                example: "A task manager may need login, task creation, editing, and deletion.",
                question: "Why plan features?",
                options: [
                    "To define what the application should do",
                    "To avoid testing",
                    "To remove the UI",
                    "To delete the database"
                ],
                answer: 0
            },
            {
                title: "Design the UI",
                text: "Create simple screens and navigation that make the application easy to use.",
                example: "Design login, home, task list, and profile screens.",
                question: "What is the goal of UI design?",
                options: [
                    "Make the application easy to use",
                    "Increase database size",
                    "Remove navigation",
                    "Disable authentication"
                ],
                answer: 0
            },
            {
                title: "Connect the API",
                text: "An API allows the mobile application to communicate with backend services and exchange data.",
                example: "The app can send a new task to a backend API.",
                question: "Why connect an API?",
                options: [
                    "To communicate with backend services",
                    "To change screen brightness",
                    "To replace the phone",
                    "To increase RAM"
                ],
                answer: 0
            },
            {
                title: "Add the Database",
                text: "Use a suitable database to store application information such as users, tasks, products, or messages.",
                example: "A task manager can store each user's tasks in a database.",
                question: "Why use a database?",
                options: [
                    "To store and manage application data",
                    "To design icons",
                    "To increase battery size",
                    "To replace the UI"
                ],
                answer: 0
            },
            {
                title: "Implement Authentication",
                text: "Authentication allows users to securely sign in and access their own application data.",
                example: "Users can create an account and sign in using email and password.",
                question: "What does authentication provide?",
                options: [
                    "User identity verification",
                    "Screen resizing",
                    "Database deletion",
                    "Internet speed"
                ],
                answer: 0
            },
            {
                title: "Test the App",
                text: "Test every important feature and check different devices, inputs, error cases, and network conditions.",
                example: "Test login with valid and invalid credentials.",
                question: "Why test the app?",
                options: [
                    "To find and fix problems",
                    "To remove features",
                    "To skip development",
                    "To delete user data"
                ],
                answer: 0
            },
            {
                title: "Release the App",
                text: "After testing, prepare the application for release with proper documentation, security, and store requirements.",
                example: "Create a release build and prepare screenshots and app information.",
                question: "What comes before releasing an app?",
                options: [
                    "Testing and release preparation",
                    "Deleting the project",
                    "Removing security",
                    "Skipping all testing"
                ],
                answer: 0
            }
        ]
    },
        "Design Fundamentals": {
        title: "Design Fundamentals",
        subtitle: "Learn the core principles of digital design and visual communication.",
        lessons: [
            {
                title: "What is Design?",
                text: "Design is the process of creating solutions that are useful, understandable, and visually effective.",
                example: "A well-designed app makes it easy for users to find what they need.",
                question: "What is the main purpose of design?",
                options: [
                    "To create useful and understandable solutions",
                    "To make everything complicated",
                    "To remove usability",
                    "To add random elements"
                ],
                answer: 0
            },
            {
                title: "Design Principles",
                text: "Important design principles include balance, contrast, alignment, repetition, proximity, and hierarchy.",
                example: "A large heading creates visual hierarchy by attracting attention first.",
                question: "Which is a design principle?",
                options: [
                    "Contrast",
                    "Database",
                    "Compiler",
                    "Router"
                ],
                answer: 0
            },
            {
                title: "Visual Hierarchy",
                text: "Visual hierarchy guides users toward the most important information first.",
                example: "A large bold heading is usually noticed before smaller supporting text.",
                question: "What does visual hierarchy do?",
                options: [
                    "Guides attention",
                    "Stores data",
                    "Runs code",
                    "Connects servers"
                ],
                answer: 0
            },
            {
                title: "Balance",
                text: "Balance distributes visual weight across a design so that the interface feels stable and organized.",
                example: "Images and text can be arranged so one side does not feel unnecessarily heavy.",
                question: "What does balance help create?",
                options: [
                    "A stable visual composition",
                    "A database",
                    "A network connection",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Contrast",
                text: "Contrast makes different elements visually distinct and helps important information stand out.",
                example: "Dark text on a light background provides readable contrast.",
                question: "Why is contrast useful?",
                options: [
                    "It helps elements stand out",
                    "It stores information",
                    "It replaces navigation",
                    "It creates APIs"
                ],
                answer: 0
            },
            {
                title: "Alignment",
                text: "Alignment creates visual order by placing related elements along common edges or positions.",
                example: "Aligning form labels and input fields makes a form easier to scan.",
                question: "What does alignment provide?",
                options: [
                    "Visual organization",
                    "Cloud storage",
                    "Database security",
                    "Code execution"
                ],
                answer: 0
            },
            {
                title: "Consistency",
                text: "Consistency means using similar visual patterns and interactions throughout a product.",
                example: "Using the same button style on every screen improves consistency.",
                question: "Why is consistency important?",
                options: [
                    "It makes interfaces easier to learn",
                    "It removes all UI elements",
                    "It increases server speed",
                    "It replaces user research"
                ],
                answer: 0
            },
            {
                title: "Design Thinking",
                text: "Design thinking focuses on understanding users, defining problems, creating ideas, testing solutions, and improving them.",
                example: "A designer can interview students before designing a study app.",
                question: "What does design thinking focus on?",
                options: [
                    "Understanding users and solving their problems",
                    "Only choosing colors",
                    "Only writing code",
                    "Only creating databases"
                ],
                answer: 0
            }
        ]
    },

    "Color & Typography": {
        title: "Color & Typography",
        subtitle: "Learn how colors and typography create clear and attractive interfaces.",
        lessons: [
            {
                title: "Understanding Color",
                text: "Color can communicate meaning, create emotion, establish hierarchy, and support brand identity.",
                example: "Green is often used to communicate success.",
                question: "What can color communicate?",
                options: [
                    "Meaning and visual emphasis",
                    "Database relationships",
                    "CPU speed",
                    "Network bandwidth"
                ],
                answer: 0
            },
            {
                title: "Color Theory",
                text: "Color theory explains relationships between colors and helps designers create harmonious color combinations.",
                example: "Complementary colors can create strong visual contrast.",
                question: "What does color theory help with?",
                options: [
                    "Creating effective color combinations",
                    "Writing backend code",
                    "Managing databases",
                    "Testing APIs"
                ],
                answer: 0
            },
            {
                title: "Color Contrast",
                text: "Good color contrast improves readability and accessibility.",
                example: "Dark text on a light background is generally easier to read.",
                question: "Why is color contrast important?",
                options: [
                    "It improves readability",
                    "It increases storage",
                    "It replaces typography",
                    "It creates databases"
                ],
                answer: 0
            },
            {
                title: "Typography Basics",
                text: "Typography involves choosing fonts, sizes, weights, spacing, and line heights for readable text.",
                example: "A heading can use a larger font size and heavier weight than body text.",
                question: "What is typography?",
                options: [
                    "The design and arrangement of text",
                    "A database system",
                    "A network protocol",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Font Selection",
                text: "Fonts should match the product's purpose while remaining readable and consistent.",
                example: "A professional business dashboard may use a clean sans-serif font.",
                question: "What is important when selecting a font?",
                options: [
                    "Readability and suitability",
                    "Only file size",
                    "Only color",
                    "Only animation"
                ],
                answer: 0
            },
            {
                title: "Text Hierarchy",
                text: "Different font sizes and weights help users understand the relationship between headings, subheadings, and body text.",
                example: "A page title can be larger than section headings.",
                question: "What does text hierarchy help users understand?",
                options: [
                    "The importance and structure of information",
                    "Database speed",
                    "Internet connection",
                    "Server location"
                ],
                answer: 0
            },
            {
                title: "Spacing",
                text: "Proper spacing between text and elements improves readability and reduces visual clutter.",
                example: "Adding space between sections makes a dashboard easier to scan.",
                question: "Why is spacing important?",
                options: [
                    "It improves readability and organization",
                    "It increases RAM",
                    "It replaces color",
                    "It creates APIs"
                ],
                answer: 0
            },
            {
                title: "Accessible Typography",
                text: "Accessible typography uses readable sizes, sufficient contrast, and appropriate spacing.",
                example: "Very small text with low contrast can be difficult for many users to read.",
                question: "What improves text accessibility?",
                options: [
                    "Readable size and sufficient contrast",
                    "Tiny text",
                    "Low contrast",
                    "Random fonts"
                ],
                answer: 0
            }
        ]
    },

    "User Research": {
        title: "User Research",
        subtitle: "Learn how to understand users and discover their real needs.",
        lessons: [
            {
                title: "What is User Research?",
                text: "User research is the process of studying users to understand their needs, behaviors, goals, and problems.",
                example: "Interviewing students can reveal problems they face while studying online.",
                question: "What is the purpose of user research?",
                options: [
                    "To understand users and their needs",
                    "To choose random colors",
                    "To write backend code",
                    "To create databases"
                ],
                answer: 0
            },
            {
                title: "User Interviews",
                text: "Interviews allow designers to ask users questions and learn about their experiences.",
                example: "Ask students what makes online learning difficult for them.",
                question: "What can interviews provide?",
                options: [
                    "Insights into user experiences",
                    "Only source code",
                    "Database tables",
                    "Server hardware"
                ],
                answer: 0
            },
            {
                title: "Surveys",
                text: "Surveys collect structured responses from a larger number of users.",
                example: "A survey can ask 100 students which learning features they use most.",
                question: "When are surveys useful?",
                options: [
                    "When collecting responses from many users",
                    "Only when writing code",
                    "Only when designing logos",
                    "Only when testing servers"
                ],
                answer: 0
            },
            {
                title: "User Personas",
                text: "A persona is a research-based representation of a typical target user.",
                example: "A student persona may include goals, challenges, and technology habits.",
                question: "What is a user persona?",
                options: [
                    "A representation of a target user",
                    "A database",
                    "A programming language",
                    "A cloud server"
                ],
                answer: 0
            },
            {
                title: "User Goals",
                text: "Understanding user goals helps designers create features that solve meaningful problems.",
                example: "A student may want to quickly find weak topics before an exam.",
                question: "Why identify user goals?",
                options: [
                    "To design around real user needs",
                    "To remove features",
                    "To choose hardware",
                    "To write random code"
                ],
                answer: 0
            },
            {
                title: "Pain Points",
                text: "Pain points are problems or frustrations users experience while completing tasks.",
                example: "Users may find a checkout process too long and confusing.",
                question: "What is a pain point?",
                options: [
                    "A user problem or frustration",
                    "A database record",
                    "A color palette",
                    "A programming function"
                ],
                answer: 0
            },
            {
                title: "Competitive Research",
                text: "Competitive research studies similar products to understand their strengths, weaknesses, and opportunities.",
                example: "A designer can compare different learning applications before designing a new one.",
                question: "Why study competitors?",
                options: [
                    "To understand existing solutions",
                    "To copy everything blindly",
                    "To remove user research",
                    "To avoid solving problems"
                ],
                answer: 0
            },
            {
                title: "Research Insights",
                text: "Research insights turn collected user information into useful findings that can guide design decisions.",
                example: "If many users struggle with navigation, the design can be simplified.",
                question: "What are research insights used for?",
                options: [
                    "Guiding design decisions",
                    "Deleting research",
                    "Increasing storage",
                    "Replacing testing"
                ],
                answer: 0
            }
        ]
    },

    "Wireframing": {
        title: "Wireframing",
        subtitle: "Learn how to plan screen structure before creating the final interface.",
        lessons: [
            {
                title: "What is a Wireframe?",
                text: "A wireframe is a simple visual representation of a screen's structure and layout.",
                example: "A login wireframe can show where the logo, input fields, and button will be placed.",
                question: "What is a wireframe?",
                options: [
                    "A basic representation of a screen layout",
                    "A database",
                    "A finished application",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Low-Fidelity Wireframes",
                text: "Low-fidelity wireframes are simple sketches used to explore structure and ideas quickly.",
                example: "A designer can draw boxes representing images and buttons.",
                question: "What are low-fidelity wireframes useful for?",
                options: [
                    "Exploring ideas quickly",
                    "Final visual design only",
                    "Database management",
                    "Writing APIs"
                ],
                answer: 0
            },
            {
                title: "High-Fidelity Wireframes",
                text: "High-fidelity designs contain more detail and closely represent the intended final interface.",
                example: "A high-fidelity screen can include realistic text, spacing, and components.",
                question: "What do high-fidelity designs provide?",
                options: [
                    "More detailed representation",
                    "Only rough sketches",
                    "Database queries",
                    "Server configuration"
                ],
                answer: 0
            },
            {
                title: "Screen Flow",
                text: "Screen flow shows how users move from one screen or state to another.",
                example: "Login → Home → Profile represents a simple screen flow.",
                question: "What does screen flow show?",
                options: [
                    "How users move through an application",
                    "How databases store data",
                    "How servers are built",
                    "How CPUs execute code"
                ],
                answer: 0
            },
            {
                title: "Navigation Planning",
                text: "Navigation planning determines how users access important sections and features.",
                example: "A bottom navigation bar can provide access to Home, Search, and Profile.",
                question: "Why plan navigation?",
                options: [
                    "To help users move through the product",
                    "To increase database size",
                    "To replace testing",
                    "To remove features"
                ],
                answer: 0
            },
            {
                title: "Content Structure",
                text: "Wireframes help organize information before visual styling is added.",
                example: "A dashboard wireframe can decide where progress cards and menus should appear.",
                question: "What can wireframes help organize?",
                options: [
                    "Content and screen structure",
                    "Server hardware",
                    "Database passwords",
                    "Network cables"
                ],
                answer: 0
            },
            {
                title: "Wireframe Feedback",
                text: "Reviewing wireframes early helps identify navigation and layout problems before detailed design work.",
                example: "A user may point out that an important button is difficult to find.",
                question: "Why review wireframes early?",
                options: [
                    "To identify design problems early",
                    "To avoid feedback",
                    "To remove navigation",
                    "To skip research"
                ],
                answer: 0
            },
            {
                title: "From Wireframe to Design",
                text: "After the structure is validated, designers can add colors, typography, images, components, and visual details.",
                example: "A basic login wireframe can become a polished login screen.",
                question: "What happens after wireframing?",
                options: [
                    "The validated structure can be developed into a detailed design",
                    "The project must be deleted",
                    "Research becomes impossible",
                    "All navigation is removed"
                ],
                answer: 0
            }
        ]
    },

    "Figma": {
        title: "Figma",
        subtitle: "Learn the essential concepts for designing interfaces and prototypes in Figma.",
        lessons: [
            {
                title: "Introduction to Figma",
                text: "Figma is a collaborative design tool commonly used for UI design, wireframes, and prototypes.",
                example: "A team can design an application interface together in a Figma file.",
                question: "What is Figma used for?",
                options: [
                    "UI design and prototyping",
                    "Database management",
                    "Cloud server administration",
                    "Writing operating systems"
                ],
                answer: 0
            },
            {
                title: "Frames",
                text: "Frames represent screens or containers where designers place interface elements.",
                example: "An Android phone frame can represent a mobile app screen.",
                question: "What can a frame represent?",
                options: [
                    "A screen or design container",
                    "A database table",
                    "A server",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Layers",
                text: "Layers organize individual design elements within a Figma file.",
                example: "A screen may contain separate layers for background, text, icons, and buttons.",
                question: "What do layers organize?",
                options: [
                    "Design elements",
                    "Database records",
                    "Network packets",
                    "Cloud servers"
                ],
                answer: 0
            },
            {
                title: "Components",
                text: "Components are reusable design elements that help maintain consistency across a product.",
                example: "A reusable button component can be used on many screens.",
                question: "Why use components?",
                options: [
                    "To create reusable design elements",
                    "To store databases",
                    "To run servers",
                    "To write APIs"
                ],
                answer: 0
            },
            {
                title: "Auto Layout",
                text: "Auto Layout helps elements automatically arrange and resize based on their content and spacing rules.",
                example: "A button can expand when its text becomes longer.",
                question: "What does Auto Layout help with?",
                options: [
                    "Automatic arrangement and sizing",
                    "Database backups",
                    "Network security",
                    "Programming syntax"
                ],
                answer: 0
            },
            {
                title: "Prototyping in Figma",
                text: "Figma prototypes connect screens and interactions to simulate how a product works.",
                example: "Clicking a Login button can navigate to a Home screen in a prototype.",
                question: "What is a prototype used for?",
                options: [
                    "Simulating interactions",
                    "Creating databases",
                    "Hosting websites",
                    "Managing servers"
                ],
                answer: 0
            },
            {
                title: "Design Systems",
                text: "A design system contains reusable styles, components, and guidelines for consistent product design.",
                example: "A design system can define the same colors and button styles for every screen.",
                question: "Why use a design system?",
                options: [
                    "To maintain consistency",
                    "To remove all components",
                    "To replace research",
                    "To manage databases"
                ],
                answer: 0
            },
            {
                title: "Figma Collaboration",
                text: "Figma allows multiple team members to collaborate on design work and provide feedback.",
                example: "A designer and developer can review the same design file together.",
                question: "What is a benefit of Figma collaboration?",
                options: [
                    "Teams can work together on designs",
                    "It removes feedback",
                    "It replaces databases",
                    "It prevents sharing"
                ],
                answer: 0
            }
        ]
    },

    "Prototyping": {
        title: "Prototyping",
        subtitle: "Learn how to turn designs into interactive experiences for testing.",
        lessons: [
            {
                title: "What is a Prototype?",
                text: "A prototype is an interactive representation of a product that helps demonstrate how it may work.",
                example: "A clickable app prototype can show the journey from login to dashboard.",
                question: "What is a prototype?",
                options: [
                    "An interactive representation of a product",
                    "A database",
                    "A final server",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Why Prototype?",
                text: "Prototypes help teams test ideas and interactions before building the final product.",
                example: "A team can test whether users understand a new navigation system.",
                question: "Why create prototypes?",
                options: [
                    "To test ideas before development",
                    "To avoid user feedback",
                    "To replace databases",
                    "To remove design"
                ],
                answer: 0
            },
            {
                title: "Interactions",
                text: "Interactions define what happens when users click, tap, swipe, or perform another action.",
                example: "Tapping a button can open another screen.",
                question: "What do interactions define?",
                options: [
                    "What happens after user actions",
                    "Database storage",
                    "Server hardware",
                    "Font files"
                ],
                answer: 0
            },
            {
                title: "Transitions",
                text: "Transitions describe how the interface changes from one state or screen to another.",
                example: "A screen can slide into view when a user taps a menu item.",
                question: "What is a transition?",
                options: [
                    "A change between interface states or screens",
                    "A database query",
                    "A programming language",
                    "A network cable"
                ],
                answer: 0
            },
            {
                title: "User Flows",
                text: "A user flow describes the steps a user takes to complete a goal.",
                example: "Open app → Login → Search course → Start lesson.",
                question: "What does a user flow describe?",
                options: [
                    "Steps taken to complete a goal",
                    "Database structure",
                    "Server hardware",
                    "Color theory"
                ],
                answer: 0
            },
            {
                title: "Prototype Testing",
                text: "Testing a prototype helps identify confusing interactions and navigation problems.",
                example: "Users may struggle to find the checkout button during a prototype test.",
                question: "What can prototype testing reveal?",
                options: [
                    "Interaction and navigation problems",
                    "CPU speed",
                    "Database size",
                    "Cloud region"
                ],
                answer: 0
            },
            {
                title: "Iterating Designs",
                text: "Iteration means improving a design based on research, feedback, and testing results.",
                example: "After testing, a designer can simplify a confusing menu.",
                question: "What does iteration mean?",
                options: [
                    "Improving a design through repeated learning",
                    "Deleting the design",
                    "Avoiding feedback",
                    "Stopping research"
                ],
                answer: 0
            },
            {
                title: "Prototype to Product",
                text: "A validated prototype provides a clearer foundation for development but is not necessarily the final product.",
                example: "Developers use the approved design and interactions as a reference during implementation.",
                question: "What is the role of a prototype?",
                options: [
                    "To validate ideas and interactions",
                    "To replace all development",
                    "To store user passwords",
                    "To manage servers"
                ],
                answer: 0
            }
        ]
    },

    "Usability Testing": {
        title: "Usability Testing",
        subtitle: "Learn how to evaluate whether users can use a product easily and effectively.",
        lessons: [
            {
                title: "What is Usability?",
                text: "Usability describes how easily and effectively users can accomplish their goals with a product.",
                example: "A simple checkout process has better usability than a confusing one.",
                question: "What does usability describe?",
                options: [
                    "How easily users can accomplish goals",
                    "Database performance only",
                    "Server hardware",
                    "Programming syntax"
                ],
                answer: 0
            },
            {
                title: "Usability Testing",
                text: "Usability testing observes users completing tasks to discover problems with a product.",
                example: "Ask users to find and enroll in a course while observing where they struggle.",
                question: "What happens in usability testing?",
                options: [
                    "Users perform tasks while the design is evaluated",
                    "Only developers write code",
                    "Databases are deleted",
                    "Servers are replaced"
                ],
                answer: 0
            },
            {
                title: "Test Tasks",
                text: "Good usability tests use realistic tasks that represent important user goals.",
                example: "Ask a user to find a product and add it to a cart.",
                question: "What should usability tasks represent?",
                options: [
                    "Real user goals",
                    "Random technical commands",
                    "Database queries only",
                    "Server operations"
                ],
                answer: 0
            },
            {
                title: "Observation",
                text: "Watching users interact with a product can reveal problems they may not mention directly.",
                example: "A user repeatedly taps the wrong icon, showing that the icon may be unclear.",
                question: "Why observe users?",
                options: [
                    "To discover real interaction problems",
                    "To replace all design work",
                    "To increase storage",
                    "To remove testing"
                ],
                answer: 0
            },
            {
                title: "User Feedback",
                text: "User comments and reactions provide valuable information about what works and what needs improvement.",
                example: "Users may report that a navigation label is confusing.",
                question: "Why collect feedback?",
                options: [
                    "To identify areas for improvement",
                    "To remove users",
                    "To stop testing",
                    "To delete the prototype"
                ],
                answer: 0
            },
            {
                title: "Usability Metrics",
                text: "Metrics such as task completion, errors, time, and satisfaction can help evaluate usability.",
                example: "A team can measure how many users successfully complete a signup task.",
                question: "Which can be a usability metric?",
                options: [
                    "Task completion rate",
                    "CPU temperature",
                    "Hard disk brand",
                    "Screen size only"
                ],
                answer: 0
            },
            {
                title: "Finding Usability Problems",
                text: "Designers should identify repeated problems, understand their causes, and prioritize important issues.",
                example: "If many users cannot find Search, navigation should be reconsidered.",
                question: "What should designers do with repeated problems?",
                options: [
                    "Investigate and prioritize them",
                    "Ignore them",
                    "Delete the users",
                    "Stop testing"
                ],
                answer: 0
            },
            {
                title: "Improving the Design",
                text: "Usability findings should lead to design changes that make tasks clearer and easier.",
                example: "A confusing form can be simplified after testing.",
                question: "What is the goal of usability improvements?",
                options: [
                    "Make tasks easier for users",
                    "Make interfaces more confusing",
                    "Remove useful features",
                    "Avoid feedback"
                ],
                answer: 0
            }
        ]
    },

    "UX Portfolio": {
        title: "UX Portfolio",
        subtitle: "Learn how to present your UX work and demonstrate your design process.",
        lessons: [
            {
                title: "What is a UX Portfolio?",
                text: "A UX portfolio presents selected design projects and explains how you solved user problems.",
                example: "A portfolio can include a case study for a student learning application.",
                question: "What does a UX portfolio show?",
                options: [
                    "Design projects and problem-solving process",
                    "Only personal photos",
                    "Only source code",
                    "Only certificates"
                ],
                answer: 0
            },
            {
                title: "Case Studies",
                text: "A case study explains a project from problem discovery through research, design, testing, and final results.",
                example: "Explain why a learning app was redesigned and what changed after testing.",
                question: "What does a UX case study explain?",
                options: [
                    "The design process and results",
                    "Only the final color palette",
                    "Only programming code",
                    "Only the project name"
                ],
                answer: 0
            },
            {
                title: "Problem Statement",
                text: "A problem statement clearly describes the user problem that the project aims to solve.",
                example: "Students struggle to track their learning progress across multiple subjects.",
                question: "Why include a problem statement?",
                options: [
                    "To clearly define the problem",
                    "To hide the design process",
                    "To replace research",
                    "To remove user needs"
                ],
                answer: 0
            },
            {
                title: "Research in Portfolio",
                text: "Showing relevant research demonstrates that design decisions were based on user needs rather than guesses.",
                example: "Include interview findings or survey insights that influenced the design.",
                question: "Why show research?",
                options: [
                    "To demonstrate evidence behind design decisions",
                    "To make the project confusing",
                    "To remove users",
                    "To replace testing"
                ],
                answer: 0
            },
            {
                title: "Design Process",
                text: "A portfolio should explain how ideas developed from early concepts to the final solution.",
                example: "Show wireframes, iterations, prototypes, and final screens.",
                question: "What should a design process show?",
                options: [
                    "How the solution evolved",
                    "Only the final logo",
                    "Only the source code",
                    "Only the project title"
                ],
                answer: 0
            },
            {
                title: "Showing Results",
                text: "Good case studies explain what changed and how the final solution addressed the original problem.",
                example: "Show that users completed a task faster after a navigation redesign.",
                question: "Why show results?",
                options: [
                    "To demonstrate the impact of the design",
                    "To hide the outcome",
                    "To remove testing",
                    "To avoid explaining the project"
                ],
                answer: 0
            },
            {
                title: "Portfolio Presentation",
                text: "A strong portfolio should be clear, organized, visual, and easy for recruiters or clients to understand.",
                example: "Use headings and images to make each case study easy to scan.",
                question: "What makes a portfolio effective?",
                options: [
                    "Clear storytelling and relevant evidence",
                    "Random information",
                    "Only large images",
                    "No explanation"
                ],
                answer: 0
            },
            {
                title: "Building Your UX Career",
                text: "A portfolio should highlight your strongest work, design thinking, user understanding, and ability to communicate decisions.",
                example: "Select two or three strong projects instead of including every small exercise.",
                question: "What should a UX portfolio highlight?",
                options: [
                    "Strong projects and design thinking",
                    "Only certificates",
                    "Only personal details",
                    "Only unfinished work"
                ],
                answer: 0
            }
        ]
    },
        "Marketing Fundamentals": {
        title: "Marketing Fundamentals",
        subtitle: "Learn the basic concepts of marketing and how businesses reach customers.",
        lessons: [
            {
                title: "What is Marketing?",
                text: "Marketing is the process of understanding customers and communicating the value of a product or service.",
                example: "A company studies what students need before promoting a learning app.",
                question: "What is the main purpose of marketing?",
                options: [
                    "To connect products with customer needs",
                    "To only design logos",
                    "To manage computer hardware",
                    "To write programming code"
                ],
                answer: 0
            },
            {
                title: "Target Audience",
                text: "A target audience is the specific group of people a product or campaign is designed for.",
                example: "A college-learning app may target university students.",
                question: "What is a target audience?",
                options: [
                    "The specific group a product is intended for",
                    "Every person on the internet",
                    "Only employees",
                    "Only competitors"
                ],
                answer: 0
            },
            {
                title: "Customer Needs",
                text: "Understanding customer needs helps businesses create useful products and effective marketing messages.",
                example: "Students may need affordable and easy-to-use learning resources.",
                question: "Why understand customer needs?",
                options: [
                    "To create relevant products and messages",
                    "To ignore customers",
                    "To avoid research",
                    "To remove useful features"
                ],
                answer: 0
            },
            {
                title: "Marketing Mix",
                text: "The traditional marketing mix is often explained using Product, Price, Place, and Promotion.",
                example: "A company decides what to sell, its price, where to offer it, and how to promote it.",
                question: "Which is part of the traditional marketing mix?",
                options: [
                    "Product",
                    "Processor",
                    "Programming",
                    "Protocol"
                ],
                answer: 0
            },
            {
                title: "Branding",
                text: "Branding creates a recognizable identity through names, visuals, messaging, and customer experience.",
                example: "A consistent logo and communication style can help customers recognize a company.",
                question: "What does branding help create?",
                options: [
                    "A recognizable identity",
                    "A database",
                    "A computer network",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Marketing Funnel",
                text: "A marketing funnel represents stages a potential customer may move through, such as awareness, consideration, and conversion.",
                example: "Someone first sees an ad, learns about the product, and later signs up.",
                question: "What does a marketing funnel describe?",
                options: [
                    "The customer journey toward conversion",
                    "A database structure",
                    "A software compiler",
                    "A network connection"
                ],
                answer: 0
            },
            {
                title: "Customer Journey",
                text: "The customer journey describes interactions a person has with a brand before, during, and after a purchase or conversion.",
                example: "A customer discovers a product through social media and later visits its website.",
                question: "What does a customer journey describe?",
                options: [
                    "Customer interactions with a brand",
                    "Server performance",
                    "Programming steps",
                    "Database tables"
                ],
                answer: 0
            },
            {
                title: "Marketing Goals",
                text: "Marketing goals should be clear and measurable, such as increasing awareness, leads, sales, or engagement.",
                example: "A campaign may aim to increase website signups by 20%.",
                question: "What makes a marketing goal useful?",
                options: [
                    "It is clear and measurable",
                    "It is completely random",
                    "It cannot be measured",
                    "It has no target"
                ],
                answer: 0
            }
        ]
    },

    "Content Marketing": {
        title: "Content Marketing",
        subtitle: "Learn how valuable content can attract, educate, and engage an audience.",
        lessons: [
            {
                title: "What is Content Marketing?",
                text: "Content marketing uses useful and relevant content to attract and engage a target audience.",
                example: "A company can publish educational blog posts about career skills.",
                question: "What is content marketing?",
                options: [
                    "Using valuable content to attract and engage audiences",
                    "Only buying advertisements",
                    "Only designing logos",
                    "Only sending emails"
                ],
                answer: 0
            },
            {
                title: "Types of Content",
                text: "Content can include blog posts, videos, social media posts, podcasts, guides, newsletters, and more.",
                example: "A technology company can create tutorials and short educational videos.",
                question: "Which is a type of content?",
                options: [
                    "Video",
                    "CPU",
                    "Router",
                    "Database server"
                ],
                answer: 0
            },
            {
                title: "Content Strategy",
                text: "A content strategy defines what content to create, who it is for, where it will be published, and what goal it should achieve.",
                example: "A career platform may publish interview tips every week.",
                question: "What does a content strategy define?",
                options: [
                    "Content goals, audience, topics, and distribution",
                    "Only the logo",
                    "Only server hardware",
                    "Only database tables"
                ],
                answer: 0
            },
            {
                title: "Content Calendar",
                text: "A content calendar organizes what content will be published and when.",
                example: "A brand can schedule Instagram posts for different days of the week.",
                question: "What is a content calendar used for?",
                options: [
                    "Planning and scheduling content",
                    "Managing computer memory",
                    "Creating databases",
                    "Writing operating systems"
                ],
                answer: 0
            },
            {
                title: "Storytelling",
                text: "Storytelling can make content more engaging by connecting information with a clear narrative.",
                example: "A brand can share how a product helped solve a customer's problem.",
                question: "Why is storytelling useful?",
                options: [
                    "It can make content more engaging",
                    "It removes the audience",
                    "It replaces analytics",
                    "It manages servers"
                ],
                answer: 0
            },
            {
                title: "Educational Content",
                text: "Educational content provides useful information that helps the audience solve problems or learn something.",
                example: "A coding platform can publish beginner Python tutorials.",
                question: "What is the purpose of educational content?",
                options: [
                    "To provide useful knowledge",
                    "To hide information",
                    "To remove engagement",
                    "To replace products"
                ],
                answer: 0
            },
            {
                title: "Content Distribution",
                text: "Content distribution means sharing content through suitable channels such as websites, social media, email, or search engines.",
                example: "A blog article can be promoted through social media.",
                question: "What is content distribution?",
                options: [
                    "Sharing content through relevant channels",
                    "Deleting content",
                    "Writing database queries",
                    "Managing servers"
                ],
                answer: 0
            },
            {
                title: "Content Performance",
                text: "Content performance can be evaluated using metrics such as views, engagement, clicks, shares, leads, and conversions.",
                example: "A marketer can compare which videos generate the most engagement.",
                question: "How can content performance be measured?",
                options: [
                    "Using relevant performance metrics",
                    "Only by guessing",
                    "By deleting analytics",
                    "By ignoring users"
                ],
                answer: 0
            }
        ]
    },

    "SEO": {
        title: "SEO",
        subtitle: "Learn how search engine optimization helps websites become easier to discover.",
        lessons: [
            {
                title: "What is SEO?",
                text: "Search Engine Optimization is the practice of improving a website so it can be discovered more effectively through search engines.",
                example: "A website can optimize its pages around useful search queries.",
                question: "What does SEO stand for?",
                options: [
                    "Search Engine Optimization",
                    "Social Email Operation",
                    "Search Engine Output",
                    "System Engagement Optimization"
                ],
                answer: 0
            },
            {
                title: "Keywords",
                text: "Keywords are words or phrases people use when searching for information online.",
                example: "Someone searching for beginner Python courses might use that phrase as a search query.",
                question: "What is a keyword?",
                options: [
                    "A word or phrase used in a search",
                    "A database password",
                    "A programming variable only",
                    "A server address"
                ],
                answer: 0
            },
            {
                title: "Search Intent",
                text: "Search intent describes what a person is trying to accomplish when they perform a search.",
                example: "A search for 'buy laptop' has a different intent from 'how to clean a laptop'.",
                question: "What is search intent?",
                options: [
                    "The purpose behind a search",
                    "A database structure",
                    "A network protocol",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "On-Page SEO",
                text: "On-page SEO involves improving elements on a webpage such as titles, headings, content, and internal links.",
                example: "A page can use a clear title that accurately describes its topic.",
                question: "What is part of on-page SEO?",
                options: [
                    "Optimizing webpage content and structure",
                    "Buying computer hardware",
                    "Changing CPU speed",
                    "Managing local files"
                ],
                answer: 0
            },
            {
                title: "Technical SEO",
                text: "Technical SEO focuses on technical aspects that affect how search engines can access, understand, and index a website.",
                example: "A website should have a crawlable structure and work well on mobile devices.",
                question: "What does technical SEO focus on?",
                options: [
                    "Technical aspects of website accessibility and indexing",
                    "Only social media posts",
                    "Only advertisements",
                    "Only logo design"
                ],
                answer: 0
            },
            {
                title: "Backlinks",
                text: "A backlink is a link from another website to your website. Relevant and trustworthy links can support a site's authority.",
                example: "An educational website may link to a useful research resource.",
                question: "What is a backlink?",
                options: [
                    "A link from another website to your site",
                    "A database record",
                    "A programming variable",
                    "A social media password"
                ],
                answer: 0
            },
            {
                title: "SEO Content",
                text: "Good SEO content should satisfy user intent, provide useful information, and be easy to understand.",
                example: "A tutorial should answer the questions users are actually searching for.",
                question: "What should good SEO content focus on?",
                options: [
                    "Useful content that satisfies user intent",
                    "Keyword stuffing only",
                    "Random text",
                    "Hidden content"
                ],
                answer: 0
            },
            {
                title: "SEO Analytics",
                text: "SEO performance can be evaluated using search visibility, clicks, impressions, rankings, and conversions.",
                example: "A marketer can monitor whether organic traffic increases after improving a page.",
                question: "Which can be an SEO metric?",
                options: [
                    "Organic clicks",
                    "CPU temperature",
                    "RAM voltage",
                    "Keyboard speed"
                ],
                answer: 0
            }
        ]
    },

    "Social Media": {
        title: "Social Media",
        subtitle: "Learn how brands use social platforms to build audiences and engagement.",
        lessons: [
            {
                title: "Social Media Marketing",
                text: "Social media marketing uses social platforms to communicate with audiences, build awareness, and support business goals.",
                example: "A brand can use Instagram to share product updates and educational content.",
                question: "What is social media marketing?",
                options: [
                    "Marketing through social platforms",
                    "Managing computer hardware",
                    "Writing database queries",
                    "Creating operating systems"
                ],
                answer: 0
            },
            {
                title: "Choosing Platforms",
                text: "Different platforms attract different audiences and content formats, so businesses should choose channels that match their goals.",
                example: "A visual brand may benefit from image and video-focused platforms.",
                question: "How should a platform be selected?",
                options: [
                    "Based on audience and marketing goals",
                    "Randomly",
                    "Only by follower count",
                    "Only by logo color"
                ],
                answer: 0
            },
            {
                title: "Social Media Content",
                text: "Effective social content should be relevant, useful, engaging, and appropriate for the chosen platform.",
                example: "A short tutorial video can educate users while encouraging engagement.",
                question: "What should social content be?",
                options: [
                    "Relevant and engaging",
                    "Always unrelated",
                    "Only promotional",
                    "Difficult to understand"
                ],
                answer: 0
            },
            {
                title: "Engagement",
                text: "Engagement includes actions such as likes, comments, shares, saves, clicks, and other meaningful interactions.",
                example: "A useful post may receive comments and shares from the audience.",
                question: "What is social media engagement?",
                options: [
                    "Audience interaction with content",
                    "Database storage",
                    "Server performance",
                    "Programming syntax"
                ],
                answer: 0
            },
            {
                title: "Community Building",
                text: "Community building focuses on creating meaningful relationships and conversations with an audience.",
                example: "A brand can answer questions and encourage discussions among followers.",
                question: "What is community building?",
                options: [
                    "Building relationships with an audience",
                    "Deleting comments",
                    "Ignoring followers",
                    "Only posting advertisements"
                ],
                answer: 0
            },
            {
                title: "Social Media Analytics",
                text: "Analytics help marketers understand how content performs and how audiences interact with it.",
                example: "A marketer can compare reach and engagement across different posts.",
                question: "Why use social media analytics?",
                options: [
                    "To understand content performance",
                    "To delete content",
                    "To replace customers",
                    "To stop measuring results"
                ],
                answer: 0
            },
            {
                title: "Social Media Campaigns",
                text: "A campaign is a coordinated set of content and activities designed to achieve a specific marketing goal.",
                example: "A brand may run a week-long campaign to promote a new course.",
                question: "What is a campaign?",
                options: [
                    "A coordinated marketing effort with a goal",
                    "A database",
                    "A programming language",
                    "A server"
                ],
                answer: 0
            },
            {
                title: "Social Media Best Practices",
                text: "Successful social media marketing requires consistency, relevant content, audience interaction, measurement, and continuous improvement.",
                example: "Review analytics regularly and improve future content based on results.",
                question: "Which is a social media best practice?",
                options: [
                    "Consistent and relevant content",
                    "Ignoring the audience",
                    "Posting without goals",
                    "Never checking analytics"
                ],
                answer: 0
            }
        ]
    },

    "Email Marketing": {
        title: "Email Marketing",
        subtitle: "Learn how businesses use email to communicate with subscribers and customers.",
        lessons: [
            {
                title: "What is Email Marketing?",
                text: "Email marketing uses email communication to educate, engage, retain, or convert subscribers.",
                example: "An online course platform can send new lesson announcements to subscribers.",
                question: "What is email marketing?",
                options: [
                    "Marketing communication through email",
                    "Database management",
                    "Network administration",
                    "Programming"
                ],
                answer: 0
            },
            {
                title: "Email Lists",
                text: "An email list contains people who have provided their email for communication, usually with appropriate permission.",
                example: "Customers can subscribe to receive product updates.",
                question: "What is an email list?",
                options: [
                    "A collection of email subscribers",
                    "A database server",
                    "A programming language",
                    "A social media page"
                ],
                answer: 0
            },
            {
                title: "Subject Lines",
                text: "A subject line tells recipients what an email is about and can influence whether they open it.",
                example: "A clear subject such as 'Your weekly learning update' communicates the purpose.",
                question: "What is the purpose of a subject line?",
                options: [
                    "To communicate the email's topic",
                    "To store user passwords",
                    "To create a database",
                    "To manage servers"
                ],
                answer: 0
            },
            {
                title: "Email Content",
                text: "Effective emails should be clear, relevant, useful, and easy to read.",
                example: "A newsletter can provide one main update with a clear next step.",
                question: "What should email content be?",
                options: [
                    "Relevant and clear",
                    "Confusing and unrelated",
                    "Only images",
                    "Impossible to scan"
                ],
                answer: 0
            },
            {
                title: "Call to Action",
                text: "A call to action tells the reader what action to take next.",
                example: "A button saying 'Start Learning' can direct users to a course.",
                question: "What is a call to action?",
                options: [
                    "A prompt encouraging a specific next action",
                    "A database table",
                    "A server",
                    "A programming function"
                ],
                answer: 0
            },
            {
                title: "Email Segmentation",
                text: "Segmentation divides subscribers into groups based on characteristics or behavior so messages can be more relevant.",
                example: "A company can send different emails to new users and existing customers.",
                question: "Why use email segmentation?",
                options: [
                    "To send more relevant messages",
                    "To remove subscribers",
                    "To delete emails",
                    "To replace analytics"
                ],
                answer: 0
            },
            {
                title: "Email Automation",
                text: "Email automation sends predefined messages based on events, schedules, or user actions.",
                example: "A welcome email can be automatically sent after signup.",
                question: "What is email automation?",
                options: [
                    "Automatically sending emails based on rules or events",
                    "Manually writing every email",
                    "Deleting subscriber data",
                    "Managing computer hardware"
                ],
                answer: 0
            },
            {
                title: "Email Analytics",
                text: "Email analytics can include delivery, opens, clicks, conversions, and unsubscribe rates.",
                example: "A marketer can compare which campaign receives more clicks.",
                question: "Which is an email marketing metric?",
                options: [
                    "Click rate",
                    "CPU speed",
                    "RAM size",
                    "Screen resolution"
                ],
                answer: 0
            }
        ]
    },

    "Google Ads": {
        title: "Google Ads",
        subtitle: "Learn the fundamentals of paid search advertising and campaign management.",
        lessons: [
            {
                title: "What is Google Ads?",
                text: "Google Ads is an advertising platform that allows businesses to promote products and services across Google's advertising network.",
                example: "A company can advertise a course when users search for related terms.",
                question: "What is Google Ads?",
                options: [
                    "An online advertising platform",
                    "A database",
                    "A programming language",
                    "A cloud operating system"
                ],
                answer: 0
            },
            {
                title: "Search Advertising",
                text: "Search ads can appear when users search for terms relevant to an advertiser's offering.",
                example: "A coding course may advertise for searches related to learning programming.",
                question: "When can search ads appear?",
                options: [
                    "When users search relevant terms",
                    "Only when computers are offline",
                    "Only inside databases",
                    "Only on local networks"
                ],
                answer: 0
            },
            {
                title: "Keywords in Ads",
                text: "Advertisers use keywords and targeting settings to help reach people searching for relevant products or services.",
                example: "A course provider may target searches related to online programming courses.",
                question: "Why are keywords important in search advertising?",
                options: [
                    "They help connect ads with relevant searches",
                    "They increase RAM",
                    "They replace landing pages",
                    "They create databases"
                ],
                answer: 0
            },
            {
                title: "Ad Copy",
                text: "Ad copy is the text used in an advertisement and should clearly communicate value and encourage relevant action.",
                example: "An ad can highlight a course's beginner-friendly lessons.",
                question: "What is ad copy?",
                options: [
                    "The text used in an advertisement",
                    "A database record",
                    "A server configuration",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Landing Pages",
                text: "A landing page is the webpage users reach after clicking an advertisement and should support the campaign goal.",
                example: "An ad for a course should lead to a page where users can learn about or enroll in that course.",
                question: "What is a landing page?",
                options: [
                    "A webpage connected to a campaign or ad",
                    "A database",
                    "A network device",
                    "A programming IDE"
                ],
                answer: 0
            },
            {
                title: "Bidding",
                text: "Advertising platforms use bidding systems to determine opportunities for ad placement based on factors including bids and relevance.",
                example: "An advertiser sets campaign bidding preferences based on its goals.",
                question: "What is bidding related to?",
                options: [
                    "Competing for advertising opportunities",
                    "Writing source code",
                    "Creating databases",
                    "Designing hardware"
                ],
                answer: 0
            },
            {
                title: "Ad Budget",
                text: "A campaign budget controls how much an advertiser is willing to spend within its chosen settings.",
                example: "A business can set a daily campaign budget.",
                question: "What does an ad budget control?",
                options: [
                    "Advertising spend",
                    "Website font size",
                    "Database structure",
                    "CPU speed"
                ],
                answer: 0
            },
            {
                title: "Campaign Performance",
                text: "Advertisers measure campaigns using metrics such as impressions, clicks, cost, conversions, and return on ad spend.",
                example: "A marketer can compare the cost and conversions of two campaigns.",
                question: "Why measure campaign performance?",
                options: [
                    "To improve advertising decisions",
                    "To delete campaigns randomly",
                    "To avoid analytics",
                    "To remove customers"
                ],
                answer: 0
            }
        ]
    },

    "Analytics": {
        title: "Analytics",
        subtitle: "Learn how marketing data is collected, measured, and used for better decisions.",
        lessons: [
            {
                title: "What is Marketing Analytics?",
                text: "Marketing analytics uses data to understand campaign performance, customer behavior, and business outcomes.",
                example: "A company can analyze which marketing channel generates the most signups.",
                question: "What is marketing analytics?",
                options: [
                    "Using data to evaluate marketing performance",
                    "Only designing advertisements",
                    "Only writing code",
                    "Only creating logos"
                ],
                answer: 0
            },
            {
                title: "Important Metrics",
                text: "Common marketing metrics include reach, impressions, clicks, engagement, conversion rate, and cost.",
                example: "A campaign can be evaluated by how many people clicked an advertisement.",
                question: "Which is a marketing metric?",
                options: [
                    "Conversion rate",
                    "CPU temperature",
                    "RAM voltage",
                    "Keyboard speed"
                ],
                answer: 0
            },
            {
                title: "Conversion Rate",
                text: "Conversion rate measures the percentage of users who complete a desired action.",
                example: "If 100 people visit a page and 5 sign up, the conversion rate is 5%.",
                question: "What does conversion rate measure?",
                options: [
                    "The percentage completing a desired action",
                    "Internet speed",
                    "Database size",
                    "Server temperature"
                ],
                answer: 0
            },
            {
                title: "Click-Through Rate",
                text: "Click-through rate measures the percentage of people who click after seeing a link or advertisement.",
                example: "A campaign can compare CTR across different ad messages.",
                question: "What does CTR measure?",
                options: [
                    "The percentage of impressions that result in clicks",
                    "The number of databases",
                    "CPU performance",
                    "Storage capacity"
                ],
                answer: 0
            },
            {
                title: "Traffic Sources",
                text: "Traffic sources show where visitors come from, such as search, social media, email, referrals, or direct visits.",
                example: "Analytics can show that most website visitors came from search engines.",
                question: "What do traffic sources show?",
                options: [
                    "Where website visitors came from",
                    "Database passwords",
                    "Server hardware",
                    "Programming syntax"
                ],
                answer: 0
            },
            {
                title: "Campaign Comparison",
                text: "Comparing campaigns helps marketers identify which strategies perform better against defined goals.",
                example: "Two campaigns can be compared by clicks and conversions.",
                question: "Why compare campaigns?",
                options: [
                    "To identify better-performing strategies",
                    "To remove all campaigns",
                    "To ignore data",
                    "To avoid decisions"
                ],
                answer: 0
            },
            {
                title: "Data-Driven Decisions",
                text: "Data-driven marketing uses evidence and measured results instead of relying only on assumptions.",
                example: "A marketer increases investment in a channel that consistently produces strong results.",
                question: "What is a data-driven decision?",
                options: [
                    "A decision based on evidence and data",
                    "A random decision",
                    "A decision based only on guesses",
                    "A decision without measurement"
                ],
                answer: 0
            },
            {
                title: "Marketing Reports",
                text: "Reports summarize important metrics, insights, and recommendations so teams can understand performance.",
                example: "A monthly report can show campaign spend, traffic, conversions, and key insights.",
                question: "What is the purpose of a marketing report?",
                options: [
                    "To summarize performance and insights",
                    "To delete analytics",
                    "To hide results",
                    "To replace campaigns"
                ],
                answer: 0
            }
        ]
    },

    "Marketing Campaign": {
        title: "Marketing Campaign",
        subtitle: "Build a complete digital marketing campaign from planning to measurement.",
        lessons: [
            {
                title: "Define the Campaign Goal",
                text: "Every campaign should begin with a clear goal such as awareness, leads, sales, or engagement.",
                example: "A campaign may aim to generate 500 course registrations.",
                question: "What should a campaign begin with?",
                options: [
                    "A clear goal",
                    "Random posts",
                    "A new database",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Identify the Audience",
                text: "Define who the campaign is intended to reach based on relevant characteristics, needs, and behavior.",
                example: "A beginner coding course may target college students interested in technology.",
                question: "Why identify the audience?",
                options: [
                    "To make the campaign relevant",
                    "To avoid customer research",
                    "To remove content",
                    "To ignore user needs"
                ],
                answer: 0
            },
            {
                title: "Choose Channels",
                text: "Select marketing channels that match the audience, content, budget, and campaign goal.",
                example: "A campaign may use social media, email, search, and content.",
                question: "How should channels be selected?",
                options: [
                    "Based on audience and campaign goals",
                    "Randomly",
                    "Only by popularity",
                    "Only by cost"
                ],
                answer: 0
            },
            {
                title: "Create Campaign Content",
                text: "Create relevant messages and creative assets that communicate the campaign's value clearly.",
                example: "Create short videos, social posts, emails, and landing-page copy.",
                question: "What should campaign content communicate?",
                options: [
                    "Clear value relevant to the audience",
                    "Random information",
                    "Only technical code",
                    "Unrelated topics"
                ],
                answer: 0
            },
            {
                title: "Launch the Campaign",
                text: "Before launch, check targeting, content, links, tracking, budget, and required approvals.",
                example: "Test the signup link before sending users to the campaign landing page.",
                question: "What should be checked before launch?",
                options: [
                    "Links, tracking, content, and targeting",
                    "Only the logo",
                    "Only the font",
                    "Nothing"
                ],
                answer: 0
            },
            {
                title: "Track Performance",
                text: "Monitor relevant metrics throughout the campaign to understand whether it is moving toward its goal.",
                example: "Track clicks, conversions, cost, and engagement.",
                question: "Why track performance?",
                options: [
                    "To understand campaign results",
                    "To delete data",
                    "To avoid improvement",
                    "To stop measurement"
                ],
                answer: 0
            },
            {
                title: "Optimize the Campaign",
                text: "Optimization means improving campaign elements based on performance data and user behavior.",
                example: "Change an underperforming ad message and compare the new results.",
                question: "What does optimization mean?",
                options: [
                    "Improving performance using evidence",
                    "Changing everything randomly",
                    "Deleting analytics",
                    "Ignoring results"
                ],
                answer: 0
            },
            {
                title: "Evaluate Results",
                text: "After the campaign, compare results with the original goals and identify lessons for future campaigns.",
                example: "Review whether the campaign reached its signup target and which channel performed best.",
                question: "What should happen after a campaign?",
                options: [
                    "Evaluate results and learn from them",
                    "Delete all data",
                    "Ignore performance",
                    "Stop measuring"
                ],
                answer: 0
            }
        ]
    },
        "Python": {
        title: "Python",
        subtitle: "Learn Python fundamentals used in data science and machine learning.",
        lessons: [
            {
                title: "Python for Data Science",
                text: "Python is widely used in data science because it has simple syntax and many powerful data libraries.",
                example: "A data scientist can use Python to load, clean, analyze, and visualize datasets.",
                question: "Why is Python popular in data science?",
                options: [
                    "It has simple syntax and powerful libraries",
                    "It only works offline",
                    "It cannot process data",
                    "It is only used for web design"
                ],
                answer: 0
            },
            {
                title: "Variables and Data Types",
                text: "Variables store values, while data types describe the kind of data being stored.",
                example: "A name can be stored as a string and an age as an integer.",
                question: "What does a variable store?",
                options: [
                    "A value",
                    "Only images",
                    "Only databases",
                    "Only functions"
                ],
                answer: 0
            },
            {
                title: "Lists and Dictionaries",
                text: "Lists store ordered collections of values, while dictionaries store data as key-value pairs.",
                example: "A list can contain student marks, while a dictionary can store a student's name and age.",
                question: "Which Python structure stores key-value pairs?",
                options: [
                    "Dictionary",
                    "List",
                    "String",
                    "Integer"
                ],
                answer: 0
            },
            {
                title: "Conditions",
                text: "Conditional statements allow Python programs to make decisions based on conditions.",
                example: "An if statement can check whether a student's score is above 50.",
                question: "What are conditions used for?",
                options: [
                    "Making decisions in a program",
                    "Only storing images",
                    "Creating hardware",
                    "Connecting cables"
                ],
                answer: 0
            },
            {
                title: "Loops",
                text: "Loops repeat a block of code multiple times.",
                example: "A loop can process every value in a dataset.",
                question: "What is the purpose of a loop?",
                options: [
                    "To repeat operations",
                    "To delete Python",
                    "To create a database",
                    "To change screen size"
                ],
                answer: 0
            },
            {
                title: "Functions",
                text: "Functions are reusable blocks of code that perform specific tasks.",
                example: "A function can calculate the average of a set of numbers.",
                question: "Why use functions?",
                options: [
                    "To reuse and organize code",
                    "To remove all variables",
                    "To increase RAM",
                    "To replace datasets"
                ],
                answer: 0
            },
            {
                title: "Working with Data",
                text: "Python can read, transform, analyze, and save data from different sources.",
                example: "A CSV file containing student marks can be loaded and analyzed using Python.",
                question: "What can Python do with datasets?",
                options: [
                    "Read and process data",
                    "Only display images",
                    "Only create websites",
                    "Only manage hardware"
                ],
                answer: 0
            },
            {
                title: "Python in Data Science",
                text: "Python connects programming with data analysis, visualization, machine learning, and automation.",
                example: "A data scientist can use Python with Pandas and NumPy to analyze a dataset.",
                question: "What is Python used for in data science?",
                options: [
                    "Data processing, analysis, and machine learning",
                    "Only designing logos",
                    "Only managing networks",
                    "Only creating hardware"
                ],
                answer: 0
            }
        ]
    },

    "Probability": {
        title: "Probability",
        subtitle: "Learn how probability helps data scientists reason about uncertainty and outcomes.",
        lessons: [
            {
                title: "What is Probability?",
                text: "Probability measures how likely an event is to happen.",
                example: "A fair coin has a 1/2 probability of landing heads.",
                question: "What does probability measure?",
                options: [
                    "How likely an event is",
                    "The size of a dataset",
                    "CPU speed",
                    "Storage capacity"
                ],
                answer: 0
            },
            {
                title: "Probability Values",
                text: "Probability is represented using values from 0 to 1, where 0 means impossible and 1 means certain.",
                example: "An event with probability 0.5 has a 50% chance of occurring.",
                question: "What is the range of probability?",
                options: [
                    "0 to 1",
                    "1 to 1000",
                    "-10 to 10",
                    "0 to 1000 only"
                ],
                answer: 0
            },
            {
                title: "Random Events",
                text: "A random event is an outcome whose exact result cannot be predicted with certainty before it occurs.",
                example: "The result of rolling a fair die is a random event.",
                question: "Which is a random event?",
                options: [
                    "Rolling a die",
                    "Adding 2 + 2",
                    "Reading a fixed value",
                    "Opening a known file"
                ],
                answer: 0
            },
            {
                title: "Independent Events",
                text: "Two events are independent when the outcome of one does not affect the probability of the other.",
                example: "Two separate fair coin tosses are commonly treated as independent events.",
                question: "What are independent events?",
                options: [
                    "Events where one does not affect the other",
                    "Events that always happen together",
                    "Events with no outcomes",
                    "Events with only one value"
                ],
                answer: 0
            },
            {
                title: "Conditional Probability",
                text: "Conditional probability measures the likelihood of an event given that another event has already occurred.",
                example: "The probability of an event can change when additional information is known.",
                question: "What does conditional probability use?",
                options: [
                    "Information about another event",
                    "Only random numbers",
                    "Only averages",
                    "Only database values"
                ],
                answer: 0
            },
            {
                title: "Probability Distributions",
                text: "A probability distribution describes the possible values of a random variable and their probabilities.",
                example: "A distribution can describe possible outcomes of rolling a die.",
                question: "What does a probability distribution describe?",
                options: [
                    "Possible outcomes and their probabilities",
                    "Only database tables",
                    "Only source code",
                    "Only screen layouts"
                ],
                answer: 0
            },
            {
                title: "Expected Value",
                text: "Expected value represents the long-run average outcome of a random variable.",
                example: "The expected value of a fair six-sided die is 3.5.",
                question: "What does expected value represent?",
                options: [
                    "The long-run average outcome",
                    "The largest possible value",
                    "The smallest possible value",
                    "The number of records"
                ],
                answer: 0
            },
            {
                title: "Probability in Data Science",
                text: "Probability helps data scientists model uncertainty, make predictions, evaluate risks, and build machine learning systems.",
                example: "A classification model can estimate the probability that an email is spam.",
                question: "Why is probability useful in data science?",
                options: [
                    "It helps model uncertainty and predictions",
                    "It only designs charts",
                    "It replaces all programming",
                    "It stores files"
                ],
                answer: 0
            }
        ]
    },

    "Pandas & NumPy": {
        title: "Pandas & NumPy",
        subtitle: "Learn two important Python libraries for numerical computing and data analysis.",
        lessons: [
            {
                title: "Introduction to NumPy",
                text: "NumPy is a Python library designed for numerical computing and efficient array operations.",
                example: "NumPy can store and calculate operations on large collections of numbers.",
                question: "What is NumPy mainly used for?",
                options: [
                    "Numerical computing",
                    "Web page styling",
                    "Email management",
                    "Video editing"
                ],
                answer: 0
            },
            {
                title: "NumPy Arrays",
                text: "NumPy arrays store collections of values and support efficient mathematical operations.",
                example: "A NumPy array can contain a set of student marks.",
                question: "What is a NumPy array?",
                options: [
                    "A numerical data structure",
                    "A web page",
                    "A database server",
                    "A network device"
                ],
                answer: 0
            },
            {
                title: "NumPy Operations",
                text: "NumPy provides fast operations for calculations involving arrays and matrices.",
                example: "You can calculate the sum or average of values stored in an array.",
                question: "What can NumPy perform efficiently?",
                options: [
                    "Numerical operations",
                    "Only text formatting",
                    "Only web design",
                    "Only email delivery"
                ],
                answer: 0
            },
            {
                title: "Introduction to Pandas",
                text: "Pandas is a Python library used for data manipulation and analysis.",
                example: "A CSV dataset can be loaded into a Pandas DataFrame.",
                question: "What is Pandas used for?",
                options: [
                    "Data manipulation and analysis",
                    "Only game development",
                    "Only network management",
                    "Only UI design"
                ],
                answer: 0
            },
            {
                title: "DataFrames",
                text: "A DataFrame is a two-dimensional tabular data structure in Pandas.",
                example: "A DataFrame can contain columns for name, age, and marks.",
                question: "What is a DataFrame?",
                options: [
                    "A tabular data structure",
                    "A programming language",
                    "A cloud server",
                    "A network protocol"
                ],
                answer: 0
            },
            {
                title: "Reading CSV Data",
                text: "Pandas can load data from CSV files into a DataFrame for analysis.",
                example: "A student marks CSV can be loaded using Pandas.",
                question: "What can Pandas read?",
                options: [
                    "CSV datasets",
                    "Only images",
                    "Only videos",
                    "Only executable files"
                ],
                answer: 0
            },
            {
                title: "Filtering Data",
                text: "Pandas allows you to select rows and columns based on conditions.",
                example: "You can filter students whose marks are greater than 80.",
                question: "Why filter data?",
                options: [
                    "To select relevant records",
                    "To delete Python",
                    "To increase RAM",
                    "To create hardware"
                ],
                answer: 0
            },
            {
                title: "Pandas and NumPy Together",
                text: "NumPy provides efficient numerical operations while Pandas provides convenient tools for structured data analysis.",
                example: "A data scientist can use Pandas to organize a dataset and NumPy for numerical calculations.",
                question: "Why are Pandas and NumPy useful together?",
                options: [
                    "They support efficient data analysis and numerical computing",
                    "They replace all programming languages",
                    "They only create websites",
                    "They only manage servers"
                ],
                answer: 0
            }
        ]
    },

    "Data Science Project": {
        title: "Data Science Project",
        subtitle: "Apply the complete data science workflow to a practical project.",
        lessons: [
            {
                title: "Define the Problem",
                text: "A data science project begins by clearly defining the problem and the question the data should help answer.",
                example: "Predict whether a student is at risk of poor academic performance.",
                question: "What should come first in a data science project?",
                options: [
                    "Define the problem",
                    "Train a random model",
                    "Create a presentation",
                    "Delete the dataset"
                ],
                answer: 0
            },
            {
                title: "Collect Data",
                text: "Collect relevant and reliable data from suitable sources while considering privacy and quality.",
                example: "Collect anonymized student attendance and performance data.",
                question: "What should collected data be?",
                options: [
                    "Relevant and reliable",
                    "Random and incomplete",
                    "Always duplicated",
                    "Unrelated to the problem"
                ],
                answer: 0
            },
            {
                title: "Clean the Data",
                text: "Data cleaning handles missing values, duplicates, inconsistent formats, and other quality problems.",
                example: "Remove duplicate records and handle missing values before analysis.",
                question: "Why clean data?",
                options: [
                    "To improve data quality",
                    "To remove all information",
                    "To avoid analysis",
                    "To replace the model"
                ],
                answer: 0
            },
            {
                title: "Explore the Data",
                text: "Exploratory Data Analysis helps discover patterns, relationships, distributions, and unusual values.",
                example: "Analyze how attendance relates to student scores.",
                question: "What is the purpose of EDA?",
                options: [
                    "To understand patterns in the data",
                    "To delete the dataset",
                    "To publish the app",
                    "To replace data collection"
                ],
                answer: 0
            },
            {
                title: "Feature Engineering",
                text: "Feature engineering creates or transforms input variables to make them more useful for a machine learning model.",
                example: "Convert a student's attendance records into an attendance percentage.",
                question: "What is feature engineering?",
                options: [
                    "Creating or transforming useful input features",
                    "Deleting all columns",
                    "Creating a logo",
                    "Managing cloud servers"
                ],
                answer: 0
            },
            {
                title: "Train a Model",
                text: "A machine learning model learns patterns from training data so it can make predictions on new data.",
                example: "Train a model to predict whether a student may pass an exam.",
                question: "What happens during model training?",
                options: [
                    "The model learns patterns from training data",
                    "The dataset is deleted",
                    "The application is designed",
                    "The database is removed"
                ],
                answer: 0
            },
            {
                title: "Evaluate the Model",
                text: "Model evaluation measures how well predictions perform using appropriate metrics and unseen data.",
                example: "Use accuracy, precision, recall, or other suitable metrics for classification.",
                question: "Why evaluate a model?",
                options: [
                    "To measure its performance",
                    "To remove all features",
                    "To skip testing",
                    "To delete predictions"
                ],
                answer: 0
            },
            {
                title: "Present the Results",
                text: "A data science project should clearly communicate the problem, methodology, findings, model performance, limitations, and conclusions.",
                example: "Present charts and model results to explain what was discovered.",
                question: "What should a final data science presentation include?",
                options: [
                    "Problem, method, findings, and results",
                    "Only the project title",
                    "Only raw data",
                    "Only source code"
                ],
                answer: 0
            }
        ]
    },
        "Git & GitHub": {
        title: "Git & GitHub",
        subtitle: "Learn version control and collaborative software development.",
        lessons: [
            {
                title: "What is Git?",
                text: "Git is a distributed version control system used to track changes in source code.",
                example: "A developer can use Git to save different versions of a project.",
                question: "What is Git mainly used for?",
                options: [
                    "Tracking changes in code",
                    "Designing websites",
                    "Managing hardware",
                    "Creating databases"
                ],
                answer: 0
            },
            {
                title: "Repositories",
                text: "A repository is a location where a project's files and their version history are stored.",
                example: "A project can have a Git repository containing its source code.",
                question: "What does a Git repository contain?",
                options: [
                    "Project files and version history",
                    "Only images",
                    "Only passwords",
                    "Only hardware drivers"
                ],
                answer: 0
            },
            {
                title: "Git Commit",
                text: "A commit records a set of changes made to files in a Git repository.",
                example: "After updating a feature, a developer can create a commit describing the changes.",
                question: "What does a commit record?",
                options: [
                    "Changes to project files",
                    "Internet speed",
                    "Computer temperature",
                    "User passwords"
                ],
                answer: 0
            },
            {
                title: "Git Branches",
                text: "Branches allow developers to work on different features or changes without directly modifying the main branch.",
                example: "A developer can create a feature branch before adding a new login system.",
                question: "Why are branches used?",
                options: [
                    "To work on changes separately",
                    "To increase storage",
                    "To install an operating system",
                    "To create databases"
                ],
                answer: 0
            },
            {
                title: "GitHub",
                text: "GitHub is a platform for hosting Git repositories and collaborating on software projects.",
                example: "Developers can push their code to GitHub and collaborate with teammates.",
                question: "What is GitHub?",
                options: [
                    "A platform for hosting and collaborating on Git repositories",
                    "A programming language",
                    "A database",
                    "An operating system"
                ],
                answer: 0
            },
            {
                title: "Push and Pull",
                text: "Git push uploads local commits to a remote repository, while Git pull retrieves changes from it.",
                example: "A developer pushes new code to GitHub and pulls updates from teammates.",
                question: "What does Git push do?",
                options: [
                    "Uploads local changes to a remote repository",
                    "Deletes a repository",
                    "Creates a database",
                    "Installs Git"
                ],
                answer: 0
            },
            {
                title: "Pull Requests",
                text: "A pull request allows developers to propose and review changes before merging them into another branch.",
                example: "A feature branch can be submitted as a pull request for team review.",
                question: "What is a pull request used for?",
                options: [
                    "Reviewing and merging proposed changes",
                    "Formatting a hard disk",
                    "Creating passwords",
                    "Running a server"
                ],
                answer: 0
            },
            {
                title: "Git in DevOps",
                text: "Git is an important part of DevOps because it enables version control, collaboration, automation, and CI/CD workflows.",
                example: "A Git push can automatically trigger a CI/CD pipeline.",
                question: "Why is Git important in DevOps?",
                options: [
                    "It supports version control and automation workflows",
                    "It replaces cloud computing",
                    "It only creates documents",
                    "It manages computer hardware"
                ],
                answer: 0
            }
        ]
    },

    "Docker": {
        title: "Docker",
        subtitle: "Learn containerization and how Docker simplifies application deployment.",
        lessons: [
            {
                title: "What is Docker?",
                text: "Docker is a platform used to build, package, and run applications inside containers.",
                example: "An application and its dependencies can be packaged into a Docker container.",
                question: "What is Docker mainly used for?",
                options: [
                    "Containerizing applications",
                    "Designing logos",
                    "Writing spreadsheets",
                    "Editing videos"
                ],
                answer: 0
            },
            {
                title: "Containers",
                text: "A container is an isolated environment that packages an application with the components it needs to run.",
                example: "A Python application can run inside a container with its required libraries.",
                question: "What does a container provide?",
                options: [
                    "An isolated environment for an application",
                    "A physical server",
                    "A programming language",
                    "A database table"
                ],
                answer: 0
            },
            {
                title: "Docker Images",
                text: "A Docker image is a reusable template used to create containers.",
                example: "A Python image can be used as the base for a Python application container.",
                question: "What is a Docker image?",
                options: [
                    "A template used to create containers",
                    "A running application only",
                    "A physical computer",
                    "A network cable"
                ],
                answer: 0
            },
            {
                title: "Dockerfile",
                text: "A Dockerfile contains instructions for building a Docker image.",
                example: "A Dockerfile can specify a base image, application files, dependencies, and startup commands.",
                question: "What is a Dockerfile used for?",
                options: [
                    "Defining how to build an image",
                    "Storing passwords",
                    "Creating databases",
                    "Monitoring CPU temperature"
                ],
                answer: 0
            },
            {
                title: "Docker Hub",
                text: "Docker Hub is a registry where Docker images can be stored and shared.",
                example: "A team can push a custom application image to Docker Hub.",
                question: "What is Docker Hub?",
                options: [
                    "A registry for sharing Docker images",
                    "A programming language",
                    "A text editor",
                    "A database"
                ],
                answer: 0
            },
            {
                title: "Container Networking",
                text: "Docker provides networking features that allow containers to communicate with each other and external systems.",
                example: "A web container can communicate with a database container through a Docker network.",
                question: "Why is container networking useful?",
                options: [
                    "It allows containers to communicate",
                    "It deletes containers",
                    "It creates source code",
                    "It replaces Git"
                ],
                answer: 0
            },
            {
                title: "Volumes",
                text: "Docker volumes provide persistent storage for data used by containers.",
                example: "A database container can store its data in a Docker volume.",
                question: "Why are Docker volumes used?",
                options: [
                    "To persist container data",
                    "To compile code",
                    "To create branches",
                    "To monitor networks"
                ],
                answer: 0
            },
            {
                title: "Docker in DevOps",
                text: "Docker makes applications easier to build, test, package, and deploy consistently across environments.",
                example: "A CI/CD pipeline can build a Docker image and deploy it to a server.",
                question: "Why is Docker useful in DevOps?",
                options: [
                    "It supports consistent application deployment",
                    "It replaces all programming",
                    "It only manages emails",
                    "It creates physical hardware"
                ],
                answer: 0
            }
        ]
    },

    "CI/CD": {
        title: "CI/CD",
        subtitle: "Learn how continuous integration and delivery automate software development and deployment.",
        lessons: [
            {
                title: "What is CI?",
                text: "Continuous Integration means frequently integrating code changes into a shared repository and automatically testing them.",
                example: "Every code push can trigger automated tests.",
                question: "What does CI stand for?",
                options: [
                    "Continuous Integration",
                    "Computer Installation",
                    "Code Inspection",
                    "Cloud Integration"
                ],
                answer: 0
            },
            {
                title: "What is CD?",
                text: "Continuous Delivery or Continuous Deployment automates the process of preparing or releasing software.",
                example: "A successful pipeline can automatically deploy an application.",
                question: "What does CD relate to?",
                options: [
                    "Delivering or deploying software automatically",
                    "Creating databases",
                    "Writing documentation only",
                    "Designing interfaces"
                ],
                answer: 0
            },
            {
                title: "CI/CD Pipeline",
                text: "A CI/CD pipeline is a sequence of automated steps such as building, testing, and deploying software.",
                example: "Code push → build → test → deployment.",
                question: "What is a CI/CD pipeline?",
                options: [
                    "An automated software workflow",
                    "A network cable",
                    "A database table",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Automated Testing",
                text: "Automated tests check software changes quickly and consistently.",
                example: "Unit tests can run automatically after every code commit.",
                question: "Why use automated testing?",
                options: [
                    "To detect problems quickly",
                    "To delete code",
                    "To replace developers",
                    "To increase monitor size"
                ],
                answer: 0
            },
            {
                title: "Build Automation",
                text: "Build automation automatically converts source code into a form that can be tested or deployed.",
                example: "A pipeline can automatically install dependencies and build an application.",
                question: "What does build automation do?",
                options: [
                    "Automates application build steps",
                    "Creates physical servers",
                    "Deletes repositories",
                    "Manages passwords"
                ],
                answer: 0
            },
            {
                title: "Deployment Automation",
                text: "Deployment automation reduces manual work by automatically releasing applications to target environments.",
                example: "A pipeline can deploy a tested application to a cloud server.",
                question: "What is deployment automation?",
                options: [
                    "Automatically releasing applications",
                    "Manually editing every file",
                    "Creating hardware",
                    "Writing emails"
                ],
                answer: 0
            },
            {
                title: "Pipeline Monitoring",
                text: "Monitoring a CI/CD pipeline helps teams identify failed builds, tests, and deployments.",
                example: "A developer can inspect a failed pipeline stage and fix the problem.",
                question: "Why monitor pipelines?",
                options: [
                    "To identify failures and improve reliability",
                    "To remove Git",
                    "To create databases",
                    "To replace testing"
                ],
                answer: 0
            },
            {
                title: "CI/CD in DevOps",
                text: "CI/CD is a core DevOps practice that enables faster, repeatable, and reliable software delivery.",
                example: "A team can automatically test and deploy code whenever approved changes are pushed.",
                question: "What is a major benefit of CI/CD?",
                options: [
                    "Faster and more reliable software delivery",
                    "Less version control",
                    "More manual work",
                    "No testing"
                ],
                answer: 0
            }
        ]
    },

    "Cloud Computing": {
        title: "Cloud Computing",
        subtitle: "Understand the core concepts of cloud platforms and services.",
        lessons: [
            {
                title: "What is Cloud Computing?",
                text: "Cloud computing provides computing resources such as servers, storage, and databases over the internet.",
                example: "An application can use cloud servers instead of a physical server owned by the developer.",
                question: "What is cloud computing?",
                options: [
                    "Using computing resources over the internet",
                    "Only using local computers",
                    "Writing code without a computer",
                    "Creating physical cables"
                ],
                answer: 0
            },
            {
                title: "Cloud Services",
                text: "Cloud platforms provide services for computing, storage, databases, networking, security, and more.",
                example: "A company can use a cloud storage service to store application files.",
                question: "What can cloud platforms provide?",
                options: [
                    "Computing, storage, databases, and networking",
                    "Only keyboards",
                    "Only monitors",
                    "Only programming books"
                ],
                answer: 0
            },
            {
                title: "Virtual Machines",
                text: "A virtual machine is a software-based computer that runs on physical infrastructure.",
                example: "A cloud provider can create virtual machines for customers.",
                question: "What is a virtual machine?",
                options: [
                    "A software-based computer",
                    "A physical keyboard",
                    "A database table",
                    "A Git branch"
                ],
                answer: 0
            },
            {
                title: "Cloud Storage",
                text: "Cloud storage allows data to be stored and accessed through cloud infrastructure.",
                example: "Application backups can be stored in cloud storage.",
                question: "What is cloud storage used for?",
                options: [
                    "Storing data through cloud infrastructure",
                    "Running only local code",
                    "Creating Git commits",
                    "Designing interfaces"
                ],
                answer: 0
            },
            {
                title: "Scalability",
                text: "Cloud scalability allows resources to be increased or decreased according to application requirements.",
                example: "A website can use more computing resources during high traffic.",
                question: "What does scalability mean?",
                options: [
                    "Adjusting resources according to demand",
                    "Deleting all servers",
                    "Removing databases",
                    "Stopping automation"
                ],
                answer: 0
            },
            {
                title: "Availability",
                text: "Cloud availability refers to keeping services accessible and operational when users need them.",
                example: "Multiple instances can help keep an application available during failures.",
                question: "What does availability mean?",
                options: [
                    "Keeping services accessible",
                    "Reducing all resources",
                    "Deleting backups",
                    "Removing monitoring"
                ],
                answer: 0
            },
            {
                title: "Infrastructure as Code",
                text: "Infrastructure as Code uses configuration files or code to define and manage infrastructure.",
                example: "A team can define cloud resources using infrastructure configuration files.",
                question: "What is Infrastructure as Code?",
                options: [
                    "Managing infrastructure through code or configuration",
                    "Writing only application UI",
                    "Creating physical hardware manually",
                    "Deleting cloud resources"
                ],
                answer: 0
            },
            {
                title: "Cloud in DevOps",
                text: "Cloud platforms work well with DevOps because infrastructure can be automated, scaled, monitored, and integrated with CI/CD.",
                example: "A CI/CD pipeline can deploy a containerized application to cloud infrastructure.",
                question: "Why is cloud useful in DevOps?",
                options: [
                    "It supports automation, scaling, and deployment",
                    "It removes the need for software",
                    "It only stores images",
                    "It prevents automation"
                ],
                answer: 0
            }
        ]
    },

    "Kubernetes": {
        title: "Kubernetes",
        subtitle: "Learn the basics of container orchestration and Kubernetes.",
        lessons: [
            {
                title: "What is Kubernetes?",
                text: "Kubernetes is an open-source platform for managing containerized applications.",
                example: "Kubernetes can manage multiple application containers across servers.",
                question: "What is Kubernetes used for?",
                options: [
                    "Managing containerized applications",
                    "Designing logos",
                    "Writing spreadsheets",
                    "Creating programming languages"
                ],
                answer: 0
            },
            {
                title: "Why Kubernetes?",
                text: "Kubernetes helps automate deployment, scaling, networking, and management of containers.",
                example: "Kubernetes can increase application instances when demand rises.",
                question: "Why use Kubernetes?",
                options: [
                    "To automate container management",
                    "To replace source code",
                    "To create hardware",
                    "To edit videos"
                ],
                answer: 0
            },
            {
                title: "Pods",
                text: "A Pod is the smallest deployable unit in Kubernetes and can contain one or more containers.",
                example: "A web application can run inside a Kubernetes Pod.",
                question: "What is a Pod?",
                options: [
                    "The smallest deployable Kubernetes unit",
                    "A database language",
                    "A Git repository",
                    "A physical server"
                ],
                answer: 0
            },
            {
                title: "Deployments",
                text: "A Kubernetes Deployment manages the desired state and updates of application Pods.",
                example: "A Deployment can maintain a specified number of running application replicas.",
                question: "What does a Deployment manage?",
                options: [
                    "Application Pods and their desired state",
                    "Only passwords",
                    "Only Git commits",
                    "Only hardware"
                ],
                answer: 0
            },
            {
                title: "Kubernetes Services",
                text: "A Kubernetes Service provides a stable way to expose and connect to application Pods.",
                example: "A Service can route requests to the Pods running a web application.",
                question: "What does a Kubernetes Service provide?",
                options: [
                    "Stable access to application Pods",
                    "Source code editing",
                    "Database design",
                    "Git version history"
                ],
                answer: 0
            },
            {
                title: "Scaling Applications",
                text: "Kubernetes can scale applications by increasing or decreasing the number of running replicas.",
                example: "A web application can run multiple replicas during high traffic.",
                question: "What does scaling do?",
                options: [
                    "Adjusts the number of application instances",
                    "Deletes all containers",
                    "Removes networking",
                    "Stops monitoring"
                ],
                answer: 0
            },
            {
                title: "Self-Healing",
                text: "Kubernetes can automatically restart failed containers and maintain the desired application state.",
                example: "If a container crashes, Kubernetes can restart it.",
                question: "What is self-healing?",
                options: [
                    "Automatically recovering failed workloads",
                    "Deleting the application",
                    "Removing all Pods",
                    "Stopping deployment"
                ],
                answer: 0
            },
            {
                title: "Kubernetes in DevOps",
                text: "Kubernetes supports DevOps by providing automated deployment, scaling, service management, and container orchestration.",
                example: "A CI/CD pipeline can deploy a new application version to a Kubernetes cluster.",
                question: "How does Kubernetes help DevOps?",
                options: [
                    "It automates container deployment and management",
                    "It replaces Git",
                    "It only stores documents",
                    "It prevents scaling"
                ],
                answer: 0
            }
        ]
    },

    "DevOps Project": {
        title: "DevOps Project",
        subtitle: "Build a practical project using Git, Docker, CI/CD, cloud, and containers.",
        lessons: [
            {
                title: "Choose the Application",
                text: "Start by selecting a small application that can be packaged and deployed using DevOps practices.",
                example: "Choose a simple web application with a frontend and backend.",
                question: "What should you do first?",
                options: [
                    "Choose a suitable application",
                    "Deploy without testing",
                    "Delete the source code",
                    "Create random servers"
                ],
                answer: 0
            },
            {
                title: "Create a Git Repository",
                text: "Store the project in a Git repository so that changes can be tracked and collaborated on.",
                example: "Create a GitHub repository for the application.",
                question: "Why use Git?",
                options: [
                    "To track project changes",
                    "To replace Docker",
                    "To create cloud hardware",
                    "To remove source code"
                ],
                answer: 0
            },
            {
                title: "Containerize the Application",
                text: "Create a Dockerfile and package the application into a container.",
                example: "Build a Docker image containing the application and its dependencies.",
                question: "What does containerization provide?",
                options: [
                    "A consistent application environment",
                    "A new programming language",
                    "A database schema",
                    "A Git branch"
                ],
                answer: 0
            },
            {
                title: "Create the CI Pipeline",
                text: "Configure automated steps to build and test the application whenever code changes are pushed.",
                example: "Run tests automatically after every GitHub push.",
                question: "What does the CI pipeline automate?",
                options: [
                    "Build and testing",
                    "Only UI design",
                    "Only database deletion",
                    "Only documentation"
                ],
                answer: 0
            },
            {
                title: "Configure Deployment",
                text: "Set up automated deployment so tested application versions can be released to the target environment.",
                example: "Deploy a Docker image to a cloud environment.",
                question: "What is automated deployment?",
                options: [
                    "Automatically releasing tested software",
                    "Manually copying every file",
                    "Deleting containers",
                    "Removing tests"
                ],
                answer: 0
            },
            {
                title: "Add Monitoring",
                text: "Monitor application health, logs, resource usage, and deployment status.",
                example: "Check whether the deployed application is responding correctly.",
                question: "Why add monitoring?",
                options: [
                    "To detect problems and track system health",
                    "To remove automation",
                    "To delete logs",
                    "To replace Git"
                ],
                answer: 0
            },
            {
                title: "Test the Complete Pipeline",
                text: "Make a controlled code change and verify that the pipeline builds, tests, and deploys the application correctly.",
                example: "Update a page title and observe the complete CI/CD workflow.",
                question: "What should you verify?",
                options: [
                    "Build, test, and deployment stages",
                    "Only the project logo",
                    "Only the GitHub name",
                    "Only the source folder"
                ],
                answer: 0
            },
            {
                title: "Document the Project",
                text: "A professional DevOps project should document its architecture, tools, workflow, deployment process, and results.",
                example: "Create a README explaining how to run and deploy the application.",
                question: "Why document the project?",
                options: [
                    "To explain how the project works",
                    "To delete configuration",
                    "To stop deployment",
                    "To remove source code"
                ],
                answer: 0
            }
        ]
    },
        "SQL Basics": {
        title: "SQL Basics",
        subtitle: "Learn the fundamentals of SQL for working with databases.",
        lessons: [
            {
                title: "What is SQL?",
                text: "SQL stands for Structured Query Language and is used to communicate with relational databases.",
                example: "SQL can be used to retrieve student records from a database.",
                question: "What is SQL mainly used for?",
                options: [
                    "Working with relational databases",
                    "Designing images",
                    "Editing videos",
                    "Managing computer hardware"
                ],
                answer: 0
            },
            {
                title: "SELECT Statement",
                text: "The SELECT statement is used to retrieve data from database tables.",
                example: "SELECT name FROM students retrieves student names.",
                question: "Which SQL statement retrieves data?",
                options: [
                    "SELECT",
                    "DELETE",
                    "DROP",
                    "CREATE"
                ],
                answer: 0
            },
            {
                title: "WHERE Clause",
                text: "The WHERE clause filters records based on a specified condition.",
                example: "SELECT * FROM students WHERE marks > 80.",
                question: "What is WHERE used for?",
                options: [
                    "Filtering records",
                    "Creating a server",
                    "Deleting a database",
                    "Formatting text"
                ],
                answer: 0
            },
            {
                title: "INSERT Statement",
                text: "The INSERT statement adds new records to a database table.",
                example: "A new student's details can be inserted into a students table.",
                question: "What does INSERT do?",
                options: [
                    "Adds new records",
                    "Deletes records",
                    "Reads records only",
                    "Removes a table"
                ],
                answer: 0
            },
            {
                title: "UPDATE Statement",
                text: "The UPDATE statement modifies existing records in a table.",
                example: "A student's phone number can be updated in the database.",
                question: "What does UPDATE do?",
                options: [
                    "Modifies existing records",
                    "Creates a new database",
                    "Deletes a table",
                    "Only reads data"
                ],
                answer: 0
            },
            {
                title: "DELETE Statement",
                text: "The DELETE statement removes selected records from a database table.",
                example: "A specific inactive user record can be deleted using a condition.",
                question: "What does DELETE do?",
                options: [
                    "Removes records",
                    "Creates records",
                    "Reads records",
                    "Creates a database"
                ],
                answer: 0
            },
            {
                title: "ORDER BY",
                text: "ORDER BY sorts query results according to one or more columns.",
                example: "Student marks can be sorted from highest to lowest.",
                question: "What is ORDER BY used for?",
                options: [
                    "Sorting query results",
                    "Deleting data",
                    "Creating users",
                    "Connecting servers"
                ],
                answer: 0
            },
            {
                title: "SQL Aggregation",
                text: "Aggregate functions such as COUNT, SUM, AVG, MIN, and MAX calculate values from multiple records.",
                example: "AVG can calculate the average marks of students.",
                question: "Which function calculates an average?",
                options: [
                    "AVG",
                    "COUNT",
                    "DELETE",
                    "INSERT"
                ],
                answer: 0
            }
        ]
    },

    "Relational Databases": {
        title: "Relational Databases",
        subtitle: "Understand tables, relationships, keys, and relational database concepts.",
        lessons: [
            {
                title: "What is a Relational Database?",
                text: "A relational database stores structured data in tables made up of rows and columns.",
                example: "A student database can have separate tables for students and courses.",
                question: "How is data stored in a relational database?",
                options: [
                    "In related tables",
                    "Only in images",
                    "Only in text files",
                    "Only in memory"
                ],
                answer: 0
            },
            {
                title: "Tables",
                text: "A table organizes related information into rows and columns.",
                example: "A Students table may contain ID, name, email, and marks columns.",
                question: "What does a table contain?",
                options: [
                    "Rows and columns",
                    "Only images",
                    "Only formulas",
                    "Only programs"
                ],
                answer: 0
            },
            {
                title: "Rows and Columns",
                text: "Rows represent individual records, while columns represent attributes or fields.",
                example: "One row can represent one student and columns can represent name and age.",
                question: "What does a row usually represent?",
                options: [
                    "A record",
                    "A database server",
                    "A programming language",
                    "A table name only"
                ],
                answer: 0
            },
            {
                title: "Primary Key",
                text: "A primary key uniquely identifies each record in a table.",
                example: "Student_ID can uniquely identify each student.",
                question: "What is the purpose of a primary key?",
                options: [
                    "Uniquely identify records",
                    "Sort images",
                    "Delete databases",
                    "Create passwords"
                ],
                answer: 0
            },
            {
                title: "Foreign Key",
                text: "A foreign key connects records between related tables.",
                example: "A course table can use Student_ID as a foreign key to reference students.",
                question: "What does a foreign key help establish?",
                options: [
                    "Relationships between tables",
                    "File compression",
                    "Screen resolution",
                    "Programming syntax"
                ],
                answer: 0
            },
            {
                title: "One-to-One Relationship",
                text: "In a one-to-one relationship, one record in one table is associated with one record in another table.",
                example: "A person and a unique passport record can represent a one-to-one relationship.",
                question: "What does one-to-one mean?",
                options: [
                    "One record relates to one record",
                    "One record relates to many records",
                    "Many records have no relation",
                    "All records are duplicated"
                ],
                answer: 0
            },
            {
                title: "One-to-Many Relationship",
                text: "In a one-to-many relationship, one record can be associated with multiple records.",
                example: "One customer can place many orders.",
                question: "Which is a one-to-many example?",
                options: [
                    "One customer with many orders",
                    "One person with one passport",
                    "Two unrelated tables",
                    "One record with no relation"
                ],
                answer: 0
            },
            {
                title: "Many-to-Many Relationship",
                text: "A many-to-many relationship occurs when multiple records on both sides can be related.",
                example: "Students can enroll in many courses, and courses can have many students.",
                question: "Which is a many-to-many example?",
                options: [
                    "Students and courses",
                    "Person and passport",
                    "Customer and one address only",
                    "One record with no relation"
                ],
                answer: 0
            }
        ]
    },

    "Database Design": {
        title: "Database Design",
        subtitle: "Learn how to design efficient and reliable database structures.",
        lessons: [
            {
                title: "Database Requirements",
                text: "Database design begins by understanding what data the application needs to store and how it will be used.",
                example: "An online store needs customer, product, order, and payment information.",
                question: "What should come first in database design?",
                options: [
                    "Understand data requirements",
                    "Delete all tables",
                    "Write random queries",
                    "Create duplicate records"
                ],
                answer: 0
            },
            {
                title: "Entities",
                text: "An entity represents an important object or concept about which data needs to be stored.",
                example: "Customer, Product, and Order can be entities in an e-commerce system.",
                question: "What is an entity?",
                options: [
                    "An important object or concept represented in data",
                    "A programming error",
                    "A network cable",
                    "A database password"
                ],
                answer: 0
            },
            {
                title: "Attributes",
                text: "Attributes describe the properties of an entity.",
                example: "A Customer entity can have name, email, and phone attributes.",
                question: "What do attributes describe?",
                options: [
                    "Properties of an entity",
                    "Database servers",
                    "Network protocols",
                    "Operating systems"
                ],
                answer: 0
            },
            {
                title: "Keys in Database Design",
                text: "Keys help uniquely identify records and establish relationships between tables.",
                example: "A customer ID can be a primary key, while the same ID can appear as a foreign key elsewhere.",
                question: "Why are keys important?",
                options: [
                    "They identify records and connect tables",
                    "They design interfaces",
                    "They compress images",
                    "They create networks"
                ],
                answer: 0
            },
            {
                title: "Relationships",
                text: "Relationships describe how entities are connected to each other.",
                example: "A customer places an order, creating a relationship between Customer and Order.",
                question: "What do relationships describe?",
                options: [
                    "Connections between entities",
                    "File sizes",
                    "CPU speed",
                    "Screen resolution"
                ],
                answer: 0
            },
            {
                title: "ER Diagrams",
                text: "Entity Relationship diagrams visually represent entities, attributes, and relationships.",
                example: "An ER diagram can show how Students and Courses are connected.",
                question: "What does an ER diagram represent?",
                options: [
                    "Entities and their relationships",
                    "Only source code",
                    "Only network traffic",
                    "Only files"
                ],
                answer: 0
            },
            {
                title: "Constraints",
                text: "Database constraints enforce rules that help maintain valid and consistent data.",
                example: "A NOT NULL constraint can require an important field to contain a value.",
                question: "Why use database constraints?",
                options: [
                    "To maintain data integrity",
                    "To design logos",
                    "To increase screen size",
                    "To delete tables"
                ],
                answer: 0
            },
            {
                title: "Good Database Design",
                text: "A good database design reduces unnecessary duplication, maintains relationships, and supports efficient queries.",
                example: "Separating customer and order information can avoid unnecessary repeated data.",
                question: "What is a goal of good database design?",
                options: [
                    "Efficient and consistent data management",
                    "Maximum data duplication",
                    "Random table structures",
                    "Removing all relationships"
                ],
                answer: 0
            }
        ]
    },

    "Normalization": {
        title: "Normalization",
        subtitle: "Learn how normalization reduces redundancy and improves database consistency.",
        lessons: [
            {
                title: "What is Normalization?",
                text: "Normalization is the process of organizing database tables to reduce unnecessary data duplication and improve consistency.",
                example: "Customer information can be stored separately instead of repeating it in every order.",
                question: "What is the main goal of normalization?",
                options: [
                    "Reduce unnecessary data duplication",
                    "Increase duplicate records",
                    "Delete all relationships",
                    "Remove primary keys"
                ],
                answer: 0
            },
            {
                title: "Data Redundancy",
                text: "Data redundancy occurs when the same information is unnecessarily stored multiple times.",
                example: "Repeating a customer's address in every order can create redundancy.",
                question: "What is data redundancy?",
                options: [
                    "Unnecessary repetition of data",
                    "Data encryption",
                    "Data visualization",
                    "Data compression"
                ],
                answer: 0
            },
            {
                title: "First Normal Form",
                text: "First Normal Form requires atomic values and avoids repeating groups in a table.",
                example: "Each phone number should be stored as an individual value rather than a list in one field.",
                question: "What does 1NF focus on?",
                options: [
                    "Atomic values and no repeating groups",
                    "Cloud storage",
                    "Data encryption",
                    "Network security"
                ],
                answer: 0
            },
            {
                title: "Second Normal Form",
                text: "Second Normal Form builds on 1NF and removes partial dependencies on part of a composite key.",
                example: "Attributes should depend on the complete composite key rather than only one part.",
                question: "What does 2NF address?",
                options: [
                    "Partial dependencies",
                    "Network failures",
                    "Image quality",
                    "Cloud storage"
                ],
                answer: 0
            },
            {
                title: "Third Normal Form",
                text: "Third Normal Form builds on 2NF and removes inappropriate transitive dependencies.",
                example: "A non-key attribute should not depend on another non-key attribute.",
                question: "What does 3NF help remove?",
                options: [
                    "Transitive dependencies",
                    "Primary keys",
                    "All tables",
                    "All relationships"
                ],
                answer: 0
            },
            {
                title: "Benefits of Normalization",
                text: "Normalization can reduce redundancy, improve consistency, and make updates safer.",
                example: "Updating a customer's address in one customer table avoids inconsistent copies.",
                question: "What is one benefit of normalization?",
                options: [
                    "Improved data consistency",
                    "More duplicate data",
                    "Less data organization",
                    "Removal of all keys"
                ],
                answer: 0
            },
            {
                title: "Normalization vs Performance",
                text: "Normalization improves data organization, but some applications may use controlled denormalization for performance.",
                example: "A reporting system may duplicate selected data to speed up frequent queries.",
                question: "Why might denormalization be used?",
                options: [
                    "To improve performance in some cases",
                    "To remove all data",
                    "To delete databases",
                    "To remove relationships"
                ],
                answer: 0
            },
            {
                title: "Practical Normalization",
                text: "Database designers apply normalization according to application requirements while balancing consistency and performance.",
                example: "An e-commerce database can separate customers, products, and orders into related tables.",
                question: "What should guide normalization decisions?",
                options: [
                    "Application requirements and data needs",
                    "Random table creation",
                    "Screen size",
                    "Keyboard type"
                ],
                answer: 0
            }
        ]
    },

    "MySQL": {
        title: "MySQL",
        subtitle: "Learn the fundamentals of working with the MySQL relational database system.",
        lessons: [
            {
                title: "What is MySQL?",
                text: "MySQL is a popular relational database management system that uses SQL.",
                example: "A web application can use MySQL to store user and product data.",
                question: "What is MySQL?",
                options: [
                    "A relational database management system",
                    "A programming language",
                    "A web browser",
                    "An operating system"
                ],
                answer: 0
            },
            {
                title: "Creating a Database",
                text: "MySQL allows developers to create databases that contain related tables.",
                example: "CREATE DATABASE college creates a database named college.",
                question: "What can MySQL create?",
                options: [
                    "Databases and tables",
                    "Only images",
                    "Only web pages",
                    "Only Git repositories"
                ],
                answer: 0
            },
            {
                title: "Creating Tables",
                text: "Tables define the structure used to store records in a MySQL database.",
                example: "A Students table can contain ID, name, and marks columns.",
                question: "What is a table used for?",
                options: [
                    "Storing structured records",
                    "Editing videos",
                    "Managing hardware",
                    "Creating operating systems"
                ],
                answer: 0
            },
            {
                title: "MySQL Data Types",
                text: "MySQL provides data types such as INT, VARCHAR, DATE, and DECIMAL for different kinds of values.",
                example: "INT can store an age and VARCHAR can store a name.",
                question: "Why are data types used?",
                options: [
                    "To define what kind of values a column stores",
                    "To create passwords",
                    "To design screens",
                    "To connect networks"
                ],
                answer: 0
            },
            {
                title: "MySQL Queries",
                text: "SQL queries can be used in MySQL to create, retrieve, update, and delete data.",
                example: "SELECT can retrieve records from a MySQL table.",
                question: "What can SQL queries do in MySQL?",
                options: [
                    "Manage and retrieve database data",
                    "Only create images",
                    "Only edit videos",
                    "Only manage hardware"
                ],
                answer: 0
            },
            {
                title: "Indexes",
                text: "Indexes can improve the speed of searches and queries on frequently accessed columns.",
                example: "An index on an email column can speed up user lookups.",
                question: "Why are indexes used?",
                options: [
                    "To improve query performance",
                    "To delete tables",
                    "To remove data",
                    "To create web pages"
                ],
                answer: 0
            },
            {
                title: "MySQL Users and Permissions",
                text: "MySQL supports users and privileges to control who can access or modify database resources.",
                example: "A read-only user can be given permission to view data without changing it.",
                question: "Why use MySQL permissions?",
                options: [
                    "To control database access",
                    "To create images",
                    "To increase screen resolution",
                    "To write frontend code"
                ],
                answer: 0
            },
            {
                title: "MySQL in Applications",
                text: "Applications can connect to MySQL to store and retrieve persistent data.",
                example: "An e-commerce application can store products, customers, and orders in MySQL.",
                question: "Why do applications use MySQL?",
                options: [
                    "To store and retrieve application data",
                    "To design logos",
                    "To replace programming languages",
                    "To manage keyboards"
                ],
                answer: 0
            }
        ]
    },

    "Advanced SQL": {
        title: "Advanced SQL",
        subtitle: "Learn advanced SQL concepts for powerful database queries.",
        lessons: [
            {
                title: "SQL JOINs",
                text: "JOIN operations combine related records from multiple tables.",
                example: "A JOIN can combine customer details with their orders.",
                question: "What do JOINs do?",
                options: [
                    "Combine related data from tables",
                    "Delete all tables",
                    "Create images",
                    "Encrypt files"
                ],
                answer: 0
            },
            {
                title: "INNER JOIN",
                text: "INNER JOIN returns records where matching values exist in both joined tables.",
                example: "Customers with matching orders can be retrieved using INNER JOIN.",
                question: "What does INNER JOIN return?",
                options: [
                    "Matching records from both tables",
                    "Only unmatched records",
                    "All databases",
                    "Only table names"
                ],
                answer: 0
            },
            {
                title: "LEFT JOIN",
                text: "LEFT JOIN returns all records from the left table and matching records from the right table.",
                example: "All customers can be listed even if some have no orders.",
                question: "What does LEFT JOIN preserve?",
                options: [
                    "All records from the left table",
                    "Only records from the right table",
                    "Only unmatched right records",
                    "No records"
                ],
                answer: 0
            },
            {
                title: "GROUP BY",
                text: "GROUP BY groups rows with similar values so aggregate calculations can be performed.",
                example: "Orders can be grouped by customer to calculate each customer's total.",
                question: "What is GROUP BY used for?",
                options: [
                    "Grouping records for analysis",
                    "Deleting records",
                    "Creating databases",
                    "Changing passwords"
                ],
                answer: 0
            },
            {
                title: "HAVING",
                text: "HAVING filters grouped results after GROUP BY has been applied.",
                example: "Find customers whose total order value is greater than a specified amount.",
                question: "What does HAVING filter?",
                options: [
                    "Grouped results",
                    "Database names",
                    "Source code",
                    "Network packets"
                ],
                answer: 0
            },
            {
                title: "Subqueries",
                text: "A subquery is a query placed inside another SQL query.",
                example: "A subquery can find the average marks before selecting students above that average.",
                question: "What is a subquery?",
                options: [
                    "A query inside another query",
                    "A database server",
                    "A programming language",
                    "A table index"
                ],
                answer: 0
            },
            {
                title: "SQL Views",
                text: "A view is a virtual table based on the result of a SQL query.",
                example: "A view can show selected customer information without exposing the entire table.",
                question: "What is a SQL view?",
                options: [
                    "A virtual table based on a query",
                    "A physical server",
                    "A programming language",
                    "A network protocol"
                ],
                answer: 0
            },
            {
                title: "Transactions",
                text: "Transactions group database operations so they can be handled as a logical unit.",
                example: "A bank transfer can update one account and another account within a transaction.",
                question: "Why are transactions useful?",
                options: [
                    "They help maintain reliable database operations",
                    "They create images",
                    "They replace SQL",
                    "They delete all tables"
                ],
                answer: 0
            }
        ]
    },

    "Database Project": {
        title: "Database Project",
        subtitle: "Build a practical database system using SQL and relational database concepts.",
        lessons: [
            {
                title: "Choose a Problem",
                text: "Start by selecting a real-world problem that requires structured data storage.",
                example: "Build a database for a college student management system.",
                question: "What should you do first?",
                options: [
                    "Define the problem and requirements",
                    "Create random tables",
                    "Delete data",
                    "Write unrelated queries"
                ],
                answer: 0
            },
            {
                title: "Identify Entities",
                text: "Identify the main objects about which the system needs to store information.",
                example: "Students, Courses, Teachers, and Departments can be entities.",
                question: "What should entities represent?",
                options: [
                    "Important objects or concepts in the system",
                    "Only database passwords",
                    "Only UI colors",
                    "Only source files"
                ],
                answer: 0
            },
            {
                title: "Design Tables",
                text: "Create tables based on the identified entities and define appropriate columns.",
                example: "Create a Students table with ID, name, email, and course fields.",
                question: "What do tables organize?",
                options: [
                    "Structured records",
                    "Only images",
                    "Only code comments",
                    "Only network traffic"
                ],
                answer: 0
            },
            {
                title: "Define Keys",
                text: "Choose primary keys and foreign keys to uniquely identify records and connect related tables.",
                example: "Student_ID can be a primary key in Students and a foreign key in another related table.",
                question: "Why define keys?",
                options: [
                    "To identify and connect records",
                    "To design interfaces",
                    "To create images",
                    "To compress files"
                ],
                answer: 0
            },
            {
                title: "Normalize the Database",
                text: "Apply suitable normalization to reduce unnecessary duplication and improve consistency.",
                example: "Store course information separately instead of repeating it for every student.",
                question: "Why normalize?",
                options: [
                    "To reduce redundancy and improve consistency",
                    "To increase duplication",
                    "To delete tables",
                    "To remove relationships"
                ],
                answer: 0
            },
            {
                title: "Write SQL Queries",
                text: "Create queries to insert, retrieve, update, delete, and analyze project data.",
                example: "Write a query to find students with marks above 80.",
                question: "What can project SQL queries do?",
                options: [
                    "Manage and analyze stored data",
                    "Only create images",
                    "Only design screens",
                    "Only manage hardware"
                ],
                answer: 0
            },
            {
                title: "Test the Database",
                text: "Test the database with realistic data and queries to identify errors and ensure correct results.",
                example: "Insert sample student records and verify that search queries return the expected results.",
                question: "Why test the database?",
                options: [
                    "To verify correctness and reliability",
                    "To delete all data",
                    "To remove keys",
                    "To stop queries"
                ],
                answer: 0
            },
            {
                title: "Document the Project",
                text: "Document the database structure, relationships, queries, and purpose so others can understand the project.",
                example: "Create documentation showing the ER diagram and important SQL queries.",
                question: "Why document a database project?",
                options: [
                    "To explain its structure and usage",
                    "To remove relationships",
                    "To delete tables",
                    "To stop development"
                ],
                answer: 0
            }
        ]
    },
        "Problem Identification": {
        title: "Problem Identification",
        subtitle: "Learn how to identify real problems that can become useful products or businesses.",
        lessons: [
            {
                title: "Finding Real Problems",
                text: "Successful ideas often begin with a real problem experienced by people or organizations.",
                example: "Students struggling to track assignments could need a better study management solution.",
                question: "Where can startup ideas come from?",
                options: [
                    "Real problems and unmet needs",
                    "Random features without purpose",
                    "Only expensive technology",
                    "Only existing advertisements"
                ],
                answer: 0
            },
            {
                title: "Target Users",
                text: "A target user is the specific group of people who experience the problem and may use the solution.",
                example: "College students can be the target users for a student productivity app.",
                question: "Who are target users?",
                options: [
                    "People who may use or benefit from the solution",
                    "Only investors",
                    "Only developers",
                    "Only competitors"
                ],
                answer: 0
            },
            {
                title: "Pain Points",
                text: "Pain points are difficulties, frustrations, or challenges that users experience.",
                example: "Long waiting times can be a pain point for customers at a service center.",
                question: "What is a pain point?",
                options: [
                    "A user difficulty or frustration",
                    "A programming language",
                    "A company logo",
                    "A database table"
                ],
                answer: 0
            },
            {
                title: "Problem Statement",
                text: "A problem statement clearly describes who has a problem, what the problem is, and why it matters.",
                example: "College students need a simple way to organize learning resources in one place.",
                question: "Why create a problem statement?",
                options: [
                    "To clearly define the problem",
                    "To immediately build the product",
                    "To create advertisements",
                    "To choose a logo"
                ],
                answer: 0
            },
            {
                title: "Market Need",
                text: "A market need exists when enough users have a problem and are interested in a useful solution.",
                example: "Growing demand for online learning can indicate a market need for educational tools.",
                question: "What does market need indicate?",
                options: [
                    "Demand for a useful solution",
                    "Only technical difficulty",
                    "Only development cost",
                    "Only company size"
                ],
                answer: 0
            },
            {
                title: "Competitor Research",
                text: "Studying existing solutions helps entrepreneurs understand what already exists and where improvements are possible.",
                example: "Compare existing study apps to find features users still need.",
                question: "Why study competitors?",
                options: [
                    "To understand existing solutions and opportunities",
                    "To copy everything exactly",
                    "To avoid users",
                    "To remove the problem"
                ],
                answer: 0
            },
            {
                title: "Opportunity Identification",
                text: "An opportunity exists when a meaningful problem can be solved better, faster, cheaper, or more conveniently.",
                example: "A faster local delivery solution can create an opportunity if existing services are slow.",
                question: "What can create a business opportunity?",
                options: [
                    "A meaningful problem with a possible better solution",
                    "A random product",
                    "An unrelated feature",
                    "A problem nobody experiences"
                ],
                answer: 0
            },
            {
                title: "Validate the Problem",
                text: "Before building a product, entrepreneurs should confirm that the problem is real and important to potential users.",
                example: "Interview students to check whether they actually experience the identified study problem.",
                question: "Why validate a problem?",
                options: [
                    "To confirm that users actually need a solution",
                    "To avoid talking to users",
                    "To immediately launch",
                    "To increase development time"
                ],
                answer: 0
            }
        ]
    },

    "Idea Validation": {
        title: "Idea Validation",
        subtitle: "Learn how to test whether a business idea is useful and viable.",
        lessons: [
            {
                title: "What is Idea Validation?",
                text: "Idea validation checks whether a proposed product or service solves a real problem for potential users.",
                example: "Ask students to test an early version of a learning app.",
                question: "What is idea validation?",
                options: [
                    "Testing whether an idea solves a real need",
                    "Launching without research",
                    "Creating a logo",
                    "Hiring a large team"
                ],
                answer: 0
            },
            {
                title: "User Interviews",
                text: "User interviews provide direct information about people's problems, needs, and expectations.",
                example: "Interview students about difficulties they face while preparing for exams.",
                question: "What is the purpose of user interviews?",
                options: [
                    "Understand user needs and problems",
                    "Sell the final product immediately",
                    "Design only the logo",
                    "Replace all testing"
                ],
                answer: 0
            },
            {
                title: "Surveys",
                text: "Surveys can collect structured feedback from a larger number of potential users.",
                example: "A survey can ask students which learning features they use most.",
                question: "What can surveys help collect?",
                options: [
                    "User opinions and preferences",
                    "Only source code",
                    "Only financial records",
                    "Only server logs"
                ],
                answer: 0
            },
            {
                title: "Prototype Testing",
                text: "A prototype is an early version of a product used to test ideas before full development.",
                example: "A clickable prototype can test the flow of a mobile app.",
                question: "Why test a prototype?",
                options: [
                    "To learn before fully building the product",
                    "To avoid user feedback",
                    "To increase complexity",
                    "To replace the business idea"
                ],
                answer: 0
            },
            {
                title: "Minimum Viable Product",
                text: "An MVP is a simple version of a product that provides enough value to test the core idea with users.",
                example: "A basic learning app with only lessons and quizzes can be an MVP.",
                question: "What is an MVP?",
                options: [
                    "A simple product used to test the core idea",
                    "The final perfect product",
                    "A marketing poster",
                    "A company document"
                ],
                answer: 0
            },
            {
                title: "Feedback",
                text: "User feedback helps entrepreneurs identify useful features, problems, and improvements.",
                example: "Users may report that a feature is confusing and suggest a simpler design.",
                question: "Why collect feedback?",
                options: [
                    "To improve the product",
                    "To avoid users",
                    "To stop testing",
                    "To remove useful features"
                ],
                answer: 0
            },
            {
                title: "Market Validation",
                text: "Market validation checks whether enough people are interested in the proposed solution.",
                example: "A startup can test interest through surveys, landing pages, or pilot users.",
                question: "What does market validation test?",
                options: [
                    "Whether there is demand for the solution",
                    "Only coding ability",
                    "Only logo quality",
                    "Only office location"
                ],
                answer: 0
            },
            {
                title: "Improve the Idea",
                text: "Validation results should be used to refine the product, target users, features, or business model.",
                example: "Feedback may show that students prefer a mobile-first learning experience.",
                question: "What should happen after validation?",
                options: [
                    "Improve the idea using evidence and feedback",
                    "Ignore all feedback",
                    "Delete the product",
                    "Stop understanding users"
                ],
                answer: 0
            }
        ]
    },

    "Product Design": {
        title: "Product Design",
        subtitle: "Learn how to design useful products around user needs.",
        lessons: [
            {
                title: "Understanding Users",
                text: "Good product design starts with understanding users, their goals, behaviors, and difficulties.",
                example: "Study how students currently prepare for exams before designing a learning platform.",
                question: "What should product design start with?",
                options: [
                    "Understanding users",
                    "Choosing random colors",
                    "Writing advertisements",
                    "Buying servers"
                ],
                answer: 0
            },
            {
                title: "User Needs",
                text: "A product should provide meaningful value by addressing important user needs.",
                example: "Students may need quick access to organized study materials.",
                question: "Why identify user needs?",
                options: [
                    "To create useful solutions",
                    "To add random features",
                    "To avoid research",
                    "To increase complexity"
                ],
                answer: 0
            },
            {
                title: "Product Features",
                text: "Features are capabilities that help users accomplish their goals.",
                example: "Search, quizzes, and progress tracking can be features of a learning platform.",
                question: "What are product features?",
                options: [
                    "Capabilities that help users",
                    "Only company names",
                    "Only advertisements",
                    "Only technical errors"
                ],
                answer: 0
            },
            {
                title: "User Experience",
                text: "User experience describes how users feel and interact with a product while accomplishing their goals.",
                example: "A simple navigation system can improve the experience of a learning app.",
                question: "What does user experience focus on?",
                options: [
                    "How users interact with and experience a product",
                    "Only backend code",
                    "Only server hardware",
                    "Only company finance"
                ],
                answer: 0
            },
            {
                title: "Prioritizing Features",
                text: "Feature prioritization helps teams focus on the features that provide the greatest value.",
                example: "An MVP may prioritize login and core learning features before advanced analytics.",
                question: "Why prioritize features?",
                options: [
                    "To focus on the most valuable features",
                    "To build everything at once",
                    "To remove user needs",
                    "To increase unnecessary work"
                ],
                answer: 0
            },
            {
                title: "Product Roadmap",
                text: "A product roadmap describes planned features and improvements over time.",
                example: "Version one may include core features while later versions add advanced AI tools.",
                question: "What does a product roadmap show?",
                options: [
                    "Planned product development",
                    "Only company expenses",
                    "Only source code",
                    "Only user passwords"
                ],
                answer: 0
            },
            {
                title: "Usability",
                text: "A usable product should be easy to understand, navigate, and operate.",
                example: "Clear buttons and simple navigation make an application easier to use.",
                question: "What is usability?",
                options: [
                    "How easily users can use a product",
                    "How expensive a product is",
                    "How large the database is",
                    "How fast a server is"
                ],
                answer: 0
            },
            {
                title: "Product Improvement",
                text: "Products should continuously improve based on user feedback, data, and changing needs.",
                example: "Analytics may show that users struggle with a particular screen, leading to a redesign.",
                question: "How can products improve?",
                options: [
                    "Using feedback and evidence",
                    "Ignoring users",
                    "Removing testing",
                    "Avoiding data"
                ],
                answer: 0
            }
        ]
    },

    "MVP Development": {
        title: "MVP Development",
        subtitle: "Learn how to build and test a minimum viable product.",
        lessons: [
            {
                title: "MVP Concept",
                text: "An MVP focuses on the smallest useful product that can test the main business assumption.",
                example: "A basic food ordering app can start with browsing, ordering, and payment.",
                question: "What is the purpose of an MVP?",
                options: [
                    "Test the core idea with a useful product",
                    "Build every possible feature",
                    "Avoid users",
                    "Create the final version immediately"
                ],
                answer: 0
            },
            {
                title: "Define Core Features",
                text: "Core features are the minimum capabilities required to deliver the main value of the product.",
                example: "A learning MVP may need lessons, quizzes, and progress tracking.",
                question: "What should an MVP contain?",
                options: [
                    "Essential features for the core value",
                    "Every possible feature",
                    "Only animations",
                    "Only advertisements"
                ],
                answer: 0
            },
            {
                title: "Build Quickly",
                text: "MVP development focuses on creating a functional version efficiently so it can be tested with real users.",
                example: "A simple working prototype can be released before adding advanced features.",
                question: "Why build an MVP quickly?",
                options: [
                    "To learn from users sooner",
                    "To avoid testing",
                    "To increase unnecessary features",
                    "To delay feedback"
                ],
                answer: 0
            },
            {
                title: "Test the MVP",
                text: "Testing helps identify technical problems and usability issues before expanding the product.",
                example: "Give the MVP to a small group of users and observe their experience.",
                question: "Why test an MVP?",
                options: [
                    "To identify problems and learn from users",
                    "To avoid feedback",
                    "To stop development",
                    "To remove useful features"
                ],
                answer: 0
            },
            {
                title: "Measure Results",
                text: "Metrics help determine whether users are engaging with the MVP and whether the core idea shows promise.",
                example: "Track active users, task completion, and retention.",
                question: "Why measure MVP results?",
                options: [
                    "To evaluate product performance and interest",
                    "To delete user data",
                    "To avoid decisions",
                    "To remove testing"
                ],
                answer: 0
            },
            {
                title: "Iterate",
                text: "Iteration means improving the product through repeated cycles of building, testing, and learning.",
                example: "User feedback can lead to a simpler checkout process.",
                question: "What is iteration?",
                options: [
                    "Repeated improvement based on learning",
                    "Building once and never changing",
                    "Deleting the product",
                    "Avoiding feedback"
                ],
                answer: 0
            },
            {
                title: "Scale the MVP",
                text: "After validating the core idea, the product can gradually add features, users, and infrastructure.",
                example: "A successful prototype can be expanded with additional payment options.",
                question: "When should an MVP scale?",
                options: [
                    "After gaining evidence that the core idea works",
                    "Before any testing",
                    "Before identifying users",
                    "Without collecting data"
                ],
                answer: 0
            },
            {
                title: "Launch Readiness",
                text: "Before wider release, check reliability, usability, security, support, and the ability to handle expected users.",
                example: "Test the application with a larger group before public launch.",
                question: "What should be checked before launch?",
                options: [
                    "Reliability, usability, and security",
                    "Only the logo",
                    "Only the color scheme",
                    "Only the company name"
                ],
                answer: 0
            }
        ]
    },

    "Business Model": {
        title: "Business Model",
        subtitle: "Understand how businesses create, deliver, and capture value.",
        lessons: [
            {
                title: "What is a Business Model?",
                text: "A business model explains how a business creates value for customers and generates revenue.",
                example: "A subscription learning platform provides educational content and earns recurring revenue.",
                question: "What does a business model explain?",
                options: [
                    "How a business creates value and earns revenue",
                    "Only the company logo",
                    "Only employee schedules",
                    "Only source code"
                ],
                answer: 0
            },
            {
                title: "Value Proposition",
                text: "A value proposition explains why customers should choose a product or service.",
                example: "A learning platform may offer personalized lessons and progress tracking.",
                question: "What is a value proposition?",
                options: [
                    "The main value offered to customers",
                    "A database table",
                    "A programming language",
                    "An employee record"
                ],
                answer: 0
            },
            {
                title: "Customer Segments",
                text: "Customer segments are groups of customers with similar needs or characteristics.",
                example: "College students can be one customer segment for an education startup.",
                question: "What are customer segments?",
                options: [
                    "Groups of customers with similar needs",
                    "Company employees",
                    "Database tables",
                    "Marketing logos"
                ],
                answer: 0
            },
            {
                title: "Revenue Streams",
                text: "Revenue streams describe the different ways a business earns money.",
                example: "A software company may earn through subscriptions and premium plans.",
                question: "What are revenue streams?",
                options: [
                    "Ways a business generates income",
                    "Ways to store data",
                    "Ways to design products",
                    "Ways to hire employees"
                ],
                answer: 0
            },
            {
                title: "Cost Structure",
                text: "Cost structure describes the major expenses required to operate a business.",
                example: "Cloud hosting, salaries, marketing, and software can be business costs.",
                question: "What does cost structure describe?",
                options: [
                    "Major business expenses",
                    "Customer preferences",
                    "Programming syntax",
                    "Product colors"
                ],
                answer: 0
            },
            {
                title: "Channels",
                text: "Channels are ways a business reaches customers and delivers its product or service.",
                example: "A mobile app and website can be channels for reaching customers.",
                question: "What are business channels?",
                options: [
                    "Ways to reach and serve customers",
                    "Database columns",
                    "Programming frameworks",
                    "Employee records"
                ],
                answer: 0
            },
            {
                title: "Key Partners",
                text: "Key partners are external organizations or people that help a business create or deliver value.",
                example: "A delivery startup may partner with logistics providers.",
                question: "Who are key partners?",
                options: [
                    "External partners who support the business",
                    "Only customers",
                    "Only competitors",
                    "Only employees"
                ],
                answer: 0
            },
            {
                title: "Business Model Validation",
                text: "A business model should be tested to determine whether customers value the product and whether the economics can work.",
                example: "A startup can test whether users are willing to pay for a premium plan.",
                question: "Why validate a business model?",
                options: [
                    "To check customer value and financial viability",
                    "To avoid customers",
                    "To remove revenue",
                    "To stop testing"
                ],
                answer: 0
            }
        ]
    },

    "Marketing": {
        title: "Marketing",
        subtitle: "Learn the fundamentals of promoting products and reaching customers.",
        lessons: [
            {
                title: "What is Marketing?",
                text: "Marketing involves understanding customers, communicating value, and promoting products or services.",
                example: "A startup can use social media to introduce its new application.",
                question: "What is marketing mainly about?",
                options: [
                    "Understanding customers and communicating value",
                    "Only writing code",
                    "Only managing databases",
                    "Only hiring employees"
                ],
                answer: 0
            },
            {
                title: "Target Audience",
                text: "A target audience is the group of people a marketing message or product is intended for.",
                example: "College students can be the target audience for an educational app.",
                question: "What is a target audience?",
                options: [
                    "The intended group of customers",
                    "A database server",
                    "A development team",
                    "A company building"
                ],
                answer: 0
            },
            {
                title: "Branding",
                text: "Branding creates a recognizable identity through elements such as name, design, messaging, and customer experience.",
                example: "A consistent logo and message can make a startup easier to recognize.",
                question: "What does branding create?",
                options: [
                    "A recognizable business identity",
                    "A database schema",
                    "A programming language",
                    "A server"
                ],
                answer: 0
            },
            {
                title: "Content Marketing",
                text: "Content marketing uses useful or interesting content to attract and engage a target audience.",
                example: "A startup can publish educational videos related to its product.",
                question: "What does content marketing use?",
                options: [
                    "Useful content to attract audiences",
                    "Only paid advertisements",
                    "Only databases",
                    "Only source code"
                ],
                answer: 0
            },
            {
                title: "Social Media Marketing",
                text: "Social media platforms can help businesses reach audiences, build communities, and communicate with customers.",
                example: "A startup can share product updates through social media posts.",
                question: "Why use social media marketing?",
                options: [
                    "To reach and engage audiences",
                    "To create databases",
                    "To manage servers",
                    "To write code"
                ],
                answer: 0
            },
            {
                title: "Customer Acquisition",
                text: "Customer acquisition is the process of attracting and converting new customers.",
                example: "A free trial can encourage potential users to try a software product.",
                question: "What is customer acquisition?",
                options: [
                    "Attracting and converting new customers",
                    "Deleting customers",
                    "Creating source code",
                    "Managing databases"
                ],
                answer: 0
            },
            {
                title: "Customer Retention",
                text: "Customer retention focuses on keeping existing customers engaged and satisfied.",
                example: "Regular improvements and good support can encourage customers to continue using a product.",
                question: "What does customer retention focus on?",
                options: [
                    "Keeping existing customers",
                    "Finding only new employees",
                    "Deleting user accounts",
                    "Creating databases"
                ],
                answer: 0
            },
            {
                title: "Marketing Metrics",
                text: "Marketing metrics help businesses measure the effectiveness of their campaigns.",
                example: "Track website visits, conversions, engagement, and customer acquisition cost.",
                question: "Why measure marketing metrics?",
                options: [
                    "To evaluate marketing performance",
                    "To remove customers",
                    "To replace product development",
                    "To delete campaigns"
                ],
                answer: 0
            }
        ]
    },

    "Startup Finance": {
        title: "Startup Finance",
        subtitle: "Understand the basic financial concepts needed to manage a startup.",
        lessons: [
            {
                title: "Startup Costs",
                text: "Startup costs are the expenses required to begin and establish a business.",
                example: "Initial software, equipment, registration, and marketing can be startup costs.",
                question: "What are startup costs?",
                options: [
                    "Expenses required to start a business",
                    "Only customer payments",
                    "Only employee salaries",
                    "Only profits"
                ],
                answer: 0
            },
            {
                title: "Revenue",
                text: "Revenue is the income a business receives from selling products or services.",
                example: "A subscription payment from a customer contributes to revenue.",
                question: "What is revenue?",
                options: [
                    "Income generated by the business",
                    "Only business expenses",
                    "Only loans",
                    "Only salaries"
                ],
                answer: 0
            },
            {
                title: "Expenses",
                text: "Expenses are costs incurred while operating a business.",
                example: "Hosting, salaries, marketing, and office costs can be expenses.",
                question: "What are expenses?",
                options: [
                    "Costs of operating a business",
                    "Customer revenue",
                    "Business profits",
                    "Investor ownership"
                ],
                answer: 0
            },
            {
                title: "Profit and Loss",
                text: "Profit occurs when revenue is greater than expenses, while a loss occurs when expenses exceed revenue.",
                example: "If revenue is ₹1 lakh and expenses are ₹70,000, the business has a ₹30,000 profit.",
                question: "When does a business make a profit?",
                options: [
                    "When revenue exceeds expenses",
                    "When expenses exceed revenue",
                    "When there is no revenue",
                    "When costs are unlimited"
                ],
                answer: 0
            },
            {
                title: "Cash Flow",
                text: "Cash flow tracks money moving into and out of a business.",
                example: "Customer payments bring cash in while salaries and bills take cash out.",
                question: "What does cash flow track?",
                options: [
                    "Money moving into and out of the business",
                    "Only profits",
                    "Only employee numbers",
                    "Only product features"
                ],
                answer: 0
            },
            {
                title: "Budgeting",
                text: "A budget estimates expected income and expenses and helps control spending.",
                example: "A startup can create a monthly budget for cloud, marketing, and salaries.",
                question: "Why create a budget?",
                options: [
                    "To plan and control spending",
                    "To remove revenue",
                    "To avoid financial planning",
                    "To increase unnecessary costs"
                ],
                answer: 0
            },
            {
                title: "Break-Even Point",
                text: "The break-even point is reached when total revenue equals total costs.",
                example: "A startup breaks even when its sales cover all operating costs.",
                question: "What happens at break-even?",
                options: [
                    "Revenue equals costs",
                    "Revenue is always zero",
                    "Costs are always zero",
                    "Profit is unlimited"
                ],
                answer: 0
            },
            {
                title: "Financial Planning",
                text: "Financial planning helps a startup estimate funding needs, costs, revenue, and future growth.",
                example: "A startup can forecast expenses and expected revenue for the next year.",
                question: "Why is financial planning important?",
                options: [
                    "To make informed financial decisions",
                    "To avoid tracking money",
                    "To remove budgeting",
                    "To increase uncertainty"
                ],
                answer: 0
            }
        ]
    },

    "Launch Strategy": {
        title: "Launch Strategy",
        subtitle: "Learn how to prepare and execute a product launch.",
        lessons: [
            {
                title: "Launch Planning",
                text: "A launch plan defines the target audience, goals, channels, timeline, and resources needed for release.",
                example: "A startup can plan a social media campaign before releasing its app.",
                question: "What does a launch plan define?",
                options: [
                    "Goals, audience, channels, and timeline",
                    "Only the logo",
                    "Only source code",
                    "Only employee names"
                ],
                answer: 0
            },
            {
                title: "Pre-Launch Activities",
                text: "Pre-launch activities build awareness and prepare users before the product becomes widely available.",
                example: "A startup can collect early sign-ups through a landing page.",
                question: "What is a pre-launch activity?",
                options: [
                    "Building awareness before release",
                    "Deleting the product",
                    "Stopping marketing",
                    "Removing user research"
                ],
                answer: 0
            },
            {
                title: "Launch Goals",
                text: "Clear launch goals make it possible to measure whether the launch was successful.",
                example: "A goal could be obtaining the first 1,000 registered users.",
                question: "Why set launch goals?",
                options: [
                    "To measure launch success",
                    "To avoid measurement",
                    "To remove users",
                    "To stop development"
                ],
                answer: 0
            },
            {
                title: "Launch Channels",
                text: "Launch channels are platforms or methods used to reach potential customers.",
                example: "A product can launch through a website, social media, email, or app store.",
                question: "What are launch channels?",
                options: [
                    "Ways to reach potential customers",
                    "Database tables",
                    "Programming languages",
                    "Office locations"
                ],
                answer: 0
            },
            {
                title: "Product Release",
                text: "The release should provide users with a stable product and clear information about how to use it.",
                example: "Publish the application with onboarding instructions and support information.",
                question: "What is important during release?",
                options: [
                    "A stable product and clear user communication",
                    "No testing",
                    "No support",
                    "Random features"
                ],
                answer: 0
            },
            {
                title: "Monitor the Launch",
                text: "After launch, monitor usage, errors, customer feedback, and business metrics.",
                example: "Track sign-ups, active users, crashes, and customer feedback.",
                question: "Why monitor after launch?",
                options: [
                    "To understand performance and user response",
                    "To stop collecting data",
                    "To delete feedback",
                    "To avoid improvements"
                ],
                answer: 0
            },
            {
                title: "Handle Feedback",
                text: "Customer feedback after launch can reveal bugs, usability problems, and opportunities for improvement.",
                example: "Users may request a feature that solves a common problem.",
                question: "What can launch feedback reveal?",
                options: [
                    "Problems and improvement opportunities",
                    "Only employee salaries",
                    "Only database size",
                    "Only server hardware"
                ],
                answer: 0
            },
            {
                title: "Post-Launch Growth",
                text: "After launch, businesses can improve the product, retain users, expand marketing, and explore new markets.",
                example: "A successful app can add useful features based on user data and feedback.",
                question: "What happens after launch?",
                options: [
                    "The product can be improved and grown",
                    "All development must stop",
                    "Feedback should be ignored",
                    "Marketing should always stop"
                ],
                answer: 0
            }
        ]
    },
        "Business Fundamentals": {
        title: "Business Fundamentals",
        subtitle: "Learn the basic concepts of how businesses operate and create value.",
        lessons: [
            {
                title: "What is a Business?",
                text: "A business provides products or services to customers in exchange for value, usually revenue.",
                example: "A software company provides applications to customers and earns money through subscriptions.",
                question: "What does a business generally provide?",
                options: [
                    "Products or services that create value",
                    "Only free software",
                    "Only advertisements",
                    "Only employee training"
                ],
                answer: 0
            },
            {
                title: "Customers",
                text: "Customers are people or organizations that purchase or use a product or service.",
                example: "Students using a paid learning platform are its customers.",
                question: "Who are customers?",
                options: [
                    "People or organizations that use or buy a product",
                    "Only company employees",
                    "Only investors",
                    "Only competitors"
                ],
                answer: 0
            },
            {
                title: "Value Creation",
                text: "Businesses create value by solving problems or satisfying customer needs.",
                example: "A food delivery service creates value by making food ordering more convenient.",
                question: "How does a business create value?",
                options: [
                    "By solving customer problems or meeting needs",
                    "By ignoring customers",
                    "By increasing unnecessary complexity",
                    "By avoiding products"
                ],
                answer: 0
            },
            {
                title: "Revenue",
                text: "Revenue is the money a business earns from selling its products or services.",
                example: "A company earning ₹50,000 from subscriptions has generated revenue.",
                question: "What is revenue?",
                options: [
                    "Money earned from business activities",
                    "Money spent on salaries",
                    "A business loan only",
                    "A product feature"
                ],
                answer: 0
            },
            {
                title: "Business Expenses",
                text: "Expenses are the costs required to operate a business.",
                example: "Rent, salaries, cloud hosting, and marketing are common business expenses.",
                question: "What are business expenses?",
                options: [
                    "Costs required to operate a business",
                    "Customer payments",
                    "Business profits",
                    "Product reviews"
                ],
                answer: 0
            },
            {
                title: "Profit",
                text: "Profit is generally the amount remaining when business expenses are subtracted from revenue.",
                example: "If revenue is ₹1 lakh and expenses are ₹70,000, profit is ₹30,000.",
                question: "How is profit generally calculated?",
                options: [
                    "Revenue minus expenses",
                    "Expenses plus losses",
                    "Customers minus employees",
                    "Revenue multiplied by employees"
                ],
                answer: 0
            },
            {
                title: "Business Growth",
                text: "Business growth can involve gaining more customers, increasing revenue, expanding products, or entering new markets.",
                example: "A startup can grow by expanding its application to new cities.",
                question: "What can business growth involve?",
                options: [
                    "More customers and greater business value",
                    "Only reducing employees",
                    "Only deleting products",
                    "Only increasing expenses"
                ],
                answer: 0
            },
            {
                title: "Business Strategy",
                text: "Business strategy defines how an organization plans to achieve its goals and compete effectively.",
                example: "A company may focus on affordable pricing and excellent customer support.",
                question: "What does business strategy define?",
                options: [
                    "How a business plans to achieve its goals",
                    "Only employee attendance",
                    "Only database structure",
                    "Only website colors"
                ],
                answer: 0
            }
        ]
    },

    "Communication": {
        title: "Communication",
        subtitle: "Develop clear and effective communication skills for professional environments.",
        lessons: [
            {
                title: "What is Communication?",
                text: "Communication is the process of exchanging information, ideas, or feelings between people.",
                example: "A manager explaining a project task to a team is communication.",
                question: "What is communication?",
                options: [
                    "Exchange of information and ideas",
                    "Only writing code",
                    "Only listening",
                    "Only sending emails"
                ],
                answer: 0
            },
            {
                title: "Verbal Communication",
                text: "Verbal communication uses spoken or written words to express information and ideas.",
                example: "Presenting a project to judges is verbal communication.",
                question: "What does verbal communication use?",
                options: [
                    "Words",
                    "Only gestures",
                    "Only images",
                    "Only facial expressions"
                ],
                answer: 0
            },
            {
                title: "Non-Verbal Communication",
                text: "Non-verbal communication includes body language, facial expressions, gestures, and posture.",
                example: "Maintaining appropriate eye contact can support professional communication.",
                question: "Which is non-verbal communication?",
                options: [
                    "Body language",
                    "Writing a report",
                    "Sending an email",
                    "Speaking on a call"
                ],
                answer: 0
            },
            {
                title: "Active Listening",
                text: "Active listening means paying attention, understanding the speaker, and responding appropriately.",
                example: "A team member listens carefully before responding to a colleague's concern.",
                question: "What is active listening?",
                options: [
                    "Listening carefully and responding appropriately",
                    "Interrupting constantly",
                    "Ignoring the speaker",
                    "Thinking only about your own response"
                ],
                answer: 0
            },
            {
                title: "Clear Communication",
                text: "Clear communication uses simple, organized, and specific language to reduce misunderstanding.",
                example: "Instead of saying 'finish it soon', provide a clear deadline.",
                question: "Why is clear communication important?",
                options: [
                    "It reduces misunderstanding",
                    "It increases confusion",
                    "It avoids teamwork",
                    "It removes feedback"
                ],
                answer: 0
            },
            {
                title: "Professional Emails",
                text: "Professional emails should have a clear subject, polite language, organized content, and an appropriate closing.",
                example: "A student can send a concise email requesting project guidance.",
                question: "What should a professional email have?",
                options: [
                    "Clear and organized communication",
                    "Only emojis",
                    "No subject",
                    "Random information"
                ],
                answer: 0
            },
            {
                title: "Presentation Skills",
                text: "Good presentations communicate ideas clearly using structure, visuals, and confident delivery.",
                example: "A hackathon team can explain its problem, solution, technology, and impact.",
                question: "What makes a presentation effective?",
                options: [
                    "Clear structure and confident communication",
                    "Only animations",
                    "Very small text",
                    "Unorganized information"
                ],
                answer: 0
            },
            {
                title: "Communication in Teams",
                text: "Effective team communication keeps members aligned about goals, responsibilities, progress, and problems.",
                example: "Daily updates can help a project team coordinate tasks.",
                question: "Why is communication important in teams?",
                options: [
                    "It keeps team members aligned",
                    "It prevents collaboration",
                    "It removes responsibilities",
                    "It avoids problem solving"
                ],
                answer: 0
            }
        ]
    },

    "Leadership": {
        title: "Leadership",
        subtitle: "Learn the fundamentals of guiding teams and making responsible decisions.",
        lessons: [
            {
                title: "What is Leadership?",
                text: "Leadership is the ability to guide, support, and influence people toward a shared goal.",
                example: "A team leader coordinates members during a project.",
                question: "What is leadership?",
                options: [
                    "Guiding people toward a shared goal",
                    "Controlling everyone",
                    "Avoiding responsibility",
                    "Working without a team"
                ],
                answer: 0
            },
            {
                title: "Vision",
                text: "A leader provides a clear vision that helps the team understand the desired future outcome.",
                example: "A startup leader explains the long-term goal of the product.",
                question: "Why is vision important?",
                options: [
                    "It gives the team direction",
                    "It creates confusion",
                    "It removes goals",
                    "It prevents planning"
                ],
                answer: 0
            },
            {
                title: "Decision Making",
                text: "Leaders make decisions by considering available information, risks, goals, and potential outcomes.",
                example: "A project leader chooses between two technologies after comparing their advantages.",
                question: "What should leaders consider when making decisions?",
                options: [
                    "Information, risks, and goals",
                    "Only personal preference",
                    "Only speed",
                    "No information"
                ],
                answer: 0
            },
            {
                title: "Delegation",
                text: "Delegation means assigning suitable responsibilities to team members based on their skills and roles.",
                example: "A developer handles backend work while a designer handles the interface.",
                question: "What is delegation?",
                options: [
                    "Assigning responsibilities appropriately",
                    "Doing every task alone",
                    "Avoiding teamwork",
                    "Removing responsibilities"
                ],
                answer: 0
            },
            {
                title: "Team Motivation",
                text: "Leaders motivate teams by providing support, recognition, meaningful goals, and opportunities to grow.",
                example: "Recognizing a team member's contribution can improve motivation.",
                question: "How can leaders motivate teams?",
                options: [
                    "Through support, recognition, and meaningful goals",
                    "By ignoring contributions",
                    "By creating confusion",
                    "By avoiding communication"
                ],
                answer: 0
            },
            {
                title: "Conflict Management",
                text: "Conflict management involves understanding disagreements and finding constructive solutions.",
                example: "Two team members can discuss different approaches and agree on evidence-based criteria.",
                question: "What is a good approach to conflict?",
                options: [
                    "Understand the issue and find a constructive solution",
                    "Ignore every disagreement",
                    "Blame one person immediately",
                    "Stop communication"
                ],
                answer: 0
            },
            {
                title: "Emotional Intelligence",
                text: "Emotional intelligence involves understanding and managing your emotions while recognizing the emotions of others.",
                example: "A leader notices team stress and responds with appropriate support.",
                question: "What does emotional intelligence involve?",
                options: [
                    "Understanding emotions and responding appropriately",
                    "Ignoring emotions",
                    "Avoiding people",
                    "Making decisions without awareness"
                ],
                answer: 0
            },
            {
                title: "Responsible Leadership",
                text: "Responsible leaders act ethically, communicate honestly, and consider the impact of their decisions.",
                example: "A leader protects user data and communicates problems honestly.",
                question: "What is responsible leadership?",
                options: [
                    "Ethical and accountable decision-making",
                    "Hiding important problems",
                    "Ignoring team members",
                    "Avoiding responsibility"
                ],
                answer: 0
            }
        ]
    },

    "Finance Basics": {
        title: "Finance Basics",
        subtitle: "Understand essential financial concepts for business and personal decision-making.",
        lessons: [
            {
                title: "Income",
                text: "Income is money received by a person or organization from sources such as work, sales, or investments.",
                example: "A business receives income from selling its products.",
                question: "What is income?",
                options: [
                    "Money received from a source",
                    "Only money spent",
                    "Only business debt",
                    "Only taxes"
                ],
                answer: 0
            },
            {
                title: "Expenses",
                text: "Expenses are amounts of money spent to operate a business or meet financial needs.",
                example: "Rent and software subscriptions are business expenses.",
                question: "What are expenses?",
                options: [
                    "Money spent",
                    "Money earned only",
                    "Customer growth",
                    "Business ownership"
                ],
                answer: 0
            },
            {
                title: "Assets",
                text: "Assets are resources that have economic value and are controlled by a person or organization.",
                example: "Cash, equipment, and property can be assets.",
                question: "What is an asset?",
                options: [
                    "A resource with economic value",
                    "Only a business expense",
                    "Only a loan",
                    "Only a tax"
                ],
                answer: 0
            },
            {
                title: "Liabilities",
                text: "Liabilities are financial obligations that a person or organization owes to others.",
                example: "A business loan is a liability.",
                question: "What is a liability?",
                options: [
                    "A financial obligation",
                    "A business profit",
                    "A customer",
                    "A product feature"
                ],
                answer: 0
            },
            {
                title: "Profit and Loss",
                text: "Profit occurs when income or revenue exceeds expenses, while a loss occurs when expenses exceed income or revenue.",
                example: "A business earns ₹80,000 and spends ₹60,000, resulting in ₹20,000 profit.",
                question: "When does profit occur?",
                options: [
                    "When revenue exceeds expenses",
                    "When expenses exceed revenue",
                    "When revenue is zero",
                    "When all costs increase"
                ],
                answer: 0
            },
            {
                title: "Budget",
                text: "A budget is a plan for expected income and expenses over a specific period.",
                example: "A startup can create a monthly budget for salaries and marketing.",
                question: "What is a budget?",
                options: [
                    "A plan for income and expenses",
                    "A database",
                    "A product design",
                    "A marketing logo"
                ],
                answer: 0
            },
            {
                title: "Savings",
                text: "Savings are funds kept aside for future needs, goals, or emergencies.",
                example: "A business may maintain a cash reserve for unexpected expenses.",
                question: "Why save money?",
                options: [
                    "For future needs and unexpected situations",
                    "To increase unnecessary spending",
                    "To avoid planning",
                    "To remove financial security"
                ],
                answer: 0
            },
            {
                title: "Financial Planning",
                text: "Financial planning helps individuals and businesses make informed decisions about income, expenses, savings, and goals.",
                example: "A startup can plan its expected expenses and funding requirements.",
                question: "Why is financial planning useful?",
                options: [
                    "To make informed financial decisions",
                    "To avoid tracking money",
                    "To increase uncertainty",
                    "To remove budgeting"
                ],
                answer: 0
            }
        ]
    },

    "Project Management": {
        title: "Project Management",
        subtitle: "Learn how to plan, organize, and deliver projects effectively.",
        lessons: [
            {
                title: "What is Project Management?",
                text: "Project management involves planning and coordinating resources and activities to achieve specific project goals.",
                example: "A team plans tasks and deadlines to build a college application.",
                question: "What is project management?",
                options: [
                    "Planning and coordinating work to achieve project goals",
                    "Only writing code",
                    "Only hiring people",
                    "Only creating presentations"
                ],
                answer: 0
            },
            {
                title: "Project Goals",
                text: "Clear goals define what a project should achieve and help teams measure success.",
                example: "Build and launch a working prototype within four weeks.",
                question: "Why define project goals?",
                options: [
                    "To provide clear direction",
                    "To create confusion",
                    "To remove deadlines",
                    "To avoid measurement"
                ],
                answer: 0
            },
            {
                title: "Task Planning",
                text: "Breaking a project into smaller tasks makes the work easier to organize and track.",
                example: "Divide an application project into UI, backend, database, and testing tasks.",
                question: "Why break projects into tasks?",
                options: [
                    "To organize and track the work",
                    "To make work impossible",
                    "To remove responsibilities",
                    "To avoid deadlines"
                ],
                answer: 0
            },
            {
                title: "Time Management",
                text: "Time management helps teams prioritize tasks and complete project work within deadlines.",
                example: "A team prioritizes critical features before optional features.",
                question: "What does time management help with?",
                options: [
                    "Completing important work within deadlines",
                    "Increasing delays",
                    "Removing priorities",
                    "Avoiding planning"
                ],
                answer: 0
            },
            {
                title: "Team Roles",
                text: "Clearly defined roles help team members understand their responsibilities.",
                example: "One person manages frontend development while another handles backend development.",
                question: "Why define team roles?",
                options: [
                    "To clarify responsibilities",
                    "To create confusion",
                    "To avoid teamwork",
                    "To duplicate every task"
                ],
                answer: 0
            },
            {
                title: "Risk Management",
                text: "Risk management identifies possible problems and prepares ways to reduce their impact.",
                example: "A team keeps backups in case important project files are lost.",
                question: "What is risk management?",
                options: [
                    "Identifying and reducing potential problems",
                    "Ignoring all problems",
                    "Removing project goals",
                    "Avoiding testing"
                ],
                answer: 0
            },
            {
                title: "Progress Tracking",
                text: "Tracking progress helps teams understand what is completed, what remains, and where delays exist.",
                example: "A task board can show completed and pending development tasks.",
                question: "Why track progress?",
                options: [
                    "To understand project status",
                    "To remove deadlines",
                    "To avoid communication",
                    "To delete tasks"
                ],
                answer: 0
            },
            {
                title: "Project Completion",
                text: "A project is completed when agreed goals and deliverables are finished and reviewed.",
                example: "The team tests the application and submits the final version.",
                question: "What happens at project completion?",
                options: [
                    "Deliverables are completed and reviewed",
                    "Planning begins from zero",
                    "All files are deleted",
                    "Testing is skipped"
                ],
                answer: 0
            }
        ]
    },

    "Strategy": {
        title: "Strategy",
        subtitle: "Learn how organizations plan for long-term success and competitive advantage.",
        lessons: [
            {
                title: "What is Strategy?",
                text: "Strategy is a long-term approach for achieving important organizational goals.",
                example: "A company may focus on affordable products to reach a large market.",
                question: "What is strategy?",
                options: [
                    "A plan for achieving important goals",
                    "A random daily task",
                    "Only a marketing poster",
                    "Only a financial report"
                ],
                answer: 0
            },
            {
                title: "Mission",
                text: "A mission describes an organization's purpose and what it aims to provide or accomplish.",
                example: "A company mission may focus on making education more accessible.",
                question: "What does a mission describe?",
                options: [
                    "An organization's purpose",
                    "Only employee salaries",
                    "Only product colors",
                    "Only competitors"
                ],
                answer: 0
            },
            {
                title: "Vision",
                text: "A vision describes the desired future state an organization wants to achieve.",
                example: "A startup may aim to become a leading platform for accessible online learning.",
                question: "What does a vision describe?",
                options: [
                    "A desired future state",
                    "Only current expenses",
                    "Only employee roles",
                    "Only technical bugs"
                ],
                answer: 0
            },
            {
                title: "Competitive Advantage",
                text: "Competitive advantage is a strength that helps a business perform better than competitors.",
                example: "A company may have an advantage through better customer service or unique technology.",
                question: "What is competitive advantage?",
                options: [
                    "A strength that helps a business compete",
                    "A business expense",
                    "A database record",
                    "A legal document only"
                ],
                answer: 0
            },
            {
                title: "Market Analysis",
                text: "Market analysis examines customers, competitors, trends, and other factors affecting a business.",
                example: "A startup studies competitors before entering a new market.",
                question: "What does market analysis examine?",
                options: [
                    "Customers, competitors, and market conditions",
                    "Only source code",
                    "Only office design",
                    "Only employee attendance"
                ],
                answer: 0
            },
            {
                title: "Strategic Goals",
                text: "Strategic goals are measurable objectives that support an organization's long-term direction.",
                example: "Increase active customers by 20% over the next year.",
                question: "What are strategic goals?",
                options: [
                    "Objectives supporting long-term direction",
                    "Random tasks",
                    "Only daily messages",
                    "Only technical errors"
                ],
                answer: 0
            },
            {
                title: "Execution",
                text: "A strategy creates value only when it is translated into actions, resources, and measurable initiatives.",
                example: "A growth strategy may require a new marketing campaign and product improvements.",
                question: "What turns strategy into results?",
                options: [
                    "Effective execution",
                    "Ignoring plans",
                    "Avoiding measurement",
                    "Removing goals"
                ],
                answer: 0
            },
            {
                title: "Strategic Review",
                text: "Organizations should regularly review strategy and adjust it when conditions, customer needs, or results change.",
                example: "A company changes its strategy after customer preferences shift.",
                question: "Why review strategy?",
                options: [
                    "To adapt to changing conditions and results",
                    "To avoid improvement",
                    "To remove goals",
                    "To stop planning"
                ],
                answer: 0
            }
        ]
    },

    "Business Project": {
        title: "Business Project",
        subtitle: "Apply business, leadership, communication, finance, and strategy concepts in one project.",
        lessons: [
            {
                title: "Choose a Business Idea",
                text: "Start by selecting a problem and a business idea that can provide meaningful value to customers.",
                example: "Create a platform that helps college students find verified learning resources.",
                question: "What should a business project begin with?",
                options: [
                    "A clear problem and business idea",
                    "Random features",
                    "Only a logo",
                    "Only advertisements"
                ],
                answer: 0
            },
            {
                title: "Identify Customers",
                text: "Define who will use or pay for the product and understand their needs.",
                example: "College students can be the primary customer segment.",
                question: "Why identify customers?",
                options: [
                    "To understand who the product serves",
                    "To avoid user research",
                    "To remove the problem",
                    "To increase confusion"
                ],
                answer: 0
            },
            {
                title: "Define Value Proposition",
                text: "Explain clearly how the product solves a customer problem better or more conveniently.",
                example: "Provide personalized learning resources in one simple platform.",
                question: "What should a value proposition explain?",
                options: [
                    "How the product creates customer value",
                    "Only the company name",
                    "Only the development language",
                    "Only employee roles"
                ],
                answer: 0
            },
            {
                title: "Create Business Model",
                text: "Define how the business will create value, reach customers, and generate revenue.",
                example: "Use a freemium model with optional premium features.",
                question: "What does a business model define?",
                options: [
                    "How value is created and revenue is generated",
                    "Only the logo",
                    "Only the source code",
                    "Only the office location"
                ],
                answer: 0
            },
            {
                title: "Plan Marketing",
                text: "Create a plan for reaching the target audience and communicating the product's value.",
                example: "Use campus communities and social media to reach students.",
                question: "Why plan marketing?",
                options: [
                    "To reach and engage potential customers",
                    "To remove customers",
                    "To stop communication",
                    "To avoid promotion"
                ],
                answer: 0
            },
            {
                title: "Plan Finances",
                text: "Estimate startup costs, operating expenses, revenue, and financial requirements.",
                example: "Estimate hosting, marketing, development, and support costs.",
                question: "What should a business financial plan include?",
                options: [
                    "Costs, revenue, and financial requirements",
                    "Only product colors",
                    "Only employee names",
                    "Only social media posts"
                ],
                answer: 0
            },
            {
                title: "Define Strategy",
                text: "Create a strategy describing how the business will compete, grow, and achieve its goals.",
                example: "Focus on affordable pricing and personalized features to attract students.",
                question: "What should business strategy provide?",
                options: [
                    "Direction for achieving business goals",
                    "Only technical code",
                    "Only advertisements",
                    "Only employee schedules"
                ],
                answer: 0
            },
            {
                title: "Present the Business",
                text: "A professional business presentation should clearly explain the problem, solution, customers, business model, market, finances, and future plans.",
                example: "Present the business idea to mentors or hackathon judges.",
                question: "What should a business presentation explain?",
                options: [
                    "Problem, solution, customers, model, and strategy",
                    "Only the logo",
                    "Only the source code",
                    "Only the company name"
                ],
                answer: 0
            }
        ]
    },
        "Digital Skills": {
        title: "Digital Skills",
        subtitle: "Build essential digital skills for study, work, and everyday technology.",
        lessons: [
            {
                title: "Digital Literacy",
                text: "Digital literacy means being able to use digital devices, tools, and information effectively and responsibly.",
                example: "Using a browser to research a topic and verify information is a digital skill.",
                question: "What is digital literacy?",
                options: [
                    "Using digital tools effectively and responsibly",
                    "Only playing games",
                    "Only writing code",
                    "Only using social media"
                ],
                answer: 0
            },
            {
                title: "Internet Basics",
                text: "The internet connects computers and devices so people can communicate and access information and services.",
                example: "Websites and online applications use the internet to provide services.",
                question: "What does the internet connect?",
                options: [
                    "Computers and digital devices",
                    "Only printers",
                    "Only televisions",
                    "Only cameras"
                ],
                answer: 0
            },
            {
                title: "Search Skills",
                text: "Good search skills help you find relevant and reliable information quickly.",
                example: "Use specific keywords instead of a very broad search query.",
                question: "Why use specific search keywords?",
                options: [
                    "To find more relevant information",
                    "To make searches slower",
                    "To avoid useful results",
                    "To remove information"
                ],
                answer: 0
            },
            {
                title: "Online Safety",
                text: "Online safety involves protecting accounts, personal information, devices, and digital identity.",
                example: "Use strong unique passwords and enable two-factor authentication when available.",
                question: "What is an important online safety practice?",
                options: [
                    "Protecting accounts and personal information",
                    "Sharing passwords publicly",
                    "Using the same password everywhere",
                    "Opening every unknown link"
                ],
                answer: 0
            },
            {
                title: "Digital Privacy",
                text: "Digital privacy means controlling how personal information is collected, shared, and used online.",
                example: "Review app permissions before allowing access to personal information.",
                question: "What does digital privacy protect?",
                options: [
                    "Personal information and digital identity",
                    "Only computer speed",
                    "Only screen brightness",
                    "Only internet speed"
                ],
                answer: 0
            },
            {
                title: "Productivity Tools",
                text: "Digital productivity tools help users organize information, communicate, collaborate, and complete tasks.",
                example: "Documents, spreadsheets, calendars, and project management tools improve productivity.",
                question: "What is the purpose of productivity tools?",
                options: [
                    "To help complete tasks efficiently",
                    "To reduce organization",
                    "To remove collaboration",
                    "To avoid planning"
                ],
                answer: 0
            },
            {
                title: "Cloud Services",
                text: "Cloud services provide computing resources, storage, and applications over the internet.",
                example: "Saving files to an online storage service allows access from multiple devices.",
                question: "What do cloud services provide?",
                options: [
                    "Online computing, storage, and services",
                    "Only offline games",
                    "Only physical notebooks",
                    "Only computer cables"
                ],
                answer: 0
            },
            {
                title: "Digital Skills for Careers",
                text: "Basic digital skills are useful across almost every modern career.",
                example: "Communication, spreadsheets, online research, and collaboration are valuable workplace skills.",
                question: "Why are digital skills important for careers?",
                options: [
                    "They support modern study and workplace tasks",
                    "They are useful only for programmers",
                    "They replace all communication",
                    "They are needed only for gaming"
                ],
                answer: 0
            }
        ]
    },

    "Problem Solving": {
        title: "Problem Solving",
        subtitle: "Learn a structured approach to understanding and solving problems.",
        lessons: [
            {
                title: "Identify the Problem",
                text: "The first step in problem solving is clearly understanding what needs to be solved.",
                example: "A student notices that assignments are frequently submitted late.",
                question: "What is the first step in problem solving?",
                options: [
                    "Clearly identify the problem",
                    "Immediately choose a solution",
                    "Ignore the issue",
                    "Blame someone"
                ],
                answer: 0
            },
            {
                title: "Break Down the Problem",
                text: "Large problems can be divided into smaller parts that are easier to understand and solve.",
                example: "Break a large software project into smaller features and tasks.",
                question: "Why break down a problem?",
                options: [
                    "To make it easier to understand and solve",
                    "To make it more confusing",
                    "To avoid analysis",
                    "To remove the goal"
                ],
                answer: 0
            },
            {
                title: "Find the Root Cause",
                text: "The root cause is the underlying reason a problem occurs.",
                example: "Repeated late submissions may be caused by poor time planning rather than lack of ability.",
                question: "What is a root cause?",
                options: [
                    "The underlying reason for a problem",
                    "The final result only",
                    "A random guess",
                    "A product feature"
                ],
                answer: 0
            },
            {
                title: "Generate Solutions",
                text: "Brainstorming multiple possible solutions helps avoid choosing the first idea without comparison.",
                example: "For late assignments, possible solutions include reminders, schedules, or task tracking.",
                question: "Why generate multiple solutions?",
                options: [
                    "To compare different possible approaches",
                    "To avoid thinking",
                    "To increase confusion",
                    "To stop analysis"
                ],
                answer: 0
            },
            {
                title: "Evaluate Solutions",
                text: "Solutions should be evaluated based on factors such as effectiveness, cost, time, and feasibility.",
                example: "Compare two solutions based on implementation effort and expected benefit.",
                question: "How should solutions be evaluated?",
                options: [
                    "Using relevant criteria and evidence",
                    "Only by guessing",
                    "Only by appearance",
                    "Without considering results"
                ],
                answer: 0
            },
            {
                title: "Choose a Solution",
                text: "After comparing alternatives, choose the solution that best fits the problem and available resources.",
                example: "Select the solution that provides the most benefit within the available time.",
                question: "How should a solution be chosen?",
                options: [
                    "Based on the problem, evidence, and constraints",
                    "Randomly",
                    "Only by appearance",
                    "Without analysis"
                ],
                answer: 0
            },
            {
                title: "Implement and Test",
                text: "A solution should be implemented and tested to determine whether it actually solves the problem.",
                example: "Test a new reminder system for several weeks and measure late submissions.",
                question: "Why test a solution?",
                options: [
                    "To check whether it actually works",
                    "To avoid results",
                    "To remove feedback",
                    "To increase errors"
                ],
                answer: 0
            },
            {
                title: "Learn and Improve",
                text: "Problem solving is iterative. Results and feedback can be used to improve the solution.",
                example: "If reminders are not enough, add better scheduling features.",
                question: "What should happen after testing?",
                options: [
                    "Use results to improve the solution",
                    "Ignore the results",
                    "Stop learning",
                    "Delete all feedback"
                ],
                answer: 0
            }
        ]
    },

    "AI Fundamentals": {
        title: "AI Fundamentals",
        subtitle: "Understand the basic concepts behind artificial intelligence.",
        lessons: [
            {
                title: "What is AI?",
                text: "Artificial intelligence is the field of creating systems that can perform tasks that normally require human-like intelligence.",
                example: "Image recognition systems can identify objects in photographs.",
                question: "What does AI aim to create?",
                options: [
                    "Systems capable of performing intelligent tasks",
                    "Only faster computers",
                    "Only websites",
                    "Only databases"
                ],
                answer: 0
            },
            {
                title: "Machine Learning",
                text: "Machine learning allows systems to learn patterns from data and use them to make predictions or decisions.",
                example: "A model can learn from past transactions to identify unusual activity.",
                question: "What does machine learning use to learn patterns?",
                options: [
                    "Data",
                    "Only hardware",
                    "Only passwords",
                    "Only websites"
                ],
                answer: 0
            },
            {
                title: "Training Data",
                text: "Training data is the data used to help a machine learning model learn patterns.",
                example: "Images labeled as cats and dogs can be used to train an image classifier.",
                question: "What is training data?",
                options: [
                    "Data used to train a model",
                    "Only test results",
                    "Only source code",
                    "Only user passwords"
                ],
                answer: 0
            },
            {
                title: "AI Models",
                text: "An AI model is a computational system that learns patterns or represents knowledge to perform a task.",
                example: "A classification model can predict whether an email is spam.",
                question: "What can an AI model do?",
                options: [
                    "Learn or represent patterns for a task",
                    "Only store images",
                    "Only display websites",
                    "Only manage files"
                ],
                answer: 0
            },
            {
                title: "Computer Vision",
                text: "Computer vision enables computers to analyze and understand information from images and videos.",
                example: "A vision system can detect objects in a road image.",
                question: "What does computer vision work with?",
                options: [
                    "Images and videos",
                    "Only audio",
                    "Only spreadsheets",
                    "Only text documents"
                ],
                answer: 0
            },
            {
                title: "Natural Language Processing",
                text: "Natural language processing enables computers to process and understand human language.",
                example: "Chatbots use NLP to understand user messages.",
                question: "What does NLP focus on?",
                options: [
                    "Human language",
                    "Only images",
                    "Only hardware",
                    "Only databases"
                ],
                answer: 0
            },
            {
                title: "Generative AI",
                text: "Generative AI can create new content such as text, images, audio, or code based on learned patterns.",
                example: "An AI system can generate a draft of a programming function from a prompt.",
                question: "What can generative AI create?",
                options: [
                    "New content such as text, images, or code",
                    "Only database tables",
                    "Only computer hardware",
                    "Only internet connections"
                ],
                answer: 0
            },
            {
                title: "Responsible AI",
                text: "Responsible AI focuses on building AI systems that are safe, fair, transparent, privacy-aware, and reliable.",
                example: "An AI application should protect user data and evaluate potential bias.",
                question: "What is an important part of responsible AI?",
                options: [
                    "Safety, fairness, privacy, and reliability",
                    "Ignoring user privacy",
                    "Using biased data without testing",
                    "Avoiding evaluation"
                ],
                answer: 0
            }
        ]
    },

    "Career Exploration": {
        title: "Career Exploration",
        subtitle: "Explore different technology careers and understand which paths may suit you.",
        lessons: [
            {
                title: "Know Your Interests",
                text: "Understanding your interests can help you identify career areas that you may enjoy exploring.",
                example: "Someone who enjoys coding may explore software or AI careers.",
                question: "Why understand your interests?",
                options: [
                    "To explore suitable career areas",
                    "To choose randomly",
                    "To avoid learning",
                    "To follow every career"
                ],
                answer: 0
            },
            {
                title: "Explore Career Roles",
                text: "Different technology roles require different skills, responsibilities, and interests.",
                example: "A data analyst focuses on data while a UI/UX designer focuses on user experience.",
                question: "Why explore different roles?",
                options: [
                    "To understand different career paths",
                    "To avoid career planning",
                    "To learn only one skill",
                    "To remove options"
                ],
                answer: 0
            },
            {
                title: "Skill Requirements",
                text: "Each career has a combination of technical, analytical, communication, and practical skills.",
                example: "A software developer needs programming and problem-solving skills.",
                question: "What do career roles have?",
                options: [
                    "Different skill requirements",
                    "Exactly the same skills",
                    "No required skills",
                    "Only communication"
                ],
                answer: 0
            },
            {
                title: "Research Careers",
                text: "Career research helps you understand job responsibilities, required skills, growth opportunities, and learning paths.",
                example: "Read job descriptions to identify commonly requested technologies.",
                question: "Why research careers?",
                options: [
                    "To understand roles and requirements",
                    "To avoid learning",
                    "To choose randomly",
                    "To ignore job skills"
                ],
                answer: 0
            },
            {
                title: "Try Small Projects",
                text: "Small projects provide practical experience and help you discover which areas you enjoy.",
                example: "Build a simple website, data dashboard, or machine learning model.",
                question: "Why build small projects?",
                options: [
                    "To gain experience and explore interests",
                    "To avoid practice",
                    "To replace all learning",
                    "To avoid technology"
                ],
                answer: 0
            },
            {
                title: "Build Skills",
                text: "Career growth requires continuous learning and practice in relevant skills.",
                example: "A beginner can learn Python and gradually build projects.",
                question: "How can career skills improve?",
                options: [
                    "Through learning and consistent practice",
                    "By avoiding projects",
                    "By stopping education",
                    "By only watching videos"
                ],
                answer: 0
            },
            {
                title: "Create a Portfolio",
                text: "A portfolio demonstrates practical work, skills, and achievements to potential employers or collaborators.",
                example: "A GitHub profile can contain projects and code samples.",
                question: "What does a portfolio show?",
                options: [
                    "Practical work and skills",
                    "Only personal opinions",
                    "Only exam marks",
                    "Only hobbies"
                ],
                answer: 0
            },
            {
                title: "Choose a Direction",
                text: "Career choices can evolve as you gain experience and learn more about your strengths and interests.",
                example: "After trying AI and web development, a student may decide which path fits better.",
                question: "How should career direction be chosen?",
                options: [
                    "Using interests, skills, experience, and research",
                    "Only by guessing",
                    "Only by salary",
                    "Without trying anything"
                ],
                answer: 0
            }
        ]
    },

    "Mini Projects": {
        title: "Mini Projects",
        subtitle: "Learn how small projects can turn knowledge into practical skills.",
        lessons: [
            {
                title: "Why Build Projects?",
                text: "Projects help convert theoretical knowledge into practical problem-solving experience.",
                example: "Build a calculator after learning basic programming.",
                question: "Why build projects?",
                options: [
                    "To apply knowledge practically",
                    "To avoid practice",
                    "To replace all learning",
                    "To avoid problem solving"
                ],
                answer: 0
            },
            {
                title: "Choose a Simple Idea",
                text: "Beginners should choose projects that are small enough to complete while still teaching useful skills.",
                example: "A to-do list is a good beginner programming project.",
                question: "What makes a good beginner project?",
                options: [
                    "Small, practical, and achievable",
                    "Extremely complex",
                    "Impossible to finish",
                    "Completely unrelated to learning"
                ],
                answer: 0
            },
            {
                title: "Plan the Project",
                text: "Planning defines the goal, features, tools, and steps required to complete a project.",
                example: "List the features needed before starting development.",
                question: "Why plan a project?",
                options: [
                    "To organize development",
                    "To create confusion",
                    "To avoid goals",
                    "To remove features randomly"
                ],
                answer: 0
            },
            {
                title: "Build Step by Step",
                text: "Developing a project in small steps makes it easier to test and fix problems.",
                example: "Build the interface first and then add functionality.",
                question: "Why build step by step?",
                options: [
                    "To make development easier to manage",
                    "To increase confusion",
                    "To avoid testing",
                    "To remove structure"
                ],
                answer: 0
            },
            {
                title: "Test the Project",
                text: "Testing checks whether the project works correctly and helps identify bugs.",
                example: "Test a calculator with different numbers and edge cases.",
                question: "Why test a project?",
                options: [
                    "To find and fix problems",
                    "To avoid errors",
                    "To remove functionality",
                    "To stop learning"
                ],
                answer: 0
            },
            {
                title: "Document Your Work",
                text: "Documentation explains what the project does, how it works, and how others can use it.",
                example: "Create a README file describing a GitHub project.",
                question: "Why document projects?",
                options: [
                    "To explain and showcase the project",
                    "To hide the project",
                    "To remove information",
                    "To avoid collaboration"
                ],
                answer: 0
            },
            {
                title: "Showcase the Project",
                text: "Projects can be showcased through portfolios, GitHub repositories, demonstrations, or presentations.",
                example: "Add screenshots and a project description to your portfolio.",
                question: "Where can projects be showcased?",
                options: [
                    "Portfolios, repositories, and presentations",
                    "Only private notes",
                    "Only deleted files",
                    "Nowhere"
                ],
                answer: 0
            },
            {
                title: "Learn from Projects",
                text: "Every project provides feedback about your technical skills, mistakes, and areas for improvement.",
                example: "After completing a project, identify what could be improved in the next one.",
                question: "What can projects teach you?",
                options: [
                    "Practical skills and areas for improvement",
                    "Nothing beyond theory",
                    "Only design",
                    "Only memorization"
                ],
                answer: 0
            }
        ]
    },

    "Choose Your Career": {
        title: "Choose Your Career",
        subtitle: "Use your interests, skills, and experience to choose a career direction.",
        lessons: [
            {
                title: "Know Yourself",
                text: "Understanding your interests, strengths, preferred work style, and goals helps with career decisions.",
                example: "Someone who enjoys solving technical problems may explore software or AI roles.",
                question: "What helps with career decisions?",
                options: [
                    "Understanding your interests and strengths",
                    "Ignoring your interests",
                    "Choosing randomly",
                    "Following every trend"
                ],
                answer: 0
            },
            {
                title: "Compare Career Paths",
                text: "Compare careers based on skills, responsibilities, learning requirements, opportunities, and personal interests.",
                example: "Compare software development, data analysis, and UI/UX design before choosing a path.",
                question: "How can careers be compared?",
                options: [
                    "By skills, responsibilities, and interests",
                    "Only by job title",
                    "Only by appearance",
                    "Without research"
                ],
                answer: 0
            },
            {
                title: "Check Skill Gaps",
                text: "A skill gap is the difference between your current abilities and the skills required for a target career.",
                example: "A student interested in AI may need to improve Python and mathematics.",
                question: "What is a skill gap?",
                options: [
                    "Difference between current and required skills",
                    "A programming language",
                    "A job title",
                    "A company name"
                ],
                answer: 0
            },
            {
                title: "Create a Learning Plan",
                text: "A learning plan organizes the skills, courses, projects, and practice needed to move toward a career.",
                example: "Learn Python, build projects, and study machine learning step by step.",
                question: "What does a learning plan provide?",
                options: [
                    "A structured path for skill development",
                    "Only a job title",
                    "Only exam dates",
                    "Only salary information"
                ],
                answer: 0
            },
            {
                title: "Gain Practical Experience",
                text: "Projects, internships, competitions, and practical tasks help develop real-world skills.",
                example: "Participating in a hackathon can provide practical project experience.",
                question: "Why gain practical experience?",
                options: [
                    "To apply skills in real situations",
                    "To avoid learning",
                    "To replace all theory",
                    "To avoid teamwork"
                ],
                answer: 0
            },
            {
                title: "Build a Portfolio",
                text: "A portfolio provides evidence of your skills through projects and achievements.",
                example: "Show your best projects on GitHub or a personal portfolio website.",
                question: "Why build a portfolio?",
                options: [
                    "To demonstrate practical skills",
                    "To hide your work",
                    "To avoid opportunities",
                    "To replace all learning"
                ],
                answer: 0
            },
            {
                title: "Review Your Progress",
                text: "Regularly reviewing your skills and goals helps you adjust your career plan as you grow.",
                example: "After completing several projects, reassess which technology area interests you most.",
                question: "Why review career progress?",
                options: [
                    "To improve and adjust your career plan",
                    "To stop learning",
                    "To avoid feedback",
                    "To remove goals"
                ],
                answer: 0
            },
            {
                title: "Make Your Choice",
                text: "A career choice does not have to be permanent. Start with a direction, gain experience, and adjust when needed.",
                example: "You can begin with software development and later specialize in AI or cloud computing.",
                question: "How should you approach career choice?",
                options: [
                    "Choose a direction and adjust as you learn",
                    "Wait forever before trying anything",
                    "Choose randomly",
                    "Never change your plan"
                ],
                answer: 0
            }
        ]
    },
        "Python": {
        title: "Python",
        subtitle: "Build a strong Python foundation for data science.",
        lessons: [
            {
                title: "Python for Data Science",
                text: "Python is widely used in data science because it has powerful libraries for data analysis, visualization, and machine learning.",
                example: "Data scientists commonly use Python with Pandas, NumPy, and Matplotlib.",
                question: "Why is Python popular in data science?",
                options: [
                    "It has powerful data science libraries",
                    "It can only create websites",
                    "It cannot work with data",
                    "It is only used for games"
                ],
                answer: 0
            },
            {
                title: "Variables and Data Types",
                text: "Variables store values, while data types define what kind of values they contain.",
                example: "name = 'Isha' stores text, while age = 19 stores an integer.",
                question: "What does a variable store?",
                options: [
                    "A value or piece of data",
                    "Only images",
                    "Only websites",
                    "Only files"
                ],
                answer: 0
            },
            {
                title: "Lists and Dictionaries",
                text: "Lists store ordered collections of values, while dictionaries store data using key-value pairs.",
                example: "A list can store marks, while a dictionary can store a student's name and score.",
                question: "What does a dictionary use to organize data?",
                options: [
                    "Key-value pairs",
                    "Only numbers",
                    "Only loops",
                    "Only functions"
                ],
                answer: 0
            },
            {
                title: "Functions",
                text: "Functions are reusable blocks of code that perform specific tasks.",
                example: "A function can calculate the average of a list of numbers.",
                question: "Why are functions useful?",
                options: [
                    "They make code reusable and organized",
                    "They remove all data",
                    "They only display images",
                    "They prevent calculations"
                ],
                answer: 0
            },
            {
                title: "Loops",
                text: "Loops repeat a block of code for multiple values or until a condition changes.",
                example: "A for loop can process every value in a dataset.",
                question: "What is the purpose of a loop?",
                options: [
                    "To repeat operations efficiently",
                    "To delete code",
                    "To create hardware",
                    "To stop all programs"
                ],
                answer: 0
            },
            {
                title: "Conditions",
                text: "Conditional statements allow a program to make decisions based on conditions.",
                example: "if score >= 50 can be used to check whether a student passed.",
                question: "What do conditions help programs do?",
                options: [
                    "Make decisions",
                    "Store only images",
                    "Connect hardware only",
                    "Remove variables"
                ],
                answer: 0
            },
            {
                title: "Working with Files",
                text: "Python can read and write files, which is useful when working with datasets.",
                example: "A CSV file containing student marks can be loaded and analyzed.",
                question: "Why is file handling useful in data science?",
                options: [
                    "It allows data to be read and saved",
                    "It removes all datasets",
                    "It only creates websites",
                    "It prevents data analysis"
                ],
                answer: 0
            },
            {
                title: "Python Project",
                text: "Combining Python concepts helps you build small data-oriented programs.",
                example: "Create a program that reads marks and calculates the average score.",
                question: "What is the benefit of a Python project?",
                options: [
                    "It applies Python concepts practically",
                    "It avoids programming practice",
                    "It replaces all learning",
                    "It only tests typing speed"
                ],
                answer: 0
            }
        ]
    },

    "Probability": {
        title: "Probability",
        subtitle: "Learn probability concepts used in statistics and machine learning.",
        lessons: [
            {
                title: "What is Probability?",
                text: "Probability measures how likely an event is to occur.",
                example: "The probability of getting heads on a fair coin toss is 1/2.",
                question: "What does probability measure?",
                options: [
                    "How likely an event is",
                    "The size of a dataset",
                    "Computer speed",
                    "Storage capacity"
                ],
                answer: 0
            },
            {
                title: "Probability Scale",
                text: "Probability ranges from 0 to 1, where 0 means impossible and 1 means certain.",
                example: "An event with probability 0.8 is more likely than one with probability 0.2.",
                question: "What is the valid probability range?",
                options: [
                    "0 to 1",
                    "1 to 1000",
                    "-10 to 10",
                    "10 to 20"
                ],
                answer: 0
            },
            {
                title: "Events",
                text: "An event is a specific outcome or collection of outcomes in a probability experiment.",
                example: "Rolling an even number on a die is an event.",
                question: "What is an event?",
                options: [
                    "A possible outcome or group of outcomes",
                    "A programming language",
                    "A database",
                    "A hardware component"
                ],
                answer: 0
            },
            {
                title: "Independent Events",
                text: "Two events are independent when the occurrence of one does not affect the probability of the other.",
                example: "Two separate coin tosses are independent events.",
                question: "What are independent events?",
                options: [
                    "Events where one does not affect the other",
                    "Events that always happen together",
                    "Events with no outcomes",
                    "Events that cannot occur"
                ],
                answer: 0
            },
            {
                title: "Conditional Probability",
                text: "Conditional probability measures the probability of an event given that another event has already occurred.",
                example: "Finding the probability of passing given that a student studied is conditional probability.",
                question: "What does conditional probability consider?",
                options: [
                    "An event given another event",
                    "Only computer speed",
                    "Only data size",
                    "Only programming syntax"
                ],
                answer: 0
            },
            {
                title: "Random Variables",
                text: "A random variable assigns numerical values to outcomes of a random experiment.",
                example: "The number shown when rolling a die can be represented by a random variable.",
                question: "What does a random variable represent?",
                options: [
                    "Numerical values associated with random outcomes",
                    "Only text",
                    "Only images",
                    "Only source code"
                ],
                answer: 0
            },
            {
                title: "Probability Distributions",
                text: "A probability distribution describes how probabilities are assigned to possible values of a random variable.",
                example: "A distribution can show the probabilities of different outcomes from a random experiment.",
                question: "What does a probability distribution describe?",
                options: [
                    "Probabilities of possible values",
                    "Only computer memory",
                    "Only programming errors",
                    "Only network speed"
                ],
                answer: 0
            },
            {
                title: "Probability in AI",
                text: "Probability helps AI systems handle uncertainty and make predictions.",
                example: "A classifier may predict that an image has a 90% probability of belonging to a certain class.",
                question: "How is probability useful in AI?",
                options: [
                    "It helps handle uncertainty and predictions",
                    "It only improves screen resolution",
                    "It replaces all data",
                    "It prevents models from learning"
                ],
                answer: 0
            }
        ]
    },

    "Pandas & NumPy": {
        title: "Pandas & NumPy",
        subtitle: "Learn two important Python libraries used for data science.",
        lessons: [
            {
                title: "Introduction to NumPy",
                text: "NumPy is a Python library designed for numerical computing and efficient array operations.",
                example: "NumPy arrays can store and process numerical data efficiently.",
                question: "What is NumPy mainly used for?",
                options: [
                    "Numerical computing",
                    "Only web design",
                    "Only email",
                    "Only video editing"
                ],
                answer: 0
            },
            {
                title: "NumPy Arrays",
                text: "NumPy arrays store collections of values and support efficient mathematical operations.",
                example: "An array can contain the marks of several students.",
                question: "What can NumPy arrays store?",
                options: [
                    "Collections of values",
                    "Only websites",
                    "Only passwords",
                    "Only videos"
                ],
                answer: 0
            },
            {
                title: "Array Operations",
                text: "NumPy allows mathematical operations to be performed efficiently on arrays.",
                example: "You can add or multiply values in an array without manually processing every value.",
                question: "Why are NumPy array operations useful?",
                options: [
                    "They make numerical calculations efficient",
                    "They remove numerical data",
                    "They only create websites",
                    "They prevent calculations"
                ],
                answer: 0
            },
            {
                title: "Introduction to Pandas",
                text: "Pandas is a Python library used for data manipulation and analysis.",
                example: "Pandas can load a CSV file and organize it into a DataFrame.",
                question: "What is Pandas used for?",
                options: [
                    "Data manipulation and analysis",
                    "Only gaming",
                    "Only hardware design",
                    "Only networking"
                ],
                answer: 0
            },
            {
                title: "DataFrames",
                text: "A DataFrame is a two-dimensional table-like data structure provided by Pandas.",
                example: "A DataFrame can contain student names, marks, and attendance in columns.",
                question: "What is a Pandas DataFrame?",
                options: [
                    "A table-like data structure",
                    "A programming language",
                    "A web browser",
                    "A hardware device"
                ],
                answer: 0
            },
            {
                title: "Loading Data",
                text: "Pandas can load data from formats such as CSV files into DataFrames.",
                example: "pd.read_csv() can be used to load a CSV dataset.",
                question: "What can Pandas load?",
                options: [
                    "Datasets such as CSV files",
                    "Only images",
                    "Only applications",
                    "Only hardware"
                ],
                answer: 0
            },
            {
                title: "Cleaning Data",
                text: "Data cleaning involves handling missing, incorrect, duplicated, or inconsistent data.",
                example: "Missing values in a dataset may need to be filled or removed.",
                question: "Why clean data?",
                options: [
                    "To improve data quality for analysis",
                    "To make data less useful",
                    "To remove all information",
                    "To avoid analysis"
                ],
                answer: 0
            },
            {
                title: "Pandas Project",
                text: "Combining Pandas and NumPy allows you to prepare and analyze datasets efficiently.",
                example: "Load a student dataset, clean missing values, calculate statistics, and visualize results.",
                question: "What is the benefit of using Pandas and NumPy together?",
                options: [
                    "Efficient data processing and analysis",
                    "Only website creation",
                    "Only image editing",
                    "Only hardware control"
                ],
                answer: 0
            }
        ]
    },

    "Data Science Project": {
        title: "Data Science Project",
        subtitle: "Apply data science concepts to a complete practical project.",
        lessons: [
            {
                title: "Choose a Problem",
                text: "A data science project begins with a clear problem or question that can be explored using data.",
                example: "Predict student performance using attendance and study-related data.",
                question: "What should come first in a data science project?",
                options: [
                    "Define the problem",
                    "Build the final model immediately",
                    "Delete the data",
                    "Create random charts"
                ],
                answer: 0
            },
            {
                title: "Collect Data",
                text: "Relevant data must be collected from reliable sources before analysis begins.",
                example: "Collect historical student performance records for a prediction project.",
                question: "Why collect relevant data?",
                options: [
                    "To provide information for analysis and modeling",
                    "To increase confusion",
                    "To avoid analysis",
                    "To remove evidence"
                ],
                answer: 0
            },
            {
                title: "Clean the Data",
                text: "Raw data often contains missing values, duplicates, errors, or inconsistent formats that need to be handled.",
                example: "Remove duplicate records and handle missing values before modeling.",
                question: "Why clean data?",
                options: [
                    "To improve data quality",
                    "To make data unusable",
                    "To remove all records",
                    "To avoid preparation"
                ],
                answer: 0
            },
            {
                title: "Explore the Data",
                text: "Exploratory data analysis helps discover patterns, relationships, distributions, and unusual values.",
                example: "Create charts to understand how attendance relates to marks.",
                question: "What is the purpose of exploratory analysis?",
                options: [
                    "To understand patterns and relationships in data",
                    "To delete the dataset",
                    "To skip analysis",
                    "To hide results"
                ],
                answer: 0
            },
            {
                title: "Prepare Features",
                text: "Features are input variables used by a machine learning model to make predictions.",
                example: "Attendance and study hours can be features for predicting student performance.",
                question: "What are features?",
                options: [
                    "Input variables used by a model",
                    "Only final predictions",
                    "Only charts",
                    "Only error messages"
                ],
                answer: 0
            },
            {
                title: "Build a Model",
                text: "A machine learning model can be trained using prepared data to solve a prediction or classification problem.",
                example: "Train a regression model to predict a student's score.",
                question: "What is the purpose of a model?",
                options: [
                    "To learn patterns and make predictions",
                    "To delete data",
                    "To replace the dataset",
                    "To create random results"
                ],
                answer: 0
            },
            {
                title: "Evaluate Results",
                text: "Model evaluation measures how well the model performs on appropriate data.",
                example: "Use accuracy for a classification task or error metrics for regression.",
                question: "Why evaluate a model?",
                options: [
                    "To measure its performance",
                    "To avoid testing",
                    "To remove predictions",
                    "To hide errors"
                ],
                answer: 0
            },
            {
                title: "Present the Project",
                text: "A good data science project should clearly communicate the problem, data, methods, results, and conclusions.",
                example: "Create a dashboard or presentation showing important findings and model results.",
                question: "What should a project presentation communicate?",
                options: [
                    "Problem, methods, results, and conclusions",
                    "Only the project title",
                    "Only source code",
                    "Only raw data"
                ],
                answer: 0
            }
        ]
    },
        "Git & GitHub": {
        title: "Git & GitHub",
        subtitle: "Learn version control and collaboration using Git and GitHub.",
        lessons: [
            {
                title: "What is Git?",
                text: "Git is a version control system used to track changes in files and source code.",
                example: "Developers use Git to save different versions of a software project.",
                question: "What is Git used for?",
                options: [
                    "Tracking changes in source code",
                    "Only creating websites",
                    "Only storing images",
                    "Only designing hardware"
                ],
                answer: 0
            },
            {
                title: "Repositories",
                text: "A Git repository stores a project's files and the history of changes made to them.",
                example: "A software project can have a Git repository containing its source code.",
                question: "What does a Git repository contain?",
                options: [
                    "Project files and change history",
                    "Only passwords",
                    "Only images",
                    "Only videos"
                ],
                answer: 0
            },
            {
                title: "Git Commit",
                text: "A commit records a set of changes in a Git repository.",
                example: "After fixing a bug, a developer can commit the changes with a meaningful message.",
                question: "What does a Git commit do?",
                options: [
                    "Records changes",
                    "Deletes the repository",
                    "Creates hardware",
                    "Removes source code"
                ],
                answer: 0
            },
            {
                title: "Git Branches",
                text: "Branches allow developers to work on different features or changes without directly modifying the main branch.",
                example: "A developer can create a feature branch to develop a new login system.",
                question: "Why are Git branches useful?",
                options: [
                    "They allow separate development work",
                    "They delete all code",
                    "They prevent collaboration",
                    "They remove project history"
                ],
                answer: 0
            },
            {
                title: "What is GitHub?",
                text: "GitHub is a platform for hosting Git repositories and collaborating on software projects.",
                example: "Developers can upload projects to GitHub and collaborate with teammates.",
                question: "What is GitHub mainly used for?",
                options: [
                    "Hosting and collaborating on Git repositories",
                    "Only editing photos",
                    "Only creating hardware",
                    "Only browsing videos"
                ],
                answer: 0
            },
            {
                title: "Push and Pull",
                text: "Git push uploads local commits to a remote repository, while Git pull downloads updates from it.",
                example: "A developer pushes local changes to GitHub and pulls teammates' latest changes.",
                question: "What does git push do?",
                options: [
                    "Uploads local commits to a remote repository",
                    "Deletes local files",
                    "Downloads images",
                    "Creates a new computer"
                ],
                answer: 0
            },
            {
                title: "Pull Requests",
                text: "A pull request allows developers to propose changes and have them reviewed before merging.",
                example: "A developer opens a pull request for a new feature so teammates can review it.",
                question: "What is a pull request used for?",
                options: [
                    "Reviewing and merging proposed changes",
                    "Deleting a repository",
                    "Installing an operating system",
                    "Creating hardware"
                ],
                answer: 0
            },
            {
                title: "Git Workflow",
                text: "A common Git workflow includes creating a branch, making changes, committing, pushing, and creating a pull request.",
                example: "A team uses this workflow to develop features safely and collaboratively.",
                question: "Why use a Git workflow?",
                options: [
                    "To organize software development and collaboration",
                    "To avoid version control",
                    "To delete project history",
                    "To prevent teamwork"
                ],
                answer: 0
            }
        ]
    },

    "Docker": {
        title: "Docker",
        subtitle: "Understand containers and how Docker simplifies application deployment.",
        lessons: [
            {
                title: "What is Docker?",
                text: "Docker is a platform used to build, package, and run applications in containers.",
                example: "A web application can be packaged with its dependencies inside a Docker container.",
                question: "What is Docker used for?",
                options: [
                    "Building and running applications in containers",
                    "Only designing graphics",
                    "Only writing documents",
                    "Only managing spreadsheets"
                ],
                answer: 0
            },
            {
                title: "Containers",
                text: "A container packages an application and its dependencies so it can run consistently across environments.",
                example: "The same application container can run on a developer's laptop and a server.",
                question: "What does a container package?",
                options: [
                    "An application and its dependencies",
                    "Only source code",
                    "Only images",
                    "Only hardware"
                ],
                answer: 0
            },
            {
                title: "Docker Images",
                text: "A Docker image is a packaged template used to create containers.",
                example: "A Python application can use a Python-based Docker image.",
                question: "What is a Docker image?",
                options: [
                    "A template used to create containers",
                    "A physical computer",
                    "A database table",
                    "A network cable"
                ],
                answer: 0
            },
            {
                title: "Dockerfile",
                text: "A Dockerfile contains instructions for building a Docker image.",
                example: "A Dockerfile can specify the base image, dependencies, files, and startup command.",
                question: "What does a Dockerfile contain?",
                options: [
                    "Instructions for building an image",
                    "Only user passwords",
                    "Only videos",
                    "Only network addresses"
                ],
                answer: 0
            },
            {
                title: "Docker Registry",
                text: "A Docker registry stores and distributes Docker images.",
                example: "Docker Hub is commonly used to share container images.",
                question: "What does a Docker registry store?",
                options: [
                    "Container images",
                    "Only source documents",
                    "Only passwords",
                    "Only hardware"
                ],
                answer: 0
            },
            {
                title: "Docker Networking",
                text: "Docker networking allows containers to communicate with each other and external systems.",
                example: "A web container can communicate with a database container through a Docker network.",
                question: "Why is Docker networking useful?",
                options: [
                    "It allows containers to communicate",
                    "It deletes containers",
                    "It prevents applications from running",
                    "It removes all ports"
                ],
                answer: 0
            },
            {
                title: "Docker Volumes",
                text: "Docker volumes provide persistent storage for data used by containers.",
                example: "A database container can use a volume so its data remains available after the container restarts.",
                question: "Why are Docker volumes used?",
                options: [
                    "To persist container data",
                    "To delete data",
                    "To remove applications",
                    "To disable storage"
                ],
                answer: 0
            },
            {
                title: "Docker in DevOps",
                text: "Docker helps DevOps teams create consistent application environments and simplify deployment.",
                example: "A CI/CD pipeline can build and deploy a Docker image automatically.",
                question: "How does Docker help DevOps?",
                options: [
                    "It makes application packaging and deployment consistent",
                    "It removes automation",
                    "It prevents deployment",
                    "It replaces all programming"
                ],
                answer: 0
            }
        ]
    },

    "CI/CD": {
        title: "CI/CD",
        subtitle: "Learn how automation improves software building, testing, and deployment.",
        lessons: [
            {
                title: "What is CI/CD?",
                text: "CI/CD represents practices for continuously integrating, testing, and delivering or deploying software changes.",
                example: "A pipeline can automatically test code whenever a developer pushes changes.",
                question: "What is a major purpose of CI/CD?",
                options: [
                    "Automating software build, test, and delivery processes",
                    "Manually repeating every task",
                    "Deleting source code",
                    "Avoiding testing"
                ],
                answer: 0
            },
            {
                title: "Continuous Integration",
                text: "Continuous Integration involves frequently integrating code changes into a shared repository and automatically testing them.",
                example: "Every pull request can trigger automated tests.",
                question: "What happens in Continuous Integration?",
                options: [
                    "Code changes are integrated and tested frequently",
                    "Code is never tested",
                    "Servers are permanently shut down",
                    "Repositories are deleted"
                ],
                answer: 0
            },
            {
                title: "Continuous Delivery",
                text: "Continuous Delivery keeps software in a state where it can be released reliably when needed.",
                example: "After automated tests pass, a release candidate can be prepared for deployment.",
                question: "What is Continuous Delivery?",
                options: [
                    "Keeping software ready for reliable release",
                    "Deleting every release",
                    "Avoiding automation",
                    "Stopping development"
                ],
                answer: 0
            },
            {
                title: "Continuous Deployment",
                text: "Continuous Deployment automatically releases validated changes to production.",
                example: "A successful pipeline can automatically deploy a new application version.",
                question: "What happens in Continuous Deployment?",
                options: [
                    "Validated changes are automatically deployed",
                    "All changes are deleted",
                    "Testing is disabled",
                    "Development is stopped"
                ],
                answer: 0
            },
            {
                title: "Build Automation",
                text: "Build automation automatically compiles, packages, or prepares software for testing and deployment.",
                example: "A pipeline can automatically build a project after a code change.",
                question: "Why automate builds?",
                options: [
                    "To make software preparation faster and consistent",
                    "To increase manual work",
                    "To delete applications",
                    "To avoid source control"
                ],
                answer: 0
            },
            {
                title: "Automated Testing",
                text: "Automated tests check software behavior without requiring every test to be performed manually.",
                example: "Unit tests can run automatically after every code change.",
                question: "Why use automated testing?",
                options: [
                    "To detect problems quickly and consistently",
                    "To avoid checking code",
                    "To remove all tests",
                    "To slow development"
                ],
                answer: 0
            },
            {
                title: "Deployment Pipeline",
                text: "A deployment pipeline automates steps such as building, testing, and deploying software.",
                example: "A pipeline may build an application, run tests, and deploy it to a server.",
                question: "What does a deployment pipeline automate?",
                options: [
                    "Software delivery steps",
                    "Only keyboard input",
                    "Only database deletion",
                    "Only graphic design"
                ],
                answer: 0
            },
            {
                title: "CI/CD Benefits",
                text: "CI/CD can improve development speed, reliability, consistency, and feedback.",
                example: "Developers receive quick feedback when automated tests detect a problem.",
                question: "What is a benefit of CI/CD?",
                options: [
                    "Faster and more reliable software delivery",
                    "More manual repetition",
                    "Less testing",
                    "No feedback"
                ],
                answer: 0
            }
        ]
    },

    "Cloud Computing": {
        title: "Cloud Computing",
        subtitle: "Understand the basics of cloud infrastructure and services.",
        lessons: [
            {
                title: "What is Cloud Computing?",
                text: "Cloud computing provides computing resources such as servers, storage, and databases over the internet.",
                example: "An application can use cloud servers instead of maintaining a physical server locally.",
                question: "What does cloud computing provide?",
                options: [
                    "Computing resources over the internet",
                    "Only physical notebooks",
                    "Only offline software",
                    "Only network cables"
                ],
                answer: 0
            },
            {
                title: "Cloud Servers",
                text: "Cloud servers are virtual or physical computing resources provided through cloud platforms.",
                example: "A web application can run on a virtual cloud server.",
                question: "What can run on a cloud server?",
                options: [
                    "Applications and services",
                    "Only images",
                    "Only documents",
                    "Only keyboards"
                ],
                answer: 0
            },
            {
                title: "Cloud Storage",
                text: "Cloud storage allows data and files to be stored on remote infrastructure and accessed over a network.",
                example: "Applications can store uploaded files in cloud storage.",
                question: "What is cloud storage used for?",
                options: [
                    "Storing data remotely",
                    "Only running games",
                    "Only designing websites",
                    "Only creating hardware"
                ],
                answer: 0
            },
            {
                title: "Scalability",
                text: "Cloud scalability allows computing resources to increase or decrease according to workload.",
                example: "A website can use additional resources during a sudden increase in visitors.",
                question: "What does scalability mean?",
                options: [
                    "Adjusting resources according to demand",
                    "Deleting all resources",
                    "Keeping resources fixed forever",
                    "Avoiding cloud services"
                ],
                answer: 0
            },
            {
                title: "Virtualization",
                text: "Virtualization allows multiple virtual computing environments to run on shared physical hardware.",
                example: "A physical server can host several virtual machines.",
                question: "What does virtualization enable?",
                options: [
                    "Multiple virtual environments on shared hardware",
                    "Only one application forever",
                    "Removal of all servers",
                    "Only file editing"
                ],
                answer: 0
            },
            {
                title: "Infrastructure as Code",
                text: "Infrastructure as Code uses configuration files or code to define and manage infrastructure.",
                example: "A DevOps team can define cloud resources using configuration files.",
                question: "What is Infrastructure as Code?",
                options: [
                    "Managing infrastructure using code or configuration",
                    "Writing only application comments",
                    "Designing logos with code",
                    "Deleting servers manually"
                ],
                answer: 0
            },
            {
                title: "Cloud Monitoring",
                text: "Cloud monitoring tracks the performance, availability, and health of cloud resources and applications.",
                example: "Monitoring can detect high CPU usage on a cloud server.",
                question: "Why monitor cloud systems?",
                options: [
                    "To observe performance and detect problems",
                    "To delete applications",
                    "To avoid reliability",
                    "To remove data"
                ],
                answer: 0
            },
            {
                title: "Cloud in DevOps",
                text: "Cloud platforms provide flexible infrastructure that supports automation, deployment, monitoring, and scaling.",
                example: "A DevOps pipeline can automatically deploy an application to cloud infrastructure.",
                question: "Why is cloud useful for DevOps?",
                options: [
                    "It supports flexible and automated infrastructure",
                    "It prevents automation",
                    "It removes deployment",
                    "It only stores documents"
                ],
                answer: 0
            }
        ]
    },

    "Kubernetes": {
        title: "Kubernetes",
        subtitle: "Learn the basics of container orchestration with Kubernetes.",
        lessons: [
            {
                title: "What is Kubernetes?",
                text: "Kubernetes is an open-source platform for deploying, managing, and scaling containerized applications.",
                example: "A company can use Kubernetes to manage many application containers.",
                question: "What is Kubernetes used for?",
                options: [
                    "Managing containerized applications",
                    "Only editing documents",
                    "Only designing websites",
                    "Only storing images"
                ],
                answer: 0
            },
            {
                title: "Pods",
                text: "A Pod is the basic deployable unit in Kubernetes and can contain one or more containers.",
                example: "A Pod can run an application container along with supporting containers.",
                question: "What is a Pod?",
                options: [
                    "A basic deployable unit in Kubernetes",
                    "A physical server",
                    "A database table",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Deployments",
                text: "Kubernetes Deployments manage the desired state and number of replicas for applications.",
                example: "A Deployment can maintain three running replicas of an application.",
                question: "What can a Deployment manage?",
                options: [
                    "Application replicas and desired state",
                    "Only passwords",
                    "Only source files",
                    "Only network cables"
                ],
                answer: 0
            },
            {
                title: "Services",
                text: "Kubernetes Services provide a stable way to expose and connect to applications running in Pods.",
                example: "A Service can route requests to multiple Pods running the same application.",
                question: "What does a Kubernetes Service provide?",
                options: [
                    "A stable way to access applications",
                    "Only file storage",
                    "Only source code",
                    "Only hardware"
                ],
                answer: 0
            },
            {
                title: "Scaling",
                text: "Kubernetes can scale applications by increasing or decreasing the number of running replicas.",
                example: "More application replicas can be created when demand increases.",
                question: "What does scaling change?",
                options: [
                    "The number of application resources or replicas",
                    "Only the application name",
                    "Only source comments",
                    "Only passwords"
                ],
                answer: 0
            },
            {
                title: "Self-Healing",
                text: "Kubernetes can automatically restart or replace containers when failures occur.",
                example: "If a container crashes, Kubernetes can restart it according to the configured desired state.",
                question: "What is self-healing?",
                options: [
                    "Automatically recovering failed workloads",
                    "Deleting all applications",
                    "Stopping monitoring",
                    "Removing containers permanently"
                ],
                answer: 0
            },
            {
                title: "Kubernetes Configuration",
                text: "Kubernetes resources are commonly defined using configuration files that describe the desired state.",
                example: "A YAML file can describe a Deployment and its replicas.",
                question: "How are Kubernetes resources commonly defined?",
                options: [
                    "Using configuration files",
                    "Only through spreadsheets",
                    "Only with images",
                    "Only through emails"
                ],
                answer: 0
            },
            {
                title: "Kubernetes in DevOps",
                text: "Kubernetes helps DevOps teams automate deployment, scaling, and management of containerized applications.",
                example: "A CI/CD pipeline can deploy a new container version to Kubernetes.",
                question: "How does Kubernetes support DevOps?",
                options: [
                    "By automating container application management",
                    "By preventing deployment",
                    "By removing containers",
                    "By avoiding automation"
                ],
                answer: 0
            }
        ]
    },

    "DevOps Project": {
        title: "DevOps Project",
        subtitle: "Apply Git, Docker, CI/CD, cloud, and monitoring concepts in one project.",
        lessons: [
            {
                title: "Define the Application",
                text: "Start by selecting an application and defining what you want to build, deploy, and manage.",
                example: "Choose a simple web application that can be containerized and deployed.",
                question: "What should be defined first?",
                options: [
                    "The application and project goal",
                    "Only the server password",
                    "Only the final screenshot",
                    "Nothing"
                ],
                answer: 0
            },
            {
                title: "Use Git",
                text: "Store the project source code in a Git repository so changes can be tracked and managed.",
                example: "Create a repository and commit the initial application code.",
                question: "Why use Git in a DevOps project?",
                options: [
                    "To track and manage code changes",
                    "To delete project history",
                    "To avoid collaboration",
                    "To remove source code"
                ],
                answer: 0
            },
            {
                title: "Containerize the App",
                text: "Create a Docker image so the application and its dependencies can run consistently.",
                example: "Write a Dockerfile and build an image for the application.",
                question: "Why containerize an application?",
                options: [
                    "To package it consistently with its dependencies",
                    "To remove dependencies",
                    "To prevent deployment",
                    "To delete source code"
                ],
                answer: 0
            },
            {
                title: "Create a CI Pipeline",
                text: "Set up automation that builds and tests the application whenever code changes are submitted.",
                example: "A pipeline can automatically run tests after every push.",
                question: "What should a CI pipeline do?",
                options: [
                    "Automatically build and test the application",
                    "Delete every commit",
                    "Disable testing",
                    "Stop development"
                ],
                answer: 0
            },
            {
                title: "Deploy the Application",
                text: "Deploy the tested application to suitable infrastructure such as a cloud environment.",
                example: "Deploy a Docker container to a cloud server or Kubernetes cluster.",
                question: "What happens during deployment?",
                options: [
                    "The application is released to its target environment",
                    "The source code is deleted",
                    "Testing is removed",
                    "The project is archived"
                ],
                answer: 0
            },
            {
                title: "Monitor the System",
                text: "Monitoring helps track application health, performance, and availability after deployment.",
                example: "Monitor CPU usage, memory, response time, and application errors.",
                question: "Why monitor a deployed application?",
                options: [
                    "To detect performance and availability problems",
                    "To delete the application",
                    "To avoid reliability",
                    "To remove logs"
                ],
                answer: 0
            },
            {
                title: "Improve Automation",
                text: "A mature DevOps workflow continuously improves automation, reliability, security, and deployment speed.",
                example: "Add automated security checks and deployment approval steps to the pipeline.",
                question: "What can improve a DevOps workflow?",
                options: [
                    "Better automation, security, and reliability",
                    "More manual repetition",
                    "Less testing",
                    "Removing monitoring"
                ],
                answer: 0
            },
            {
                title: "Complete DevOps Workflow",
                text: "A complete workflow can connect coding, version control, containerization, testing, deployment, and monitoring.",
                example: "Code is committed, built into a container, tested, deployed, and monitored automatically.",
                question: "What does a complete DevOps workflow connect?",
                options: [
                    "Development, testing, deployment, and monitoring",
                    "Only coding",
                    "Only documentation",
                    "Only hardware"
                ],
                answer: 0
            }
        ]
    },
        "SQL Basics": {
        title: "SQL Basics",
        subtitle: "Learn the fundamentals of querying and managing relational data.",
        lessons: [
            {
                title: "What is SQL?",
                text: "SQL is a language used to communicate with and manage relational databases.",
                example: "SQL can be used to retrieve student records from a database.",
                question: "What is SQL used for?",
                options: [
                    "Working with relational databases",
                    "Only designing images",
                    "Only creating hardware",
                    "Only editing videos"
                ],
                answer: 0
            },
            {
                title: "SELECT Statement",
                text: "The SELECT statement is used to retrieve data from database tables.",
                example: "SELECT name FROM students can retrieve student names.",
                question: "What does SELECT do?",
                options: [
                    "Retrieves data",
                    "Deletes the database",
                    "Creates hardware",
                    "Shuts down the server"
                ],
                answer: 0
            },
            {
                title: "WHERE Clause",
                text: "The WHERE clause filters records based on a specified condition.",
                example: "A query can select students whose marks are greater than 80.",
                question: "What is WHERE used for?",
                options: [
                    "Filtering records",
                    "Deleting all tables",
                    "Creating users only",
                    "Formatting text"
                ],
                answer: 0
            },
            {
                title: "INSERT Statement",
                text: "The INSERT statement adds new records to a database table.",
                example: "A new student's name and marks can be inserted into a student table.",
                question: "What does INSERT do?",
                options: [
                    "Adds new records",
                    "Removes records",
                    "Only reads data",
                    "Deletes a database"
                ],
                answer: 0
            },
            {
                title: "UPDATE Statement",
                text: "The UPDATE statement modifies existing records in a database table.",
                example: "A student's marks can be updated after a correction.",
                question: "What does UPDATE do?",
                options: [
                    "Modifies existing records",
                    "Creates a new database server",
                    "Only reads records",
                    "Deletes every table"
                ],
                answer: 0
            },
            {
                title: "DELETE Statement",
                text: "The DELETE statement removes selected records from a database table.",
                example: "A specific inactive user record can be removed using DELETE with a condition.",
                question: "What does DELETE do?",
                options: [
                    "Removes records",
                    "Adds records",
                    "Only reads records",
                    "Creates columns"
                ],
                answer: 0
            },
            {
                title: "ORDER BY",
                text: "ORDER BY sorts query results according to one or more columns.",
                example: "Student marks can be sorted from highest to lowest.",
                question: "What is ORDER BY used for?",
                options: [
                    "Sorting query results",
                    "Deleting records",
                    "Creating databases",
                    "Adding users"
                ],
                answer: 0
            },
            {
                title: "SQL Practice",
                text: "Combining SELECT, WHERE, INSERT, UPDATE, DELETE, and ORDER BY forms a basic SQL workflow.",
                example: "A database application can retrieve, filter, add, modify, and sort records.",
                question: "Why practice basic SQL commands?",
                options: [
                    "To work effectively with relational data",
                    "To avoid databases",
                    "To replace programming completely",
                    "To create hardware"
                ],
                answer: 0
            }
        ]
    },

    "Relational Databases": {
        title: "Relational Databases",
        subtitle: "Understand tables, relationships, keys, and relational database structure.",
        lessons: [
            {
                title: "What is a Relational Database?",
                text: "A relational database organizes data into tables containing rows and columns.",
                example: "A college database may have separate tables for students, courses, and marks.",
                question: "How is data organized in a relational database?",
                options: [
                    "Into related tables",
                    "Only into images",
                    "Only into files",
                    "Only into videos"
                ],
                answer: 0
            },
            {
                title: "Tables",
                text: "A table stores related data in rows and columns.",
                example: "A Students table can contain ID, name, department, and year columns.",
                question: "What does a table contain?",
                options: [
                    "Rows and columns",
                    "Only images",
                    "Only programs",
                    "Only passwords"
                ],
                answer: 0
            },
            {
                title: "Rows and Columns",
                text: "A row represents a record, while a column represents an attribute or field.",
                example: "One student is represented by a row, while Name is a column.",
                question: "What does a row usually represent?",
                options: [
                    "A record",
                    "A database server",
                    "A programming language",
                    "A network"
                ],
                answer: 0
            },
            {
                title: "Primary Keys",
                text: "A primary key uniquely identifies each record in a table.",
                example: "Student ID can uniquely identify each student.",
                question: "What is the purpose of a primary key?",
                options: [
                    "Uniquely identify records",
                    "Sort images",
                    "Store passwords only",
                    "Delete tables"
                ],
                answer: 0
            },
            {
                title: "Foreign Keys",
                text: "A foreign key connects a record in one table to a record in another table.",
                example: "A course_id in an enrollment table can reference a course table.",
                question: "What does a foreign key help establish?",
                options: [
                    "A relationship between tables",
                    "A new programming language",
                    "A hardware connection",
                    "A file format"
                ],
                answer: 0
            },
            {
                title: "Relationships",
                text: "Relationships describe how records in different tables are connected.",
                example: "One student can enroll in many courses.",
                question: "What do database relationships describe?",
                options: [
                    "Connections between records or tables",
                    "Only screen layouts",
                    "Only file sizes",
                    "Only passwords"
                ],
                answer: 0
            },
            {
                title: "Joins",
                text: "SQL joins combine related data from multiple tables.",
                example: "A JOIN can combine student information with enrollment information.",
                question: "What is a JOIN used for?",
                options: [
                    "Combining related data from tables",
                    "Deleting every table",
                    "Creating hardware",
                    "Formatting a document"
                ],
                answer: 0
            },
            {
                title: "Relational Database Design",
                text: "Good relational design organizes data clearly and maintains relationships and consistency.",
                example: "Separate student and course information into related tables instead of repeating everything.",
                question: "What is a goal of relational database design?",
                options: [
                    "Organized and consistent data",
                    "Maximum data duplication",
                    "Removing relationships",
                    "Storing everything in one field"
                ],
                answer: 0
            }
        ]
    },

    "Database Design": {
        title: "Database Design",
        subtitle: "Learn how to plan efficient and reliable database structures.",
        lessons: [
            {
                title: "Understanding Requirements",
                text: "Database design begins by understanding what information the application needs to store and retrieve.",
                example: "A college system may need student, course, attendance, and marks information.",
                question: "What is the first step in database design?",
                options: [
                    "Understand the data requirements",
                    "Delete all tables",
                    "Choose random columns",
                    "Skip planning"
                ],
                answer: 0
            },
            {
                title: "Identify Entities",
                text: "Entities are important objects or concepts that need to be represented in a database.",
                example: "Student, Course, and Teacher can be entities in a college system.",
                question: "What is an entity?",
                options: [
                    "An important object or concept represented in the database",
                    "Only a password",
                    "Only a query",
                    "Only a server"
                ],
                answer: 0
            },
            {
                title: "Identify Attributes",
                text: "Attributes describe the properties of an entity.",
                example: "A Student entity can have attributes such as ID, name, and email.",
                question: "What do attributes describe?",
                options: [
                    "Properties of an entity",
                    "Only database servers",
                    "Only SQL commands",
                    "Only network connections"
                ],
                answer: 0
            },
            {
                title: "Define Keys",
                text: "Keys help uniquely identify records and establish relationships between tables.",
                example: "Student_ID can be a primary key while Course_ID may be referenced as a foreign key.",
                question: "Why are keys important?",
                options: [
                    "They identify records and establish relationships",
                    "They only format tables",
                    "They delete records",
                    "They replace SQL"
                ],
                answer: 0
            },
            {
                title: "Design Relationships",
                text: "Relationships define how entities are connected in a database.",
                example: "A student can enroll in multiple courses.",
                question: "Why define relationships?",
                options: [
                    "To represent connections between entities",
                    "To remove tables",
                    "To avoid data organization",
                    "To create images"
                ],
                answer: 0
            },
            {
                title: "ER Diagrams",
                text: "An Entity-Relationship diagram visually represents entities, attributes, and relationships.",
                example: "An ER diagram can show Student connected to Course through Enrollment.",
                question: "What does an ER diagram show?",
                options: [
                    "Entities and their relationships",
                    "Only source code",
                    "Only passwords",
                    "Only hardware"
                ],
                answer: 0
            },
            {
                title: "Choose Data Types",
                text: "Each database column should use an appropriate data type for the information it stores.",
                example: "Age can use an integer type while Name can use a text type.",
                question: "Why choose appropriate data types?",
                options: [
                    "To store and validate data appropriately",
                    "To delete records",
                    "To remove relationships",
                    "To avoid structure"
                ],
                answer: 0
            },
            {
                title: "Review Database Design",
                text: "A database design should be reviewed for correctness, consistency, performance, and maintainability.",
                example: "Check whether tables contain unnecessary duplication before implementation.",
                question: "Why review a database design?",
                options: [
                    "To improve quality and maintainability",
                    "To remove all tables",
                    "To avoid requirements",
                    "To prevent future changes"
                ],
                answer: 0
            }
        ]
    },

    "Normalization": {
        title: "Normalization",
        subtitle: "Learn how normalization reduces unnecessary data duplication.",
        lessons: [
            {
                title: "What is Normalization?",
                text: "Normalization is a database design process that organizes data to reduce unnecessary redundancy and improve consistency.",
                example: "Instead of repeating customer information in many rows, store it in a separate customer table.",
                question: "What is a main goal of normalization?",
                options: [
                    "Reduce unnecessary data redundancy",
                    "Duplicate every value",
                    "Delete all data",
                    "Remove relationships"
                ],
                answer: 0
            },
            {
                title: "Data Redundancy",
                text: "Data redundancy occurs when the same information is unnecessarily stored in multiple places.",
                example: "Repeating a customer's address in many records creates redundancy.",
                question: "What is data redundancy?",
                options: [
                    "Unnecessary repetition of data",
                    "A database connection",
                    "A primary key",
                    "A SQL command"
                ],
                answer: 0
            },
            {
                title: "First Normal Form",
                text: "First Normal Form generally requires atomic values and avoids repeating groups within a table.",
                example: "Store individual phone numbers as separate values rather than one field containing multiple repeated values.",
                question: "What does First Normal Form focus on?",
                options: [
                    "Atomic values and removing repeating groups",
                    "Deleting all columns",
                    "Removing primary keys",
                    "Avoiding tables"
                ],
                answer: 0
            },
            {
                title: "Second Normal Form",
                text: "Second Normal Form builds on First Normal Form and removes partial dependencies in tables with composite keys.",
                example: "Move attributes that depend on only part of a composite key into a separate table.",
                question: "What does Second Normal Form address?",
                options: [
                    "Partial dependencies",
                    "Only file storage",
                    "Only passwords",
                    "Only network speed"
                ],
                answer: 0
            },
            {
                title: "Third Normal Form",
                text: "Third Normal Form builds on Second Normal Form and reduces dependencies between non-key attributes.",
                example: "Move information that depends on another non-key attribute into a separate related table.",
                question: "What does Third Normal Form help reduce?",
                options: [
                    "Transitive dependencies",
                    "All primary keys",
                    "All tables",
                    "All relationships"
                ],
                answer: 0
            },
            {
                title: "Normalization Benefits",
                text: "Normalization can improve consistency and make updates easier by reducing unnecessary duplication.",
                example: "Updating one customer address in one table is safer than updating many repeated copies.",
                question: "What is a benefit of normalization?",
                options: [
                    "Improved consistency and easier updates",
                    "More unnecessary duplication",
                    "Less organization",
                    "Removing all data"
                ],
                answer: 0
            },
            {
                title: "When to Normalize",
                text: "Normalization is especially useful when designing structured relational databases where consistency is important.",
                example: "Transaction systems often benefit from well-normalized tables.",
                question: "When is normalization useful?",
                options: [
                    "When organized and consistent relational data is needed",
                    "Only for images",
                    "Only for video files",
                    "Never in databases"
                ],
                answer: 0
            },
            {
                title: "Normalization Practice",
                text: "Normalization should be applied while considering the application's requirements and performance needs.",
                example: "Design tables to reduce redundancy while keeping common queries practical.",
                question: "What should guide normalization decisions?",
                options: [
                    "Data requirements and system needs",
                    "Random choices",
                    "Only table names",
                    "Only screen design"
                ],
                answer: 0
            }
        ]
    },

    "MySQL": {
        title: "MySQL",
        subtitle: "Learn the fundamentals of working with MySQL databases.",
        lessons: [
            {
                title: "What is MySQL?",
                text: "MySQL is a relational database management system that uses SQL to work with structured data.",
                example: "A web application can use MySQL to store users and application data.",
                question: "What is MySQL?",
                options: [
                    "A relational database management system",
                    "A programming language only",
                    "A web browser",
                    "A graphics editor"
                ],
                answer: 0
            },
            {
                title: "Creating a Database",
                text: "A MySQL database can contain tables that organize related information.",
                example: "A college application can have a database containing student and course tables.",
                question: "What can a MySQL database contain?",
                options: [
                    "Tables containing related data",
                    "Only images",
                    "Only source code",
                    "Only videos"
                ],
                answer: 0
            },
            {
                title: "Creating Tables",
                text: "Tables are created by defining columns, data types, and constraints.",
                example: "A Students table can contain ID, name, and email columns.",
                question: "What is defined when creating a table?",
                options: [
                    "Columns, data types, and constraints",
                    "Only passwords",
                    "Only images",
                    "Only network addresses"
                ],
                answer: 0
            },
            {
                title: "MySQL Queries",
                text: "SQL queries can retrieve, insert, update, and delete data stored in MySQL tables.",
                example: "A SELECT query can retrieve users from a MySQL table.",
                question: "What can SQL queries do in MySQL?",
                options: [
                    "Work with stored data",
                    "Only display images",
                    "Only create hardware",
                    "Only browse websites"
                ],
                answer: 0
            },
            {
                title: "Constraints",
                text: "Constraints help enforce rules and maintain data integrity in MySQL tables.",
                example: "A PRIMARY KEY constraint ensures unique identification of records.",
                question: "Why are constraints used?",
                options: [
                    "To enforce data rules and integrity",
                    "To remove all rules",
                    "To delete tables",
                    "To prevent all data entry"
                ],
                answer: 0
            },
            {
                title: "Indexes",
                text: "Indexes can improve the speed of searching and retrieving data from database tables.",
                example: "An index on an email column can speed up searches for a specific email.",
                question: "What is an index used for?",
                options: [
                    "Improving data retrieval performance",
                    "Deleting records",
                    "Removing tables",
                    "Changing passwords"
                ],
                answer: 0
            },
            {
                title: "MySQL Users",
                text: "MySQL supports database users and permissions to control access to data and operations.",
                example: "A user can be given permission to read data without being allowed to modify it.",
                question: "Why use database permissions?",
                options: [
                    "To control access to database resources",
                    "To delete all users",
                    "To remove security",
                    "To disable SQL"
                ],
                answer: 0
            },
            {
                title: "MySQL in Applications",
                text: "MySQL is commonly used as the database layer for web and software applications.",
                example: "A login system can store user account information in MySQL.",
                question: "How can applications use MySQL?",
                options: [
                    "As a database for storing and retrieving application data",
                    "Only for graphics",
                    "Only for audio",
                    "Only for hardware control"
                ],
                answer: 0
            }
        ]
    },

    "Advanced SQL": {
        title: "Advanced SQL",
        subtitle: "Explore more powerful SQL techniques for database analysis and management.",
        lessons: [
            {
                title: "Aggregate Functions",
                text: "Aggregate functions perform calculations across multiple rows.",
                example: "SUM, AVG, COUNT, MIN, and MAX can summarize data.",
                question: "What do aggregate functions do?",
                options: [
                    "Calculate values across multiple rows",
                    "Only delete tables",
                    "Only create users",
                    "Only format text"
                ],
                answer: 0
            },
            {
                title: "GROUP BY",
                text: "GROUP BY groups rows with the same values so aggregate calculations can be performed for each group.",
                example: "Calculate the average salary for each department.",
                question: "What is GROUP BY used for?",
                options: [
                    "Grouping rows for analysis",
                    "Deleting records",
                    "Creating hardware",
                    "Removing columns"
                ],
                answer: 0
            },
            {
                title: "HAVING",
                text: "HAVING filters grouped results after aggregate calculations.",
                example: "Show departments whose average salary is greater than a specific value.",
                question: "What does HAVING filter?",
                options: [
                    "Grouped results",
                    "Only database names",
                    "Only source code",
                    "Only images"
                ],
                answer: 0
            },
            {
                title: "Subqueries",
                text: "A subquery is a query nested inside another SQL query.",
                example: "Find employees whose salary is greater than the average salary.",
                question: "What is a subquery?",
                options: [
                    "A query inside another query",
                    "A database server",
                    "A table column",
                    "A programming language"
                ],
                answer: 0
            },
            {
                title: "Advanced Joins",
                text: "Different join types allow SQL queries to combine data from tables in different ways.",
                example: "A LEFT JOIN can keep all records from the left table even when no match exists.",
                question: "Why use different join types?",
                options: [
                    "To combine related data according to different requirements",
                    "To delete all tables",
                    "To avoid relationships",
                    "To remove records automatically"
                ],
                answer: 0
            },
            {
                title: "Views",
                text: "A view is a virtual table based on the result of a SQL query.",
                example: "Create a view showing only selected customer information.",
                question: "What is a database view?",
                options: [
                    "A virtual table based on a query",
                    "A physical computer",
                    "A programming language",
                    "A network device"
                ],
                answer: 0
            },
            {
                title: "Transactions",
                text: "A transaction is a group of database operations treated as a logical unit of work.",
                example: "A bank transfer can update two accounts as part of one transaction.",
                question: "Why are transactions useful?",
                options: [
                    "They help maintain consistent database operations",
                    "They delete databases",
                    "They prevent all updates",
                    "They remove tables"
                ],
                answer: 0
            },
            {
                title: "SQL Performance",
                text: "Good query design, appropriate indexes, and efficient data structures can improve database performance.",
                example: "An appropriate index can speed up frequent searches.",
                question: "How can SQL performance be improved?",
                options: [
                    "Through efficient queries and suitable indexes",
                    "By duplicating all data",
                    "By removing all indexes",
                    "By avoiding optimization"
                ],
                answer: 0
            }
        ]
    },

    "Database Project": {
        title: "Database Project",
        subtitle: "Build a practical database system from design to implementation.",
        lessons: [
            {
                title: "Define Requirements",
                text: "Start by identifying what information the application needs to store, update, and retrieve.",
                example: "A college management system may need students, courses, fees, and attendance.",
                question: "What should be done first in a database project?",
                options: [
                    "Define data requirements",
                    "Delete existing tables",
                    "Write random queries",
                    "Skip planning"
                ],
                answer: 0
            },
            {
                title: "Design Tables",
                text: "Convert the requirements into well-structured tables with appropriate columns.",
                example: "Create separate tables for students, courses, and enrollments.",
                question: "Why design tables carefully?",
                options: [
                    "To organize data effectively",
                    "To duplicate information",
                    "To avoid relationships",
                    "To remove data"
                ],
                answer: 0
            },
            {
                title: "Define Keys",
                text: "Primary and foreign keys help uniquely identify records and connect related tables.",
                example: "Student_ID can identify students while Enrollment can reference Student_ID.",
                question: "Why define keys?",
                options: [
                    "To identify and connect records",
                    "To delete tables",
                    "To remove structure",
                    "To avoid relationships"
                ],
                answer: 0
            },
            {
                title: "Create the Database",
                text: "Implement the planned database structure using a relational database system.",
                example: "Create the database and required tables in MySQL.",
                question: "What happens during implementation?",
                options: [
                    "The planned database structure is created",
                    "All requirements are deleted",
                    "Only screenshots are created",
                    "The project is stopped"
                ],
                answer: 0
            },
            {
                title: "Add Sample Data",
                text: "Sample data helps test whether tables, relationships, and queries work correctly.",
                example: "Insert sample student and course records.",
                question: "Why add sample data?",
                options: [
                    "To test the database",
                    "To remove tables",
                    "To avoid queries",
                    "To prevent testing"
                ],
                answer: 0
            },
            {
                title: "Create Queries",
                text: "Write SQL queries to retrieve and analyze the required information.",
                example: "Create a query to find students enrolled in a specific course.",
                question: "Why create SQL queries?",
                options: [
                    "To retrieve and work with database information",
                    "To delete all data",
                    "To remove relationships",
                    "To avoid analysis"
                ],
                answer: 0
            },
            {
                title: "Test and Secure",
                text: "Test database operations and apply appropriate access controls to protect data.",
                example: "Test queries and restrict database permissions for different users.",
                question: "Why secure a database?",
                options: [
                    "To protect data and control access",
                    "To expose all information",
                    "To remove authentication",
                    "To disable the database"
                ],
                answer: 0
            },
            {
                title: "Complete the Project",
                text: "A finished database project should include a clear design, working queries, testing, documentation, and appropriate security.",
                example: "Document the schema and explain the important queries used by the application.",
                question: "What should a complete database project include?",
                options: [
                    "Design, queries, testing, documentation, and security",
                    "Only a database name",
                    "Only screenshots",
                    "Only source code"
                ],
                answer: 0
            }
        ]
    },
        "AI Projects": {
        title: "AI Projects",
        subtitle: "Apply AI and machine learning skills by building practical projects.",
        lessons: [
            {
                title: "Choose an AI Problem",
                text: "An AI project should begin with a clear real-world problem that can benefit from artificial intelligence.",
                example: "Build a system that predicts student performance using relevant data.",
                question: "What should you identify first in an AI project?",
                options: [
                    "A clear problem to solve",
                    "Only the programming language",
                    "Only the project logo",
                    "Only the final presentation"
                ],
                answer: 0
            },
            {
                title: "Collect Data",
                text: "AI models need relevant and useful data for learning patterns and making predictions.",
                example: "Collect historical student data for a student performance prediction project.",
                question: "Why is data important in AI projects?",
                options: [
                    "It provides information for learning patterns",
                    "It replaces the model",
                    "It removes the need for testing",
                    "It is only used for presentation"
                ],
                answer: 0
            },
            {
                title: "Prepare the Data",
                text: "Data preparation includes cleaning data, handling missing values, selecting useful features, and preparing the dataset.",
                example: "Remove duplicate records and handle missing values before training a model.",
                question: "Why prepare data?",
                options: [
                    "To make data suitable for analysis and modeling",
                    "To remove all useful information",
                    "To avoid training",
                    "To make the dataset random"
                ],
                answer: 0
            },
            {
                title: "Select a Model",
                text: "The machine learning model should be selected according to the type of problem and available data.",
                example: "Use a classification model when the goal is to predict categories.",
                question: "What should guide model selection?",
                options: [
                    "The problem type and data",
                    "Only the project name",
                    "Only the computer brand",
                    "Only the user interface"
                ],
                answer: 0
            },
            {
                title: "Train the Model",
                text: "Training allows a machine learning model to learn patterns from training data.",
                example: "Train a model using historical data to predict future outcomes.",
                question: "What happens during training?",
                options: [
                    "The model learns patterns from data",
                    "The dataset is automatically deleted",
                    "The application is uninstalled",
                    "The results are hidden"
                ],
                answer: 0
            },
            {
                title: "Evaluate the Model",
                text: "Model evaluation measures how well the trained model performs on appropriate unseen data.",
                example: "Use suitable evaluation metrics to check whether a classification model performs well.",
                question: "Why evaluate an AI model?",
                options: [
                    "To measure its performance",
                    "To delete the model",
                    "To avoid testing",
                    "To remove the dataset"
                ],
                answer: 0
            },
            {
                title: "Deploy the AI Model",
                text: "Deployment makes a trained AI model available for use inside an application or service.",
                example: "A trained prediction model can be connected to a web application.",
                question: "What is deployment?",
                options: [
                    "Making a trained model available for use",
                    "Deleting the trained model",
                    "Only collecting data",
                    "Only writing documentation"
                ],
                answer: 0
            },
            {
                title: "Monitor and Improve",
                text: "AI projects should be monitored after deployment so performance, data quality, and reliability can be improved over time.",
                example: "Monitor prediction quality and retrain the model when new relevant data becomes available.",
                question: "Why monitor an AI system after deployment?",
                options: [
                    "To maintain and improve its performance",
                    "To stop collecting feedback",
                    "To delete the model",
                    "To avoid updates"
                ],
                answer: 0
            }
        ]
    }
};



    // ==================================================
    // SCREEN FUNCTIONS
    // ==================================================

    function hideAllScreens() {

        if (loginScreen)
            loginScreen.style.display = "none";

        if (signupScreen)
            signupScreen.style.display = "none";

        if (forgotScreen)
            forgotScreen.style.display = "none";

        if (goalScreen)
            goalScreen.style.display = "none";

        if (home)
            home.style.display = "none";

        if (roadmapScreen)
            roadmapScreen.style.display = "none";

        if (performanceScreen)
            performanceScreen.style.display = "none";

        if (aiClassScreen)
            aiClassScreen.style.display = "none";

        document
            .querySelectorAll(".app-screen")
            .forEach(screen => {
                screen.classList.remove("active");
            });
    }


    function showLogin() {

        hideAllScreens();

        if (loginScreen) {
            loginScreen.style.display = "flex";
        }

        if (loginMessage) {
            loginMessage.textContent = "";
        }
    }


    function showSignup() {

        hideAllScreens();

        if (signupScreen) {
            signupScreen.style.display = "flex";
        }
    }


    function showForgot() {

        hideAllScreens();

        if (forgotScreen) {
            forgotScreen.style.display = "flex";
        }

        if (resetForm) {
            resetForm.style.display = "none";
        }

        if (forgotMessage) {
            forgotMessage.textContent = "";
        }
    }


    let selectedGoal = null;


    function showGoalScreen() {

    hideAllScreens();

    if (goalScreen) {
        goalScreen.style.display = "flex";
    }

    // Clear previous selection when Career Goal is opened
    selectedGoal = null;

    goalCards.forEach(card => {
        card.classList.remove("selected");
    });

    if (selectedGoalText) {
        selectedGoalText.textContent =
            "Choose your career goal";
    }
}


    function showHome() {
    hideAllScreens();

    if (home) {
        home.style.display = "block";
        home.classList.add("active");
    }

    const bottomNav = document.querySelector(".bottom-nav");

    if (bottomNav) {
        bottomNav.style.display = "grid";
        bottomNav.style.visibility = "visible";
        bottomNav.style.opacity = "1";
    }

    const topHeader = document.querySelector(".top-header");

    if (topHeader) {
        topHeader.style.display = "flex";
    }

    if (typeof closeMenu === "function") {
        closeMenu();
    }

    updateSelectedGoal();
    generateHomeRoadmap();
    generateRoadmap();
    updateDashboardStats();
    updateWelcomeName();
}

    // ==================================================
    // PASSWORD HASHING
    // ==================================================

    async function hashPassword(password) {

        const encoder =
            new TextEncoder();

        const data =
            encoder.encode(password);

        const hashBuffer =
            await crypto.subtle.digest(
                "SHA-256",
                data
            );

        const hashArray =
            Array.from(
                new Uint8Array(
                    hashBuffer
                )
            );

        return hashArray
            .map(
                byte =>
                    byte
                        .toString(16)
                        .padStart(2, "0")
            )
            .join("");
    }


    // ==================================================
    // PASSWORD SHOW / HIDE
    // ==================================================

    function setupPasswordToggle(
        buttonId,
        inputId
    ) {

        const button =
            document.getElementById(
                buttonId
            );

        const input =
            document.getElementById(
                inputId
            );

        if (!button || !input)
            return;

        button.type = "button";

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                if (
                    input.type ===
                    "password"
                ) {

                    input.type =
                        "text";

                    button.textContent =
                        "🙈";

                } else {

                    input.type =
                        "password";

                    button.textContent =
                        "👁️";
                }
            }
        );
    }


    setupPasswordToggle(
        "togglePassword",
        "userPassword"
    );

    setupPasswordToggle(
        "toggleSignupPassword",
        "signupPassword"
    );

    setupPasswordToggle(
        "toggleConfirmPassword",
        "confirmPassword"
    );

    setupPasswordToggle(
        "toggleNewPassword",
        "newPassword"
    );

    setupPasswordToggle(
        "toggleNewConfirmPassword",
        "newConfirmPassword"
    );


    document
        .querySelectorAll(
            "#loginScreen form, " +
            "#signupScreen form, " +
            "#forgotScreen form"
        )
        .forEach(form => {

            form.addEventListener(
                "submit",
                event => {
                    event.preventDefault();
                }
            );
        });


    // ==================================================
    // CREATE ACCOUNT
    // ==================================================

    if (createAccountBtn) {

        createAccountBtn.addEventListener(
            "click",
            () => {

                showSignup();

                if (signupMessage) {
                    signupMessage.textContent = "";
                }
            }
        );
    }


    if (backToLoginFromSignup) {

        backToLoginFromSignup.addEventListener(
            "click",
            () => {

                showLogin();
            }
        );
    }


    // ==================================================
    // SIGNUP
    // ==================================================

    if (signupBtn) {

        signupBtn.addEventListener(
            "click",
            async () => {

                const first =
                    firstName?.value.trim();

                const last =
                    lastName?.value.trim();

                const email =
                    signupEmail?.value
                        .trim()
                        .toLowerCase();

                const mobile =
                    mobileNumber?.value.trim();

                const college =
                    collegeName?.value.trim();

                const userGender =
                    gender?.value;

                const password =
                    signupPassword?.value;

                const confirm =
                    confirmPassword?.value;

                if (
                    !first ||
                    !last ||
                    !email ||
                    !mobile ||
                    !college ||
                    !userGender ||
                    !password ||
                    !confirm
                ) {

                    if (signupMessage) {
                        signupMessage.textContent =
                            "Please fill all required fields.";
                    }

                    return;
                }

                if (password !== confirm) {

                    if (signupMessage) {
                        signupMessage.textContent =
                            "Passwords do not match.";
                    }

                    return;
                }

                if (
                    termsCheckbox &&
                    !termsCheckbox.checked
                ) {

                    if (signupMessage) {
                        signupMessage.textContent =
                            "Please accept the terms and conditions.";
                    }

                    return;
                }

                const passwordHash =
                    await hashPassword(
                        password
                    );

                const account = {

                    firstName: first,
                    lastName: last,
                    email: email,
                    mobile: mobile,
                    college: college,
                    gender: userGender,
                    passwordHash: passwordHash,
                    goal: null
                };

                localStorage.setItem(
                    "skillMirrorAccount",
                    JSON.stringify(
                        account
                    )
                );

                selectedGoal = null;

                if (signupMessage) {
                    signupMessage.textContent =
                        "Account created successfully!";
                }

                setTimeout(
                    () => {
                        showGoalScreen();
                    },
                    500
                );
            }
        );
    }
// ==================================================
// LOGIN
// ==================================================

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        async () => {

            const contact =
                userName?.value
                    .trim()
                    .toLowerCase();

            const password =
                userPassword?.value || "";

            if (!contact || !password) {

                loginMessage.textContent =
                    "Please enter your email/mobile and password.";

                return;
            }

            const savedAccount =
                localStorage.getItem(
                    "skillMirrorAccount"
                );

            if (!savedAccount) {

                loginMessage.textContent =
                    "No account found. Please create an account first.";

                return;
            }

            let account;

            try {

                account =
                    JSON.parse(savedAccount);

            } catch (error) {

                console.error(
                    "Account data error:",
                    error
                );

                loginMessage.textContent =
                    "Saved account data is corrupted. Please create the account again.";

                return;
            }

            const savedEmail =
                String(
                    account.email || ""
                )
                    .trim()
                    .toLowerCase();

            const savedMobile =
                String(
                    account.mobile || ""
                )
                    .replace(/\s+/g, "");

            const enteredMobile =
                contact.replace(/\s+/g, "");

            const contactMatches =
                contact === savedEmail ||
                enteredMobile === savedMobile;

            const passwordHash =
                await hashPassword(password);

            const passwordMatches =
                passwordHash ===
                account.passwordHash;

            if (
                !contactMatches ||
                !passwordMatches
            ) {

                loginMessage.textContent =
                    "Incorrect email/mobile or password.";

                return;
            }

            if (rememberMe?.checked) {

                localStorage.setItem(
                    "skillMirrorRemember",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "skillMirrorRemember"
                );
            }

            loginMessage.textContent =
                "Login successful!";

            setTimeout(
                () => {

                    if (account.goal) {

                        showHome();

                    } else {

                        showGoalScreen();
                    }

                },
                500
            );
        }
    );
}

    // ==================================================
    // FORGOT PASSWORD
    // ==================================================

    if (forgotPasswordBtn) {

        forgotPasswordBtn.addEventListener(
            "click",
            () => {

                showForgot();
            }
        );
    }


    if (backToLoginFromForgot) {

        backToLoginFromForgot.addEventListener(
            "click",
            () => {

                showLogin();
            }
        );
    }


    // ==================================================
    // GOAL SELECTION
    // ==================================================

    goalCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                goalCards.forEach(
                    item => {
                        item.classList.remove(
                            "selected"
                        );
                    }
                );

                card.classList.add(
                    "selected"
                );

                selectedGoal =
                    card.dataset.goal;

                if (selectedGoalText) {
                    selectedGoalText.textContent =
                        selectedGoal;
                }
            }
        );
    });


    if (aiChooseBtn) {

        aiChooseBtn.addEventListener(
            "click",
            () => {

                const fallback =
                    "AI / ML Engineer";

                selectedGoal =
                    selectedGoal ||
                    fallback;

                goalCards.forEach(
                    card => {

                        card.classList.remove(
                            "selected"
                        );

                        if (
                            card.dataset.goal ===
                            selectedGoal
                        ) {

                            card.classList.add(
                                "selected"
                            );
                        }
                    }
                );

                if (selectedGoalText) {
                    selectedGoalText.textContent =
                        selectedGoal;
                }
            }
        );
    }


    if (continueGoalBtn) {

        continueGoalBtn.addEventListener(
            "click",
            () => {

                if (!selectedGoal) {

                    if (
                        selectedGoalText
                    ) {

                        selectedGoalText.textContent =
                            "Please select a career goal.";
                    }

                    return;
                }

                const savedAccount =
                    localStorage.getItem(
                        "skillMirrorAccount"
                    );

                if (savedAccount) {

                    try {

                        const account =
                            JSON.parse(
                                savedAccount
                            );

                        account.goal =
                            selectedGoal;

                        localStorage.setItem(
                            "skillMirrorAccount",
                            JSON.stringify(
                                account
                            )
                        );

                    } catch (error) {

                        console.error(
                            "Could not save career goal:",
                            error
                        );
                    }
                }

                showHome();
            }
        );
    }
    
    
        // ==================================================
    // FORGOT PASSWORD
    // ==================================================

    if (forgotPasswordBtn) {

        forgotPasswordBtn.addEventListener(
            "click",
            () => {

                showForgot();
            }
        );
    }


    if (backToLoginFromForgot) {

        backToLoginFromForgot.addEventListener(
            "click",
            () => {

                showLogin();
            }
        );
    }


    // ==================================================
    // SEND RESET CODE
    // ==================================================

    if (sendResetCodeBtn) {

        sendResetCodeBtn.addEventListener(
            "click",
            async () => {

                const contact =
                    resetContact?.value
                        .trim()
                        .toLowerCase();


                if (!contact) {

                    if (forgotMessage) {

                        forgotMessage.textContent =
                            "Enter your registered email or mobile number.";
                    }

                    return;
                }


                sendResetCodeBtn.disabled =
                    true;

                sendResetCodeBtn.textContent =
                    "Sending code...";


                try {

                    const response =
                        await fetch(
                            "/api/send-reset-code",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify({
                                        contact:
                                            contact
                                    })
                            }
                        );


                    const data =
                        await response.json();


                    if (!response.ok) {

                        throw new Error(
                            data.message ||
                            data.error ||
                            "Could not send reset code."
                        );
                    }


                    if (forgotMessage) {

                        forgotMessage.textContent =
                            data.message ||
                            "Reset code sent successfully.";
                    }


                    if (resetForm) {

                        resetForm.style.display =
                            "block";
                    }


                    if (resetCode) {

                        resetCode.focus();
                    }


                } catch (error) {

                    console.error(
                        "Reset code error:",
                        error
                    );


                    if (forgotMessage) {

                        forgotMessage.textContent =
                            error.message ||
                            "Unable to send reset code. Please try again.";
                    }

                } finally {

                    sendResetCodeBtn.disabled =
                        false;

                    sendResetCodeBtn.textContent =
                        "Send Reset Code";
                }
            }
        );
    }


    // ==================================================
    // RESET PASSWORD
    // ==================================================

    if (resetPasswordBtn) {

        resetPasswordBtn.addEventListener(
            "click",
            async () => {

                const contact =
                    resetContact?.value
                        .trim()
                        .toLowerCase();

                const code =
                    resetCode?.value.trim();

                const password =
                    newPassword?.value;

                const confirm =
                    newConfirmPassword?.value;


                if (!contact) {

                    forgotMessage.textContent =
                        "Enter your registered email or mobile number.";

                    return;
                }


                if (!code) {

                    forgotMessage.textContent =
                        "Enter the reset code.";

                    return;
                }


                if (
                    !password ||
                    password.length < 6
                ) {

                    forgotMessage.textContent =
                        "Password must be at least 6 characters.";

                    return;
                }


                if (password !== confirm) {

                    forgotMessage.textContent =
                        "Passwords do not match.";

                    return;
                }


                resetPasswordBtn.disabled =
                    true;

                resetPasswordBtn.textContent =
                    "Resetting...";


                try {

                    const passwordHash =
                        await hashPassword(
                            password
                        );


                    const response =
                        await fetch(
                            "/api/reset-password",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify({

                                        contact:
                                            contact,

                                        code:
                                            code,

                                        password:
                                            password,

                                        passwordHash:
                                            passwordHash
                                    })
                            }
                        );


                    const data =
                        await response.json();


                    if (!response.ok) {

                        throw new Error(
                            data.message ||
                            data.error ||
                            "Password reset failed."
                        );
                    }


                    // Keep local login account
                    // synchronized after a successful
                    // backend password reset.
                    const savedAccount =
                        localStorage.getItem(
                            "skillMirrorAccount"
                        );


                    if (savedAccount) {

                        try {

                            const account =
                                JSON.parse(
                                    savedAccount
                                );


                            const sameEmail =
                                String(
                                    account.email ||
                                    ""
                                ).toLowerCase() ===
                                contact;


                            const sameMobile =
                                String(
                                    account.mobile ||
                                    ""
                                ) ===
                                contact;


                            if (
                                sameEmail ||
                                sameMobile
                            ) {

                                account.passwordHash =
                                    passwordHash;

                                delete account.password;

                                localStorage.setItem(
                                    "skillMirrorAccount",
                                    JSON.stringify(
                                        account
                                    )
                                );
                            }

                        } catch (error) {

                            console.log(
                                "Could not update local account after reset."
                            );
                        }
                    }


                    forgotMessage.textContent =
                        data.message ||
                        "Password reset successfully. You can login now.";


                    setTimeout(
                        () => {

                            showLogin();

                            if (loginMessage) {

                                loginMessage.textContent =
                                    "Password reset successful. Please login with your new password.";
                            }

                        },
                        1000
                    );


                } catch (error) {

                    console.error(
                        "Password reset error:",
                        error
                    );


                    forgotMessage.textContent =
                        error.message ||
                        "Unable to reset password. Please check the code and try again.";

                } finally {

                    resetPasswordBtn.disabled =
                        false;

                    resetPasswordBtn.textContent =
                        "Reset Password";
                }
            }
        );
    }


    // ==================================================
    // GOAL SELECTION
    // ==================================================

    goalCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                goalCards.forEach(
                    item => {
                        item.classList.remove(
                            "selected"
                        );
                    }
                );


                card.classList.add(
                    "selected"
                );


                selectedGoal =
                    card.dataset.goal;


                if (selectedGoalText) {

                    selectedGoalText.textContent =
                        selectedGoal;
                }
            }
        );
    });


    // ==================================================
    // SAVE SELECTED GOAL
    // ==================================================

    if (continueGoalBtn) {

        continueGoalBtn.addEventListener(
            "click",
            () => {

                if (!selectedGoal) {

                    const currentlySelected =
                        document.querySelector(
                            ".goal-card.selected"
                        );


                    if (currentlySelected) {

                        selectedGoal =
                            currentlySelected.dataset.goal;
                    }
                }


                if (!selectedGoal) {

                    alert(
                        "Please select a career goal first."
                    );

                    return;
                }


                const savedAccount =
                    localStorage.getItem(
                        "skillMirrorAccount"
                    );


                if (!savedAccount) {

                    showLogin();

                    return;
                }


                try {

                    const account =
                        JSON.parse(
                            savedAccount
                        );


                    account.goal =
                        selectedGoal;


                    localStorage.setItem(
                        "skillMirrorAccount",
                        JSON.stringify(
                            account
                        )
                    );


                    showHome();


                } catch (error) {

                    console.error(
                        "Goal save error:",
                        error
                    );

                    showLogin();
                }
            }
        );
    }


    // ==================================================
    // AI CHOOSE GOAL
    // ==================================================

    if (aiChooseBtn) {

        aiChooseBtn.addEventListener(
            "click",
            () => {

                const goals =
                    Object.keys(
                        careerCourses
                    );


                const randomIndex =
                    Math.floor(
                        Math.random() *
                        goals.length
                    );


                selectedGoal =
                    goals[randomIndex];


                goalCards.forEach(
                    card => {

                        card.classList.remove(
                            "selected"
                        );


                        if (
                            card.dataset.goal ===
                            selectedGoal
                        ) {

                            card.classList.add(
                                "selected"
                            );
                        }
                    }
                );


                if (selectedGoalText) {

                    selectedGoalText.textContent =
                        selectedGoal;
                }
            }
        );
    }


    // ==================================================
    // UPDATE SELECTED GOAL
    // ==================================================

    function updateSelectedGoal() {

        const savedAccount =
            localStorage.getItem(
                "skillMirrorAccount"
            );


        if (!savedAccount)
            return;


        try {

            const account =
                JSON.parse(
                    savedAccount
                );


            selectedGoal =
                account.goal ||
                selectedGoal;


            if (selectedGoalText) {

                selectedGoalText.textContent =
                    selectedGoal ||
                    "Choose your career goal";
            }


            if (roadmapGoalTitle) {

                roadmapGoalTitle.textContent =
                    selectedGoal ||
                    "Your Career Roadmap";
            }

        } catch (error) {

            console.log(
                "Could not update selected goal."
            );
        }
    }


    // ==================================================
    // WELCOME NAME
    // ==================================================

    function updateWelcomeName() {

        const savedAccount =
            localStorage.getItem(
                "skillMirrorAccount"
            );


        if (!savedAccount)
            return;


        try {

            const account =
                JSON.parse(
                    savedAccount
                );


            const name =
                account.firstName ||
                "Learner";


            document
                .querySelectorAll(
                    "[data-user-name]"
                )
                .forEach(
                    element => {

                        element.textContent =
                            name;
                    }
                );


            const welcomeElements =
                document.querySelectorAll(
                    ".welcome-name, #welcomeName"
                );


            welcomeElements.forEach(
                element => {

                    element.textContent =
                        name;
                }
            );


        } catch (error) {

            console.log(
                "Could not update welcome name."
            );
        }
    }


    // ==================================================
    // HOME ROADMAP
    // ==================================================

    function generateHomeRoadmap() {

    if (!homeRoadmap)
        return;


    homeRoadmap.innerHTML = "";


    const goal =
        selectedGoal;


    if (!goal)
        return;


    const courses =
        careerCourses[goal] ||
        careerCourses["Not Sure Yet"];


    courses
        .slice(0, 4)
        .forEach(
            (course, index) => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "roadmap-item";


            item.innerHTML = `
    <div class="roadmap-step-number">
        ${index + 1}
    </div>

    <div class="roadmap-step-content">

        <h3>${course}</h3>

        <p>
            Step ${index + 1}
            of ${courses.length}
        </p>

        <button
            class="roadmap-class-btn"
            data-module="${course}"
        >
            🎓 Start Class
        </button>

    </div>
`;


                homeRoadmap.appendChild(
                    item
                );
            }
        );


    // ==================================================
    // CONTINUE TO FULL ROADMAP
    // ==================================================

    if (courses.length > 4) {

        const continueItem =
            document.createElement(
                "div"
            );


        continueItem.className =
            "roadmap-item roadmap-continue";


        continueItem.innerHTML = `
            <div class="roadmap-continue-icon">
                →
            </div>

            <div class="roadmap-content">
                <h4>Continue</h4>

                <p>
                    View full roadmap
                </p>
            </div>
        `;


        homeRoadmap.appendChild(
            continueItem
        );
    }
}

    // ==================================================
// HOME ROADMAP NAVIGATION
// ==================================================

if (homeRoadmap) {

    homeRoadmap.addEventListener(
        "click",
        event => {

            const item =
                event.target.closest(
                    ".roadmap-item"
                );

            if (!item)
                return;


            // CONTINUE BUTTON
            if (
                item.classList.contains(
                    "roadmap-continue"
                )
            ) {

                hideAllScreens();

                if (roadmapScreen) {

                    roadmapScreen.style.display =
                        "block";

                    roadmapScreen.classList.add(
                        "active"
                    );
                }

                updateSelectedGoal();
                generateRoadmap();

                return;
            }


            // NORMAL ROADMAP CARD
            if (roadmapScreen) {

                hideAllScreens();

                roadmapScreen.style.display =
                    "block";

                roadmapScreen.classList.add(
                    "active"
                );

                updateSelectedGoal();
                generateRoadmap();
            }
        }
    );
}
    

    // ==================================================
    // FULL ROADMAP
    // ==================================================

    function generateRoadmap() {

        if (!fullRoadmap)
            return;


        fullRoadmap.innerHTML = "";


        const goal =
            selectedGoal;


        if (!goal) {

            fullRoadmap.innerHTML = `
                <div class="empty-roadmap">
                    Choose a career goal to see your roadmap.
                </div>
            `;

            return;
        }


        const courses =
            careerCourses[goal] ||
            careerCourses["Not Sure Yet"];


        courses.forEach(
            (course, index) => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "roadmap-step";


                item.innerHTML = `
                    <div class="roadmap-step-number">
                        ${index + 1}
                    </div>

                    <div class="roadmap-step-content">
                        <h3>${course}</h3>
                        <p>
                            Step ${index + 1}
                            of ${courses.length}
                        </p>
                    </div>
                `;


                fullRoadmap.appendChild(
                    item
                );
            }
        );
    }
    window.generateRoadmap = generateRoadmap;


    // ==================================================
    // DASHBOARD STATS
    // ==================================================

    function updateDashboardStats() {

        const savedProgress =
            localStorage.getItem(
                "skillMirrorProgress"
            );


        let progress = {

            learningStreak: 0,

            classesCompleted: 0,

            performance: 0,

            lastLearningDate: null
        };


        if (savedProgress) {

            try {

                progress =
                    {
                        ...progress,
                        ...JSON.parse(
                            savedProgress
                        )
                    };

            } catch (error) {

                console.log(
                    "Could not read progress."
                );
            }
        }


        const streakElements =
            document.querySelectorAll(
                "[data-learning-streak], #learningStreak"
            );


        streakElements.forEach(
            element => {

                element.textContent =
                    progress.learningStreak || 0;
            }
        );


        const classElements =
            document.querySelectorAll(
                "[data-classes-completed], #classesCompleted"
            );


        classElements.forEach(
            element => {

                element.textContent =
                    progress.classesCompleted || 0;
            }
        );


        const performanceElements =
            document.querySelectorAll(
                "[data-performance], #performanceScore"
            );


        performanceElements.forEach(
            element => {

                element.textContent =
                    `${progress.performance || 0}%`;
            }
        );
    }


    // ==================================================
    // UPDATE LEARNING PROGRESS
    // ==================================================

    function saveProgress(progress) {

        localStorage.setItem(
            "skillMirrorProgress",
            JSON.stringify(
                progress
            )
        );


        updateDashboardStats();
    }


    function getProgress() {

        const saved =
            localStorage.getItem(
                "skillMirrorProgress"
            );


        if (!saved) {

            return {

                learningStreak: 0,

                classesCompleted: 0,

                performance: 0,

                lastLearningDate: null
            };
        }


        try {

            return JSON.parse(
                saved
            );

        } catch (error) {

            return {

                learningStreak: 0,

                classesCompleted: 0,

                performance: 0,

                lastLearningDate: null
            };
        }
    }

// ==================================================
// MENU HELPERS
// ==================================================

function openMenu() {

    if (menuPanel) {

        menuPanel.classList.add("open");

        menuPanel.style.visibility = "visible";
        menuPanel.style.opacity = "1";
        menuPanel.style.pointerEvents = "auto";

        menuPanel
            .querySelectorAll(".menu-item")
            .forEach(item => {
                item.classList.remove("active", "selected");
                item.blur();
            });
    }

    if (menuOverlay) {

        menuOverlay.classList.add("active");

        menuOverlay.style.opacity = "1";
        menuOverlay.style.visibility = "visible";
        menuOverlay.style.pointerEvents = "auto";
    }

    document.body.classList.add("menu-open");
}


// ==================================================
// CLOSE MENU
// ==================================================

function closeMenu() {

    if (menuPanel) {

        menuPanel.classList.remove("open", "active");

        menuPanel.style.visibility = "hidden";
        menuPanel.style.opacity = "0";
        menuPanel.style.pointerEvents = "none";
    }

    if (menuOverlay) {

        menuOverlay.classList.remove("active", "show");

        menuOverlay.style.opacity = "0";
        menuOverlay.style.visibility = "hidden";
        menuOverlay.style.pointerEvents = "none";
    }

    document.body.classList.remove("menu-open");
}


// ==================================================
// MENU CLOSE BUTTON / X
// ==================================================

const closeMenuBtn =
    document.getElementById("closeMenu");

if (closeMenuBtn) {

    closeMenuBtn.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        closeMenu();
    });
}


// ==================================================
// MENU BUTTON
// ==================================================

const menuButtons =
    document.querySelectorAll(
        "[data-menu], #menuButton, #menuBtn, #hamburgerBtn, .menu-btn, .hamburger"
    );

menuButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        openMenu();
    });

});


// ==================================================
// CLICK OUTSIDE MENU = CLOSE
// ==================================================

document.addEventListener("click", function(event) {

    if (!menuPanel) return;

    const menuIsOpen =
        menuPanel.classList.contains("open");

    if (!menuIsOpen) return;

    const clickedInsideMenu =
        menuPanel.contains(event.target);

    const clickedMenuButton =
        event.target.closest(
            "#menuButton, #menuBtn, #hamburgerBtn, .menu-btn, .hamburger"
        );

    if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
    }

});

// ==================================================
// ESC KEY
// ==================================================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeMenu();
    }

});


    // ==================================================
    // MENU - HOME
    // ==================================================

    document
        .querySelectorAll(
            "#homeMenu, #menuHome, [data-menu-item='home'], .menu-home"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        closeMenu();
                        showHome();
                    }
                );
            }
        );


    // ==================================================
    // MENU - ROADMAP
    // ==================================================

    document
        .querySelectorAll(
            "#roadmapMenu, #menuRoadmap, [data-menu-item='roadmap'], .menu-roadmap"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        closeMenu();
                        hideAllScreens();

                        if (roadmapScreen) {

                            roadmapScreen.style.display =
                                "block";

                            roadmapScreen.classList.add(
                                "active"
                            );
                        }

                        updateSelectedGoal();
                        generateRoadmap();
                    }
                );
            }
        );


    // ==================================================
    // MENU - PERFORMANCE
    // ==================================================

    document
        .querySelectorAll(
            "#performanceMenu, #menuPerformance, [data-menu-item='performance'], .menu-performance"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        closeMenu();
                        hideAllScreens();

                        if (
                            performanceScreen
                        ) {

                            performanceScreen.style.display =
                                "block";

                            performanceScreen.classList.add(
                                "active"
                            );
                        }

                        updateDashboardStats();
                    }
                );
            }
        );


    // ==================================================
    // ACTUAL HTML MENU BUTTONS
    // ==================================================

    const actualClassesMenu =
        document.getElementById("classesMenu");

    const actualCoachMenu =
        document.getElementById("coachMenu");

    if (actualClassesMenu) {

        actualClassesMenu.addEventListener(
            "click",
            () => {

                closeMenu();

                const courses =
                    careerCourses[selectedGoal] ||
                    careerCourses["Not Sure Yet"];

                openAIClass(
                    courses?.[0] ||
                    "Python Fundamentals"
                );
            }
        );
    }

    if (actualCoachMenu) {

        actualCoachMenu.addEventListener(
            "click",
            () => {

                closeMenu();
                openAskTeacher();
            }
        );
    }


    // ==================================================
    // ACTUAL BOTTOM NAVIGATION
    // ==================================================

    const homeNav =
        document.getElementById("homeNav");

    const roadmapNav =
        document.getElementById("roadmapNav");

    const classesNav =
        document.getElementById("classesNav");

    const performanceNav =
        document.getElementById("performanceNav");

    if (homeNav) {
        homeNav.addEventListener("click", showHome);
    }

    if (roadmapNav) {
        roadmapNav.addEventListener(
            "click",
            () => {
                
closeMenu();
hideAllScreens();

const nav = document.querySelector(".bottom-nav");
const header = document.querySelector(".top-header");

if (nav) {
    nav.style.setProperty("display", "grid", "important");
    nav.style.setProperty("visibility", "visible", "important");
    nav.style.setProperty("opacity", "1", "important");
}

if (header) {
    header.style.setProperty("display", "flex", "important");
}

if (roadmapScreen) {
    roadmapScreen.style.setProperty("display", "block", "important");
    roadmapScreen.classList.add("active");
}
                updateSelectedGoal();
                generateRoadmap();
            }
        );
    }

    if (classesNav) {
        classesNav.addEventListener(
            "click",
            () => {
                closeMenu();
                const courses =
                    careerCourses[selectedGoal] ||
                    careerCourses["Not Sure Yet"];
                openAIClass(
                    courses?.[0] ||
                    "Python Fundamentals"
                );
            }
        );
    }

    if (performanceNav) {
        performanceNav.addEventListener(
            "click",
            () => {
                closeMenu();
                hideAllScreens();
                if (performanceScreen) {
                    performanceScreen.style.display = "block";
                    performanceScreen.classList.add("active");
                }
                updateDashboardStats();
            }
        );
    }


    // ==================================================
    // HOME START CLASS + CONTINUE LEARNING
    // ==================================================


    const continueLearningBtn =
        document.getElementById("continueLearningBtn");

    function openFirstCareerClass() {

        const courses =
            careerCourses[selectedGoal] ||
            careerCourses["Not Sure Yet"];

        openAIClass(
            courses?.[0] ||
            "Python Fundamentals"
        );
    }

    if (startClassBtn) {

        startClassBtn.addEventListener(
            "click",
            event => {
                event.preventDefault();
                openFirstCareerClass();
            }
        );
    }

    if (continueLearningBtn) {

        continueLearningBtn.addEventListener(
            "click",
            event => {
                event.preventDefault();
                openFirstCareerClass();
            }
        );
    }


    // ==================================================
    // ROADMAP MODULES -> AI CLASS
    // ==================================================

    if (fullRoadmap) {

        fullRoadmap.addEventListener(
            "click",
            event => {

                const item =
                    event.target.closest(
                        ".roadmap-step"
                    );

                if (!item) return;

                const heading =
                    item.querySelector(
                        "h3"
                    );

                const moduleName =
                    heading?.textContent.trim();

                if (moduleName) {
                    openAIClass(moduleName);
                }
            }
        );
    }


    // ==================================================
    // CHANGE GOAL - SAVE/OPEN CLEANLY
    // ==================================================

    if (changeGoalBtn) {

        changeGoalBtn.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();
                closeMenu();
                showGoalScreen();
            }
        );
    }


    // ==================================================
    // BACK TO HOME BUTTONS
    // ==================================================

    document
        .querySelectorAll(
            "#backHomeBtn, " +
            "#backFromRoadmap, " +
            "#backFromPerformance, " +
            ".back-home"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        showHome();
                    }
                );
            }
        );
            // ==================================================
    // AI CLASS STATE
    // ==================================================

    let currentClassCourse = null;
    let currentLesson = null;
    let currentLessonIndex = 0;
    let selectedAnswer = null;
    let classScoreValue = 0;
    let classAnswered = false;


    // ==================================================
    // AI CLASS SCREEN
    // ==================================================
function openAIClass(moduleName) {

    if (!moduleName) {
        moduleName =
            careerCourses[selectedGoal]?.[0] ||
            "Python Fundamentals";
    }

    currentClassCourse = moduleName;
    currentLessonIndex = 0;

    const courseData =
        lessonLibrary[moduleName];

    if (!courseData) {
        console.error(
            "Lesson data not found:",
            moduleName
        );
        return;
    }

    // Start from Lesson 1
    currentLesson =
        courseData.lessons[0];

    selectedAnswer = null;
    classScoreValue = 0;
    classAnswered = false;

    hideAllScreens();

    if (aiClassScreen) {
        aiClassScreen.style.display = "block";

        aiClassScreen.classList.add(
            "active"
        );
    }
    // Course title
    if (aiClassTopic) {
        aiClassTopic.textContent =
            currentLesson.title;
    }

    if (aiClassSubtitle) {
        aiClassSubtitle.textContent =
            `${moduleName} • Lesson 1 of ${courseData.lessons.length}`;
    }

    // Board content
    if (boardTitle) {
        boardTitle.textContent =
            currentLesson.title;
    }

    if (boardText) {
        boardText.textContent =
            currentLesson.text;
    }

    if (boardExample) {
        boardExample.textContent =
            currentLesson.example;
    }

    // Question
    if (classQuestionText) {
        classQuestionText.textContent =
            currentLesson.question;
    }

    // Options
    answerOptions.forEach(
        (option, index) => {

            option.classList.remove(
                "selected",
                "correct",
                "wrong"
            );

            option.removeAttribute(
                "data-selected"
            );

            if (
                currentLesson.options &&
                currentLesson.options[index]
            ) {

                option.textContent =
                    currentLesson.options[index];

                option.style.display = "";
            }
        }
    );

    if (classQuestionFeedback) {
        classQuestionFeedback.textContent =
            "";
    }

    if (classCompleteBox) {
        classCompleteBox.style.display =
            "none";
    }
    if (nextLessonBtn) {
    nextLessonBtn.style.display = "none";
}

    if (classScore) {
        classScore.textContent =
            "0";
    }

    if (submitClassAnswer) {
        submitClassAnswer.disabled =
            false;

        submitClassAnswer.textContent =
            "Submit Answer";
    }

    updateClassProgress(0);
}
function loadClassLesson() {

    const courseData =
        lessonLibrary[currentClassCourse];

    if (
        !courseData ||
        !courseData.lessons
    ) {
        return;
    }

    const totalLessons =
        courseData.lessons.length;

    currentLesson =
        courseData.lessons[
            currentLessonIndex
        ];

    selectedAnswer = null;
    classAnswered = false;

    if (aiClassTopic) {
        aiClassTopic.textContent =
            currentLesson.title;
    }

    if (aiClassSubtitle) {
        aiClassSubtitle.textContent =
            `${currentClassCourse} • Lesson ${currentLessonIndex + 1} of ${totalLessons}`;
    }

    if (boardTitle) {
        boardTitle.textContent =
            currentLesson.title;
    }

    if (boardText) {
        boardText.textContent =
            currentLesson.text;
    }

    if (boardExample) {
        boardExample.textContent =
            currentLesson.example;
    }

    if (classQuestionText) {
        classQuestionText.textContent =
            currentLesson.question;
    }

    answerOptions.forEach(
        (option, index) => {

            option.classList.remove(
                "selected",
                "correct",
                "wrong"
            );

            option.removeAttribute(
                "data-selected"
            );

            if (
                currentLesson.options &&
                currentLesson.options[index]
            ) {

                option.textContent =
                    currentLesson.options[index];

                option.style.display = "";
            }
        }
    );

    if (classQuestionFeedback) {
        classQuestionFeedback.textContent =
            "";
    }

    if (classCompleteBox) {
        classCompleteBox.style.display =
            "none";
    }

    if (submitClassAnswer) {
        submitClassAnswer.disabled =
            false;

        submitClassAnswer.textContent =
            "Submit Answer";
    }


    const lessonProgress =
    ((currentLessonIndex + 1) / totalLessons) * 100;

updateClassProgress(lessonProgress);

}

    
// ==================================================
// CONTINUE TO NEXT LESSON
// ==================================================
if (classContinueBtn) {

    classContinueBtn.addEventListener(
        "click",
        function () {

            if (!classAnswered) {
                return;
            }

            goToNextLesson();

        }
    );
}
// ==================================================
// NEXT LESSON / NEXT MODULE
// ==================================================

function goToNextLesson() {

    const courseData =
        lessonLibrary[currentClassCourse];

    if (!courseData || !courseData.lessons) {
        return;
    }

    const totalLessons =
        courseData.lessons.length;

    if (currentLessonIndex < totalLessons - 1) {

        currentLessonIndex++;

        loadClassLesson();

        if (nextLessonBtn) {
            nextLessonBtn.style.display = "none";
        }

        return;
    }

    const courses =
        careerCourses[selectedGoal] ||
        careerCourses["Not Sure Yet"];

    const currentModuleIndex =
        courses.indexOf(currentClassCourse);

    if (currentModuleIndex < courses.length - 1) {

        const nextModule =
            courses[currentModuleIndex + 1];

        openAIClass(nextModule);

    } else {

        if (classCompleteBox) {
            classCompleteBox.style.display = "block";
        }

        if (classQuestionFeedback) {
            classQuestionFeedback.textContent =
                "🎉 Congratulations! You completed your entire roadmap.";
        }
    }
}




    // ==================================================
    // CLASS PROGRESS
    // ==================================================

    function updateClassProgress(
        percentage
    ) {

        const safePercentage =
            Math.max(
                0,
                Math.min(
                    100,
                    percentage
                )
            );


        if (aiClassProgressFill) {

            aiClassProgressFill.style.width =
                `${safePercentage}%`;
        }


        if (aiClassProgressText) {

            aiClassProgressText.textContent =
                `${Math.round(
                    safePercentage
                )}%`;
        }
    }


    // ==================================================
    // CLASS BUTTONS
    // ==================================================

    if (backFromAIClass) {

        backFromAIClass.addEventListener(
            "click",
            () => {

                showHome();
            }
        );
    }


    // ==================================================
    // CLASSES MENU
    // ==================================================

    document
        .querySelectorAll(
            "#menuClasses, " +
            "#classesBtn, " +
            "[data-menu-item='classes'], " +
            ".menu-classes, " +
            ".classes-btn"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        closeMenu();

                        const goal =
                            selectedGoal;

                        const courses =
                            careerCourses[
                                goal
                            ] ||
                            careerCourses[
                                "Not Sure Yet"
                            ];


                        if (
                            courses &&
                            courses.length
                        ) {

                            openAIClass(
                                courses[0]
                            );

                        } else {

                            openAIClass(
                                "Python Fundamentals"
                            );
                        }
                    }
                );
            }
        );


    // ==================================================
    // AI CLASS CARDS
    // ==================================================

    document
        .querySelectorAll(
            ".class-card, " +
            ".course-card, " +
            "[data-course]"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    () => {

                        const course =
                            card.dataset.course ||
                            card.dataset.module ||
                            card.dataset.topic ||
                            card.getAttribute(
                                "data-course-name"
                            );


                        if (course) {

                            openAIClass(
                                course
                            );
                        }
                    }
                );
            }
        );

// ==================================================
// SKILLMIRROR AI - CLASS QUIZ
// ==================================================

const smQuizQuestions = [
    {
        question: "What does a business generally provide?",
        options: [
            "Goods and services",
            "Only games",
            "Only homework",
            "Nothing"
        ],
        answer: 0
    },
    {
        question: "What is the main purpose of a variable?",
        options: [
            "To store data",
            "To delete a program",
            "To connect Wi-Fi",
            "To design a screen"
        ],
        answer: 0
    },
    {
        question: "Which symbol is used for assignment in Python?",
        options: ["==", "=", "!=", "+"],
        answer: 1
    },
    {
        question: 'What is the output of print("Hello")?',
        options: ["Error", "Hello", "print", "Nothing"],
        answer: 1
    },
    {
        question: "Which keyword defines a function in Python?",
        options: ["function", "define", "func", "def"],
        answer: 3
    }
];

let smQuizIndex = 0;
let smQuizSelected = null;
let smQuizChecked = false;
let smQuizScore = 0;

const smQuizText =
    document.getElementById("classQuestionText");

const smQuizOptions =
    document.getElementById("answerOptions");

const smQuizFeedback =
    document.getElementById("classQuestionFeedback");

const smQuizProgress =
    document.getElementById("classQuestionProgress");

const smQuizSubmit =
    document.getElementById("submitClassAnswer");

const smQuizComplete =
    document.getElementById("classQuizComplete");

function smRenderQuiz() {
    console.log("QUIZ ELEMENT CHECK", {
    question: !!smQuizText,
    options: !!smQuizOptions,
    feedback: !!smQuizFeedback,
    progress: !!smQuizProgress,
    submit: !!smQuizSubmit,
    next: !!smQuizNext
});
    if (
        !smQuizText ||
        !smQuizOptions ||
        !smQuizFeedback ||
        !smQuizProgress ||
        !smQuizSubmit ||
        !smQuizNext
    ) {
        console.error("Quiz HTML elements are missing.");
        console.log({
    question: !!smQuizText,
    options: !!smQuizOptions,
    feedback: !!smQuizFeedback,
    progress: !!smQuizProgress,
    submit: !!smQuizSubmit,
    next: !!smQuizNext
});
return;
    }

    const question = smQuizQuestions[smQuizIndex];

    smQuizSelected = null;
    smQuizChecked = false;

    smQuizText.textContent = question.question;
    smQuizProgress.textContent =
        `${smQuizIndex + 1}/${smQuizQuestions.length}`;

    smQuizFeedback.textContent = "";
    smQuizOptions.innerHTML = "";

    smQuizSubmit.style.display = "inline-block";
    smQuizSubmit.disabled = false;
    smQuizSubmit.textContent = "Check Answer";

    smQuizNext.style.display = "none";

    if (smQuizComplete) {
        smQuizComplete.style.display = "none";
    }

    question.options.forEach((answer, index) => {
        const option = document.createElement("button");

        option.type = "button";
        option.className = "answer-option";
        option.textContent = answer;

        option.addEventListener("click", () => {
            if (smQuizChecked) return;

            smQuizSelected = index;

            smQuizOptions
                .querySelectorAll(".answer-option")
                .forEach(item => {
                    item.classList.remove("selected");
                });

            option.classList.add("selected");
        });

        smQuizOptions.appendChild(option);
    });
}

if (smQuizSubmit) {
    smQuizSubmit.addEventListener("click", () => {
        if (smQuizChecked) return;

        if (smQuizSelected === null) {
            smQuizFeedback.textContent =
                "Please select an answer first.";
            return;
        }

        smQuizChecked = true;

        const question = smQuizQuestions[smQuizIndex];

        smQuizOptions
            .querySelectorAll(".answer-option")
            .forEach((option, index) => {
                if (index === question.answer) {
                    option.classList.add("correct");
                } else if (index === smQuizSelected) {
                    option.classList.add("wrong");
                }
            });

        if (smQuizSelected === question.answer) {
            smQuizScore++;
            smQuizFeedback.textContent =
                "Correct! Great job 🎉";
        } else {
            smQuizFeedback.textContent =
                "Incorrect. The correct answer is highlighted.";
        }

        smQuizNext.textContent =
            smQuizIndex === smQuizQuestions.length - 1
                ? "See Results"
                : "Next Question →";

        smQuizNext.style.display = "inline-block";
    });
}
const smQuizNext = document.getElementById("nextQuestionBtn");

if (smQuizNext) {
    smQuizNext.addEventListener("click", () => {
        if (!smQuizChecked) return;

        if (smQuizIndex < smQuizQuestions.length - 1) {
            smQuizIndex++;
            smRenderQuiz();
            return;
        }

        smQuizText.textContent = "Practice Completed! 🎉";
        smQuizOptions.innerHTML = "";
        smQuizProgress.textContent = "5/5";

        smQuizFeedback.textContent =
            `Your score: ${smQuizScore}/5`;

        smQuizSubmit.style.display = "none";
        smQuizNext.style.display = "none";

        if (smQuizComplete) {
            smQuizComplete.style.display = "block";
        }
    });
}

const smQuizRestart =
    document.getElementById("restartClassQuiz");

if (smQuizRestart) {
    smQuizRestart.addEventListener("click", () => {
        smQuizIndex = 0;
        smQuizScore = 0;
        smRenderQuiz();
    });
}

smRenderQuiz();
console.log("QUIZ SCRIPT REACHED");
console.log("Question:", document.getElementById("classQuestionText"));
console.log("Options:", document.getElementById("answerOptions"));

        // ==================================================
    // CLASS QUICK ACTIONS
    // ==================================================

    if (explainAgainBtn) {

        explainAgainBtn.addEventListener(
            "click",
            () => {

                if (
                    !currentLesson
                )
                    return;


                if (
                    classTeacherResponse
                ) {

                    classTeacherResponse.textContent =
                        currentLesson.text;
                }


                speakText(
                    currentLesson.text
                );
            }
        );
    }


    if (exampleBtn) {

        exampleBtn.addEventListener(
            "click",
            () => {

                if (
                    !currentLesson
                )
                    return;


                if (
                    classTeacherResponse
                ) {

                    classTeacherResponse.textContent =
                        currentLesson.example;
                }


                speakText(
                    currentLesson.example
                );
            }
        );
    }


    if (doubtBtn) {

        doubtBtn.addEventListener(
            "click",
            () => {

                if (
                    classDoubtInput
                ) {

                    classDoubtInput.focus();
                }
            }
        );
    }


    if (askQuestionQuickBtn) {

        askQuestionQuickBtn.addEventListener(
            "click",
            () => {

                if (
                    classDoubtInput
                ) {

                    classDoubtInput.focus();
                }
            }
        );
    }


    // ==================================================
// AI CLASSROOM - TEXT TO SPEECH
// ==================================================

let speechUtterance = null;
let speechQueue = [];
let speechIndex = 0;


// STOP SPEECH
function stopClassSpeech() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    speechUtterance = null;
    speechQueue = [];
    speechIndex = 0;

    if (teacherSpeaking) {
        teacherSpeaking.style.display = "none";
    }
}


// SPEAK CURRENT PART
function speakClassPart() {

    if (
        !("speechSynthesis" in window) ||
        !speechQueue.length ||
        speechIndex >= speechQueue.length
    ) {
        if (teacherSpeaking) {
            teacherSpeaking.style.display = "none";
        }

        return;
    }

    window.speechSynthesis.cancel();

    const part = speechQueue[speechIndex];

    speechUtterance =
        new SpeechSynthesisUtterance(
            part.text
        );

    speechUtterance.rate = 0.95;
    speechUtterance.pitch = 1;

    speechUtterance.onstart = () => {

        if (teacherSpeaking) {
            teacherSpeaking.style.display = "block";
        }
    };

    speechUtterance.onend = () => {

        speechIndex++;

        if (
            speechIndex <
            speechQueue.length
        ) {
            speakClassPart();
        } else {

            if (teacherSpeaking) {
                teacherSpeaking.style.display = "none";
            }
        }
    };

    window.speechSynthesis.speak(
        speechUtterance
    );
}


// START FROM BEGINNING
function startClassFromBeginning() {

    if (!currentLesson) return;

    stopClassSpeech();

    speechQueue = [

        {
            type: "explanation",
            text:
                "Explanation. " +
                currentLesson.text
        },

        {
            type: "example",
            text:
                "Example. " +
                currentLesson.example
        },

        {
            type: "question",
            text:
                "Question. " +
                currentLesson.question
        }

    ];

    speechIndex = 0;

    speakClassPart();
}


// CONTINUE
function continueClassSpeech() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    if (window.speechSynthesis.paused) {

        window.speechSynthesis.resume();

        return;
    }

    if (
        speechQueue.length &&
        speechIndex < speechQueue.length
    ) {
        speakClassPart();
    }
}


// STOP / PAUSE
function pauseClassSpeech() {

    if (
        "speechSynthesis" in window &&
        window.speechSynthesis.speaking
    ) {
        window.speechSynthesis.pause();
    }
}


// START BUTTON
if (classVoiceBtn) {

    classVoiceBtn.addEventListener(
        "click",
        () => {
            startClassFromBeginning();
        }
    );
}


// PAUSE BUTTON
if (classPauseBtn) {

    classPauseBtn.addEventListener(
        "click",
        () => {
            pauseClassSpeech();
        }
    );
}


// CONTINUE BUTTON
if (classContinueBtn) {

    classContinueBtn.addEventListener(
        "click",
        () => {
            continueClassSpeech();
        }
    );
}



    // ==================================================
    // ASK AI TEACHER
    // ==================================================

    const askTeacherScreen =
        document.getElementById(
            "askTeacherScreen"
        );

    const classQuestionScreen =
        document.getElementById(
            "classQuestionScreen"
        );

    const classAnswerOptions =
        document.querySelectorAll(
            ".answer-option"
        );

    const separateDoubtInput =
        document.getElementById(
            "separateDoubtInput"
        );

    const separateAskBtn =
        document.getElementById(
            "separateAskBtn"
        );

    const separateTeacherResponse =
        document.getElementById(
            "separateTeacherResponse"
        );

    const backFromAskTeacher =
        document.getElementById(
            "backFromAskTeacher"
        );

    const backFromClassQuestion =
        document.getElementById(
            "backFromClassQuestion"
        );


    // ==================================================
    // ASK AI TEACHER SCREEN
    // ==================================================

    function openAskTeacher() {

        hideAllScreens();


        if (askTeacherScreen) {

            askTeacherScreen.style.display =
                "block";

            askTeacherScreen.classList.add(
                "active"
            );
        }
    }


    document
        .querySelectorAll(
            "#askTeacherBtn, " +
            "#askAIBtn, " +
            "#aiTeacherBtn, " +
            "[data-menu-item='ai-teacher'], " +
            ".ask-teacher-btn"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        closeMenu();
                        openAskTeacher();
                    }
                );
            }
        );


    if (backFromAskTeacher) {

        backFromAskTeacher.addEventListener(
            "click",
            () => {

                showHome();
            }
        );
    }


    if (backFromClassQuestion) {

        backFromClassQuestion.addEventListener(
            "click",
            () => {

                showHome();
            }
        );
    }


    // ==================================================
    // ASK AI TEACHER - BACKEND
    // ==================================================

    async function askAIQuestion(
        question
    ) {

        const cleanQuestion =
            String(
                question || ""
            ).trim();


        if (!cleanQuestion) {

            return "Please type a question first.";
        }


        try {

            const response =
                await fetch(
                    "/api/ask",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify({

                                question:
                                    cleanQuestion,

                                topic:
                                    currentClassCourse ||
                                    selectedGoal ||
                                    "General"
                            })
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    data.error ||
                    "AI request failed."
                );
            }


            return (
                data.answer ||
                data.response ||
                data.message ||
                "The AI teacher could not generate an answer."
            );


        } catch (error) {

            console.error(
                "AI Teacher error:",
                error
            );


            return (
                "Sorry, I couldn't connect to the AI Teacher right now. Please check that the Flask server is running."
            );
        }
    }


    // ==================================================
    // SEPARATE AI TEACHER ASK BUTTON
    // ==================================================

    if (separateAskBtn) {

        separateAskBtn.addEventListener(
            "click",
            async () => {

                const question =
                    separateDoubtInput?.value
                        .trim();


                if (!question) {

                    if (
                        separateTeacherResponse
                    ) {

                        separateTeacherResponse.textContent =
                            "Please type your question first.";
                    }

                    return;
                }


                separateAskBtn.disabled =
                    true;

                separateAskBtn.textContent =
                    "Thinking...";


                if (
                    separateTeacherResponse
                ) {

                    separateTeacherResponse.textContent =
                        "AI Teacher is thinking...";
                }


                const answer =
                    await askAIQuestion(
                        question
                    );


                if (
                    separateTeacherResponse
                ) {

                    separateTeacherResponse.textContent =
                        answer;
                }


                separateAskBtn.disabled =
                    false;

                separateAskBtn.textContent =
                    "Ask AI";


                speakText(
                    answer
                );
            }
        );
    }


    // ==================================================
    // CLASS DOUBT ASK
    // ==================================================

    if (classAskBtn) {

        classAskBtn.addEventListener(
            "click",
            async () => {

                const question =
                    classDoubtInput?.value
                        .trim();


                if (!question) {

                    if (
                        classTeacherResponse
                    ) {

                        classTeacherResponse.textContent =
                            "Please type your doubt first.";
                    }

                    return;
                }


                classAskBtn.disabled =
                    true;

                classAskBtn.textContent =
                    "Thinking...";


                if (
                    classTeacherResponse
                ) {

                    classTeacherResponse.textContent =
                        "AI Teacher is thinking...";
                }


                const answer =
                    await askAIQuestion(
                        question
                    );


                if (
                    classTeacherResponse
                ) {

                    classTeacherResponse.textContent =
                        answer;
                }


                classAskBtn.disabled =
                    false;

                classAskBtn.textContent =
                    "Ask";


                speakText(
                    answer
                );
            }
        );
    }
        // ==================================================
    // NEXT CLASS
    // ==================================================

    if (nextClassBtn) {

        nextClassBtn.addEventListener(
            "click",
            () => {

                const courses =
                    careerCourses[
                        selectedGoal
                    ] ||
                    careerCourses[
                        "Not Sure Yet"
                    ];


                if (
                    !courses ||
                    !courses.length
                ) {

                    openAIClass(
                        "Python Fundamentals"
                    );

                    return;
                }


                const currentIndex =
                    courses.indexOf(
                        currentClassCourse
                    );


                let nextIndex =
                    currentIndex + 1;


                if (
                    nextIndex >=
                    courses.length
                ) {

                    nextIndex = 0;
                }


                openAIClass(
                    courses[
                        nextIndex
                    ]
                );
            }
        );
    }


    // ==================================================
    // LOGOUT
    // ==================================================

    document
        .querySelectorAll(
            "#logoutBtn, " +
            "#menuLogout, " +
            "[data-menu-item='logout'], " +
            ".logout-btn"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        closeMenu();


                        if (
                            "speechSynthesis" in
                            window
                        ) {

                            window.speechSynthesis.cancel();
                        }


                        localStorage.removeItem(
                            "skillMirrorRemember"
                        );


                        showLogin();


                        if (userName) {

                            userName.value =
                                "";
                        }


                        if (userPassword) {

                            userPassword.value =
                                "";
                        }
                    }
                );
            }
        );


    // ==================================================
    // ENTER KEY SUPPORT
    // ==================================================

    if (userPassword) {

        userPassword.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    loginBtn?.click();
                }
            }
        );
    }


    if (resetCode) {

        resetCode.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    resetPasswordBtn?.click();
                }
            }
        );
    }


    if (classDoubtInput) {

        classDoubtInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    classAskBtn?.click();
                }
            }
        );
    }


    if (separateDoubtInput) {

        separateDoubtInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    separateAskBtn?.click();
                }
            }
        );
    }


    // ==================================================
    // CLOSE MENU WITH ESCAPE
    // ==================================================

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeMenu();

                if (
                    "speechSynthesis" in
                    window
                ) {

                    window.speechSynthesis.cancel();
                }
            }
        }
    );


    // ==================================================
    // FINAL NAVIGATION Z-INDEX SAFETY
    // ==================================================

    const navigationStyle =
        document.createElement("style");

    navigationStyle.textContent = `
        #menuButton {
            position: relative !important;
            z-index: 10002 !important;
            pointer-events: auto !important;
            cursor: pointer !important;
        }
        #menuPanel {
            z-index: 20000 !important;
            pointer-events: auto !important;
        }
        #menuPanel .menu-item {
            pointer-events: auto !important;
            cursor: pointer !important;
        }
        #menuOverlay {
            z-index: 19999 !important;
        }
        .bottom-nav {
            z-index: 1500 !important;
        }
    `;

    document.head.appendChild(navigationStyle);


    // ==================================================
    // INITIAL PAGE
    // ==================================================
    //
    // IMPORTANT:
    // The website ALWAYS starts at Login.
    //
    // It will NOT automatically open:
    // - Home
    // - Create Account
    // - Forgot Password
    // - Goal screen
    //
    // After successful login:
    // -> Home opens if goal already exists
    // -> Goal screen opens only for a newly created
    //    account that has not selected a goal yet.
    // ==================================================

    showLogin();

// ==================================================
// STARTUP - REMEMBER USER
// ==================================================

const savedAccount =
    localStorage.getItem(
        "skillMirrorAccount"
    );

if (savedAccount) {

    try {

        const account =
            JSON.parse(savedAccount);

        if (account.goal) {

            selectedGoal =
                account.goal;

            showHome();

        } else {

            showGoalScreen();
        }

    } catch (error) {

        console.error(
            "Could not load saved account:",
            error
        );

        localStorage.removeItem(
            "skillMirrorAccount"
        );

        showLogin();
    }

} else {

    showLogin();
}
    // ==================================================
    // INITIAL UI REFRESH
    // ==================================================

    updateSelectedGoal();
    updateDashboardStats();
    updateWelcomeName();


    // ==================================================
    // PREVENT ACCIDENTAL BUTTON SUBMISSION
    // ==================================================

    document
        .querySelectorAll(
            "button"
        )
        .forEach(
            button => {

                if (
                    !button.getAttribute(
                        "type"
                    )
                ) {

                    button.setAttribute(
                        "type",
                        "button"
                    );
                }
            }
        );


    // ==================================================
    // DONE
    // ==================================================

    console.log(
        "SkillMirror AI initialized successfully."
    );

    });
 
/* ===== SKILLMIRROR MENU FIX ===== */

(function () {
    const menuButton = document.getElementById("menuButton");
    const closeMenuButton = document.getElementById("closeMenu");
    const menuPanel = document.getElementById("menuPanel");
    const menuOverlay = document.getElementById("menuOverlay");

    function closeSkillMenu() {
        if (menuPanel) {
            menuPanel.style.transform = "translateX(100%)";
            menuPanel.style.right = "-320px";
            menuPanel.classList.remove("open", "active");
        }

        if (menuOverlay) {
            menuOverlay.style.display = "none";
            menuOverlay.classList.remove("open", "active");
        }
    }

    function openSkillMenu() {
        if (menuPanel) {
            menuPanel.style.display = "block";
            menuPanel.style.right = "0";
            menuPanel.style.transform = "translateX(0)";
            menuPanel.classList.add("open", "active");
        }

        if (menuOverlay) {
            menuOverlay.style.display = "block";
            menuOverlay.classList.add("open", "active");
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            openSkillMenu();
        });
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener("click", function (event) {
            event.preventDefault();
            closeSkillMenu();
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeSkillMenu);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeSkillMenu();
        }
    });
})();

/* ==========================================
   SKILLMIRROR AI — QUICK ACTION: ASK AI
========================================== */

(function () {
    const askButton = document.getElementById("quickAskBtn");
    const askScreen = document.getElementById("quickAskScreen");
    const backButton = document.getElementById("quickAskBackBtn");
    const askForm = document.getElementById("quickAskForm");
    const askInput = document.getElementById("quickAskInput");
    const submitButton = document.getElementById("quickAskSubmitBtn");
    const statusBox = document.getElementById("quickAskStatus");
    const answerBox = document.getElementById("quickAskAnswerBox");
    const answerText = document.getElementById("quickAskAnswer");

    function openAskAI() {
        // Hide the other main screens first
        [
            "loginScreen",
            "signupScreen",
            "forgotScreen",
            "goalScreen",
            "home",
            "roadmapScreen",
            "performanceScreen",
            "aiClassScreen",
            "askTeacherScreen",
            "classQuestionScreen"
        ].forEach(function (id) {
            const screen = document.getElementById(id);
            if (screen) screen.style.display = "none";
        });

        if (askScreen) {
            askScreen.style.display = "block";
        }

        // Close the side menu if it is open
        const menuPanel = document.getElementById("menuPanel");
        const menuOverlay = document.getElementById("menuOverlay");

        if (menuPanel) {
            menuPanel.style.right = "-320px";
            menuPanel.style.transform = "translateX(100%)";
            menuPanel.classList.remove("open", "active");
        }

        if (menuOverlay) {
            menuOverlay.style.display = "none";
            menuOverlay.classList.remove("open", "active");
        }

        if (statusBox) statusBox.textContent = "";
        if (answerBox) answerBox.style.display = "none";

        window.scrollTo(0, 0);

        if (askInput) askInput.focus();
    }

    function goBackToDashboard() {
        if (askScreen) askScreen.style.display = "none";

        const dashboard = document.getElementById("home");

        if (dashboard) {
            dashboard.style.display = "block";
        }

        window.scrollTo(0, 0);
    }

    if (askButton) {
        askButton.addEventListener("click", function (event) {
            event.preventDefault();
            openAskAI();
        });
    } else {
        console.warn(
            "Ask AI button not found. Check id='quickAskBtn' in index.html."
        );
    }

    if (backButton) {
        backButton.addEventListener("click", goBackToDashboard);
    }

    if (askForm) {
        askForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const question = askInput.value.trim();
            if (!question) {
                statusBox.textContent = "Please enter your question first.";
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = "✨ AI is preparing your explanation...";
            statusBox.textContent = "Finding a clear, student-friendly explanation...";
            answerBox.style.display = "none";
            answerText.textContent = "";

            const prompt =
                "You are SkillMirror AI, a friendly teacher for students. " +
                "Answer this student question: " + question + "\n\n" +
                "Explain in simple English. Structure your response as:\n" +
                "1. Direct Answer\n" +
                "2. Simple Explanation\n" +
                "3. A clear example\n" +
                "4. Key points to remember\n" +
                "Keep it accurate, helpful, and easy for a student to understand.";

            try {
                const response = await fetch("/api/teacher", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        question: prompt,
                        message: prompt
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.error || data.message ||
                        "The AI service could not answer right now."
                    );
                }

                const answer =
                    data.answer ||
                    data.response ||
                    data.reply ||
                    data.explanation ||
                    data.result;

                if (!answer) {
                    throw new Error(
                        data.error ||
                        data.message ||
                        "No answer was returned. Please try again."
                    );
                }

                answerText.textContent = answer;
                answerBox.style.display = "block";
                statusBox.textContent = "Your explanation is ready!";

            } catch (error) {
                console.error("SkillMirror Ask AI error:", error);

                statusBox.textContent =
                    "AI response nahi aa raha. Please try again. " +
                    (error.message || "");
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = "✨ Ask AI & Get Explanation";
            }
        });
    }
})();


/* ==========================================
   SKILLMIRROR AI — VOICE MOCK INTERVIEW
========================================== */

(function () {
    const $ = id => document.getElementById(id);

    const interviewBtn = $("quickInterviewBtn");
    const interviewScreen = $("quickInterviewScreen");
    const backBtn = $("interviewBackBtn");
    const typeSelect = $("interviewType");
    const startBtn = $("startInterviewBtn");
    const questionArea = $("interviewQuestionArea");
    const questionText = $("interviewQuestion");
    const answerInput = $("interviewAnswer");
    const submitBtn = $("submitInterviewAnswerBtn");
    const feedbackBox = $("interviewFeedback");
    const nextBtn = $("nextInterviewBtn");
    const statusBox = $("interviewStatus");
    const micBtn = $("interviewMicBtn");
    const replayBtn = $("replayInterviewQuestionBtn");
    const voiceStatus = $("interviewVoiceStatus");

    let questions = [];
    let currentQuestion = 0;
    let isAnswerSubmitted = false;
    let recognition = null;
    let isListening = false;
    let voiceRun = 0;

    const questionSets = {
        HR: [
            "Tell me about yourself.",
            "What are your strengths?",
            "Why should we select you?",
            "Describe a challenge you solved.",
            "What are your career goals?"
        ],
        Technical: [
            "What is Artificial Intelligence? Give an example.",
            "What is the difference between a list and a tuple in Python?",
            "What is a variable in programming?",
            "Explain the difference between AI and Machine Learning.",
            "What is an algorithm?"
        ],
        Mixed: [
            "Tell me about yourself and your technical interests.",
            "What is Artificial Intelligence? Give an example.",
            "What are your strengths as a student?",
            "Describe a project you would like to build.",
            "How do you solve a difficult problem?"
        ]
    };

    function stopSpeaking() {
        voiceRun++;
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    }

    function speak(text, onDone) {
        stopSpeaking();

        if (!("speechSynthesis" in window)) {
            if (voiceStatus) {
                voiceStatus.textContent =
                    "Voice playback is not supported in this browser. You can still read the question.";
            }
            if (onDone) onDone();
            return;
        }

        const thisRun = voiceRun;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-IN";
        utterance.rate = 0.92;
        utterance.pitch = 1;

        utterance.onstart = function () {
            if (thisRun === voiceRun && voiceStatus) {
                voiceStatus.textContent = "🔊 AI interviewer is speaking...";
            }
        };

        utterance.onend = function () {
            if (thisRun !== voiceRun) return;
            if (voiceStatus) {
                voiceStatus.textContent =
                    "Your turn! Speak using the microphone or type your answer.";
            }
            if (onDone) onDone();
        };

        utterance.onerror = function () {
            if (thisRun === voiceRun && voiceStatus) {
                voiceStatus.textContent =
                    "Could not play voice. You can still read and answer the question.";
            }
        };

        window.speechSynthesis.speak(utterance);
    }

    function stopListening() {
        if (recognition && isListening) {
            recognition.stop();
        }
    }

    function closeMenu() {
        const panel = $("menuPanel");
        const overlay = $("menuOverlay");

        if (panel) {
            panel.style.right = "-320px";
            panel.style.transform = "translateX(100%)";
            panel.classList.remove("open", "active");
        }
        if (overlay) {
            overlay.style.display = "none";
            overlay.classList.remove("open", "active");
        }
    }

    function openInterviewScreen() {
        stopSpeaking();
        stopListening();

        [
            "loginScreen", "signupScreen", "forgotScreen", "goalScreen",
            "home", "roadmapScreen", "performanceScreen", "aiClassScreen",
            "askTeacherScreen", "classQuestionScreen", "quickAskScreen"
        ].forEach(id => {
            const screen = $(id);
            if (screen) screen.style.display = "none";
        });

        if (interviewScreen) interviewScreen.style.display = "block";
        closeMenu();
        questionArea.style.display = "none";
        statusBox.textContent = "";
        voiceStatus.textContent =
            "Choose an interview type and start when you're ready.";
        startBtn.textContent = "Start Interview";
        window.scrollTo(0, 0);
    }

    function backToDashboard() {
        stopSpeaking();
        stopListening();

        if (interviewScreen) interviewScreen.style.display = "none";
        if ($("home")) $("home").style.display = "block";

        window.scrollTo(0, 0);
    }

    function displayQuestion() {
        stopSpeaking();
        stopListening();

        if (currentQuestion >= questions.length) {
            questionArea.style.display = "none";
            statusBox.textContent =
                "Interview completed! Great effort. You can practise again anytime.";
            startBtn.textContent = "Practise Again";
            return;
        }

        questionText.textContent = questions[currentQuestion];
        answerInput.value = "";
        answerInput.disabled = false;
        feedbackBox.textContent = "";
        feedbackBox.style.display = "none";
        nextBtn.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Answer for AI Feedback";
        isAnswerSubmitted = false;
        questionArea.style.display = "block";

        statusBox.textContent =
            "Question " + (currentQuestion + 1) + " of " + questions.length;

        // Automatically speak each new interview question
        speak(questions[currentQuestion]);
    }

    function startVoiceAnswer() {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            voiceStatus.textContent =
                "Voice input is not supported here. Try Chrome on your computer, or type your answer.";
            return;
        }

        if (isListening) {
            stopListening();
            return;
        }

        stopSpeaking();

        recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.continuous = false;
        recognition.interimResults = true;

        let finalTranscript = "";

        recognition.onstart = function () {
            isListening = true;
            micBtn.textContent = "⏹️ Stop Recording";
            voiceStatus.textContent =
                "🎙️ Listening... Speak clearly in English.";
        };

        recognition.onresult = function (event) {
            let interimTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;

                if (event.results[i].isFinal) {
                    finalTranscript += transcript + " ";
                } else {
                    interimTranscript += transcript;
                }
            }

            answerInput.value =
                (finalTranscript + interimTranscript).trim();
        };

        recognition.onerror = function (event) {
            voiceStatus.textContent =
                event.error === "not-allowed"
                    ? "Microphone permission denied. Allow microphone access in your browser settings, or type your answer."
                    : "Could not capture voice. Try again or type your answer.";
        };

        recognition.onend = function () {
            isListening = false;
            micBtn.textContent = "🎙️ Answer by Voice";

            if (answerInput.value.trim()) {
                voiceStatus.textContent =
                    "Voice answer captured! You can edit it or submit it.";
            } else {
                voiceStatus.textContent =
                    "No speech captured. Try again or type your answer.";
            }
        };

        try {
            recognition.start();
        } catch (error) {
            isListening = false;
            micBtn.textContent = "🎙️ Answer by Voice";
            voiceStatus.textContent =
                "Could not start microphone. Please try again.";
        }
    }

    async function submitAnswer() {
        const answer = answerInput.value.trim();

        if (!answer) {
            statusBox.textContent =
                "Please speak or type your answer first.";
            answerInput.focus();
            return;
        }

        if (isAnswerSubmitted) return;

        stopSpeaking();
        stopListening();

        submitBtn.disabled = true;
        answerInput.disabled = true;
        submitBtn.textContent = "AI is reviewing your answer...";
        statusBox.textContent = "Preparing your feedback...";
        feedbackBox.style.display = "none";

        const prompt =
            "You are SkillMirror AI, a supportive mock interview coach.\n" +
            "Interview type: " + typeSelect.value + "\n" +
            "Question: " + questions[currentQuestion] + "\n" +
            "Student answer: " + answer + "\n\n" +
            "Give feedback in simple English. Include:\n" +
            "1. Strengths in the answer\n" +
            "2. What to improve\n" +
            "3. A sample improved answer\n" +
            "4. One practical tip.\n" +
            "Be constructive and never invent things the student said.";

        try {
            const response = await fetch("/api/teacher", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    question: prompt,
                    message: prompt
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || data.message || "AI feedback request failed."
                );
            }

            const feedback =
                data.answer || data.response || data.reply ||
                data.explanation || data.result;

            if (!feedback) {
                throw new Error(
                    data.error || data.message || "No feedback was returned."
                );
            }

            feedbackBox.textContent = feedback;
            feedbackBox.style.display = "block";
            isAnswerSubmitted = true;
            nextBtn.style.display = "block";
            nextBtn.textContent =
                currentQuestion < questions.length - 1
                    ? "Next Question →"
                    : "Finish Interview";

            statusBox.textContent = "Feedback ready!";

            // Read the feedback aloud too
            speak(feedback);

        } catch (error) {
            console.error("Mock interview error:", error);
            statusBox.textContent =
                "AI feedback nahi aa raha. " + (error.message || "Please try again.");
            answerInput.disabled = false;
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Answer for AI Feedback";
        }
    }

    if (interviewBtn) {
        interviewBtn.addEventListener("click", event => {
            event.preventDefault();
            openInterviewScreen();
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", backToDashboard);
    }

    if (startBtn) {
        startBtn.addEventListener("click", function () {
            questions = questionSets[typeSelect.value] || questionSets.HR;
            currentQuestion = 0;
            displayQuestion();
        });
    }

    if (micBtn) {
        micBtn.addEventListener("click", startVoiceAnswer);
    }

    if (replayBtn) {
        replayBtn.addEventListener("click", function () {
            if (questions[currentQuestion]) {
                speak(questions[currentQuestion]);
            }
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener("click", submitAnswer);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            if (!isAnswerSubmitted) return;
            currentQuestion++;
            displayQuestion();
        });
    }
})();

/* =========================================================
   SKILLMIRROR AI — PRACTICE TESTS
   Fixed MCQs + AI Questions + Adaptive Difficulty
   Independent module: preserves existing app logic
========================================================= */

(function () {
    "use strict";

    const $ = id => document.getElementById(id);

    const screen = $("practiceTestScreen");
    const setupPanel = $("practiceSetup");
    const questionPanel = $("practiceQuestionPanel");
    const resultPanel = $("practiceResultPanel");

    if (!screen || screen.dataset.practiceInitialized === "true") {
        return;
    }

    screen.dataset.practiceInitialized = "true";

    const topicSelect = $("practiceTopic");
    const modeSelect = $("practiceMode");
    const startBtn = $("startPracticeTestBtn");
    const backBtn = $("practiceTestBackBtn");
    const homeBtn = $("practiceResultHomeBtn");
    const retryBtn = $("retryPracticeTestBtn");
    const checkBtn = $("checkPracticeAnswerBtn");
    const nextBtn = $("nextPracticeQuestionBtn");

    const questionText = $("practiceQuestionText");
    const optionsBox = $("practiceOptions");
    const feedbackBox = $("practiceAnswerFeedback");
    const questionStatus = $("practiceQuestionStatus");
    const setupStatus = $("practiceSetupStatus");

    let questions = [];
    let currentIndex = 0;
    let selectedAnswer = null;
    let answered = false;
    let correctCount = 0;
    let wrongCount = 0;
    let answerHistory = [];
    let currentLevel = "easy";
    let correctStreak = 0;
    let wrongStreak = 0;
    let sessionTopic = "";
    let sessionMode = "mixed";
    let starting = false;

    const levelOrder = ["easy", "medium", "hard"];

    /* -----------------------------------------------------
       FIXED QUESTION BANK
    ----------------------------------------------------- */

    const questionBank = {
        "Python": [
            {
                q: "Which keyword is used to define a function in Python?",
                options: ["function", "def", "fun", "define"],
                answer: 1,
                explanation: "Python uses the def keyword to define a function.",
                level: "easy"
            },
            {
                q: "Which data type stores True or False?",
                options: ["str", "int", "bool", "list"],
                answer: 2,
                explanation: "The bool data type stores Boolean values: True or False.",
                level: "easy"
            },
            {
                q: "What is the output of len([10, 20, 30])?",
                options: ["2", "3", "10", "30"],
                answer: 1,
                explanation: "The list contains three elements, so len() returns 3.",
                level: "medium"
            },
            {
                q: "Which collection stores unique elements?",
                options: ["List", "Tuple", "Set", "String"],
                answer: 2,
                explanation: "A set stores unique elements and removes duplicates.",
                level: "medium"
            },
            {
                q: "What is the main purpose of __init__ in a Python class?",
                options: [
                    "To delete an object",
                    "To initialize a new object's attributes",
                    "To import a module",
                    "To end a loop"
                ],
                answer: 1,
                explanation: "__init__ initializes an instance when a class object is created.",
                level: "hard"
            },
            {
                q: "What does a Python decorator generally do?",
                options: [
                    "Changes a variable into an integer",
                    "Adds or modifies a function's behavior",
                    "Stops every loop",
                    "Creates a database automatically"
                ],
                answer: 1,
                explanation: "A decorator wraps a function or class to extend its behavior.",
                level: "hard"
            }
        ],

        "AI and Machine Learning": [
            {
                q: "What does AI stand for?",
                options: [
                    "Automatic Internet",
                    "Artificial Intelligence",
                    "Advanced Input",
                    "Applied Information"
                ],
                answer: 1,
                explanation: "AI stands for Artificial Intelligence.",
                level: "easy"
            },
            {
                q: "Which is an example of supervised learning?",
                options: [
                    "Learning from labelled examples",
                    "Grouping data without labels",
                    "Randomly deleting data",
                    "Turning off a model"
                ],
                answer: 0,
                explanation: "Supervised learning uses labelled examples to learn patterns.",
                level: "easy"
            },
            {
                q: "What is a feature in a machine-learning dataset?",
                options: [
                    "A model error only",
                    "An input variable used for prediction",
                    "The computer's screen",
                    "A type of keyboard"
                ],
                answer: 1,
                explanation: "Features are input variables that help a model make predictions.",
                level: "medium"
            },
            {
                q: "What is overfitting?",
                options: [
                    "A model performs well on training data but poorly on unseen data",
                    "A model has no parameters",
                    "A dataset has no rows",
                    "A computer has too much storage"
                ],
                answer: 0,
                explanation: "Overfitting means a model learns training data too specifically and generalizes poorly.",
                level: "medium"
            },
            {
                q: "Why is a separate test dataset used?",
                options: [
                    "To increase training labels",
                    "To estimate performance on unseen data",
                    "To remove every feature",
                    "To guarantee 100% accuracy"
                ],
                answer: 1,
                explanation: "Unseen test data helps evaluate how well a model generalizes.",
                level: "hard"
            },
            {
                q: "What does gradient descent try to do during optimization?",
                options: [
                    "Increase all weights indefinitely",
                    "Reduce a loss function by updating parameters",
                    "Remove all training examples",
                    "Convert labels into images"
                ],
                answer: 1,
                explanation: "Gradient descent updates parameters in a direction intended to reduce the loss.",
                level: "hard"
            }
        ],

        "Web Development": [
            {
                q: "Which language is primarily used to structure a web page?",
                options: ["HTML", "SQL", "Python only", "C"],
                answer: 0,
                explanation: "HTML defines the structure and content of web pages.",
                level: "easy"
            },
            {
                q: "Which CSS property changes text color?",
                options: ["font-style", "background", "color", "text-weight"],
                answer: 2,
                explanation: "The CSS color property sets the foreground text color.",
                level: "easy"
            },
            {
                q: "What does CSS Flexbox help with?",
                options: [
                    "Arranging elements in a layout",
                    "Storing passwords",
                    "Running SQL queries",
                    "Sending emails by itself"
                ],
                answer: 0,
                explanation: "Flexbox helps arrange and align items within a container.",
                level: "medium"
            },
            {
                q: "Which HTML attribute connects a label to a form input by ID?",
                options: ["src", "for", "href", "alt"],
                answer: 1,
                explanation: "The label's for attribute should match the input's id.",
                level: "medium"
            },
            {
                q: "What is the purpose of a CSS media query?",
                options: [
                    "To make layouts respond to device or viewport conditions",
                    "To create a database",
                    "To encrypt HTML",
                    "To replace JavaScript entirely"
                ],
                answer: 0,
                explanation: "Media queries apply CSS rules based on conditions such as viewport width.",
                level: "hard"
            },
            {
                q: "What does semantic HTML primarily improve?",
                options: [
                    "Meaningful document structure and accessibility",
                    "Internet speed in every situation",
                    "Automatic database backups",
                    "Image resolution"
                ],
                answer: 0,
                explanation: "Semantic elements communicate the meaning and structure of page content.",
                level: "hard"
            }
        ],

        "JavaScript": [
            {
                q: "Which keyword declares a block-scoped variable that can be reassigned?",
                options: ["const", "let", "static", "define"],
                answer: 1,
                explanation: "let declares a block-scoped variable that can be reassigned.",
                level: "easy"
            },
            {
                q: "Which symbol is used for strict equality?",
                options: ["=", "==", "===", "!="],
                answer: 2,
                explanation: "=== compares values without performing type coercion.",
                level: "easy"
            },
            {
                q: "What does document.getElementById() return when the ID exists?",
                options: [
                    "The matching DOM element",
                    "A CSS file",
                    "A new database",
                    "A random number"
                ],
                answer: 0,
                explanation: "It returns the element whose id matches the supplied string.",
                level: "medium"
            },
            {
                q: "Which array method creates a new array by transforming each item?",
                options: ["push()", "map()", "pop()", "alert()"],
                answer: 1,
                explanation: "map() returns a new array containing the callback results.",
                level: "medium"
            },
            {
                q: "What does async/await help with?",
                options: [
                    "Writing asynchronous code in a more readable style",
                    "Styling HTML headings",
                    "Creating CSS colors",
                    "Deleting browser events"
                ],
                answer: 0,
                explanation: "async/await provides readable syntax for working with promises.",
                level: "hard"
            },
            {
                q: "What does event delegation commonly rely on?",
                options: [
                    "Handling bubbled events on a shared ancestor",
                    "Creating a new server for every button",
                    "Removing all event listeners",
                    "Changing every element's ID"
                ],
                answer: 0,
                explanation: "An ancestor can handle bubbled events from its descendant elements.",
                level: "hard"
            }
        ],

        "General Aptitude": [
            {
                q: "What is 25% of 200?",
                options: ["25", "40", "50", "75"],
                answer: 2,
                explanation: "25% is one quarter, and 200 divided by 4 equals 50.",
                level: "easy"
            },
            {
                q: "Find the next number: 2, 4, 6, 8, __",
                options: ["9", "10", "12", "16"],
                answer: 1,
                explanation: "The sequence increases by 2 each time.",
                level: "easy"
            },
            {
                q: "A product costs ₹800 after a 20% discount. What was its original price?",
                options: ["₹900", "₹960", "₹1,000", "₹1,200"],
                answer: 2,
                explanation: "₹800 represents 80% of the original price; 800 ÷ 0.8 = 1000.",
                level: "medium"
            },
            {
                q: "The average of 12, 18 and 24 is:",
                options: ["16", "18", "20", "22"],
                answer: 1,
                explanation: "(12 + 18 + 24) ÷ 3 = 18.",
                level: "medium"
            },
            {
                q: "A car travels 150 km in 3 hours. What is its average speed?",
                options: ["30 km/h", "45 km/h", "50 km/h", "60 km/h"],
                answer: 2,
                explanation: "Average speed = distance ÷ time = 150 ÷ 3 = 50 km/h.",
                level: "hard"
            },
            {
                q: "If 5 workers finish a job in 12 days at the same rate, how many days would 10 workers need?",
                options: ["3 days", "6 days", "10 days", "24 days"],
                answer: 1,
                explanation: "The total work is 5 × 12 = 60 worker-days. 60 ÷ 10 = 6 days.",
                level: "hard"
            }
        ]
    };

    /* -----------------------------------------------------
       SCREEN NAVIGATION
    ----------------------------------------------------- */

    function hideOtherScreens() {
        [
            "loginScreen",
            "signupScreen",
            "forgotScreen",
            "goalScreen",
            "home",
            "aiClassScreen",
            "askTeacherScreen",
            "quickAskScreen",
            "quickInterviewScreen",
            "roadmapScreen",
            "performanceScreen",
            "practiceTestScreen"
        ].forEach(id => {
            const element = $(id);
            if (element) element.style.display = "none";
        });
    }

    function openPracticeScreen() {
        hideOtherScreens();
        screen.style.display = "block";
        resetPanels();
        closeSideMenu();
    }

    function closeSideMenu() {
        const menu = $("menuPanel");
        const overlay = $("menuOverlay");

        if (menu) {
            menu.classList.remove("open", "active");
        }

        if (overlay) {
            overlay.classList.remove("open", "active");
        }

        document.body.classList.remove("menu-open");
    }

    function goHome() {
        screen.style.display = "none";

        // Prefer the app's existing dashboard navigation.
        const homeNav = $("homeNav");

        if (homeNav) {
            homeNav.click();
        } else {
            const home = $("home");
            if (home) home.style.display = "block";
        }
    }

    function resetPanels() {
        setupPanel.style.display = "block";
        questionPanel.style.display = "none";
        resultPanel.style.display = "none";

        setupStatus.textContent = "";
        questionStatus.textContent = "";
    }

    /* -----------------------------------------------------
       TOPIC AND FIXED QUESTION HELPERS
    ----------------------------------------------------- */

    function getTopic() {
        const selected = topicSelect.value;

        if (selected !== "Career Goal") {
            return selected;
        }

        const goalElement = $("selectedGoalText");
        const goal = goalElement ? goalElement.textContent.trim() : "";

        if (/python/i.test(goal)) return "Python";
        if (/ai|machine learning|data scientist/i.test(goal)) {
            return "AI and Machine Learning";
        }
        if (/javascript/i.test(goal)) return "JavaScript";
        if (/web|full stack|front.?end/i.test(goal)) return "Web Development";
        if (/data analyst/i.test(goal)) return "General Aptitude";

        return "Python";
    }

    function getFixedQuestions(topic) {
        const bank = questionBank[topic] || questionBank.Python;

        return bank.map(q => ({
            q: q.q,
            options: q.options.slice(),
            answer: q.answer,
            explanation: q.explanation,
            level: q.level,
            source: "Fixed"
        }));
    }

    function shuffle(items) {
        const result = items.slice();

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    /* -----------------------------------------------------
       AI QUESTION GENERATION
    ----------------------------------------------------- */

    function extractAIText(data) {
        if (typeof data === "string") return data;

        return (
            data.answer ||
            data.response ||
            data.reply ||
            data.explanation ||
            data.result ||
            data.message ||
            ""
        );
    }

    function parseAIQuestions(text) {
        if (!text) return [];

        let cleaned = String(text)
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();

        const firstArray = cleaned.indexOf("[");
        const lastArray = cleaned.lastIndexOf("]");

        if (firstArray !== -1 && lastArray > firstArray) {
            cleaned = cleaned.slice(firstArray, lastArray + 1);
        } else {
            const firstObject = cleaned.indexOf("{");
            const lastObject = cleaned.lastIndexOf("}");

            if (firstObject === -1 || lastObject <= firstObject) {
                return [];
            }

            cleaned = cleaned.slice(firstObject, lastObject + 1);
        }

        try {
            let parsed = JSON.parse(cleaned);

            if (!Array.isArray(parsed)) {
                parsed = parsed.questions || parsed.items || [];
            }

            return parsed.map(item => {
                const options = item.options || item.choices || [];
                const rawAnswer = item.answerIndex ?? item.correctIndex ?? item.answer;
                let answer = Number(rawAnswer);

                if (!Number.isInteger(answer) || answer < 0 || answer >= options.length) {
                    const letter = String(rawAnswer || "")
                        .trim()
                        .toUpperCase()
                        .replace(/[^A-D]/g, "");

                    answer = ["A", "B", "C", "D"].indexOf(letter);

                    if (answer < 0) {
                        answer = options.findIndex(option =>
                            String(option).trim().toLowerCase() ===
                            String(rawAnswer).trim().toLowerCase()
                        );
                    }
                }

                const level = String(item.difficulty || item.level || "medium").toLowerCase();

                return {
                    q: String(item.question || item.q || "").trim(),
                    options: options.map(option => String(option)),
                    answer,
                    explanation: String(item.explanation || "Review the correct answer to strengthen your understanding."),
                    level: levelOrder.includes(level) ? level : "medium",
                    source: "AI"
                };
            }).filter(q =>
                q.q &&
                q.options.length === 4 &&
                Number.isInteger(q.answer) &&
                q.answer >= 0 &&
                q.answer < q.options.length
            );
        } catch (error) {
            console.warn("Could not parse AI-generated questions.", error);
            return [];
        }
    }

    async function generateAIQuestions(topic) {
        const prompt = `
Create exactly 6 educational multiple-choice questions for a student practice test.

Subject: ${topic}
Difficulty: 2 easy, 2 medium, 2 hard.
Requirements:
- Every question must have exactly four answer options.
- There must be exactly one correct answer per question.
- Keep questions accurate, clear, and appropriate for a college student.
- Use different concepts across the questions.
- Return ONLY valid JSON. Do not use Markdown or code fences.
- Use this exact schema:
[
  {
    "question": "Question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answerIndex": 0,
    "difficulty": "easy",
    "explanation": "Brief explanation"
  }
]
The answerIndex must be a zero-based integer from 0 to 3.
`;

        try {
            const response = await fetch("/api/teacher", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    question: prompt,
                    message: prompt
                })
            });

            if (!response.ok) {
                throw new Error("AI question service returned HTTP " + response.status);
            }

            const data = await response.json();
            const questionsFromAI = parseAIQuestions(extractAIText(data));

            if (questionsFromAI.length < 3) {
                throw new Error("AI returned too few valid questions.");
            }

            return shuffle(questionsFromAI);
        } catch (error) {
            console.warn("AI question generation unavailable; fixed questions will be used.", error);
            return [];
        }
    }

    /* -----------------------------------------------------
       BUILD A TEST SESSION
    ----------------------------------------------------- */

    async function startTest() {
        if (starting) return;

        starting = true;
        startBtn.disabled = true;
        setupStatus.textContent = "Preparing your adaptive test…";

        sessionTopic = getTopic();
        sessionMode = modeSelect.value;

        let fixed = shuffle(getFixedQuestions(sessionTopic));
        let ai = [];

        if (sessionMode === "ai" || sessionMode === "mixed") {
            setupStatus.textContent = "Preparing questions. AI mode may take a little longer…";
            ai = await generateAIQuestions(sessionTopic);
        }

        if (sessionMode === "ai" && ai.length >= 3) {
            questions = ai.slice(0, 5);
        } else if (sessionMode === "mixed" && ai.length >= 2) {
            questions = [
                ...fixed.slice(0, 3),
                ...ai.slice(0, 2)
            ];
        } else {
            questions = fixed.slice(0, 5);

            if (sessionMode !== "fixed") {
                setupStatus.textContent =
                    "AI questions are unavailable right now. Your fixed-question test is ready.";
            }
        }

        if (!questions.length) {
            setupStatus.textContent = "No questions could be loaded. Please try again.";
            startBtn.disabled = false;
            starting = false;
            return;
        }

        currentIndex = 0;
        selectedAnswer = null;
        answered = false;
        correctCount = 0;
        wrongCount = 0;
        answerHistory = [];
        currentLevel = "easy";
        correctStreak = 0;
        wrongStreak = 0;

        setupPanel.style.display = "none";
        resultPanel.style.display = "none";
        questionPanel.style.display = "block";

        starting = false;
        startBtn.disabled = false;
        setupStatus.textContent = "";

        renderQuestion();
    }

    /* -----------------------------------------------------
       ADAPTIVE DIFFICULTY
    ----------------------------------------------------- */

    function adjustDifficulty(wasCorrect) {
        if (wasCorrect) {
            correctStreak++;
            wrongStreak = 0;

            if (correctStreak >= 2) {
                const index = levelOrder.indexOf(currentLevel);

                if (index < levelOrder.length - 1) {
                    currentLevel = levelOrder[index + 1];
                }

                correctStreak = 0;
            }
        } else {
            wrongStreak++;
            correctStreak = 0;

            if (wrongStreak >= 2) {
                const index = levelOrder.indexOf(currentLevel);

                if (index > 0) {
                    currentLevel = levelOrder[index - 1];
                }

                wrongStreak = 0;
            }
        }
    }

    function chooseNextQuestion() {
        const remaining = questions
            .map((question, index) => ({ question, index }))
            .filter(item => !answerHistory.some(record => record.index === item.index));

        if (!remaining.length) return -1;

        const sameLevel = remaining.find(item => item.question.level === currentLevel);

        if (sameLevel) return sameLevel.index;

        const easier = remaining.find(item =>
            levelOrder.indexOf(item.question.level) <= levelOrder.indexOf(currentLevel)
        );

        if (easier) return easier.index;

        return remaining[0].index;
    }

    /* -----------------------------------------------------
       DISPLAY QUESTIONS
    ----------------------------------------------------- */

    function renderQuestion() {
        selectedAnswer = null;
        answered = false;

        const question = questions[currentIndex];

        if (!question) {
            showResults();
            return;
        }

        $("practiceQuestionNumber").textContent =
            "QUESTION " + (answerHistory.length + 1);

        const badge = $("practiceDifficultyBadge");
        badge.textContent = question.level.toUpperCase();
        badge.dataset.level = question.level;

        $("practiceProgressFill").style.width =
            (answerHistory.length / questions.length * 100) + "%";

        $("practiceProgressText").textContent =
            "Question " + (answerHistory.length + 1) +
            " of " + questions.length;

        questionText.textContent = question.q;
        optionsBox.replaceChildren();

        feedbackBox.style.display = "none";
        feedbackBox.textContent = "";
        questionStatus.textContent = "";
        checkBtn.style.display = "block";
        checkBtn.disabled = true;
        nextBtn.style.display = "none";

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "practice-option";

            const letter = document.createElement("span");
            letter.className = "practice-option-letter";
            letter.textContent = String.fromCharCode(65 + index);

            const label = document.createElement("span");
            label.textContent = option;

            button.append(letter, label);

            button.addEventListener("click", () => {
                if (answered) return;

                selectedAnswer = index;

                optionsBox.querySelectorAll(".practice-option").forEach(item => {
                    item.classList.remove("selected");
                });

                button.classList.add("selected");
                checkBtn.disabled = false;
            });

            optionsBox.appendChild(button);
        });
    }

    /* -----------------------------------------------------
       CHECK ANSWER
    ----------------------------------------------------- */

    function checkAnswer() {
        if (answered || selectedAnswer === null) return;

        answered = true;

        const question = questions[currentIndex];
        const isCorrect = selectedAnswer === question.answer;

        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }

        answerHistory.push({
            index: currentIndex,
            question: question.q,
            options: question.options.slice(),
            selectedAnswer,
            correctAnswer: question.answer,
            explanation: question.explanation,
            isCorrect,
            source: question.source,
            level: question.level
        });

        optionsBox.querySelectorAll(".practice-option").forEach((button, index) => {
            button.disabled = true;

            if (index === question.answer) {
                button.classList.add("correct");
            } else if (index === selectedAnswer && !isCorrect) {
                button.classList.add("incorrect");
            }
        });

        feedbackBox.style.display = "block";
        feedbackBox.textContent =
            (isCorrect ? "✅ Correct answer!\n\n" : "💡 Not quite. Review the correct answer.\n\n") +
            "Correct answer: " + question.options[question.answer] +
            "\n\nExplanation: " + question.explanation;

        adjustDifficulty(isCorrect);

        $("practiceProgressFill").style.width =
            (answerHistory.length / questions.length * 100) + "%";

        checkBtn.style.display = "none";

        if (answerHistory.length >= questions.length) {
            nextBtn.textContent = "View Results →";
        } else {
            nextBtn.textContent = "Next Question →";
        }

        nextBtn.style.display = "block";
        questionStatus.textContent =
            "Current adaptive level: " + currentLevel;
    }

    /* -----------------------------------------------------
       NEXT QUESTION
    ----------------------------------------------------- */

    function nextQuestion() {
        if (!answered) return;

        if (answerHistory.length >= questions.length) {
            showResults();
            return;
        }

        const nextIndex = chooseNextQuestion();

        if (nextIndex === -1) {
            showResults();
            return;
        }

        currentIndex = nextIndex;
        renderQuestion();
    }

    /* -----------------------------------------------------
       RESULTS AND ANSWER REVIEW
    ----------------------------------------------------- */

    function showResults() {
        questionPanel.style.display = "none";
        setupPanel.style.display = "none";
        resultPanel.style.display = "block";

        const total = answerHistory.length;
        const percentage = total ? Math.round(correctCount / total * 100) : 0;

        $("practiceFinalScore").textContent = percentage + "%";
        $("practiceCorrectCount").textContent = correctCount;
        $("practiceWrongCount").textContent = wrongCount;
        $("practiceTotalCount").textContent = total;

        let message;

        if (percentage >= 80) {
            message = "Excellent work! You're ready to challenge yourself with harder questions.";
        } else if (percentage >= 50) {
            message = "Good progress! Review the explanations and keep practicing.";
        } else {
            message = "Keep learning! Review each explanation and try another test to improve.";
        }

        $("practiceResultMessage").textContent =
            message + " Adaptive level reached: " + currentLevel + ".";

        const review = $("practiceAnswerReview");
        review.replaceChildren();

        answerHistory.forEach((record, index) => {
            const card = document.createElement("div");
            card.className = "practice-review-item";

            const title = document.createElement("strong");
            title.textContent = (index + 1) + ". " + record.question;

            const yourAnswer = document.createElement("p");
            yourAnswer.className = record.isCorrect ? "review-correct" : "review-incorrect";
            yourAnswer.textContent =
                "Your answer: " + record.options[record.selectedAnswer];

            const correctAnswer = document.createElement("p");
            correctAnswer.className = "review-correct";
            correctAnswer.textContent =
                "Correct answer: " + record.options[record.correctAnswer];

            const explanation = document.createElement("p");
            explanation.textContent = "Explanation: " + record.explanation;

            const meta = document.createElement("p");
            meta.textContent =
                record.source + " question · " + record.level + " difficulty";

            card.append(title, yourAnswer, correctAnswer, explanation, meta);
            review.appendChild(card);
        });
    }

    /* -----------------------------------------------------
       OPEN TEST FROM DASHBOARD OR SIDE MENU
    ----------------------------------------------------- */

    const quickTestsBtn = $("quickTestsBtn");
    const mockTestMenu = $("mockTestMenu");

    if (quickTestsBtn) {
        quickTestsBtn.addEventListener("click", openPracticeScreen);
    }

    if (mockTestMenu) {
        mockTestMenu.addEventListener("click", openPracticeScreen);
    }

    if (backBtn) {
        backBtn.addEventListener("click", goHome);
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", goHome);
    }

    if (retryBtn) {
        retryBtn.addEventListener("click", () => {
            resetPanels();
            startTest();
        });
    }

    if (startBtn) {
        startBtn.addEventListener("click", startTest);
    }

    if (checkBtn) {
        checkBtn.addEventListener("click", checkAnswer);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", nextQuestion);
    }

    /*
       Hide the practice screen when the user navigates to another
       existing screen. Do not interfere with Practice Test controls.
    */
    document.addEventListener("click", event => {
        const navigation = event.target.closest(
            "#homeNav, #roadmapNav, #classesNav, #performanceNav, " +
            "#homeMenu, #roadmapMenu, #classesMenu, #performanceMenu, " +
            "#backFromRoadmap, #backFromPerformance, #backFromAIClass, " +
            "#backFromAskTeacher, #quickAskBackBtn, #interviewBackBtn"
        );

        if (navigation) {
            screen.style.display = "none";
        }
    });

})();