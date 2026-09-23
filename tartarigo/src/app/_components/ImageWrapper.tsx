import Image from "next/image";

export interface ImageMapperProps {
  imgSrc: string;
  imgAlt: string;
}

function ImageMapper({ imgSrc, imgAlt }: ImageMapperProps) {
  return (
    <div className=" min-w-full snap-center md:w-auto">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={800}
        height={600}
        className="rounded-2xl object-cover aspect-4/3 w-full md:w-auto"
      />
    </div>
  );
}
export default ImageMapper;
