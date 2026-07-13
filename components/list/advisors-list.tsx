"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { Advisor } from "@/lib/advisors/data/data";
import Image from "next/image";

type AdvisorsListProps = {
    initialAdvisors: Advisor[];
};

export function AdvisorsList({
    initialAdvisors,
}: AdvisorsListProps) {
    const [advisors, setAdvisors] =
        useState<Advisor[]>(initialAdvisors);

    useEffect(() => {
        async function refreshAvailability() {
            try {
                const response = await fetch("/api/advisors/availability", {
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }

                const updatedAdvisors: Advisor[] = await response.json();

                setAdvisors(updatedAdvisors);
            } catch (error) {
                console.error("Could not refresh availability:", error);
            }
        }

        const intervalId = window.setInterval(
            refreshAvailability,
            30_000,
        );

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden rounded-lg bg-card">
            <div className="hidden grid-cols-[minmax(0,1fr)_100px_120px_120px] items-center gap-4 px-5 py-3 text-xs font-medium font-mono  text-muted-foreground sm:grid">
                <span>Advisor</span>
                <span>Rate</span>
                <span>Call</span>
                <span>Chat</span>
            </div>

            <div className="divide-y">
                {advisors.map((advisor) => (
                    <article
                        key={advisor.id}
                        className="grid gap-4 px-5 py-5 sm:grid-cols-[minmax(0,1fr)_100px_120px_120px] sm:items-center"
                    >
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
                                <Image
                                    src={advisor.image}
                                    alt={advisor.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                            </div>

                            <div className="min-w-0">
                                <h2 className="truncate text-sm font-medium">
                                    {advisor.name}
                                </h2>

                                <p className="mt-0.5 text-xs text-muted-foreground sm:hidden">
                                    ${advisor.pricePerMinute.toFixed(2)}/min
                                </p>
                            </div>
                        </div>

                        <p className="hidden text-sm tabular-nums text-muted-foreground sm:block">
                            ${advisor.pricePerMinute.toFixed(2)}
                            <span className="text-xs">/min</span>
                        </p>

                        <Button
                            type="button"
                            size="sm"
                            disabled={!advisor.callAvailable}
                            className="w-full bg-teal-600 text-white hover:bg-teal-700 disabled:bg-muted disabled:text-muted-foreground sm:w-[110px]"
                        >
                            {advisor.callAvailable ? "Call now" : "Call later"}
                        </Button>

                        <Button
                            type="button"
                            size="sm"
                            disabled={!advisor.chatAvailable}
                            className="w-full bg-teal-600 text-white hover:bg-teal-700 disabled:bg-muted disabled:text-muted-foreground sm:w-[110px]"
                        >
                            {advisor.chatAvailable ? "Chat now" : "Chat later"}
                        </Button>
                    </article>
                ))}
            </div>
        </div>
    );
}