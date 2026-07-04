/**
 * MatrixRain — Canvas-based Matrix digital rain animation
 * Renders falling katakana/number characters in neon green
 */
import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|=+-*/\\~^%$#@!";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      // Fade effect
      ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const opacity = Math.random() > 0.9 ? 1 : 0.3;

        // Bright lead character
        if (Math.random() > 0.95) {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        } else {
          ctx.fillStyle = `rgba(0, 255, 156, ${opacity})`;
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset column randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Recompute columns on resize
      columns = Math.floor(canvas.width / fontSize);
      while (drops.length < columns) drops.push(1);
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-20 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default MatrixRain;
