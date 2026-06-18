"use client";

import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { motion, Variants } from "framer-motion";
import { Award, Mail, Sparkles, Trophy, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Winner {
  name: string;
  initials: string;
  gradient: string;
  textColor: string;
  borderColor: string;
}

const WINNERS: Winner[] = [
  { name: "Keshav Garg", initials: "KG", gradient: "from-[#00F0FF]/20 to-[#7000FF]/20", textColor: "text-[#00F0FF]", borderColor: "border-[#00F0FF]/30 hover:border-[#00F0FF]/60" },
  { name: "Dewansh Upadhyay", initials: "DU", gradient: "from-[#7000FF]/20 to-[#FF007A]/20", textColor: "text-[#7000FF]", borderColor: "border-[#7000FF]/30 hover:border-[#7000FF]/60" },
  { name: "Anunjay Gupta", initials: "AG", gradient: "from-[#FF007A]/20 to-[#00F0FF]/20", textColor: "text-[#FF007A]", borderColor: "border-[#FF007A]/30 hover:border-[#FF007A]/60" },
  { name: "Piyush Goyal", initials: "PG", gradient: "from-[#00F0FF]/20 to-[#7000FF]/20", textColor: "text-[#00F0FF]", borderColor: "border-[#00F0FF]/30 hover:border-[#00F0FF]/60" },
  { name: "Aditya Sharma", initials: "AS", gradient: "from-[#7000FF]/20 to-[#FF007A]/20", textColor: "text-[#7000FF]", borderColor: "border-[#7000FF]/30 hover:border-[#7000FF]/60" },
  { name: "Nishant", initials: "N", gradient: "from-[#FF007A]/20 to-[#00F0FF]/20", textColor: "text-[#FF007A]", borderColor: "border-[#FF007A]/30 hover:border-[#FF007A]/60" },
  { name: "Priyesh Mishra", initials: "PM", gradient: "from-[#00F0FF]/20 to-[#7000FF]/20", textColor: "text-[#00F0FF]", borderColor: "border-[#00F0FF]/30 hover:border-[#00F0FF]/60" },
  { name: "Shoaib", initials: "S", gradient: "from-[#7000FF]/20 to-[#FF007A]/20", textColor: "text-[#7000FF]", borderColor: "border-[#7000FF]/30 hover:border-[#7000FF]/60" },
  { name: "Prajwal Singh", initials: "PS", gradient: "from-[#FF007A]/20 to-[#00F0FF]/20", textColor: "text-[#FF007A]", borderColor: "border-[#FF007A]/30 hover:border-[#FF007A]/60" },
  { name: "Raghav Nyati", initials: "RN", gradient: "from-[#00F0FF]/20 to-[#7000FF]/20", textColor: "text-[#00F0FF]", borderColor: "border-[#00F0FF]/30 hover:border-[#00F0FF]/60" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function WinnersClient() {
  return (
    <MainLayout>
      <div className="relative min-h-screen bg-background overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-24">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* HERO HEADER */}
        <section className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium border border-primary/20 bg-primary/5 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span>Selected Winners</span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet the{" "}
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              AI Grant Winners
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The following participants have been selected to receive a $20 AI Grant for their enthusiasm, initiative, and commitment to learning AI.
          </motion.p>
        </section>

        {/* WINNER CARDS GRID */}
        <section className="relative z-10 w-full max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {WINNERS.map((winner, index) => (
              <motion.div
                key={winner.name}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-panel p-6 rounded-2xl border bg-gradient-to-br from-card/90 to-card/35 transition-all duration-300 relative group overflow-hidden flex items-center gap-5 ${winner.borderColor}`}
              >
                {/* Visual hover background glow */}
                <div className={`absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br ${winner.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Styled initial avatar */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${winner.gradient} flex items-center justify-center font-display ${winner.textColor} text-xl font-bold border border-white/10 shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {winner.initials}
                </div>

                {/* Info Container */}
                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="font-display text-lg font-bold text-white tracking-wide">
                    {winner.name}
                  </h3>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Grant Awarded</span>
                  </div>
                </div>

                {/* Index number decoration */}
                <span className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/30 font-bold group-hover:text-primary/40 transition-colors duration-300">
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* IMPORTANT NOTICE BANNER */}
        <section className="relative z-10 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative rounded-3xl glass-panel border border-primary/20 p-8 md:p-10 overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-40 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-accent" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <Mail className="w-6 h-6 animate-bounce" />
              </div>
              
              <div className="space-y-6 w-full text-left">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                    <span>📧</span> Congratulations to all selected winners!
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">Please review the following instructions regarding your AI Grant:</p>
                </div>
                
                <ul className="space-y-4 font-sans text-sm md:text-base text-white/80 leading-relaxed border-t border-white/5 pt-5">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 shrink-0 font-bold">•</span>
                    <span>All winners will receive an email shortly with instructions on how to claim their $20 AI Grant.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 shrink-0 font-bold">•</span>
                    <span>Please monitor your inbox, spam folder, and promotions folder over the coming days.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 shrink-0 font-bold">•</span>
                    <span>
                      If you do not receive an email within the announced timeframe, please contact the IIT AI Studio team at{" "}
                      <a href="mailto:hardikadvani1910@gmail.com" className="text-primary hover:text-white font-semibold underline decoration-primary/40 hover:decoration-white transition-colors duration-200">
                        hardikadvani1910@gmail.com
                      </a>.
                    </span>
                  </li>
                </ul>

                <p className="text-muted-foreground text-xs md:text-sm font-sans italic border-t border-white/5 pt-4">
                  Thank you to everyone who participated. We received applications from talented students across multiple institutions and appreciate the enthusiasm shown by every applicant.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="relative z-10 w-full max-w-3xl mx-auto pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border-secondary/20 bg-secondary/5 relative overflow-hidden group shadow-2xl"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-6 text-center">
              <h3 className="font-display text-3xl font-bold text-white">
                Didn&apos;t get selected this time?
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
                Stay connected for future AI Grants, workshops, internships, and exclusive opportunities from IIT AI Studio.
              </p>
              <div className="pt-4 flex justify-center">
                <Link href="/contact">
                  <ButtonGlow variant="secondary" size="lg" className="shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]">
                    Join Our Community <ArrowRight className="w-5 h-5 ml-2" />
                  </ButtonGlow>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </MainLayout>
  );
}
