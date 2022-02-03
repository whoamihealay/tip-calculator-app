import { BsCurrencyDollar } from "react-icons/bs";
import { Input, InputWrapper } from "./styles/Input.styled";

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
      <InputWrapper>
        <span>
          <BsCurrencyDollar />
        </span>
        <Input
          aria-label="Your bill amount"
          id="bill"
          type="number"
          placeholder="0"
          value={inputs.bill ? inputs.bill : ""}
          onChange={handleInputs}
          min="0"
          max="99999"
        />
      </InputWrapper>
    </section>
  );
};

export default Bill;
