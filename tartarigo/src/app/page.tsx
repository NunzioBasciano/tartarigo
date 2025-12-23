import ContentBox from "./_components/ContentBox";
import Slider from "./_components/Slider";
import Image from "next/image";
import { ROOMS } from "./constant/rooms";
export default function Home() {
  return (
    // Rimosso flex, items-center e justify-center per permettere lo scroll naturale
    <div className="relative w-full min-h-screen bg-black font-sans dark:bg-black">
      <main>
        {/* La Hero/Slider ora occupa il suo spazio naturale in cima */}
        <Slider />

        {/* La sezione camere segue nel flusso */}
        <ContentBox
          id="struttura"
          introduction="Struttura"
          title="Le Nostre Camere"
        >
          <div className="w-full">
            <div className="mx-4 h-px bg-primary opacity-50"></div>

            <div className="md:hidden">
              {ROOMS.map((room, i) => (
                <div className="mt-8" key={i}>
                  <h4 className="mx-4 font-great-vibes text-4xl mb-6 text-primary">
                    {room.name}
                  </h4>
                  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4 ">
                    {/* Verifichiamo che images esista prima di mapparlo */}
                    {room.images &&
                      room.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="min-w-[85vw] snap-center md:w-auto"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt || `${room.name} - ${imgIndex}`}
                            width={800}
                            height={600}
                            className="rounded-2xl object-cover aspect-4/3 w-full md:h-1/2 md:w-auto"
                            // CORREZIONE: Usa "i" (l'indice del primo map) e "imgIndex"
                            priority={i === 0 && imgIndex === 0}
                          />
                        </div>
                      ))}
                  </div>

                  {/* Sezione Servizi - Griglia 2 colonne */}
                  <div className="mx-4 mt-4 grid grid-cols-2 gap-y-4 gap-x-2">
                    {room.services.map((service, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-3">
                        {/* Placeholder per l'icona - puoi usare Lucide-react qui */}
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        </div>
                        <span className="text-sm font-sans text-primary/90 tracking-wide">
                          {service.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Paragrafo descrittivo */}
                  <p className="mx-4 mt-6 text-sm leading-relaxed text-primary/80 font-sans italic">
                    {room.paragraph}
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              {ROOMS.map((room, i) => (
                <div
                  key={i}
                  className={`mt-16 flex flex-col gap-8 md:gap-16 ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* COLONNA IMMAGINI (Desktop: 50% larghezza) */}
                  <div className="w-full md:w-1/2">
                    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:grid md:grid-cols-2 md:overflow-visible md:gap-4">
                      {room.images &&
                        room.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`min-w-[85vw] snap-center md:min-w-0 ${
                              imgIndex === 0 ? "md:col-span-2" : "md:col-span-1"
                            }`}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt || `${room.name}`}
                              width={800}
                              height={600}
                              className="rounded-2xl object-cover aspect-[4/3] w-full shadow-lg"
                              priority={i === 0 && imgIndex === 0}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* COLONNA TESTI (Desktop: 50% larghezza) */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0">
                    <h4 className="font-great-vibes text-5xl mb-6 text-primary">
                      {room.name}
                    </h4>

                    {/* Servizi - 2 colonne su desktop per non allungare troppo */}
                    <div className="grid grid-cols-2 gap-y-4 mb-8">
                      {room.services.map((service, sIndex) => (
                        <div key={sIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary/40 rounded-full" />
                          <span className="text-sm font-sans text-primary/90 uppercase tracking-widest">
                            {service.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-base leading-relaxed text-primary/70 font-sans italic max-w-md">
                      {room.paragraph}
                    </p>

                    {/* Bottone Desktop */}
                    <button className="mt-10 w-fit px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-[0.2em] text-xs">
                      Esplora la suite
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ContentBox>
      </main>
    </div>
  );
}
