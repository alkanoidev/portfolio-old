import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
type Props = {};

export default function WavesMobile({}: Props) {
  const waves = useRef<any>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".wave", { opacity: 1, ease: "power3.in", stagger: 0.35 });
    }, waves);

    return () => ctx.revert();
  }, []);
  return (
    <svg
      ref={waves}
      viewBox="0 0 320 96"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="waves w-full block h-44 sm:hidden opacity-70"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 67.3607L9 61.3607C18 54.3607 36 42.3607 53 34.3607C71 26.3607 89 22.3607 107 30.3607C124 38.3607 142 58.3607 160 69.3607C178 80.3607 196 83.3607 213 83.3607C231 83.3607 249 80.3607 267 77.3607C284 74.3607 302 70.3607 311 69.3607L320 67.3607V96.3607H311C302 96.3607 284 96.3607 267 96.3607C249 96.3607 231 96.3607 213 96.3607C196 96.3607 178 96.3607 160 96.3607C142 96.3607 124 96.3607 107 96.3607C89 96.3607 71 96.3607 53 96.3607C36 96.3607 18 96.3607 9 96.3607H0V67.3607Z"
        fill="url(#paint0_linear_320_244)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 66.9298L13 71.9298C27 76.9298 53 85.9298 80 77.9298C107 69.9298 133 44.9298 160 29.9298C187 15.9298 213 12.9298 240 18.9298C267 25.9298 293 41.9298 307 49.9298L320 57.9298V95.9298H307C293 95.9298 267 95.9298 240 95.9298C213 95.9298 187 95.9298 160 95.9298C133 95.9298 107 95.9298 80 95.9298C53 95.9298 27 95.9298 13 95.9298H0V66.9298Z"
        fill="url(#paint1_linear_320_244)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 44.9552L9 42.2687C18 39.5821 36 35.5522 53 27.4925C71 18.0896 89 6 107 6C124 6 142 18.0896 160 28.8358C178 39.5821 196 48.9851 213 48.9851C231 48.9851 249 39.5821 267 38.2388C284 35.5522 302 39.5821 311 42.2687L320 44.9552V96H311C302 96 284 96 267 96C249 96 231 96 213 96C196 96 178 96 160 96C142 96 124 96 107 96C89 96 71 96 53 96C36 96 18 96 9 96H0V44.9552Z"
        fill="url(#paint2_linear_320_244)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 77.4444L13 72.4444C27 67.4444 53 58.4444 80 46.4444C107 35.4444 133 22.4444 160 14.4444C187 6.44444 213 3.44444 240 8.44444C267 13.4444 293 26.4444 307 32.4444L320 38.4444V96.4444H307C293 96.4444 267 96.4444 240 96.4444C213 96.4444 187 96.4444 160 96.4444C133 96.4444 107 96.4444 80 96.4444C53 96.4444 27 96.4444 13 96.4444H0V77.4444Z"
        fill="url(#paint3_linear_320_244)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 28.2078L13 37.5584C27 46.9091 53 65.6104 80 64.4416C107 62.1039 133 39.8961 160 27.039C187 14.1818 213 9.50649 240 8.33766C267 6 293 6 307 6H320V96H307C293 96 267 96 240 96C213 96 187 96 160 96C133 96 107 96 80 96C53 96 27 96 13 96H0V28.2078Z"
        fill="url(#paint4_linear_320_244)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10L13 8C27 6 53 3 80 18C107 32 133 64 160 69C187 74 213 51 240 35C267 19 293 10 307 5L320 0V96H307C293 96 267 96 240 96C213 96 187 96 160 96C133 96 107 96 80 96C53 96 27 96 13 96H0V10Z"
        fill="url(#paint5_linear_320_244)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M320 35.7403L307 39.8961C293 43.013 267 49.2468 240 44.0519C213 39.8961 187 23.2727 160 23.2727C133 23.2727 107 39.8961 80 40.9351C53 43.013 27 29.5065 13 23.2727L0 16V96H13C27 96 53 96 80 96C107 96 133 96 160 96C187 96 213 96 240 96C267 96 293 96 307 96H320V35.7403Z"
        fill="url(#paint6_linear_320_244)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10L13 22C27 35 53 61 80 62C107 64 133 42 160 42C187 42 213 64 240 75C267 86 293 86 307 86H320V96H307C293 96 267 96 240 96C213 96 187 96 160 96C133 96 107 96 80 96C53 96 27 96 13 96H0V10Z"
        fill="url(#paint7_linear_320_244)"
        className="opacity-0 wave"
      />
      <defs>
        <linearGradient
          id="paint0_linear_320_244"
          x1="160"
          y1="26"
          x2="160"
          y2="96.3607"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#98C379" />
          <stop offset="1" stopColor="#98C379" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_320_244"
          x1="160"
          y1="16"
          x2="160"
          y2="95.9298"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_320_244"
          x1="160"
          y1="6"
          x2="160"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#98C379" />
          <stop offset="1" stopColor="#98C379" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_320_244"
          x1="160"
          y1="6"
          x2="160"
          y2="96.4444"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_320_244"
          x1="160"
          y1="6"
          x2="160"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#98C379" />
          <stop offset="1" stopColor="#98C379" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_320_244"
          x1="160"
          y1="0"
          x2="160"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_320_244"
          x1="160"
          y1="16"
          x2="160"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#98C379" />
          <stop offset="1" stopColor="#98C379" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_320_244"
          x1="160"
          y1="10"
          x2="160"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
