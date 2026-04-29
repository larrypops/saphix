"use client";

import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  Users,
  ShieldCheck,
  Clock,
  Palmtree,
  Car,
  PartyPopper,
  Navigation,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type PageId = "accueil" | "about" | "contact";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const DESTINATIONS = [
  {
    id: 1,
    name: "Douala",
    desc: "économique & moderne",
    image: "/images/ai-douala.png",
    tags: ["Business", "City Life"],
  },
  {
    id: 2,
    name: "Kribi",
    desc: "plages & détente",
    image: "/images/ai-kribi.png",
    tags: ["Beach", "Relax"],
  },
  {
    id: 3,
    name: "Limbé",
    desc: "nature & volcan",
    image: "/images/ai-limbe.png",
    tags: ["Nature", "Hiking"],
  },
  {
    id: 4,
    name: "Yaoundé",
    desc: "capitale & culture",
    image: "/images/ai-yaounde.png",
    tags: ["Culture", "Gov Hub"],
  },
  {
    id: 5,
    name: "Ouest Cameroun",
    desc: "montagnes & traditions",
    image: "/images/ai-ouest-cameroun.png",
    tags: ["Heritage", "Scenic"],
  },
];

const SERVICES = [
  {
    id: "tourism",
    title: "Tourisme & Visites guidées",
    desc: "Découvrez les plus beaux endroits du Cameroun : plages, montagnes, villes, culture locale.",
    icon: <Palmtree className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "transport",
    title: "Transport & déplacements",
    desc: "Déplacements sécurisés pour vos voyages, rendez-vous, événements.",
    icon: <Car className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "events",
    title: "Organisation d’événements",
    desc: "Mariages, anniversaires, événements professionnels… on s’occupe de tout.",
    icon: <PartyPopper className="h-8 w-8" />,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "personal",
    title: "Accompagnement personnalisé",
    desc: "Un guide à vos côtés pour vous orienter, vous conseiller et optimiser votre séjour.",
    icon: <Navigation className="h-8 w-8" />,
    color: "bg-purple-100 text-purple-700",
  },
];

