"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
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
  { label: "אודות", href: "#about" },
  { label: "גלריה", href: "#gallery" },
  { label: "תודות", href: "#words" },
  { label: "יצירת קשר", href: "#contact" }
];

const heroNavItems = [
  { label: "אודות", href: "#about" },
  { label: "גלריה", href: "#gallery" },
  { label: "תודות", href: "#words" },
  { label: "יצירת קשר", href: "#contact" }
];

const socialLinks = [
  { label: "אינסטגרם הראל", href: instagramUrl },
  { label: "אופוריה", href: euforiaInstagramUrl },
  { label: "פייסבוק", href: facebookUrl }
];

const heroSocialLinks = [
  { label: "פייסבוק", href: facebookUrl, Icon: FaFacebookF },
  { label: "אינסטגרם אופוריה", href: euforiaInstagramUrl, Icon: FaInstagram },
  { label: "וואטסאפ", href: whatsappUrl, Icon: FaWhatsapp },
  { label: "אינסטגרם הראל", href: instagramUrl, Icon: FaInstagram },
];

type GalleryImageType = "people" | "production";

type GalleryImage = {
  src: string;
  alt: string;
  aspect: string;
  className: string;
  type: GalleryImageType;
};

const GALLERY_DISPLAY_COUNT = 12;
const GALLERY_PAIR_COUNT = GALLERY_DISPLAY_COUNT / 2;

const galleryImages: GalleryImage[] = [
  {
    src: "/images/harel-wedding.jpg",
    alt: "הראל אמיר עם לקוחות בחתונה",
    aspect: "aspect-[4/5]",
    className: "md:row-span-2",
    type: "people"
  },
  {
    src: "/images/harel-with-couple-wedding-hall.jpg",
    alt: "הראל אמיר עם זוג ביום החתונה",
    aspect: "aspect-[4/5]",
    className: "",
    type: "people"
  },
  {
    src: "/images/harel-couple-venue-night.jpg",
    alt: "הראל אמיר עם זוג במתחם אירועים לילי",
    aspect: "aspect-[4/5]",
    className: "",
    type: "people"
  },
  {
    src: "/images/private-event-setup.jpg",
    alt: "עיצוב אירוע פרטי עם שולחנות וסאונד",
    aspect: "aspect-[4/3]",
    className: "",
    type: "production"
  },
  {
    src: "/images/wedding-floral-canopy.jpg",
    alt: "חופת חתונה לבנה עם פרחים",
    aspect: "aspect-[4/3]",
    className: "",
    type: "production"
  },
  {
    src: "/images/harel-couple-white-venue.jpg",
    alt: "הראל אמיר עם זוג בתוך מתחם האירוע",
    aspect: "aspect-[4/5]",
    className: "",
    type: "people"
  },
  {
    src: "/images/euforia-stage-wide.jpg",
    alt: "הפקת במה רחבה של אופוריה",
    aspect: "aspect-[16/10]",
    className: "md:col-span-2",
    type: "production"
  },
  {
    src: "/images/harel-beach-sign.jpg",
    alt: "הראל אמיר בכניסה לאירוע חוף",
    aspect: "aspect-[4/5]",
    className: "",
    type: "people"
  },
  {
    src: "/images/harel-party-couple.jpg",
    alt: "הראל אמיר עם זוג במהלך המסיבה",
    aspect: "aspect-[4/5]",
    className: "",
    type: "people"
  },
  {
    src: "/images/euforia-beach-aerial.jpg",
    alt: "הפקת חוף ממבט אווירי",
    aspect: "aspect-[4/3]",
    className: "",
    type: "production"
  },
  {
    src: "/images/euforia-beach-day.jpg",
    alt: "הפקת חוף בשעות היום",
    aspect: "aspect-[4/3]",
    className: "",
    type: "production"
  },
  {
    src: "/images/euforia-stage-canopy-night.jpg",
    alt: "במה לילית עם קירוי ותאורה",
    aspect: "aspect-[16/10]",
    className: "md:col-span-2",
    type: "production"
  },
  {
    src: "/images/euforia-lights.jpg",
    alt: "תאורת במה בהפקת אירוע",
    aspect: "aspect-[4/3]",
    className: "",
    type: "production"
  },
  {
    src: "/images/euforia-dj-crowd.jpg",
    alt: "די-ג'יי וקהל באירוע מוזיקה אלקטרונית",
    aspect: "aspect-[16/10]",
    className: "md:col-span-2",
    type: "production"
  },
  {
    src: "/images/harel-network.jpg",
    alt: "הראל אמיר עם אורחי אירוע",
    aspect: "aspect-[4/5]",
    className: "",
    type: "people"
  },
  {
    src: "/images/euforia-crowd-front.jpg",
    alt: "אנרגיית קהל באופוריה",
    aspect: "aspect-[4/5]",
    className: "md:row-span-2",
    type: "production"
  }
];

