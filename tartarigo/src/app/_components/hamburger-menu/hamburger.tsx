import { useState } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import CloseIcon from "../icons/CloseIcon";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
function Hamburger(props: HamburgerProps) {
  const { isOpen, toggleMenu } = props;

  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden relative w-8 h-8 flex justify-center items-center cursor-pointer focus-visible:outline-none"
      aria-label="Toggle menu"
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center w-8 h-8 ${
          isOpen
            ? "opacity-0 rotate-90 scale-50 z-0"
            : "opacity-100 rotate-0 scale-100 z-10"
        }`}
      >
        <HamburgerIcon className="w-6 h-6 text-accent" />
      </div>

      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center ${
          isOpen
            ? "opacity-100 rotate-0 scale-100 z-10"
            : "opacity-0 -rotate-90 scale-50 z-0"
        }`}
      >
        <CloseIcon className="w-6 h-6 text-accent" />
      </div>
    </button>
  );
}
export default Hamburger;
