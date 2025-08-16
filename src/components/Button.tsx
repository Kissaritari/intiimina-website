import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({ href, onClick, children, className = '', external = false }: ButtonProps) {
  const baseStyles = "inline-block bg-[#b4a4f0] text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all text-shadow-sm";
  const combinedStyles = `${baseStyles} ${className}`;

  if (external && href) {
    return (
      <a href={href} className={combinedStyles} onClick={onClick}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
}
