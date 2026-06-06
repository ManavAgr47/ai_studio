"use client";

import { useState, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users2, 
  ArrowRight, 
  GraduationCap, 
  CheckCircle2, 
  Search, 
  DollarSign, 
  Sliders, 
  Zap, 
  Send,
  HelpCircle,
  FileText,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Mail,
  Award
} from "lucide-react";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { Badge } from "@/components/ui/badge";

// Custom SVG components for social media icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

// Mock student candidates to showcase talent pool (anonymized)
const SAMPLE_CANDIDATES = [
  {
    id: "AIS-STU-A",
    university: "IIT Roorkee",
    degree: "B.Tech Civil Engineering",
    skills: ["Python", "LLM APIs", "RAG Systems", "LangChain", "GitHub"],
    project: "Built custom AI chatbot for customer service automation with automated source citation.",
    availability: "Available: 20 hrs/week"
  },
  {
    id: "AIS-STU-B",
    university: "IIT Bombay",
    degree: "B.Tech Computer Science",
    skills: ["PyTorch", "Fine-tuning", "LangChain", "React", "QLoRA", "FastAPI"],
    project: "Built an AI resume analyzer that parses PDFs, extracts skills, and highlights missing keywords against job descriptions.",
    availability: "Available: 20 hrs/week"
  },
  {
    id: "AIS-STU-C",
    university: "NIT Trichy",
    degree: "B.Tech Electronics & Communication",
    skills: ["Python", "AI automation", "Web scraping", "REST APIs", "Zapier", "Node.js"],
    project: "Created an automated lead generation pipeline that scrapes company data, generates personalized outreach emails using LLMs, and pushes to CRMs.",
    availability: "Internship-ready"
  }
];

const FAQS = [
  {
    q: "How are students selected?",
    a: "We select members from students at IITs, some of India’s top-tier universities.\n\nStudents apply through our AI Grant Program, which supports those who want access to premium AI tools. As part of the application, students submit their resumes along with details such as their academic year, major, how they currently use AI, and how they plan to use it in the future.\n\nBased on this information, we conduct interviews to evaluate their AI development knowledge, practical experience, and problem-solving abilities. We then select students who demonstrate strong AI skills, initiative, and real-world application potential."
  },
  {
    q: "How does the recruitment matching process work?",
    a: "First, schedule a consultation call with us and share your hiring requirements.\n\nBased on your needs, we shortlist and introduce carefully selected candidates from our talent pool. After confirming the candidates’ interest in your company, you can interview them directly.\n\nIf both parties are satisfied, you may proceed with offering an internship opportunity."
  },
  {
    q: "What is the pricing structure?",
    a: "Our pricing is based on a fixed monthly subscription model determined by your company size and hiring requirements.\n\nFor startups and small-to-medium-sized companies, plans start at $100 per month.\n\nThere are no additional referral fees, success fees, or placement charges beyond the monthly subscription."
  },
  {
    q: "How is the AI Grant Program related to this service?",
    a: "IIT AI Studio uses a portion of the revenue generated from this service to support its AI Grant Program, which provides students with access to premium AI tools and resources.\n\nThrough this program, students can strengthen their practical AI skills and work on real-world applications. At the same time, the program helps us identify highly motivated and capable AI talent that we can introduce to partner companies."
  }
];

