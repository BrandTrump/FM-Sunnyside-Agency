import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-mobile": "url('/images/mobile/image-header.jpg')",
        "header-desktop": "url('/images/desktop/image-header.jpg')",
        "egg-desktop": "url('/images/desktop/image-transform.jpg')",
        "egg-mobile": "url('/images/mobile/image-transform.jpg')",
        "stand-out-desktop": "url('/images/desktop/image-stand-out.jpg')",
        "stand-out-mobile": "url('/images/mobile/image-stand-out.jpg')",
        "cherry-desktop": "url('/images/desktop/image-graphic-design.jpg')",
        "cherry-mobile": "url('/images/mobile/image-graphic-design.jpg')",
        "orange-desktop": "url('/images/desktop/image-photography.jpg')",
        "orange-mobile": "url('/images/mobile/image-photography.jpg')",
        "cone-desktop": "url('/images/desktop/image-gallery-cone.jpg')",
        "milkbottles-desktop":
          "url('/images/desktop/image-gallery-milkbottles.jpg')",
        "gallery-orange-desktop":
          "url('/images/desktop/image-gallery-orange.jpg')",
        "sugar-desktop": "url('/images/desktop/image-gallery-sugarcubes.jpg')",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        fraunces: ["var(--font-fraunces)"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1440px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
