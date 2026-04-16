import { useEffect } from "react";

let aosInitialized = false;

export const useAOS = (): void => {
  useEffect(() => {
    let cancelled = false;

    async function loadAOS() {
      try {
        const [{ default: AOS }] = await Promise.all([
          import("aos"),
          import("aos/dist/aos.css"),
        ]);

        if (cancelled) {
          return;
        }

        if (!aosInitialized) {
          AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
          });
          aosInitialized = true;
        } else {
          AOS.refresh();
        }
      } catch {
        return;
      }
    }

    void loadAOS();

    return () => {
      cancelled = true;
    };
  }, []);
};