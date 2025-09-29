import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-white/70">
          <p className="text-base font-semibold text-white">Valentin LEROUGE</p>
          <p>Développeur web freelance — React, Symfony, WordPress.</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-white/70">
          <Link href="#accueil" className="hover:text-white">
            Accueil
          </Link>
          <Link href="#services" className="hover:text-white">
            Services
          </Link>
          <Link href="#projets" className="hover:text-white">
            Projets
          </Link>
          <Link href="#temoignages" className="hover:text-white">
            Témoignages
          </Link>
          <Link href="#avis" className="hover:text-white">
            Avis
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/valentin-lerouge-freelance/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/DopeCloudd"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@valentin-lerouge.fr"
            aria-label="Envoyer un email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Valentin LEROUGE — Tous droits réservés.
        Fait avec ❤️ à Montpellier.
      </div>
    </footer>
  );
}
