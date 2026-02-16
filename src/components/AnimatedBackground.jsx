import { useEffect, useRef } from "react";

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Performance boost
    });

    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class - Optimized
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1.5; // 1.5-4.5px
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges (faster than checking bounds)
        if (this.x < 0) this.x = canvas.width;
        else if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        else if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create 150 particles but with smart connection algorithm
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }

    // Pre-calculate colors for performance
    const connectionColors = [];
    for (let i = 0; i <= 10; i++) {
      connectionColors[i] = `rgba(16, 185, 129, ${0.3 * (i / 10)})`;
    }

    // Optimized animation with spatial partitioning
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles - OPTIMIZED with distance check limit
      const maxDistance = 120;
      const maxDistanceSquared = maxDistance * maxDistance; // Avoid sqrt

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Only check next 10 particles (not all 150)
        const checkLimit = Math.min(i + 10, particles.length);

        for (let j = i + 1; j < checkLimit; j++) {
          const p2 = particles[j];

          // Distance squared (faster than sqrt)
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSquared = dx * dx + dy * dy;

          if (distSquared < maxDistanceSquared) {
            const distance = Math.sqrt(distSquared);
            const colorIndex = Math.floor((1 - distance / maxDistance) * 10);
            ctx.strokeStyle = connectionColors[colorIndex];
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.45,
        willChange: "transform", // GPU acceleration hint
      }}
    />
  );
}

export default AnimatedBackground;
