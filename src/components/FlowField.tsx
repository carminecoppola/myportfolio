"use client";

import { useEffect, useRef } from "react";

/**
 * A slow field of drifting contour lines, drawn on a canvas.
 * It reads the accent colour from CSS, pauses off screen and under reduced motion.
 */
export default function FlowField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let t = 0;
    let color = "207, 74, 20";

    const readColor = () => {
      const probe = document.createElement("span");
      probe.style.color = getComputedStyle(document.documentElement).getPropertyValue("--accent");
      document.body.appendChild(probe);
      const m = getComputedStyle(probe).color.match(/\d+/g);
      probe.remove();
      if (m) color = `${m[0]}, ${m[1]}, ${m[2]}`;
    };

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Cheap smooth noise from layered sines.
    const field = (x: number, y: number, time: number) =>
      Math.sin(x * 0.0021 + time * 0.00018) * 1.3 +
      Math.sin(y * 0.0027 - time * 0.00013) * 1.1 +
      Math.sin((x + y) * 0.0012 + time * 0.0001) * 1.6;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const rows = Math.ceil(height / 22);
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        const baseY = r * 22;
        const alpha = 0.05 + 0.2 * (1 - Math.abs(r / rows - 0.5) * 1.6);
        ctx.strokeStyle = `rgba(${color}, ${Math.max(0.04, alpha)})`;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 12) {
          const y = baseY + field(x, baseY, t) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const loop = () => {
      if (visible && !document.hidden) {
        t += 16;
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    readColor();
    resize();
    draw();
    if (!reduce) raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);
    const mo = new MutationObserver(() => {
      readColor();
      draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}
