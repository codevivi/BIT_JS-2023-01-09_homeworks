const { useState } = React;

// Sukurti aplikaciją su mygtuku “Reset” ir į dvi dalis apačioje
// padalintą ekraną. Paspaudus mygtuką “Reset” kairėje pusėje atsiranda
// rand 5, 15 kiekis apskritimų sunumeruoti nuo 1 eilės tvarka, o dešinė
// pusė tuščia. Paspaudus ant bet kokio apskritimo kairėje pusėje jis
// atsiranda dešinėje pusėje, o kairėje išnyksta. Taip iš kairės į dešinę
// turi būti galima perkelti visus apskritimus. Paspaudus ant dešinėje
// pusėje esančio apskritimo jis sugrįžta į kairę pusę ir t.t.
// Apskritimai abiejuose pusėse turi rikiuotis pagal eilės numerį
// didėjimo tvarka. Tvarka turi išlikti dėliojant apskritimus iš vienos
// pusės į kitą.
// Vėl paspaudus mygtuką “Reset” seni apskritimai išnyksta, kairėje
// pusėje vėl atsiranda naujas apskritimų kiekis, dešinė pusė- tuščia.

//pabandymas
const MainContent = () => {
  const [leftBalls, setLeftBalls] = useState(genBalls());
  const [rightBalls, setRightBalls] = useState([...Array(15)].fill(null));

  function genBalls() {
    let ballsArr = [...Array(rand(5, 15))].map((_, ind) => ind + 1);
    return [...ballsArr, ...[...Array(15 - ballsArr.length)].fill(null)];
  }
  function handleReset() {
    setLeftBalls(genBalls());
    setRightBalls([]);
  }
  function handleLeftClick(id, num) {
    setRightBalls((old) => {
      let newState = [...old];
      newState[Number(id)] = num;
      return newState;
    });
    setLeftBalls((old) => {
      let newState = [...old];
      newState[Number(id)] = null;
      return newState;
    });
  }
  function handleRightClick(id, num) {
    setLeftBalls((old) => {
      let newState = [...old];
      newState[Number(id)] = num;
      return newState;
    });
    setRightBalls((old) => {
      let newState = [...old];
      newState[Number(id)] = null;
      return newState;
    });
  }
  return (
    <div>
      <button className="btn-reset" onClick={handleReset}>
        Reset
      </button>
      <div className="main">
        <Half side="left" balls={leftBalls} handleClick={handleLeftClick}></Half>
        <Half side="right" balls={rightBalls} handleClick={handleRightClick}></Half>
      </div>
    </div>
  );
};

//render the component to the DOM
ReactDOM.render(<MainContent />, document.getElementById("main"));

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
