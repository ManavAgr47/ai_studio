"use client";

import { useState, useRef, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Play, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Users2, 
  Award, 
  ArrowRight, 
  Video, 
  HelpCircle, 
  GraduationCap, 
  DollarSign, 
  Sliders, 
  BookOpen, 
  Clock, 
  Presentation, 
  Code2, 
  ShieldCheck, 
  Check, 
  Mail, 
  Phone, 
  User, 
  Building, 
  Heart,
  Calendar,
  X,
  ExternalLink,
  Search
} from "lucide-react";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Custom logo png path
const LOGO_PATH = "/new-logo.png";

// Claude SVG Logo Component
const ClaudeLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Claude AI</title>
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
  </svg>
);


// Projects Data
const PROJECTS = [
  {
    id: "proj-1",
    title: "AI Resume Builder",
    description: "Build a modern AI-powered resume generation tool from scratch.",
    overview: "Build an end-to-end web application that parses raw text or LinkedIn PDF data, extracts key professional skills, and formats a styled, high-impact PDF resume using AI recommendation tailoring.",
    concepts: ["PDF Parsing & Extraction", "LLM Tailoring & Formatting", "Dynamic HTML/CSS PDF Generation", "Tailwind Template Selection"],
    applications: ["Automated Career Preparation Systems", "Recruiter Screen Pre-evaluation Portals", "Personal Portfolio Generators"],
    icon: Code2,
    badgeColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
  },
  {
    id: "proj-2",
    title: "AI Research Assistant",
    description: "Create a system that analyzes and summarizes information automatically.",
    overview: "Develop a background worker that fetches web pages based on a query, runs semantic search over the scraped content, and synthesizes a structured research document with proper citations.",
    concepts: ["Vector Embeddings & Search", "Puppeteer Web Scraping", "Context-Window Optimization", "Reasoning & Citation Loops"],
    applications: ["Automated Competitor Analysis Tools", "Market Research Summarizers", "Newsletter Content Curators"],
    icon: Search,
    badgeColor: "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400"
  },
  {
    id: "proj-3",
    title: "AI Workflow Automation",
    description: "Learn how AI can automate repetitive business and development tasks.",
    overview: "Architect an autonomous routing agent that receives customer feedback webhooks, classifies user intent, queries internal databases to check order status, and drafts tailored responses.",
    concepts: ["Tool Calling & Function Execution", "Webhook Integrations", "Multi-Agent Coordination", "State Machine Architecture"],
    applications: ["Support Ticket Auto-responders", "Autonomous Database Synchronization", "Continuous Integration Alert Analyzers"],
    icon: Sliders,
    badgeColor: "from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-400"
  },
  {
    id: "proj-4",
    title: "SaaS MVP Development",
    description: "Watch how complete software products can be built rapidly with AI assistance.",
    overview: "Deploy a fully functional React frontend and Node.js backend using Claude Code CLI. Generate database schemas, implement authentication wrappers, and build functional pages in hours.",
    concepts: ["Rapid Mockup Generation", "AI-Native Coding CLI Workflows", "API Layer Orchestration", "Database Schema Instantiation"],
    applications: ["Rapid Product Validation Demos", "Hackathon MVP Accelerations", "Bootstrapping Startup Pipelines"],
    icon: Zap,
    badgeColor: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400"
  }
];

// Curriculum Data
const CURRICULUM = [
  { title: "Claude Code Fundamentals", desc: "Setup, workflows, and best practices." },
  { title: "Prompt Engineering", desc: "How to communicate effectively with AI coding assistants." },
  { title: "AI-Assisted Development", desc: "Building applications faster using modern AI workflows." },
  { title: "Debugging with AI", desc: "Reduce debugging time and improve productivity." },
  { title: "Full-Stack Development", desc: "Frontend, backend, databases, and deployment." },
  { title: "Project Architecture", desc: "Structuring projects for scalable AI-assisted development." },
  { title: "Productivity Techniques", desc: "Workflows used by modern AI-native developers." },
  { title: "Real Development Scenarios", desc: "Practical examples and live demonstrations." }
];

