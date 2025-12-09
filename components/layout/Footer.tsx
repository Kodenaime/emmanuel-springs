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
            <li>Phone: +234 XXX XXX XXXX</li>
            <li>Email: info@emmanuelfoundation.org</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} Emmanuel Foundation. All rights reserved.
      </div>
    </footer>
  );
}
