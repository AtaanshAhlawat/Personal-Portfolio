import { useEffect, useState } from "react";

const CursorTrail = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Custom hand pointer with blue theme */}
        <svg
          className="fixed"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(0, 0)",
            willChange: "transform",
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hand pointing finger */}
          <path
            d="M13 5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5V9.5C16 9.5 16 9.5 16 9.5V12M13 5.5V9.5M13 5.5V3.5C13 2.67157 13.6716 2 14.5 2C15.3284 2 16 2.67157 16 3.5V5.5M13 9.5C13 9.5 13 9.5 13 9.5V12M13 9.5V12M13 12V17C13 19.2091 11.2091 21 9 21H7.66667C6.19391 21 5 19.8061 5 18.3333V13.6667C5 12.1939 6.19391 11 7.66667 11H8M13 12H16M16 9.5V5.5M16 9.5V12M16 12H18.5C19.3284 12 20 12.6716 20 13.5V14.5C20 15.3284 19.3284 16 18.5 16H16V17"
            stroke="url(#blueGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(59, 130, 246, 0.2)"
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CursorTrail;
