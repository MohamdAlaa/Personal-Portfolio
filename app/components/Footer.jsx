import Image from "next/image";
import Link from "next/link";
import { profile, socialLinks } from "@/lib/portfolio-data";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-3xl text-foreground">
            Mohamed Alaa
            <span className="text-accent">.</span>
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 block text-base text-muted-foreground transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
          <a
            href={`https://wa.me/${profile.phoneInternational}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-base text-muted-foreground transition-colors hover:text-accent"
          >
            {profile.phone}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.location}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohamed Alaa. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={social.name}
              className="social-pop rounded-md border border-border bg-background p-2 hover:border-accent"
            >
              <Image
                src={social.icon}
                alt=""
                width={24}
                height={24}
                className="dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
