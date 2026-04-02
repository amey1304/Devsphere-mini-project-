"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community Builds" },
  { href: "/promote-event", label: "Promote Event" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(8,12,16,0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border)",
      padding: "0 1.5rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 800,
          }}>D</div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>
            Devsphere
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {LINKS.map(l => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} style={{
                padding: "6px 14px", borderRadius: "var(--radius-pill)",
                fontSize: 14, fontWeight: active ? 500 : 400,
                color: active ? "var(--accent)" : "var(--text-2)",
                background: active ? "var(--accent-glow)" : "transparent",
                border: active ? "1px solid rgba(0,212,170,0.2)" : "1px solid transparent",
                transition: "all 0.15s",
              }}>
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "var(--text)", fontSize: 22, display: "none" }}
          className="hamburger"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "1rem 0",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 16px", borderRadius: "var(--radius-sm)",
                fontSize: 15, color: pathname === l.href ? "var(--accent)" : "var(--text-2)",
                background: pathname === l.href ? "var(--accent-glow)" : "transparent",
              }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
