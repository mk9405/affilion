"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Grid2x2, Phone, Info, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Header2() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Categories", href: "/categories", icon: Grid2x2 },
    { name: "Contact", href: "/contact-us", icon: Phone },
    { name: "About", href: "/about-us", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Affilion-logo1.png"
            alt="Logo"
            width={140}
            height={50}
            className="h-auto w-32 sm:w-36"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full bg-orange-50 p-2 shadow-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
                ${
                  active
                    ? "bg-orange-500 text-white shadow"
                    : "text-gray-700 hover:bg-orange-500 hover:text-white"
                }`}
              >
                <Icon size={18} className="group-hover:scale-110 transition" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 hover:bg-gray-100"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaFacebook color="orange" size={24} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaInstagram color="orange" size={24} />
          </Link>
          </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 shadow">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition
                  ${
                    active
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}