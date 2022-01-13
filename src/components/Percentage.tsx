import { PercentBtn } from "./styles/Button.styled";

type Props = {
  id: number;
  handle: (value: number) => void;
};

const Percentage = ({ id, handle }: Props) => {
  return (
    <PercentBtn id={id.toString()} name="percent" onClick={() => handle(id)}>
      {id}%
    </PercentBtn>
  );
};

export default Percentage;