// Learning Outcomes
const OUTCOMES = [
  { text: "Build software faster using Claude Code" },
  { text: "Debug and understand unfamiliar codebases" },
  { text: "Use effective prompting techniques for development" },
  { text: "Create MVPs and prototypes efficiently" },
  { text: "Apply AI-assisted workflows in real projects" },
  { text: "Work more productively as an AI-native developer" }
];

// How It Works Steps
const STEPS = [
  { step: "01", title: "Register", desc: "Reserve your seat for the workshop." },
  { step: "02", title: "Preparation", desc: "Receive pre-workshop resources and instructions." },
  { step: "03", title: "Attend Live Session", desc: "Join the live training and demonstrations." },
  { step: "04", title: "Follow Along", desc: "Build and learn during hands-on exercises." },
  { step: "05", title: "Resources & Q&A", desc: "Receive materials, recordings, and support." }
];

// Why Attend
const WHY_ATTEND = [
  { title: "Learn by Building", desc: "Focus on practical implementation rather than theory.", icon: Code2 },
  { title: "Live Demonstrations", desc: "Watch complete workflows from start to finish.", icon: Presentation },
  { title: "Beginner Friendly", desc: "Suitable for students, professionals, and founders.", icon: Users2 },
  { title: "Practical Outcomes", desc: "Gain skills you can immediately apply.", icon: Award }
];

// Community Benefits
const COMMUNITY_BENEFITS = [
  { title: "Networking", desc: "Connect with like-minded builders." },
  { title: "Resources", desc: "Access guides, templates, and learning materials." },
  { title: "Future Workshops", desc: "Get early access to upcoming training programs." },
  { title: "Collaboration", desc: "Find teammates for projects and startups." },
  { title: "Support", desc: "Continue learning beyond the workshop." }
];

// Instructors
const INSTRUCTORS = [
  {
    name: "Hardik Advani",
    role: "Lead AI Instructor & Founder",
    affiliation: "IIT Roorkee",
    experience: "2+ Years building production-grade AI systems, LangChain explorer",
    expertise: "Claude Code, Agentic Workflows, LLM APIs, System Integration",
    photo: "/hardik.png"
  },
  {
    name: "Manav Agrawal",
    role: "AI Development Instructor & Co-Founder",
    affiliation: "IIT Roorkee",
    experience: "2+ Years AI automation, full-stack dev and LLM workflow deployment",
    expertise: "RAG Systems, Multi-Agent Orchestration, MCP Server Integration, Next.js + AI",
    photo: "/manav.png"
  }
];

// FAQ Data
const FAQS = [
  {
    q: "Do I need coding experience?",
    a: "Basic programming knowledge is recommended but not mandatory. We guide you through the setup, core scripting practices, and how to command the AI coding assistant even if you are early in your software development journey."
  },
  {
    q: "Is Claude Code included?",
    a: "No. The workshop focuses on training, optimal workflow demonstrations, and architectural principles. We will provide detailed instructions on how to install and register for Claude Code (and set up API keys) on your own machine."
  },
  {
    q: "Will recordings be available?",
    a: "Yes, for Premium participants. The Premium Pass includes lifetime access to high-definition recordings of the live sessions and Q&As, so you can review the workflows at your own pace."
  },
  {
    q: "Is the workshop live?",
    a: "Yes, all sessions are conducted live. You will watch live coding demonstrations, setup flows, and bug resolutions happening in real-time, allowing you to see how developers handle errors live."
  },
  {
    q: "Can I ask questions during the workshop?",
    a: "Yes, interactive Q&A is included. Standard participants can participate in chat-based Q&A, while Premium participants receive priority Q&A slots to ask specific architectural or code-related questions."
  },
  {
    q: "What projects will be demonstrated?",
    a: "Real-world applications, automations, and software development workflows. This includes an AI Resume Builder, an AI Research Assistant, an AI Workflow Automation webhook agent, and a rapid SaaS MVP deployment."
  },
  {
    q: "Why not just learn from YouTube?",
    a: "YouTube provides scattered information. This workshop provides a structured learning path, live demonstrations, direct interaction, and practical workflows that can be applied immediately. It acts as a premium, high-end technical training program, offering certificate credentials and immediate access to a curated AI Builder community."
  }
];

