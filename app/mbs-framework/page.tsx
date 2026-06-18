import { ProductPage } from "@/components/page-template";
import { Eyebrow, SectionShell } from "@/components/ui";
import { pageData } from "@/lib/content";

export default function MBSFrameworkPage() {
  return (
    <ProductPage {...pageData.mbs}>
      <SectionShell className="bg-black/45">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>The Triangulation Model</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-bone md:text-5xl">
            Growth becomes practical when the full human system is visible.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="gold-text text-5xl font-semibold">Mind</p>
            <p className="mt-5 text-base leading-8 text-bone/64">
              Clarity, decisions, thoughts, focus, truthfulness, emotional patterns, and cognitive readiness.
            </p>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="gold-text text-5xl font-semibold">Body</p>
            <p className="mt-5 text-base leading-8 text-bone/64">
              Regulation, habits, energy, sleep, food, cravings, movement, and physical recovery.
            </p>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="gold-text text-5xl font-semibold">Spirit</p>
            <p className="mt-5 text-base leading-8 text-bone/64">
              Purpose, integrity, values, alignment, humility, forgiveness, service, and identity.
            </p>
          </div>
        </div>
      </SectionShell>
    </ProductPage>
  );
}
