import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[70] h-[2px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #426C2A, #6FBB49, #CEECB6, #6FBB49)",
        boxShadow: "0 0 10px rgba(111,187,73,0.7), 0 0 20px rgba(111,187,73,0.3)",
        transition: "width 0.1s linear",
      }}
    />
  );
};

export default ScrollProgress;
