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
            Products and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Development</span>
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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-white mb-4">Our Original Product</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
        </motion.div>
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

      {/* Contract Development Method Heading */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Contract Development Method</h2>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
      </section>

      {/* Side by Side Cards */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Card: Beyond AI Tools */}
          <motion.div
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl h-full flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

            <div className="relative flex flex-col h-full bg-cover">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.15)] flex-shrink-0">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                  Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">AI Tools</span>
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We leverage modern full-stack workflows, no-code integrations, and seamless pipelines to build robust and scalable ecosystems for your business.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Our Method */}
          <motion.div
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl h-full flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-10 pb-6 border-b border-white/10">Our Method</h3>

            <div className="relative border-l-2 border-white/10 ml-4 space-y-10 flex-grow">
              {/* Step 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <h4 className="text-xl font-display font-bold text-white mb-2">Hearing Client Needs</h4>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <h4 className="text-xl font-display font-bold text-white mb-3">Proposal how to develop</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="glass-panel px-4 py-2 rounded-xl border border-white/5 border-l-primary/50 border-l-2 text-sm text-white/80 font-medium">Mockup</div>
                  <div className="glass-panel px-4 py-2 rounded-xl border border-white/5 border-l-secondary/50 border-l-2 text-sm text-white/80 font-medium">Brief document</div>
                  <div className="glass-panel px-4 py-2 rounded-xl border border-white/5 border-l-primary/50 border-l-2 text-sm text-white/80 font-medium">Check list</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary ring-4 ring-background" />
                <h4 className="text-xl font-display font-bold text-white mb-1">PoC</h4>
                <p className="text-sm text-muted-foreground">Evaluate other</p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <h4 className="text-xl font-display font-bold text-white mb-1">Actual Product development</h4>
                <p className="text-sm text-muted-foreground">Evaluate other</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Price */}
      <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-3xl border border-primary/20 relative overflow-hidden shadow-[0_0_40px_-15px_rgba(0,255,255,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

          <h2 className="text-3xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
            Price
          </h2>

          <div className="space-y-6 text-lg text-white/90 leading-relaxed font-light">
            <p className="text-2xl font-medium text-white mb-2">Our pricing is flexible.</p>
            <p>Our pricing is based on a free-market pricing system. <strong className="text-primary font-medium">Please pay only the amount the customer wishes to pay.</strong></p>
            <p>This is because it's difficult to predict what level of service we can provide in the preliminary stages.</p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 my-8">
              <p className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">*</span>
                <span>However, a <strong className="text-white">minimum guarantee of $100</strong> is required upon commencement of work.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">*</span>
                <span>However, the cost of essential development tools such as server fees and AI usage fees will be borne by the customer.</span>
              </p>
            </div>

            <p className="text-muted-foreground">
              This pricing structure ensures that customers will pay a fair amount if they determine that we are a necessary and valuable service.
              However, if you decide our service is not worth it, you only have to pay $100.
            </p>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
}
