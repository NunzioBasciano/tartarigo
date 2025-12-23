"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationItem from "./NavigationItem";
import { NAV_LINKS } from "../constant/navigation";
import Hamburger from "./hamburger-menu/hamburger";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.clientHeight);
    }
  }, []);

  return (
    <>
      <div className="">
        <header className="sticky top-0 w-full backdrop-blur-md bg-opacity-90 bg-primary border-b border-white/10 z-110">
          <div className="container-custom flex items-center justify-between py-2 md:py-2.5">
            {/* LOGO */}
            <Link
              aria-label="Tarta Rigo - Torna alla Home"
              href="/"
              className="flex items-center gap-2 md:gap-3 group transition-all"
            >
              <div className="bg-secondary rounded-full shadow-lg p-0.5 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/tartarigo-logo.svg"
                  alt="Logo Tarta Rigo"
                  width={72}
                  height={72}
                  className="w-12 h-12 md:w-16 md:h-16"
                  priority
                />
              </div>
              <div className="flex flex-col items-center" id="brand">
                <h1 className="italic text-secondary leading-[0.85] tracking-tight text-[2rem]">
                  <span className="brand-highlight">T</span>arta
                  <span className="brand-highlight">R</span>igo
                </h1>
                <div className="h-px bg-accent w-2/3 mt-1 mb-1.5 mx-auto"></div>
                <p className="font-light uppercase tracking-[0.3em] text-secondary text-[0.5625rem] md:text-[0.6875rem]">
                  B&B Bologna
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav aria-label="Navigazione desktop" className="hidden md:block">
              <ul className="flex items-center gap-6 list-none text-secondary/70 text-[0.75rem] font-medium">
                {NAV_LINKS.map((link, i) => (
                  <li key={i}>
                    <NavigationItem href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA & HAMBURGER */}
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="#prenota"
                className="btn-cta whitespace-nowrap hidden md:inline-block"
              >
                Prenota Ora
              </Link>
              <Hamburger
                isOpen={isOpen}
                toggleMenu={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </header>

        {/* MENU MOBILE (Sibling dell'header, non figlio) */}
      </div>
      <div className="relative">
        <HamburgerMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          headerHeight={headerHeight}
        />
      </div>
    </>
  );
}
