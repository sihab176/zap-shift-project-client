// Cursor.js
import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
 <div
  className="fixed top-0 left-0 w-10 h-10 border-2 border-green-300 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out"
  style={{
    transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)`,
  }}
>
  <div className="w-1 h-1 bg-green-500 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>

  );
};

export default Cursor;
