import { NextResponse } from "next/server";

import { mockAdvisors } from "@/lib/advisors/data/data";

export async function GET() {
  const advisors = mockAdvisors.map((advisor) => ({
    ...advisor,
    callAvailable: Math.random() > 0.5,
    chatAvailable: Math.random() > 0.5,
  }));

  return NextResponse.json(advisors);
}