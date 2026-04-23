"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactInput } from "@shared/routes";
import { motion } from "framer-motion";
import { Send, CheckCircle, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";

const studentFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    college: z.string().min(1, "College / Institution is required"),
    yearOfStudy: z.string().min(1, "Year of Study is required"),
    major: z.string().min(1, "Major / Field of Study is required"),
    preferredModel: z.enum(["Claude Pro", "ChatGPT Plus", "Gemini Advanced"]),
    message: z.string().min(10, "Please provide a more detailed statement of purpose"),
    resumeLink: z.string().url("Must be a valid URL").min(1, "Resume link is required"),
});

type FormData = z.infer<typeof studentFormSchema>;

export default function StudentApplyPage() {
    const { toast } = useToast();
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(studentFormSchema),
        defaultValues: {
            preferredModel: "Claude Pro",
        }
    });

    const onSubmit = async (data: FormData) => {
        try {
            const payload = {
                type: "student",
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
                college: data.college,
                resumeLink: data.resumeLink,
                yearOfStudy: data.yearOfStudy,
                major: data.major,
                preferredModel: data.preferredModel,
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
                title: "Application Submitted",
                description: "Your student access application has been received.",
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-secondary text-sm font-medium mb-4 border border-secondary/20 bg-secondary/5"
                    >
                        <GraduationCap className="w-4 h-4" />
                        <span>Student Application</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-5xl font-bold mb-4"
                    >
                        Apply for <span className="text-glow-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Premium AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Fill out the details below to request access to premium AI models through IIT AI Studio.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-8 md:p-10 rounded-3xl border-secondary/20 relative overflow-hidden bg-background/50 shadow-2xl backdrop-blur-xl"
                >
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-16">
                            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 box-glow border border-secondary/30">
                                <CheckCircle className="w-10 h-10 text-secondary" />
                            </div>
                            <h3 className="font-display text-3xl font-bold text-white mb-4">
                                Application Complete
                            </h3>
                            <p className="text-muted-foreground max-w-md mx-auto mb-8">
                                Your application has been successfully routed to our team. We will review your submission and contact you via email shortly.
                            </p>
                            <ButtonGlow
                                onClick={() => setIsSuccess(false)}
                                variant="outline"
                                className="border-secondary hover:bg-secondary/10"
                            >
                                Submit Another Application
                            </ButtonGlow>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                                    <input
                                        {...register("name")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.name ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                        placeholder="Jane Doe"
                                    />
                                    {errors.name && <p className="text-destructive text-sm mt-2">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Comms Channel (Email)</label>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.email ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                        placeholder="jane@example.com"
                                    />
                                    {errors.email && <p className="text-destructive text-sm mt-2">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                                    <input
                                        {...register("phone")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.phone ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="text-destructive text-sm mt-2">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">College / Institution</label>
                                    <input
                                        {...register("college")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.college ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                        placeholder="IIT Roorkee"
                                    />
                                    {errors.college && <p className="text-destructive text-sm mt-2">{errors.college.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Year of Study</label>
                                    <select
                                        {...register("yearOfStudy")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/90 border text-white transition-all focus:outline-none focus:ring-2", errors.yearOfStudy ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                    >
                                        <option value="" disabled selected>Select Year</option>
                                        <option value="1st Year">1st Year (Freshman)</option>
                                        <option value="2nd Year">2nd Year (Sophomore)</option>
                                        <option value="3rd Year">3rd Year (Junior)</option>
                                        <option value="4th Year">4th Year (Senior)</option>
                                        <option value="5th Year / Dual Degree">5th Year / Dual Degree</option>
                                        <option value="Masters / PhD">Masters / PhD</option>
                                    </select>
                                    {errors.yearOfStudy && <p className="text-destructive text-sm mt-2">{errors.yearOfStudy.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/80 mb-2">Major / Field of Study</label>
                                    <input
                                        {...register("major")}
                                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.major ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                        placeholder="Computer Science, Economics, etc."
                                    />
                                    {errors.major && <p className="text-destructive text-sm mt-2">{errors.major.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Preferred AI Model</label>
                                <select
                                    {...register("preferredModel")}
                                    className={cn("w-full px-5 py-4 rounded-xl bg-background/90 border text-white transition-all focus:outline-none focus:ring-2", errors.preferredModel ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                >
                                    <option value="Claude Pro">Claude Pro (Best for coding & writing)</option>
                                    <option value="ChatGPT Plus">ChatGPT Plus (Best general purpose)</option>
                                    <option value="Gemini Advanced">Gemini Advanced (Best for research & integration)</option>
                                </select>
                                {errors.preferredModel && <p className="text-destructive text-sm mt-2">{errors.preferredModel.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Resume / Portfolio Link (Google Drive, Notion, GitHub)</label>
                                <input
                                    {...register("resumeLink")}
                                    className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.resumeLink ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                                    placeholder="https://..."
                                />
                                {errors.resumeLink && <p className="text-destructive text-sm mt-2">{errors.resumeLink.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">Statement of Purpose (Why do you need premium AI?)</label>
                                <textarea
                                    rows={5}
                                    {...register("message")}
                                    className={cn(
                                        "w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2 resize-none",
                                        errors.message ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20"
                                    )}
                                    placeholder="Please describe how you plan to use this AI grant. Mention specific projects, research, or learning goals..."
                                />
                                {errors.message && <p className="text-destructive text-sm mt-2">{errors.message.message}</p>}
                            </div>

                            <ButtonGlow
                                type="submit"
                                size="lg"
                                className="w-full mt-6 bg-secondary text-white hover:bg-secondary/80 border-secondary"
                                isLoading={isSubmitting}
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Submit Application
                            </ButtonGlow>
                        </form>
                    )}
                </motion.div>
            </div>
        </MainLayout>
    );
}
