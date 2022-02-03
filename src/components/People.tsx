import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { Flex } from "./styles/Flex.styled";
import { InputWrapper, PeopleInput } from "./styles/Input.styled";
import { NoPeople } from "./styles/Text.styled";

interface IProps {
  inputs: {
    people: number;
  };
  handleInputs: (e: {
    target: {
      id: string;
      value: string;
    };
  }) => void;
}

const People = ({ inputs, handleInputs }: IProps) => {
  let noPeople = inputs.people === 0;

  return (
    <section>
      <Flex>
        <h2>Number of People</h2>
        {noPeople && <NoPeople>Can't be zero</NoPeople>}
      </Flex>
      <InputWrapper>
        <PeopleInput
          aria-label="How many people?"
          isPeople={noPeople}
          id="people"
          type="number"
          onChange={handleInputs}
          value={inputs.people ? inputs.people : ""}
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
