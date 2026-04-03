"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactInput } from "@shared/routes";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, GraduationCap, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";

const contactFormSchema = z.object({
  type: z.enum(["student", "sponsor"]),
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().optional(),
  college: z.string().optional(),
  companyName: z.string().optional(),
  resumeLink: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.type === "student") {
    if (!data.college || data.college.trim() === "") {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "College / Institution is required", path: ["college"] });
    }
    if (!data.resumeLink || data.resumeLink.trim() === "") {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Resume link is required", path: ["resumeLink"] });
    }
  }
  if (data.type === "sponsor") {
    if (!data.companyName || data.companyName.trim() === "") {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Company name is required", path: ["companyName"] });
    }
    if (!data.message || data.message.trim() === "") {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Project requirements are required", path: ["message"] });
    }
  }
});

type FormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formType, setFormType] = useState<"student" | "sponsor">("student");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: "student",
      message: "Student Application Profile",
    }
  });

  // Keep type mapped to state
  useEffect(() => {
    setValue("type", formType);
  }, [formType, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      // Provide a default message for student just in case it reaches the API expecting a non-null string
      if (data.type === "student" && (!data.message || data.message === "")) {
        data.message = "Student Application Profile";
      }

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxfLif43MgwnP8pvcyV5Q4905ctSooTlsIcGW7KH0PMHOxmyIQbvRjhNVLjhlkw1Bys/exec",
        {
          method: "POST",
          body: JSON.stringify(data as ContactInput),
        },
      );

      if (!res.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      reset();

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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Connect with <span className="text-primary">IIT AI Studio</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Select your partnership vector below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Form Side */}
          <motion.div
            className="lg:col-span-3 glass-panel rounded-3xl p-8 md:p-10 border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            {/* Form Type Toggle */}
            {!isSuccess && (
              <div className="flex bg-background/50 p-1.5 rounded-2xl mb-8 relative z-10 border border-white/5">
                <button
                  type="button"
                  onClick={() => setFormType("student")}
                  className={cn(
                    "flex-1 flex items-center justify-center py-3 rounded-xl font-medium transition-all duration-300",
                    formType === "student"
                      ? "bg-secondary/20 text-secondary border border-secondary/30 shadow-[0_0_20px_hsl(var(--secondary)/0.1)]"
                      : "text-muted-foreground hover:text-white"
                  )}
                >
                  <GraduationCap className="w-5 h-5 mr-2" /> For Students
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("sponsor")}
                  className={cn(
                    "flex-1 flex items-center justify-center py-3 rounded-xl font-medium transition-all duration-300",
                    formType === "sponsor"
                      ? "bg-accent/20 text-accent border border-accent/30 shadow-[0_0_20px_hsl(var(--accent)/0.1)]"
                      : "text-muted-foreground hover:text-white"
                  )}
                >
                  <Building2 className="w-5 h-5 mr-2" /> For Sponsors
                </button>
              </div>
            )}

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 box-glow">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Transmission Complete
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  Your message has been successfully routed. We will reach out to you shortly.
                </p>
                <ButtonGlow
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                >
                  Send Another Protocol
                </ButtonGlow>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">

                {/* Hidden Fields for the Schema */}
                <input type="hidden" {...register("type")} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                    <input
                      {...register("name")}
                      className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.name ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20")}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-destructive text-sm mt-2">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Comms Channel (Email)</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.email ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20")}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-destructive text-sm mt-2">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                    <input
                      {...register("phone")}
                      className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.phone ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20")}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-2">{errors.phone.message}</p>}
                  </div>

                  {formType === "student" && (
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">College / Institution</label>
                      <input
                        {...register("college")}
                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.college ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                        placeholder="IIT Roorkee"
                      />
                      {errors.college && <p className="text-destructive text-sm mt-2">{errors.college.message}</p>}
                    </div>
                  )}

                  {formType === "sponsor" && (
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Company Name</label>
                      <input
                        {...register("companyName")}
                        className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.companyName ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20")}
                        placeholder="Acme Corp"
                      />
                      {errors.companyName && <p className="text-destructive text-sm mt-2">{errors.companyName.message}</p>}
                    </div>
                  )}
                </div>

                {formType === "student" && (
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Resume Link (Google Drive, Notion, Portfolio)</label>
                    <input
                      {...register("resumeLink")}
                      className={cn("w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2", errors.resumeLink ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-secondary focus:ring-secondary/20")}
                      placeholder="https://..."
                    />
                    {errors.resumeLink && <p className="text-destructive text-sm mt-2">{errors.resumeLink.message}</p>}
                  </div>
                )}

                {formType === "sponsor" && (
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Project Requirements or AI Scope</label>
                    <textarea
                      rows={5}
                      {...register("message")}
                      className={cn(
                        "w-full px-5 py-4 rounded-xl bg-background/50 border text-white transition-all focus:outline-none focus:ring-2 resize-none",
                        errors.message ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-accent focus:ring-accent/20"
                      )}
                      placeholder="Describe what you are looking to build or automate..."
                    />
                    {errors.message && <p className="text-destructive text-sm mt-2">{errors.message.message}</p>}
                  </div>
                )}

                <ButtonGlow
                  type="submit"
                  size="lg"
                  className={cn(
                    "w-full mt-6",
                    formType === "student" ? "bg-secondary text-white hover:bg-secondary/80" : "bg-accent text-white hover:bg-accent/80"
                  )}
                  isLoading={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {formType === "student" ? "Submit Application" : "Initiate Partnership"}
                </ButtonGlow>
              </form>
            )}

            {/* Ambient Background Gradient based on type */}
            <div className={cn(
              "absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] rounded-full pointer-events-none transition-colors duration-1000",
              formType === "student" ? "bg-secondary/10" : "bg-accent/10"
            )} />
          </motion.div>

          {/* Info Side */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-panel p-8 rounded-3xl border-white/5 h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <h3 className="font-display text-2xl font-bold text-white mb-8">
                Direct Line
              </h3>

              <div className="space-y-8">
                <a
                  href="mailto:systems@aiberry.io"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all border border-white/10 group-hover:border-primary/50">
                    <Mail className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-medium">Email Engineering</div>
                    <div className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                      systems@aiberry.io
                    </div>
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

