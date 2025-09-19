// Kosakata
const vocabData = [
  // Family & People
  { word: "Mother", meaning: "Ibu", category: "Family", level: "beginner", image: "https://via.placeholder.com/200x150/FF6B6B/FFFFFF?text=Mother", audio: "", example: "My mother is very kind.", pronunciation: "/ˈmʌðər/" },
  { word: "Father", meaning: "Ayah", category: "Family", level: "beginner", image: "https://via.placeholder.com/200x150/4ECDC4/FFFFFF?text=Father", audio: "", example: "Father goes to work.", pronunciation: "/ˈfɑːðər/" },
  { word: "Sister", meaning: "Saudara perempuan", category: "Family", level: "beginner", image: "https://via.placeholder.com/200x150/45B7D1/FFFFFF?text=Sister", audio: "", example: "My sister is younger than me.", pronunciation: "/ˈsɪstər/" },
  { word: "Brother", meaning: "Saudara laki-laki", category: "Family", level: "beginner", image: "https://via.placeholder.com/200x150/96CEB4/FFFFFF?text=Brother", audio: "", example: "My brother likes soccer.", pronunciation: "/ˈbrʌðər/" },
  
  // Food & Drinks
  { word: "Apple", meaning: "Apel", category: "Food", level: "beginner", image: "https://via.placeholder.com/200x150/FF6B6B/FFFFFF?text=Apple", audio: "", example: "I eat an apple every day.", pronunciation: "/ˈæpəl/" },
  { word: "Banana", meaning: "Pisang", category: "Food", level: "beginner", image: "https://via.placeholder.com/200x150/FECA57/FFFFFF?text=Banana", audio: "", example: "The banana is yellow.", pronunciation: "/bəˈnænə/" },
  { word: "Water", meaning: "Air", category: "Food", level: "beginner", image: "https://via.placeholder.com/200x150/3742FA/FFFFFF?text=Water", audio: "", example: "I drink water every morning.", pronunciation: "/ˈwɔːtər/" },
  { word: "Rice", meaning: "Nasi", category: "Food", level: "beginner", image: "https://via.placeholder.com/200x150/F1F2F6/000000?text=Rice", audio: "", example: "We eat rice for lunch.", pronunciation: "/raɪs/" },
  
  // School & Education
  { word: "Book", meaning: "Buku", category: "School", level: "beginner", image: "https://via.placeholder.com/200x150/2F3542/FFFFFF?text=Book", audio: "", example: "This book is very interesting.", pronunciation: "/bʊk/" },
  { word: "Pen", meaning: "Pulpen", category: "School", level: "beginner", image: "https://via.placeholder.com/200x150/FF3838/FFFFFF?text=Pen", audio: "", example: "I write with a pen.", pronunciation: "/pen/" },
  { word: "Teacher", meaning: "Guru", category: "School", level: "beginner", image: "https://via.placeholder.com/200x150/2C2C54/FFFFFF?text=Teacher", audio: "", example: "My teacher is very helpful.", pronunciation: "/ˈtiːtʃər/" },
  { word: "Classroom", meaning: "Ruang kelas", category: "School", level: "intermediate", image: "https://via.placeholder.com/200x150/40407A/FFFFFF?text=Classroom", audio: "", example: "The classroom is clean.", pronunciation: "/ˈklæsruːm/" },
  
  // Animals
  { word: "Cat", meaning: "Kucing", category: "Animals", level: "beginner", image: "https://via.placeholder.com/200x150/FFA502/FFFFFF?text=Cat", audio: "", example: "The cat is sleeping.", pronunciation: "/kæt/" },
  { word: "Dog", meaning: "Anjing", category: "Animals", level: "beginner", image: "https://via.placeholder.com/200x150/FF6348/FFFFFF?text=Dog", audio: "", example: "My dog likes to play.", pronunciation: "/dɔːɡ/" },
  { word: "Bird", meaning: "Burung", category: "Animals", level: "beginner", image: "https://via.placeholder.com/200x150/7BED9F/FFFFFF?text=Bird", audio: "", example: "The bird can fly high.", pronunciation: "/bɜːrd/" },
  { word: "Fish", meaning: "Ikan", category: "Animals", level: "beginner", image: "https://via.placeholder.com/200x150/70A1FF/FFFFFF?text=Fish", audio: "", example: "Fish live in the water.", pronunciation: "/fɪʃ/" },
  
  // Colors
  { word: "Red", meaning: "Merah", category: "Colors", level: "beginner", image: "https://via.placeholder.com/200x150/FF0000/FFFFFF?text=Red", audio: "", example: "The rose is red.", pronunciation: "/red/" },
  { word: "Blue", meaning: "Biru", category: "Colors", level: "beginner", image: "https://via.placeholder.com/200x150/0000FF/FFFFFF?text=Blue", audio: "", example: "The sky is blue.", pronunciation: "/bluː/" },
  { word: "Green", meaning: "Hijau", category: "Colors", level: "beginner", image: "https://via.placeholder.com/200x150/00FF00/FFFFFF?text=Green", audio: "", example: "Grass is green.", pronunciation: "/ɡriːn/" },
  { word: "Yellow", meaning: "Kuning", category: "Colors", level: "beginner", image: "https://via.placeholder.com/200x150/FFFF00/000000?text=Yellow", audio: "", example: "The sun is yellow.", pronunciation: "/ˈjeloʊ/" },
  
  // House & Home
  { word: "House", meaning: "Rumah", category: "Home", level: "beginner", image: "https://via.placeholder.com/200x150/8B4513/FFFFFF?text=House", audio: "", example: "I live in a big house.", pronunciation: "/haʊs/" },
  { word: "Door", meaning: "Pintu", category: "Home", level: "beginner", image: "https://via.placeholder.com/200x150/654321/FFFFFF?text=Door", audio: "", example: "Please close the door.", pronunciation: "/dɔːr/" },
  { word: "Window", meaning: "Jendela", category: "Home", level: "beginner", image: "https://via.placeholder.com/200x150/87CEEB/FFFFFF?text=Window", audio: "", example: "I opened the window.", pronunciation: "/ˈwɪndoʊ/" },
  { word: "Table", meaning: "Meja", category: "Home", level: "beginner", image: "https://via.placeholder.com/200x150/DEB887/000000?text=Table", audio: "", example: "The book is on the table.", pronunciation: "/ˈteɪbəl/" }
];

