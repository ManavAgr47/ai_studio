"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { ToolCard } from "@/components/ui/ToolCard";
import { toolsData } from "@/lib/data";
import { motion } from "framer-motion";
import { Loader2, ServerCrash } from "lucide-react";
import Link from "next/link";
import { ButtonGlow } from "@/components/ui/ButtonGlow";

export default function Products() {
  const tools = toolsData;

  return (
    <MainLayout>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Which Problem Are You <span className="text-primary">Trying to Solve?</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { q: "Spending hours on cold calls?", a: "Calling Agent", link: "/tools/calling-agents" },
            { q: "Drowning in unread newsletters?", a: "Newsletter Magazine", link: "/tools/newsletter-magazine-agent" },
            { q: "Writing sales emails manually?", a: "Auto Email Sender", link: "/tools/automatic-email-sender" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Q: {item.q}</h3>
                <p className="text-white font-medium mb-4">A: {item.a}</p>
              </div>
              <Link href={item.link}>
                <ButtonGlow variant="outline" size="sm" className="w-full" data-testid={`button-explore-${item.link.split('/').pop()}`}>Explore Solution</ButtonGlow>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* More in n8n & Full Stack Section */}
        <section className="mb-24 px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-display">More in n8n & Full Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "SNS Promotions (Instagram / X / LinkedIn)",
              "Content Creation (YouTube / Veo3)",
              "CRM Management & Dashboarding",
              "Data Engineering",
              "CRM Systems (Snowflake, MongoDB)",
              "SQL Querying",
              "No-Code CRMs (Wix, Wordpress)",
              "Full-Stack Development (MERN)",
              "Deployment (AWS, Vercel)",
              "Python Scripting (Flask APIs)"
            ].map((item, i) => (
              <div key={i} className="glass-panel p-4 rounded-xl border-white/5 text-muted-foreground text-sm hover:text-white transition-colors">
                {item}
              </div>
            ))}
          </div>
        </section>

        {tools && tools.length === 0 && (
          <div className="text-center py-20 glass-panel rounded-2xl">
            <p className="text-xl text-muted-foreground">No tools available in the registry.</p>
          </div>
        )}

        {tools && tools.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, idx) => (
              <ToolCard key={tool.id} tool={tool} index={idx} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

