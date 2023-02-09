// const answerElemA = document.getElementById("answer-a");
// const answerElemB = document.getElementById("answer-b");
const buttonElemA = document.getElementById("start-btn-a");
const boardElemA = document.getElementById("board-a");
const counterElemA = document.getElementById("hit-counter-a");
const buttonElemB = document.getElementById("start-btn-b");
const boardElemB = document.getElementById("board-b");
const counterElemB = document.getElementById("hit-counter-b");
let running = false;

buttonElemA.addEventListener("click", () => {
  if (!running) {
    countLightHits(5, 85);
  }
});

buttonElemB.addEventListener("click", () => {
  if (!running) {
    countHeavyHits(5, 85);
  }
});
async function countLightHits(nailsCount, nailLength) {
  running = true;
  boardElemA.innerHTML = "";
  const hitMin = 5;
  const hitMax = 20;
  let hitsCount = 0;
  for (let i = 0; i < nailsCount; i++) {
    let el = addNailElement(i);
    let stone = el.getElementsByClassName("stone")[0];
    let hitTextEl = el.getElementsByClassName("hit-text")[0];
    let leftTextEl = el.getElementsByClassName("left-text")[0];
    boardElemA.appendChild(el);

    await wait(1000); //to slow down visualisation
    let j = nailLength;
    leftTextEl.textContent = j;
    await wait(300); //to slow down visualisation
    while (j >= 0) {
      hitsCount++;
      let hit = rand(hitMin, hitMax);
      j -= hit;
      hitTextEl.textContent = hit;
      leftTextEl.textContent = j;
      el.style.top = `-${j}px`;
      counterElemA.textContent = hitsCount;
      await wait(300); //to slow down visualisation
    }
    el.style.top = `0px`;
    el.classList.remove("active");
  }
  running = false;
}
async function countHeavyHits(nailsCount, nailLength) {
  running = true;
  boardElemB.innerHTML = "";
  const hitMin = 20;
  const hitMax = 30;
  let hitsCount = 0;
  for (let i = 0; i < nailsCount; i++) {
    let el = addNailElement(i);
    let stone = el.getElementsByClassName("stone")[0];
    let hitTextEl = el.getElementsByClassName("hit-text")[0];
    let leftTextEl = el.getElementsByClassName("left-text")[0];
    boardElemB.appendChild(el);

    await wait(1000); //to slow down visualisation
    let j = nailLength;
    leftTextEl.textContent = j;
    await wait(300); //to slow down visualisation
    while (j >= 0) {
      hitsCount++;
      let hitOk = rand(0, 1);
      let hit = 0;
      if (hitOk) {
        hit = rand(hitMin, hitMax);
      }
      j -= hit;
      hitTextEl.textContent = hit;
      leftTextEl.textContent = j;
      el.style.top = `-${j}px`;
      counterElemB.textContent = hitsCount;
      await wait(300); //to slow down visualisation
    }
    el.style.top = `0px`;
    el.classList.remove("active");
  }
  running = false;
}

function addNailElement(nth) {
  let hitText = document.createElement("span");
  hitText.classList.add("hit-text");
  let leftText = document.createElement("span");
  leftText.classList.add("left-text");
  let stoneEl = document.createElement("div");
  stoneEl.classList.add("stone");
  stoneEl.appendChild(hitText);
  stoneEl.appendChild(leftText);
  let el = document.createElement("div");
  el.classList.add("nail");
  el.classList.add("active");
  el.style.left = `${nth * 50 + 10}px`;
  el.appendChild(stoneEl);
  return el;
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
