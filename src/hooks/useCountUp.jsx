import { useEffect, useRef, useState } from 'react';

/**
 * Anima um número de 0 até `target` usando requestAnimationFrame,
 * disparado apenas quando o elemento entra no viewport (IntersectionObserver).
 *
 * @param {number} target  - número final
 * @param {number} duration - duração em ms (padrão 1500)
 * @returns {[number, RefObject]} [valor atual, ref para atachar no elemento]
 */
export function useCountUp(target, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;

            // Respeita prefers-reduced-motion
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduce) {
              setValue(target);
              return;
            }

            const start = performance.now();
            const tick = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutCubic: arranque rápido, parada suave
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return [value, ref];
}
