import { NextResponse } from "next/server";
import { toolsData } from "@/lib/data";

export function generateStaticParams() {
  return toolsData.map((tool) => ({ slug: tool.slug }));
}

export async function GET(
    request: Request,
    context: any
) {
    const params = await Promise.resolve(context.params);
    const tool = toolsData.find((t) => t.slug === params.slug);

    if (!tool) {
        return NextResponse.json({ message: "Tool not found" }, { status: 404 });
    }

    return NextResponse.json(tool);
}
