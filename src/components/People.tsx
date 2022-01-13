import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { Flex } from "./styles/Flex.styled";
import { InputWrapper, PeopleInput } from "./styles/Input.styled";
import { NoPeople } from "./styles/Text.styled";

type Props = {
  inputs: {
    people: number;
  };
  handleInputs: (e: {
    target: {
      id: string;
      value: string;
    };
  }) => void;
};

const People = ({ inputs, handleInputs }: Props) => {
  const [noPeople, setNoPeople] = useState<boolean>(false);

  // When the number of people changes, check if the number if equal to 0.
  useEffect(() => {
    if (inputs.people === 0) {
      setNoPeople(true);
    } else {
      setNoPeople(false);
    }
  }, [inputs.people]);

  return (
    <section>
      <Flex>
        <h2>Number of People</h2>
        {noPeople && <NoPeople>Can't be zero</NoPeople>}
      </Flex>
      <InputWrapper>
        <PeopleInput
          isPeople={noPeople}
          id="people"
          type="number"
          onChange={handleInputs}
          value={inputs.people}
          min="0"
        />
        <span className="input__icon">
          <BsPersonFill />
        </span>
      </InputWrapper>
    </section>
  );
};

export default People;
