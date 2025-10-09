import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Valentin LEROUGE",
  description:
    "Informations légales du site valentin-lerouge.fr : éditeur, statut, hébergeur et conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-28 text-sm text-white/80 md:py-32">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
          Informations légales
        </span>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Mentions légales
        </h1>
        <p className="text-base text-white/70">
          Le présent site est édité par Valentin LEROUGE, entrepreneur
          individuel. En naviguant sur ce site, vous acceptez les mentions
          légales décrites ci-dessous.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            1. Éditeur du site
          </h2>
          <p>
            <span className="font-semibold text-white">Valentin LEROUGE</span>{" "}
            — Entrepreneur individuel
          </p>
          <ul className="space-y-2 text-white/70">
            <li>SIRET : 911 488 831 00015</li>
            <li>Adresse : communiquée sur demande (activité exercée à domicile)</li>
            <li>
              Contact :{" "}
              <a
                className="text-sky-200 transition hover:text-sky-100"
                href="mailto:contact@valentin-lerouge.fr"
              >
                contact@valentin-lerouge.fr
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            2. Responsable de la publication
          </h2>
          <p>Valentin LEROUGE</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            3. Hébergeur du site
          </h2>
          <p>OVH SAS</p>
          <ul className="space-y-2 text-white/70">
            <li>2, rue Kellermann, 59100 Roubaix, France</li>
            <li>RCS Lille : 537 407 926</li>
            <li>
              <a
                className="text-sky-200 transition hover:text-sky-100"
                href="https://www.ovhcloud.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ovhcloud.com
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            4. Propriété intellectuelle
          </h2>
          <p className="text-white/70">
            L’ensemble des contenus de ce site (textes, images, graphismes,
            logos, icônes, développement) est la propriété exclusive de Valentin
            LEROUGE, sauf mention contraire. Toute reproduction, distribution,
            modification ou publication, même partielle, est strictement
            interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            5. Responsabilité
          </h2>
          <p className="text-white/70">
            Les informations fournies sur ce site le sont à titre indicatif. En
            dépit de mises à jour régulières, Valentin LEROUGE ne saurait être
            tenu responsable d’éventuelles inexactitudes, erreurs ou omissions
            ainsi que des dommages pouvant résulter de l’utilisation des
            informations présentes sur ce site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            6. Protection des données personnelles
          </h2>
          <p className="text-white/70">
            Pour en savoir plus sur la collecte et le traitement des données
            personnelles, consultez la{" "}
            <Link
              href="/politique-de-confidentialite"
              className="text-sky-200 transition hover:text-sky-100"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">
            7. Droit applicable
          </h2>
          <p className="text-white/70">
            Le présent site est soumis au droit français. En cas de litige, et à
            défaut de résolution amiable, les tribunaux français seront seuls
            compétents.
          </p>
        </section>
      </div>
    </main>
  );
}
