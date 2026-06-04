import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 15;

export const CustomCursor = () => {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })));
  const requestRef = useRef<number>();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    const update = () => {
      let prev = mouse.current;
      
      trail.current.forEach((pt, index) => {
        // Decrease speed factor for dots further back to create a bouncy, playful drag effect
        const speed = 0.45 - index * 0.02;
        
        pt.x += (prev.x - pt.x) * Math.max(speed, 0.1);
        pt.y += (prev.y - pt.y) * Math.max(speed, 0.1);
        
        const dot = dotsRef.current[index];
        if (dot) {
          const scale = 1 - index * 0.05;
          dot.style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        }
        
        prev = pt;
      });
      
      requestRef.current = requestAnimationFrame(update);
    };
    
    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }).map((_, index) => {
        // Interpolate color from #ff7e05 to #db2442
        // #ff7e05 = rgb(255, 126, 5)
        // #db2442 = rgb(219, 36, 66)
        const ratio = index / (TRAIL_LENGTH - 1);
        const r = Math.round(255 + ratio * (219 - 255));
        const g = Math.round(126 + ratio * (36 - 126));
        const b = Math.round(5 + ratio * (66 - 5));
        
        const isHead = index === 0;

        return (
          <div
            key={index}
            ref={(el) => (dotsRef.current[index] = el)}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            style={{
              width: isHead ? "14px" : "12px",
              height: isHead ? "14px" : "12px",
              backgroundColor: `rgb(${r}, ${g}, ${b})`,
              opacity: isVisible ? (1 - ratio * 0.6) : 0,
              transition: "opacity 0.2s ease",
              willChange: "transform",
              boxShadow: isHead ? "0 0 10px rgba(255, 126, 5, 0.6)" : "none",
            }}
          />
        );
      })}
    </>
  );
};
