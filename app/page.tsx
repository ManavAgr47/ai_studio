"use client";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Code, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";

export default function Home() {
  const qaItems = [
    {
      q: "Is AI the answer to your repetitive work?",
      a: "IIT AI Studio builds voice, email, and text AI agents for real-world workflows. From auto-calling to email sorting — we automate your workflow so you can focus on growing."
    },
    {
      q: "Who are we?",
      a: "We’re IIT AI Studio by Aiberry — founded by Dai Murata and Hardik Advani — building real AI systems used by businesses worldwide."
    },
    {
      q: "What kind of work do we automate?",
      a: "Sales calls, lead generation emails, newsletter summarization, data input, CRM management, and more."
    },
    {
      q: "Why choose us?",
      a: "Because our tools plug directly into your business — no extra setup, no fluff. Just time saved and performance boosted."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        
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
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white max-w-4xl mx-auto leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          IIT AI Studio <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow">
            by Aiberry
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Building Production-Ready AI Systems for Real Businesses
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/products">
            <ButtonGlow size="lg" className="w-full sm:w-auto" data-testid="button-explore-products">
              Explore Tools <ArrowRight className="w-5 h-5 ml-2" />
            </ButtonGlow>
          </Link>
          <Link href="/contact">
            <ButtonGlow variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-contact-us">
              Contact Us
            </ButtonGlow>
          </Link>
        </motion.div>
      </section>

      {/* QA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {qaItems.map((item, idx) => (
              <motion.div 
                key={idx}
                className="glass-panel p-8 rounded-2xl border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4 font-display">Q: {item.q}</h3>
                <div className="text-muted-foreground text-lg leading-relaxed flex gap-2">
                  <span className="text-white font-bold shrink-0">A:</span>
                  <span>{item.a}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to upgrade your workflow?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Explore our core capabilities from AI Calling Agents to Cloud Deployment.
          </p>
          <Link href="/products">
            <ButtonGlow size="xl" className="shadow-[0_0_40px_hsl(var(--primary)/0.3)]" data-testid="button-cta-explore">
              Explore Our Products
            </ButtonGlow>
          </Link>
        </div>
      </section>

    </MainLayout>
  );
}

