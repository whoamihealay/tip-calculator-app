import styled from "styled-components";
import { Btn } from "./styles/Button.styled";

const Section = styled.section`
  border-radius: 1rem;
  background-color: hsl(183, 100%, 15%);
  padding: 1em;
  color: white;
  width: 100%;
  @media screen and (min-width: 30em) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
`;

const Amounts = styled.div`
  display: flex;
  justify-content: space-between;
  & li:nth-child(2) {
    font-size: 0.875rem;
    color: hsl(184, 14%, 56%);
  }
  & h2 {
    color: hsl(172, 67%, 45%);
    font-size: 2.225rem;
    font-weight: 700;
  }
`;

type Props = {
  outputs: {
    tip: number;
    total: number;
  };
  handleReset: () => void;
};

const Totals = ({ outputs, handleReset }: Props) => {
  return (
    <Section>
      <Flex>
        <Amounts>
          <ul>
            <li>
              <b>Tip Amount</b>
            </li>
            <li>
              <b>/ person</b>
            </li>
          </ul>
          <h2>${outputs.tip}</h2>
        </Amounts>
        <Amounts>
          <ul>
            <li>
              <b>Total</b>
            </li>
            <li>
              <b>/ person</b>
            </li>
          </ul>
          <h2>${outputs.total}</h2>
        </Amounts>
      </Flex>
      <Btn onClick={handleReset}>RESET</Btn>
    </Section>
  );
};

export default Totals;