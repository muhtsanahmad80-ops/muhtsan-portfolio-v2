"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import BlogAdmin from "@/components/BlogAdmin";

export default function Home() {
  const [view, setView] = useState("main");   // main | blog | post
  const [post, setPost] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);

  const navigate = (to, data = null) => {
    setView(to);
    if (to === "post") setPost(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    }, 100);
    return () => { clearTimeout(timer); obs.disconnect(); };
  }, [view]);

  // Back to top
  useEffect(() => {
    const btn = document.getElementById("back-to-top");
    const onScroll = () => btn?.classList.toggle("visible", window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar navigate={navigate} currentView={view} />

      {/* MAIN PORTFOLIO */}
      {view === "main" && (
        <main id="main-content">
          <Hero navigate={navigate} />
          <About />
          <Services />
          <CaseStudies />
          <Stats />
          <Contact />
        </main>
      )}

      {/* BLOG LISTING */}
      {view === "blog" && (
        <Blog navigate={navigate} onSelectPost={(p) => navigate("post", p)} />
      )}

      {/* SINGLE POST */}
      {view === "post" && post && (
        <BlogPost post={post} navigate={navigate} />
      )}

      <Footer navigate={navigate} />

      {/* Admin Panel */}
      <BlogAdmin open={adminOpen} onClose={() => setAdminOpen(false)} />

      {/* Admin trigger button (bottom-left) */}
      <button
        className="admin-trigger"
        onClick={() => setAdminOpen(true)}
        title="Blog Admin Panel"
        aria-label="Open Blog Admin"
      >
        🔐
      </button>

      {/* Back to top */}
      <button
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
