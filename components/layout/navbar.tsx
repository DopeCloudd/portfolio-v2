"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("#accueil");

  useEffect(() => {
    const handler = () => {
      const offsets = links.map(({ href }) => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (!element) return { href, offset: Number.POSITIVE_INFINITY };
        const rect = element.getBoundingClientRect();
        return { href, offset: Math.abs(rect.top - 120) };
      });

      const current = offsets.reduce((prev, curr) =>
        curr.offset < prev.offset ? curr : prev
      );
      setActive(current.href);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#accueil"
          className="flex items-center gap-2 text-sm font-semibold"
        >
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/80 to-indigo-500/70 opacity-50 blur-md" />
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-xs font-bold uppercase tracking-widest">
              VL
            </span>
          </span>
          <span className="hidden text-left text-sm sm:block">
            Valentin LEROUGE
            <span className="block text-xs font-normal text-white/60">
              Freelance Next/React • Symfony • WordPress
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-white/80 shadow-lg shadow-black/20 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative rounded-full px-3 py-2 transition",
                active === href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              )}
              aria-label={`Aller à la section ${label}`}
            >
              {active === href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/15"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <Link href="#contact">Vous avez un projet ?</Link>
        </Button>
      </div>
      <div className="mx-auto mt-2 flex w-full max-w-6xl items-center justify-between gap-3 px-6 pb-3 md:hidden">
        <div className="flex flex-1 items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative whitespace-nowrap rounded-full px-3 py-2",
                active === href ? "bg-white/15 text-white" : "text-white/70"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <Button asChild size="sm" variant="secondary">
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
}
