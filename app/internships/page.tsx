"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Code2, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ButtonGlow } from "@/components/ui/ButtonGlow";

export default function Internships() {
    return (
        <MainLayout>
            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-secondary text-sm font-medium mb-8 border border-secondary/20 bg-secondary/5"
                    >
                        <GraduationCap className="w-4 h-4" />
                        <span>Recruiting Pillar</span>
                    </motion.div>
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        For <span className="text-glow-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Internships</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-muted-foreground mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Gain unparalleled access to high-quality AI tools, real-world custom contract development experience, and direct enterprise internship introductions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl border-white/10"
                    >
                        <h3 className="font-display text-2xl font-bold text-white mb-4">High-Quality AI Tools</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Participate in building and utilizing state-of-the-art tools like Calling Agents, Personal Mail Magazines, and Sales Automation. Elevate your skills by working on AI systems that are actively deployed across global markets (USA, Europe, Japan) and the Indian market.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-white/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Gemini Skills & Community Tools
                            </li>
                            <li className="flex items-center gap-3 text-white/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Personal Automation Mastery
                            </li>
                        </ul>
                        <Link href="/ai-development">
                            <ButtonGlow variant="outline" className="w-full">
                                View Tools <Code2 className="w-4 h-4 ml-2" />
                            </ButtonGlow>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-panel p-8 rounded-3xl border-secondary/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
                        <h3 className="font-display text-2xl font-bold text-white mb-4">Enterprise Internships</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            As part of the IIT Students Pool, you directly benefit from our recruiting synergy. You'll be introduced to Client Enterprises and SMEs through our Enterprise Internship Support Program, gaining vital industry experience while contributing to high-impact projects.
                        </p>
                        <Link href="/contact">
                            <ButtonGlow className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent">
                                Join the Talent Pool
                            </ButtonGlow>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
