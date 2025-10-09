"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stack = [
  "Next.JS",
  "Symfony",
  "Web scraping",
  "Automatisation",
  "IA",
  "WordPress",
];

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[90vh] scroll-mt-32 items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,254,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_65%)] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071326] via-[#020617] to-[#01030d] opacity-95" />
        <div className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-sky-500/30 blur-[160px]" />
        <div className="absolute right-[-10%] top-[-15%] h-[360px] w-[360px] rounded-full bg-fuchsia-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[10%] h-[480px] w-[520px] rounded-full bg-cyan-500/25 blur-[180px]" />
        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,0.85),transparent_68%)]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:220px_260px]" />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            Développeur web freelance
          </div>
          <h1 className="bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl lg:text-6xl">
            Sites & Apps sur-mesure qui génèrent des résultats
          </h1>
          <p className="text-lg text-white/70">
            Next/React, Symfony & WordPress. J’aide les TPE/PME à gagner des
            clients ou du temps — avec des sites rapides et des automatisations
            ciblées.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="shadow-lg shadow-sky-500/30">
              <Link
                href="https://calendly.com/welance-mail/parlez-nous-de-votre-projet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vous avez un projet ? Parlons-en
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#projets">Voir les projets</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/50">
            {stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-4 text-sm text-white/75">
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-200">
                Bio
              </span>
              <p>
                Freelance spécialisé en Next/React, Symfony et WordPress.
                J’accompagne les entreprises sur des projets durables : sites
                vitrines rapides, applications sur mesure et automatisations qui
                font gagner du temps.
              </p>
              <div className="relative isolate mt-5 overflow-hidden rounded-2xl">
                <Image
                  src="/hero-card-light.svg"
                  alt="Offres clés"
                  width={400}
                  height={240}
                  className="h-auto w-full"
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                      ✓
                    </span>
                    Offres clés
                  </div>
                  <ul className="grid gap-3 text-sm text-white">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-300" />
                      Architectures front & back sur-mesure
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-300" />
                      Automatisations connectées à vos outils
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-300" />
                      WordPress sécurisé et orienté conversion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-sky-500/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
