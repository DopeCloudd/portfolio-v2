import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Valentin LEROUGE",
  description:
    "Découvrez comment les données personnelles sont collectées, utilisées et protégées sur valentin-lerouge.fr.",
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-28 text-sm text-white/80 md:py-32">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
          Données personnelles
        </span>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="text-base text-white/70">
          Cette politique détaille la manière dont les données personnelles
          collectées via le site valentin-lerouge.fr sont utilisées et
          protégées. Elle s&apos;applique à l&apos;ensemble des services
          proposés, notamment le formulaire de contact et la prise de rendez-vous.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est{" "}
            <span className="font-semibold text-white">Valentin LEROUGE</span>,
            entrepreneur individuel.
          </p>
          <p>
            Pour toute question, vous pouvez écrire à{" "}
            <a
              className="text-sky-200 transition hover:text-sky-100"
              href="mailto:contact@valentin-lerouge.fr"
            >
              contact@valentin-lerouge.fr
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Données collectées</h2>
          <p className="text-white/70">
            Les données personnelles collectées le sont exclusivement via :
          </p>
          <ul className="list-disc space-y-2 pl-6 text-white/70">
            <li>
              Le formulaire de contact (nom, prénom, adresse e-mail, nom
              d&apos;entreprise éventuel et contenu du message).
            </li>
            <li>
              La réservation d&apos;un rendez-vous via la plateforme{" "}
              <a
                className="text-sky-200 transition hover:text-sky-100"
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendly
              </a>
              , qui peut collecter des informations nécessaires à la prise de rendez-vous.
            </li>
          </ul>
          <p className="text-white/70">
            Aucune donnée sensible n&apos;est demandée. Les informations
            collectées sont limitées au strict nécessaire pour répondre aux
            sollicitations ou organiser un rendez-vous.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. Finalités</h2>
          <p className="text-white/70">
            Les données sont utilisées pour :
          </p>
          <ul className="list-disc space-y-2 pl-6 text-white/70">
            <li>Répondre aux demandes envoyées via le formulaire de contact.</li>
            <li>Organiser et préparer les rendez-vous programmés via Calendly.</li>
            <li>Échanger dans le cadre d&apos;une relation commerciale naissante.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">4. Bases légales</h2>
          <p className="text-white/70">
            Les traitements reposent sur le consentement des personnes concernées
            et sur l&apos;intérêt légitime de Valentin LEROUGE à répondre aux
            demandes entrantes et organiser les rendez-vous sollicités.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            5. Destinataires et sous-traitants
          </h2>
          <p className="text-white/70">
            Les données sont traitées uniquement par Valentin LEROUGE. Elles
            peuvent être transférées à Calendly pour l&apos;organisation des
            rendez-vous. Calendly agit en qualité de sous-traitant et applique
            ses propres conditions d&apos;utilisation et de confidentialité.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            6. Durée de conservation
          </h2>
          <p className="text-white/70">
            Les données issues du formulaire de contact et des prises de
            rendez-vous sont conservées pendant une durée maximale de deux ans à
            compter du dernier échange, sauf obligation légale contraire ou
            demande explicite de suppression.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">7. Droits des personnes</h2>
          <p className="text-white/70">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez des
            droits suivants : accès, rectification, opposition, limitation,
            suppression et portabilité des données vous concernant. Vous pouvez
            exercer ces droits en écrivant à{" "}
            <a
              className="text-sky-200 transition hover:text-sky-100"
              href="mailto:contact@valentin-lerouge.fr"
            >
              contact@valentin-lerouge.fr
            </a>
            . Une preuve d&apos;identité pourra vous être demandée.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">8. Sécurité des données</h2>
          <p className="text-white/70">
            Des mesures techniques et organisationnelles adaptées sont mises en
            place pour protéger les données personnelles contre toute perte,
            utilisation abusive ou accès non autorisé.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">9. Cookies et traceurs</h2>
          <p className="text-white/70">
            Le site ne dépose que les cookies nécessaires à son bon
            fonctionnement. Aucun cookie publicitaire n&apos;est utilisé. Les
            services tiers peuvent cependant déposer leurs propres cookies lors
            de l&apos;utilisation de leurs fonctionnalités.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            10. Mise à jour de la politique
          </h2>
          <p className="text-white/70">
            La présente politique peut être amenée à évoluer pour refléter des
            modifications légales ou techniques. La date de dernière mise à jour
            est indiquée sur cette page.
          </p>
          <p className="text-white/70">Dernière mise à jour : {new Date().getFullYear()}.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">11. Réclamations</h2>
          <p className="text-white/70">
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            introduire une réclamation auprès de la Commission Nationale de
            l’Informatique et des Libertés (CNIL) via{" "}
            <a
              className="text-sky-200 transition hover:text-sky-100"
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>
            .
          </p>
          <p className="text-white/70">
            Pour plus d&apos;informations juridiques, consultez également les{" "}
            <Link
              href="/mentions-legales"
              className="text-sky-200 transition hover:text-sky-100"
            >
              mentions légales
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
