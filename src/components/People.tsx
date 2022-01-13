import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";

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
  const [style, setStyle] = useState("");

  // When the number of people changes, check if the number if equal to 0.
  useEffect(() => {
    if (inputs.people === 0) {
      setStyle("no-people");
    } else {
      setStyle("yes-people");
    }
  }, [inputs.people]);

  return (
    <section>
      <div className="flex no-zero-div">
        <h2>Number of People</h2>
        {inputs.people === 0 && <p className="no-zero fs-200">Can't be zero</p>}
      </div>
      <div className="input__wrapper">
        <input
          id="people"
          className={style}
          type="number"
          onChange={handleInputs}
          value={inputs.people}
          min="0"
        />
        <span className="input__icon">
          <BsPersonFill />
        </span>
      </div>
    </section>
  );
};

export default People;
