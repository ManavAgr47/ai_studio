"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ContactUs() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleInitialSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsDialogOpen(true);
    };

    const handleConfirmSubmit = async () => {
        setIsDialogOpen(false);
        setIsSubmitting(true);

        try {
            const payload = {
                type: "contact",
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                message: formData.message,
            };

            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbzc90aULmgkN1Gdx5ABFGACbniW-vDReSDrW2MXZVAJ4qPw7p0xJdXxNywJKOujZb60gQ/exec",
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                },
            );

            if (!res.ok) throw new Error("Failed to submit");

            setFormData({ name: "", email: "", phone: "", company: "", message: "" });
            toast({
                title: "Message Sent",
                description: "Thank you for your message. We will get back to you shortly.",
            });
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: error.message,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <MainLayout>
            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-8 border border-primary/20 bg-primary/5"
                    >
                        <MessageSquare className="w-4 h-4" />
                        <span>We are here to help</span>
                    </motion.div>
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-muted-foreground mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Have a question or want to work together? Fill out the form below or reach out to us directly.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-panel p-8 md:p-10 rounded-3xl border-primary/20 relative overflow-hidden bg-background/50 shadow-2xl backdrop-blur-xl group hover:border-primary/40 transition-colors duration-500">
                            <h2 className="font-display text-2xl font-bold text-white mb-6">Send us a Message</h2>
                            <form onSubmit={handleInitialSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-white/80">Company/School Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20"
                                            placeholder="Acme Corp / University XYZ"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20 resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                        required
                                    />
                                </div>

                                <ButtonGlow type="submit" isLoading={isSubmitting} className="w-full flex items-center justify-center py-4">
                                    Send Message <Send className="w-4 h-4 ml-2" />
                                </ButtonGlow>
                            </form>

                            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                <AlertDialogContent className="border-white/10 bg-black/90 backdrop-blur-2xl">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="text-white">Confirm Your Details</AlertDialogTitle>
                                        <AlertDialogDescription className="text-muted-foreground">
                                            Please verify the details below before sending your message.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <div className="py-4 space-y-3 text-sm text-white/80">
                                        <p><strong className="text-white font-medium">Company/School:</strong> {formData.company || "Not provided"}</p>
                                        <p><strong className="text-white font-medium">Name:</strong> {formData.name}</p>
                                        <p><strong className="text-white font-medium">Email:</strong> {formData.email}</p>
                                        <p><strong className="text-white font-medium">Phone:</strong> {formData.phone || "Not provided"}</p>
                                        <p><strong className="text-white font-medium">Message:</strong> {formData.message}</p>
                                    </div>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:text-white">Edit</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleConfirmSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90">
                                            Confirm and Send
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="glass-panel p-8 rounded-3xl border-white/10 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                            <h2 className="font-display text-2xl font-bold text-white mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                                        <p className="text-muted-foreground mb-2">For general questions, partnerships, and technical assistance.</p>
                                        <a href="mailto:hardikadvani1910@gmail.com" className="text-primary hover:text-white transition-colors">
                                            hardikadvani1910@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 text-accent">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Office Location</h3>
                                        <p className="text-muted-foreground">Rajiv Bhawan, IIT Roorkee, Uttarakhand, 247667</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
