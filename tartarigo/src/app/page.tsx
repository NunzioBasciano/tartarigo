"use client";

import ContentBox from "./_components/ContentBox";
import { ROOMS } from "./constant/rooms";
import HeroCarousel from "./_components/Slider2";
import CardRec from "./_components/CardRec";
import InputBox from "./_components/input/InputBox";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import CardRoom from "./_components/CardRoom";
import ImageBanner from "./_components/ImageBanner";

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
    console.log("cliccato");
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
    }
  };
  return (
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

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 lg:grid-cols-3">
              {ROOMS.map((room, i) => (
                <div key={i}>
                  <CardRoom
                    key={i}
                    roomIndex={i}
                    roomName={room.name}
                    roomDescription={room.paragraph}
                    imageArray={room.images}
                    servicesArray={room.services}
                  />
                </div>
              ))}
            </div>
          </div>
        </ContentBox>
        <ContentBox
          id="disponbilità"
          color="text-secondary"
          className="relative overflow-hidden"
        >
          <ImageBanner
            title="Verifica Disponibilità"
            subtitle="Prenota la tua camera"
            description="Controlla la disponibilità delle nostre camere e prenota il tuo soggiorno in pochi semplici passaggi."
          />
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
        <ContentBox
          id="disponbilità"
          color="text-secondary"
          className="relative overflow-hidden"
        >
          <ImageBanner
            title="Verifica Disponibilità"
            subtitle="Prenota la tua camera"
            description="Controlla la disponibilità delle nostre camere e prenota il tuo soggiorno in pochi semplici passaggi."
          />
        </ContentBox>
        <ContentBox
          id="verifica-disponibilità"
          introduction="Verifica Disponibilità"
          title="Compila il modulo per verificare la disponibilità"
        >
          <div className="flex flex-col">
            <div className="mx-0 h-px bg-primary opacity-50 mb-6 md:mb-8 lg:mb-12"></div>

            <form className="" onSubmit={handleSubmit}>
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
          </div>
        </ContentBox>

        <p className="pb-50"></p>
      </main>
    </div>
  );
}
