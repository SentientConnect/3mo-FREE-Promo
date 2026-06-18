import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#080808",
        charcoal: "#121212",
        graphite: "#1b1b1b",
        gold: "#d6ad54",
        softgold: "#f1d58c",
        mutedgold: "#8d7241",
        bone: "#f5f0e8",
      },
      boxShadow: {
        gold: "0 0 45px rgba(214, 173, 84, 0.18)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #fff2bc 0%, #d6ad54 42%, #8d7241 100%)",
        "dark-radial": "radial-gradient(circle at top, rgba(214,173,84,.18), transparent 36%), radial-gradient(circle at 80% 15%, rgba(241,213,140,.08), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;
