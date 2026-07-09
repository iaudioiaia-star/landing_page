import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b"
      style={{
        backgroundColor: scrolled ? "rgba(2,4,3,0.97)" : "rgba(2,4,3,0.82)",
        borderColor: scrolled ? "rgba(111,187,73,0.30)" : "rgba(66,108,42,0.35)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(111,187,73,0.08)" : "none",
        transition: "background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease",
        paddingTop:    scrolled ? "8px"  : "12px",
        paddingBottom: scrolled ? "8px"  : "12px",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/iaudio-logo.png"
              alt="Iaudio logo"
              className="header-logo"
              style={{
                transition: "width 0.35s ease",
                width: scrolled ? "64px" : "80px",
              }}
            />
            <span
              className="font-display text-2xl font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #6FBB49, #94CC74, #CEECB6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "font-size 0.35s ease",
                fontSize: scrolled ? "1.25rem" : "1.5rem",
              }}
            >
              iaudio
            </span>
          </Link>

          <Link
            to="/chat"
            className="btn-primary"
            style={{
              fontSize:      scrolled ? "0.8rem"  : "0.875rem",
              paddingTop:    scrolled ? "6px"     : "10px",
              paddingBottom: scrolled ? "6px"     : "10px",
              paddingLeft:   scrolled ? "16px"    : "24px",
              paddingRight:  scrolled ? "16px"    : "24px",
              transition: "all 0.35s ease",
            }}
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
