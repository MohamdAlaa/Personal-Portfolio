"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const resolved = theme === "system" ? systemTheme : theme;
  const isDark = resolved === "dark";

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border/80 bg-background/80 backdrop-blur-md soft-depth"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 py-4">
          <Link
            href="#home"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground"
          >
            Mohamed Alaa
            <span className="text-accent">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link text-base text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-md border-border bg-background/60"
            >
              {mounted ? (
                <Image
                  src={isDark ? "/sun.svg" : "/moon.svg"}
                  alt=""
                  width={18}
                  height={18}
                  className={isDark ? "invert" : ""}
                />
              ) : (
                <span className="size-4" />
              )}
            </Button>

            <Link
              href="#contact"
              className="btn-live hidden lg:inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-base text-accent-foreground"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden p-1"
              aria-label="Open menu"
            >
              <Image
                src="/menu.svg"
                alt=""
                width={26}
                height={26}
                className="dark:invert"
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-ink/35 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <aside
        className={`fixed top-0 right-0 z-[70] flex h-full w-[min(20rem,85vw)] flex-col border-l border-border bg-background px-8 py-8 soft-depth transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="mb-10 self-end p-1"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <Image
            src="/close.svg"
            alt=""
            width={18}
            height={18}
            className="dark:invert"
          />
        </button>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-3xl text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
