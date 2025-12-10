import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Emmanuel Foundation
          </h3>
          <p className="text-sm leading-relaxed">
            Raising hope, restoring lives, and serving communities through
            compassion, missions, and empowerment.
          </p>
          <div className="flex gap-4 mt-6">
            <Link 
              href="https://www.facebook.com/EmmanuelSprings4Life/" 
              className="text-white hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.instagram.com/EmmanuelSprings4Life/" 
              className="text-white hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.twitter.com/EmmanuelSprings4Life/" 
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Missions</li>
            <li>Farm Gate</li>
            <li>Travels</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <a href="tel:+2348126476098">Phone: +234 8126476098</a>
            <a href="mailto:emmanuelsprings4life@gmail.com">Email: emmanuelsprings4life@gmail.com</a>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} Emmanuel Foundation. All rights reserved.
      </div>
    </footer>
  );
}
