import type { Tool } from "@/shared/schema";

export const toolsData: Tool[] = [
    {
        id: 1,
        slug: "calling-agents",
        name: "AI Calling Agent",
        description: "Q: Spending hours on cold calls?\nA: Meet our AI Calling Agent — it handles voice calls using scripts and updates your dashboards in real-time.",
        application: "Sales calls, Credit Recovery, Customer Follow-ups, Mass Notifications",
        perks: [
            "Retell AI for voice integration",
            "Twilio for phone number sourcing",
            "Dashboard connectivity via webhooks",
            "XLSX/CSV file input/output support"
        ],
        imageUrl: "/calling-agent.jpeg",
        price: "Contact for Pricing",
    },
    {
        id: 2,
        slug: "newsletter-magazine-agent",
        name: "My Mail Magazine",
        description: "Q: Drowning in unread newsletters?\nA: Try My Mail Magazine — it merges media sources, categorizes content using LLMs, and emails you a digest version.",
        application: "Founders, analysts, and marketers needing quick information scanning",
        perks: [
            "Merges multiple email/news sources",
            "Gemini LLM powered summarization",
            "Auto-reply and scheduling capabilities",
            "Gmail, Notion, and Slack integration"
        ],
        imageUrl: "/newsletter.jpeg",
        price: "Contact for Pricing",
    },
    {
        id: 3,
        slug: "automatic-email-sender",
        name: "Auto Email Sender",
        description: "Q: Writing sales emails manually?\nA: Let our Auto Email Sender draft, schedule, and send your outreach — fully automated, daily.",
        application: "Product outreach, Lead gen, Partnership outreach, Follow-ups",
        perks: [
            "Context-aware AI writing",
            "GitHub/Drive/S3 file fetching",
            "Low-batch loops for high performance",
            "Open and response rate tracking"
        ],
        imageUrl: "/email.jpeg",
        price: "Contact for Pricing",
    },
    {
        id: 4,
        slug: "sales-automation",
        name: "Sales Automation Tool",
        description: "Q: Losing leads to slow follow-ups?\nA: Our Sales Automation Tool runs personalized email campaigns at scale — with smart targeting, attachments, and performance tracking.",
        application: "Cold emailing for SaaS or services, GTM campaigns, Follow-up drips, Partner/investor outreach",
        perks: [
            "Automated email sequences daily",
            "Personalized emails using contact database",
            "Attaches proposals, pitch decks, and portfolios",
            "Tracks opens, clicks, and replies",
            "CSV or Google Sheet upload support",
            "Auto-engagement column updates"
        ],
        imageUrl: "/sales-automation.png",
        price: "Contact for Pricing",
    },
    {
        id: 5,
        slug: "claude-code-cowork",
        name: "Claude Code & Cowork",
        description: "Q: Struggling to integrate AI into your ops?\nA: Claude Code & Cowork helps your team build and deploy intelligent systems — without the setup headache.",
        application: "Internal copilots, Decision support agents, Workflow automation (Zapier, n8n, OpenClaw)",
        perks: [
            "Sets up AI tools (Claude, Retell, GPT)",
            "Custom workflow design (chat, text, voice)",
            "Team training on AI usage",
            "Continuous optimization with feedback",
            "Internal copilots for docs, emails, chats",
            "Decision support agent deployment"
        ],
        imageUrl: "/claude-cowork.png",
        price: "Contact for Pricing",
    },
    {
        id: 6,
        slug: "openclaw-setup",
        name: "OpenClaw Setup",
        description: "Q: OpenClaw too complex to set up?\nA: We handle the configuration, integration, and deployment so your flows are production-ready from day one.",
        application: "Automated reporting, Lead routing, Email triggers, CRM syncing",
        perks: [
            "Full OpenClaw installation & configuration",
            "Workflow design using real use cases",
            "Integrates Notion, Slack, email, CRM",
            "Enterprise-grade scale & security",
            "Observability and monitoring built-in",
            "Production-ready deployment"
        ],
        imageUrl: "/openclaw-setup.png",
        price: "Contact for Pricing",
    }
];
