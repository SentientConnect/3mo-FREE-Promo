import type { LucideIcon } from "lucide-react";
import { CTASection, Eyebrow, FeatureCard, SectionShell, ButtonLink } from "@/components/ui";

export function ProductPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  features,
  disclaimer,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: { title: string; description: string }[];
  disclaimer?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-dark-radial px-5 py-20 lg:px-8">
        <div className="sacred-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-bone md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-bone/68">{description}</p>
            {disclaimer ? (
              <p className="mt-5 max-w-2xl rounded-2xl border border-gold/20 bg-gold/10 p-4 text-sm leading-7 text-bone/72">
                {disclaimer}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/request-access">Request Access</ButtonLink>
              <ButtonLink href="/login" variant="secondary">Login</ButtonLink>
            </div>
          </div>
          <div className="glass-panel relative min-h-[360px] overflow-hidden rounded-[2rem] p-8">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-softgold/10 blur-3xl" />
            <div className="relative flex h-full min-h-[300px] flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-gold/20 bg-gold/10 text-softgold">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-softgold/70">System Layer</p>
                <p className="mt-4 text-3xl font-semibold text-bone">{eyebrow}</p>
                <p className="mt-4 text-sm leading-7 text-bone/58">
                  Designed to connect human clarity, operational rhythm, and mission-centered execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-bone md:text-5xl">What this layer supports</h2>
          <p className="mt-5 text-base leading-8 text-bone/62">
            Each layer is built to be clear, practical, and easy to expand as the Sentient Connect ecosystem grows.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </SectionShell>

      {children}
      <CTASection />
    </>
  );
}
