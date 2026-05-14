"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const whatsappUrl = "https://wa.me/972549509195"; // TODO: Replace phone number when the final WhatsApp number changes.
const instagramUrl = "https://www.instagram.com/harelamir1/";
const euforiaInstagramUrl = "https://www.instagram.com/euforia_offical/";
const facebookUrl = "https://www.facebook.com/harel.amir.9";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Words", href: "#words" },
  { label: "Contact", href: "#contact" }
];

const heroNavItems = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Words", href: "#words" },
  { label: "Contact", href: "#contact" }
];

const socialLinks = [
  { label: "Instagram Harel", href: instagramUrl },
  { label: "Euforia", href: euforiaInstagramUrl },
  { label: "Facebook", href: facebookUrl }
];

const heroSocialLinks = [
  { label: "Facebook", href: facebookUrl, Icon: FaFacebookF },
  { label: "Euforia Instagram", href: euforiaInstagramUrl, Icon: FaInstagram },
  { label: "WhatsApp", href: whatsappUrl, Icon: FaWhatsapp },
  { label: "Harel Instagram", href: instagramUrl, Icon: FaInstagram },
];

const galleryImages = [
  {
    src: "/images/harel-wedding.jpg",
    alt: "Harel Amir with wedding clients",
    aspect: "aspect-[4/5]",
    className: "md:row-span-2"
  },
  {
    src: "/images/private-event-setup.jpg",
    alt: "Private event setup with tables and sound",
    aspect: "aspect-[4/3]",
    className: ""
  },
  {
    src: "/images/euforia-stage-wide.jpg",
    alt: "Wide Euforia stage production",
    aspect: "aspect-[16/10]",
    className: "md:col-span-2"
  },
  {
    src: "/images/euforia-beach-aerial.jpg",
    alt: "Aerial beach production",
    aspect: "aspect-[4/3]",
    className: ""
  },
  {
    src: "/images/euforia-crowd-front.jpg",
    alt: "Euforia crowd energy",
    aspect: "aspect-[4/5]",
    className: "md:row-span-2"
  },
  {
    src: "/images/euforia-beach-day.jpg",
    alt: "Beach production during the day",
    aspect: "aspect-[4/3]",
    className: ""
  },
  {
    src: "/images/euforia-crowd-day.jpg",
    alt: "Daytime crowd at international production",
    aspect: "aspect-[4/3]",
    className: ""
  },
  {
    src: "/images/euforia-crowd-night.jpg",
    alt: "Night crowd at electronic music event",
    aspect: "aspect-[4/3]",
    className: ""
  },
  {
    src: "/images/euforia-lights.jpg",
    alt: "Stage lights at event production",
    aspect: "aspect-[4/3]",
    className: ""
  },
  {
    src: "/images/euforia-dj-crowd.jpg",
    alt: "DJ and crowd at electronic music event",
    aspect: "aspect-[16/10]",
    className: "md:col-span-2"
  }
];

