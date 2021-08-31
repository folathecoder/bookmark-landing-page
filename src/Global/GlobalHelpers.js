//TODO: ==========>> FUNCTION THAT CONVERTS PIXEL VALUES TO REM

export const rem = (pixel) => {
    const remSize = pixel / 16;
    return `${remSize}rem`;
}

//TODO: ==========>> DEFAULT REM CONVERSTION DENOMINATOR

const toREM = 16;

//TODO: ==========>> MEDIA QUERIES 

const BREAKPOINTS = {
    screen1: 300,
    screen2: 320,
    screen3: 602,
    screen4: 786,
    screen5: 992,
    screen6: 1200,
    screen7: 1500
  };
  
export const QUERIES = {
    mobileMini: `(min-width: ${BREAKPOINTS.screen1 / toREM}rem)`,
    mobile: `(min-width: ${BREAKPOINTS.screen2 / toREM}rem)`,
    largeMobile: `(min-width: ${BREAKPOINTS.screen3 / toREM}rem)`,
    tabletMini: `(min-width: ${BREAKPOINTS.screen4 / toREM}rem)`,
    tablet: `(min-width: ${BREAKPOINTS.screen5 / toREM}rem)`,
    desktop: `(min-width: ${BREAKPOINTS.screen6 / toREM}rem)`,
    largeDesktop: `(min-width: ${BREAKPOINTS.screen7 / toREM}rem)`,
};

//TODO: ==========>> UNIVERSAL COLORS

export const COLOR = {
    pry100: `#5267df`,
    pry200: `#fa5959`,
    sec100: `#242a45`,
    sec200: `#9194a2`,
    bg: `#f2f2f2`
}

//TODO: ==========>> FONT FAMILY

export const FONT = {
    pry100: `'Rubik', sans-serif`
}

//TODO: ==========>> MAXIMUM WIDTH

export const WIDTH = {
    max: `69rem`
}