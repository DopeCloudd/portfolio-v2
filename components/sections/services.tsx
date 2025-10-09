import { Bot, Code2, Database, Globe2, LayoutTemplate, LifeBuoy } from "lucide-react";

import { ServiceCard } from "@/components/cards/service-card";
import { Section } from "@/components/layout/section";

const services = [
  {
    title: "Développement sur mesure (React/Symfony)",
    description:
      "Applications web adaptées à vos besoins métier, scalables et robustes.",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Scraper & récupération de data",
    description:
      "Extraction fiable de données (job boards, annuaires…), structuration et export automatisé.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Automatisations",
    description:
      "Mini-apps & workflows pour générer des documents, intégrer Zoom ou orchestrer des emails.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Création de site vitrine",
    description:
      "Sites professionnels, rapides et optimisés pour votre SEO et vos conversions.",
    icon: <Globe2 className="h-6 w-6" />,
  },
  {
    title: "Sites WordPress avancés",
    description:
      "Thèmes et plugins sur-mesure, sécurité renforcée et performances maîtrisées.",
    icon: <LayoutTemplate className="h-6 w-6" />,
  },
  {
    title: "Maintenance & support",
    description:
      "Mises à jour, monitoring, évolutions continues et support sur-mesure.",
    icon: <LifeBuoy className="h-6 w-6" />,
  },
];

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Des solutions web taillées pour les TPE & PME"
      description="Je construis des expériences numériques fiables et performantes, de la vitrine WordPress aux applications métier sur-mesure."
      variant="surface"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Section>
  );
}
