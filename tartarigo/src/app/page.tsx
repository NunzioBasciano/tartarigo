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
        <ContentBox introduction="Struttura" title="Le Nostre Camere">
          <div className="w-full">
            <div className="mx-4 h-px bg-primary opacity-50"></div>

            {ROOMS.map((room, i) => (
              <div className="mt-8" key={i}>
                <h4 className="mx-4 font-great-vibes text-4xl mb-6 text-primary">
                  {room.name}
                </h4>
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4 md:hidden">
                  {/* Verifichiamo che images esista prima di mapparlo */}
                  {room.images &&
                    room.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="min-w-[85vw] snap-center">
                        <Image
                          src={image.src}
                          alt={image.alt || `${room.name} - ${imgIndex}`}
                          width={800}
                          height={600}
                          className="rounded-2xl object-cover aspect-4/3 w-full"
                          // CORREZIONE: Usa "i" (l'indice del primo map) e "imgIndex"
                          priority={i === 0 && imgIndex === 0}
                        />
                      </div>
                    ))}
                </div>
                http://localhost:3000/_next/image?url=%2Fhorizontal%2Fcamera-1.jpeg&w=1920&q=75{" "}
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
        </ContentBox>
      </main>
    </div>
  );
}
