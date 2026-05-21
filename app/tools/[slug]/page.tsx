import { toolsData } from "@/lib/data";
import ToolDetailClient from "./ToolDetailClient";

export function generateStaticParams() {
  return toolsData.map((tool) => ({ slug: tool.slug }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ToolDetailPage({ params }: PageProps) {
  const tool = toolsData.find((t) => t.slug === params.slug);
  return <ToolDetailClient tool={tool} slug={params.slug} />;
}
