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
  FileText
} from "lucide-react";
import Link from "next/link";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
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

export default function SponsorInternshipsPage() {
  // ROI Calculator state
  const [studentsSponsored, setStudentsSponsored] = useState(5);
  
  // Contact Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [selectedTier, setSelectedTier] = useState("Big Company");
  const [message, setMessage] = useState("");
  
  // Candidate Inquiry State
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  
  const formRef = useRef<HTMLDivElement>(null);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setFormSubmitted(true);
  };

  // Scroll to form helper
  const scrollToForm = (tier?: string, candidateId?: string) => {
    if (tier) {
      setSelectedTier(tier);
    }
    if (candidateId) {
      setMessage(`Hi, we are interested in discussing internship matching, specifically looking at Candidate ${candidateId} or students with similar profiles.`);
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

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
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
            AI Internship Matching <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow">
              for High-Growth Teams.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fund premium AI tools for talented students and recruit directly from a curated AI talent pool.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ButtonGlow onClick={() => scrollToForm()} size="lg">
              Partner with Us <ArrowRight className="w-5 h-5 ml-2" />
            </ButtonGlow>
            <ButtonGlow variant="outline" onClick={() => {
              document.getElementById("candidates-preview")?.scrollIntoView({ behavior: "smooth" });
            }} size="lg">
              Explore Talent Profiles
            </ButtonGlow>
          </motion.div>
        </section>

        {/* PROBLEM & SYNERGY SECTION */}
        <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-secondary font-display font-semibold uppercase tracking-wider text-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                The Talent Paradigm
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                How Sponsoring Solves Your Hiring Bottlenecks
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Finding developers with practical, hands-on experience in generative AI is exceptionally challenging. 
                Most university students in emerging markets are locked out of premium models like GPT-4, Claude 3.5, and model hosting due to pricing.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Continuous Skill Verification</h4>
                    <p className="text-muted-foreground text-sm">Students in our program actively build production-level apps, API integrations, and fine-tuning pipelines. You don&apos;t just read a resume; you evaluate actual shipped code.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Direct matching, no agency markups</h4>
                    <p className="text-muted-foreground text-sm">By sponsoring their AI licenses today, you bypass costly corporate recruitment agencies and hire interns directly at source.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">ESG & Social Impact ROI</h4>
                    <p className="text-muted-foreground text-sm">Quantifiable CSR impact supporting education equity, while establishing your brand as a technology pioneer within premier institutions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Process Panel */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl glass-panel border border-white/10 p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="text-primary w-5 h-5 animate-pulse" />
                  The Sponsorship Lifecycle
                </h3>

                <div className="relative border-l-2 border-primary/20 pl-8 ml-3 space-y-8">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-background border border-primary/50 text-primary font-display flex items-center justify-center text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                      01
                    </div>
                    <h4 className="text-white font-bold text-base">License Funding</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Your company funds premium AI grants ($100 per student/month). We provision them with full API and tool access.
                    </p>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-background border border-secondary/50 text-secondary font-display flex items-center justify-center text-xs font-bold shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                      02
                    </div>
                    <h4 className="text-white font-bold text-base">Practical Training & Builds</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Students build real-world AI applications, tools, and integrations within the IIT AI Studio sandbox, tracked via GitHub.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-background border border-accent/50 text-accent font-display flex items-center justify-center text-xs font-bold shadow-[0_0_12px_rgba(236,72,153,0.2)]">
                      03
                    </div>
                    <h4 className="text-white font-bold text-base">Curated Matching</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Specify your job requirements. Our platform matches you with students who have verified skills matching your tech stack.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-background border border-emerald-500/50 text-emerald-400 font-display flex items-center justify-center text-xs font-bold shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                      04
                    </div>
                    <h4 className="text-white font-bold text-base">Seamless Placement</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Interview shortlisted candidates directly. Fast placements with zero recruiting agency fees or placement commissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE CALCULATOR SECTION */}
        <section className="py-20 relative z-10 bg-muted/30 border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-primary font-display font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
                <Sliders className="w-4 h-4" />
                ROI & Cost Estimator
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
                Calculate Your Recruitment Savings
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Drag the slider to see how many student grants you want to sponsor, and evaluate your cost savings compared to traditional recruitment agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Slider Input */}
              <div className="lg:col-span-7 rounded-3xl glass-panel border border-white/10 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-display text-xl font-bold mb-6">Select Sponsoring Scale</h3>
                  
                  <div className="space-y-8">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-medium">Students to Sponsor:</span>
                      <span className="text-primary font-display text-3xl font-extrabold tracking-wider">{studentsSponsored} Students</span>
                    </div>

                    <input 
                      type="range" 
                      min="1" 
                      max="20" 
                      value={studentsSponsored} 
                      onChange={(e) => setStudentsSponsored(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" 
                    />
                    
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>1 Student ($100/mo)</span>
                      <span>10 Students ($1,000/mo)</span>
                      <span>20 Students ($2,000/mo)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                  <h4 className="text-white font-bold text-sm">Included with this sponsorship:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Full resume database access</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Target matching algorithm</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Featured job board placement</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Technical build portfolios</li>
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
                    <span className="text-muted-foreground text-sm font-medium">Monthly Investment</span>
                    <div className="text-white font-display text-4xl sm:text-5xl font-extrabold flex items-baseline">
                      ${monthlyCost}
                      <span className="text-muted-foreground text-sm font-normal font-sans ml-1">/ month</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Contract Term (6-mo min):</span>
                      <span className="text-white font-mono font-medium">${yearlyCost} total</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Recruiter Fees Avoided:</span>
                      <span className="text-emerald-400 font-mono font-medium">~${averageRecruitingAgencyFee * Math.ceil(studentsSponsored / 2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1 font-mono">Net Recruitment Savings</div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary font-display text-3xl sm:text-4xl font-extrabold text-glow">
                    ${savings} +
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-normal">
                    *Based on placement agency market rate averaging ${averageRecruitingAgencyFee} per AI engineering hire.
                  </p>
                  
                  <button 
                    onClick={() => scrollToForm(studentsSponsored >= 10 ? "Global Enterprise" : studentsSponsored >= 5 ? "Big Company" : "Startup")} 
                    className="w-full mt-6 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.25)] flex items-center justify-center gap-2"
                  >
                    Select this scale <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CANDIDATES PREVIEW SECTION */}
        <section id="candidates-preview" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-secondary font-display font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
              <Search className="w-4 h-4" />
              Talent Pool Preview
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Meet Our Premium AI Scholars
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Here is a representative preview of students currently funded by the AI Grant, showcasing their verified specializations, technical projects, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <h3 className="text-white font-display text-xl font-bold mt-1">{cand.university}</h3>
                      <p className="text-xs text-muted-foreground">{cand.degree}</p>
                    </div>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border border-secondary/20 text-xs py-1">
                      GPA: {cand.cgpa}
                    </Badge>
                  </div>

                  {/* Specialization & Skills */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase font-mono tracking-wider">Verified Focus</span>
                      <p className="text-white font-bold text-sm mt-0.5">{cand.specialization}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cand.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 text-xs text-muted-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-xs text-white font-bold flex items-center gap-1.5 mb-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" /> Shipped Project:
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cand.project}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                  <div className="text-[11px] text-emerald-400 font-medium mb-4 flex items-center gap-1.5">
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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Need candidates with a specific stack (e.g. Rust, Go, TensorFlow, specific LLM fine-tuning)? <br />
              <span className="text-white font-semibold">We build custom talent cohorts tailored directly to your engineering requirements.</span>
            </p>
          </div>
        </section>

        {/* COMPARATIVE BENEFITS & TIERS TABLE */}
        <section className="py-20 relative z-10 bg-muted/10 border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-accent font-display font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
                <Building2 className="w-4 h-4" />
                Partnership Tiers
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
                Sponsorship Plans & Benefits
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Choose the scale that fits your hiring velocity. Sponsoring directly funds students while securing recruiter access.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Startup Tier */}
              <div className="rounded-3xl glass-panel border border-white/5 p-8 flex flex-col justify-between relative group hover:border-white/10 transition-all duration-300">
                <div>
                  <div className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Startups & SMEs</div>
                  <h3 className="text-white font-display text-2xl font-bold mt-1">Sponsor Cohort</h3>
                  <p className="text-muted-foreground text-xs mt-1">For companies with under 1,000 employees</p>
                  
                  <div className="my-6">
                    <span className="text-white font-display text-4xl font-extrabold">$100</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                    <p className="text-xs text-muted-foreground/60 mt-1">6-month minimum commitment</p>
                  </div>
                  
                  <ul className="space-y-3 border-t border-white/5 pt-6 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sponsor 1 student per $100/mo</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Access to anonymized student resumes</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Feature 1 active internship posting</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Standard listing as AI Grant Partner</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6">
                  <ButtonGlow 
                    variant="outline" 
                    className="w-full flex justify-center py-3.5" 
                    onClick={() => scrollToForm("Startup")}
                  >
                    Select Startup Tier
                  </ButtonGlow>
                </div>
              </div>

              {/* Big Company Featured Tier */}
              <div className="rounded-3xl glass-panel border border-secondary/40 p-8 flex flex-col justify-between relative group hover:border-secondary/60 transition-all duration-300 shadow-[0_0_50px_rgba(168,85,247,0.15)] bg-gradient-to-b from-secondary/5 to-transparent">
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary to-accent text-white font-mono font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  Most Popular for Hiring
                </div>
                
                <div>
                  <div className="text-secondary font-mono text-xs uppercase tracking-wider mt-2">Growing Teams</div>
                  <h3 className="text-white font-display text-2xl font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">Big Companies</h3>
                  <p className="text-muted-foreground text-xs mt-1">1,000 to 10,000 employees</p>
                  
                  <div className="my-6">
                    <span className="text-white font-display text-4xl font-extrabold">$500</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                    <p className="text-xs text-muted-foreground/60 mt-1">6-month minimum commitment</p>
                  </div>
                  
                  <ul className="space-y-3 border-t border-white/5 pt-6 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium">Sponsor 5+ students simultaneously</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Full resume & project portfolio access</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Featured matching (match by exact skills)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Feature unlimited internship postings</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Quarterly student progress reports</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6">
                  <ButtonGlow 
                    variant="secondary" 
                    className="w-full flex justify-center py-3.5" 
                    onClick={() => scrollToForm("Big Company")}
                  >
                    Select Featured Tier
                  </ButtonGlow>
                </div>
              </div>

              {/* Enterprise Tier */}
              <div className="rounded-3xl glass-panel border border-white/5 p-8 flex flex-col justify-between relative group hover:border-white/10 transition-all duration-300">
                <div>
                  <div className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Global Enterprises</div>
                  <h3 className="text-white font-display text-2xl font-bold mt-1">Custom Cohort</h3>
                  <p className="text-muted-foreground text-xs mt-1">Over 10,000 employees</p>
                  
                  <div className="my-6">
                    <span className="text-white font-display text-4xl font-extrabold">Bespoke</span>
                    <p className="text-xs text-muted-foreground/60 mt-1">Bespoke pricing based on recruitment volume</p>
                  </div>
                  
                  <ul className="space-y-3 border-t border-white/5 pt-6 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium">Bespoke student training cohorts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Co-branded curriculum & private hackathons</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dedicated recruiter matching assistant</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Direct hiring pipelines & private interviews</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6">
                  <ButtonGlow 
                    variant="outline" 
                    className="w-full flex justify-center py-3.5" 
                    onClick={() => scrollToForm("Global Enterprise")}
                  >
                    Inquire for Enterprise
                  </ButtonGlow>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE FORM SECTION */}
        <section ref={formRef} className="py-20 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl glass-panel border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-3xl font-bold text-white mb-2">Build Your AI Talent Channel</h2>
              <p className="text-muted-foreground text-sm">
                Submit this application form. Our partnerships coordinator will reach out to organize matching requirements and resume previews within 24-48 hours.
              </p>
            </div>

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
                      <label className="text-xs text-white font-bold uppercase tracking-wider">Company Name</label>
                      <input 
                        type="text" 
                        required 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Vertex AI Inc." 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs text-white font-bold uppercase tracking-wider">Contact Email</label>
                      <input 
                        type="email" 
                        required 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g. recruit@company.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white font-bold uppercase tracking-wider">Target Sponsorship Plan</label>
                    <select 
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 text-sm transition-colors"
                    >
                      <option className="bg-card text-white" value="Startup">Startups & SMEs ($100/mo - 1 Student)</option>
                      <option className="bg-card text-white" value="Big Company">Big Companies ($500/mo - 5+ Students)</option>
                      <option className="bg-card text-white" value="Global Enterprise">Global Enterprise (Custom / Cohort Support)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white font-bold uppercase tracking-wider">Internship Requirements / Messages</label>
                    <textarea 
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="List desired technology stacks, internship length, or specific roles you are looking to hire..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/95 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2"
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
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    Thank you for applying. A representative from IIT AI Studio will reach out to <strong className="text-white">{contactEmail}</strong> to review your talent pipeline specs.
                  </p>
                  
                  <div className="pt-6">
                    <ButtonGlow variant="outline" onClick={() => setFormSubmitted(false)}>
                      Submit Another Inquiry
                    </ButtonGlow>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
