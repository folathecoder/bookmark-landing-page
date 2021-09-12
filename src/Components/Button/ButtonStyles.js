import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  background-color: var(--color-pry-200);
  color: var(--color-pry-100);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-200);
  line-height: 0rem;
  padding: 1.1rem 2.1rem;
  border: 0.15rem solid var(--color-pry-200);

  &:hover {
    transition: 0.25s ease-in-out;
    background-color: transparent;
    color: var(--color-pry-200);
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--color-pry-300);
      border-color: var(--color-pry-300);

      &:hover {
        color: var(--color-pry-300);
      }
    `}

  ${({ blocked }) =>
    blocked &&
    css`
      display: block;
      width: 100%;
    `}

    ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      border-color: var(--color-pry-100);
      color: var(--color-pry-100);
    `}
`;
