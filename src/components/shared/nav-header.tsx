"use client";

import { useState } from "react";

const links = [
  { label: "Mission Control", href: "#hero" },
  { label: "Architecture", href: "#architecture" },
  { label: "Training", href: "#training" },
  { label: "Lab", href: "#lab" },
];

export function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          <span className="text-mario-red">Mario</span>{" "}
          <span className="text-muted-foreground">RL v2.0</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:text-foreground uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/SugarmanZhu/Mario"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:text-foreground uppercase"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:bg-card hover:text-foreground uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/SugarmanZhu/Mario"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:bg-card hover:text-foreground uppercase"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
