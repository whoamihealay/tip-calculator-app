import styled from "styled-components";

const Container = styled.div`
  min-width: 310px;
  padding: 1em;
  margin-inline: auto;
  max-width: 80rem;
`;

export const AppContainer = styled(Container)`
  display: grid;
  place-items: center;
`;

export const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1em;
  font-size: var(--fs-500);
  background-color: var(--clr-white);
  border-radius: var(--border-rad);
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
