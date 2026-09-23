import Image from "next/image";

interface ImageMapperProps {
  index: number;
  imgSrc: string;
  imgAlt: string;
  imgIndex: number;
  indexMapper: number;
}

function ImageMapper({
  index,
  imgSrc,
  imgAlt,
  imgIndex,
  indexMapper,
}: ImageMapperProps) {
  return (
    <div key={index} className=" min-w-full snap-center md:w-auto">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={800}
        height={600}
        className="rounded-2xl object-cover aspect-4/3 w-full md:w-auto"
        priority={indexMapper === 0 && imgIndex === 0}
      />
    </div>
  );
}
export default ImageMapper;
