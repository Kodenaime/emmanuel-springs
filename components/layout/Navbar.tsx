"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Missions", href: "/missions" },
  { label: "Farm Gate", href: "/farm" },
  { label: "Travels", href: "/travels" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream border-b border-slate-200">
      <div className="mx-auto flex items-center justify-between max-w-7xl px-4 py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-navy">
          Emmanuel Springs
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-navy hover:text-brand-green transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* Donate Button */}
          <Link
            href="/donate"
            className="ml-4 rounded-full bg-brand-red px-5 py-2 text-white font-semibold hover:opacity-90 transition"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-navy"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-cream border-t border-slate-200",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-navy font-medium hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-full bg-brand-red px-5 py-2 text-white font-semibold"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
