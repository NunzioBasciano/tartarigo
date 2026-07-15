"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import ArrowRight from "./icons/ArrowRight";
import ArrowLeft from "./icons/ArrowLeft";

// Importa gli stili di Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { HERO_SLIDER } from "../constant/hero-slider";

// Icone semplici (puoi usare Lucide-react o simili se le hai)
const PauseIcon = () => (
  <div className="border-3 w-12 h-12 rounded-md flex items-center justify-center">
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  </div>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function HeroCarousel() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => swiperInstance?.slidePrev();
  const nextSlide = () => swiperInstance?.slideNext();

  const toggleAutoplay = () => {
    if (!swiperInstance) return;
    if (isPaused) {
      swiperInstance.autoplay.start();
      setIsPaused(false);
    } else {
      swiperInstance.autoplay.stop();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) setHeaderHeight(header.clientHeight);
  }, []);

  return (
    <section
      className="w-full relative overflow-hidden group"
      style={{ height: `calc(100dvh - ${headerHeight}px)` }}
    >
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="slide"
        loop={true}
        pagination={{
          el: ".my-custom-pagination", // Colleghiamo Swiper a un contenitore specifico
          clickable: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {HERO_SLIDER.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* ... Contenuto slide (Image, Overlay, Testo) ... */}
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold uppercase">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENITORE UNICO ALLINEATO */}
      <div className="absolute bottom-8 left-0 px-4 right-0 z-20 flex items-center justify-between">
        {/* 1. Button PREV */}
        <button
          onClick={prevSlide}
          className="hover:scale-110 transition-transform outline-none"
          aria-label="Slide precedente"
        >
          <ArrowLeft color="#f5cb9e" />
        </button>

        {/* 2. BULLETS (Paginazione Swiper) */}
        <div className="my-custom-pagination static flex items-center w-fit!" />

        {/* 3. Button PLAY/PAUSA */}
        <button
          onClick={toggleAutoplay}
          className="text-[#f5cb9e] hover:scale-110 transition-transform outline-none flex items-center justify-center"
          aria-label={isPaused ? "Play" : "Pausa"}
        >
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </button>

        {/* 4. Button NEXT */}
        <button
          onClick={nextSlide}
          className="hover:scale-110 transition-transform outline-none"
          aria-label="Prossima slide"
        >
          <ArrowRight color="#f5cb9e" />
        </button>
      </div>

      {/* CSS per forzare lo stile dei bullet di Swiper */}
    </section>
  );
}
