import { NextRequest, NextResponse } from "next/server";
import { executeMasterOrchestrator } from "@/lib/ai/orchestrator";
import { StudentProfile } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { profile, assessmentAnswers } = body;

    const report = executeMasterOrchestrator(profile || {}, assessmentAnswers);

    return NextResponse.json({
      success: true,
      report,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to execute multi-agent orchestrator",
      },
      { status: 500 }
    );
  }
}
