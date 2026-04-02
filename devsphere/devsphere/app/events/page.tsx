"use client";
import { useState } from "react";
import { EVENTS } from "@/lib/data";
import Link from "next/link";

const FILTERS = ["All", "Hackathon", "Workshop", "Competition", "Webinar"];

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  Hackathon:   { bg: "rgba(255,71,87,0.12)",  color: "#ff4757" },
  Workshop:    { bg: "rgba(0,102,255,0.12)",   color: "#4d94ff" },
  Competition: { bg: "rgba(255,165,2,0.12)",   color: "#ffa502" },
  Webinar:     { bg: "rgba(0,212,170,0.12)",   color: "#00d4aa" },
};

const MODE_ICON: Record<string, string> = {
  Online: "🌐", Hybrid: "🔀", "In-person": "📍",
};

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const match = (e: typeof EVENTS[0]) => filter === "All" || e.type === filter;
  const upcoming = EVENTS.filter(e => e.upcoming && match(e));
  const past = EVENTS.filter(e => !e.upcoming && match(e));

  const EventCard = ({ event }: { event: typeof EVENTS[0] }) => {
    const tc = TYPE_COLORS[event.type] || TYPE_COLORS.Workshop;
    return (
      <div style={{
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: "var(--radius)", padding: "1.25rem",
        display: "flex", gap: "1.25rem",
        transition: "border-color 0.15s",
        opacity: event.upcoming ? 1 : 0.6,
      }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
      >
        {/* Date */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", width: 56, flexShrink: 0,
          borderRadius: "var(--radius-sm)", border: "1px solid var(--border)",
          padding: "8px 4px", background: "var(--bg-2)",
        }}>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "var(--accent)", letterSpacing: "0.08em" }}>{event.month}</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, lineHeight: 1, color: "var(--text)" }}>{event.day}</span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{event.title}</div>
              <div style={{ fontSize: 12, color: "var(--text-2)" }}>{event.org}</div>
            </div>
            <span style={{
              fontSize: 11, padding: "3px 10px", borderRadius: "var(--radius-pill)",
              background: tc.bg, color: tc.color, fontWeight: 600, whiteSpace: "nowrap",
            }}>{event.type}</span>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "var(--text-2)" }}>{MODE_ICON[event.mode]} {event.mode}</span>
            <span style={{ fontSize: 12, color: "var(--text-2)" }}>📍 {event.location}</span>
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            paddingTop: 8, borderTop: "1px solid var(--border)",
          }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {event.prize && (
                <span style={{
                  fontSize: 12, fontWeight: 600, color: "#ffa502",
                  background: "rgba(255,165,2,0.12)", padding: "2px 10px", borderRadius: "var(--radius-pill)",
                }}>🏆 {event.prize}</span>
              )}
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>{event.spots}</span>
            </div>
            {event.upcoming ? (
              <Link href="/promote-event" style={{
                fontSize: 12, padding: "5px 14px", borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-hover)", color: "var(--text)",
                transition: "border-color 0.15s",
              }}>Register →</Link>
            ) : (
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>Ended</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div className="fade-up" style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Events & Hackathons
        </h1>
        <p style={{ color: "var(--text-2)", fontSize: 15 }}>
          Find hackathons, workshops, and competitions organised by colleges and communities
        </p>
      </div>

      {/* Filters */}
      <div className="fade-up fade-up-1" style={{ display: "flex", gap: 6, marginBottom: "2rem", flexWrap: "wrap" }}>
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

      {/* Upcoming */}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
        Upcoming <span style={{ fontSize: 13, fontWeight: 400, color: "var(--accent)", fontFamily: "var(--font-body)" }}>{upcoming.length} events</span>
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "2.5rem" }}>
        {upcoming.length > 0
          ? upcoming.map((e, i) => <EventCard key={i} event={e} />)
          : <p style={{ color: "var(--text-3)", fontSize: 14, padding: "1rem 0" }}>No upcoming events for this category.</p>
        }
      </div>

      {/* Past */}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
        Past Events <span style={{ fontSize: 13, fontWeight: 400, color: "var(--text-3)", fontFamily: "var(--font-body)" }}>{past.length} events</span>
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {past.length > 0
          ? past.map((e, i) => <EventCard key={i} event={e} />)
          : <p style={{ color: "var(--text-3)", fontSize: 14, padding: "1rem 0" }}>No past events for this category.</p>
        }
      </div>

      {/* Promote CTA */}
      <div style={{
        marginTop: "3rem", padding: "2rem",
        background: "linear-gradient(135deg, rgba(0,212,170,0.08), rgba(0,102,255,0.06))",
        border: "1px solid rgba(0,212,170,0.2)",
        borderRadius: "var(--radius)", textAlign: "center",
      }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Organising an event?</h3>
        <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: "1.25rem" }}>Promote your hackathon, workshop, or competition to 2,500+ developers.</p>
        <Link href="/promote-event" style={{
          padding: "10px 24px", borderRadius: "var(--radius-pill)",
          background: "var(--accent)", color: "#000", fontWeight: 600, fontSize: 14,
        }}>Promote Your Event →</Link>
      </div>
    </div>
  );
}
