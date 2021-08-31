import styled from "styled-components";
import { QUERIES, COLOR, FONT, WIDTH } from "../../Global/GlobalHelpers";


export const HeaderContainer = styled.header `
    background-color: red;
    max-width: 100%;
    min-height: 0rem;
`

export const HeaderInnerContainer = styled.div `
    background-color: yellow;
    max-width: ${WIDTH.max};
    min-height: 4rem;
    margin: 0 auto;
`
