import { BsCurrencyDollar } from "react-icons/bs";
import styled from "styled-components";

const Input = styled.div`
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

type Props = {
  inputs: {
    bill: number;
  };
  handleInputs: (e: {
    target: {
      id: string;
      value: string;
    };
  }) => void;
};

const Bill = ({ inputs, handleInputs }: Props) => {
  return (
    <section>
      <h2>Bill</h2>
      <Input>
        <span>
          <BsCurrencyDollar />
        </span>
        <input
          id="bill"
          type="number"
          placeholder="0"
          value={inputs.bill}
          onChange={handleInputs}
          min="0"
          max="99999"
        />
      </Input>
    </section>
  );
};

export default Bill;
