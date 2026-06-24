import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-slate-700 transition hover:text-[#F97316]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}