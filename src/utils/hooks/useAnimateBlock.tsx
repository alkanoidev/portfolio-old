import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";

export default function useAnimateBlock(delay: number) {
  const divRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .fromTo(
          divRef.current?.children ?? "*",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "back.out(3)", stagger: 0.1 }
        )
        .delay(delay);
    }, divRef);

    return () => ctx.revert();
  }, []);

  return { divRef };
}
