import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative overflow-hidden px-5 py-20 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-softgold/80">{children}</p>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] transition",
        variant === "primary"
          ? "bg-gold-gradient text-black shadow-gold hover:scale-[1.02]"
          : "border border-gold/25 bg-white/[0.03] text-softgold hover:bg-gold/10"
      )}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}) {
  const content = (
    <div className="glass-panel group h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:border-gold/35">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-softgold">
        {Icon ? <Icon className="h-5 w-5" /> : <span className="h-2 w-2 rounded-full bg-softgold" />}
      </div>
      <h3 className="text-lg font-semibold text-bone">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-bone/62">{description}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-softgold/80">
          Explore <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export function CTASection({
  title = "Build the system around the human.",
  description = "Request access to Sentient Connect and begin mapping the operating framework around clarity, accountability, and execution.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <SectionShell className="bg-black">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-14 text-center md:px-12">
        <div className="sacred-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl">
          <Eyebrow>Sentient Connect™</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-bone md:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-bone/65">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/request-access">Request Access</ButtonLink>
            <ButtonLink href="/aura-genesis" variant="secondary">Explore AURA Genesis</ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
