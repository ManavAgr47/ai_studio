"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Users2, Sparkles, Building2, GraduationCap, Zap } from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-8 border border-primary/20 bg-primary/5"
        >
          <Sparkles className="w-4 h-4" />
          <span>Founders: Dai Murata & Hardik Advani</span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white max-w-5xl mx-auto leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          IIT AI Studio
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are currently in the midst of an AI revolution. However, many students are unable to utilize AI for learning and research due to its high cost. We will create a platform where students can excel and thrive by leveraging AI. We will build the &quot;roads&quot; (AI Highway), and students, as &quot;vehicles&quot;, will freely travel along them.
        </motion.p>

        {/* AI Grant Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-4xl mx-auto text-left"
        >
          <div className="relative rounded-3xl glass-panel border border-primary/20 p-8 md:p-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col items-start gap-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                AI Grant
              </h3>

              <div className="space-y-4 text-lg text-white/80 leading-relaxed font-light mb-2">
                <p>
                  Starting with the Indian Institutes of Technology (IIT), we provide a premium AI utilization environment free of charge. By offering high-quality, paid AI tools, we help students dramatically improve their learning and research.
                </p>
                <p>
                  <strong className="text-white font-medium">Skill Learning:</strong> We focus on enhancing AI utilization and development skills, including CloudCode and Slack integration.
                </p>
                <p>
                  <strong className="text-white font-medium">Global Expansion:</strong> Our vision is to expand our platform from India to emerging countries around the world.
                </p>
              </div>

              <div className="flex w-full border-t border-white/10 pt-6 mt-2 items-center justify-center">
                <Link href="/contact" className="font-medium text-primary hover:text-white transition-colors flex items-center gap-2">
                  AI Grant Request <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Pillar 1: Internship Matching */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-10 rounded-3xl border-primary/20 bg-primary/5 relative group overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/30">
                <Users2 className="w-8 h-8 text-primary" />
              </div>

              <h2 className="font-display text-4xl font-bold text-white mb-4">Internship Matching</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We match top university students from around the world possessing advanced AI skills with companies seeking elite interns.
              </p>

              <div className="space-y-4 mb-10 border-b border-white/10 pb-8 flex-grow">
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Top university students worldwide with practical AI skills
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Priority referral to AI Grant sponsoring companies
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Sponsorship fee: $100 / month (6-month contract)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <Link href="/internships" className="w-full">
                  <div className="w-full py-4 px-2 rounded-xl border border-primary/30 bg-primary/10 text-primary font-bold text-center hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <GraduationCap className="w-4 h-4 hidden sm:block" /> For Students
                  </div>
                </Link>
                <Link href="/sponsors" className="w-full">
                  <div className="w-full py-4 px-2 rounded-xl border border-accent/30 bg-accent/10 text-accent font-bold text-center hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Building2 className="w-4 h-4 hidden sm:block" /> For Sponsors
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Pillar 2: AI Development */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-panel p-10 rounded-3xl border-secondary/20 bg-secondary/5 relative group overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-8 border border-secondary/30">
                <Code2 className="w-8 h-8 text-secondary" />
              </div>

              <h2 className="font-display text-4xl font-bold text-white mb-4">AI Development</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Students earn income through AI contract development, while we also support them in creating innovative tools to thrive in the AI era. These tools act as core revenue sources to sustain our operations.
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">AI Contract Development</strong><br />
                    <span className="text-sm">Building AI tools in response to client company requests.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">In-house Tool Support</strong><br />
                    <span className="text-sm">We provide total support for the development and sales of original AI tools.</span>
                  </div>
                </div>
              </div>

              <Link href="/ai-development" className="mt-auto inline-block w-full">
                <div className="w-full py-4 rounded-xl border border-secondary/30 bg-secondary/10 text-secondary font-bold text-center hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  Explore AI Tools <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Connection / Synergy Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h3 className="font-display text-3xl font-bold text-white mb-6">
            The IIT AI Synergy
          </h3>
          <p className="text-lg text-muted-foreground">
            Development and Recruiting are profoundly interconnected. Student skill advancement directly fuels rapid, high-quality development for our clients, while enterprise projects provide unparalleled real-world experience for our talent pool.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

