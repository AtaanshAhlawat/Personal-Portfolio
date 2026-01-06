import { Mail, Github, Linkedin, ArrowDown, GraduationCap, Award, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";
import AITerminal from "@/components/AITerminal";
import CursorTrail from "@/components/CursorTrail";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    "Languages": ["C", "C++", "Python", "MATLAB", "R", "JavaScript"],
    "Backend": ["Node.js", "Express.js", "REST API"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "jQuery"],
    "Clouds & Databases": ["MySQL", "MongoDB", "Redis"],
    "Web Technologies": ["REST API", "Leaflet.js"],
    "Developer Tools": ["Git", "Docker", "Postman", "LaTeX", "Jupyter Notebook"],
    "ML/Data Science": ["TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "OpenCV", "LangChain", "FAISS"]
  };

  const education = [
    {
      institution: "Thapar Institute of Engineering and Technology",
      degree: "B.Tech in Computer Science & Engineering",
      minor: "Minor: Full Stack",
      duration: "2022 – 2026",
      location: "Patiala, Punjab"
    }
  ];

  const awards = [
    "AlgoUniversity's Accelerator Programming Camp - Selected from top 1.4% among 40,000 applicants (Feb 2025)",
    "Samsung Prism 2025 - Selected for prestigious research and development program",
    "Code for Bharat Season 2 Hackathon - Advanced to second round (Jul-Aug 2025)",
    "Ethereum Foundation - Devcon SEA - Selected as volunteer for premier blockchain conference in Bangkok (Nov 2024)",
    "InternNation Leadership Tour 2024 - Selected among 45 delegates from top institutes (Jan 2025)",
    "IMUN Vietnam 2024 - Selected as Delegate (Mar 2024)",
    "Open Source Contributions - Selected as Mentor & Contributor for GSSoC and SSoC 2024"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CursorTrail />
      <AnimatedBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative z-10 py-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Intro */}
          <div className="text-center lg:text-left relative">
            {/* Angelic glow effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full"></div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Bonjour!
            </p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-fade-in opacity-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Atanshu Ahlawat
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              Computer Science Undergrad · Software Developer
            </p>
            <div className="text-muted-foreground leading-relaxed mb-8 space-y-3 animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              <p>Building scalable web systems, backend infrastructure, and applied ML solutions.</p>
              <p>Experience across full-stack development, distributed systems, and developer tooling.</p>
              <p>Former SWE Co-Op Intern at AlgoUniversity.</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
              <a href="mailto:atanshu.ahlawat.07@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform duration-200">
                atanshu.ahlawat.07@gmail.com
              </a>
            </div>
          </div>

          {/* Right: AI Terminal */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
            <AITerminal />
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection("skills")}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="Scroll to skills section"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <Card className="border-blue-200 bg-white/90 backdrop-blur-sm shadow-xl shadow-blue-100/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-light tracking-wide text-blue-600">Technical Skills</CardTitle>
              <CardDescription>Technologies and tools I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items], idx) => (
                  <div key={category} className="animate-slide-up opacity-0" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "forwards" }}>
                    <h3 className="text-lg font-light mb-4 text-foreground">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm font-normal hover:scale-110 transition-all duration-200 cursor-default hover:bg-blue-100 hover:text-blue-700 hover:shadow-md">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          {/* Connector line from previous section */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-12 bg-gradient-to-b from-blue-300 to-blue-400"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
          <Card className="border-blue-200 bg-white/90 backdrop-blur-sm shadow-xl shadow-blue-100/50 animate-slide-up">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-2xl font-light tracking-wide text-blue-600">Education</CardTitle>
              </div>
              <CardDescription>Academic background and qualifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-4 border-blue-300 pl-6 py-4 hover:border-blue-500 transition-colors duration-300 animate-slide-up opacity-0 hover:bg-blue-50/30 rounded-r-lg" style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: "forwards" }}>
                    <h3 className="text-xl font-light text-foreground mb-2">{edu.institution}</h3>
                    <p className="text-muted-foreground">
                      {edu.degree} {edu.minor && `• ${edu.minor}`} {edu.score && `• ${edu.score}`}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.duration} • {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          {/* Connector line from previous section */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-12 bg-gradient-to-b from-blue-300 to-blue-400"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
          <Card className="border-blue-200 bg-white/90 backdrop-blur-sm shadow-xl shadow-blue-100/50 animate-slide-up">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-2xl font-light tracking-wide text-blue-600">Honours and Awards</CardTitle>
              </div>
              <CardDescription>Recognition and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {awards.map((award, idx) => (
                  <li key={idx} className="flex gap-4 text-muted-foreground animate-slide-up opacity-0 hover:text-blue-600 transition-colors duration-200 p-3 rounded-lg hover:bg-blue-50/50" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "forwards" }}>
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span className="flex-1">{award}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto relative">
          {/* Connector line from previous section */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-12 bg-gradient-to-b from-blue-300 to-blue-400"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
          
          <Card className="border-blue-200 bg-white/90 backdrop-blur-sm shadow-xl shadow-blue-100/50 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-light tracking-wide text-blue-600">Get in Touch</CardTitle>
              <CardDescription className="text-lg mt-4">
                Send me a message and let's collaborate
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Contact Form */}
              <div className="max-w-2xl mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                <ContactForm />
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-center text-muted-foreground mb-6">Or connect with me on</p>
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <a
                    href="mailto:atanshu.ahlawat.07@gmail.com"
                    className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110 animate-fade-in opacity-0"
                    aria-label="Send email"
                    style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                  >
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-md group-hover:shadow-blue-300/50 group-hover:shadow-xl transition-all duration-300 border border-blue-100">
                      <Mail className="w-6 h-6 group-hover:animate-pulse" />
                    </div>
                    <span className="text-sm tracking-wide font-medium">Email</span>
                  </a>
                  
                  <a
                    href="https://github.com/AtaanshAhlawat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110 animate-fade-in opacity-0"
                    aria-label="Visit GitHub profile"
                    style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                  >
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-md group-hover:shadow-blue-300/50 group-hover:shadow-xl transition-all duration-300 border border-blue-100">
                      <Github className="w-6 h-6 group-hover:animate-pulse" />
                    </div>
                    <span className="text-sm tracking-wide font-medium">GitHub</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/atanshuahlawat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110 animate-fade-in opacity-0"
                    aria-label="Visit LinkedIn profile"
                    style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
                  >
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-md group-hover:shadow-blue-300/50 group-hover:shadow-xl transition-all duration-300 border border-blue-100">
                      <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
                    </div>
                    <span className="text-sm tracking-wide font-medium">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://discord.com/users/1018913772984877136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110 animate-fade-in opacity-0"
                    aria-label="Connect on Discord"
                    style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
                  >
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-md group-hover:shadow-blue-300/50 group-hover:shadow-xl transition-all duration-300 border border-blue-100">
                      <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                    </div>
                    <span className="text-sm tracking-wide font-medium">Discord</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-muted">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Atanshu Ahlawat. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
