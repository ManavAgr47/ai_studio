"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ToolCard } from "@/components/ui/ToolCard";
import { toolsData } from "@/lib/data";
import { motion } from "framer-motion";
import { Sparkles, Server } from "lucide-react";

export default function AiDevelopment() {
  const tools = toolsData;

  const skills = [
    "SNS Promotions (Instagram / X / LinkedIn)",
    "Content Creation (YouTube / Veo3)",
    "CRM Management & Dashboarding",
    "Data Engineering",
    "CRM Systems (Snowflake, MongoDB)",
    "SQL Querying",
    "No-Code CRMs (Wix, Wordpress)",
    "Full-Stack Development (MERN)",
    "Deployment (AWS, Vercel)",
    "Python Scripting (Flask APIs)"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" /> The IIT Student Pool
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            Custom AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Development</span>
          </h1>

          <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-4xl text-center">
              IIT <span className="text-white/60">(Indian Institute of Technology)</span> is one of Asia's premier engineering institutions. Our passionate student engineers execute your AI implementations—ensuring <strong className="text-white font-medium">low cost, high quality, and rapid delivery</strong>. This is the hallmark of our AI development.
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-6" />
            <p className="text-lg text-white/70 leading-relaxed max-w-3xl text-center">
              If you have a clear vision, explore our existing solutions. If no out-of-the-box tool fits, we will develop a custom AI solution from scratch tailored exactly to your requirements.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        {tools && tools.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-3xl border-white/5">
            <p className="text-xl text-muted-foreground font-light">No tools available in the registry.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, idx) => (
              <ToolCard key={tool.id} tool={tool} index={idx} />
            ))}
          </div>
        )}
      </div>

      {/* More in n8n & Full Stack Section */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <motion.div
          className="glass-panel p-10 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Background inside the panel */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">

            <div className="lg:w-5/12 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center mb-8 shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Beyond <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">AI Tools</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                We leverage modern full-stack workflows, no-code integrations, and seamless pipelines to build robust and scalable ecosystems for your business.
              </p>
            </div>

            <div className="lg:w-7/12 flex flex-wrap justify-center lg:justify-end gap-3 md:gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-full glass-panel border border-white/10 text-sm md:text-base font-medium text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
}
