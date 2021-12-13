const Percentage = ({ id, handle }) => {
  return (
    <button
      id={id}
      name="percent"
      className="btn percent bg-dark on"
      onClick={() => handle(id)}
    >
      {id}%
    </button>
  );
};

export default Percentage;
