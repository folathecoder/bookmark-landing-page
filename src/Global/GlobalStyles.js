import { createGlobalStyle } from "styled-components";
import { QUERIES } from "./GlobalHelpers";


const GlobalStyle = createGlobalStyle `

    //TODO: ==========>> DEFAULT STYLES

    :root {
        // ==> FONT FAMILY
        --font-family: 'Rubik', sans-serif;

        // ==> FONT WEIGHTS
        --weight-regular: 400;
        --weight-medium: 500;

        // ==> COLORS
        --color-pry-100: #5267df;
        --color-pry-200: #fa5959;
        --color-sec-100: #242a45;
        --color-sec-200: #9194a2;
        --color-bg: #f2f2f2;

        // ==> MAXIMUM WIDTH
        --max-width: rem(1104);
    } 

    //TODO: ==========>> CSS RESET

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
        scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    //TODO: ==========>> BASE STYLING

    body {
        max-width: 100%;
        min-height: 100vh;
        font-family: var(--font-family);
        font-size: 1rem;    
        background-color: var(---color-bg);

        /* @media ${QUERIES.desktop} {
            background-color: blue;
        } */
    } 

    //TODO: ==========>> TYPOGRAPHY

`

export default GlobalStyle;