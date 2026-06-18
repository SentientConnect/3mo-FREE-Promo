import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <Link href="/" className="mb-5 flex items-center gap-3">
            <span className="triangle-mark" />
            <span>
              <span className="block text-sm font-semibold tracking-[0.22em] text-softgold">SENTIENT</span>
              <span className="block text-xs uppercase tracking-[0.28em] text-bone/70">Connect™</span>
            </span>
          </Link>
          <p className="max-w-xl text-sm leading-7 text-bone/62">
            Built for clarity, accountability, and the greater good of humanity.
          </p>
          <div className="mt-6 space-y-1 text-xs uppercase tracking-[0.18em] text-bone/45">
            <p>SentientOS™ © 2026</p>
            <p>Sentient Connect™</p>
            <p>AURA Genesis™</p>
            <p>Mind | Body | Spirit Triangulation™</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-gold/10 bg-white/[0.03] px-4 py-3 text-sm text-bone/66 transition hover:border-gold/25 hover:text-softgold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm font-semibold text-softgold transition hover:bg-gold/15"
          >
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
