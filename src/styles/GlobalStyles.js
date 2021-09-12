import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    ///////////////////////////////////////////////////////

    // TODO: ROOT VALUES
    :root {
        // COLORS
        --color-pry-100: hsl(0, 0%, 95%);
        --color-pry-200: hsl(231, 69%, 60%);
        --color-pry-300: hsl(0, 94%, 66%);
        --color-sec-100: hsl(229, 31%, 21%);
        --color-sec-200: hsl(229, 8%, 60%);

        // FONTS
        --font-pry-100: 'Rubik', sans-serif;
        --font-weight-100: 400;
        --font-weight-200: 500;

        // WIDTH
        --max-container: 69rem;
    }

    ///////////////////////////////////////////////////////

    //TODO: DEFAULT STYLE RESETS
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    ///////////////////////////////////////////////////////

    //TODO: BASE STYLES
    body {
        max-width: 100%;
        min-height: 100vh;
        font-family: var(--font-pry-100);
        font-weight: var(--font-weight-100);
        background-color: var(--color-pry-100);
    }

    ///////////////////////////////////////////////////////

    //TODO: TYPOGRAPHY

    /* h1 {
        font-size: 5rem;
    } */

`;
