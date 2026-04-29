import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Star } from "lucide-react";
import siteContent from "@/data/site-content.json";

type Accent = "gold" | "green" | "red" | "dark";

type SiteContent = {
  brand: {
    name: string;
    slogan: string;
    description: string;
  };
  contact: {
    phone: string;
    email: string;
    city: string;
    whatsapp: string;
  };
  nav: Array<{ href: string; label: string }>;
  services: Array<{ title: string; description: string; accent: Accent }>;
  destinations: Array<{ name: string; description: string; image: string; tag: string }>;
  testimonials: Array<{ author: string; quote: string }>;
};

const content = siteContent as SiteContent;

const accentClass: Record<Accent, string> = {
  gold: "bg-brand-gold/15 text-brand-night",
  green: "bg-brand-green/15 text-brand-night",
  red: "bg-brand-red/15 text-brand-night",
  dark: "bg-brand-deep/15 text-brand-night",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-brand-night/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Logo SAPHIX SERVICE"
              width={54}
              height={54}
              className="rounded-xl border border-white/20"
              priority
            />
            <div>
              <p className="font-display text-lg font-black leading-none text-white">SAPHIX SERVICE</p>
              <p className="text-xs uppercase tracking-[0.22em] text-brand-gold">Cameroun premium</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/90 md:flex">
            {content.nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-brand-gold">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={content.contact.whatsapp}
            className="rounded-full bg-brand-gold px-5 py-2 text-sm font-extrabold text-brand-night transition-transform hover:scale-105"
          >
            WhatsApp
          </Link>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <Image
            src="/images/hero-cameroun.svg"
            alt="Paysage du Cameroun"
            fill
            className="object-cover"
            priority
          />
          <div className="relative bg-gradient-to-r from-brand-night/95 via-brand-night/65 to-brand-night/40">
            <div className="mx-auto grid min-h-[78vh] w-full max-w-6xl content-center gap-8 px-5 py-20 sm:px-8">
              <span className="chip w-fit bg-brand-gold/25 text-brand-gold">Guide local de confiance</span>
              <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
                Découvrez le Cameroun avec un service premium, humain et fiable.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200">{content.brand.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-brand-gold px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-brand-night"
                >
                  Réserver maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#destinations"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white"
                >
                  Voir les destinations
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-deep">Nos services</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Des solutions concrètes pour vos projets au Cameroun</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {content.services.map((service) => (
              <article key={service.title} className="panel p-7">
                <span className={`chip ${accentClass[service.accent]}`}>{service.title}</span>
                <p className="mt-5 text-base leading-relaxed text-slate-700">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="destinations" className="bg-brand-night py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Destinations</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Des expériences inspirées du terrain camerounais</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {content.destinations.map((destination) => (
                <article key={destination.name} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <div className="relative h-60 w-full">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-6 text-white">
                    <span className="chip bg-brand-gold/20 text-brand-gold">{destination.tag}</span>
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-200">{destination.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="apropos" className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="panel p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-deep">À propos</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Une équipe locale qui connaît chaque détail</h2>
            <p className="mt-5 leading-relaxed text-slate-700">{content.brand.slogan}</p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-green" />
                Présence terrain à Douala, Yaoundé, Kribi et dans l’Ouest.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-green" />
                Process clair: cadrage, planning, exécution et suivi.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-green" />
                Réactivité rapide via WhatsApp pour limiter le stress.
              </li>
            </ul>
          </article>

          <article className="panel overflow-hidden">
            <div className="relative h-full min-h-[320px] w-full">
              <Image
                src="/images/evenement-premium.svg"
                alt="Organisation événementielle premium au Cameroun"
                fill
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        </section>

        <section id="contact" className="bg-gradient-to-r from-brand-deep to-brand-night py-20 text-white">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
            <article>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Contact</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Planifions votre prochaine expérience</h2>
              <div className="mt-8 space-y-4 text-slate-100">
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-gold" /> {content.contact.city}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-gold" /> {content.contact.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-gold" /> {content.contact.email}
                </p>
              </div>
              <Link
                href={content.contact.whatsapp}
                className="mt-8 inline-flex items-center rounded-full bg-brand-gold px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-brand-night"
              >
                Démarrer sur WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </article>

            <article className="panel border-white/20 bg-white/10 p-8">
              <p className="text-lg font-bold">Témoignages récents</p>
              <div className="mt-5 space-y-5">
                {content.testimonials.map((testimonial) => (
                  <blockquote key={testimonial.author} className="rounded-2xl border border-white/10 bg-brand-night/45 p-4">
                    <div className="mb-3 flex text-brand-gold">
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">“{testimonial.quote}”</p>
                    <footer className="mt-2 text-sm font-bold text-white">{testimonial.author}</footer>
                  </blockquote>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 bg-brand-night py-12 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Logo SAPHIX SERVICE"
              width={48}
              height={48}
              className="rounded-lg border border-white/20"
            />
            <div>
              <p className="font-display text-base font-black">SAPHIX SERVICE</p>
              <p className="text-xs text-slate-300">Tourisme, transport et événements au Cameroun</p>
            </div>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            © {new Date().getFullYear()} SAPHIX SERVICE. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
