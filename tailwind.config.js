/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                grayPrimary: '#E0E0E0',
                pink: '#9013FE',
                lightDark: '#424242',
            },
            borderWidth: {
                DEFAULT: '1px',
                1: '1.5px',
            },
        },
    },
    plugins: [],
};
