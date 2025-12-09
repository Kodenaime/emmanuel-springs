"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-slate-500 mb-8">
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-brand-green">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-navy font-medium capitalize">
                  {segment.replace("-", " ")}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-brand-green capitalize"
                >
                  {segment.replace("-", " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
