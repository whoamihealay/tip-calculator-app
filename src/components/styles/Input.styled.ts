import styled from "styled-components";

interface InputInterface {
  isPeople: boolean;
}

export const InputWrapper = styled.div`
  position: relative;
  & span {
    position: absolute;
    left: 3px;
    top: calc(50% - 0.7rem);
    color: var(--clr-dg-cyan-2);
  }
  & input {
    background-color: var(--clr-lg-cyan-2);
    border-radius: 0.5rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 800;
    padding: 0.25em 1rem;
    color: hsl(183, 100%, 15%);
    width: 100%;
    cursor: pointer;
    &:focus {
      outline: 2px solid hsl(172, 67%, 45%);
    }
  }
`;

export const Input = styled.input`
  background-color: var(--clr-lg-cyan-2);
  border-radius: 0.5rem;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 0.25em 1rem;
  color: hsl(183, 100%, 15%);
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: 2px solid hsl(172, 67%, 45%);
  }
`;

export const PeopleInput = styled(Input)<InputInterface>`
  border: ${(props) =>
    props.isPeople ? "2px solid red" : "2px solid transparent"};
  &:focus {
    outline: ${(props) =>
      props.isPeople ? "2px solid red" : "2px solid hsl(172, 67%, 45%)"};
  }
`;
