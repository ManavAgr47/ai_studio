"use client";

import { useState, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users2, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Search, 
  DollarSign, 
  Sliders, 
  Sparkles, 
  Zap, 
  Building2, 
  Send,
  HelpCircle,
  FileText,
  AlertTriangle,
  TrendingUp,
  Percent,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { Badge } from "@/components/ui/badge";

// Mock student candidates to showcase talent pool
const MOCK_CANDIDATES = [
  {
    id: "AIS-2026-084",
    university: "IIT Delhi",
    degree: "B.Tech Computer Science (4th Year)",
    cgpa: "9.4 / 10",
    specialization: "AI Agents & RAG Systems",
    skills: ["Python", "LangChain", "LlamaIndex", "OpenAI API", "VectorDBs (Pinecone/Milvus)", "Next.js"],
    project: "Developed a multi-agent autonomous customer support system that reduced ticket resolution time by 74% using dynamic tool calling.",
    status: "Available for Fall 2026 / Winter 2026 Internships"
  },
  {
    id: "AIS-2026-112",
    university: "IIT Bombay",
    degree: "M.Tech Artificial Intelligence",
    cgpa: "9.1 / 10",
    specialization: "LLM Fine-Tuning & Quantization",
    skills: ["PyTorch", "Hugging Face", "Quantization (QLoRA)", "C++", "CUDA", "FastAPI"],
    project: "Fine-tuned Llama-3-8B on specialized medical question-answering datasets, optimizing it via QLoRA to run efficiently on single consumer GPUs.",
    status: "Available for Summer / Autumn 2026 Internships"
  },
  {
    id: "AIS-2026-095",
    university: "IIT Kharagpur",
    degree: "B.Tech Electronics & EC",
    cgpa: "8.9 / 10",
    specialization: "Computer Vision & Edge AI",
    skills: ["Python", "PyTorch", "OpenCV", "TensorRT", "YOLOv8", "ROS"],
    project: "Built a real-time object detection and tracking model for autonomous drone navigation, achieving 45 FPS on NVIDIA Jetson nano boards.",
    status: "Available for Winter 2026 Internships"
  }
];

const FAQs = [
  {
    q: "How are students selected?",
    a: "We source candidates from India's top technical institutes (IITs, NITs) and top developer communities. Candidates undergo a 3-stage vetting process evaluating core programming foundations, open-source portfolio contributions, and specialized capability in building generative AI applications, vector search systems, and agentic workflows."
  },
  {
    q: "What does sponsorship include?",
    a: "Each $100/mo sponsorship funds premium AI tooling, LLM APIs, GPU sandbox hosting, and expert developer mentorship for 1 high-performing student. In return, your company gets standard partner listing, full resume access, and direct placement matching for internships."
  },
  {
    q: "How does recruitment access work?",
    a: "You get access to a curated dashboard of sponsored candidates, featuring verified Git portfolios, CGPAs, and shipped sandbox projects. You can shortlist candidates directly and request matching interviews. There are zero placement commissions or backend hiring fees."
  },
  {
    q: "Is this sponsorship CSR-eligible or recruiting?",
    a: "It is both. Sponsoring funds educational tools and premium platform access for high-performing students who would otherwise face financial barriers. This fulfills social impact/CSR goals while serving as an elite talent acquisition channel."
  },
  {
    q: "What kind of students participate?",
    a: "Undergraduates and master's students specializing in Computer Science, Artificial Intelligence, and related engineering disciplines at India's premier technical universities. Every candidate has shipped at least one complex AI application in our sandbox."
  }
];

export default function SponsorInternshipsPage() {
  // ROI Calculator state
  const [studentsSponsored, setStudentsSponsored] = useState(5);
  
  // Contact Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [selectedTier, setSelectedTier] = useState("Big Company");
  const [message, setMessage] = useState("");
  
  // FAQ accordion state
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  
  const formRef = useRef<HTMLDivElement>(null);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Scroll to form helper
  const scrollToForm = (tier?: string, candidateId?: string, intentType?: string) => {
    if (tier) {
      setSelectedTier(tier);
    }
    if (candidateId) {
      setMessage(`Hi, we are interested in discussing internship matching, specifically looking at Candidate ${candidateId} or students with similar profiles.`);
    } else if (intentType === "demo") {
      setMessage("Hi, we would like to book a demo/call to discuss the AI internship sponsorship program and recruiting matching options.");
    } else if (intentType === "founding") {
      setMessage("Hi, we want to inquire about the remaining spots in the Founding Sponsor Cohort and custom recruitment pipelines.");
    }
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculator computations
  const monthlyCost = studentsSponsored * 100;
  const yearlyCost = monthlyCost * 6; // 6-month contract minimum
  const averageRecruitingAgencyFee = 4500; // Flat fee or percentage of salary
  const savings = Math.max(0, (averageRecruitingAgencyFee * Math.ceil(studentsSponsored / 2)) - yearlyCost);

  return (
    <MainLayout>
      <div className="relative min-h-screen bg-background overflow-hidden">
        
        {/* Glow effect backgrounds */}
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-secondary/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-[50%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[180px] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-8 border border-primary/20 bg-primary/5"
          >
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span>Sponsor AI Grants • Hire Top Tech Minds</span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sponsor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow">
              AI Internships.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fund premium AI tools and internships for high-performing students while building an exclusive recruitment pipeline of vetted AI engineers and researchers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ButtonGlow onClick={() => scrollToForm(undefined, undefined, "sponsor")} size="lg" className="w-full sm:w-auto">
              Become a Sponsor
            </ButtonGlow>
            <ButtonGlow variant="outline" onClick={() => scrollToForm(undefined, undefined, "demo")} size="lg" className="w-full sm:w-auto">
              Book a Demo
            </ButtonGlow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-xs sm:text-sm text-muted-foreground uppercase font-mono tracking-wider"
          >
            Access students from IITs, NITs, and top AI communities.
          </motion.div>
        </section>

        {/* TRUST / STATS STRIP */}
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
              <div className="flex flex-col justify-center items-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">500+</span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider font-mono">AI Students</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">12+</span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider font-mono">Campuses</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">2,000+</span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider font-mono">Applicants</span>
              </div>
              <div className="flex flex-col justify-center items-center pt-6 md:pt-0">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">90%+</span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider font-mono">Project Completion</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>The Resource & Talent Gap</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              The Artificial Barrier in AI Development
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Millions of talented developers are held back by tool access, while high-growth teams struggle to source validated builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Card: Student side */}
            <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden group hover:border-red-500/25 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-display text-sm font-bold border border-red-500/20">
                  01
                </div>
                <h3 className="text-white font-display text-2xl font-bold">Students: Locked Out of Tools</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  High-performing engineering students in emerging economies are blocked by the $20/month pricing gap of advanced AI models (Claude 3.5, GPT-4) and GPU APIs. A week of living expenses shouldn&apos;t limit the next generation of builders.
                </p>
              </div>
            </div>

            {/* Right Card: Recruiter side */}
            <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden group hover:border-red-500/25 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-display text-sm font-bold border border-red-500/20">
                  02
                </div>
                <h3 className="text-white font-display text-2xl font-bold">Teams: High Recruiting Overhead</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Recruiters waste months vetting traditional resumes that lack verified, hands-on generative AI experience. Middleman agencies charge exorbitant placement fees without verifying code quality or shipping velocity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Sponsorship Workflow</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              How the Program Works
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              A friction-free ecosystem connecting sponsor funding directly to practical education and talent recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Step 01</div>
                <h3 className="text-white font-display text-xl font-bold">Sponsors Fund AI Tools</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Companies fund tax-deductible AI grant sponsorships ($100 per student/month). We provision them with premium AI API keys, GPUs, and development sandboxes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-secondary/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-secondary font-mono text-xs uppercase tracking-wider font-bold">Step 02</div>
                <h3 className="text-white font-display text-xl font-bold">Students Build Real Projects</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Under expert developer mentorship, outstanding students build, refine, and ship production-ready LLM agents, vector search tools, and RAG architectures.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-accent/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-accent font-mono text-xs uppercase tracking-wider font-bold">Step 03</div>
                <h3 className="text-white font-display text-xl font-bold">Sponsors Hire Direct</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your engineering team gains direct recruiting access to these pre-vetted AI scholars. Hire top performers with zero recruitment agency commissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPONSOR BENEFITS SECTION & CALCULATOR */}
        <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Business ROI</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Sponsor Benefits & Outcomes
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              We align educational charity with concrete recruitment outcomes for your engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Benefit 1 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Early Hiring Pipeline</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Connect and build relationships with elite AI talent months before they hit the open market. Secure talent before tech giants do.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display text-lg font-bold mb-2 font-display">Bypass Recruitment Fees</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Hire directly from the source. No agency commissions, no flat fees per candidate, and no hidden developer placement costs.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Employer Branding</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Position your engineering organization as a premium technology partner and innovation supporter within India&apos;s elite universities (IITs, NITs).
              </p>
            </div>
            {/* Benefit 4 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display text-lg font-bold mb-2 font-display">Vetted AI Builders</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Assess candidates based on real-world Git portfolios, actual application sandboxes, and tracked build velocity, not hypothetical tests.
              </p>
            </div>
            {/* Benefit 5 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Ecosystem Visibility</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Get your products, developer tools, APIs, and frameworks directly in front of thousands of high-velocity student builders.
              </p>
            </div>
            {/* Benefit 6 */}
            <div className="glass-panel rounded-3xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Quantifiable CSR Impact</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Sponsor top-performing students from emerging markets, boosting education equity and closing the global AI tools pricing gap.
              </p>
            </div>
          </div>

          {/* Calculator inside the Benefits Section */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-white font-display text-xl sm:text-2xl font-bold">Estimate Your Recruitment Cost Savings</h3>
              <p className="text-muted-foreground text-sm mt-1">See how funding grants compares directly to recruiter hiring fees.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Slider Input */}
              <div className="lg:col-span-7 rounded-3xl glass-panel border border-white/10 p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-display text-lg font-bold mb-6">Select Sponsoring Scale</h4>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-medium">Students to Sponsor:</span>
                      <span className="text-primary font-display text-2xl font-extrabold tracking-wider">{studentsSponsored} Students</span>
                    </div>

                    <input 
                      type="range" 
                      min="1" 
                      max="20" 
                      value={studentsSponsored} 
                      onChange={(e) => setStudentsSponsored(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" 
                    />
                    
                    <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                      <span>1 Student ($100/mo)</span>
                      <span>10 Students ($1,000/mo)</span>
                      <span>20 Students ($2,000/mo)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">Included Sponsoring Perks:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> Full resume database access</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> Precise skills-matching</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> Job board featured ads</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> Shipped student portfolios</li>
                  </ul>
                </div>
              </div>

              {/* Estimate Results */}
              <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-36 h-36 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    Sponsorship Benefits Estimator
                  </span>

                  <div className="space-y-1">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider font-mono">Monthly Sponsorship</span>
                    <div className="text-white font-display text-4xl sm:text-5xl font-extrabold flex items-baseline">
                      ${monthlyCost}
                      <span className="text-muted-foreground text-sm font-normal font-sans ml-1">/ month</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Contract Term (6-mo min):</span>
                      <span className="text-white font-mono font-medium">${yearlyCost} total</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Recruiter Fees Avoided:</span>
                      <span className="text-emerald-400 font-mono font-medium">~${averageRecruitingAgencyFee * Math.ceil(studentsSponsored / 2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1 font-mono">Net Recruitment Savings</div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary font-display text-3xl sm:text-4xl font-extrabold text-glow">
                    ${savings} +
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2 leading-normal">
                    *Based on traditional agency rates averaging ${averageRecruitingAgencyFee} per developer hire.
                  </p>
                  
                  <button 
                    onClick={() => scrollToForm(studentsSponsored >= 10 ? "Global Enterprise" : studentsSponsored >= 5 ? "Big Company" : "Startup", undefined, "scale")} 
                    className="w-full mt-6 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.25)] flex items-center justify-center gap-2 text-sm"
                  >
                    Select Sponsoring Scale <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TALENT PIPELINE SECTION */}
        <section id="candidates-preview" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-3">
              <Search className="w-3.5 h-3.5" />
              <span>Elite Talent Pool</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Vetted AI Engineers & Researchers
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              We maintain a rigorous screening process to connect you with the top 5% of student builders.
            </p>
          </div>

          {/* Vetting process block */}
          <div className="glass-panel rounded-3xl border border-white/5 p-8 max-w-5xl mx-auto mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-white font-display text-xl font-bold mb-6">Our 3-Stage Screening Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="text-accent font-display text-3xl font-extrabold">01</span>
                <h4 className="text-white font-bold text-sm">Academic & Git Audit</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  We filter candidates from IITs, NITs, and top tech communities. We evaluate open-source contributions, algorithms, and CGPA (&gt;8.5).
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-accent font-display text-3xl font-extrabold">02</span>
                <h4 className="text-white font-bold text-sm">Hands-on AI Test</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Students build, deploy, and fine-tune actual models. We test them on RAG systems, API integrations, and code optimization.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-accent font-display text-3xl font-extrabold">03</span>
                <h4 className="text-white font-bold text-sm">Sandbox Performance</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Candidates build production-ready applications within the IIT AI Studio sandbox, tracked directly via shipped commits.
                </p>
              </div>
            </div>
          </div>

          {/* Candidates grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {MOCK_CANDIDATES.map((cand) => (
              <motion.div
                key={cand.id}
                whileHover={{ y: -6 }}
                className="rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col justify-between group hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Top Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-mono text-primary font-bold">{cand.id}</span>
                      <h3 className="text-white font-display text-lg font-bold mt-1 leading-tight">{cand.university}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{cand.degree}</p>
                    </div>
                    <Badge variant="secondary" className="bg-secondary/15 text-secondary border border-secondary/20 text-[10px] px-2 py-0.5">
                      GPA: {cand.cgpa}
                    </Badge>
                  </div>

                  {/* Specialization & Skills */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">Verified Focus</span>
                      <p className="text-white font-bold text-xs mt-0.5">{cand.specialization}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cand.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 text-[10px] text-muted-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-white font-bold flex items-center gap-1.5 mb-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" /> Shipped Project:
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cand.project}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                  <div className="text-[10px] text-emerald-400 font-medium mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {cand.status}
                  </div>
                  
                  <button 
                    onClick={() => scrollToForm(undefined, cand.id)} 
                    className="w-full py-3 bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 hover:border-transparent text-white text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    Request Student Match <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Need candidates with custom stacks (e.g. Rust, Go, CUDA, LLM fine-tuning)? <br />
              <span className="text-white font-semibold">We can build and train custom student cohorts matching your exact engineering requirements.</span>
            </p>
          </div>
        </section>

        {/* FOUNDING SPONSOR SECTION */}
        <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 font-mono uppercase tracking-wider text-xs">
                Limited Founding Sponsor Cohort
              </Badge>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Secure Priority Access as a Founding Partner
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Position your team ahead of the curve. Founding Sponsors gain direct access to students before graduation, prominent branding, and the ability to influence training curriculums.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-white font-medium">First-pick recruitment matching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-white font-medium">Featured partner logo placement</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-white font-medium">Request custom technology cohorts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-white font-medium">Influence educational curriculum</span>
                </div>
              </div>
              
              <div className="pt-6">
                <ButtonGlow 
                  onClick={() => scrollToForm("Big Company", undefined, "founding")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black border-none shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                >
                  Secure Founding Spot
                </ButtonGlow>
              </div>
            </div>
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
            <p className="text-muted-foreground text-base sm:text-lg">
              Everything you need to know about the AI Grant and internship sponsorship.
            </p>
          </div>

          <div className="space-y-4">
            {FAQs.map((faq, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div 
                  key={index} 
                  className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-white font-bold text-sm sm:text-base font-display">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
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
                        <div className="px-6 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-3">
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

        {/* FINAL CTA SECTION & INTAKE FORM */}
        <section className="py-20 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5" ref={formRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Build Your AI Hiring Pipeline Today
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Submit your hiring and sponsorship preferences below. Our partnership manager will reach out with resume matches in 24-48 hours.
            </p>
          </div>

          <div className="rounded-3xl glass-panel border border-white/10 p-8 md:p-12 relative overflow-hidden bg-gradient-to-b from-card/80 to-card/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            
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
                      <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Contact Email</label>
                      <input 
                        type="email" 
                        required 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g. recruit@company.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white font-bold uppercase tracking-wider font-mono">Target Sponsorship Plan</label>
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
                      className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-mono"
                    >
                      Apply for Sponsorship & Talent Access <Send className="w-4 h-4" />
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
                  <h3 className="text-white font-display text-2xl font-bold">Application Received!</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. A partnership coordinator from IIT AI Studio will reach out to <strong className="text-white">{contactEmail}</strong> to review your requirements and provide curated resume portfolios.
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
          
          <div className="contact-row mt-12 flex justify-center gap-6">
            <a href="mailto:contact@iitaistudio.com" className="text-sm text-muted-foreground hover:text-white flex items-center gap-2 transition-colors">
              <Send className="w-4 h-4 text-primary" /> contact@iitaistudio.com
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a href="https://www.IITAIS.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-white flex items-center gap-2 transition-colors">
              🌐 www.IITAIS.com
            </a>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
