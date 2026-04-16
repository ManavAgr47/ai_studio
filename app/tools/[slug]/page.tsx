"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { toolsData } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ButtonGlow } from "@/components/ui/ButtonGlow";

export default function ToolDetail() {
  const params = useParams();
  const slug = (params?.slug as string) || "";

  const tool = toolsData.find((t) => t.slug === slug);

  const getQA = (toolSlug: string) => {
    switch (toolSlug) {
      case 'newsletter-magazine-agent':
        return [
          { q: "What’s the pain point?", a: "You get 5+ newsletters/day but gain little from them. You receive multiple newsletters and emails every day. Reading, understanding, and integrating them into your work takes too long." },
          { q: "How do we fix it?", a: "We merge, LLM-sort, and email it back. Our tool “My Mail Magazine” uses AI to merge, filter, and rewrite all your incoming newsletters into one simplified summary — and sends it straight back to you." },
          { q: "What makes it smart?", a: "It uses Gemini LLM to detect similar tools/topics, writes in your preferred tone, and can auto-respond or format it for team sharing." },
          { q: "Who is this for?", a: "Founders, analysts, and marketers who need to scan vast information quickly — and move faster." }
        ];
      case 'calling-agents':
        return [
          { q: "Who needs it?", a: "Sales teams, banks, update campaigns. Our Calling Agent uses AI to call leads or customers, pitch products, and update your CRM — hands-free." },
          { q: "What can it do?", a: "Make calls, script via Retell AI, record responses, update Excel files. It connects to Retell AI for voice, Twilio for phone numbers, and your dashboards via webhooks." },
          { q: "What’s the input/output?", a: "XLSX or CSV files — in, out, and updated." }
        ];
      case 'automatic-email-sender':
        return [
          { q: "Why automate emails?", a: "You’re scaling, not typing. This tool writes and sends personalized emails daily, loops through lists, and updates the source with each sent message." },
          { q: "What does it do?", a: "Context-based email writing + daily trigger + status updates. It writes using context variables, fetches files from GitHub/Drive/S3, sends in low-batch loops, and tracks engagement." }
        ];
      case 'sales-automation':
        return [
          { q: "What's the pain point?", a: "Your leads deserve more than bulk emails. Manual outreach takes time and drains creativity. You need personalized campaigns at scale." },
          { q: "What does it do?", a: "Sends automated email sequences daily, personalizes emails using your contact database, attaches proposals and pitch decks, and tracks opens, clicks, and replies." },
          { q: "Who is this for?", a: "Sales & BD teams, early-stage founders, agencies scaling outreach, and anyone sending lots of cold emails." },
          { q: "How does it work?", a: "Upload your contact CSV or Google Sheet. The tool auto-sends and updates engagement columns — your emails feel human while running 24/7." }
        ];
      case 'claude-code-cowork':
        return [
          { q: "What does it do?", a: "Sets up AI tools (Claude, Retell, GPT) for your business. Designs custom workflows — chat, text, and voice. Trains your team on usage and optimizes continuously with feedback." },
          { q: "Who is this for?", a: "AI-first startups, product or operations teams, founders exploring workflow AI, and internal teams with repetitive tasks." },
          { q: "Why does it matter?", a: "AI isn't magic — it's systems thinking. We help you connect tools to tasks that save real hours." },
          { q: "What workflows can you build?", a: "Internal copilots for docs, emails, and chats. Decision support agents. Workflow automation using Zapier, n8n, and OpenClaw." }
        ];
      case 'openclaw-setup':
        return [
          { q: "What does it do?", a: "Installs and configures OpenClaw for your org. Designs workflows using real use cases. Integrates tools like Notion, Slack, email, and CRM. Ensures scale, security, and observability." },
          { q: "Who is this for?", a: "Technical teams exploring OpenClaw, consultants building client automation, and founders deploying internal workflows." },
          { q: "Why does it matter?", a: "OpenClaw is powerful — but setup isn't simple. We make it frictionless so you can focus on outcomes." },
          { q: "What are typical workflows?", a: "Automated reporting, lead routing, email triggers, and CRM syncing — all production-ready from day one." }
        ];
      default:
        return [];
    }
  };

  const qaItems = getQA(slug);

  if (!tool) {
    return (
      <MainLayout>
        <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Tool Not Found</h2>
          <p className="text-muted-foreground mb-8">The requested module could not be located in our registry.</p>
          <Link href="/ai-development">
            <ButtonGlow variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
            </ButtonGlow>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const ctaText = slug === 'newsletter-magazine-agent' ? 'Try It on Your Inbox' :
    slug === 'calling-agents' ? 'Automate My Calls' :
      slug === 'sales-automation' ? 'Supercharge My Sales' :
        slug === 'claude-code-cowork' ? 'Build with AI' :
          slug === 'openclaw-setup' ? 'Deploy My Workflows' :
            'Boost My Outreach';

  const getFlowchart = (toolSlug: string) => {
    switch (toolSlug) {
      case 'calling-agents':
        return (
          <div className="mt-12 p-6 glass-panel rounded-2xl border-white/5 bg-primary/5">
            <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">System Flow</h4>
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <div className="px-4 py-2 border border-white/10 rounded-lg">Script & Contacts (XLSX)</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-primary/30 rounded-lg bg-primary/10 text-white">Retell AI Voice Engine</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-white/10 rounded-lg">Real-time Dashboard Update</div>
            </div>
          </div>
        );
      case 'newsletter-magazine-agent':
        return (
          <div className="mt-12 p-6 glass-panel rounded-2xl border-white/5 bg-secondary/5">
            <h4 className="text-sm font-bold text-secondary mb-4 uppercase tracking-widest">System Flow</h4>
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <div className="px-4 py-2 border border-white/10 rounded-lg">Multiple Media Sources</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-secondary/30 rounded-lg bg-secondary/10 text-white">Gemini LLM Curation</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-white/10 rounded-lg">Single Digest Email</div>
            </div>
          </div>
        );
      case 'automatic-email-sender':
        return (
          <div className="mt-12 p-6 glass-panel rounded-2xl border-white/5 bg-accent/5">
            <h4 className="text-sm font-bold text-accent mb-4 uppercase tracking-widest">System Flow</h4>
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <div className="px-4 py-2 border border-white/10 rounded-lg">Lead Spreadsheet (GitHub/S3)</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-accent/30 rounded-lg bg-accent/10 text-white">Context-Based Writing Loop</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-white/10 rounded-lg">Daily Outreach & Tracking</div>
            </div>
          </div>
        );
      case 'sales-automation':
        return (
          <div className="mt-12 p-6 glass-panel rounded-2xl border-white/5 bg-primary/5">
            <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">System Flow</h4>
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <div className="px-4 py-2 border border-white/10 rounded-lg">Contact CSV / Google Sheet</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-primary/30 rounded-lg bg-primary/10 text-white">Personalized Email Engine</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-white/10 rounded-lg">Engagement Tracking & Updates</div>
            </div>
          </div>
        );
      case 'claude-code-cowork':
        return (
          <div className="mt-12 p-6 glass-panel rounded-2xl border-white/5 bg-secondary/5">
            <h4 className="text-sm font-bold text-secondary mb-4 uppercase tracking-widest">System Flow</h4>
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <div className="px-4 py-2 border border-white/10 rounded-lg">AI Tools (Claude, Retell, GPT)</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-secondary/30 rounded-lg bg-secondary/10 text-white">Custom Workflow Builder</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-white/10 rounded-lg">Deployed Copilots & Agents</div>
            </div>
          </div>
        );
      case 'openclaw-setup':
        return (
          <div className="mt-12 p-6 glass-panel rounded-2xl border-white/5 bg-accent/5">
            <h4 className="text-sm font-bold text-accent mb-4 uppercase tracking-widest">System Flow</h4>
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <div className="px-4 py-2 border border-white/10 rounded-lg">Use Case & Tool Mapping</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-accent/30 rounded-lg bg-accent/10 text-white">OpenClaw Configuration Engine</div>
              <div className="h-8 w-px bg-white/10" />
              <div className="px-4 py-2 border border-white/10 rounded-lg">Production-Ready Automation</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">

        <Link href="/ai-development" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Content Side */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-12 leading-tight">
              {tool.name}
            </h1>

            <div className="space-y-8 mb-12">
              {qaItems.map((item, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl border-white/5">
                  <h4 className="text-lg font-bold text-primary mb-2">Q: {item.q}</h4>
                  <div className="text-muted-foreground text-lg leading-relaxed flex gap-2">
                    <span className="text-white font-bold shrink-0">A:</span>
                    <span>{item.a}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-12 flex-grow">
              <section>
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-semibold flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" /> Perks
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tool.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-white/90">{perk}</span>
                    </li>
                  ))}
                </ul>
              </section>
              {getFlowchart(slug)}
            </div>

            <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <ButtonGlow size="lg" className="w-full sm:w-auto" data-testid="button-tool-cta">
                {ctaText}
              </ButtonGlow>
              <Link href="/ai-grant">
                <ButtonGlow variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-tool-contact">
                  Talk to a Specialist
                </ButtonGlow>
              </Link>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel rounded-3xl overflow-hidden aspect-square relative sticky top-28 border border-white/10 p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
              <img
                src={tool.imageUrl}
                alt={tool.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
