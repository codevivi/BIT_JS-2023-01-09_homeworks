const Half = ({ balls, side, handleClick }) => {
  return (
    <div className={`half ${side}`}>
      {balls.map((ball, ind) => {
        if (ball) {
          return <Ball key={Number(ball) + ind} num={ball} id={ind} handleClick={handleClick} />;
        }
      })}
    </div>
  );
};
