"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ButtonGlow } from "@/components/ui/ButtonGlow";

export default function ContributePage() {
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
                        <GraduationCap className="w-4 h-4" />
                        <span>Student Support</span>
                    </motion.div>
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-glow-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Student Access</span>
                    </motion.h1>
                    <motion.h2
                        className="text-2xl text-white mt-4 font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                    >
                        Premium AI, Without the Cost Barrier
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Many students want to use advanced AI for study, research, and creation. The problem is simple: the best tools often cost too much. IIT AI Studio gives selected IIT students free access to premium AI models, removing the barrier to innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Left Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl border-white/10 flex flex-col"
                    >
                        <h3 className="font-display text-2xl font-bold text-white mb-4">What We Offer</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            The following will be provided free of charge to those selected. We offer paid versions of major AI models to support your academic and creative goals.
                        </p>
                        <div className="mb-4 text-white font-medium">Choose one of the following:</div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-white/80 p-3 bg-white/5 rounded-xl border border-white/10">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span><strong>Claude Pro</strong> &ndash; $20 / month</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/80 p-3 bg-white/5 rounded-xl border border-white/10">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span><strong>ChatGPT Plus</strong> &ndash; $20 / month</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/80 p-3 bg-white/5 rounded-xl border border-white/10">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span><strong>Gemini Advanced</strong> &ndash; $20 / month</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-panel p-8 rounded-3xl border-accent/30 relative overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                        <h3 className="font-display text-2xl font-bold text-white mb-4">Selection Process</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Please fill out the application form below to apply. Be prepared to share details about how you plan to use AI in your studies or projects.
                        </p>

                        <div className="space-y-4 text-sm text-white/80 mb-8 flex-1">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="font-semibold text-white mb-2">Application Details Required:</div>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>Basic info (Name, School, Dept, Year)</li>
                                    <li>What you want to do with AI</li>
                                    <li>Resume / CV upload</li>
                                    <li>Desired AI project or goals</li>
                                </ul>
                            </div>
                            <p className="italic text-accent mt-4">We will contact you with the results of the review via email.</p>
                        </div>

                        <Link href="/contribute/apply" className="mt-auto">
                            <ButtonGlow className="w-full border-accent text-accent hover:bg-accent hover:text-white bg-transparent">
                                Application Form <ArrowRight className="w-4 h-4 ml-2" />
                            </ButtonGlow>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
