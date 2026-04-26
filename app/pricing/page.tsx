"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  const tools = [
    {
      name: "Calling Agents",
      price: "$100",
      period: "/month",
      slug: "calling-agents",
    },
    {
      name: "Newsletter Magazine",
      price: "$15",
      period: "/month",
      slug: "newsletter-magazine-agent",
    },
    {
      name: "Automatic Email Sender",
      price: "$40",
      period: "/month",
      slug: "automatic-email-sender",
    },
    {
      name: "Sales Tool",
      price: "$60",
      period: "/month",
      slug: "sales-automation",
    },
    {
      name: "OpenClaw Setup",
      price: "$60",
      period: "/meeting",
      slug: "openclaw-setup",
    },
    {
      name: "Claude Code & Cowork",
      price: "$100",
      period: "/meeting",
      slug: "claude-code-cowork",
    },
  ];

  const bundle = {
    name: "Tool Bundle",
    description: "Access all tools at a discounted rate",
    price: "$200",
    period: "/month",
  };

  return (
    <MainLayout>
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">

        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Price <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">List</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transparent pricing for every tool. Pick what you need, or grab the bundle.
          </motion.p>
        </div>

        {/* AI Grant and Internship Matching */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
            <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm font-bold tracking-wider">01</div>
            AI Grant and Internship Matching
          </h2>
          <div className="glass-panel rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-medium text-white">Company Access to AI Students</h3>
            <div className="md:text-right">
              <div className="font-display text-4xl font-bold text-white">100 USD</div>
              <div className="text-primary mt-1 font-medium">/ Month / Company</div>
            </div>
          </div>
        </motion.div>

        {/* Our Original Product */}
        <div className="mb-16">
          <motion.h2
            className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-lg text-secondary text-sm font-bold tracking-wider">02</div>
            Our Original Product
          </motion.h2>

          {/* Pricing Table */}
          <motion.div
            className="glass-panel rounded-3xl border border-white/10 overflow-hidden mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Tool</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-right">Unit Price</div>
            </div>

            {/* Tool Rows */}
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                className="grid grid-cols-2 gap-4 px-6 py-5 border-b border-white/5 hover:bg-white/[0.03] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <Link href={`/tools/${tool.slug}`} className="text-white font-medium group-hover:text-primary transition-colors">
                    {tool.name}
                  </Link>
                </div>
                <div className="text-right flex items-center justify-end">
                  <span className="font-display text-xl font-bold text-white">{tool.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{tool.period}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bundle Card */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative glass-panel rounded-3xl p-8 border-primary shadow-[0_0_40px_-15px_rgba(0,255,255,0.3)] bg-card/60 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Best Value
              </div>

              <h3 className="font-display text-3xl font-bold text-white mb-2 mt-2">{bundle.name}</h3>
              <p className="text-muted-foreground mb-6">{bundle.description}</p>

              <div className="flex items-baseline justify-center mb-8">
                <span className="font-display text-6xl font-bold text-white">{bundle.price}</span>
                <span className="text-muted-foreground text-lg ml-2">{bundle.period}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tools.map((tool) => (
                  <span key={tool.slug} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-white/70">
                    {tool.name}
                  </span>
                ))}
              </div>

              <Link href="/ai-grant">
                <ButtonGlow size="lg" className="w-full sm:w-auto px-12" data-testid="button-pricing-bundle">
                  Get the Bundle
                </ButtonGlow>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Line Development */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
            <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-bold tracking-wider">03</div>
            Line Development
          </h2>
          <div className="glass-panel rounded-3xl border border-white/10 p-8">
            <p className="text-white/90 leading-relaxed text-lg mb-4">
              Each month, the customer evaluates the development progress of IITAIS and determines the payment amount, with a minimum of <strong className="text-primary">USD 100 per month</strong>.
            </p>
            <p className="text-white/90 leading-relaxed text-lg mb-6">
              The assessed amount is finalized at the end of each month, and payment is made by the 10th of the following month.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-muted-foreground text-sm italic">
                * IITAIS reserves the right to review the assessed amount and may renegotiate terms for the continuation of services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}

