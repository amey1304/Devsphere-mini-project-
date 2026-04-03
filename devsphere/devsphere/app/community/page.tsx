"use client";
import Link from "next/link";

const STATS = [
  { num: "2,500+", label: "Developers Connected" },
  { num: "150+",   label: "Colleges Involved" },
  { num: "800+",   label: "Projects Shared" },
  { num: "200+",   label: "Events Promoted" },
];

const FEATURES = [
  { icon: "⚡", title: "Share Projects", desc: "Submit your projects and find collaborators from around the world. Build together with developers who share your vision." },
  { icon: "🎯", title: "Discover Events", desc: "Find hackathons, workshops, and competitions organised by colleges and communities. Learn, compete, and network." },
  { icon: "🛠️", title: "Community Builds", desc: "Explore monthly open-source projects. Contribute to real-world solutions and grow your portfolio." },
  { icon: "🌐", title: "Global Network", desc: "Connect with 2,500+ developers across 150+ colleges. Build lasting relationships and collaborations." },
];

const RECENT = [
  { icon: "🌿", title: "EcoTrack", category: "Open Source", stars: "2.1k" },
  { icon: "🤖", title: "AutoGrade AI", category: "AI/ML", stars: "870" },
  { icon: "🔧", title: "DevLaunch CLI", category: "DevTools", stars: "3.3k" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "7rem 1.5rem 5rem",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Glow orbs */}
        <div style={{
          position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 300, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,212,170,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="fade-up" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "var(--accent-glow)", border: "1px solid rgba(0,212,170,0.25)",
          borderRadius: "var(--radius-pill)", padding: "6px 16px",
          fontSize: 13, color: "var(--accent)", marginBottom: "1.5rem",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse-glow 2s infinite" }} />
          2,500+ developers online now
        </div>

        <h1 className="fade-up fade-up-1" style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          marginBottom: "1.5rem",
        }}>
          Where Developers<br />
          <span style={{ color: "var(--accent)" }}>Build Together</span>
        </h1>

        <p className="fade-up fade-up-2" style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "var(--text-2)",
          maxWidth: 560, margin: "0 auto 2.5rem",
          lineHeight: 1.7,
        }}>
          Connect with developers worldwide, collaborate on innovative projects, and showcase your community builds. Discover events, find teammates, and grow together.
        </p>

        <div className="fade-up fade-up-3" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/projects" style={{
            padding: "12px 28px", borderRadius: "var(--radius-pill)",
            background: "var(--accent)", color: "#000",
            fontWeight: 600, fontSize: 15,
            transition: "opacity 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Explore Projects →
          </Link>
          <Link href="/events" style={{
            padding: "12px 28px", borderRadius: "var(--radius-pill)",
            background: "transparent", color: "var(--text)",
            border: "1px solid var(--border-hover)",
            fontWeight: 500, fontSize: 15,
            transition: "border-color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
          >
            View Events
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-2)",
        padding: "2.5rem 1.5rem",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem", textAlign: "center",
        }}>
          {STATS.map((s, i) => (
            <div key={i} className={`fade-up fade-up-${i + 1}`}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, color: "var(--accent)" }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
          fontWeight: 700, textAlign: "center", marginBottom: "0.75rem",
        }}>What You Can Do</h2>
        <p style={{ textAlign: "center", color: "var(--text-2)", marginBottom: "3rem", fontSize: 15 }}>
          Everything you need to grow as a developer
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "var(--radius)", padding: "1.75rem",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects Teaser */}
      <section style={{
        background: "var(--bg-2)", borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)", padding: "4rem 1.5rem",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem" }}>Trending Projects</h2>
            <Link href="/projects" style={{ fontSize: 14, color: "var(--accent)" }}>View all →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            {RECENT.map((p, i) => (
              <div key={i} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: "var(--radius)", padding: "1.25rem",
                display: "flex", alignItems: "center", gap: 14,
                transition: "border-color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <span style={{ fontSize: 28 }}>{p.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-2)" }}>{p.category}</div>
                </div>
                <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600 }}>⭐ {p.stars}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.02em",
        }}>Ready to Join the Community?</h2>
        <p style={{ color: "var(--text-2)", fontSize: 15, marginBottom: "2rem" }}>
          Start exploring projects, connecting with developers, and growing your network today.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/projects" style={{
            padding: "12px 28px", borderRadius: "var(--radius-pill)",
            background: "var(--accent)", color: "#000", fontWeight: 600, fontSize: 15,
          }}>Browse Projects</Link>
          <Link href="/promote-event" style={{
            padding: "12px 28px", borderRadius: "var(--radius-pill)",
            border: "1px solid var(--border-hover)", color: "var(--text)", fontWeight: 500, fontSize: 15,
          }}>Promote Your Event</Link>
        </div>
      </section>
    </div>
  );
}
