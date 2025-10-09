import { promises as fs } from "fs";
import Script from "next/script";
import { join } from "path";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { OffersSection } from "@/components/sections/offers";
import { ProjectsSection } from "@/components/sections/projects";
import { ReviewsSection } from "@/components/sections/reviews";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { reviewStorageSchema, type StoredReview } from "@/lib/validation";

async function getReviews() {
  try {
    const path = join(process.cwd(), "data", "reviews.json");
    const raw = await fs.readFile(path, "utf8");
    const parsed = JSON.parse(raw);
    const reviews = reviewStorageSchema.parse(parsed);
    const average =
      reviews.length > 0
        ? Number(
            (
              reviews.reduce((acc, item) => acc + item.rating, 0) /
              reviews.length
            ).toFixed(1)
          )
        : 0;
    return { reviews, average };
  } catch (error) {
    console.warn("Unable to read reviews.json", error);
    return { reviews: [] as StoredReview[], average: 0 };
  }
}

export default async function HomePage() {
  const reviewsData = await getReviews();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Valentin LEROUGE",
    jobTitle: "Développeur web freelance",
    url: "https://valentin-lerouge.fr",
    sameAs: [
      "https://www.linkedin.com/in/valentin-lerouge-freelance/",
      "https://github.com/DopeCloudd",
    ],
    knowsAbout: ["React", "Symfony", "WordPress", "Automatisation", "Scraping"],
    worksFor: {
      "@type": "Organization",
      name: "Indépendant",
    },
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://valentin-lerouge.fr/#accueil",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://valentin-lerouge.fr/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Offres",
        item: "https://valentin-lerouge.fr/#offres",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projets",
        item: "https://valentin-lerouge.fr/#projets",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://valentin-lerouge.fr/#contact",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <ServicesSection />
        <OffersSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ReviewsSection
          initialReviews={reviewsData.reviews}
          initialAverage={reviewsData.average}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
