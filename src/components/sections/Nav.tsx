import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "關於" },
  { href: "#services", label: "服務" },
  { href: "#cases", label: "案例" },
  { href: "#team", label: "團隊" },
  { href: "#contact", label: "聯絡" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="Solvyn AI home">
            Solvyn<span className="ai-gradient">&nbsp;AI</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={activeId === l.href.slice(1) ? "active" : ""}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary nav-cta">預約諮詢</a>
          <button
            className="nav-menu-toggle"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`nav-mobile${mobileOpen ? " open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
          >
            {l.label} <span aria-hidden="true">→</span>
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>預約諮詢</a>
      </div>
    </>
  );
}
