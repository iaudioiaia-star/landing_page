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
        paddingTop:    scrolled ? "5px" : "8px",
        paddingBottom: scrolled ? "5px" : "8px",
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
                transition: "height 0.35s ease",
                height: scrolled ? "34px" : "42px",
                width: "auto",
              }}
            />
            <span
              className="font-display font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #6FBB49, #94CC74, #CEECB6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "font-size 0.35s ease",
                fontSize: scrolled ? "1.1rem" : "1.25rem",
              }}
            >
              iaudio
            </span>
          </Link>

          <Link
            to="/chat"
            className="btn-primary"
            style={{
              fontSize:      scrolled ? "0.78rem" : "0.85rem",
              paddingTop:    scrolled ? "5px"     : "8px",
              paddingBottom: scrolled ? "5px"     : "8px",
              paddingLeft:   scrolled ? "14px"    : "20px",
              paddingRight:  scrolled ? "14px"    : "20px",
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
