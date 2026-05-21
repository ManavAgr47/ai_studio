import { NextResponse } from "next/server";
import { toolsData } from "@/lib/data";

export async function GET() {
    return NextResponse.json(toolsData);
}
