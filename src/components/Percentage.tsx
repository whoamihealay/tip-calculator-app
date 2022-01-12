type Props = {
  id: number;
  handle: (value: number) => void;
};

const Percentage = ({ id, handle }: Props) => {
  return (
    <button
      id={id.toString()}
      name="percent"
      className="btn percent bg-dark on"
      onClick={() => handle(id)}
    >
      {id}%
    </button>
  );
};

export default Percentage;
