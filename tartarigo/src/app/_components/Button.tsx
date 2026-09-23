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
    "inline-flex items-center justify-center whitespace-nowrap px-[29px] py-[14px] transition-all duration-300 bg-accent text-white text-[12px] leading-[12px] rounded-[4px] font-[700] uppercase tracking-[1px] w-full md:h-12 md:text-[14px] md:leading-4 lg:text-[16px] lg:leading-5 lg:h-12 lg:w-fit";
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
