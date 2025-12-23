import Image from "next/image";
import { ReactElement } from "react";

interface ContentBoxProps {
  id: string;
  introduction: string;
  title: string;
  children: ReactElement;
}

function ContentBox(props: ContentBoxProps) {
  const { id, introduction, title, children } = props;

  return (
    <div
      id={id}
      className="container-box relative flex flex-col px-6 py-10 bg-secondary md:px-12 md:py-20"
    >
      <h2 className="text-primary">{introduction}</h2>
      <h3 className="text-primary">{title}</h3>
      {children}
    </div>
  );
}

export default ContentBox;
