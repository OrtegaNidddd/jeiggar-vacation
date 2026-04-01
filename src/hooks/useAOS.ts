import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let aosInitialized = false;

export const useAOS = (): void => {
  useEffect(() => {
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
  }, []);
};