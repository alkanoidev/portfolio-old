import { useLocation } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function useAnimateGradientLine() {
  const { pathname } = useLocation();
  const divRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .fromTo(".line", { opacity: 0 }, { opacity: 1, ease: "power3.in" })
        .delay(pathname === "/" ? 2.8 : 0);
    }, divRef);

    return () => ctx.revert();
  }, []);

  return { divRef };
}
