"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactInput } from "@shared/routes";
import { motion } from "framer-motion";
import { Send, CheckCircle, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";

const sponsorFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    companyName: z.string().min(1, "Company Name is required"),
    industry: z.string().min(1, "Industry is required"),
    companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]),
    sponsorshipGoal: z.string().min(1, "Please select a primary goal"),
    message: z.string().min(10, "Please provide more details on your project requirements"),
});

type FormData = z.infer<typeof sponsorFormSchema>;

export default function SponsorApplyPage() {
    const { toast } = useToast();
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(sponsorFormSchema),
        defaultValues: {
            companySize: "11-50",
        }
    });

    const onSubmit = async (data: FormData) => {
        try {
            const payload = {
                type: "sponsor",
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
                companyName: data.companyName,
                industry: data.industry,
                companySize: data.companySize,
                sponsorshipGoal: data.sponsorshipGoal,
            };

            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbzc90aULmgkN1Gdx5ABFGACbniW-vDReSDrW2MXZVAJ4qPw7p0xJdXxNywJKOujZb60gQ/exec",
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                },
            );

            if (!res.ok) throw new Error("Failed to submit");

            setIsSuccess(true);
            reset();

            toast({
                title: "Partnership Inquiry Sent",
                description: "We have received your sponsorship inquiry.",
            });
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: error.message,
            });
        }
    };

    return (
        <MainLayout>
            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full relative z-10">
                <div className="mb-12 text-center text-white space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-accent text-sm font-medium mb-4 border border-accent/20 bg-accent/5"
                    >
                        <Building2 className="w-4 h-4" />
                        <span>Corporate Sponsorship</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-5xl font-bold mb-4"
                    >
                        Become an <span className="text-glow-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">AI Grant Sponsor</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Partner with IIT AI Studio to connect with top tech talent while fostering the next generation of AI innovation.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-8 md:p-10 rounded-3xl border-accent/20 relative overflow-hidden bg-background/50 shadow-2xl backdrop-blur-xl"
                >
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-16">
                            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6 box-glow border border-accent/30">
                                <CheckCircle className="w-10 h-10 text-accent" />
                            </div>
                            <h3 className="font-display text-3xl font-bold text-white mb-4">
                                Inquiry Received
                            </h3>
                            <p className="text-muted-foreground max-w-md mx-auto mb-8">
                                Your message has been successfully routed. Our partnership team will be in touch with you shortly to discuss opportunities.
                            </p>
                            <ButtonGlow
                                onClick={() => setIsSuccess(false)}
                                variant="outline"
                                className="border-accent hover:bg-accent/10"
                            >
                                Send Another Inquiry
                            </ButtonGlow>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Contact Name</label>
                                    <input
                                        {...register("name")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.name ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-destructive text-sm mt-2">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Comms Channel (Email)</label>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.email ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                                        placeholder="partner@company.com"
                                    />
                                    {errors.email && <p className="text-destructive text-sm mt-2">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                                    <input
                                        {...register("phone")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.phone ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                    {errors.phone && <p className="text-destructive text-sm mt-2">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Company Name</label>
                                    <input
                                        {...register("companyName")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.companyName ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                                        placeholder="Acme Corp"
                                    />
                                    {errors.companyName && <p className="text-destructive text-sm mt-2">{errors.companyName.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Industry</label>
                                    <input
                                        {...register("industry")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.industry ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                                        placeholder="Technology, Healthcare, Finance, etc."
                                    />
                                    {errors.industry && <p className="text-destructive text-sm mt-2">{errors.industry.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Company Size</label>
                                    <select
                                        {...register("companySize")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/90 border text-white transition-all focus:outline-none focus:ring-2", errors.companySize ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                                    >
                                        <option value="1-10">1-10 employees</option>
                                        <option value="11-50">11-50 employees</option>
                                        <option value="51-200">51-200 employees</option>
                                        <option value="201-500">201-500 employees</option>
                                        <option value="500+">500+ employees</option>
                                    </select>
                                    {errors.companySize && <p className="text-destructive text-sm mt-2">{errors.companySize.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Primary Goal of Sponsorship</label>
                                <select
                                    {...register("sponsorshipGoal")}
                                    className={cn("w-full px-5 py-4 rounded-xl bg-background/90 border text-white transition-all focus:outline-none focus:ring-2", errors.sponsorshipGoal ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                                >
                                    <option value="" disabled selected>Select Primary Goal</option>
                                    <option value="Social Impact">Social Impact & Philanthropy</option>
                                    <option value="Recruitment">Recruiting top AI talent</option>
                                    <option value="Custom Solutions">Building custom AI tools & automation</option>
                                    <option value="Branding">Brand visibility across campuses</option>
                                </select>
                                {errors.sponsorshipGoal && <p className="text-destructive text-sm mt-2">{errors.sponsorshipGoal.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Project Requirements or AI Scope</label>
                                <textarea
                                    rows={5}
                                    {...register("message")}
                                    className={cn(
                                        "w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2 resize-none",
                                        errors.message ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20"
                                    )}
                                    placeholder="Describe what you are looking to build or your goals with this partnership..."
                                />
                                {errors.message && <p className="text-destructive text-sm mt-2">{errors.message.message}</p>}
                            </div>

                            <ButtonGlow
                                type="submit"
                                size="lg"
                                className="w-full mt-6 bg-accent text-white hover:bg-accent/80 border-accent"
                                isLoading={isSubmitting}
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Initiate Partnership
                            </ButtonGlow>
                        </form>
                    )}
                </motion.div>
            </div>
        </MainLayout>
    );
}
