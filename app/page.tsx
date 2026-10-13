import { Activity, Brain, CheckCircle2, HeartHandshake, Triangle } from "lucide-react";
import { CTASection, Eyebrow, FeatureCard, SectionShell, ButtonLink } from "@/components/ui";
import { ecosystemCards, principles } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-dark-radial px-5 py-20 lg:px-8 lg:py-28">
        <div className="sacred-grid absolute inset-0 opacity-35" />
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow>Sentient Connect™</Eyebrow>
            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-bone md:text-6xl lg:text-7xl">
              The Human Operating Framework for <span className="gold-text">Mind, Body & Spirit Execution</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-bone/70">
              Sentient Connect brings together AURA Genesis, SentientOS, DISC behavioral insight, business consulting, home services automation, and the Mind | Body | Spirit Triangulation™ framework into one connected system for personal growth, operational clarity, and human-centered execution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#system">Explore the System</ButtonLink>
              <ButtonLink href="/request-access" variant="secondary">Request Access</ButtonLink>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-softgold/10 blur-3xl" />
            <div className="relative space-y-4">
              {[
                "AURA Genesis™ guided support",
                "SentientOS™ daily progress",
                "MBS Triangulation™ framework",
                "DISC-based personalization",
                "Business and home services automation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-gold/10 bg-black/28 p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-softgold" />
                  <span className="text-sm font-medium text-bone/78">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow>What Sentient Connect Is</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-bone md:text-5xl">
              Guidance for clearer decisions and practical progress.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-bone/65">
            <p>
              Sentient Connect supports individuals and teams with clarity, daily action, and accountable progress without losing the human at the center.
            </p>
            <p>
              Our offerings focus on practical needs: personal development, behavioral understanding, client support, and responsible progress.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="system" className="bg-black/45">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>The System at a Glance</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-bone md:text-5xl">Explore products and services.</h2>
          <p className="mt-5 text-base leading-8 text-bone/62">
            Each part of Sentient Connect is designed to support clearer decisions, stronger operations, and practical human development.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ecosystemCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Operating Principles</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-bone md:text-5xl">Built for clarity, accountability, and execution.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <FeatureCard key={principle.title} {...principle} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-black/45">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-panel rounded-[2rem] p-8 lg:col-span-2">
            <Eyebrow>AURA Genesis™</Eyebrow>
            <h2 className="text-3xl font-semibold text-bone md:text-5xl">Guidance that helps people move forward.</h2>
            <p className="mt-5 text-base leading-8 text-bone/64">
              AURA Genesis helps organize decisions, workflows, client journeys, business operations, and personal accountability. It is designed to bring the right information into the right structure so people can move with clarity.
            </p>
            <div className="mt-7">
              <ButtonLink href="/aura-genesis" variant="secondary">Explore AURA Genesis</ButtonLink>
            </div>
          </div>
          <FeatureCard
            title="From chaos to command"
            description="AURA helps organize priorities, follow-up, and next actions."
            icon={Brain}
          />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Home Services AURA"
            description="Dispatch, vendor coordination, intake, completion tracking, and operational automation."
            icon={Activity}
            href="/home-services-aura"
          />
          <FeatureCard
            title="Behavioral Health"
            description="Support infrastructure for coaching, recovery support, self-reporting, practitioner workflows, and client clarity."
            icon={HeartHandshake}
            href="/behavioral-health"
          />
          <FeatureCard
            title="SentientOS + Wearables"
            description="Personal development experiences, with wearable capabilities clearly marked as future plans."
            icon={Triangle}
            href="/sentientos"
          />
          <FeatureCard
            title="MBS Triangulation"
            description="Mind, Body, and Spirit mapped into a practical framework for individual growth and execution."
            icon={Triangle}
            href="/mbs-framework"
          />
        </div>
        <p className="mt-8 rounded-2xl border border-gold/20 bg-gold/10 p-4 text-sm leading-7 text-bone/72">
          Sentient Connect does not replace licensed medical, clinical, or emergency care.
        </p>
      </SectionShell>

      <SectionShell className="bg-black/45">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Mind",
              description: "Clarity, decisions, thoughts, focus, and mental direction.",
            },
            {
              title: "Body",
              description: "Regulation, habits, energy, recovery, and physical readiness.",
            },
            {
              title: "Spirit",
              description: "Purpose, integrity, values, alignment, forgiveness, and service.",
            },
          ].map((pillar) => (
            <div key={pillar.title} className="glass-panel rounded-[2rem] p-8">
              <p className="gold-text text-5xl font-semibold">{pillar.title}</p>
              <p className="mt-5 text-base leading-8 text-bone/64">{pillar.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <CTASection />
    </>
  );
}