export default function SponsorInternshipsPage() {
  // Contact Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeContact, setEmployeeContact] = useState("");
  const [designation, setDesignation] = useState("");
  const [selectedTier, setSelectedTier] = useState("Big Company");
  const [message, setMessage] = useState("");
  
  // FAQ accordion state
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  
  const formRef = useRef<HTMLDivElement>(null);
  const profilesRef = useRef<HTMLDivElement>(null);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Scroll helper
  const scrollToForm = (tier?: string, candidateId?: string, intentType?: string) => {
    if (tier) {
      setSelectedTier(tier);
    }
    if (candidateId) {
      setMessage(`Hi, we are interested in discussing internship matching, specifically looking at Candidate ${candidateId} or students with similar profiles.`);
    } else if (intentType === "demo" || intentType === "call") {
      setMessage("Hi, we would like to schedule a 15-minute call to discuss our AI internship matching requirements.");
    }
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProfiles = () => {
    profilesRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <MainLayout>
      <div className="relative min-h-screen bg-background overflow-hidden">
        
        {/* Subtle, soft grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs sm:text-sm font-medium mb-8 border border-primary/20 bg-primary/5"
          >
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span>Built by IIT students • Elite AI Talent Match (Pre Opening)</span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hire AI-Skilled Interns from IITs
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Access AI-skilled engineering students through affordable internship matching built by IIT students.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ButtonGlow onClick={() => scrollToForm(undefined, undefined, "call")} size="lg" className="w-full sm:w-auto shadow-sm">
              Schedule a 15-min Call
            </ButtonGlow>
            <ButtonGlow variant="outline" onClick={scrollToProfiles} size="lg" className="w-full sm:w-auto">
              View Sample Profiles
            </ButtonGlow>
          </motion.div>
        </section>

        {/* TRUST / STATS STRIP */}
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-28">
          <div className="glass-panel rounded-3xl border border-white/5 p-8 bg-card/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
              <div className="flex flex-col justify-center items-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">500+</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono">AI Students</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">12+</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono">Campuses</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">2,000+</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono">Applicants</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">90%+</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono">Project Completion</span>
              </div>
            </div>
            

          </div>
        </section>

        {/* SAMPLE PROFILES SECTION */}
        <section id="sample-profiles" ref={profilesRef} className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Search className="w-3.5 h-3.5" />
              <span>Sample Profiles</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Sample Student Profiles
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Recruiters need to verify quality. Below are anonymized, verified profiles representing students inside our matching pool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SAMPLE_CANDIDATES.map((cand) => (
              <motion.div
                key={cand.id}
                whileHover={{ y: -4 }}
                className="rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col justify-between group hover:border-primary/20 transition-all duration-300 bg-card/30"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Top Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-mono text-primary font-bold">{cand.id}</span>
                      <h3 className="text-white font-display text-lg font-bold mt-1 leading-tight">{cand.university}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{cand.degree}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">AI Skill Set</span>
                    <div className="flex flex-wrap gap-1.5 font-sans">
                      {cand.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 text-[10px] text-muted-foreground px-2 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 font-sans">
                    <span className="text-[10px] text-white font-bold flex items-center gap-1.5 mb-1.5 font-display">
                      <FileText className="w-3.5 h-3.5 text-primary" /> Shipped Project:
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cand.project}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 mt-auto font-sans">
                  <div className="text-[10px] text-emerald-400 font-medium mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {cand.availability}
                  </div>
                  
                  <button 
                    onClick={() => scrollToForm(undefined, cand.id)} 
                    className="w-full py-3 bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 hover:border-transparent text-white text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 font-display"
                  >
                    Request Student Match <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Skills Breakdown</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Students Skilled In:
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Here is what our interns can build, optimize, and integrate for your team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">AI Agent building skills</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Designing autonomous multi-agent networks, reasoning loops, tool-calling capabilities, and robust self-correction logic.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">Claude Code &amp; Cowork</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Building with agentic CLI tools, setting up internal copilots, and designing collaborative human-in-the-loop workflows.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">ChatGPT Codex</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Utilizing advanced generative models, code generation engines, and automating software engineering processes.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">Gemini Antigravity</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Leveraging multimodal generation, long-context reasoning optimizations, and custom agentic frameworks.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">MCP</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Implementing Model Context Protocol for secure local tool integration, filesystem interactions, and standardized APIs.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">Python</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Core scripting, data modeling, backend services with FastAPI/Flask, and automation scripts.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">LLM App Development</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Building complex multi-agent architectures, structured JSON outputs, prompt engineering, and semantic routing.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">RAG Systems</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Integrating vector stores like Pinecone, Milvus, and pgvector with customized retrieval strategies.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">AI Chatbots</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Developing stateful conversation flows, tool calling capabilities, and integrations into Slack or Discord.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">API Integration</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Connecting third-party services, webhooks, and orchestrating API calls with robust error-handling.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">Data Analysis</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Extracting patterns from raw CSVs/logs, pandas manipulation, and automating daily data workflows.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">Automation Workflows</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Automating repetitive operations with custom Python cron jobs or visual tools like n8n and Zapier.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">React + AI Apps</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Building frontend panels, real-time chats, and custom administration dashboards for AI backends.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-white font-display text-lg font-bold mb-2">GitHub Collaboration</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Proficient in Git workflows, branching models, code reviews, and basic CI/CD pipeline deployments.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Operational Flow</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              A streamlined, low-friction matching process to onboard elite AI builders quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto relative font-sans">
            <div className="glass-panel rounded-2xl border border-white/5 p-6 space-y-4">
              <div className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Step 01</div>
              <h3 className="text-white font-display text-base font-bold">Schedule Call</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Schedule a 15-minute call to discuss your team&apos;s specific AI goals and technical stack.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 space-y-4">
              <div className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Step 02</div>
              <h3 className="text-white font-display text-base font-bold">Share Needs</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Tell us your internship requirements, required skills, and project scope.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 space-y-4">
              <div className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Step 03</div>
              <h3 className="text-white font-display text-base font-bold">Get Matches</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Receive hand-picked profiles of vetted, ready-to-interview candidates.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 space-y-4">
              <div className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Step 04</div>
              <h3 className="text-white font-display text-base font-bold">Interview</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Conduct quick direct interviews with matching candidates to confirm fit.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 space-y-4">
              <div className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Step 05</div>
              <h3 className="text-white font-display text-base font-bold">Onboard</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Start the internship and accelerate your internal AI development velocity.
              </p>
            </div>
          </div>
        </section>

        {/* WHY COMPANIES USE IITAIS */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Hiring Advantages</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Why Companies Use IITAIS
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              We align top-tier student matching with clear commercial advantages for your engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto font-sans">
            <div className="glass-panel rounded-2xl border border-white/5 p-6 sm:p-8 space-y-3">
              <h3 className="text-white font-display text-xl font-bold">Lower Cost than Agencies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bypass recruiting middleman margins and steep placement finder fees. Maintain complete pricing visibility.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 sm:p-8 space-y-3">
              <h3 className="text-white font-display text-xl font-bold">Access Talent Earlier</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Secure relations with outstanding builders before they enter the open market. Gain a competitive hiring edge.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 sm:p-8 space-y-3">
              <h3 className="text-white font-display text-xl font-bold">Reduce Hiring Risk</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Test candidates on active engineering tasks during internships before extending heavy full-time offers.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-6 sm:p-8 space-y-3">
              <h3 className="text-white font-display text-xl font-bold">Faster AI Hiring Pipeline</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Onboard students who already understand APIs, prompt structures, and vector search, eliminating standard bootcamps.
              </p>
            </div>
          </div>
        </section>



        {/* PRICING & PROCESS SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Simple Plans</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Sponsorship Pricing
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Sponsorship fees scale transparently to match your business size and hiring scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 font-sans">
            {/* Startup Plan */}
            <div className="glass-panel rounded-2xl border border-white/5 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-mono">Startups & SMEs</span>
                <h3 className="text-white font-display text-xl font-bold mt-1">Startup Tier</h3>
                <div className="text-white font-display text-3xl font-extrabold mt-4 mb-4">
                  $100<span className="text-xs text-muted-foreground font-normal"> / month</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-2 border-t border-white/5 pt-4">
                  <li>• One student can be recruited each month.</li>
                  <li>• Access to recruitment database</li>
                  <li>• Standard email matches</li>
                  <li>• 6-month minimum commitment</li>
                </ul>
              </div>
              <button 
                onClick={() => scrollToForm("Startup")} 
                className="w-full mt-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs transition-colors font-display"
              >
                Select Startup Plan
              </button>
            </div>

            {/* Big Company Plan */}
            <div className="glass-panel rounded-2xl border border-primary/20 p-6 flex flex-col justify-between bg-primary/5 relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-primary-foreground font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <span className="text-xs text-primary uppercase font-mono font-semibold">100 – 10,000 Employees</span>
                <h3 className="text-white font-display text-xl font-bold mt-1">Big Company</h3>
                <div className="text-white font-display text-3xl font-extrabold mt-4 mb-4">
                  $500<span className="text-xs text-muted-foreground font-normal"> / month</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-2 border-t border-white/5 pt-4">
                  <li>• The right to recruit 5 students each month</li>
                  <li>• Priority candidate matching</li>
                  <li>• Custom filtering by tech stack</li>
                  <li>• Featured partner placement</li>
                </ul>
              </div>
              <button 
                onClick={() => scrollToForm("Big Company")} 
                className="w-full mt-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-xs hover:bg-primary/95 transition-colors font-display"
              >
                Select Big Company Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-panel rounded-2xl border border-white/5 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-mono">Over 10,000 Employees</span>
                <h3 className="text-white font-display text-xl font-bold mt-1">Custom Cohort</h3>
                <div className="text-white font-display text-3xl font-extrabold mt-4 mb-4">
                  Bespoke
                </div>
                <ul className="text-xs text-muted-foreground space-y-2 border-t border-white/5 pt-4">
                  <li>• Request custom technology cohorts</li>
                  <li>• Input on training curricula</li>
                  <li>• Dedicated partnership manager</li>
                  <li>• Custom hiring frameworks</li>
                </ul>
              </div>
              <button 
                onClick={() => scrollToForm("Global Enterprise")} 
                className="w-full mt-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs transition-colors font-display"
              >
                Contact for Enterprise
              </button>
            </div>
          </div>


        </section>

        {/* AI GRANT EXPLANATION (PRIORITY 8 - near bottom) */}
        <section className="py-20 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="glass-panel rounded-3xl border border-white/5 p-8 md:p-10 bg-card/20 relative overflow-hidden font-sans">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50" />
            <h3 className="text-white font-display text-2xl font-bold mb-4">How We Build the Talent: The IIT AI Grant Initiative</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              IITAIS supports students through its AI Grant initiative by providing access to premium AI tools and learning opportunities. This helps create a strong pool of AI-ready students for partner companies.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              By funding the tools students need, we remove the financial boundaries holding back exceptional engineering talent in emerging markets. This initiative serves as the core infrastructure preparing interns to build complex, production-grade applications on Day 1.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 font-sans">
            {FAQS.map((faq, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div 
                  key={index} 
                  className="glass-panel rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-white font-bold text-sm sm:text-base font-display">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-primary flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-4" />
                    )}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-3 whitespace-pre-line">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* INTAKE / SCHEDULING FORM (id="scheduling-form") */}
        <section id="scheduling-form" className="py-24 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-24" ref={formRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Schedule a 15-min Call
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Submit your hiring details below, and our partnership coordinator will reach out to schedule a call and share matching resumes within 24-48 hours.
            </p>
          </div>

          <div className="rounded-3xl glass-panel border border-white/10 p-8 md:p-12 relative overflow-hidden bg-gradient-to-b from-card/80 to-card/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Company Name</label>
                      <input 
                        type="text" 
                        required 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Vertex AI Inc." 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Employee Name</label>
                      <input 
                        type="text" 
                        required 
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        placeholder="John Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Employee Email</label>
                      <input 
                        type="email" 
                        required 
                        value={employeeEmail}
                        onChange={(e) => setEmployeeEmail(e.target.value)}
                        placeholder="john.doe@company.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Employee Contact No.</label>
                      <input 
                        type="tel" 
                        required 
                        value={employeeContact}
                        onChange={(e) => setEmployeeContact(e.target.value)}
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Designation</label>
                      <input 
                        type="text" 
                        required 
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="e.g. Engineering Manager" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Target Sponsoring Plan</label>
                      <select 
                        value={selectedTier}
                        onChange={(e) => setSelectedTier(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      >
                        <option className="bg-card text-white" value="Startup">Startups & SMEs ($100/mo - 1 Student)</option>
                        <option className="bg-card text-white" value="Big Company">Big Companies ($500/mo - 5+ Students)</option>
                        <option className="bg-card text-white" value="Global Enterprise">Global Enterprise (Custom Cohort Support)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Hiring Requirements / Message</label>
                    <textarea 
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="List desired tech stacks, internship timeline, or specific candidate codes you are interested in..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors resize-none font-sans"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-mono font-display"
                    >
                      Schedule Call & Request Matches <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  className="text-center py-10 space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-white font-display text-2xl font-bold">Request Received!</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. A partnership coordinator from IIT AI Studio will reach out to <strong className="text-white">{employeeEmail}</strong> within 24-48 hours to schedule your 15-minute call and share candidate matches.
                  </p>
                  
                  <div className="pt-6">
                    <ButtonGlow variant="outline" onClick={() => setFormSubmitted(false)} size="sm">
                      Submit Another Inquiry
                    </ButtonGlow>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-12 flex justify-center gap-6 font-sans">
            <a href="mailto:contact@iitaistudio.com" className="text-sm text-muted-foreground hover:text-white flex items-center gap-2 transition-colors">
              <Send className="w-4 h-4 text-primary" /> contact@iitaistudio.com
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a href="https://www.IITAIS.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-white flex items-center gap-2 transition-colors">
              🌐 www.IITAIS.com
            </a>
          </div>
        </section>

        {/* FOUNDING TEAM SECTION */}
        <section className="py-24 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Users2 className="w-3.5 h-3.5" />
              <span>Leadership</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Founding Team
            </h2>
            {/* <p className="text-muted-foreground text-base sm:text-lg">
              Photo, title, and a brief introduction of our founding members.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto font-sans">
            {/* Founder: Hardik Advani */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col items-center text-center p-8 bg-card/30 hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-primary/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <img 
                  src="/hardik.png" 
                  alt="Hardik Advani" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold mb-1">Founder</span>
              <h3 className="text-white font-display text-xl font-bold mb-2">Hardik Advani</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 min-h-[40px]">
                B.Tech. 4th-year, Department of Industrial Engineering, IIT Roorkee
              </p>
              <div className="w-full pt-4 border-t border-white/5 mt-auto">
                <p className="text-xs text-primary font-medium">
                  Responsible for overall project management.
                </p>
              </div>
            </motion.div>

            {/* Co-Founder: Manav Agrawal */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col items-center text-center p-8 bg-card/30 hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-primary/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <img 
                  src="/manav.png" 
                  alt="Manav Agrawal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold mb-1">Co-Founder</span>
              <h3 className="text-white font-display text-xl font-bold mb-2">Manav Agrawal</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 min-h-[40px]">
                B.Tech. 3rd year, Department of Civil Engineering, IIT Roorkee
              </p>
              <div className="w-full pt-4 border-t border-white/5 mt-auto">
                <p className="text-xs text-primary font-medium">
                  Responsible for Development and Recruitment.
                </p>
              </div>
            </motion.div>

            {/* Co-Founder: Karan Kaurav */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col items-center text-center p-8 bg-card/30 hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-primary/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <img 
                  src="/karan.png" 
                  alt="Karan Kaurav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold mb-1">Co-Founder</span>
              <h3 className="text-white font-display text-xl font-bold mb-2">Karan Kaurav</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 min-h-[40px]">
                B.Tech. 3rd year, Department of Civil Engineering, IIT Roorkee
              </p>
              <div className="w-full pt-4 border-t border-white/5 mt-auto">
                <p className="text-xs text-primary font-medium">
                  Responsible for Sales and Sponsorship.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