export default function ClaudeCodeWorkshopPage() {
  // Page states
  const [activeTab, setActiveTab] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Registration Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [experience, setExperience] = useState("Beginner");
  const [tier, setTier] = useState("Standard Pass - $100");
  const [notes, setNotes] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  // Selected Project Details Modal
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Terminal Simulator State
  const [terminalPlaying, setTerminalPlaying] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const registerFormRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Scroll handler for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>, tabName: string) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll to register & select plan
  const handlePlanSelection = (selectedPlan: string) => {
    setTier(selectedPlan);
    scrollTo(registerFormRef, "contact");
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Terminal Simulation Script
  const terminalScript = [
    { text: "user@iit-ai-studio:~$ npm install -g @anthropic-ai/claude-code", delay: 1000 },
    { text: "added 42 packages, and audited 43 packages in 2s", delay: 500 },
    { text: "user@iit-ai-studio:~$ claude login", delay: 1200 },
    { text: "Authenticating with Anthropic... [SUCCESS]", delay: 800 },
    { text: "user@iit-ai-studio:~$ claude dev 'Create an AI resume builder with React'", delay: 1500 },
    { text: "🤖 Claude Code: Initiating agentic development workspace...", delay: 800 },
    { text: "🔍 Analyzing directory structure...", delay: 500 },
    { text: "📂 Found: package.json, src/, public/", delay: 600 },
    { text: "⚙️ Generating component in src/components/ResumeBuilder.tsx...", delay: 1400 },
    { text: "✓ Created src/components/ResumeBuilder.tsx (124 lines written)", delay: 800 },
    { text: "🤖 Claude Code: Let me test if the code compiles.", delay: 900 },
    { text: "🛠️ Running: npm run build...", delay: 1200 },
    { text: "✓ Compile Successful (0 warnings, 0 errors)", delay: 700 },
    { text: "🤖 Claude Code: The AI Resume Builder is ready. Would you like me to start the local dev server?", delay: 1000 },
    { text: "user@iit-ai-studio:~$ _", delay: 5000 }
  ];

  useEffect(() => {
    if (!terminalPlaying) {
      setTerminalOutput(["Click 'Watch Preview' or Play to simulate Claude Code CLI workflows..."]);
      return;
    }

    setTerminalOutput([]);
    setTerminalLineIndex(0);
  }, [terminalPlaying]);

  useEffect(() => {
    if (!terminalPlaying || terminalLineIndex >= terminalScript.length) return;

    const currentLine = terminalScript[terminalLineIndex];
    const timer = setTimeout(() => {
      setTerminalOutput(prev => [...prev, currentLine.text]);
      setTerminalLineIndex(prev => prev + 1);
    }, currentLine.delay);

    return () => clearTimeout(timer);
  }, [terminalPlaying, terminalLineIndex]);

  // Custom Navbar Component
  const customNavbar = (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group py-2">
            <img
              src={LOGO_PATH}
              alt="IIT AI Studio Logo"
              className="h-9 md:h-12 w-auto object-contain mix-blend-screen contrast-125 saturate-150 brightness-110 hover:opacity-85 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans">
            <button
              onClick={() => {
                setActiveTab("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`font-medium text-sm transition-all duration-200 hover:text-primary relative py-2 ${
                activeTab === "home" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
              {activeTab === "home" && (
                <motion.div
                  layoutId="navbar-workshop-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]"
                />
              )}
            </button>
            <button
              onClick={() => scrollTo(curriculumRef, "curriculum")}
              className={`font-medium text-sm transition-all duration-200 hover:text-primary relative py-2 ${
                activeTab === "curriculum" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Curriculum
              {activeTab === "curriculum" && (
                <motion.div
                  layoutId="navbar-workshop-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]"
                />
              )}
            </button>
            <button
              onClick={() => scrollTo(pricingRef, "pricing")}
              className={`font-medium text-sm transition-all duration-200 hover:text-primary relative py-2 ${
                activeTab === "pricing" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Pricing
              {activeTab === "pricing" && (
                <motion.div
                  layoutId="navbar-workshop-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]"
                />
              )}
            </button>
            <button
              onClick={() => scrollTo(faqRef, "faq")}
              className={`font-medium text-sm transition-all duration-200 hover:text-primary relative py-2 ${
                activeTab === "faq" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              FAQ
              {activeTab === "faq" && (
                <motion.div
                  layoutId="navbar-workshop-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]"
                />
              )}
            </button>
            <button
              onClick={() => scrollTo(registerFormRef, "contact")}
              className={`font-medium text-sm transition-all duration-200 hover:text-primary relative py-2 ${
                activeTab === "contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
              {activeTab === "contact" && (
                <motion.div
                  layoutId="navbar-workshop-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]"
                />
              )}
            </button>

            <ButtonGlow
              onClick={() => scrollTo(registerFormRef, "contact")}
              size="sm"
              className="ml-4 font-display text-xs"
            >
              Reserve Your Seat
            </ButtonGlow>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <X className="w-6 h-6 rotate-45" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t-0 overflow-hidden bg-background/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col px-4 py-6 gap-4 font-sans">
              <button
                onClick={() => {
                  setActiveTab("home");
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-left text-lg font-medium p-3 rounded-xl transition-all duration-200 ${
                  activeTab === "home" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollTo(curriculumRef, "curriculum")}
                className={`text-left text-lg font-medium p-3 rounded-xl transition-all duration-200 ${
                  activeTab === "curriculum" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => scrollTo(pricingRef, "pricing")}
                className={`text-left text-lg font-medium p-3 rounded-xl transition-all duration-200 ${
                  activeTab === "pricing" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => scrollTo(faqRef, "faq")}
                className={`text-left text-lg font-medium p-3 rounded-xl transition-all duration-200 ${
                  activeTab === "faq" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => scrollTo(registerFormRef, "contact")}
                className={`text-left text-lg font-medium p-3 rounded-xl transition-all duration-200 ${
                  activeTab === "contact" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                Contact
              </button>
              <ButtonGlow
                onClick={() => scrollTo(registerFormRef, "contact")}
                className="w-full mt-2"
              >
                Reserve Your Seat
              </ButtonGlow>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );

  // Custom Footer component
  const customFooter = (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10 relative overflow-hidden font-sans">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src={LOGO_PATH}
                alt="IIT AI Studio Logo"
                className="h-10 md:h-14 w-auto object-contain mix-blend-screen contrast-125 saturate-150 brightness-110"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Master the frontier of AI-assisted engineering with direct workshops structured by IIT AI Studio.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@iitaistudio.com" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> contact@iitaistudio.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Workshop</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo(curriculumRef, "curriculum")} className="text-muted-foreground hover:text-primary transition-colors">
                  Curriculum
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo(pricingRef, "pricing")} className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo(faqRef, "faq")} className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} IIT AI Studio. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Status:</span>
            <span className="flex items-center gap-1.5 text-primary font-medium">
              <ClaudeLogo className="w-4 h-4 text-[#C15F3C] animate-pulse" />
              Claude Code Live Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <MainLayout customNavbar={customNavbar} customFooter={customFooter}>
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Soft grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs sm:text-sm font-medium border border-[#C15F3C]/20 bg-[#C15F3C]/5"
              >
                <ClaudeLogo className="w-4 h-4 text-[#C15F3C] animate-pulse" />
                <span className="text-glow-primary">Claude Code Workshop</span>
              </motion.div>

              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Master AI-Assisted Software Development with{" "}
                <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Claude Code
                </span>{" "}
                <ClaudeLogo className="w-10 h-10 text-[#C15F3C] inline-block animate-pulse align-middle ml-2" />
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Learn the workflows used by modern developers to build applications faster, automate repetitive tasks, and accelerate software development with AI.
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                className="flex flex-wrap gap-4 font-sans text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90">
                  <span>🎓</span> Certificate Included
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90">
                  <span>🌍</span> Global Participants Welcome
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90">
                  <span>💬</span> Community Access Included
                </div>
              </motion.div>

              {/* Supporting Text */}
              <motion.p
                className="text-xs text-muted-foreground/80 tracking-wider uppercase font-mono font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Live Training • Real Demonstrations • Practical Workflows
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <ButtonGlow onClick={() => scrollTo(registerFormRef, "contact")} size="lg" className="w-full sm:w-auto shadow-sm">
                  Reserve Your Seat
                </ButtonGlow>
                <ButtonGlow variant="outline" onClick={() => scrollTo(curriculumRef, "curriculum")} size="lg" className="w-full sm:w-auto">
                  View Curriculum
                </ButtonGlow>
              </motion.div>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 bg-gradient-to-br from-card/85 to-card/25 shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C15F3C]/20 via-transparent to-secondary/15 opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-3xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-black/40">
                  {/* Terminal Window Header Decoration */}
                  <div className="bg-black/60 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/60 font-mono">
                      <ClaudeLogo className="w-3 h-3 text-[#C15F3C]" />
                      <span>claude-code-workspace</span>
                    </div>
                    <div className="w-8" />
                  </div>
                  <img 
                    src="/claude_terminal.png" 
                    alt="Claude Code terminal interface" 
                    className="w-full h-auto object-cover rounded-b-2xl shadow-inner"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WORKSHOP PREVIEW SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <Video className="w-3.5 h-3.5" />
                <span>Workshop Preview</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                See Claude Code in Action
              </h2>
              
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-sans">
                Experience how modern developers use AI to build software faster through practical demonstrations and real-world examples.
              </p>

              <ul className="space-y-3 pt-2 font-sans text-sm text-white/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Building features from natural language</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Debugging applications</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Understanding large codebases</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Rapid prototyping</span>
                </li>
              </ul>

              <div className="pt-4">
                <ButtonGlow onClick={() => setTerminalPlaying(true)} size="md" className="w-full sm:w-auto font-display text-xs">
                  Watch Preview
                </ButtonGlow>
              </div>
            </div>

            {/* Right Terminal Simulation Column */}
            <div className="lg:col-span-7">
              <motion.div 
                whileHover={{ y: -2 }}
                className="w-full rounded-2xl glass-panel border border-white/10 bg-card/40 overflow-hidden shadow-2xl flex flex-col font-mono text-xs text-left relative"
              >
                {/* Terminal Header */}
                <div className="bg-black/40 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/60">
                    <ClaudeLogo className="w-3.5 h-3.5 text-[#C15F3C]" />
                    <span>Claude Code terminal simulation</span>
                  </div>
                  <div className="w-14" />
                </div>

                {/* Terminal Window content */}
                <div className="p-5 min-h-[300px] max-h-[380px] overflow-y-auto bg-black/70 flex flex-col gap-2 font-mono scrollbar-thin scrollbar-thumb-muted">
                  <AnimatePresence>
                    {terminalOutput.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15 }}
                        className={
                          line.startsWith("✓") 
                            ? "text-emerald-400 font-bold" 
                            : line.startsWith("🤖") 
                              ? "text-primary font-bold"
                              : line.startsWith("user@") 
                                ? "text-white" 
                                : "text-muted-foreground"
                        }
                      >
                        {line}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Play Button Overlay when stopped */}
                  {!terminalPlaying && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm transition-all duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setTerminalPlaying(true)}
                        className="w-16 h-16 rounded-full bg-primary text-primary-foreground border border-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                      >
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </motion.button>
                      <span className="text-white text-xs font-bold font-display tracking-wider mt-4">
                        RUN SIMULATED CLAUDE CODE WORKFLOW
                      </span>
                    </div>
                  )}

                  {/* Stop Simulation Button */}
                  {terminalPlaying && (
                    <div className="absolute bottom-4 right-4 z-20">
                      <button
                        onClick={() => setTerminalPlaying(false)}
                        className="px-3 py-1 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[10px] rounded-md transition-colors"
                      >
                        Stop Simulation
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-16">
          <div className="glass-panel rounded-3xl border border-white/5 p-8 bg-card/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
              <div className="flex flex-col justify-center items-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white text-glow">6+ Hours</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono font-bold">Live Training</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white text-glow">10+</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono font-bold">Real Demonstrations</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white text-glow">5+</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono font-bold">Development Workflows</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white text-glow">100%</span>
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-mono font-bold">Practical Sessions</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Workshop Projects</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Projects You&apos;ll Build &amp; Explore
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Learn through practical demonstrations and real-world software development examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((proj) => {
              const ProjIcon = proj.icon;
              return (
                <motion.div
                  key={proj.id}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col justify-between group hover:border-primary/25 transition-all duration-300 bg-card/30"
                >
                  <div className="p-6 sm:p-8 space-y-6 text-left">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider border bg-gradient-to-r ${proj.badgeColor}`}>
                          <ProjIcon className="w-3 h-3" />
                          <span>Demo Project</span>
                        </span>
                        <h3 className="text-white font-display text-xl font-bold mt-2 leading-tight">{proj.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Quick overview bullet points */}
                    <div className="space-y-3 border-t border-white/5 pt-4 text-xs font-sans">
                      <div>
                        <strong className="text-white font-bold block mb-1">Project Overview:</strong>
                        <span className="text-muted-foreground leading-relaxed">{proj.overview}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-1">
                        <div>
                          <strong className="text-white font-bold block mb-1">Concepts Learned:</strong>
                          <span className="text-muted-foreground block leading-relaxed">{proj.concepts[0]} &amp; {proj.concepts[1]}</span>
                        </div>
                        <div>
                          <strong className="text-white font-bold block mb-1">Practical Applications:</strong>
                          <span className="text-muted-foreground block leading-relaxed">{proj.applications[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full py-3 bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 hover:border-transparent text-white text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 font-display"
                    >
                      View Project Demo →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CURRICULUM SECTION */}
        <section id="curriculum" ref={curriculumRef} className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Training Curriculum</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              What You&apos;ll Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto font-sans text-left">
            {CURRICULUM.map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors bg-card/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block mb-2">Module 0{idx + 1}</span>
                <h3 className="text-white font-display text-base font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNING OUTCOMES SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Outcomes</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              What You&apos;ll Be Able To Do After The Workshop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto font-sans text-left">
            {OUTCOMES.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/5 flex items-start gap-4 bg-card/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm leading-snug">{item.text}</h4>
                  <p className="text-muted-foreground text-[11px] mt-1 leading-relaxed">
                    Gain verified expertise and leverage professional AI structures in code deployment.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Workshop Process</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto relative font-sans text-left">
            {STEPS.map((item) => (
              <div 
                key={item.step}
                className="glass-panel rounded-2xl border border-white/5 p-6 space-y-4 hover:border-primary/15 transition-all duration-300 bg-card/25"
              >
                <div className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Step {item.step}</div>
                <h3 className="text-white font-display text-base font-bold leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY ATTEND SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Benefits</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Why Attend This Workshop
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto font-sans text-left">
            {WHY_ATTEND.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel rounded-2xl border border-white/5 p-6 sm:p-8 space-y-4 hover:border-primary/20 transition-all duration-300 bg-card/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-display text-xl font-bold">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CERTIFICATE SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <Award className="w-3.5 h-3.5" />
                <span>Certification</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Earn a Certificate of Completion
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                All participants who attend the workshop will receive a digital certificate recognizing their completion of the Claude Code Workshop.
              </p>

              <div className="space-y-3 border-t border-white/5 pt-4">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Certificate Includes:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Participant Name</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Workshop Title</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Completion Date</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Instructor Signature</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>IIT AI Studio Branding</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Mockup Column */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-amber-500/10 opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl" />
                <img 
                  src="/certificate_mockup.png" 
                  alt="Certificate of completion mockup" 
                  className="w-full h-full object-cover rounded-xl border border-white/5 shadow-inner"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMMUNITY SECTION */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <Users2 className="w-3.5 h-3.5" />
                <span>Community</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                Join the AI Builder Community
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-sans">
                Learning doesn&apos;t stop after the workshop. Connect with students, developers, founders, and AI builders who are actively using modern AI development tools.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 font-sans">
                <p className="text-xs text-primary font-bold flex items-center gap-1.5 font-display uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-primary" /> Enrollment Note:
                </p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Community access is included with all workshop registrations.
                </p>
              </div>
            </div>

            {/* Right Column Benefits Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-left">
                {COMMUNITY_BENEFITS.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300 bg-card/20"
                  >
                    <h4 className="text-white font-bold text-sm flex items-center gap-2 font-display">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" ref={pricingRef} className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Pricing</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Workshop Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto font-sans text-left items-stretch">
            {/* Standard Pass */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 flex flex-col justify-between bg-card/20">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-mono tracking-wider font-bold">Standard Pass</span>
                <div className="text-white font-display text-4xl font-extrabold mt-4 mb-4">
                  $100<span className="text-xs text-muted-foreground font-normal"> / participant</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-3.5 border-t border-white/5 pt-5">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Live Workshop Access</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Claude Code Demonstrations</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Practical Development Workflows</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Workshop Materials</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Q&A Session</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Community Access</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Certificate of Completion</li>
                </ul>
              </div>
              <button 
                onClick={() => handlePlanSelection("Standard Pass - $100")} 
                className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs transition-colors font-display uppercase tracking-wider"
              >
                Reserve Seat
              </button>
            </div>

            {/* Premium Pass (FEATURED) */}
            <div className="glass-panel rounded-3xl border border-primary/20 p-6 flex flex-col justify-between bg-primary/5 relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-primary-foreground font-mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <div>
                <span className="text-xs text-primary uppercase font-mono tracking-wider font-bold">Premium Pass</span>
                <div className="text-white font-display text-4xl font-extrabold mt-4 mb-4 text-glow">
                  $150<span className="text-xs text-primary-foreground/75 font-normal"> / participant</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-3.5 border-t border-white/5 pt-5">
                  <li className="flex items-center gap-2 text-white font-bold"><span className="text-primary font-bold">✓</span> Everything in Standard</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Workshop Recording</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Project Templates</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Bonus Learning Resources</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Post-Workshop Support</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Priority Q&A</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Community Access</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Certificate of Completion</li>
                </ul>
              </div>
              <button 
                onClick={() => handlePlanSelection("Premium Pass - $150")} 
                className="w-full mt-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl text-xs hover:bg-primary/95 transition-colors font-display uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Reserve Seat
              </button>
            </div>

            {/* Enterprise / University */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 flex flex-col justify-between bg-card/20">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-mono tracking-wider font-bold">Enterprise &amp; Universities</span>
                <h3 className="text-white font-display text-xl font-bold mt-1">Custom Training</h3>
                <div className="text-white font-display text-4xl font-extrabold mt-4 mb-4">
                  Custom
                </div>
                <ul className="text-xs text-muted-foreground space-y-3.5 border-t border-white/5 pt-5">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Customized Training Content</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Flexible Session Duration</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Team-Based Learning</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Live Q&A</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Online or On-Site Delivery</li>
                </ul>
                <p className="text-[10px] text-muted-foreground mt-4 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                  Interested in organizing a workshop for your company or institution? Contact us for a customized proposal.
                </p>
              </div>
              <button 
                onClick={() => handlePlanSelection("Enterprise / University Custom")} 
                className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs transition-colors font-display uppercase tracking-wider"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="py-20 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="glass-panel rounded-3xl border border-white/5 p-8 md:p-10 bg-card/20 relative overflow-hidden font-sans text-left">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50" />
            <h3 className="text-white font-display text-2xl font-bold mb-4">Why We Created This Workshop</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              AI coding tools are transforming software development. While many people know these tools exist, very few know how to use them effectively.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This workshop bridges that gap through practical demonstrations, real-world examples, and hands-on learning. We help students and professionals build solid, production-grade applications on Day 1 using elite CLI mechanisms.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" ref={faqRef} className="py-20 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 font-sans text-left">
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

        {/* REGISTRATION FORM SECTION */}
        <section id="register" ref={registerFormRef} className="py-24 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Reserve Your Seat
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Submit your registration details below. A workshop coordinator from IIT AI Studio will follow up within 24 hours to secure your payment and confirm your seating.
            </p>
          </div>

          <div className="rounded-3xl glass-panel border border-white/10 p-8 md:p-12 relative overflow-hidden bg-gradient-to-b from-card/80 to-card/25 text-left">
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
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-primary" /> Full Name
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary" /> Email Address
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.doe@gmail.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number
                      </label>
                      <input 
                        type="tel" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>

                    {/* Organization / College */}
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-primary" /> Organization / College
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="e.g. IIT Roorkee" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Experience Level */}
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-primary" /> Experience Level
                      </label>
                      <select 
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      >
                        <option className="bg-card text-white" value="Beginner">Beginner (Little to no AI tooling experience)</option>
                        <option className="bg-card text-white" value="Intermediate">Intermediate (Used APIs / basic prompts)</option>
                        <option className="bg-card text-white" value="Advanced">Advanced (Built AI apps/agents in production)</option>
                      </select>
                    </div>

                    {/* Workshop Selection */}
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-primary" /> Workshop Selection
                      </label>
                      <select 
                        value={tier}
                        onChange={(e) => setTier(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      >
                        <option className="bg-card text-white" value="Standard Pass - $100">Standard Pass ($100)</option>
                        <option className="bg-card text-white" value="Premium Pass - $150">Premium Pass ($150)</option>
                        <option className="bg-card text-white" value="Enterprise / University Custom">Enterprise / University Training (Custom)</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Additional Notes</label>
                    <textarea 
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="List any special topics you are interested in or questions you would like addressed..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors resize-none font-sans"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-mono font-display"
                    >
                      Reserve My Seat <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  className="text-center py-10 space-y-4 font-sans"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-white font-display text-2xl font-bold">Seat Reserved!</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. A workshop coordinator from IIT AI Studio will contact you at <strong className="text-white">{email}</strong> within 24 hours to guide you through confirming your booking and joining instructions.
                  </p>
                  
                  <div className="pt-6">
                    <ButtonGlow variant="outline" onClick={() => setFormSubmitted(false)} size="sm">
                      Submit Another Registration
                    </ButtonGlow>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* INSTRUCTORS SECTION */}
        <section className="py-24 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Users2 className="w-3.5 h-3.5" />
              <span>Instructors</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Meet The Instructors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto font-sans text-left">
            {INSTRUCTORS.map((ins, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col sm:flex-row items-center sm:items-stretch p-6 bg-card/30 hover:border-primary/20 transition-all duration-300 gap-6"
              >
                {/* Photo container */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-auto rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_15px_rgba(34,211,238,0.1)] flex-shrink-0">
                  <img 
                    src={ins.photo} 
                    alt={ins.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Credentials */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-primary font-mono text-[10px] uppercase tracking-wider font-bold block mb-1">{ins.role}</span>
                    <h3 className="text-white font-display text-lg font-bold mb-1 leading-none">{ins.name}</h3>
                    <p className="text-xs text-muted-foreground/80 mb-3 font-semibold">{ins.affiliation}</p>
                    
                    <div className="space-y-2 text-xs text-muted-foreground border-t border-white/5 pt-3">
                      <div>
                        <strong className="text-white font-bold block mb-0.5">AI Experience:</strong>
                        <span>{ins.experience}</span>
                      </div>
                      <div>
                        <strong className="text-white font-bold block mb-0.5">Areas of Expertise:</strong>
                        <span>{ins.expertise}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-24 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 text-center">
          <div className="relative rounded-3xl glass-panel border border-primary/20 p-10 md:p-16 overflow-hidden bg-gradient-to-br from-primary/5 via-card/50 to-secondary/5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Ready to Build Faster with AI?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-sans">
                Join the next Claude Code Workshop and learn modern AI-assisted software development workflows.
              </p>
              
              <div className="pt-4 flex justify-center">
                <ButtonGlow onClick={() => scrollTo(registerFormRef, "contact")} size="lg" className="shadow-lg">
                  Reserve Your Seat <ArrowRight className="w-5 h-5 ml-1" />
                </ButtonGlow>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl rounded-3xl glass-panel border border-white/10 bg-card p-6 md:p-8 relative max-h-[90vh] overflow-y-auto font-sans text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="space-y-2 mb-6">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider border bg-gradient-to-r ${selectedProject.badgeColor}`}>
                    Demo Project Detail
                  </span>
                  <h3 className="text-white font-display text-2xl font-bold leading-tight">{selectedProject.title}</h3>
                </div>

                {/* Body Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-2">Project Overview</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-2">Key Concepts Learned</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedProject.concepts.map((concept, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-2">Practical Applications</h4>
                    <ul className="space-y-2 text-xs">
                      {selectedProject.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 animate-pulse" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 border-t border-white/5 pt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-xl transition-colors font-display"
                  >
                    Close
                  </button>
                  <ButtonGlow
                    onClick={() => {
                      setSelectedProject(null);
                      scrollTo(registerFormRef, "contact");
                    }}
                    size="sm"
                    className="font-display text-xs"
                  >
                    Enroll in Workshop
                  </ButtonGlow>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </MainLayout>
  );
}
