"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2 } from "lucide-react";
import Link from "next/link";
import { ButtonGlow } from "@/components/ui/ButtonGlow";

export default function Sponsors() {
    return (
        <MainLayout>
            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-accent text-sm font-medium mb-8 border border-accent/20 bg-accent/5"
                    >
                        <Building2 className="w-4 h-4" />
                        <span>Partnership Pillar</span>
                    </motion.div>
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        For <span className="text-glow-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Sponsors</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-muted-foreground mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Invest in the next generation of AI innovation. Gain direct access to elite IIT talent and custom-built enterprise AI solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl border-white/10"
                    >
                        <h3 className="font-display text-2xl font-bold text-white mb-4">About IIT AI Studio</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            IIT AI Studio operates on Dual Business Pillars: Recruiting and Development. We orchestrate a powerful synergy where rigorous AI development naturally fuels an elite talent pool. Our students build high-value production systems, ensuring they are instantly effective in enterprise environments.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-white/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Student-led AI Development Services
                            </li>
                            <li className="flex items-center gap-3 text-white/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Fully Custom Contract Development
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-panel p-8 rounded-3xl border-accent/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                        <h3 className="font-display text-2xl font-bold text-white mb-4">Why Invest & Partner?</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            By sponsoring or contracting with IIT AI Studio, your enterprise reaps dual benefits: acquiring cutting-edge AI tools tailor-made for your operations, and securing an exclusive pipeline to pre-vetted, highly skilled IIT engineering interns.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm font-semibold text-white mb-1 tracking-wide">Enterprise Program</div>
                                <div className="text-lg font-display text-accent">$100/month Per Student.</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm font-semibold text-white mb-1 tracking-wide">Market Reach</div>
                                <div className="text-sm font-display text-accent flex items-center gap-1.5"><Globe2 className="w-4 h-4" /> Global & Indian</div>
                            </div>
                        </div>

                        <Link href="/contact">
                            <ButtonGlow className="w-full border-accent text-accent hover:bg-accent hover:text-white bg-transparent">
                                Become a Sponsor <ArrowRight className="w-4 h-4 ml-2" />
                            </ButtonGlow>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
