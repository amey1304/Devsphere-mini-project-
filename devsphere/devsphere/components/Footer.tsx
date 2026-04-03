"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--bg-2)",
      padding: "3rem 1.5rem 2rem",
      marginTop: "5rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
          marginBottom: "2.5rem",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>
              Devsphere
            </div>
            <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 220 }}>
              Connect with developers worldwide, collaborate on projects, and grow together.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Platform</p>
            {[["Projects", "/projects"], ["Events", "/events"], ["Community Builds", "/community"], ["Promote Event", "/promote-event"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: "block", fontSize: 14, color: "var(--text-2)", marginBottom: 8, transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
              >{label}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Community</p>
            {["GitHub", "Discord", "Twitter / X", "LinkedIn"].map(s => (
              <a key={s} href="#" style={{ display: "block", fontSize: 14, color: "var(--text-2)", marginBottom: 8, transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
              >{s}</a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Stats</p>
            {[["2,500+", "Developers"], ["150+", "Colleges"], ["800+", "Projects"], ["200+", "Events"]].map(([num, lbl]) => (
              <div key={lbl} style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)", fontFamily: "var(--font-display)" }}>{num}</span>
                <span style={{ fontSize: 13, color: "var(--text-2)" }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: 13, color: "var(--text-3)" }}>© 2026 Devsphere. Built for developers, by developers.</p>
          <p style={{ fontSize: 13, color: "var(--text-3)" }}>Chennai, India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
