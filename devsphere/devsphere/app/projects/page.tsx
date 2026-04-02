"use client";
import { useState } from "react";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["All", "AI/ML", "Web", "Mobile", "DevTools", "Open Source"];
const AVATAR_BG = ["#00d4aa33", "#0066ff33", "#ff475733", "#ffa50233", "#a855f733", "#22d3ee33"];
const AVATAR_COLOR = ["#00d4aa", "#0066ff", "#ff4757", "#ffa502", "#a855f7", "#22d3ee"];

function formatStars(n: number) {
  return n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n);
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PROJECTS.filter(p => {
    const matchCat = filter === "All" || p.category === filter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Community Projects
        </h1>
        <p style={{ color: "var(--text-2)", fontSize: 15 }}>
          Discover and collaborate on amazing projects from developers across 150+ colleges
        </p>
      </div>

      {/* Featured banner */}
      <div className="fade-up fade-up-1" style={{
        background: "linear-gradient(135deg, rgba(0,212,170,0.08), rgba(0,102,255,0.06))",
        border: "1px solid rgba(0,212,170,0.2)",
        borderRadius: "var(--radius)", padding: "1.5rem",
        marginBottom: "2rem",
        display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap",
      }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
            🚀 Community Build of the Month
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, marginBottom: 4 }}>EcoTrack</div>
          <div style={{ fontSize: 14, color: "var(--text-2)" }}>
            Open-source carbon footprint calculator — 14 contributors from 6 colleges
          </div>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {[["14", "Contributors"], ["2.1k", "Stars"], ["Open", "Status"]].map(([num, lbl]) => (
            <div key={lbl} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--accent)" }}>{num}</div>
              <div style={{ fontSize: 11, color: "var(--text-2)" }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search + Filters */}
      <div className="fade-up fade-up-2" style={{ display: "flex", gap: 12, marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search projects, tags..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)", padding: "8px 14px",
            color: "var(--text)", fontSize: 14, outline: "none",
            width: 240, transition: "border-color 0.15s",
          }}
          onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
          onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
        />
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "7px 16px", borderRadius: "var(--radius-pill)", fontSize: 13,
              border: "1px solid",
              borderColor: filter === f ? "var(--accent)" : "var(--border)",
              background: filter === f ? "var(--accent-glow)" : "transparent",
              color: filter === f ? "var(--accent)" : "var(--text-2)",
              transition: "all 0.15s",
            }}>{f}</button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: "1.25rem" }}>
        Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
        {filtered.map((p, i) => {
          const shown = Math.min(p.contributors, 4);
          const extra = p.contributors - shown;
          return (
            <div key={i} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "var(--radius)", padding: "1.25rem",
              display: "flex", flexDirection: "column", gap: 10,
              transition: "border-color 0.15s, transform 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ fontSize: 28 }}>{p.icon}</div>
                <span style={{
                  fontSize: 11, padding: "3px 10px", borderRadius: "var(--radius-pill)",
                  background: "var(--accent-glow)", color: "var(--accent)",
                  border: "1px solid rgba(0,212,170,0.2)", fontWeight: 500,
                }}>{p.category}</span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{p.desc}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: "2px 8px", borderRadius: 4,
                    background: "var(--bg-3)", color: "var(--text-2)",
                    border: "1px solid var(--border)",
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--border)", marginTop: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ display: "flex" }}>
                    {Array.from({ length: shown }).map((_, j) => (
                      <div key={j} style={{
                        width: 24, height: 24, borderRadius: "50%",
                        background: AVATAR_BG[j % AVATAR_BG.length],
                        border: `1.5px solid var(--bg-card)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, fontWeight: 700, color: AVATAR_COLOR[j % AVATAR_COLOR.length],
                        marginLeft: j === 0 ? 0 : -6,
                      }}>{String.fromCharCode(65 + j)}</div>
                    ))}
                    {extra > 0 && (
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%",
                        background: "var(--bg-3)", border: "1.5px solid var(--bg-card)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, color: "var(--text-2)", marginLeft: -6,
                      }}>+{extra}</div>
                    )}
                  </div>
                  <span style={{ fontSize: 12, color: "var(--text-3)" }}>{p.contributors} contributors</span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--text-2)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.status === "open" ? "var(--accent)" : "var(--amber)", display: "inline-block" }} />
                    {p.status === "open" ? "Open" : "Active"}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--text-2)" }}>⭐ {formatStars(p.stars)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-3)" }}>
          No projects found. Try a different search or filter.
        </div>
      )}
    </div>
  );
}
