"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ButtonGlow } from "@/components/ui/ButtonGlow";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter Plan",
      description: "1 Tool access.",
      price: "$29",
      period: "/mo",
      features: [
        "1 AI agent",
        "Basic support",
      ],
      popular: false,
      buttonText: "Start Free Trial",
      variant: "outline" as const,
    },
    {
      name: "Growth Plan",
      description: "Any 2 Tools access.",
      price: "$99",
      period: "/mo",
      features: [
        "Multi-agent access",
        "Dashboard integrations",
      ],
      popular: true,
      buttonText: "Start Free Trial",
      variant: "primary" as const,
    },
    {
      name: "Enterprise Plan",
      description: "All tools + custom flows.",
      price: "Custom",
      period: "",
      features: [
        "Custom workflows",
        "Dedicated support",
      ],
      popular: false,
      buttonText: "Contact for Pricing",
      variant: "outline" as const,
    }
  ];

  return (
    <MainLayout>
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Q: How much does <span className="text-glow-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">this cost?</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A: We offer flexible plans tailored to your business needs, from individual agents to full-scale enterprise systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col glass-panel rounded-3xl p-8 ${
                tier.popular 
                  ? 'border-primary shadow-[0_0_40px_-15px_rgba(0,255,255,0.3)] md:-translate-y-4 md:scale-105 z-10 bg-card/60' 
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground h-10">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline text-white">
                  <span className="font-display text-5xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${tier.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonGlow 
                variant={tier.variant} 
                className="w-full"
                onClick={() => window.location.href = tier.price === 'Custom' ? '/contact' : '#'}
                data-testid={`button-pricing-tier-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tier.buttonText}
              </ButtonGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

