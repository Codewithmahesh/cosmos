import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