const REASONS = [
  { text: "Accompagnement personnalisé", icon: <Users /> },
  { text: "Connaissance parfaite du Cameroun", icon: <MapPin /> },
  { text: "Service fiable et professionnel", icon: <ShieldCheck /> },
  { text: "Disponible pour particuliers & entreprises", icon: <CheckCircle2 /> },
  { text: "Réactivité rapide (WhatsApp / téléphone)", icon: <Clock /> },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState<PageId>("accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navLinks: Array<{ name: string; id: PageId }> = [
    { name: "Accueil", id: "accueil" },
    { name: "À propos", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handlePageChange = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  const renderAccueil = () => (
    <>
      <section className="relative flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/ai-hero-cameroun.png"
            alt="Paysage du Cameroun"
            className="h-full w-full scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-6 inline-block rounded-full border border-brand-secondary/30 bg-brand-secondary/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-secondary backdrop-blur-sm">
                ⭐ Guide de confiance au Cameroun
              </span>
              <h1 className="mb-6 font-display text-5xl font-extrabold leading-[1.1] text-white lg:text-7xl">
                Découvrez le Cameroun <span className="text-brand-secondary">autrement</span> avec SAPHIX SERVICE
              </h1>
              <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-200">
                Explorez les plus belles destinations, vivez des expériences uniques et profitez d’un accompagnement professionnel pour tous vos déplacements et événements à Douala et partout au Cameroun.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => handlePageChange("contact")}
                  className="flex items-center justify-center rounded-full bg-brand-secondary px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-brand-secondary/90"
                >
                  Réserver une expérience
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <a
                  href="https://wa.me/237659345567"
                  className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Contact WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-24">
        <div className="container mx-auto mb-16 px-6 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand-secondary">Excellence & Fiabilité</span>
          <h2 className="mb-6 font-display text-4xl font-bold text-brand-dark lg:text-5xl">Pourquoi choisir SAPHIX SERVICE ?</h2>
          <p className="mx-auto max-w-2xl text-lg italic text-gray-600">
            "Nous ne proposons pas juste des services… Nous créons des expériences mémorables."
          </p>
        </div>
        <div className="container mx-auto grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={reason.text}
              className="group flex items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-secondary/30 hover:shadow-lg"
            >
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary transition-colors group-hover:bg-brand-secondary group-hover:text-white">
                {reason.icon}
              </div>
              <span className="font-bold text-brand-dark">{reason.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 font-display text-4xl font-bold text-brand-dark lg:text-5xl">Nos Services</h2>
            <p className="text-lg text-gray-600">
              Des solutions complètes pour faciliter vos voyages et rendre vos événements inoubliables au Cameroun.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                key={service.id}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all hover:shadow-2xl"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-brand-dark">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{service.desc}</p>
                <button
                  onClick={() => handlePageChange("contact")}
                  className="flex items-center font-bold text-brand-secondary transition-transform hover:translate-x-2"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="overflow-hidden bg-brand-dark py-24 text-white">
        <div className="container mx-auto mb-16 px-6 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">Explorez le Cameroun</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            De l'animation urbaine de Douala aux plages sereines de Kribi, découvrez la diversité incroyable de l'Afrique en miniature.
          </p>
        </div>

        <div className="container mx-auto grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={dest.id}
              className="group relative h-[400px] cursor-pointer overflow-hidden rounded-3xl"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-3 flex gap-2">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-brand-secondary px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1 text-2xl font-bold">{dest.name}</h3>
                <p className="translate-y-2 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {dest.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-display text-4xl font-bold text-brand-dark lg:text-5xl">Comment ça fonctionne ?</h2>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 top-1/2 -z-10 hidden h-0.5 w-full bg-gray-100 lg:block" />
            {[
              { t: "Contact", d: "Vous nous contactez pour exprimer votre projet.", i: "01" },
              { t: "Analyse", d: "Nous analysons votre besoin spécifique.", i: "02" },
              { t: "Solution", d: "Nous proposons une solution sur-mesure.", i: "03" },
              { t: "Expérience", d: "Vous profitez sans aucun stress.", i: "04" },
            ].map((step) => (
              <div key={step.i} className="relative bg-white text-center lg:bg-transparent">
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-secondary bg-white text-xl font-black text-brand-secondary shadow-xl">
                  {step.i}
                </div>
                <h3 className="mb-4 text-xl font-bold text-brand-dark">{step.t}</h3>
                <p className="text-gray-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">Ils nous font confiance</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { q: "Service très professionnel, expérience incroyable à Kribi.", n: "Marie-Laure T." },
              { q: "Ponctuel, fiable et très organisé. Un vrai plaisir.", n: "Jean-Pierre E." },
              { q: "Je recommande SAPHIX SERVICE à 100%. Tout était parfait.", n: "Sarah B." },
            ].map((t, i) => (
              <div key={i} className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                <div className="mb-6 flex text-brand-secondary">{[...Array(5)].map((_, j) => <span key={j}>★</span>)}</div>
                <p className="mb-6 text-lg italic">“{t.q}”</p>
                <p className="font-bold">{t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-secondary py-24 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 font-display text-4xl font-black lg:text-5xl">Prêt à vivre une expérience unique ?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl opacity-90">
            Contactez-nous maintenant et laissez-nous organiser votre prochain déplacement ou séjour.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/237659345567"
              className="flex items-center justify-center rounded-full bg-brand-dark px-10 py-5 text-xl font-bold text-white"
            >
              <WhatsAppIcon className="mr-3 h-6 w-6" /> WhatsApp
            </a>
            <button
              onClick={() => {
                window.location.href = "tel:+237659345567";
              }}
              className="flex items-center justify-center rounded-full bg-white px-10 py-5 text-xl font-bold text-brand-secondary"
            >
              <Phone className="mr-3 h-6 w-6" /> Appeler maintenant
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <div className="pb-24 pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 font-display text-5xl font-extrabold text-brand-dark lg:text-6xl">À propos de SAPHIX SERVICE</h1>
          <div className="prose prose-xl space-y-6 text-gray-600">
            <p className="text-xl leading-relaxed">
              SAPHIX SERVICE est une entreprise basée à Douala, spécialisée dans le tourisme, l’accompagnement et les services personnalisés au Cameroun.
            </p>
            <div className="my-12 rounded-3xl border-l-8 border-brand-secondary bg-brand-secondary/10 p-8">
              <h3 className="mb-4 font-display text-2xl font-bold text-brand-dark">Notre mission :</h3>
              <p className="text-2xl font-medium italic text-brand-dark">
                👉 Offrir des expériences authentiques, fiables et professionnelles à chaque client.
              </p>
            </div>
            <p>
              Nous comprenons les défis liés aux déplacements et à l’organisation au Cameroun. C’est pourquoi nous avons créé une solution complète pour :
            </p>
            <ul className="grid list-none gap-4 p-0 md:grid-cols-3">
              {[
                "Faciliter vos voyages",
                "Faire découvrir les meilleures destinations",
                "Offrir un accompagnement de qualité",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <CheckCircle2 className="shrink-0 text-brand-secondary" />
                  <span className="font-bold text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-20 grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 font-display text-3xl font-bold text-brand-dark">Notre vision</h3>
                <p className="text-lg">Devenir une référence dans le tourisme et l’accompagnement au Cameroun.</p>
              </div>
              <div>
                <h3 className="mb-6 font-display text-3xl font-bold text-brand-dark">Nos valeurs</h3>
                <div className="grid grid-cols-1 gap-4">
                  {["Professionnalisme", "Confiance", "Qualité de service", "Satisfaction client"].map((val) => (
                    <div key={val} className="flex items-center gap-4 rounded-xl bg-brand-primary p-4 text-white">
                      <ShieldCheck />
                      <span className="font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="bg-gray-50 pb-24 pt-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="mb-8 font-display text-5xl font-extrabold tracking-tighter text-brand-dark lg:text-6xl">Contactez-nous</h1>
              <p className="mb-12 text-xl text-gray-600">
                Vous avez un projet, un déplacement ou une expérience à organiser ? Nous sommes disponibles pour vous accompagner.
              </p>

              <div className="space-y-8">
                {[
                  { icon: <MapPin />, label: "Localisation", val: "Douala, Cameroun" },
                  { icon: <Phone />, label: "Téléphone", val: "+237 659 345 567" },
                  { icon: <Mail />, label: "Email", val: "contact@saphixservice.com" },
                ].map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    key={item.label}
                    className="flex items-center gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                      <p className="text-lg font-bold">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 rounded-[40px] bg-brand-dark p-8 text-white">
                <h3 className="mb-6 flex items-center text-2xl font-bold">
                  <MessageCircle className="mr-3 text-brand-secondary" /> WhatsApp
                </h3>
                <p className="mb-8 leading-relaxed text-gray-400">
                  Pour une réponse instantanée, contactez-nous directement sur notre ligne WhatsApp officielle.
                </p>
                <a
                  href="https://wa.me/237659345567"
                  className="inline-flex items-center rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
                >
                  Discuter maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="rounded-[50px] border border-gray-100 bg-white p-10 shadow-2xl lg:p-14">
                <h2 className="mb-10 font-display text-3xl font-bold text-brand-dark">Envoyez un message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold text-gray-400">NOM COMPLET</label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50 p-5 outline-none transition-colors focus:border-brand-secondary"
                    />
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="ml-1 text-sm font-bold text-gray-400">TÉLÉPHONE</label>
                      <input
                        type="tel"
                        className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50 p-5 outline-none transition-colors focus:border-brand-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="ml-1 text-sm font-bold text-gray-400">EMAIL</label>
                      <input
                        type="email"
                        className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50 p-5 outline-none transition-colors focus:border-brand-secondary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold text-gray-400">VOTRE DEMANDE</label>
                    <textarea
                      rows={5}
                      className="w-full resize-none rounded-2xl border-2 border-gray-100 bg-gray-50 p-5 outline-none transition-colors focus:border-brand-secondary"
                    />
                  </div>
                  <button className="group flex w-full items-center justify-center rounded-2xl bg-brand-primary py-6 text-xl font-black text-white shadow-xl transition-colors hover:bg-brand-dark">
                    Envoyer <Send className="ml-3 h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>

              <div className="mt-12 h-64 overflow-hidden rounded-[40px] shadow-xl">
                <img src="/images/ai-yaounde.png" alt="Carte stylisée Cameroun" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-brand-secondary selection:text-white">
      <nav
        className={`fixed z-50 w-full transition-all duration-500 ${scrolled || currentPage !== "accueil" ? "bg-white py-2 shadow-xl" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <button onClick={() => handlePageChange("accueil")} className="group flex items-center space-x-2">
            <img
              src="/images/logo.jpg"
              alt="Logo SAPHIX"
              className="h-10 w-10 rounded-xl border border-white/20 object-cover shadow-lg transition-transform group-hover:rotate-6"
            />
            <span
              className={`font-display text-xl font-bold tracking-tighter ${scrolled || currentPage !== "accueil" ? "text-brand-dark" : "text-white"}`}
            >
              SAPHIX SERVICE
            </span>
          </button>

          <div className="hidden items-center space-x-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handlePageChange(link.id)}
                className={`group relative overflow-hidden font-bold transition-all ${scrolled || currentPage !== "accueil" ? "text-brand-dark" : "text-white"}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transform transition-transform ${currentPage === link.id ? "scale-x-100 bg-brand-secondary" : "scale-x-0 bg-brand-secondary opacity-50 group-hover:scale-x-100"}`}
                />
              </button>
            ))}
            <a
              href="https://wa.me/237659345567"
              className={`flex items-center rounded-full px-8 py-3 font-black shadow-lg transition-all hover:scale-105 ${scrolled || currentPage !== "accueil" ? "bg-brand-secondary text-white" : "bg-white text-brand-dark hover:bg-brand-secondary hover:text-white"}`}
            >
              <WhatsAppIcon className="mr-3 h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <button
            className={`rounded-xl p-3 lg:hidden ${scrolled || currentPage !== "accueil" ? "bg-gray-100 text-brand-dark" : "bg-white/10 text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] flex flex-col justify-center bg-brand-dark p-12 text-white lg:hidden"
          >
            <button
              className="absolute right-8 top-8 rounded-full bg-white/10 p-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={`group flex items-center justify-between text-left font-display text-5xl font-black ${currentPage === link.id ? "text-brand-secondary" : ""}`}
                  onClick={() => handlePageChange(link.id)}
                >
                  {link.name}
                  <ArrowRight size={40} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
              <div className="space-y-6 pt-10">
                <a
                  href="https://wa.me/237659345567"
                  className="flex w-full items-center justify-center rounded-3xl bg-[#25D366] py-6 text-2xl font-black text-white"
                >
                  <WhatsAppIcon className="mr-4 h-8 w-8" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {currentPage === "accueil" && renderAccueil()}
            {currentPage === "about" && renderAbout()}
            {currentPage === "contact" && renderContact()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5 bg-brand-dark py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-20 grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <img src="/images/logo.jpg" alt="Logo SAPHIX" className="h-12 w-12 rounded-2xl border border-white/15 object-cover shadow-xl" />
                <span className="font-display text-2xl font-black tracking-tight">SAPHIX SERVICE</span>
              </div>
              <p className="text-lg leading-relaxed text-gray-400">
                Le partenaire de choix pour explorer le Cameroun et réussir vos événements. Authenticité et professionnalisme garantis.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all hover:-translate-y-2 hover:bg-brand-secondary"><Instagram /></a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all hover:-translate-y-2 hover:bg-brand-secondary"><Facebook /></a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all hover:-translate-y-2 hover:bg-brand-secondary"><Twitter /></a>
              </div>
            </div>

            <div>
              <h4 className="mb-10 flex items-center font-display text-xl font-black text-white">
                Navigation <span className="ml-3 block h-1 w-10 bg-brand-secondary" />
              </h4>
              <ul className="space-y-5 text-lg text-gray-400">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <button onClick={() => handlePageChange(l.id)} className="transition-all hover:translate-x-2 hover:text-brand-secondary">
                      {l.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-10 flex items-center font-display text-xl font-black text-white">
                Services <span className="ml-3 block h-1 w-10 bg-brand-secondary" />
              </h4>
              <ul className="space-y-5 text-lg text-gray-400">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button onClick={() => handlePageChange("accueil")} className="transition-all hover:text-brand-secondary">
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-10 flex items-center font-display text-xl font-black text-white">
                Contact <span className="ml-3 block h-1 w-10 bg-brand-secondary" />
              </h4>
              <ul className="space-y-6 text-lg text-gray-400">
                <li className="flex items-start gap-4"><MapPin className="shrink-0 text-brand-secondary" /> Douala, Cameroun</li>
                <li className="flex items-start gap-4"><Phone className="shrink-0 text-brand-secondary" /> +237 659 345 567</li>
                <li className="flex items-start gap-4"><Mail className="shrink-0 text-brand-secondary" /> contact@saphix.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 text-center text-xs font-bold tracking-wider text-gray-500">
            <p className="uppercase">© {new Date().getFullYear()} SAPHIX SERVICE. TOUS DROITS RÉSERVÉS.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/237659345567"
        className="group fixed bottom-10 right-10 z-50 flex items-center overflow-hidden rounded-[2.5rem] bg-[#25D366] p-6 text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <WhatsAppIcon className="h-8 w-8" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-lg font-black transition-all duration-700 group-hover:ml-4 group-hover:max-w-xs">
          Besoin d'aide ?
        </span>
      </a>
    </div>
  );
}
