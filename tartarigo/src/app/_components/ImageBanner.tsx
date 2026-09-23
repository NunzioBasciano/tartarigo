import Button from "./Button";

export interface ImageBannerProps {
  title: string;
  subtitle: string;
  description: string;
}

function ImageBanner({ title, subtitle, description }: ImageBannerProps) {
  return (
    <div className="lg:flex justify-center">
      <div className="absolute inset-0 bg-[url(/1.jpeg)] bg-cover bg-center bg-no-repeat z-0" />
      <div className="absolute inset-0 bg-black/50 z-0" />

      <section className="relative z-10 text-center flex flex-col items-center justify-center h-full lg:max-w-175">
        {/* qui il tuo testo */}
        <h2 className="text-white font-medium!">{title}</h2>
        <h3 className="text-white max-w-2xl font-bold!">{subtitle}</h3>
        <p className="text-white text-[14px] font-medium leading-5 md:text-[16px] md:leading-6">
          {description}
        </p>
        <Button
          className="mt-6 lg:inline-flex!" // Nascondi su mobile, mostra da Tablet (768px+)
          href="#prenota"
          label="Verifica Disponibilità"
          isLink={true}
        />
      </section>
    </div>
  );
}
export default ImageBanner;
