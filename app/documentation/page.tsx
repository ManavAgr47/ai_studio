"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export default function CompanyOutline() {
    return (
        <MainLayout>
            <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-16 text-center md:text-left">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 md:mb-0">
                            Company Outline
                        </h1>
                    </div>

                    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden bg-background/50 shadow-2xl backdrop-blur-xl">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-12 gap-y-12">

                            {/* Name */}
                            <div className="text-primary md:text-right font-medium text-lg pt-1">
                                Name
                            </div>
                            <div className="text-white text-lg font-semibold">
                                IIT AI STUDIO
                            </div>

                            {/* Year established */}
                            <div className="text-primary md:text-right font-medium text-lg pt-1">
                                Established
                            </div>
                            <div className="text-white text-lg">
                                1st April 2026
                            </div>

                            {/* Vision */}
                            <div className="text-primary md:text-right font-medium text-lg pt-1">
                                Our Vision
                            </div>
                            <div className="text-white text-lg leading-relaxed">
                                <p className="text-primary mb-4 font-semibold text-xl">An AI Runway for Students Worldwide</p>
                                <p className="mb-6 text-white/90">
                                    We are building an ecosystem that democratizes access to artificial intelligence, empowering students to drive research innovation and unlock scalable business opportunities. To achieve this, we commit to:
                                </p>
                                <ol className="list-decimal pl-5 space-y-3 text-white/80">
                                    <li><strong className="text-white">Access & Training:</strong> Providing Indian university students with free access to premium AI tools and hands-on guidance.</li>
                                    <li><strong className="text-white">Empowerment:</strong> Creating tangible earning opportunities for students utilizing their expanding AI capabilities.</li>
                                    <li><strong className="text-white">Placement:</strong> Bridging the gap between elite AI-skilled talent and top Indian companies by facilitating direct employment paths.</li>
                                </ol>
                            </div>

                            {/* Team */}
                            <div className="text-primary md:text-right font-medium text-lg pt-1">
                                Founding Team
                            </div>
                            <div className="text-white text-lg space-y-6">
                                <div>
                                    <p className="text-primary/70 text-sm font-medium uppercase tracking-wider mb-1">Founder & CEO</p>
                                    <p className="font-semibold">Hardik Advani</p>
                                </div>
                                <div>
                                    <p className="text-primary/70 text-sm font-medium uppercase tracking-wider mb-1">Co-Founders</p>
                                    <p className="font-semibold">Manav Agrawal</p>
                                    <p className="font-semibold mt-1">Karan Kaurav</p>
                                </div>
                            </div>

                            {/* Shareholders */}
                            <div className="text-primary md:text-right font-medium text-lg pt-1">
                                Shareholders
                            </div>
                            <div className="text-white text-lg space-y-4">
                                <div>
                                    <p className="font-semibold">Murata Dai</p>
                                    <p className="text-sm text-white/60">Seed Investor from Japan</p>
                                </div>
                                <p className="font-semibold pt-1">Founders</p>
                            </div>

                            {/* Address */}
                            <div className="text-primary md:text-right font-medium text-lg pt-1">
                                Address
                            </div>
                            <div className="text-white text-lg text-white/90">
                                Rajiv Bhawan, IIT Roorkee, Uttarakhand, 247667
                            </div>

                            {/* Contact */}
                            <div className="text-primary md:text-right font-medium text-lg pt-1">
                                Contact
                            </div>
                            <div className="text-white text-lg text-white/90">
                                hardikadvani1910@gmail.com
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </MainLayout>
    );
}