const testimonials = [
  {
    names: "דנה ושחר",
    date: "24.07",
    text: `@Harel Amir הראל יא מלך! היה פשוט חלום אתמול. תודה על הכל!! אני יודע שאני לא חתן קל👻
היה מדהים ואנשים התלהבו בטירוף.
סחתיין עליך!!

אני מצטרפת!!!!! אנחנו עוד מתאוששים כאן ומנסים לארגן את המילים, אבל רצינו להגיד תודה מכל הלב, היה לנו אירוע באמת חלומי ומקבלים כל כך הרבה מחמאות. תודה על הכל ❤️🙏`,
    image: "/images/testimonials/testimonial-shachar-dana-24-07.jpg"
  },
  {
    names: "גאיה ואיתי",
    date: "13.08",
    text: `וואוו ואו הראל איזה כיף היה לנו !!!!
אנחנו עוד מתאוששים
תודה ענקית על כל ההשקעה שלך ושל כל הצוות , עפנו גם על הברמנים

היה מטורף וממש שמחים שאתה היית המנהל אירוע שלנו 🪬❤️`,
    image: "/images/testimonials/testimonial-gaia-13-08.jpg"
  },
  {
    names: "צליל ודניאל",
    date: "09.07",
    text: `היה לנו מדהים אחי
צריך רגע לעכל את מה שחווינו

אין לנו מילים כרגע חוץ מי תודה ענקית
מעומק הלב על הכל הכל

הראלללללללללללל מה זה מה זהההה
איך היה לי כייף אתמול כמה דאגת לנו
לכל פרט ופרט מההשיגעונות שלי
זיכרווווון בר , כל כך הרגעת אותי והיית שם
לכל דבר תודה תודה תודה תודה ועוד
אלף תודה !!!!

חחחח ברורררר
איזה כייף היית מושלם ברמות !!! אתה
פשוט מללללללך מלךךךךך
👑👑👑👑👑👑

ושוב באלי להגיד לך שאתה מלךךךך ותודה
על הכל 💗💗💗💗`,
    image: "/images/testimonials/testimonial-tzlil-09-07.jpg"
  },
  {
    names: "רחלי ורותם",
    date: "17.12",
    text: `הראל היקר!!
היה מדהים תודה רבה ❤️❤️
אין עליך , היה קצב מושלם

מצטרף, היית שם בשבילי שהייתי צריך
אותך. תודה. יש לך חלק גדול בהצלחה
של האירוע. אוהבים ❤️❤️`,
    image: "/images/testimonials/testimonial-racheli-rotem-17-12.jpg"
  },
  {
    names: "אן וגור",
    date: "14.12",
    text: `אחרי שקצת התאוששנו, רצינו להגיד תודה ענקית!!!
האירוע תקתק ולהרגשת האורחים ולנו לא היו בלתמים בכלל והכל היה מושלם מושלם מושלם 🎉🎉
ממש מעריכים, תודה רבה על על הניהול המושלם של האירוע ❤️ היה מושלם מעל ומעבר ❤️`,
    image: "/images/testimonials/testimonial-or-14-12.jpg"
  },
  {
    names: "עדי ומשה",
    date: "09.12",
    text: `הראלוש, אחרי שלקח לנו כמה ימים
להתאושש מהטירוף שהיה רצינו לומר לך
תודה רבה !
הכל התנהל מעולה והיה מטורף
נהננו בטירוף וקיבלנו הרבה מחמאות
אין עלייך ❤️❤️🙌🏻🙌🏻`,
    image: "/images/testimonials/testimonial-adi-09-12.jpg"
  },
  {
    names: "עמית ועידו",
    date: "27.11",
    text: `הראל כפרההה עלינו!! ואו תשמע אתה
תותח ברמות!!! נתחיל בזה שצדקת בכל
מה שאמרת ואני שמחה שידעת איפה
להקשיב לנו ואיפה לעשות את השיקול
דעת שלך (שעת החופה ופטריות חימום 😅) תיקתקת את החתונה הזו ברמה הכי
מקצועית שיש!! אתה חד משמעית מעל
הסטנדרטים שציפינו! תודה רבה רבה על
הכל ❤️❤️❤️❤️`,
    image: "/images/testimonials/testimonial-amit-27-11.jpg"
  },
  {
    names: "שקד ואלעד",
    date: "19.11",
    text: `אתה בעצמך!
עוד לא אמרנו לך ,
תודה רבה על שהיית איתנו, שדאגת לנו,
שזרמת איתנו, היית מלך!
כל דבר שביקשנו או רצינו היית איתנו, עם
חיוך , מלא סבלנות, הכלה ואווירה טובה.
אז תודה רבה 🙏🏻
אוהבים מלאא 🤍🤍`,
    image: "/images/testimonials/testimonial-shaked-19-11.jpg"
  },
  {
    names: "מיכל ורועי",
    date: "29.10",
    text: `הראל התותח!
תודה רבה על אירוע מדהים ❤️ הכל רץ
ותיקתק כמו שצריך , כל דבר שהיינו
צריכים עזרת לנו וייעצת לנו.
הרגשנו שאנחנו בידיים הכי טובות שיש
והכי מקצועיות.
היה אירוע מדהים ועד עכשיו אנשים עפים
על השירות, האוכל והמקום עצמו!
תודה רבה שהפכת את היום המיוחד
שלנו למוצלח❤️❤️❤️
שמחים שהיית איתנו ביום הזה! ולאורך כל
הדרך שעזרת לנו בכל דבר שביקשנו.`,
    image: "/images/testimonials/testimonial-michal-29-10.jpg"
  },
  {
    names: "פז ועידן",
    date: "27.10",
    text: `הראלללל היה מטורף איזה אירוע הכל
היה מתוקתק עד הפרט האחרון האולם
היה מהמם לא יכולנו לבחור באולם יותר
טוב לחתונה שלנו שלא לדבר עלייך
שהיית מדהים והכלת את כל הלחץ שלי
בחתונה וטיפלת בכל הבלתמים באירוע
בלי לערב אותנו ובלי שהרגשנו אלוףףףף
❤️❤️`,
    image: "/images/testimonials/testimonial-paz-27-10.jpg"
  },
  {
    names: "ספיר ועמית",
    date: "30.07",
    text: `הראלוססססס איך מסכמים את זה
אה?!
תודה על הכל יא מלך! אין עלייך ואני
מאושרת שקיבלנו אותך! הקור רוח והכיף
של לעבוד איתך לאורך הדרך היה מושלם
❤️
באמת תודה תודה תודה על אירוע
מושלם 🙏🏻🙏🏻🙏🏻

היה טירוף שיחקת אותה, הייתה מעטפת
מטורפת ולא התעסקנו בכלום חוץ
מלהינות`,
    image: "/images/testimonials/testimonial-sapir-amit-30-07.jpg"
  }
];

