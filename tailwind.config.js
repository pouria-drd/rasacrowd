/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,css,html}"],
    theme: {
        extend: {
            fontFamily: {
                vazir: "Vazir",
                "peyda-medium": "Peyda Medium",
                peyda: "Peyda Regular",
            },

            colors: {
                rasa: {
                    red: {
                        200: "#FEECE3",
                        400: "#FF5400",
                    },

                    orange: {
                        200: "#FFF2DD",
                        400: "#FF9E00",
                        500: "#FF9100",
                        600: "#FF8500",
                        700: "#FF6D00",
                        800: "#FF5400",
                    },

                    blue: {
                        25: "#F4F9FF",
                        50: "#F2FBFF",
                        100: "#CAE9F6",
                        200: "#E7F8FC",
                        250: "#5186CA",
                        300: "#00B4D8",
                        350: "#3565A1",
                        400: "#0096C7",
                        500: "#268CAD",
                        600: "#0077B6",
                        700: "#023E8A",
                        800: "#03045E",
                        900: "#0F172A",
                    },

                    green: {
                        200: "#F6FFEC",
                        400: "#DCEDF0",
                        500: "#C5F0EF",
                        600: "#679436",
                        700: "#44CFCB",
                        800: "#1A6372",
                    },

                    purple: {
                        100: "#C8C8E4",
                        300: "#6F6F9D",
                        400: "#4D4E87",
                    },

                    gray: {
                        50: "#F9FBFD",
                        800: "#E6ECF3",
                        900: "#454749",
                    },
                },
            },
        },
    },
    plugins: [],
};
