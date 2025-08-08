// src/hooks/useScrollAnimate.ts
import { useVisibleTask$ } from "@builder.io/qwik";
import { animate, inView } from "@motionone/dom";

export const useScrollAnimate = (selector: string, options = {}) => {
  useVisibleTask$(() => {
    inView(selector, ({ target }) => {
      animate(
        target,
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.8, delay: 0.1, easing: "ease-out", ...options }
      );
    });
  });
};