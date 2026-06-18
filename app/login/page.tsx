import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { Eyebrow } from "@/components/ui";

export default function LoginPage() {
  return (
    <section className="relative min-h-[calc(100vh-160px)] overflow-hidden bg-dark-radial px-5 py-20 lg:px-8">
      <div className="sacred-grid absolute inset-0 opacity-35" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Eyebrow>Secure Access</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-bone md:text-6xl">
            Role-based portals coming soon.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-bone/68">
            This placeholder login page is ready for future Sentient Connect™, AURA Genesis™, client, practitioner, operator, and finance portals.
          </p>
          <Link href="/" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-softgold">
            Back to Home
          </Link>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 md:p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl border border-gold/20 bg-gold/10 text-softgold">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.22em] text-bone/55">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-gold/15 bg-black/40 px-4 py-3 text-bone outline-none transition placeholder:text-bone/28 focus:border-gold/45"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-xs font-bold uppercase tracking-[0.22em] text-bone/55">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••••"
                className="mt-2 w-full rounded-2xl border border-gold/15 bg-black/40 px-4 py-3 text-bone outline-none transition placeholder:text-bone/28 focus:border-gold/45"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-gold transition hover:scale-[1.01]"
            >
              Login
            </button>
            <p className="text-center text-xs leading-6 text-bone/45">Role-based portals coming soon.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
