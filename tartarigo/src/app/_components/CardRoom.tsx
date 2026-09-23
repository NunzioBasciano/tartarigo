import Button from "./Button";
import ImageMapper from "./ImageWrapper";

interface CardRoomProps {
  roomIndex: number;
  roomName: string;
  roomDescription: string;
  imageArray: ImagesRoomProps[];
  servicesArray: ServicesProps[];
}

interface ImagesRoomProps {
  src: string;
  alt: string;
}

interface ServicesProps {
  icon: string;
  label: string;
}

function CardRoom({
  roomName,
  roomDescription,
  imageArray,
  servicesArray,
}: CardRoomProps) {
  return (
    <div className="border border-primary/20 rounded-3xl py-6 px-4 flex flex-col lg:py-6 lg:px-6">
      <div>
        <h4 className=" font-great-vibes text-[28px] font-medium leading-7  mb-2 text-primary md:text-[32px] md:leading-8">
          {roomName}
        </h4>
        <p className=" mb-4 text-[16px] font-light leading-5 text-primary/80 font-sans italic md:text-[18px] md:leading-5.5">
          {roomDescription}
        </p>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-0 ">
        {imageArray &&
          imageArray.map((image, i) => (
            <ImageMapper key={i} imgSrc={image.src} imgAlt={image.alt} />
          ))}
      </div>

      <div className="mt-6">
        <h5 className="text-[16px] leading-6 pb-4 tracking-[1px] md:text-[18px] md:leading-7">
          Servizi inclusi
        </h5>
        <ul className="flex flex-col gap-2">
          {servicesArray.map((service, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              </div>
              <span className="text-sm font-sans text-primary/90 tracking-wide md:text-[16px] md: leading-5">
                {service.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className="mt-6 lg:inline-flex!"
        href="#prenota"
        label="Verifica Disponibilità"
        isLink={true}
      />
    </div>
  );
}
export default CardRoom;
