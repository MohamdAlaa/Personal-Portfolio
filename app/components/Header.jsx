import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/portfolio-data";

const Header = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="ambient-orb ambient-orb-a" aria-hidden />
      <div className="ambient-orb ambient-orb-b" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 sm:px-8 pt-28 pb-24">
        <p className="animate-hero section-label">Mohamed Alaa</p>
        <h1 className="animate-hero animate-hero-delay-1 font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-foreground max-w-4xl leading-[1.05]">
          Frontend Engineer
        </h1>
        <p className="animate-hero animate-hero-delay-2 mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
          Nearly 3 years building responsive interfaces, design systems, and
          production web apps with React, Next.js, and Vue.
        </p>

        <div className="animate-hero animate-hero-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="btn-live inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-base font-medium text-accent-foreground soft-depth"
          >
            Get in touch
            <Image
              src="/right-arrow-white.svg"
              alt=""
              width={14}
              height={14}
            />
          </Link>
          <Link
            href="/CV_Mohamed Alaa.pdf"
            target="_blank"
            download
            className="btn-live inline-flex items-center gap-2 rounded-md border border-foreground/25 bg-background/70 px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </Link>
        </div>

        <div className="animate-hero animate-hero-delay-4 mt-12 flex items-center gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="social-pop rounded-md border border-border bg-background/70 p-2 hover:border-accent"
            >
              <Image
                src={social.icon}
                alt=""
                width={28}
                height={28}
                className="dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="scroll-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="block h-8 w-px bg-accent/70" />
      </a>
    </section>
  );
};

export default Header;
