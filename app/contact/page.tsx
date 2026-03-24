"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactInput } from "@shared/routes";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(api.contact.create.input),
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbygxZtLuRmhtkH9DveKRlhA1Xdbc_qB5fk7XAgSo3HsdeqkhGusOTP5wb4mNWWZh1AhNA/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );

      if (!res.ok) throw new Error("Failed to submit");

      setIsSuccess(true);

      toast({
        title: "Message Transmitted",
        description: "Stored successfully in database.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: error.message,
      });
    }
  };

  return (
    <MainLayout>
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Q: Curious if our{" "}
            <span className="text-primary">tools are right for you?</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            A: Tell us what task you want to automate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Form Side */}
          <motion.div
            className="lg:col-span-3 glass-panel rounded-3xl p-8 md:p-10 border-white/10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 box-glow">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Transmission Complete
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  Your message has been successfully routed to our engineering
                  division. You will receive a response within 24 standard
                  hours.
                </p>
                <ButtonGlow
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                >
                  Send Another Protocol
                </ButtonGlow>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Identifier (Name)
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className={cn(
                      "w-full px-5 py-4 rounded-xl bg-background/50 border text-white placeholder:text-muted-foreground/50 transition-all focus:outline-none focus:ring-2",
                      errors.name
                        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                        : "border-white/10 focus:border-primary focus:ring-primary/20 hover:border-white/20",
                    )}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Comms Channel (Email)
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cn(
                      "w-full px-5 py-4 rounded-xl bg-background/50 border text-white placeholder:text-muted-foreground/50 transition-all focus:outline-none focus:ring-2",
                      errors.email
                        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                        : "border-white/10 focus:border-primary focus:ring-primary/20 hover:border-white/20",
                    )}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    What do you want to automate?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className={cn(
                      "w-full px-5 py-4 rounded-xl bg-background/50 border text-white placeholder:text-muted-foreground/50 transition-all focus:outline-none focus:ring-2 resize-none",
                      errors.message
                        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                        : "border-white/10 focus:border-primary focus:ring-primary/20 hover:border-white/20",
                    )}
                    placeholder="Describe your requirements or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <ButtonGlow
                  type="submit"
                  size="lg"
                  className="w-full mt-4"
                  isLoading={false}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Talk to an AI Specialist
                </ButtonGlow>
              </form>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-panel p-8 rounded-3xl border-white/5">
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Connect
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:systems@aiberry.io"
                  className="flex items-center gap-4 group"
                  data-testid="link-email-contact"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div
                    className="text-muted-foreground group-hover:text-white transition-colors"
                    data-testid="text-contact-email"
                  >
                    systems@aiberry.io
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}

