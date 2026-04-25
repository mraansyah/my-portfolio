import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 }
};

export const useWelcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const setupTextHover = (container: HTMLElement | null, type: keyof typeof FONT_WEIGHTS) => {
    if (!container) return () => {};

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter: HTMLElement, weight: number, duration = 0.25) => {
      return gsap.to(letter, {
        duration,
        ease: 'power2.out',
        fontVariationSettings: `'wght' ${weight}`,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;

      letters.forEach((letter) => {
        const { left: l, width: w } = letter.getBoundingClientRect();
        const distance = Math.abs(mouseX - (l - left + w / 2));
        const intensity = Math.exp(-(distance ** 2) / 20000);

        animateLetter(letter as HTMLElement, min + (max - min) * intensity);
      });
    };

    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter as HTMLElement, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  };

  useGSAP(() => {
    const titleCleanUp = setupTextHover(titleRef.current, "title");
    const subtitleCleanUp = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanUp();
      subtitleCleanUp();
    };
  }, []);

  return { titleRef, subtitleRef };
};
