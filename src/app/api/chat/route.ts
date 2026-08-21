import { NextRequest, NextResponse } from "next/server";
import { runCounselorAgent } from "@/lib/ai/agents/counselorAgent";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query, history, profile } = body;

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const response = await runCounselorAgent(query, history || [], profile || {});

    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process counselor chat",
      },
      { status: 500 }
    );
  }
}
