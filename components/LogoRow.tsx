import React, { useEffect, useRef, useState } from "react";
import { LogoType } from "../pages";

type Props = {
  logos: LogoType[];
};

const LogoRow = ({ logos }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  const calculateDuration = () => {
    const container = containerRef.current;
    if (container) {
      const totalWidth = container.scrollWidth;
      const speed = 300; // 300px per second
      const newDuration = totalWidth / speed;
      setDuration(newDuration);
    }
  };

  useEffect(() => {
    calculateDuration();
    window.addEventListener("resize", calculateDuration);
    return () => {
      window.removeEventListener("resize", calculateDuration);
    };
  }, []);

  return (
    <section className="relative h-48 mt-12 overflow-hidden">
      <div
        ref={containerRef}
        style={{ animationDuration: `${duration}s` }}
        className="flex items-center justify-start h-full gap-16 opacity-70 lg:gap-20 slide-animation w-max"
      >
        {[...logos, ...logos].map(({ logo }, idx) => (
          <img
            key={logo}
            src={logo}
            alt={`${logo}-${idx}`}
            className="object-contain w-24 h-24 rounded-full"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoRow;
