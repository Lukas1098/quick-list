"use server";

import { mockAdvisors, type Advisor } from "@/lib/advisors/data/data";

const ADVISORS_API =
  "https://mp30dcc6efca114e1b21.free.beeceptor.com/advisor-listings";

export async function getAdvisors(): Promise<Advisor[]> {
  try {
    const response = await fetch(ADVISORS_API, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch advisors: ${response.status}`);
    }

    const data: Advisor[] = await response.json();

    return data;
  } catch (error) {
    console.log("Using local advisor data:", error);

    return mockAdvisors;
  }
}