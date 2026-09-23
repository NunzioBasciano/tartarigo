"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationItem from "./NavigationItem";
import { NAV_LINKS } from "../constant/navigation";
import Hamburger from "./hamburger-menu/hamburger";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import Button from "./Button";

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
      <div className="sticky top-0 w-full backdrop-blur-md  bg-primary z-110">
        <header>
          <div className="container-custom flex items-center justify-between py-2.5 ">
            {/* LOGO */}
            <Link
              aria-label="Tarta Rigo - Torna alla Home"
              href="/"
              className="flex items-center gap-3 group transition-all"
            >
              <div className="bg-white rounded-full shadow-lg p-0.5 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/tartarigo-logo.svg"
                  alt="Logo Tarta Rigo"
                  width={72}
                  height={72}
                  className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  priority
                />
              </div>
              <div className="flex flex-col items-center" id="brand">
                <h1 className="italic text-white leading-8 tracking-[4%] text-[1.75rem] font-bold  md:text-[1.75rem] md:leading-9 lg:text-[2rem] lg:leading-10">
                  <span className="brand-highlight">T</span>arta
                  <span className="brand-highlight">R</span>igo
                </h1>
                {/* <div className="h-px bg-accent w-2/3 mt-1 mb-1.5 mx-auto"></div> */}
                <p className="font-normal uppercase tracking-[0.3em] text-white text-[0.625rem] leading-4 lg:text-[0.75rem] lg:leading-5">
                  B&B Bologna
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="flex items-center gap-8">
              <nav aria-label="Navigazione desktop" className="hidden lg:block">
                <ul className="flex items-center gap-6 list-none text-secondary/70 text-[0.75rem] font-medium">
                  {NAV_LINKS.map((link, i) => (
                    <li key={i}>
                      <NavigationItem
                        href={link.href}
                        label={link.label}
                        textSize="text-[16px]"
                        textWeight="font-medium"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
              <Button
                className="hidden! lg:inline-flex!" // Nascondi su mobile, mostra da Tablet (768px+)
                href="#prenota"
                label="Prenota Ora"
                isLink={true}
              />
            </div>

            {/* CTA & HAMBURGER */}
            <div className="flex items-center gap-4 md:gap-6 h-[-webkit-fill-available] lg:hidden ">
              <Button
                className="hidden! md:inline-flex!" // Mostra su mobile, NASCONDI da Tablet (768px+)
                href="#prenota"
                label="Prenota Ora"
                isLink={true}
              />
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
