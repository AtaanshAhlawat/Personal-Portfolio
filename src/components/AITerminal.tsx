import { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";

const AITerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "Technical Portfolio Assistant initialized." },
    { type: "output", text: "Ask about Atanshu's experience, skills, or projects. Type 'help' for available commands." },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [useAI, setUseAI] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Disable AI, use fallback responses only (reliable, fast, no API limits)
  useEffect(() => {
    setUseAI(false);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const SYSTEM_PROMPT = `You are a technical information assistant for Atanshu Ahlawat's portfolio. Provide direct, factual answers about his experience, skills, and qualifications.

KEY INFORMATION:
- Name: Atanshu Ahlawat
- Role: Computer Science Undergrad & Software Developer at Thapar Institute (2022-2026)
- Current: SWE Co-Op Intern at AlgoUniversity (YC S21)
- Focus: Scalable web systems, backend infrastructure, applied ML solutions
- Email: atanshu.ahlawat.07@gmail.com
- GitHub: @AtaanshAhlawat
- LinkedIn: /in/atanshuahlawat

EXPERIENCE:
1. AlgoUniversity (Jun 2025-Present): Building Online Judge platform with MERN stack, Redis, Docker. Supports 100+ concurrent users with 300ms response time.
2. Edukit (Jun-Jul 2025): Developed React.js task management application with CRUD operations and local storage.
3. Tecorb Technologies (May-Jul 2024): ML/DL models using TensorFlow, PyTorch. RAG pipelines with FAISS and OpenAI Embeddings.

TECHNICAL SKILLS:
- Languages: C, C++, Python, JavaScript, MATLAB, R
- Backend: Node.js, Express.js, REST API
- Frontend: React.js, HTML, CSS, JavaScript, jQuery
- Databases: MongoDB, MySQL, Redis
- DevOps: Docker, Git, Postman
- ML/AI: TensorFlow, PyTorch, LangChain, FAISS, OpenCV, NumPy, Pandas, Scikit-learn

ACHIEVEMENTS:
- AlgoUniversity Accelerator (top 1.4% of 40,000 applicants)
- Samsung Prism 2025 - R&D program selection
- Ethereum Devcon SEA - Volunteer selection
- GSSoC & SSoC 2024 - Mentor & Contributor

RESPONSE GUIDELINES:
- Be direct and factual
- Provide technical details when relevant
- Keep responses 2-3 sentences maximum
- Always complete sentences with proper punctuation
- For non-technical questions, politely redirect to available information
- No personality, jokes, or casual language`;

  const getAIResponse = async (query: string): Promise<string> => {
    try {
      const hfKey = import.meta.env.VITE_HF_API_KEY;
      const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      // Try Hugging Face first (free, unlimited)
      if (hfKey) {
        try {
          const response = await fetch(
            "https://router.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
            {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${hfKey}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                inputs: `${SYSTEM_PROMPT}\n\nUser question: ${query}\n\nAssistant:`,
                parameters: {
                  max_new_tokens: 200,
                  temperature: 0.7,
                  top_p: 0.95,
                  return_full_text: false
                }
              })
            }
          );

          const data = await response.json();
          
          if (data[0]?.generated_text) {
            return data[0].generated_text.trim();
          }
        } catch (hfError) {
          console.log("HF Error, trying Gemini:", hfError);
        }
      }
      
      // Fallback to Gemini if HF fails
      if (geminiKey) {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    { text: `${SYSTEM_PROMPT}\n\nUser question: ${query}` }
                  ]
                }
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 250,
              }
            })
          }
        );

        const data = await response.json();
        
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
          return data.candidates[0].content.parts[0].text;
        }
      }
      
      return getFallbackResponse(query);
    } catch (error) {
      console.error("AI Error:", error);
      return getFallbackResponse(query);
    }
  };

  const getFallbackResponse = (query: string): string => {
    const q = query.toLowerCase().trim();

    if (q === "help") {
      return `Available commands:
• about - Learn about Atanshu
• skills - View technical skills
• education - Academic background
• experience - Work experience
• contact - How to reach out
• projects - View projects
• clear - Clear terminal
Or just ask me anything!`;
    }

    if (q === "clear") {
      setHistory([
        { type: "output", text: "Terminal cleared. Type 'help' for commands." },
      ]);
      return "";
    }

    if (q.includes("about") || q.includes("who")) {
      return "I'm Atanshu Ahlawat, a Computer Science undergrad at Thapar Institute. I'm a Software Developer specializing in building scalable web systems, backend infrastructure, and applied ML solutions. Currently working as a SWE Co-Op Intern at AlgoUniversity!";
    }

    if (q.includes("skill")) {
      return "I work with: C, C++, Python, JavaScript, Node.js, Express.js, React.js, MongoDB, MySQL, Redis, Docker, TensorFlow, PyTorch, LangChain, and more!";
    }

    if (q.includes("education") || q.includes("study") || q.includes("college")) {
      return "I'm pursuing B.Tech in Computer Science & Engineering with a minor in Full Stack at Thapar Institute of Engineering and Technology (2022-2026) in Patiala, Punjab.";
    }

    if (q.includes("experience") || q.includes("work") || q.includes("intern")) {
      return "I'm currently a SWE Co-Op Intern at AlgoUniversity (YC S21) where I'm building an Online Judge platform. Previously interned at Edukit and Tecorb Technologies working on full-stack development and AI/ML.";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return "You can reach me at atanshu.ahlawat.07@gmail.com or connect on LinkedIn and GitHub! Use the contact form below to send a message directly.";
    }

    if (q.includes("project")) {
      return "Check out my GitHub @AtaanshAhlawat for my projects! I've worked on CloudPulse (weather dashboard), pedestrian detection with YOLOv4, and more!";
    }

    if (q.includes("award") || q.includes("achievement")) {
      return "I was selected for AlgoUniversity's Accelerator Camp (top 1.4% of 40,000 applicants), Samsung Prism 2025, Devcon SEA volunteer, and more! Check the Awards section above.";
    }

    if (q.includes("hire") || q.includes("available") || q.includes("job")) {
      return "I'm always open to interesting opportunities! Feel free to reach out via email or the contact form. Let's build something great together!";
    }

    return `That's an interesting question! I'm still learning. Try 'help' to see what I can answer, or use the contact form to reach out directly to Atanshu!`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userInput = input.trim();
    setHistory((prev) => [...prev, { type: "input", text: userInput }]);
    setInput("");
    setIsTyping(true);

    try {
      let response: string;
      
      if (useAI && userInput.toLowerCase() !== "help" && userInput.toLowerCase() !== "clear") {
        response = await getAIResponse(userInput);
      } else {
        response = getFallbackResponse(userInput);
      }
      
      if (response) {
        setHistory((prev) => [...prev, { type: "output", text: response }]);
      }
    } catch (error) {
      setHistory((prev) => [...prev, { type: "output", text: "Sorry, I encountered an error. Please try again!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl shadow-blue-100/50 border border-blue-200 overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-200">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <Terminal className="w-4 h-4 text-blue-600" />
          <span className="text-blue-600 text-sm font-mono">ai-terminal ~ ask-atanshu</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="h-80 overflow-y-auto p-4 font-mono text-sm space-y-2 bg-gradient-to-br from-blue-50/30 to-white"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#93c5fd #e0f2fe'
        }}
      >
        {history.map((entry, idx) => (
          <div key={idx} className={entry.type === "input" ? "text-blue-700 font-medium" : "text-gray-700"}>
            {entry.type === "input" ? (
              <div className="flex gap-2">
                <span className="text-blue-600">❯</span>
                <span>{entry.text}</span>
              </div>
            ) : (
              <div className="whitespace-pre-line ml-4 leading-relaxed">{entry.text}</div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="text-blue-400 flex items-center gap-2 ml-4">
            <span className="animate-pulse">●</span>
            <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>●</span>
            <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>●</span>
          </div>
        )}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="border-t border-blue-200 p-4 bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-mono text-sm font-bold">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-gray-700 font-mono text-sm focus:outline-none placeholder:text-blue-300"
            disabled={isTyping}
          />
        </div>
      </form>
    </div>
  );
};

export default AITerminal;
