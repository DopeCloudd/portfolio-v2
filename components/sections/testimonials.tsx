"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Travail rapide et soigné, mon site vitrine est exactement ce que je voulais.",
    author: "Claire, gérante",
  },
  {
    quote:
      "À l’écoute et force de proposition : notre application est performante et évolutive.",
    author: "Marc, directeur PME",
  },
  {
    quote:
      "Process pro du début à la fin. Livraison dans les délais et résultats mesurables.",
    author: "David, responsable marketing",
  },
];

export function TestimonialsSection() {
  return (
    <Section
      id="temoignages"
      eyebrow="Ils me font confiance"
      title="Des clients accompagnés avec transparence et exigence"
      description="Chaque projet est mené avec un suivi régulier, des livrables testés et une communication claire."
      variant="surface"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="h-full border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl">
              <p className="text-lg leading-relaxed text-white/80">
                “{testimonial.quote}”
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-xs text-white">
                  {index + 1}
                </span>
                <span className="bg-gradient-to-r from-white via-sky-100 to-blue-200 bg-clip-text text-transparent">
                  {testimonial.author}
                </span>
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
