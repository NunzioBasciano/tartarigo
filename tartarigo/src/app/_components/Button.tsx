import Link from "next/link";

interface ButtonProps {
  href?: string;
  label: string;
  onClick?: () => void;
  color?: string;
  textSize?: string;
  textWeight?: string;
  isLink?: boolean;
  className?: string; // <--- Aggiungi questa riga
}

export default function Button(props: ButtonProps) {
  const {
    label,
    onClick,
    color,
    textSize,
    textWeight,
    isLink,
    href,
    className,
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap px-8 py-4 transition-all duration-300 bg-accent text-white text-[12px] leading-3 border border-accent h-10 font-normal uppercase tracking-[2.4px] md:h-12 md:text-[14px] md:leading-4 lg:text-[16px] lg:leading-5 lg:h-12";
  // Combina le classi base con quelle esterne (className)
  const combinedClasses = `${baseClasses} ${className || ""}`;

  return isLink ? (
    <Link href={href || "#"} className={combinedClasses} onClick={onClick}>
      {label}
    </Link>
  ) : (
    <button type="button" className={combinedClasses} onClick={onClick}>
      {label}
    </button>
  );
}
