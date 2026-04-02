"use client";
import { useState } from "react";

const inputStyle = {
  width: "100%", background: "var(--bg-card)",
  border: "1px solid var(--border)", borderRadius: "var(--radius-sm)",
  padding: "10px 14px", color: "var(--text)", fontSize: 14,
  outline: "none", transition: "border-color 0.15s",
  fontFamily: "var(--font-body)",
};

const labelStyle = {
  display: "block", fontSize: 13, fontWeight: 500,
  color: "var(--text-2)", marginBottom: 6,
};

export default function PromoteEventPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    eventName: "", org: "", type: "", date: "", location: "",
    mode: "", prize: "", spots: "", desc: "", link: "", email: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--accent)");
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--border)");

  if (submitted) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: "1rem" }}>🎉</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", marginBottom: 12 }}>Event Submitted!</h1>
        <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.7, marginBottom: "2rem" }}>
          Your event <strong style={{ color: "var(--text)" }}>{form.eventName}</strong> has been submitted for review.
          We'll reach out to <strong style={{ color: "var(--accent)" }}>{form.email}</strong> within 24 hours.
        </p>
        <button onClick={() => setSubmitted(false)} style={{
          padding: "10px 24px", borderRadius: "var(--radius-pill)",
          background: "var(--accent)", color: "#000", fontWeight: 600, fontSize: 14, border: "none",
        }}>Submit Another Event</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div className="fade-up" style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Promote Your Event
        </h1>
        <p style={{ color: "var(--text-2)", fontSize: 15 }}>
          Reach 2,500+ developers across 150+ colleges. Fill out the form and we'll feature your event.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Event Name *</label>
            <input required style={inputStyle} placeholder="HackSphere 2026" value={form.eventName} onChange={set("eventName")} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
          <div>
            <label style={labelStyle}>Organising College / Org *</label>
            <input required style={inputStyle} placeholder="IIT Madras" value={form.org} onChange={set("org")} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Event Type *</label>
            <select required style={{ ...inputStyle, appearance: "none" }} value={form.type} onChange={set("type")} onFocus={focusStyle} onBlur={blurStyle}>
              <option value="">Select…</option>
              <option>Hackathon</option>
              <option>Workshop</option>
              <option>Competition</option>
              <option>Webinar</option>
              <option>Conference</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Date *</label>
            <input required type="date" style={inputStyle} value={form.date} onChange={set("date")} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
          <div>
            <label style={labelStyle}>Mode *</label>
            <select required style={{ ...inputStyle, appearance: "none" }} value={form.mode} onChange={set("mode")} onFocus={focusStyle} onBlur={blurStyle}>
              <option value="">Select…</option>
              <option>Online</option>
              <option>In-person</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Location / City</label>
            <input style={inputStyle} placeholder="Chennai / Online" value={form.location} onChange={set("location")} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
          <div>
            <label style={labelStyle}>Prize Pool</label>
            <input style={inputStyle} placeholder="₹5,00,000 (leave blank if none)" value={form.prize} onChange={set("prize")} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Available Spots</label>
            <input style={inputStyle} placeholder="e.g. 200 teams / Unlimited" value={form.spots} onChange={set("spots")} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
          <div>
            <label style={labelStyle}>Registration / Event Link</label>
            <input type="url" style={inputStyle} placeholder="https://..." value={form.link} onChange={set("link")} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Event Description *</label>
          <textarea required rows={4} style={{ ...inputStyle, resize: "vertical" }}
            placeholder="Tell developers what your event is about, who it's for, and what they'll gain..."
            value={form.desc} onChange={set("desc")} onFocus={focusStyle} onBlur={blurStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Your Contact Email *</label>
          <input required type="email" style={inputStyle} placeholder="you@college.edu" value={form.email} onChange={set("email")} onFocus={focusStyle} onBlur={blurStyle} />
        </div>

        {/* Info box */}
        <div style={{
          padding: "1rem 1.25rem", borderRadius: "var(--radius-sm)",
          background: "var(--accent-glow)", border: "1px solid rgba(0,212,170,0.2)",
          fontSize: 13, color: "var(--text-2)", lineHeight: 1.7,
        }}>
          ✦ Your event will be reviewed within <strong style={{ color: "var(--accent)" }}>24 hours</strong>. Once approved it'll be featured on the Events page and shared with our community of 2,500+ developers.
        </div>

        <button type="submit" style={{
          padding: "13px", borderRadius: "var(--radius-pill)",
          background: "var(--accent)", color: "#000",
          fontWeight: 700, fontSize: 16, border: "none",
          cursor: "pointer", transition: "opacity 0.15s",
          fontFamily: "var(--font-display)",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Submit Event →
        </button>
      </form>
    </div>
  );
}
