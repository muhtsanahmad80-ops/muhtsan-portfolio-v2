"use client";
import { useState, useEffect } from "react";

const links = ["Home","About","Services","Portfolio","Blog"];

export default function Navbar({ navigate, currentView }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (currentView !== "main") return;
      const ids = ["home","about","services","portfolio","stats"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(links[i] || "Home");
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentView]);

  useEffect(() => {
    if (currentView === "blog") setActive("Blog");
    else if (currentView === "post") setActive("Blog");
    else setActive("Home");
  }, [currentView]);

  const handleClick = (label) => {
    setMobileOpen(false);
    if (label === "Blog") { navigate("blog"); return; }
    if (currentView !== "main") { navigate("main", label.toLowerCase()); return; }
    const el = document.getElementById(label.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { background: "rgba(7,11,20,0.94)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(139,92,246,0.18)", boxShadow: "0 4px 24px rgba(0,0,0,0.35)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => navigate("main")} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)", fontFamily: "var(--font-heading)" }}>MA</div>
            <span className="font-bold text-white text-sm md:text-base hidden sm:block" style={{ fontFamily: "var(--font-heading)" }}>
              Muhtsan<span className="gradient-text"> Ahmad</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <button key={l} onClick={() => handleClick(l)}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{ color: active === l ? "#fff" : "var(--muted)" }}
              >
                {l}
                <span className="absolute -bottom-0.5 left-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"
                  style={{ width: active === l ? "100%" : "0" }} />
              </button>
            ))}
          </div>

          {/* hamburger */}
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
              <span className="block w-5 h-0.5 bg-slate-300 rounded transition-all duration-300" style={{ transform: mobileOpen ? "rotate(45deg) translate(0,7px)" : "" }} />
              <span className="block w-5 h-0.5 bg-slate-300 rounded transition-all duration-300" style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span className="block w-5 h-0.5 bg-slate-300 rounded transition-all duration-300" style={{ transform: mobileOpen ? "rotate(-45deg) translate(0,-7px)" : "" }} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: mobileOpen ? "400px" : "0", opacity: mobileOpen ? 1 : 0, background: "rgba(7,11,20,0.98)", backdropFilter: "blur(20px)", borderBottom: mobileOpen ? "1px solid rgba(139,92,246,0.15)" : "none" }}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button key={l} onClick={() => handleClick(l)} className="text-left py-2.5 text-sm font-medium border-b border-white/5 transition-colors" style={{ color: active === l ? "#c4b5fd" : "var(--muted)" }}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
