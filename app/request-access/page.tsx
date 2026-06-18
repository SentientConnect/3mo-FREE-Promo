import Link from "next/link";
import { Mail } from "lucide-react";
import { Eyebrow } from "@/components/ui";

export default function RequestAccessPage() {
  return (
    <section className="relative overflow-hidden bg-dark-radial px-5 py-20 lg:px-8">
      <div className="sacred-grid absolute inset-0 opacity-35" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_.9fr]">
        <div>
          <Eyebrow>Request Access</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-bone md:text-6xl">
            Start with the layer that fits your mission.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-bone/68">
            Use this placeholder page for future lead capture, GHL forms, Supabase auth, or direct booking workflows.
          </p>
          <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/10 p-5 text-sm leading-7 text-bone/72">
            Replace this form with your live intake, booking, or CRM embed when ready.
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 md:p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl border border-gold/20 bg-gold/10 text-softgold">
            <Mail className="h-6 w-6" />
          </div>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.22em] text-bone/55">
                Name
              </label>
              <input id="name" name="name" className="mt-2 w-full rounded-2xl border border-gold/15 bg-black/40 px-4 py-3 text-bone outline-none transition focus:border-gold/45" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.22em] text-bone/55">
                Email
              </label>
              <input id="email" name="email" type="email" className="mt-2 w-full rounded-2xl border border-gold/15 bg-black/40 px-4 py-3 text-bone outline-none transition focus:border-gold/45" />
            </div>
            <div>
              <label htmlFor="interest" className="text-xs font-bold uppercase tracking-[0.22em] text-bone/55">
                Area of Interest
              </label>
              <select id="interest" name="interest" className="mt-2 w-full rounded-2xl border border-gold/15 bg-black/40 px-4 py-3 text-bone outline-none transition focus:border-gold/45">
                <option>Sentient Connect</option>
                <option>AURA Genesis</option>
                <option>Home Services AURA</option>
                <option>Behavioral Health</option>
                <option>Business Consulting</option>
                <option>MBS Framework</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.22em] text-bone/55">
                Message
              </label>
              <textarea id="message" name="message" rows={5} className="mt-2 w-full rounded-2xl border border-gold/15 bg-black/40 px-4 py-3 text-bone outline-none transition focus:border-gold/45" />
            </div>
            <button type="button" className="w-full rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-gold transition hover:scale-[1.01]">
              Submit Request
            </button>
            <p className="text-center text-xs leading-6 text-bone/45">
              Need to return? <Link href="/" className="text-softgold">Go home</Link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
