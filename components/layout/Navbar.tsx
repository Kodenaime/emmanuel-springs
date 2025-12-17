"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream border-b border-slate-200">
      <div className="mx-auto flex items-center justify-between max-w-7xl px-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-navy">
          <Image src="/logo.png" alt="Emmanuel Springs" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative">

          <Link href="/" className="text-navy font-medium hover:text-brand-green">
            Home
          </Link>

          {/* Programs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >
            <button className="flex items-center gap-1 text-navy font-medium hover:text-brand-green transition">
              Programs <ChevronDown size={18} />
            </button>

            {programOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48 overflow-hidden">
                <Link
                  href="/programs/missions"
                  className="block px-4 py-3 hover:bg-slate-100"
                >
                  Missions
                </Link>
                <Link
                  href="/programs/farm"
                  className="block px-4 py-3 hover:bg-slate-100"
                >
                  Farm Gate
                </Link>
                <Link
                  href="/programs/travels"
                  className="block px-4 py-3 hover:bg-slate-100"
                >
                  Travels
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects" className="text-navy font-medium hover:text-brand-green">
            Projects
          </Link>

          <Link href="/resources" className="text-navy font-medium hover:text-brand-green">
            Resources
          </Link>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="ml-4 rounded bg-green-700 px-5 py-2 text-white font-semibold hover:bg-transparent hover:text-green-700 hover:border-green-700 border transition"
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
          open ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="flex flex-col p-4 gap-4">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>

          {/* Programs - mobile */}
          <div>
            <button
              onClick={() => setProgramOpen(!programOpen)}
              className="flex items-center gap-2 font-medium text-navy"
            >
              Programs <ChevronDown size={18} />
            </button>

            {programOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-2 text-slate-700">
                <Link href="/programs/missions" onClick={() => setOpen(false)}>
                  Missions
                </Link>
                <Link href="/programs/farm" onClick={() => setOpen(false)}>
                  Farm Gate
                </Link>
                <Link href="/programs/travels" onClick={() => setOpen(false)}>
                  Travels
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-full bg-brand-red px-5 py-2 text-white font-semibold"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