function shuffleArray<T>(items: T[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function pickAlternatingGalleryImages(images: GalleryImage[], randomize = false) {
  const orderedImages = randomize ? shuffleArray(images) : images;
  const peopleImages = orderedImages.filter((image) => image.type === "people");
  const productionImages = orderedImages.filter((image) => image.type === "production");
  const selected: GalleryImage[] = [];
  const usedSources = new Set<string>();

  const addImage = (image: GalleryImage | undefined) => {
    if (!image || usedSources.has(image.src) || selected.length >= GALLERY_DISPLAY_COUNT) {
      return;
    }

    usedSources.add(image.src);
    selected.push(image);
  };

  const fallbackImage = () => orderedImages.find((image) => !usedSources.has(image.src));

  for (let index = 0; index < GALLERY_PAIR_COUNT; index += 1) {
    addImage(peopleImages[index] ?? fallbackImage());
    addImage(productionImages[index] ?? fallbackImage());
  }

  return selected;
}

const testimonials = [
  {
    names: "דנה ושחר",
    date: "24.07",
    text: `הראל יא מלך! היה פשוט חלום אתמול. תודה על הכל!! אני יודע שאני לא חתן קל👻
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
        <a href="#hero" className="group min-w-0 text-right" aria-label="דף הבית של Harel Amir">
          <span className="block font-display text-[1.5rem] font-black uppercase leading-none tracking-[0.18em] text-white md:text-[2.35rem] lg:text-[2.75rem]" dir="ltr">
            Harel Amir
          </span>
          <span className="mt-2 block text-[0.78rem] font-bold tracking-normal text-bone/78 md:text-[0.96rem]">
            הפקה וניהול אירועים
          </span>
        </a>

        <nav className="hidden items-center gap-12 lg:gap-20 md:flex" aria-label="ניווט ראשי">
          {heroNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[1.5rem] font-black tracking-normal text-white transition hover:text-gold lg:text-[1.95rem]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <details className="group md:hidden">
          <summary className="relative z-50 flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/12 bg-white/[0.03] text-bone backdrop-blur [&::-webkit-details-marker]:hidden">
            <span className="sr-only">פתח תפריט</span>
            <span className="relative h-4 w-5">
              <span className="absolute left-0 top-0 h-px w-5 bg-bone transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="absolute left-0 top-2 h-px w-5 bg-bone transition group-open:opacity-0" />
              <span className="absolute bottom-0 left-0 h-px w-5 bg-bone transition group-open:-translate-y-[7px] group-open:-rotate-45" />
            </span>
          </summary>

          <div
            className="invisible absolute left-0 top-0 z-40 h-[100svh] w-screen translate-x-full bg-ink px-5 pb-8 pt-28 opacity-0 transition duration-300 group-open:visible group-open:translate-x-0 group-open:opacity-100"
          >
            <nav className="flex h-full flex-col justify-between" aria-label="ניווט מובייל">
              <div>
                <div className="space-y-5">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                      className="block border-b border-white/10 pb-5 text-right font-display text-[2.65rem] font-semibold leading-none text-bone"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-8 grid gap-3 text-right text-sm font-bold tracking-normal text-mist">
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
                className="inline-flex w-full items-center justify-center bg-bone px-6 py-4 text-sm font-bold tracking-normal text-ink transition active:scale-[0.985]"
                target="_blank"
                rel="noreferrer"
              >
                דברו עם הראל בוואטסאפ
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
        alt="הפקת במה של אופוריה במובייל"
        fill
        priority
        sizes="(min-width: 768px) 0px, 100vw"
        className="z-0 object-cover object-center scale-[1.03] md:hidden"
      />
      <Image
        src="/images/euforia-hero-stage.jpg"
        alt="הפקת במה בינלאומית של אופוריה"
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
            aria-label="קישורים חברתיים"
            dir="ltr"
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
            className="mt-8 flex flex-col items-center gap-3 text-center font-display text-[0.92rem] font-black tracking-normal text-white transition hover:text-gold md:mt-9 md:text-[1.45rem]"
          >
            <span>גלול למטה</span>
            <span className="scroll-cue-line relative h-12 w-px bg-white/35 md:h-16">
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
          <p className="eyebrow mb-5">הראל אמיר</p>
          <p className="mb-8 text-[0.82rem] font-bold tracking-normal text-mist md:text-[0.95rem]">
            הפקה וניהול אירועים
          </p>
          <h2 className="text-balance max-w-2xl font-display text-[3rem] font-black leading-[0.95] text-bone md:text-7xl">
            שליטה רגועה.
            <span className="block">אנרגיה גבוהה.</span>
          </h2>
          <div className="mt-8 grid max-w-2xl gap-5">
            <p className="border-r border-gold/50 pr-5 text-lg leading-8 text-bone/86 md:text-2xl md:leading-10">
              הראל אמיר יוצר אירועים וחוויות ייחודיות, המותאמות אישית לכל לקוח — עם דגש על אווירה, אסתטיקה ותשומת לב לפרטים הקטנים.
              <br />
              מחתונות ואירועים פרטיים ועד הפקות בינלאומיות, כל אירוע נבנה כדי להרגיש אלגנטי, אותנטי ובלתי נשכח.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.04} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[25rem] overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.035] shadow-glow md:max-w-none">
            <div className="relative aspect-[4/5] md:h-[78svh] md:aspect-auto">
              <Image
                src="/images/harel-about-new.jpg"
                alt="הראל אמיר באירוע"
                fill
                sizes="(min-width: 768px) 44vw, 100vw"
                className="object-cover object-[48%_42%] saturate-[0.9]"
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
  const [displayedGalleryImages, setDisplayedGalleryImages] = useState(() =>
    pickAlternatingGalleryImages(galleryImages)
  );

  useEffect(() => {
    if (galleryImages.length > GALLERY_DISPLAY_COUNT) {
      setDisplayedGalleryImages(pickAlternatingGalleryImages(galleryImages, true));
    }
  }, []);

  return (
    <section id="gallery" className="snap-section gallery-section portfolio-section overflow-hidden bg-bone py-0 text-ink">
      <div className="section-shell py-6 md:grid md:min-h-screen md:content-center md:py-0">
        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13vh]">
          {displayedGalleryImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.018} className={image.className}>
              <button
                type="button"
                onClick={() => onOpen(image)}
                className="group media-frame block aspect-square h-full w-full cursor-pointer bg-ink text-right md:aspect-[4/3] lg:aspect-auto"
                aria-label={`פתח תמונה: ${image.alt}`}
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
            <p className="mb-5 text-[0.76rem] font-bold tracking-normal text-brass md:text-[0.88rem]">תודות</p>
            <h2 className="text-balance max-w-3xl font-display text-[2.65rem] font-black leading-[0.95] text-ink md:text-7xl">
              מילים מהאירועים
            </h2>
          </div>
          <p className="mt-5 max-w-sm text-base leading-7 text-ink/62 md:mt-0">
            הודעות אמיתיות מזוגות ולקוחות אחרי האירוע.
          </p>
        </FadeIn>
        <div className="testimonial-rail flex snap-x gap-3 overflow-x-auto pb-4 pt-2 md:gap-4" aria-label="תודות מלקוחות" dir="rtl">
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
                  <p className="mt-2 text-[0.72rem] font-bold tracking-normal text-brass">{testimonial.date}</p>
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
            eyebrow="יצירת קשר"
            title="בואו ניצור את האירוע הבא שלכם."
            text="לאירועים פרטיים, חתונות, אפטרים והפקות בינלאומיות — שלחו הודעה ונבנה יחד את החוויה הנכונה."
          />
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-gold/55 bg-white/[0.025] px-6 py-4 text-sm font-bold tracking-normal text-bone backdrop-blur transition hover:bg-gold hover:text-ink active:scale-[0.985]"
            >
              דברו איתי בוואטסאפ
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-white/14 px-6 py-4 text-sm font-bold tracking-normal text-bone/82 transition hover:border-gold/55 hover:text-gold active:scale-[0.985]"
            >
              אינסטגרם
            </a>
            <a
              href={euforiaInstagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-white/14 px-6 py-4 text-sm font-bold tracking-normal text-bone/82 transition hover:border-gold/55 hover:text-gold active:scale-[0.985]"
            >
              אופוריה
            </a>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 md:mt-20">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="font-display text-4xl font-semibold text-bone" dir="ltr">Harel Amir</p>
            <p className="mt-3 text-sm tracking-normal text-mist">
              הפקה וניהול אירועים
            </p>
            <p className="mt-2 text-mist">תל אביב</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold tracking-normal text-bone/70 md:justify-end">
            <a className="transition hover:text-gold" href={instagramUrl} target="_blank" rel="noreferrer">
              אינסטגרם
            </a>
            <a className="transition hover:text-gold" href={euforiaInstagramUrl} target="_blank" rel="noreferrer">
              אופוריה
            </a>
            <a className="transition hover:text-gold" href={facebookUrl} target="_blank" rel="noreferrer">
              פייסבוק
            </a>
            <a className="transition hover:text-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
              וואטסאפ
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
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/92 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 border border-white/20 px-4 py-3 text-xs font-bold tracking-normal text-white transition hover:border-gold hover:text-gold"
      >
        סגור
      </button>
      <div className="relative h-[82svh] w-full max-w-6xl overflow-hidden" onClick={(event) => event.stopPropagation()}>
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
            className="absolute left-4 top-4 border border-ink/18 px-3 py-2 text-[0.76rem] font-bold tracking-normal text-ink/72 transition hover:border-brass hover:text-brass"
          >
            סגור
          </button>
          <div className="mx-auto mb-5 mt-7 flex h-9 w-9 items-center justify-center rounded-full border border-brass/35 text-sm text-brass md:mt-0">
            ♥
          </div>
          <h3 className="font-display text-3xl font-black leading-none text-ink">{testimonial.names}</h3>
          <p className="mt-2 text-center text-xs font-bold tracking-normal text-brass">
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
        className="flex w-full items-center justify-center gap-3 bg-bone px-5 py-4 text-sm font-bold tracking-normal text-ink shadow-glow transition active:scale-[0.985]"
      >
        <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
        דברו עם הראל בוואטסאפ
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
