"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowRight from "./icons/ArrowRight";
import ArrowLeft from "./icons/ArrowLeft";
import { HERO_SLIDER } from "../constant/hero-slider";
import Link from "next/link";

interface SliderProps {
  isOpen?: boolean;
  headerHeight?: number;
}

interface SliderState {
  headerHeightState: number;
  sectionWidth: number;
  sectionHeight: number;
}

function Slider({ isOpen }: SliderProps) {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState<SliderState | null>(null);
  const touchStart = useRef<number | null>(null);

  const [carousel, setCarousel] = useState({
    currentIndex: 0,
    items: HERO_SLIDER,
  });

  const nextSlide = () => {
    setCarousel((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length,
    }));
    setCounter(0);
  };

  const prevSlide = () => {
    setCarousel((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
    }));
    setCounter(0);
  };

  // Gestione Swipe e Scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > 50) {
        e.deltaX > 0 ? nextSlide() : prevSlide();
      }
    };
    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null) return;
      const distance = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(distance) > 50) {
        distance > 0 ? nextSlide() : prevSlide();
      }
      touchStart.current = null;
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Timer Autoplay corretto
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter >= 5) nextSlide();
  }, [counter]);

  // Dimensioni Header
  useEffect(() => {
    const updateSize = () => {
      const header = document.querySelector("header");
      if (header) {
        setState({
          headerHeightState: header.clientHeight,
          sectionWidth: window.innerWidth,
          sectionHeight: window.innerHeight - header.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div
        className="relative  overflow-hidden w-dvw"
        style={{
          height: state
            ? `calc(100dvh - ${state.headerHeightState}px)`
            : "100vh",
        }}
      >
        {state !== null && (
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              width: `${carousel.items.length * 100}%`,
              transform: `translateX(-${
                (carousel.currentIndex * 100) / carousel.items.length
              }%)`,
              pointerEvents: "auto", // Forza l'interattività
            }}
          >
            {/* ... dentro il map di carousel.items ... */}
            {carousel.items.map((item, idx) => (
              <div
                key={idx}
                className="relative h-full w-full flex items-center justify-center" // Aggiunto flex per centrare i testi
                style={{ width: `${100 / carousel.items.length}%` }}
              >
                {/* Immagine di sfondo */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />

                {/* Overlay scuro */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

                {/* CONTENUTO DINAMICO (Sopra l'overlay) */}
                <div className="hero relative z-20 max-w-3xl px-6 text-center text-secondary">
                  {/* Titolo con font script */}
                  <h2 className="font-script mb-6 tracking-wide">
                    {item.title}
                  </h2>

                  {/* Descrizione con interlinea corretta */}
                  <p className=" text-base md:text-lg leading-[1.7] mb-10 max-w-xl mx-auto opacity-90 font-light">
                    {item.desc}
                  </p>

                  {/* CTA con stile design system */}

                  <Link
                    href={item.link}
                    className="btn-cta whitespace-nowrap inline-block tracking-[0.2em] shadow-xl transition-all hover:brightness-110"
                  >
                    Prenota Ora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Navigazione Desktop */}
        <button
          aria-label="prossima slide"
          className="hidden absolute top-1/2 left-4 z-10 md:block -translate-y-1/2 outline-none cursor-pointer"
          onClick={prevSlide}
        >
          <ArrowLeft color="#f5cb9e" />
        </button>
        <button
          aria-label="precedente slide"
          className="hidden absolute top-1/2 right-4 z-10 md:block -translate-y-1/2 outline-none cursor-pointer"
          onClick={nextSlide}
        >
          <ArrowRight color="#f5cb9e" />
        </button>

        {/* Navigazione Mobile / Dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex items-center -translate-x-1/2 space-x-2">
          {carousel.items.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setCarousel((p) => ({ ...p, currentIndex: index }));
                setCounter(0);
              }}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                carousel.currentIndex === index
                  ? "h-3 w-12 bg-accent"
                  : "h-2 w-8 bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
