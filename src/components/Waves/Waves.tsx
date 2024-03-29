import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
type Props = {};

export default function Waves({}: Props) {
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
      preserveAspectRatio="none"
      viewBox="0 0 1440 422"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="waves w-full h-72 max-w-full hidden sm:block opacity-70"
    >
      <path
        d="M0 74.6L21.8 80.9931C43.6 87.8687 87 99.9312 131 151.8C174.5 203.669 218 292.931 262 338.407C305.5 383.4 349 383.4 393 383.4C436.4 383.4 480 383.4 524 364.1C567.3 344.8 611 306.2 655 261.207C698.2 215.731 742 165.069 785 164.707C829.1 165.069 873 215.731 916 229C960 242.269 1004 215.731 1047 184.007C1090.9 151.8 1135 113.2 1178 132.5C1221.8 151.8 1265 229 1309 254.693C1352.7 280.869 1396 254.331 1418 241.907L1440 229V422H1418.2C1396.4 422 1353 422 1309 422C1265.5 422 1222 422 1178 422C1134.5 422 1091 422 1047 422C1003.6 422 960 422 916 422C872.7 422 829 422 785 422C741.8 422 698 422 655 422C610.9 422 567 422 524 422C480 422 436 422 393 422C349.1 422 305 422 262 422C218.2 422 175 422 131 422C87.3 422 44 422 22 422H0V74.6Z"
        fill="url(#paint0_linear_113_232)"
        className="opacity-0 wave"
      />
      <path
        d="M0 372.2L30 305.748C60 239.919 120 106.081 180 65.1519C240 23.6 300 73.4 360 73.4C420 73.4 480 23.6 540 6.94813C600 -9.08125 660 6.48125 720 48.5C780 90.5188 840 155.881 900 173C960 190.119 1020 155.881 1080 164.752C1140 173 1200 222.8 1260 255.948C1320 289.719 1380 305.281 1410 314.152L1440 322.4V422H1410C1380 422 1320 422 1260 422C1200 422 1140 422 1080 422C1020 422 960 422 900 422C840 422 780 422 720 422C660 422 600 422 540 422C480 422 420 422 360 422C300 422 240 422 180 422C120 422 60 422 30 422H0V372.2Z"
        fill="url(#paint1_linear_113_232)"
        className="opacity-0 wave"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 184.232L40 191.938C80 199.643 160 216.155 240 255.783C320 295.411 400 358.155 480 327.333C560 295.411 640 168.821 720 89.5655C800 10.3096 880 -21.6129 960 18.0151C1040 57.643 1122 97.9701 1198 123C1281.5 150.5 1400 129.193 1440 89.5655V250V422H1400C1360 422 1280 422 1200 422C1120 422 1040 422 960 422C880 422 800 422 720 422C640 422 560 422 480 422C400 422 320 422 240 422C160 422 80 422 40 422H0V184.232Z"
        fill="url(#paint2_linear_113_232)"
        className="opacity-0 wave"
      />
      <path
        d="M1440 146.857L1400 185.119C1360 222.808 1280 300.192 1200 292.024C1120 284.429 1040 192.714 960 177.381C880 162.621 800 222.808 720 208.048C640 192.714 560 101 480 101C400 101 320 192.714 240 215.643C160 238.571 80 192.714 40 169.786L0 146.857V422H40C80 422 160 422 240 422C320 422 400 422 480 422C560 422 640 422 720 422C800 422 880 422 960 422C1040 422 1120 422 1200 422C1280 422 1360 422 1400 422H1440V146.857Z"
        fill="url(#paint3_linear_113_232)"
        className="opacity-0 wave"
      />
      <path
        d="M0 358L30 368.7C60 379 120 401 180 368.7C240 337 300 251 360 203.3C420 155 480 145 540 150C600 155 660 177 720 214C780 251 840 305 900 326C960 347 1020 337 1080 304.7C1140 273 1200 219 1260 187.3C1320 155 1380 145 1410 139.3L1440 134V422H1410C1380 422 1320 422 1260 422C1200 422 1140 422 1080 422C1020 422 960 422 900 422C840 422 780 422 720 422C660 422 600 422 540 422C480 422 420 422 360 422C300 422 240 422 180 422C120 422 60 422 30 422H0V358Z"
        fill="url(#paint4_linear_113_232)"
        className="opacity-0 wave"
      />
      <path
        d="M0 197.753L30 213.753C60 229.753 120 261.753 180 256.453C240 250.753 300 208.753 360 224.453C420 240.753 480 314.753 540 341.753C600 368.753 660 346.753 720 299.053C780 250.753 840 176.753 900 160.453C960 144.753 1020 186.753 1080 203.053C1140 218.753 1200 208.753 1260 235.053C1320 261.753 1380 325.753 1410 357.753L1440 389.753V421.753H1410C1380 421.753 1320 421.753 1260 421.753C1200 421.753 1140 421.753 1080 421.753C1020 421.753 960 421.753 900 421.753C840 421.753 780 421.753 720 421.753C660 421.753 600 421.753 540 421.753C480 421.753 420 421.753 360 421.753C300 421.753 240 421.753 180 421.753C120 421.753 60 421.753 30 421.753H0V197.753Z"
        fill="url(#paint5_linear_113_232)"
        className="opacity-0 wave"
      />
      <path
        d="M0 262H30C60 262 120 262 180 283.3C240 305 300 347 360 368.7C420 390 480 390 540 363.3C600 337 660 283 720 262C780 241 840 251 900 240.7C960 230 1020 198 1080 198C1140 198 1200 230 1260 251.3C1320 273 1380 283 1410 288.7L1440 294V422H1410C1380 422 1320 422 1260 422C1200 422 1140 422 1080 422C1020 422 960 422 900 422C840 422 780 422 720 422C660 422 600 422 540 422C480 422 420 422 360 422C300 422 240 422 180 422C120 422 60 422 30 422H0V262Z"
        fill="url(#paint6_linear_113_232)"
        className="opacity-0 wave"
      />
      <path
        d="M1440 302L1410 304.208C1380 306.583 1320 310.75 1260 328.667C1200 346.583 1140 377.417 1080 382C1020 386.583 960 364.083 900 359.792C840 355.333 780 368.667 720 368.667C660 368.667 600 355.333 540 350.875C480 346.583 420 350.75 360 359.792C300 368.667 240 382 180 373.125C120 364.083 60 333.25 30 317.542L0 302V422H30C60 422 120 422 180 422C240 422 300 422 360 422C420 422 480 422 540 422C600 422 660 422 720 422C780 422 840 422 900 422C960 422 1020 422 1080 422C1140 422 1200 422 1260 422C1320 422 1380 422 1410 422H1440V302Z"
        fill="url(#paint7_linear_113_232)"
        className="opacity-0 wave"
      />
      <defs>
        <linearGradient
          id="paint0_linear_113_232"
          x1="720"
          y1="74.6"
          x2="720"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_113_232"
          x1="720"
          y1="0.761719"
          x2="720"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_113_232"
          x1="720"
          y1="1"
          x2="720"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68AF73" />
          <stop offset="1" stopColor="#68AF73" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_113_232"
          x1="720"
          y1="135"
          x2="720"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68AF73" />
          <stop offset="1" stopColor="#68AF73" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_113_232"
          x1="720"
          y1="219"
          x2="720"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_113_232"
          x1="720"
          y1="68.5"
          x2="720"
          y2="421.753"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68AF73" />
          <stop offset="1" stopColor="#68AF73" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_113_232"
          x1="720"
          y1="208"
          x2="720"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62AEEF" />
          <stop offset="1" stopColor="#62AEEF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_113_232"
          x1="720"
          y1="302"
          x2="720"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68AF73" />
          <stop offset="1" stopColor="#68AF73" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
