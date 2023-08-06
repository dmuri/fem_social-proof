/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            'sm': '640px',   // modify this for 'sm' breakpoint
            'md': '768px',   // modify this for 'md' breakpoint
            'lg': '950px',  // modify this for 'lg' breakpoint
            'xl': '1280px',  // modify this for 'xl' breakpoint
            '2xl': '1536px', // modify this for '2xl' breakpoint
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontWeight: {
                'normal': 400,
                'semibold': 500,
                'bold': 700,
            },
            fontFamily: {
                'sans': ['League Spartan', ...defaultTheme.fontFamily.sans],
                'secondary': ['Karla', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    veryDarkMagenta: 'hsl(300, 43%, 22%)',
                    softPink: 'hsl(333, 80%, 67%)',
                },
                neutral: {
                    darkGrayishMagenta: 'hsl(303, 10%, 53%)',
                    lightGrayishMagenta: 'hsl(300, 24%, 96%)',
                    white: 'hsl(0, 0%, 100%)',
                },
            },
        },
    },
    plugins: [],
}
