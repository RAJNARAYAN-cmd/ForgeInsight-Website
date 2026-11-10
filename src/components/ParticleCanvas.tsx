import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityTarget: number;
  opacitySpeed: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

interface Props {
  className?: string;
  nodeCount?: number;
  particleCount?: number;
  accent?: string;
}

export default function ParticleCanvas({
  className = "",
  nodeCount = 8,
  particleCount = 40,
  accent = "#00C8FF",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 2 + Math.random() * 3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    }));

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: 0.5 + Math.random() * 1.5,
      opacity: Math.random() * 0.4 + 0.1,
      opacityTarget: Math.random() * 0.5 + 0.1,
      opacitySpeed: 0.005 + Math.random() * 0.01,
    }));

    const accentRGB = { r: 245, g: 98, b: 15 };

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.min(w, h) * 0.35;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${accentRGB.r}, ${accentRGB.g}, ${accentRGB.b}, ${alpha * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // White dim lines
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.15})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.pulse += node.pulseSpeed;
        const pulseScale = 1 + Math.sin(node.pulse) * 0.3;
        const glowAlpha = 0.1 + Math.abs(Math.sin(node.pulse)) * 0.2;

        // Glow
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 8 * pulseScale);
        grad.addColorStop(0, `rgba(${accentRGB.r}, ${accentRGB.g}, ${accentRGB.b}, ${glowAlpha})`);
        grad.addColorStop(1, `rgba(${accentRGB.r}, ${accentRGB.g}, ${accentRGB.b}, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 8 * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.7 + Math.sin(node.pulse) * 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Move
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      // Draw particles
      particles.forEach((p) => {
        if (p.opacity < p.opacityTarget) p.opacity = Math.min(p.opacity + p.opacitySpeed, p.opacityTarget);
        else p.opacity = Math.max(p.opacity - p.opacitySpeed, p.opacityTarget);
        if (Math.abs(p.opacity - p.opacityTarget) < 0.01) p.opacityTarget = Math.random() * 0.4 + 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    const observer = new ResizeObserver(() => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, [nodeCount, particleCount, accent]);

  return <canvas ref={canvasRef} className={`block w-full h-full ${className}`} />;
}
