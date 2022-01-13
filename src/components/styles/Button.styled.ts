import styled from "styled-components";

export const Btn = styled.button`
  border-radius: 0.5rem;
  border-style: none;
  color: var(--clr-white);
  font-size: 1.225rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  color: hsl(183, 100%, 15%);
  background-color: hsl(172, 67%, 45%);
  &:hover,
  &:focus {
    background-color: #96fafa;
  }
`;

export const PercentBtn = styled(Btn)`
  background-color: hsl(183, 100%, 15%);
  color: hsl(189, 41%, 97%);
  font-size: 1.5rem;
  &:hover,
  &:focus {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
  }
`;
