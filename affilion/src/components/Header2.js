"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Grid2x2, Phone, Info } from "lucide-react";

export default function Header2() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Shop",
      href: "/shop",
      icon: ShoppingBag,
    },
    {
      name: "Categories",
      href: "/categories",
      icon: Grid2x2,
    },
    {
      name: "Contact",
      href: "/contact-us",
      icon: Phone,
    },
    {
      name: "About",
      href: "/about-us",
      icon: Info,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-3">

        <nav className="flex justify-center">

          <div className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-orange-50 p-2 shadow-sm">

            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300
                    ${
                      active
                        ? "bg-orange-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-orange-500 hover:text-white"
                    }`}
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.name}
                </Link>
              );
            })}

          </div>

        </nav>
      </div>
    </header>
  );
}