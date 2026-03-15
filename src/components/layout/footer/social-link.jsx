import Link from "next/link";

export const SocialIcon = ({ label, children }) => (
  <Link
    href="#"
    className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-800 text-zinc-500 hover:text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-150"
  >
    {children}
  </Link>
);
