const a = {
  buttonEl: document.getElementById("start-btn-a"),
  boardEl: document.getElementById("board-a"),
  counterEl: document.getElementById("hit-counter-a"),
  nailsCount: 5,
  nailLength: 85, //mm
  hitMin: 5, //mm
  hitMax: 20, //mm
  hitFailChance: 0, //%
};
const b = {
  buttonEl: document.getElementById("start-btn-b"),
  boardEl: document.getElementById("board-b"),
  counterEl: document.getElementById("hit-counter-b"),
  nailsCount: 5,
  nailLength: 85, //mm
  hitMin: 20, //mm
  hitMax: 30, //mm
  hitFailChance: 50, //%
};
//adjust board style
a.boardEl.style.height = `${a.nailLength}px`;
a.boardEl.style.marginTop = `${a.nailLength + 50}px`;
b.boardEl.style.height = `${b.nailLength}px`;
b.boardEl.style.marginTop = `${b.nailLength + 50}px`;
let running = false; //to stop user interactions when loop with awaits, as it stops execution

a.buttonEl.addEventListener("click", () => {
  if (!running) {
    countHits(a);
  }
});
b.buttonEl.addEventListener("click", () => {
  if (!running) {
    countHits(b);
  }
});
async function countHits(arg) {
  let { nailsCount, nailLength, hitMin, hitMax, hitFailChance, boardEl, counterEl } = arg;
  running = true;
  ///reset
  boardEl.innerHTML = "";
  counterEl.innerHTML = "";
  ///
  let hitsCount = 0;
  for (let i = 0; i < nailsCount; i++) {
    let nailEl = createNailElement(i);
    nailEl.style.height = `${nailLength}px`;
    let stoneEl = nailEl.getElementsByClassName("stone")[0];
    let hitTextEl = nailEl.getElementsByClassName("hit-text")[0];
    let leftTextEl = nailEl.getElementsByClassName("left-text")[0];
    boardEl.appendChild(nailEl);
    let nailOutside = nailLength;
    leftTextEl.textContent = nailOutside;
    await wait(900); //to slow down visualisation
    while (nailOutside >= 0) {
      stoneEl.classList.add("active");
      hitsCount++;
      let hit = 0;
      if (!failureByChance(hitFailChance)) {
        hit = rand(hitMin, hitMax);
      } else {
        stoneEl.classList.add("failure");
      }
      nailOutside -= hit;
      hitTextEl.textContent = hit; //how much did current hit pushed nail in to the board
      leftTextEl.textContent = nailOutside >= 0 ? nailOutside : 0; //if negative, show 0 (how much nail left(outside))
      nailEl.style.top = `-${nailOutside >= 0 ? nailOutside : 0}px`; //visual
      counterEl.textContent = hitsCount; //counting hits
      await wait(900); //to slow down visualisation
      console.log("removing");
      stoneEl.classList.remove("active");
      stoneEl.classList.remove("failure");
      await wait(100);
    }
    nailEl.classList.remove("active");
  }
  running = false;
}

function createNailElement(nth) {
  let hitText = document.createElement("span");
  hitText.classList.add("hit-text");
  let leftText = document.createElement("span");
  leftText.classList.add("left-text");
  let stoneEl = document.createElement("div");
  stoneEl.classList.add("stone");
  stoneEl.appendChild(hitText);
  stoneEl.appendChild(leftText);
  let nailEl = document.createElement("div");
  nailEl.classList.add("nail");
  nailEl.classList.add("active");
  nailEl.style.left = `${nth * 50 + 10}px`;
  nailEl.appendChild(stoneEl);
  return nailEl;
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function wait(miliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, miliseconds);
  });
}
function failureByChance(failChancePercentage) {
  if (failChancePercentage === 50) {
    return rand(0, 1);
  } else if (failChancePercentage === 0) {
    return 0;
  } else if (failChancePercentage === 100) {
    return 1;
  } else {
    let chance = rand(1, 100);
    if (chance <= failChancePercentage) {
      return 1;
    } else {
      return 0;
    }
  }
}
