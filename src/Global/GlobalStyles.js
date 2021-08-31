import { createGlobalStyle } from "styled-components";
import { QUERIES, COLOR, FONT, WIDTH } from "./GlobalHelpers";


const GlobalStyle = createGlobalStyle `

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
        font-family: ${FONT.pry100};
        font-size: 1rem;    
        background-color: ${COLOR.bg};
    } 

    //TODO: ==========>> TYPOGRAPHY

`

export default GlobalStyle;