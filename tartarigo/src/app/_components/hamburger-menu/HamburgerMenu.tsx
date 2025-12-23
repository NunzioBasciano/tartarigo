import { NAV_LINKS } from "@/app/constant/navigation";
import NavigationItem from "../NavigationItem";
import Link from "next/link";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  headerHeight: number;
}

function HamburgerMenu({ isOpen, onClose, headerHeight }: HamburgerMenuProps) {
  return (
    <div
      className={`
        fixed right-0  bg-secondary shadow-2xl transition-all duration-500 ease-in-out transform-gpu z-100 
        top-[${headerHeight}px]
        ${
          isOpen
            ? "w-full translate-x-0 opacity-100 visible"
            : "w-0 translate-x-full opacity-0 invisible"
        }
      `}
      style={{
        height: `calc(100% - ${headerHeight}px)`,
        backfaceVisibility: "hidden",
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      {/* Contenitore interno: w-screen impedisce al testo di deformarsi durante l'animazione della larghezza */}
      <div className="w-screen p-10  overflow-y-auto overflow-x-hidden text-center">
        <nav aria-label="Navigazione mobile">
          <ul className="flex flex-col list-none ">
            {NAV_LINKS.map((link, i) => (
              <li
                key={i}
                className="border-b border-primary/10 last:border-none"
              >
                <div className="py-6 text-[0.75rem]">
                  <NavigationItem
                    // IMPORTANTE: il nome della prop deve essere lo stesso usato in NavigationItem (es. onClick o onclick)
                    onclick={onClose}
                    href={link.href}
                    label={link.label}
                    color="text-primary"
                  />
                </div>
              </li>
            ))}
            <Link href="#prenota" className="btn-cta whitespace-nowrap">
              Prenota Ora
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerMenu;
