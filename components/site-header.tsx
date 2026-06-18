import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-obsidian/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Sentient Connect home">
          <span className="triangle-mark" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.22em] text-softgold">SENTIENT</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-bone/70">Connect™</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-bone/64 transition hover:bg-gold/10 hover:text-softgold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-access"
            className="hidden rounded-full border border-gold/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-softgold transition hover:bg-gold/10 md:inline-flex"
          >
            Request Access
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-gold-gradient px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-gold transition hover:scale-[1.02]"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="border-t border-gold/10 px-5 py-3 xl:hidden">
        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-gold/15 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-bone/65"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
