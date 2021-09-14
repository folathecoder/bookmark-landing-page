import { createGlobalStyle } from "styled-components";
import { QUERIES } from "../helpers/MediaQueries";

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
        --center-container: 0 auto;

        //BORDER
        --border-radius: 0.3125rem;

        //ANIMATION 
        --transition: 0.25s ease-in-out;
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

    a {
        color: var(--color-sec-100);
        font-weight: var(--font-weight-200);
        font-size: 0.9rem;

        &:hover {
            transition: var(--transition);
            color: var(--color-pry-300);
        }
    }
    
    p {
        font-size: 1rem;
        font-weight: var(--font-weight-100);
    }

    h2 {
        font-size: 1.5rem;
        line-height: 1.75rem;
        font-weight: var(--font-weight-200);

        @media ${QUERIES.tabletMini} {
            font-size: 2rem;
            line-height: 2.5rem;
        }
    }

    h3 {
        font-size: 0.8rem;
        line-height: 1rem;
        font-weight: var(--font-weight-100);
    }

`;
