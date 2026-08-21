import { AssessmentQuestion } from "@/types";

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "q1",
    dimension: "Analytical",
    questionText: "When faced with a complex multi-step math problem or riddle, what is your natural approach?",
    questionTextUrdu: "جب آپ کو کسی پیچیدہ حسابی مسئلے یا معمہ کا سامنا ہو تو آپ کا فطری طریقہ کار کیا ہوتا ہے؟",
    questionTextHindi: "जब आपके सामने कोई जटिल गणितीय समस्या या पहेली आती है, तो आपका स्वाभाविक दृष्टिकोण क्या होता है?",
    options: [
      { label: "I break it down systematically into logical sub-steps and equations.", score: 5, traitIndicator: "Algorithmic Thinker" },
      { label: "I try looking for patterns based on problems I solved before.", score: 4, traitIndicator: "Pattern Recognizer" },
      { label: "I prefer discussing it with peers or mentors to get different perspectives.", score: 3, traitIndicator: "Collaborative Thinker" },
      { label: "I prefer working on creative or visual tasks rather than equations.", score: 2, traitIndicator: "Visual / Intuitive" }
    ]
  },
  {
    id: "q2",
    dimension: "Analytical",
    questionText: "How comfortable are you drawing conclusions from charts, financial graphs, and tabular data?",
    questionTextUrdu: "آپ چارٹس، مالیاتی گراف اور جدول کے ڈیٹا سے نتائج اخذ کرنے میں کتنے مطمئن ہیں؟",
    questionTextHindi: "चार्ट, वित्तीय ग्राफ और तालिका डेटा से निष्कर्ष निकालने में आप कितने सहज हैं?",
    options: [
      { label: "Extremely comfortable; I readily spot outliers, trends, and cause-effect links.", score: 5, traitIndicator: "Data Intuition" },
      { label: "Comfortable; I can analyze trends after reviewing the underlying metrics.", score: 4, traitIndicator: "Structured Analyst" },
      { label: "Moderate; I understand general summaries but avoid deep formula analysis.", score: 3, traitIndicator: "General Comprehension" },
      { label: "Low; I prefer narrative text descriptions over statistical tables.", score: 2, traitIndicator: "Narrative Preference" }
    ]
  },
  {
    id: "q3",
    dimension: "Creative",
    questionText: "When designing a poster, presentation, or writing an essay, what excites you most?",
    questionTextUrdu: "کوئی پوسٹر یا پریزنٹیشن بناتے وقت آپ کو سب سے زیادہ کیا متحرک کرتا ہے؟",
    questionTextHindi: "पोस्टर, प्रेजेंटेशन या निबंध बनाते समय आपको सबसे अधिक क्या आकर्षित करता है?",
    options: [
      { label: "Creating an original visual theme, color harmony, and unique storytelling.", score: 5, traitIndicator: "Aesthetic Visionary" },
      { label: "Structuring the layout cleanly so the core message stands out clearly.", score: 4, traitIndicator: "Visual Communicator" },
      { label: "Ensuring all factual points and references are accurate and cited.", score: 3, traitIndicator: "Detail Oriented" },
      { label: "Finishing it quickly by using an existing standard template.", score: 2, traitIndicator: "Template User" }
    ]
  },
  {
    id: "q4",
    dimension: "Creative",
    questionText: "If asked to improve an everyday traditional craft or local product (like Kashmiri Walnut carving or Saffron packaging), what would you do?",
    questionTextUrdu: "اگر آپ کو روایتی کشمیری دستکاری میں بہتری لانے کا کہا جائے تو آپ کیا کریں گے؟",
    questionTextHindi: "यदि आपको स्थानीय कश्मीरी हस्तशिल्प में नवाचार करने को कहा जाए, तो आप क्या करेंगे?",
    options: [
      { label: "Re-imagine the entire design language for modern global luxury buyers.", score: 5, traitIndicator: "Innovative Designer" },
      { label: "Create a digital e-commerce identity and storytelling campaign.", score: 4, traitIndicator: "Brand Creator" },
      { label: "Optimize the physical supply chain and storage preservation.", score: 3, traitIndicator: "Process Optimizer" },
      { label: "Preserve the exact ancient methods without alteration.", score: 2, traitIndicator: "Traditionalist" }
    ]
  },
  {
    id: "q5",
    dimension: "Technical",
    questionText: "When interacting with a new software tool, phone app, or electronic device, you usually:",
    questionTextUrdu: "جب آپ کوئی نیا سافٹ ویئر، ایپ یا آلہ استعمال کرتے ہیں تو آپ کا رویہ کیا ہوتا ہے؟",
    questionTextHindi: "जब आप किसी नए सॉफ्टवेयर, ऐप या इलेक्ट्रॉनिक उपकरण का उपयोग करते हैं, तो आप:",
    options: [
      { label: "Dig deep into developer settings, write custom scripts, or understand how it works under the hood.", score: 5, traitIndicator: "Core Technologist" },
      { label: "Quickly master all advanced user shortcuts and integrations.", score: 4, traitIndicator: "Power User" },
      { label: "Use the primary features required to get my school/college work done.", score: 3, traitIndicator: "Functional User" },
      { label: "Ask a friend or technician for help whenever an error appears.", score: 2, traitIndicator: "Assisted User" }
    ]
  },
  {
    id: "q6",
    dimension: "Technical",
    questionText: "How interested are you in building algorithms, automated bots, or coding web applications?",
    questionTextUrdu: "کیا آپ کو کوڈنگ اور خودکار کمپیوٹر بوٹس بنانے میں دلچسپی ہے؟",
    questionTextHindi: "एल्गोरिदम बनाने, ऑटोमेशन या वेब एप्लिकेशन कोडिंग में आपकी कितनी रुचि है?",
    options: [
      { label: "Passionate; I already build projects or actively practice on GitHub/LeetCode.", score: 5, traitIndicator: "Active Coder" },
      { label: "High; I understand basic programming logic and want to master AI/Web dev.", score: 4, traitIndicator: "Aspiring Developer" },
      { label: "Moderate; I understand tech concepts conceptually but haven't coded much.", score: 3, traitIndicator: "Conceptual Tech" },
      { label: "Low; I prefer non-technical fields like administration, literature, or law.", score: 2, traitIndicator: "Non-Technical Focus" }
    ]
  },
  {
    id: "q7",
    dimension: "Leadership",
    questionText: "In a group project or school event, which role do you naturally gravitate towards?",
    questionTextUrdu: "گروپ پروجیکٹ میں آپ قدرتی طور پر کس کردار کی طرف مائل ہوتے ہیں؟",
    questionTextHindi: "ग्रुप प्रोजेक्ट में आप स्वाभाविक रूप से किस भूमिका की ओर आकर्षित होते हैं?",
    options: [
      { label: "Leading the team, delegating roles, keeping everyone motivated, and presenting the final outcome.", score: 5, traitIndicator: "Natural Leader" },
      { label: "Facilitating communication, resolving misunderstandings, and organizing schedules.", score: 4, traitIndicator: "Project Coordinator" },
      { label: "Quietly executing the specific technical or research part assigned to me.", score: 3, traitIndicator: "Individual Contributor" },
      { label: "Supporting whatever the group leader instructs without taking personal initiative.", score: 2, traitIndicator: "Follower" }
    ]
  },
  {
    id: "q8",
    dimension: "Leadership",
    questionText: "When faced with an unexpected deadline crisis or roadblock, how do you respond?",
    questionTextUrdu: "غیر متوقع بحران یا آخری تاریخ کے دباؤ کے وقت آپ کا ردعمل کیا ہوتا ہے؟",
    questionTextHindi: "अचानक आई किसी चुनौती या समय-सीमा के संकट में आपकी प्रतिक्रिया क्या होती है?",
    options: [
      { label: "Stay calm, re-prioritize high-impact deliverables, and guide the group forward.", score: 5, traitIndicator: "Crisis Resilient" },
      { label: "Work overtime and focus intensely on solving the bottleneck myself.", score: 4, traitIndicator: "High Performer" },
      { label: "Seek immediate advice from senior mentors or teachers.", score: 3, traitIndicator: "Consultative" },
      { label: "Feel stressed and prefer postponing or requesting an extension.", score: 2, traitIndicator: "Stress Sensitive" }
    ]
  },
  {
    id: "q9",
    dimension: "Communication",
    questionText: "How do you feel when presenting an idea, speech, or debate before an audience of 100+ people?",
    questionTextUrdu: "سو سے زائد افراد کے سامنے تقریر یا پریزنٹیشن دیتے وقت آپ کیسا محسوس کرتے ہیں؟",
    questionTextHindi: "100 से अधिक लोगों के सामने अपनी बात या प्रेजेंटेशन रखते समय आप कैसा महसूस करते हैं?",
    options: [
      { label: "Energized and confident; I love engaging listeners, answering queries, and inspiring others.", score: 5, traitIndicator: "Charismatic Speaker" },
      { label: "Prepared and composed; with good rehearsal, I deliver clear points.", score: 4, traitIndicator: "Effective Presenter" },
      { label: "Somewhat nervous, but I can manage if my slides contain the full content.", score: 3, traitIndicator: "Cautious Speaker" },
      { label: "Very uncomfortable; I prefer communicating through written reports or code.", score: 2, traitIndicator: "Written Communicator" }
    ]
  },
  {
    id: "q10",
    dimension: "Communication",
    questionText: "When listening to a peer who is struggling with career confusion or emotional distress, you tend to:",
    questionTextUrdu: "جب کوئی دوست اپنے کیریئر کے بارے میں پریشان ہو تو آپ کس طرح مدد کرتے ہیں؟",
    questionTextHindi: "जब कोई सहपाठी अपने करियर को लेकर भ्रमित या परेशान होता है, तो आप:",
    options: [
      { label: "Listen empathetically without judgment, validate their feelings, and help them explore solutions.", score: 5, traitIndicator: "Empathetic Counselor" },
      { label: "Give practical step-by-step advice and suggest educational resources immediately.", score: 4, traitIndicator: "Pragmatic Advisor" },
      { label: "Encourage them to speak with a professional counselor or family member.", score: 3, traitIndicator: "Resource Connector" },
      { label: "Listen politely but feel uncertain about how to guide them.", score: 2, traitIndicator: "Passive Listener" }
    ]
  }
];
