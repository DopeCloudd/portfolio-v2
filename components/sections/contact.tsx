import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Vous avez un projet ? Parlons-en"
      description="Expliquez votre besoin : je reviens vers vous sous 24h ouvrées avec une première analyse et une proposition de créneau."
      align="left"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Card className="bg-white/5 p-8">
          <h3 className="text-2xl font-semibold text-white">
            Discutons de votre besoin
          </h3>
          <p className="mt-3 text-sm text-white/70">
            Décrivez votre projet, vos objectifs business et vos contraintes
            techniques. Trois points abordés lors du premier échange : vision,
            priorités, budget.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>
        <div className="space-y-6">
          <Card className="bg-white/5 p-6">
            <h4 className="text-lg font-semibold text-white">
              Informations directes
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-200" />
                <a
                  className="hover:text-white"
                  href="mailto:contact@valentin-lerouge.fr"
                >
                  contact@valentin-lerouge.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-sky-200" />
                <span>Visio Google Meet ou Zoom sous 48h</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-sky-200" />
                <a
                  className="hover:text-white"
                  href="https://www.linkedin.com/in/valentin-lerouge-freelance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Card>
          <Card className="bg-white/5 p-6">
            <h4 className="text-lg font-semibold text-white">
              Process d’onboarding
            </h4>
            <ol className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                1. Appel de cadrage (30 min) pour aligner vision et priorités.
              </li>
              <li>
                2. Chiffrage détaillé + recommandations techniques sous 72h.
              </li>
              <li>
                3. Kick-off projet avec roadmap, jalons et communication dédiée.
              </li>
            </ol>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <a href="mailto:contact@valentin-lerouge.fr">
                  Programmer un échange
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
