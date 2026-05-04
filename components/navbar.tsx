"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-prose flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 font-display text-sm font-semibold text-accent ring-1 ring-accent/20 transition-transform group-hover:scale-105">
            {initials}
          </span>
          <span className="font-display text-sm tracking-tight">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-subtle transition-colors hover:bg-muted hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 md:inline-flex"
          >
            Say hi
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-subtle hover:bg-muted hover:text-fg md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav className="container-prose flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-subtle hover:bg-muted hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-fg px-3 py-2.5 text-center text-sm font-medium text-bg"
            >
              Say hi
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
