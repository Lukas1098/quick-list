import { AdvisorsList } from "@/components/list/advisors-list";
import { getAdvisors } from "@/lib/advisors/get-advisors";

export default async function Home() {
  const advisors = await getAdvisors();

  return (
    <main className="min-h-screen bg-muted/30 px-5 py-16 sm:px-8">
      <section className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            Advisor availability
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Choose an available advisor to start a call or chat.
          </p>
        </div>

        <AdvisorsList initialAdvisors={advisors} />
      </section>
    </main>
  );
}