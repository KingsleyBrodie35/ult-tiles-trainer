import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        floatDown: 'floatDown 0.5s ease-in-out forwards',
        floatUp: 'floatUp 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
