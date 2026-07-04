/**
 * CursorGlow — Neon green cursor glow trail effect
 * Follows the mouse with a soft neon green aura
 */
import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animate ring with slight lag for trail effect
    let rafId: number;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full"
        style={{
          background: "hsl(152, 100%, 50%)",
          boxShadow: "0 0 6px hsl(152, 100%, 50%), 0 0 12px hsl(152, 100%, 50%)",
        }}
        aria-hidden="true"
      />
      {/* Outer ring (lagging) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border"
        style={{
          borderColor: "hsl(152, 100%, 50%, 0.4)",
          boxShadow: "0 0 8px hsl(152, 100%, 50%, 0.2)",
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CursorGlow;
