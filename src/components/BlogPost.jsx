import { personalInfo } from "@/data/portfolioData";

export default function BlogPost({ post, navigate }) {
  const kws = post.keywords?.split(",").map((k) => k.trim()).filter(Boolean) || [];

  return (
    <div style={{ padding: "88px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <button onClick={() => navigate("blog")} className="btn-secondary mb-8" style={{ fontSize: ".8rem", padding: "8px 16px" }}>
          Back to Blog
        </button>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ color: "var(--purple)", fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: "10px" }}>{post.category}</div>
          <h1 className="font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem,4vw,2.5rem)", lineHeight: 1.15 }}>{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mb-8" style={{ fontSize: ".78rem", color: "var(--dim)" }}>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>✍️ Muhtsan Ahmad</span>
          </div>
          {post.image && (<img src={post.image} alt={post.title} className="w-full rounded-2xl mb-8" style={{ maxHeight: "360px", objectFit: "cover" }} />)}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
}
