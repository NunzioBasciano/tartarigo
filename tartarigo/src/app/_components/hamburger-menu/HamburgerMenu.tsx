import { NAV_LINKS } from "@/app/constant/navigation";
import NavigationItem from "../NavigationItem";
import Link from "next/link";
import WhatsappIcon from "../icons/Whatsapp";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import GmailIcon from "../icons/Gmail";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  headerHeight: number;
}

function HamburgerMenu({ isOpen, onClose, headerHeight }: HamburgerMenuProps) {
  return (
    <div
      className={`
        fixed right-0 bg-[#1E1E1E] shadow-2xl transition-all duration-500 ease-in-out transform-gpu z-100 flex flex-col 
        ${
          isOpen
            ? "w-full translate-x-0 opacity-100 visible"
            : "w-0 translate-x-full opacity-0 invisible"
        }
      `}
      style={{
        /* Cambiato: uso dvh per precisione mobile e top esplicito */
        height: `calc(100dvh - ${headerHeight}px)`,
        top: `${headerHeight}px`,
        backfaceVisibility: "hidden",
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <div className="w-screen h-full overflow-y-auto overflow-x-hidden text-center flex flex-col">
        <nav aria-label="Navigazione mobile" className="pt-12 pb-12">
          <ul className="flex flex-col list-none gap-7.5">
            {/* ... i tuoi map dei NAV_LINKS ... */}
            {NAV_LINKS.map((link, i) => (
              <li
                key={i}
                className="border-b border-primary/10 last:border-none"
              >
                <NavigationItem
                  onclick={onClose}
                  href={link.href}
                  label={link.label}
                />
              </li>
            ))}
          </ul>
        </nav>

        <nav
          aria-label="Social media"
          className="mt-auto pb-12 flex items-center mx-8"
        >
          <div className="h-px bg-white w-full"></div>
          <ul className="flex gap-4 px-10">
            <li>
              <Link
                href="https://wa.me/tuonumero"
                target="_blank"
                rel="noopener"
                className="inline-flex flex-col items-center gap-2"
              >
                <WhatsappIcon className="w-8 h-8" color="#fff" />
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/tuonumero"
                target="_blank"
                rel="noopener"
                className="inline-flex flex-col items-center gap-2"
              >
                <FacebookIcon className="w-8 h-8" color="#fff" />
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/tuonumero"
                target="_blank"
                rel="noopener"
                className="inline-flex flex-col items-center gap-2"
              >
                <InstagramIcon className="w-8 h-8" color="#fff" />
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/tuonumero"
                target="_blank"
                rel="noopener"
                className="inline-flex flex-col items-center gap-2"
              >
                <GmailIcon className="w-8 h-8" color="#fff" />
              </Link>
            </li>
          </ul>
          <div className="h-px bg-white w-full"></div>
        </nav>
      </div>
    </div>
  );
}
export default HamburgerMenu;
