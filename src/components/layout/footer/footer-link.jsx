import Link from "next/link";

export const FooterLink = ({ href = "#", children }) => (
  <li>
    <Link href={href} className="text-zinc-500 hover:text-zinc-100 text-sm transition-colors duration-150">
      {children}
    </Link>
  </li>
);