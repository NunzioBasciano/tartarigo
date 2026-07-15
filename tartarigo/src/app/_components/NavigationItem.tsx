import Link from "next/link";
import React from "react";

interface NavigationItemProps {
  href: string;
  label: string;
  color?: string;
  onclick?: () => void;
  textSize?: string;
  textWeight?: string;
}

function NavigationItem({
  href,
  label,
  color,
  textSize,
  textWeight,
  onclick,
}: NavigationItemProps) {
  return (
    <Link
      target="_self"
      onClick={onclick}
      href={href}
      className={`inline-block uppercase ${textSize ? textSize : "text-xl"} 
      ${textWeight ? textWeight : "font-light"} leading-11.25 ${
        color ? color : "text-white"
      } hover:text-secondary transition-all duration-300 hover:scale-105`}
    >
      {label}
    </Link>
  );
}

export default NavigationItem;
