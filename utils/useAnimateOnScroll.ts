import { useEffect, useRef, useState } from "react";

const useAnimateOnScroll = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
      }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const animationClasses = `transition-all duration-700 ease-in-out  ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  return { cardRef, animationClasses };
};

export default useAnimateOnScroll;
