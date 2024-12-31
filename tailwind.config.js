/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 15s ease infinite',
        blob: "blob 7s infinite",
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 50%',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '100% 50%',
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.white / 90'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.white / 80'),
            '--tw-prose-bullets': theme('colors.white / 80'),
            '--tw-prose-hr': theme('colors.white / 20'),
            '--tw-prose-quotes': theme('colors.white / 90'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.white'),
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 20%)',
            '--tw-prose-th-borders': theme('colors.white / 20'),
            '--tw-prose-td-borders': theme('colors.white / 10'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}