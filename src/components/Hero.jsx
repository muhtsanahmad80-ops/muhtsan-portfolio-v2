"use client";
import { useEffect, useRef } from "react";
import { personalInfo, stats } from "@/data/portfolioData";

export default function Hero({ navigate }) {
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { width, height } = el.getBoundingClientRect();
      const x = (e.clientX / width - 0.5) * 28;
      const y = (e.clientY / height - 0.5) * 28;
      el.querySelector(".o1")?.style && (el.querySelector(".o1").style.transform = `translate(${x * .4}px,${y * .4}px)`);
      el.querySelector(".o2")?.style && (el.querySelector(".o2").style.transform = `translate(${-x * .3}px,${-y * .3}px)`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden dot-pattern" style={{ paddingTop: "88px", paddingBottom: "40px", paddingLeft: "24px", paddingRight: "24px" }}>
      {/* Orbs */}
      <div className="orb o1" style={{ width: "540px", height: "540px", background: "radial-gradient(circle,#7c3aed,transparent 70%)", top: "-160px", left: "-80px", animation: "float 9s ease-in-out infinite" }} />
      <div className="orb o2" style={{ width: "460px", height: "460px", background: "radial-gradient(circle,#2563eb,transparent 70%)", top: "-80px", right: "-80px", animation: "float 9s ease-in-out 3s infinite" }} />
      <div className="orb" style={{ width: "340px", height: "340px", background: "radial-gradient(circle,#06b6d4,transparent 70%)", bottom: "-60px", right: "22%", animation: "float 9s ease-in-out 6s infinite" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "600px", height: "600px", borderRadius: "50%", opacity: ".04", background: "conic-gradient(from 0deg,#8b5cf6,#3b82f6,#06b6d4,#8b5cf6)", animation: "spin-slow 28s linear infinite" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div style={{ animation: "fadeInUp .8s ease forwards" }}>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase" style={{ background: "rgba(139,92,246,.1)", border: "1px solid rgba(139,92,246,.3)", color: "#a78bfa" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              ✦ Available for Projects
            </div>

            <h1 className="mb-3" style={{ fontSize: "clamp(2.6rem,5.5vw,4rem)", fontWeight: 800, lineHeight: 1.08, fontFamily: "var(--font-heading)" }}>
              Hi, I'm <span className="gradient-text">Muhtsan Ahmad</span>
            </h1>
            <h2 className="mb-5 font-medium" style={{ fontSize: "clamp(1rem,2.2vw,1.3rem)", color: "var(--muted)" }}>
              SEO Specialist &amp; <span className="gradient-text-c">Digital Marketing Expert</span>
            </h2>
            <p className="mb-7 leading-relaxed" style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "480px" }}>
              With <strong style={{ color: "#c4b5fd" }}>6+ years of experience</strong>, I drive organic growth through data-driven SEO strategies. From technical audits to full-funnel digital marketing — helping businesses rank, convert, and scale across{" "}
              <strong style={{ color: "var(--text)" }}>50+ industries</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="btn-primary" onClick={() => scrollTo("portfolio")}>View Case Studies →</button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-number">{s.value}{s.suffix}</div>
                  <div style={{ color: "var(--dim)", fontSize: ".7rem", fontWeight: 500, marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — card */}
          <div className="hidden lg:flex justify-center" style={{ animation: "fadeInUp .8s ease .3s forwards", opacity: 0 }}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl opacity-60" style={{ background: "conic-gradient(from 0deg,#8b5cf6,#3b82f6,#06b6d4,#8b5cf6)", animation: "spin-slow 8s linear infinite", borderRadius: "18px" }} />
              <div className="glass-card p-8 text-center relative z-10" style={{ minWidth: "300px" }}>
                <div className="w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl" style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)", fontFamily: "var(--font-heading)" }}>MA</div>
                <div className="font-bold text-white text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>Muhtsan Ahmad</div>
                <div className="mb-4 text-sm font-medium" style={{ color: "var(--purple)" }}>SEO Specialist</div>
                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  {["Technical SEO","Local SEO","E-commerce SEO","Google Ads","Meta Ads"].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl p-3" style={{ background: "rgba(139,92,246,.08)", border: "1px solid rgba(139,92,246,.2)" }}>
                  <span className="text-2xl">🏆</span>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>6+ Years</div>
                    <div style={{ color: "var(--dim)", fontSize: ".7rem" }}>Professional Experience</div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="glass-card absolute -right-24 top-8 p-3 flex items-center gap-2" style={{ minWidth: "120px", borderRadius: "11px" }}>
                <span className="text-lg">📈</span>
                <div><div className="text-white font-bold text-xs">100+ Clients</div><div style={{ color: "var(--dim)", fontSize: ".64rem" }}>Worldwide</div></div>
              </div>
              <div className="glass-card absolute -left-24 bottom-10 p-3 flex items-center gap-2" style={{ minWidth: "120px", borderRadius: "11px" }}>
                <span className="text-lg">🌍</span>
                <div><div className="text-white font-bold text-xs">50+ Industries</div><div style={{ color: "var(--dim)", fontSize: ".64rem" }}>Served</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills strip */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <p className="text-center text-xs font-medium mb-3" style={{ color: "var(--dim)" }}>Core Expertise</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {personalInfo.expertise.map((s) => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--muted)" }}>Scroll</span>
        <svg className="w-4 h-4" style={{ color: "var(--muted)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
