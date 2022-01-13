import Percentage from "./Percentage";
import { Grid } from "./styles/Grid.styled";
import { Input } from "./styles/Input.styled";

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
      <Grid>
        <Percentage id={5} handle={handlePercent} />
        <Percentage id={10} handle={handlePercent} />
        <Percentage id={15} handle={handlePercent} />
        <Percentage id={25} handle={handlePercent} />
        <Percentage id={50} handle={handlePercent} />
        <Input
          id="percent"
          placeholder="Custom"
          type="number"
          value={inputs.percent}
          onChange={handleInputs}
          min="0"
        />
      </Grid>
    </section>
  );
};

export default Percents;
