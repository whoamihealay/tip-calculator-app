import Percentage from "./Percentage";

type Props = {
  inputs: {
    percent: number;
  };
  handleInputs: (e: {
    target: {
      id: string;
      value: string;
    };
  }) => void;
  handlePercent: (value: number) => void;
};

const Percents = ({ inputs, handleInputs, handlePercent }: Props) => {
  return (
    <section>
      <h2>Select Tip %</h2>
      <div className="tip-grid grid text-white fs-700">
        <Percentage id={5} handle={handlePercent} />
        <Percentage id={10} handle={handlePercent} />
        <Percentage id={15} handle={handlePercent} />
        <Percentage id={25} handle={handlePercent} />
        <Percentage id={50} handle={handlePercent} />
        <input
          id="percent"
          className="custom fs-600 fw-700"
          placeholder="Custom"
          type="number"
          value={inputs.percent}
          onChange={handleInputs}
          min="0"
        ></input>
      </div>
    </section>
  );
};

export default Percents;
