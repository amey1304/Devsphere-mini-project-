import { COMMUNITY_BUILDS } from "@/lib/data";
import Link from "next/link";

export default function CommunityPage() {
  const [featured, ...rest] = COMMUNITY_BUILDS;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div className="fade-up" style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Community Builds
        </h1>
        <p style={{ color: "var(--text-2)", fontSize: 15, maxWidth: 560 }}>
          Every month, the Devsphere community comes together to build one open-source project from scratch. Contribute, learn, and grow.
        </p>
      </div>

      {/* Featured — this month */}
      <div className="fade-up fade-up-1" style={{
        background: "linear-gradient(135deg, rgba(0,212,170,0.06), rgba(0,102,255,0.04))",
        border: "1px solid rgba(0,212,170,0.25)",
        borderRadius: "var(--radius)", padding: "2rem",
        marginBottom: "2.5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,212,170,0.08), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
          ✦ {featured.month} — Build of the Month
        </div>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ fontSize: 52 }}>{featured.icon}</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.8rem", marginBottom: 8 }}>{featured.title}</h2>
            <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 14 }}>{featured.desc}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {featured.tags.map(t => (
                <span key={t} style={{
                  fontSize: 12, padding: "3px 10px", borderRadius: 4,
                  background: "var(--bg-3)", color: "var(--text-2)", border: "1px solid var(--border)",
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
              {[
                [`👥 ${featured.contributors}`, "contributors"],
                [`🏫 ${featured.colleges}`, "colleges"],
                [`⭐ ${(featured.stars / 1000).toFixed(1)}k`, "stars"],
              ].map(([num, lbl]) => (
                <div key={lbl}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--accent)" }}>{num}</span>
                  <span style={{ fontSize: 12, color: "var(--text-2)", marginLeft: 4 }}>{lbl}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a href={featured.demo} style={{
                padding: "9px 20px", borderRadius: "var(--radius-pill)",
                background: "var(--accent)", color: "#000", fontWeight: 600, fontSize: 14,
              }}>View Demo →</a>
              <a href={featured.github} style={{
                padding: "9px 20px", borderRadius: "var(--radius-pill)",
                border: "1px solid var(--border-hover)", color: "var(--text)", fontSize: 14,
              }}>GitHub ↗</a>
            </div>
          </div>
        </div>
      </div>

      {/* Past builds */}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, marginBottom: "1.25rem" }}>Previous Builds</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
        {rest.map((build, i) => (
          <div key={i} style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: "var(--radius)", padding: "1.5rem",
            display: "flex", flexDirection: "column", gap: 10,
            transition: "border-color 0.15s, transform 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 30 }}>{build.icon}</span>
              <span style={{ fontSize: 11, color: "var(--text-3)" }}>{build.month}</span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17 }}>{build.title}</div>
            <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{build.desc}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {build.tags.slice(0, 3).map(t => (
                <span key={t} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "var(--bg-3)", color: "var(--text-2)", border: "1px solid var(--border)" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--border)", marginTop: "auto" }}>
              <div style={{ display: "flex", gap: 14 }}>
                <span style={{ fontSize: 12, color: "var(--text-2)" }}>👥 {build.contributors}</span>
                <span style={{ fontSize: 12, color: "var(--text-2)" }}>⭐ {build.stars >= 1000 ? (build.stars / 1000).toFixed(1) + "k" : build.stars}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <a href={build.github} style={{ fontSize: 12, color: "var(--accent)" }}>GitHub ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div style={{ marginTop: "4rem", padding: "2.5rem", background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, marginBottom: "1.5rem", textAlign: "center" }}>How Community Builds Work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
          {[
            ["1", "Project Announced", "A new open-source project idea is announced at the start of each month."],
            ["2", "Teams Form", "Developers from across colleges join and self-organise into workstreams."],
            ["3", "Build Together", "Teams build over 4 weeks with weekly check-ins and code reviews."],
            ["4", "Showcase", "The finished project is presented to the community and published publicly."],
          ].map(([num, title, desc]) => (
            <div key={num} style={{ textAlign: "center" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "var(--accent-glow)", border: "1px solid rgba(0,212,170,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16,
                color: "var(--accent)", margin: "0 auto 10px",
              }}>{num}</div>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
