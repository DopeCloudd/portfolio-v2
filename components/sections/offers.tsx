"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const offers = [
  {
    title: "Site clé en main",
    tagline: "Votre site professionnel livré en 10 jours",
    features: [
      "Design moderne (WordPress ou Framer).",
      "Référencement local (SEO + Google My Business).",
      "Sécurisé, responsive, maintenance incluse 3 mois.",
    ],
    price: "À partir de 1 490 € (paiement possible en 2x).",
    ctaLabel: "Demandez un audit gratuit",
    ctaDescription:
      "Demandez un audit gratuit de votre site ou une estimation rapide.",
    ctaHref: "#contact",
  },
  {
    title: "Automatisation & outils internes",
    tagline: "Gagnez plusieurs heures par semaine grâce à vos outils digitaux",
    features: [
      "Audit de vos processus.",
      "Automatisation ou création d’un outil sur mesure (Next.js / Symfony).",
      "Accompagnement à la mise en place.",
    ],
    price: "À partir de 2 500 €.",
    ctaLabel: "Planifiez un appel découverte",
    ctaDescription: "Planifiez un appel découverte gratuit de 15 minutes.",
    ctaHref: "https://calendly.com/welance-mail/parlez-nous-de-votre-projet",
  },
  {
    title: "Scraping & Data Ops",
    tagline: "Collectez et exploitez les données qui comptent pour vous",
    features: [
      "Collecte multi-sources + dédoublonnage",
      "Export (CSV/DB) + dashboard",
      "Alerte quotidienne / hebdo",
    ],
    price: "Sur devis.",
    ctaLabel: "Planifiez un appel découverte",
    ctaDescription: "Planifiez un appel découverte gratuit de 15 minutes.",
    ctaHref: "https://calendly.com/welance-mail/parlez-nous-de-votre-projet",
  },
];

export function OffersSection() {
  return (
    <Section
      id="offres"
      eyebrow="Offres"
      title="Des offres clés en main pour aller vite et juste"
      description="Choisissez l’offre qui correspond à votre besoin : un site professionnel livré rapidement ou des automatisations métier pensées pour vous faire gagner du temps."
      variant="light"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="flex h-full flex-col border border-slate-200/70 bg-white p-8 text-slate-900 shadow-xl shadow-slate-200/40 transition hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white hover:shadow-2xl">
              <CardHeader>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
                  {`🔹 ${offer.title}`}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{`"${offer.tagline}"`}</h3>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <ul className="space-y-3 text-sm text-slate-600">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-sky-600">
                  {offer.price}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 justify-start">
                <Link
                  href={offer.ctaHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
                  target={
                    offer.ctaHref.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    offer.ctaHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span>{offer.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-xs text-slate-500">{offer.ctaDescription}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-slate-500">
          Besoin d’un accompagnement personnalisé ? Parlons de votre projet.
        </p>
        <Button asChild className="shadow-lg shadow-sky-500/20">
          <Link
            href="https://calendly.com/welance-mail/parlez-nous-de-votre-projet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demander un audit gratuit
          </Link>
        </Button>
      </div>
    </Section>
  );
}
