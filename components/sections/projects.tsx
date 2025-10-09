import { ProjectCard } from "@/components/cards/project-card";
import { Section } from "@/components/layout/section";

const projects = [
  {
    title: "MySportSession",
    description: "Plateforme SaaS de réservation de séances de sport.",
    role: "Développement",
    value:
      "Gestion des réservations en temps réel, agenda dynamique, expérience mobile optimisée.",
    stack: ["React", "Symfony", "API", "PostgreSQL", "Elasticsearch"],
    link: "https://mysportsession.com",
  },
  {
    title: "Créations de sites vitrines WordPress",
    description:
      "Sites professionnels pour plusieurs entreprises avec tunnel de conversion personnalisé.",
    role: "Design & Dev",
    value:
      "Thèmes sur-mesure, optimisation Core Web Vitals et contenus SEO structurés.",
    stack: ["WordPress", "PHP", "Elementor", "SEO"],
  },
  {
    title: "Scraper d’offres d’emploi + matching IA",
    description:
      "Extraction multi-sources, parsing intelligent et matching candidat ↔ offre.",
    role: "Lead Dev",
    value:
      "Automatisation complète, gain de temps pour les équipes RH et reporting en temps réel.",
    stack: ["Python", "NodeJS", "IA", "PostgreSQL"],
  },
  {
    title: "Mini-app de génération de documents juridiques",
    description:
      "Formulaire guidé, génération PDF et workflow email automatisé.",
    role: "Product & Dev",
    value:
      "Réduction du temps de traitement x5 et traçabilité complète des documents.",
    stack: ["React", "Node.js", "PDF", "SendGrid"],
  },
  {
    title: "Web app de gestion de réunions Zoom",
    description:
      "Planification des sessions de bilan de compétences et automatisations Zoom.",
    role: "Développement",
    value:
      "Synchronisation agenda, rappels automatiques et suivi des sessions.",
    stack: ["Next.js", "Zoom API", "Supabase", "Tailwind"],
  },
  {
    title: "Plugins WordPress sur-mesure",
    description:
      "Fonctionnalités métier : quiz, scoring, reporting personnalisé.",
    role: "Back & Front",
    value:
      "Plugins sécurisés, maintenables, avec interface d’administration sur-mesure.",
    stack: ["WordPress", "PHP", "REST API", "Chart.js"],
  },
];

export function ProjectsSection() {
  return (
    <Section
      id="projets"
      eyebrow="Réalisations"
      title="Des projets pensés pour délivrer des résultats mesurables"
      description="Chaque collaboration vise un impact concret : conversion, automatisation ou gain de temps pour vos équipes."
      variant="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} tone={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