function FadeIn({
  children,
  className = "",
  delay = 0,
  distance = 34
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-ink via-ink/72 to-transparent">
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between md:h-28">
        <a href="#hero" className="group min-w-0" aria-label="Harel Amir home">
          <span className="block font-display text-[1.5rem] font-black uppercase leading-none tracking-[0.18em] text-white md:text-[2.35rem] lg:text-[2.75rem]">
            Harel Amir
          </span>
          <span className="mt-2 block text-[0.58rem] font-bold uppercase tracking-[0.32em] text-bone/78 md:text-[0.72rem] md:tracking-[0.38em]">
            Event Production & Management
          </span>
        </a>

        <nav className="hidden items-center gap-12 lg:gap-20 md:flex" aria-label="Primary navigation">
          {heroNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[1.5rem] font-black uppercase tracking-[0.08em] text-white transition hover:text-gold lg:text-[1.95rem]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <details className="group md:hidden">
          <summary className="relative z-50 flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/12 bg-white/[0.03] text-bone backdrop-blur [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <span className="relative h-4 w-5">
              <span className="absolute left-0 top-0 h-px w-5 bg-bone transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="absolute left-0 top-2 h-px w-5 bg-bone transition group-open:opacity-0" />
              <span className="absolute bottom-0 left-0 h-px w-5 bg-bone transition group-open:-translate-y-[7px] group-open:-rotate-45" />
            </span>
          </summary>

          <div
            className="invisible absolute left-0 top-0 z-40 h-[100svh] w-screen translate-x-full bg-ink px-5 pb-8 pt-28 opacity-0 transition duration-300 group-open:visible group-open:translate-x-0 group-open:opacity-100"
          >
            <nav className="flex h-full flex-col justify-between" aria-label="Mobile navigation">
              <div>
                <div className="space-y-5">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                      className="block border-b border-white/10 pb-5 font-display text-[2.65rem] font-semibold leading-none text-bone"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-8 grid gap-3 text-xs font-bold uppercase tracking-[0.16em] text-mist">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                      className="transition hover:text-gold"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href={whatsappUrl}
                onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                className="inline-flex w-full items-center justify-center bg-bone px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition active:scale-[0.985]"
                target="_blank"
                rel="noreferrer"
              >
                Talk to Harel on WhatsApp
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="snap-section relative isolate overflow-hidden">
      <Header />
      {/* TODO: Replace hero images in /public/images when the final campaign visuals are ready. */}
      <Image
        src="/images/euforia-stage-mobile.jpg"
        alt="Euforia stage production on mobile"
        fill
        priority
        sizes="(min-width: 768px) 0px, 100vw"
        className="z-0 object-cover object-center scale-[1.03] md:hidden"
      />
      <Image
        src="/images/euforia-hero-stage.jpg"
        alt="Euforia international stage production"
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0px"
        className="z-0 hidden object-cover object-center scale-[1.03] md:block"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        initial={false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-black via-black/76 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black via-black/58 to-transparent" />
        <div className="absolute inset-0 bg-black/18 md:bg-black/10" />
      </motion.div>

      <div className="section-shell pointer-events-none relative z-10 flex min-h-screen items-end justify-center pb-16 pt-36 md:pb-20 md:pt-36">
        <div className="pointer-events-auto flex w-full flex-col items-center">
          <nav
            className="mx-auto flex max-w-[24rem] items-center justify-center gap-x-8 md:max-w-[36rem] md:gap-x-12 lg:gap-x-14"
            aria-label="Hero social links"
          >
            {heroSocialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.65)] transition duration-300 hover:scale-110 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                <Icon className="h-11 w-11 md:h-16 md:w-16" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <a
            href="#about"
            className="mt-8 flex flex-col items-center gap-3 text-center font-display text-[0.92rem] font-black uppercase tracking-[0.12em] text-white transition hover:text-gold md:mt-9 md:text-[1.45rem]"
          >
            <span>Scroll Down</span>
            <span className="relative h-12 w-px overflow-hidden bg-white/35 md:h-16">
              <span className="scroll-pulse absolute left-0 top-0 h-5 w-px bg-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <FadeIn className="mb-12 md:mb-16">
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="text-balance max-w-3xl font-display text-[2.75rem] font-semibold leading-[0.92] text-bone md:text-7xl">
        {title}
      </h2>
      {text ? <p className="mt-7 max-w-2xl text-base leading-8 text-mist md:text-lg">{text}</p> : null}
    </FadeIn>
  );
}

function About() {
  return (
    <section id="about" className="snap-section portfolio-section grid overflow-hidden bg-ink py-14 md:py-0">
      <div className="section-shell grid min-h-screen gap-8 pt-6 md:grid-cols-[1fr_0.92fr] md:items-center md:gap-14 md:pt-0">
        <FadeIn className="order-2 md:order-1">
          <p className="eyebrow mb-5">Harel Amir</p>
          <p className="mb-8 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-mist">
            Event Production & Management
          </p>
          <h2 className="text-balance max-w-2xl font-display text-[3rem] font-black uppercase leading-[0.9] text-bone md:text-7xl">
            Calm control.
            <span className="block">High energy.</span>
          </h2>
          <div className="mt-8 grid max-w-2xl gap-5">
            <p className="text-lg leading-8 text-bone/86 md:text-2xl md:leading-10">
              Harel Amir is a Tel Aviv based event producer and event manager, creating private
              events, weddings, nightlife experiences and international music productions with a
              sharp eye for timing, atmosphere and detail.
            </p>
            <p className="border-l border-gold/50 pl-5 text-base leading-8 text-mist md:text-lg">
              From supplier coordination to guest flow, sound, service and the small details - the
              event stays calm, precise and alive.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.04} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[25rem] overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.035] shadow-glow md:max-w-none">
            <div className="relative aspect-[4/5] md:h-[78svh] md:aspect-auto">
              <Image
                src="/images/harel-portrait-main.jpg"
                alt="Harel Amir portrait"
                fill
                sizes="(min-width: 768px) 44vw, 100vw"
                className="object-cover object-[38%_45%] saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/58 via-transparent to-transparent" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Gallery({
  onOpen
}: {
  onOpen: (image: (typeof galleryImages)[number]) => void;
}) {
  return (
    <section id="gallery" className="snap-section portfolio-section grid overflow-hidden bg-bone py-14 text-ink md:py-0">
      <div className="section-shell grid min-h-screen content-center gap-8">
        <FadeIn className="md:flex md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-brass">Gallery</p>
            <h2 className="text-balance max-w-3xl font-display text-[2.75rem] font-black uppercase leading-[0.92] md:text-7xl">
              Visual proof.
            </h2>
          </div>
          <p className="mt-5 max-w-md text-sm font-semibold uppercase leading-6 tracking-[0.12em] text-ink/55 md:mt-0">
            Private events, open-air productions, nightlife and Euforia moments.
          </p>
        </FadeIn>
        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13vh]">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.018} className={image.className}>
              <button
                type="button"
                onClick={() => onOpen(image)}
                className="group media-frame block aspect-square h-full w-full cursor-pointer bg-ink text-left md:aspect-[4/3] lg:aspect-auto"
                aria-label={`Open ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 33vw"
                  className="object-cover saturate-[0.86] transition duration-1000 ease-out group-hover:scale-105 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-ink/0 transition duration-700 group-hover:bg-ink/20" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientWords({
  onOpen
}: {
  onOpen: (testimonial: (typeof testimonials)[number]) => void;
}) {
  return (
    <section id="words" className="snap-section portfolio-section testimonial-section grid overflow-hidden bg-bone py-14 text-ink md:py-0">
      <div className="section-shell grid min-h-screen content-center gap-8">
        <FadeIn className="md:flex md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-brass">Thank You Notes</p>
            <h2 className="text-balance max-w-3xl font-display text-[2.65rem] font-black uppercase leading-[0.92] text-ink md:text-7xl">
              Words from the events
            </h2>
          </div>
          <p className="mt-5 max-w-sm text-base leading-7 text-ink/62 md:mt-0">
            Real messages from couples and clients after the event.
          </p>
        </FadeIn>
        <div className="testimonial-rail flex snap-x gap-3 overflow-x-auto pb-4 pt-2 md:gap-4" aria-label="Client thank-you notes" dir="rtl">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={`${testimonial.names}-${testimonial.date}`}
              delay={(index % 3) * 0.04}
              className="min-w-[74vw] snap-start sm:min-w-[20rem] md:min-w-[calc((100%_-_2rem)/3)] lg:min-w-[calc((100%_-_3rem)/4)]"
            >
              <article className="testimonial-card flex min-h-[16.5rem] flex-col border border-ink/18 bg-[#fbf7ee] px-5 pb-5 pt-4 shadow-[0_18px_48px_rgba(5,5,5,0.08)] md:min-h-[18rem] md:px-6 md:pb-6">
                <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-brass/35 text-sm text-brass">
                  ♥
                </div>
                <div className="text-center" dir="rtl">
                  <h3 className="font-display text-[1.45rem] font-black leading-none text-ink">{testimonial.names}</h3>
                  <p className="mt-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brass">{testimonial.date}</p>
                </div>
                <p className="testimonial-preview mt-5 whitespace-pre-line text-center text-[1rem] leading-7 text-ink/78 md:text-[1.04rem] md:leading-8" dir="rtl">
                  {`״${testimonial.text}״`}
                </p>
                <button
                  type="button"
                  onClick={() => onOpen(testimonial)}
                  className="mt-auto pt-5 text-center text-sm font-bold tracking-[0.04em] text-brass underline-offset-4 transition hover:text-ink hover:underline"
                >
                  קרא עוד
                </button>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="snap-section portfolio-section relative grid overflow-hidden py-14 md:py-0">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(201,168,103,0.16),transparent_34rem)]" />
      <div className="section-shell flex min-h-screen flex-col justify-center">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="Contact"
            title="Let's create your next event."
            text="For private events, weddings, after parties and international productions - send a message and let's build the right experience."
          />
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-gold/55 bg-white/[0.025] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-bone backdrop-blur transition hover:bg-gold hover:text-ink active:scale-[0.985]"
            >
              Talk on WhatsApp
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-white/14 px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-bone/82 transition hover:border-gold/55 hover:text-gold active:scale-[0.985]"
            >
              Instagram
            </a>
            <a
              href={euforiaInstagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-white/14 px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-bone/82 transition hover:border-gold/55 hover:text-gold active:scale-[0.985]"
            >
              Euforia
            </a>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 md:mt-20">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="font-display text-4xl font-semibold text-bone">Harel Amir</p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-mist">
              Event Production & Management
            </p>
            <p className="mt-2 text-mist">Tel Aviv</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold uppercase tracking-[0.14em] text-bone/70 md:justify-end">
            <a className="transition hover:text-gold" href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="transition hover:text-gold" href={euforiaInstagramUrl} target="_blank" rel="noreferrer">
              Euforia
            </a>
            <a className="transition hover:text-gold" href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="transition hover:text-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

function GalleryLightbox({
  image,
  onClose
}: {
  image: (typeof galleryImages)[number] | null;
  onClose: () => void;
}) {
  if (!image) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/92 p-4" role="dialog" aria-modal="true">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 border border-white/20 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-gold hover:text-gold"
      >
        Close
      </button>
      <div className="relative h-[82svh] w-full max-w-6xl overflow-hidden">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-contain" />
      </div>
    </div>
  );
}

function TestimonialModal({
  testimonial,
  onClose
}: {
  testimonial: (typeof testimonials)[number] | null;
  onClose: () => void;
}) {
  if (!testimonial) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/82 px-4 py-5 md:p-6" role="dialog" aria-modal="true">
      <div className="mx-auto flex min-h-[100svh] max-w-2xl items-center py-12">
        <article className="relative w-full border border-ink/12 bg-bone px-6 py-8 text-center text-ink shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:px-10 md:py-10" dir="rtl">
          <button
            type="button"
            onClick={onClose}
            className="absolute left-4 top-4 border border-ink/18 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink/72 transition hover:border-brass hover:text-brass"
          >
            Close
          </button>
          <div className="mx-auto mb-5 mt-7 flex h-9 w-9 items-center justify-center rounded-full border border-brass/35 text-sm text-brass md:mt-0">
            ♥
          </div>
          <h3 className="font-display text-3xl font-black leading-none text-ink">{testimonial.names}</h3>
          <p className="mt-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-brass">
            {testimonial.date}
          </p>
          <p className="mt-8 whitespace-pre-line text-right text-lg leading-9 text-ink/86 md:text-xl">
            {`״${testimonial.text}״`}
          </p>
        </article>
      </div>
    </div>
  );
}

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/76 p-3 backdrop-blur-2xl md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center justify-center gap-3 bg-bone px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink shadow-glow transition active:scale-[0.985]"
      >
        <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
        Talk to Harel on WhatsApp
      </a>
    </div>
  );
}

export default function Home() {
  const [activeGalleryImage, setActiveGalleryImage] = useState<(typeof galleryImages)[number] | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<(typeof testimonials)[number] | null>(null);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <main className="snap-main">
        <Hero />
        <About />
        <Gallery onOpen={setActiveGalleryImage} />
        <ClientWords onOpen={setActiveTestimonial} />
        <Contact />
      </main>
      <GalleryLightbox image={activeGalleryImage} onClose={() => setActiveGalleryImage(null)} />
      <TestimonialModal testimonial={activeTestimonial} onClose={() => setActiveTestimonial(null)} />
      <StickyMobileCta />
    </>
  );
}
