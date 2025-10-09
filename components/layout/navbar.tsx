"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#offres", label: "Offres" },
  { href: "#projets", label: "Projets" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("#accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const referenceOffset = 200;
      const scrollPosition = window.scrollY + referenceOffset;

      const sections = links
        .map(({ href }) => {
          const id = href.replace("#", "");
          const element = document.getElementById(id);
          if (!element) return null;
          const top = element.getBoundingClientRect().top + window.scrollY;
          return { href, top };
        })
        .filter(
          (section): section is { href: string; top: number } => Boolean(section)
        )
        .sort((a, b) => a.top - b.top);

      if (sections.length === 0) return;

      const current =
        [...sections].reverse().find((section) => section.top <= scrollPosition) ??
        sections[0];

      setActive(current.href);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleMenuLinkClick = (href: string) => () => {
    setIsMenuOpen(false);
    setActive(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020818]/70 backdrop-blur-lg">
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
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/[0.08] px-2 py-1 text-xs font-medium text-white/80 shadow-lg shadow-black/30 backdrop-blur-xl md:flex">
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
                onClick={() => setActive(href)}
              >
                {active === href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/20"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden shadow-lg shadow-sky-500/30 md:inline-flex">
            <Link
              href="https://calendly.com/welance-mail/parlez-nous-de-votre-projet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver un appel de 15 min
            </Link>
          </Button>
          <div className="flex items-center gap-2 md:hidden">
            <Button asChild size="sm" variant="secondary" className="shadow-lg shadow-sky-500/30">
              <Link
                href="https://calendly.com/welance-mail/parlez-nous-de-votre-projet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver un appel de 15 min
              </Link>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Basculer le menu de navigation"
              onClick={toggleMenu}
              className="rounded-full border border-white/15 bg-white/[0.08] text-white/80 shadow-lg shadow-black/30 backdrop-blur-xl hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-navigation"
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="mx-auto mt-2 w-full max-w-6xl px-6 pb-4">
              <div className="flex flex-col gap-1 rounded-3xl border border-white/15 bg-white/[0.08] p-3 text-sm font-medium text-white/80 shadow-lg shadow-black/30 backdrop-blur-xl">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={handleMenuLinkClick(href)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-2 transition",
                      active === href
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span>{label}</span>
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      {href.replace("#", "")}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
