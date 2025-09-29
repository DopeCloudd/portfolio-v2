"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stack = ["Next.js", "React", "TypeScript", "Symfony", "WordPress", "SQL"];

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[90vh] scroll-mt-32 items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-52 top-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
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
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Développeur web freelance — sites & applications modernes et
            performantes.
          </h1>
          <p className="text-lg text-white/70">
            Spécialisé en Next/React, Symfony et WordPress. J’aide les
            entreprises à créer des sites rapides, fiables et orientés
            résultats.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="shadow-lg shadow-sky-500/30">
              <Link href="#contact">Vous avez un projet ? Parlons-en</Link>
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
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
