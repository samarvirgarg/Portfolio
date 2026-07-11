import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    // Simple floating dots
    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.0002,
      speedY: (Math.random() - 0.5) * 0.0002,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time++;
      const isLight = document.documentElement.classList.contains('light');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating dots
      dots.forEach((dot) => {
        // Move dots slowly
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Wrap around edges
        if (dot.x < -0.05) dot.x = 1.05;
        if (dot.x > 1.05) dot.x = -0.05;
        if (dot.y < -0.05) dot.y = 1.05;
        if (dot.y > 1.05) dot.y = -0.05;

        const x = dot.x * canvas.width;
        const y = dot.y * canvas.height;
        const alpha = dot.opacity * (isLight ? 0.4 : 0.6);

        // Draw dot
        ctx.fillStyle = isLight 
          ? `rgba(108, 99, 255, ${alpha})` 
          : `rgba(200, 200, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
