"use client";

import ContentBox from "./_components/ContentBox";
import Slider from "./_components/Slider";
import Image from "next/image";
import { ROOMS } from "./constant/rooms";

import HeroCarousel from "./_components/Slider2";
import Button from "./_components/Button";
import CardRec from "./_components/CardRec";
import InputBox from "./_components/input/InputBox";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import ImageMapper from "./_components/ImageWrapper";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  // Handle changes in form input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("Form Data Updated:", formData); // Log the updated form data
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    /*  if (!validPhone || !validName) {
      return; // Non inviare il form se i dati non sono validi
    } */
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Messaggio inviato con successo!");
        setFormData({
          /* _id: "", */
          firstName: "",
          lastName: "",
          message: "",
          phone: "",
          email: "",
        });
      } else {
        console.log(data.error || "Errore durante l'invio");
      }
    } catch (error) {
      console.error("Error:", error);
      /*     setToastMessage("Error updating contact.");
      setToastType("error"); */
    }
  };
  return (
    // Rimosso flex, items-center e justify-center per permettere lo scroll naturale
    <div className="relative w-full min-h-screen bg-black font-sans dark:bg-black">
      <main>
        <HeroCarousel></HeroCarousel>
        <ContentBox
          id="struttura"
          introduction="Struttura"
          title="Le Nostre Camere"
        >
          <div className="w-full">
            <div className="mx-0 h-px bg-primary opacity-50 mb-6 md:mb-8 lg:mb-12"></div>
            {/* md:hidden */}
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 lg:grid-cols-3">
              {ROOMS.map((room, i) => (
                <div
                  className="border border-primary/20 rounded-3xl py-6 px-4 flex flex-col lg:py-6 lg:px-6"
                  key={i}
                >
                  <div>
                    <h4 className=" font-great-vibes text-[28px] font-medium leading-7  mb-2 text-primary md:text-[32px] md:leading-8">
                      {room.name}
                    </h4>
                    <p className=" mb-4 text-[16px] font-light leading-5 text-primary/80 font-sans italic md:text-[18px] md:leading-[22px]">
                      {room.paragraph}
                    </p>
                  </div>
                  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-0 ">
                    {/* Verifichiamo che images esista prima di mapparlo */}
                    {room.images &&
                      room.images.map((image, imgIndex) => (
                        <ImageMapper
                          key={imgIndex}
                          index={i}
                          imgSrc={image.src}
                          imgAlt={image.alt || `${room.name} - ${imgIndex}`}
                          imgIndex={imgIndex}
                          indexMapper={i}
                        />
                      ))}
                  </div>

                  {/* Sezione Servizi - Griglia 2 colonne */}
                  <div className="mt-6">
                    <h5 className="text-[16px] leading-6 pb-4 tracking-[1px] md:text-[18px] md:leading-7">
                      Servizi inclusi
                    </h5>
                    <ul className="flex flex-col gap-2">
                      {room.services.map((service, sIndex) => (
                        <li key={sIndex} className="flex items-center gap-3">
                          {/* Placeholder per l'icona - puoi usare Lucide-react qui */}
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          </div>
                          <span className="text-sm leading-5 font-sans text-primary/90 tracking-wide md:text-[16px] md: leading-[24px]">
                            {service.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="mt-6 lg:inline-flex!" // Nascondi su mobile, mostra da Tablet (768px+)
                    href="#prenota"
                    label="Verifica Disponibilità"
                    isLink={true}
                  />
                </div>
              ))}
            </div>
            {/* md:block */}
            <div className="hidden ">
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
        <ContentBox
          id="struttura"
          /*           introduction="Disponibilità"
          title="verifica la disponibilità" */
          color="text-secondary"
          className="relative overflow-hidden"
        >
          <div className="lg:flex justify-center">
            <div className="absolute inset-0 bg-[url(/1.jpeg)] bg-cover bg-center bg-no-repeat z-0" />
            <div className="absolute inset-0 bg-black/50 z-0" />

            <section className="relative z-10 text-center flex flex-col items-center justify-center h-full lg:max-w-175">
              {/* qui il tuo testo */}
              <h2 className="text-white font-medium!">Disponibilità</h2>
              <h3 className="text-white max-w-2xl font-bold!">
                Verifica disponibilità
              </h3>
              <p className="text-white text-[14px] font-medium leading-5 md:text-[16px] md:leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus est distinctio harum ipsam impedit illo amet ut
                facere, aliquid explicabo.
              </p>
              <Button
                className="mt-6 lg:inline-flex!" // Nascondi su mobile, mostra da Tablet (768px+)
                href="#prenota"
                label="Verifica Disponibilità"
                isLink={true}
              />
            </section>
          </div>
        </ContentBox>
        <ContentBox
          id="recensioni"
          introduction="Le nostre recensioni"
          title="Cosa pensa chi è stato qui"
        >
          <div className="flex flex-col">
            <div className="mx-0 h-px bg-primary opacity-50 mb-6 md:mb-8 lg:mb-12"></div>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 lg:grid-cols-3">
              <CardRec></CardRec>
              <CardRec></CardRec>
              <CardRec></CardRec>
            </div>
          </div>
        </ContentBox>
        <form onSubmit={handleSubmit}>
          {/*     <InputBox
          placeholder="Inserisci il tuo nome"
          onChange={(e) => console.log(e.target.value)}
          value=""
          inputType="text"
          inputName="nome"
        ></InputBox> */}
          <InputBox
            inputName={"firstName"}
            placeholder="Nome"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputBox
            inputName={"lastName"}
            placeholder="Cognome"
            value={formData.lastName}
            onChange={handleChange}
          />
          <InputBox
            inputName={"email"}
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputBox
            inputName={"message"}
            placeholder="Messaggio"
            value={formData.message}
            onChange={handleChange}
            inputType="textarea"
          />

          <PhoneInput
            country={"it"}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            containerStyle={{
              width: "100%",
            }}
            inputStyle={{
              backgroundColor: "var(--darkBlue)",
              padding: "4px 48px",
              width: "100%",
              border: "1px solid",
              borderRadius: "0.375rem",
              color: "white",
            }}
            buttonStyle={{
              backgroundColor: "var(--darkBlue)",
              borderTopLeftRadius: "0.375rem",
              borderBottomLeftRadius: "0.375rem",
              borderRight: "1px solid white",
            }}
            dropdownStyle={{
              backgroundColor: "var(--darkBlue)",
              color: "white",
            }}
          />
          <button type="submit">Invia</button>
        </form>
        <p className="pb-50"></p>
      </main>
    </div>
  );
}