// Listening Practice Data
const listeningData = [
  // Family Words
  { 
    word: "Mother", 
    audio: "", 
    options: ["Mother", "Father", "Sister"], 
    answer: "Mother",
    category: "Family",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  { 
    word: "Father", 
    audio: "", 
    options: ["Brother", "Father", "Teacher"], 
    answer: "Father",
    category: "Family",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  { 
    word: "Sister", 
    audio: "", 
    options: ["Sister", "Mother", "Teacher"], 
    answer: "Sister",
    category: "Family",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  
  // Food Words
  { 
    word: "Apple", 
    audio: "", 
    options: ["Apple", "Banana", "Water"], 
    answer: "Apple",
    category: "Food",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  { 
    word: "Banana", 
    audio: "", 
    options: ["Apple", "Banana", "Rice"], 
    answer: "Banana",
    category: "Food",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  { 
    word: "Water", 
    audio: "", 
    options: ["Rice", "Water", "Apple"], 
    answer: "Water",
    category: "Food",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  
  // School Words
  { 
    word: "Book", 
    audio: "", 
    options: ["Book", "Pen", "Teacher"], 
    answer: "Book",
    category: "School",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  { 
    word: "Teacher", 
    audio: "", 
    options: ["Student", "Teacher", "Classroom"], 
    answer: "Teacher",
    category: "School",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  
  // Animals
  { 
    word: "Cat", 
    audio: "", 
    options: ["Cat", "Dog", "Bird"], 
    answer: "Cat",
    category: "Animals",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  { 
    word: "Dog", 
    audio: "", 
    options: ["Fish", "Dog", "Cat"], 
    answer: "Dog",
    category: "Animals",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  
  // Colors
  { 
    word: "Red", 
    audio: "", 
    options: ["Red", "Blue", "Green"], 
    answer: "Red",
    category: "Colors",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  { 
    word: "Blue", 
    audio: "", 
    options: ["Yellow", "Blue", "Green"], 
    answer: "Blue",
    category: "Colors",
    level: "beginner",
    instruction: "Dengarkan kata dan pilih jawaban yang benar"
  },
  
  // Sentences - Intermediate Level
  { 
    sentence: "My mother is very kind", 
    audio: "", 
    options: ["My mother is very kind", "My father is very kind", "My sister is very kind"], 
    answer: "My mother is very kind",
    category: "Family",
    level: "intermediate",
    instruction: "Dengarkan kalimat dan pilih jawaban yang benar"
  },
  { 
    sentence: "I eat an apple every day", 
    audio: "", 
    options: ["I eat an apple every day", "I eat a banana every day", "I drink water every day"], 
    answer: "I eat an apple every day",
    category: "Food",
    level: "intermediate",
    instruction: "Dengarkan kalimat dan pilih jawaban yang benar"
  },
  { 
    sentence: "The cat is sleeping", 
    audio: "", 
    options: ["The cat is sleeping", "The dog is playing", "The bird is flying"], 
    answer: "The cat is sleeping",
    category: "Animals",
    level: "intermediate",
    instruction: "Dengarkan kalimat dan pilih jawaban yang benar"
  }
];

// Grammar & Writing Quiz Data
const quizData = [
  // Grammar - Present Tense
  { 
    question: "Choose the correct form: She ___ to school every day.", 
    options: ["go", "goes", "going"], 
    answer: "goes",
    category: "Grammar",
    level: "beginner",
    explanation: "Untuk subjek 'she/he/it' dalam present tense, verb ditambah 's' atau 'es'.",
    type: "grammar"
  },
  { 
    question: "Fill in the blank: I ___ a student.", 
    options: ["am", "is", "are"], 
    answer: "am",
    category: "Grammar",
    level: "beginner",
    explanation: "Untuk subjek 'I' selalu menggunakan 'am'.",
    type: "grammar"
  },
  { 
    question: "Choose the correct form: They ___ playing football.", 
    options: ["is", "are", "am"], 
    answer: "are",
    category: "Grammar",
    level: "beginner",
    explanation: "Untuk subjek 'they' menggunakan 'are'.",
    type: "grammar"
  },
  { 
    question: "Complete: My brother ___ soccer every weekend.", 
    options: ["play", "plays", "playing"], 
    answer: "plays",
    category: "Grammar",
    level: "beginner",
    explanation: "Untuk subjek orang ketiga tunggal (he/she/it) dalam present tense, verb ditambah 's'.",
    type: "grammar"
  },
  
  // Translation - Indonesian to English
  { 
    question: "Translate: 'Saya punya buku.'", 
    options: ["I have a book", "I has a book", "I am book"], 
    answer: "I have a book",
    category: "Translation",
    level: "beginner",
    explanation: "Untuk subjek 'I' menggunakan 'have', bukan 'has'.",
    type: "translation"
  },
  { 
    question: "Translate: 'Ibu saya sangat baik.'", 
    options: ["My mother is very kind", "My mother very kind", "My mother are very kind"], 
    answer: "My mother is very kind",
    category: "Translation",
    level: "beginner",
    explanation: "Dalam bahasa Inggris diperlukan verb 'is' untuk menghubungkan subjek dan adjective.",
    type: "translation"
  },
  { 
    question: "Translate: 'Kucing itu sedang tidur.'", 
    options: ["The cat sleeping", "The cat is sleeping", "The cat sleep"], 
    answer: "The cat is sleeping",
    category: "Translation",
    level: "beginner",
    explanation: "Present continuous tense menggunakan 'is/am/are + verb-ing'.",
    type: "translation"
  },
  { 
    question: "Translate: 'Kami makan nasi setiap hari.'", 
    options: ["We eat rice every day", "We eating rice every day", "We eats rice every day"], 
    answer: "We eat rice every day",
    category: "Translation",
    level: "beginner",
    explanation: "Untuk subjek 'we' dalam present tense menggunakan bentuk dasar verb.",
    type: "translation"
  },
  
  // Vocabulary
  { 
    question: "What is the meaning of 'Teacher'?", 
    options: ["Guru", "Murid", "Sekolah"], 
    answer: "Guru",
    category: "Vocabulary",
    level: "beginner",
    explanation: "'Teacher' dalam bahasa Indonesia berarti 'Guru'.",
    type: "vocabulary"
  },
  { 
    question: "What is the English word for 'Pintu'?", 
    options: ["Window", "Door", "House"], 
    answer: "Door",
    category: "Vocabulary",
    level: "beginner",
    explanation: "'Pintu' dalam bahasa Inggris adalah 'Door'.",
    type: "vocabulary"
  },
  { 
    question: "Choose the correct spelling:", 
    options: ["Aple", "Apple", "Apel"], 
    answer: "Apple",
    category: "Vocabulary",
    level: "beginner",
    explanation: "Ejaan yang benar adalah 'Apple' dengan dua 'p'.",
    type: "vocabulary"
  },
  { 
    question: "What color is the sun?", 
    options: ["Red", "Blue", "Yellow"], 
    answer: "Yellow",
    category: "Vocabulary",
    level: "beginner",
    explanation: "Matahari berwarna kuning (yellow).",
    type: "vocabulary"
  },
  
  // Intermediate Grammar
  { 
    question: "Choose the correct form: I ___ to the market yesterday.", 
    options: ["go", "went", "going"], 
    answer: "went",
    category: "Grammar",
    level: "intermediate",
    explanation: "Past tense dari 'go' adalah 'went'. Kata 'yesterday' menunjukkan waktu lampau.",
    type: "grammar"
  },
  { 
    question: "Complete: She ___ been studying English for two years.", 
    options: ["have", "has", "is"], 
    answer: "has",
    category: "Grammar",
    level: "intermediate",
    explanation: "Present perfect tense: untuk subjek orang ketiga tunggal menggunakan 'has been'.",
    type: "grammar"
  },
  { 
    question: "Choose the correct form: If I ___ rich, I would buy a big house.", 
    options: ["am", "was", "were"], 
    answer: "were",
    category: "Grammar",
    level: "advanced",
    explanation: "Dalam conditional type 2, menggunakan 'were' untuk semua subjek.",
    type: "grammar"
  },
  
  // Writing/Sentence Structure
  { 
    question: "Arrange the words: 'book / read / I / every / night'", 
    options: ["I read book every night", "I read a book every night", "Book I read every night"], 
    answer: "I read a book every night",
    category: "Writing",
    level: "intermediate",
    explanation: "Struktur kalimat yang benar: Subject + Verb + Article + Object + Time.",
    type: "writing"
  },
  { 
    question: "Choose the best sentence:", 
    options: ["My family and I goes to the park", "My family and I go to the park", "My family and I going to the park"], 
    answer: "My family and I go to the park",
    category: "Writing",
    level: "intermediate",
    explanation: "Compound subject 'My family and I' menggunakan verb bentuk jamak 'go'.",
    type: "writing"
  }
];

// Leaderboard Data Structure
const leaderboardData = [
  { 
    name: "Ahmad Rizki", 
    score: 850, 
    level: "Advanced", 
    completedQuizzes: 15, 
    vocabularyMastered: 45,
    streak: 7,
    lastActive: "2025-09-19",
    achievements: ["Grammar Master", "Vocabulary Champion", "Streak Hero"]
  },
  { 
    name: "Siti Nurhaliza", 
    score: 720, 
    level: "Intermediate", 
    completedQuizzes: 12, 
    vocabularyMastered: 38,
    streak: 5,
    lastActive: "2025-09-19",
    achievements: ["Quick Learner", "Vocabulary Explorer"]
  },
  { 
    name: "Budi Santoso", 
    score: 680, 
    level: "Intermediate", 
    completedQuizzes: 10, 
    vocabularyMastered: 35,
    streak: 3,
    lastActive: "2025-09-18",
    achievements: ["Consistent Student", "Grammar Explorer"]
  },
  { 
    name: "Dewi Sartika", 
    score: 590, 
    level: "Beginner", 
    completedQuizzes: 8, 
    vocabularyMastered: 28,
    streak: 4,
    lastActive: "2025-09-19",
    achievements: ["First Steps", "Dedicated Learner"]
  },
  { 
    name: "Rudi Hartono", 
    score: 480, 
    level: "Beginner", 
    completedQuizzes: 6, 
    vocabularyMastered: 22,
    streak: 2,
    lastActive: "2025-09-17",
    achievements: ["Getting Started"]
  }
];
