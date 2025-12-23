import Link from "next/link";
import React from "react";

interface NavigationItemProps {
  href: string;
  label: string;
  color?: string;
  onclick?: () => void;
}

function NavigationItem({ href, label, color, onclick }: NavigationItemProps) {
  return (
    <Link
      onClick={onclick}
      href={href}
      className={`nav-link inline-block font-medium uppercase tracking-[0.15em] ${
        color ? color : "text-secondary"
      } hover:text-secondary transition-all duration-300 hover:scale-105`}
    >
      {label}
    </Link>
  );
}

export default NavigationItem;
