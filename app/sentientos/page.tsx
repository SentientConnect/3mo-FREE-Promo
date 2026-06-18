import { ProductPage } from "@/components/page-template";
import { Eyebrow, FeatureCard, SectionShell } from "@/components/ui";
import { pageData } from "@/lib/content";
import { Activity, HeartPulse, RadioTower } from "lucide-react";

export default function SentientOSPage() {
  return (
    <ProductPage {...pageData.sentientos}>
      <SectionShell id="wearables" className="bg-black/45">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Wearables Coming Soon</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-bone md:text-5xl">
            Future body-state awareness and personalized growth insight.
          </h2>
          <p className="mt-5 text-base leading-8 text-bone/62">
            The future SentientOS wearable layer is planned to help connect behavioral signals, body-state awareness, decision support, and personal growth insights.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard title="Behavioral Signals" description="Support better awareness of patterns, states, and timing." icon={RadioTower} />
          <FeatureCard title="Body-State Awareness" description="Bring regulation, recovery, and readiness into the operating model." icon={HeartPulse} />
          <FeatureCard title="Personalized Insights" description="Use connected signals to support better growth and accountability." icon={Activity} />
        </div>
      </SectionShell>
    </ProductPage>
  );
}
