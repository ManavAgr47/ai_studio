"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { motion } from "framer-motion";
import { Mail, GraduationCap, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <MainLayout>
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto mb-16 text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              IIT AI Studio <span className="text-primary">AI Grants</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access to high-quality AI is often limited by cost. We offer AI Grants to provide students with premium AI tools, significantly increasing study and research efficiency to elevate academic excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* For Students Box */}
            <div className="glass-panel p-6 rounded-2xl border-secondary/20 bg-secondary/5 border relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-secondary" /> For Students
              </h3>
              <ul className="space-y-3 text-white/70 text-sm flex-grow">
                <li><strong className="text-white">What We Offer:</strong> $20/month credit for Claude's paid version, plus opportunities to learn AI agent development know-how.</li>
                <li><strong className="text-white">Eligibility:</strong> Starting with IIT students, and expanding to students from other Indian universities.</li>
              </ul>

              <Link href="/contribute/apply" className="mt-8">
                <ButtonGlow className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent">
                  Apply for AI Grant <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonGlow>
              </Link>
            </div>

            {/* For Sponsors Box */}
            <div className="glass-panel p-6 rounded-2xl border-accent/20 bg-accent/5 border relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" /> Seeking Sponsors
              </h3>
              <ul className="space-y-3 text-white/70 text-sm flex-grow">
                <li><strong className="text-white">Social Impact:</strong> Contribute to the social significance of providing free AI access to students.</li>
                <li><strong className="text-white">Recruitment:</strong> Recruit elite students with proven AI skills for internships from participating top universities.</li>
              </ul>

              <Link href="/ai-grant/apply" className="mt-8">
                <ButtonGlow className="w-full border-accent text-accent hover:bg-accent hover:text-white bg-transparent">
                  Become a Sponsor <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonGlow>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-panel p-8 rounded-3xl border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Direct Line
                </h3>
                <p className="text-muted-foreground text-sm">Need help with your application or partnership details?</p>
              </div>

              <a
                href="mailto:systems@aiberry.io"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all border border-white/10 group-hover:border-primary/50">
                  <Mail className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-medium">Email Engineering</div>
                  <div className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                    systems@aiberry.io
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
