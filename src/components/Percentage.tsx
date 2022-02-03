import { PercentBtn } from "./styles/Button.styled";

interface IProps {
  id: number;
  handle: (value: number) => void;
}

const Percentage = ({ id, handle }: IProps) => {
  return (
    <PercentBtn id={id.toString()} name="percent" onClick={() => handle(id)}>
      {id}%
    </PercentBtn>
  );
};

export default Percentage;
