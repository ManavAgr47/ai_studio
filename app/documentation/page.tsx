"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Building2, Target, Users, Landmark, MapPin, Phone } from "lucide-react";

export default function Documentation() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <MainLayout>
            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative min-h-screen">
                {/* Glow backdrop */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6"
                    >
                        <Building2 className="w-4 h-4" />
                        Documentation & Info
                    </motion.div>
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="text-glow-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Company Outline</span>
                    </motion.h1>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="space-y-8"
                >
                    {/* Core Info */}
                    <motion.div variants={itemVariant} className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10 rounded-full" />
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl font-display font-bold text-white mb-1">IIT AI STUDIO</h2>
                                <p className="text-muted-foreground flex items-center gap-2">
                                    <Building2 className="w-4 h-4" />
                                    Established in 2026
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div variants={itemVariant} className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                <Target className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white">Our Vision</h2>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-white/90 leading-relaxed font-medium mb-6">
                                An <span className="text-primary">AI runway</span> for students worldwide.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                We’re building a launchpad where students don’t just learn AI — they use it to create, earn, and grow. From first exposure to real-world impact, the runway is designed to turn curiosity into capability.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* points */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="text-primary text-xl font-bold mb-3">01</div>
                                    <p className="text-sm text-white/80">Give students free access to powerful AI tools and hands-on learning.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="text-primary text-xl font-bold mb-3">02</div>
                                    <p className="text-sm text-white/80">Enable them to turn skills into real income and opportunities.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="text-primary text-xl font-bold mb-3">03</div>
                                    <p className="text-sm text-white/80">Bridge talent with top companies, unlocking meaningful careers.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Grid for remaining items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariant} className="glass-panel p-8 rounded-3xl border border-white/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                                    <Users className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-display font-bold text-white">Founders</h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex flex-col">
                                    <span className="text-sm text-muted-foreground">Founder & CEO</span>
                                    <span className="text-lg text-white font-medium">Hardik Advani</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-sm text-muted-foreground">Co-Founders</span>
                                    <span className="text-lg text-white font-medium">Manav Agrawal</span>
                                    <span className="text-lg text-white font-medium">Karan Kaurav</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariant} className="glass-panel p-8 rounded-3xl border border-white/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                    <Landmark className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-display font-bold text-white">Shareholders</h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex flex-col">
                                    <span className="text-sm text-muted-foreground">Seed Investor</span>
                                    <span className="text-lg text-white font-medium">Murata Dai <span className="text-sm text-muted-foreground">(from Japan)</span></span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-sm text-muted-foreground">Shareholders</span>
                                    <span className="text-lg text-white font-medium">Hardik Advani</span>
                                    <span className="text-lg text-white font-medium">Manav Agrawal</span>
                                    <span className="text-lg text-white font-medium">Karan Kaurav</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariant} className="glass-panel p-8 rounded-3xl border border-white/10 md:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 shrink-0 mt-1">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-muted-foreground mb-1">Address</h3>
                                        <p className="text-white text-lg">ask Mains</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 shrink-0 mt-1">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-muted-foreground mb-1">Contact</h3>
                                        <p className="text-white text-lg">ask Mains</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </MainLayout>
    );
}
