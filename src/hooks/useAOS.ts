import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = (): void => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);
};