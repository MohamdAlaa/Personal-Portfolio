"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// dropdown-menu removed: using a simple toggle button instead
import { useTheme } from "next-themes";

const Navebar = () => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState("light");

  // Avoid SSR mismatch: only render theme-dependent UI after mount
  useEffect(() => setMounted(true), []);

  // keep resolvedTheme in sync with theme/systemTheme
  useEffect(() => {
    const res = theme === "system" ? systemTheme : theme;
    if (res) setResolvedTheme(res);
  }, [theme, systemTheme]);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`bg-header w-full h-20 fixed top-0 left-0 z-40 ${
          isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      ></div>
      <nav
        className={`w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 `}
      >
        <h1 className="text-3xl">
          Mohamed Alaa<span className="text-[#EC1552]">.</span>
        </h1>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 ">
          <li className="transition-transform duration-200 hover:scale-105">
            <Link className="font-Ovo  text-black" href="#top">
              Home
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link className="font-Ovo text-black" href="#about">
              About
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link className="font-Ovo  text-black" href="#experience">
              Work Experience
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link className="font-Ovo  text-black" href="#projects">
              Projects
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105 ">
            <Link className="font-Ovo text-black" href="#contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme toggle: show moon when in light (click to go dark), show sun when in dark (click to go light) */}
          <Button
            className=""
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => {
              if (!mounted) return;
              const current = theme === "system" ? systemTheme : theme;
              if (current === "dark") {
                setTheme("light");
                setResolvedTheme("light");
              } else {
                setTheme("dark");
                setResolvedTheme("dark");
              }
            }}
          >
            {mounted ? (
              (() => {
                const resolved = resolvedTheme;
                // when resolved is 'dark' show sun icon (click to switch to light)
                // when resolved is 'light' show moon icon (click to switch to dark)
                const showSun = resolved === "dark";
                return showSun ? (
                  <Image src="/sun.svg" alt="sun" width={20} height={20} />
                ) : (
                  <Image src="/moon.svg" alt="moon" width={20} height={20} />
                );
              })()
            ) : (
              <Image src="/sun.svg" alt="theme" width={20} height={20} />
            )}
          </Button>
          <Link
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo text-lg  hover:scale-105 transition-transform duration-200"
            href="#contact"
          >
            Contact
            <Image
              src="/contact-arrow.svg"
              alt="arrow"
              width={12}
              height={12}
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-3">
            <Image src="/menu.svg" alt="menu" width={30} height={30} />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`
            flex md:hidden flex-col gap-10 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50
            transition-transform duration-500 ease-in-out  
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          style={{ willChange: "transform" }}
        >
          <div
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/close.svg" alt="close" width={20} height={20} />
          </div>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link
              className="font-Ovo text-lg dark:text-black"
              onClick={() => setIsOpen(false)}
              href="#top"
            >
              Home
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link
              className="font-Ovo text-lg dark:text-black"
              onClick={() => setIsOpen(false)}
              href="#about"
            >
              About
            </Link>
          </li>

          <li className="transition-transform duration-200 hover:scale-105">
            <Link
              className="font-Ovo text-lg dark:text-black"
              onClick={() => setIsOpen(false)}
              href="#experience"
            >
              Work Experience
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link
              className="font-Ovo text-lg dark:text-black"
              onClick={() => setIsOpen(false)}
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link
              className="font-Ovo text-lg dark:text-black"
              onClick={() => setIsOpen(false)}
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navebar;
