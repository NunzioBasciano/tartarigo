import Image from "next/image";
import { ReactElement } from "react";

interface ContentBoxProps {
  id: string;
  introduction?: string;
  title?: string;
  children: ReactElement;
  color?: string;
  className?: string; // Aggiungi questa riga per accettare classi esterne
}

function ContentBox(props: ContentBoxProps) {
  const { id, introduction, title, children, color, className } = props;

  return (
    <div
      id={id}
      className={
        "container-box relative flex flex-col px-4 py-12 bg-secondary md:py-16 md:px-[8.3333vw] lg:py-24" +
        (className ? ` ${className}` : "")
      }
    >
      {introduction && (
        <h2 className={color ? color : "text-primary z-10"}>{introduction}</h2>
      )}

      {title && (
        <h3 className={color ? color : "text-primary z-10"}>{title}</h3>
      )}

      {children}
    </div>
  );
}

export default ContentBox;
