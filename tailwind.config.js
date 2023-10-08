/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    prefix: "tw-",
    theme: {
        extend: {
            colors: {},
            height: {
                screen: "100dvh",
                "screen-small": "100svh",
                "screen-large": "100lvh",
            },
            maxHeight: {
                screen: "100dvh",
                "screen-small": "100svh",
                "screen-large": "100lvh",
            },
            minHeight: {
                screen: "100dvh",
                "screen-small": "100svh",
                "screen-large": "100lvh",
            },
        },
    },
    plugins: [],
};