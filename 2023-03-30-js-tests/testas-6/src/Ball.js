const Ball = function ({ id, num, handleClick }) {
  return (
    <div
      className="ball"
      onClick={() => {
        handleClick(id, num);
      }}>
      {num}
    </div>
  );
};
