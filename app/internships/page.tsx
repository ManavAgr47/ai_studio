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
                        Internship <span className="text-glow-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Matching</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-muted-foreground mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        We connect top university students with companies for high-quality internships.<br />
                        Students are trained in AI and matched with the right opportunities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl border-white/10"
                    >
                        <h3 className="font-display text-2xl font-bold text-white mb-4">For Companies</h3>
                        <div className="text-muted-foreground leading-relaxed mb-8 space-y-4">
                            <p>Access a curated pool of top students with practical AI skills.</p>
                            <p>We handle sourcing, screening, and matching — you get ready-to-work interns.</p>
                            <p>Partner with us through the AI Grant program.</p>
                        </div>
                        <Link href="/ai-grant">
                            <ButtonGlow variant="outline" className="w-full flex items-center justify-center">
                                Register as a Company <ArrowRight className="w-4 h-4 ml-2" />
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
                        <h3 className="font-display text-2xl font-bold text-white mb-4">For Students</h3>
                        <div className="text-muted-foreground leading-relaxed mb-8 space-y-4">
                            <p>Get internship opportunities at leading companies — all in one place.</p>
                            <p>Apply once and get matched with multiple roles.</p>
                            <p>It’s free to apply.</p>
                        </div>
                        <Link href="/ai-grant">
                            <ButtonGlow className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent flex items-center justify-center">
                                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                            </ButtonGlow>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
