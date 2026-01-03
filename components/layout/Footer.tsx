import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            EMMANUEL SPRINGS MISSIONS AND DEVELOPMENT FOUNDATION
          </h3>
          <p className="text-sm leading-relaxed">
            Raising hope, restoring lives, and serving communities through
            compassion, missions, and empowerment.
          </p>
          <div className="flex gap-4 mt-6">
             <Link 
              href="https://youtube.com/@chaplainpriscillaololadeyusuf?si=VeDp9QAq4Mh2stQO" 
              className="text-white hover:text-blue-500 transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.facebook.com/share/p/1G8VGVayaj/" 
              className="text-white hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.instagram.com/transformingcommunities4life?igsh=MTJzdzIydnFrMzNxZg==" 
              className="text-white hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.tiktok.com/@user7599526529361?_r=1&_t=ZS-92IIZ4BhjBH" 
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Tiktok"
            >
              <FaTiktok className="w-5 h-5" />
            </Link>
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className=" text-sm flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/programs/missions">Missions</Link>
            <Link href="/programs/farm">Farmgate</Link>
            <Link href="/programs/travels">Travels</Link>
            <Link href="/resources">Resources</Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <div className="flex flex-col text-sm">
            <a href="tel:+2348126476098">Phone: +234 8126476098</a>
            <a href="mailto:emmanuelsprings4life@gmail.com">Email: emmanuelsprings4life@gmail.com</a>
            <p>Address: Challenge Expressway, Ibadan, Nigeria.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} EMMANUEL SPRINGS MISSIONS AND DEVELOPMENT FOUNDATION. All rights reserved.
      </div>
    </footer>
  );
}
