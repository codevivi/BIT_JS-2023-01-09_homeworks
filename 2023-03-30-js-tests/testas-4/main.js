"use strict";
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const africa = ["Zebras", "Liūtas", "", "Raganosis", "", "Raganosis", "Begemotas"];
const australia = ["Kengūra", "Ančiasnapis", "Dingo", "Atsirado", "Strutis"];

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2>
// tagus ir vieną mygtuką. Paspaudus mygtuką kiekvienam tagui
// sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite
// į tago vidų naudojant innerText() metodą. Paspaudus mygtuką
// skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti
// skaičiai yra vienodi, juos nudažyti raudonai.

//17.45
const h2Elements = document.querySelectorAll("h2");
const button = document.querySelector("button");
button.addEventListener("click", getAndDisplayNumbers);
function getAndDisplayNumbers() {
  const numbers = [rand(1, 6), rand(1, 6)];
  h2Elements.forEach((el, ind) => {
    el.innerText = numbers[ind];
    numbers[0] === numbers[1] ? (el.style.color = "red") : (el.style.color = "inherit");
  });
}

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną
// mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. Paspaudus
// mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą
// skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle.
// <h3> tage skaičiuokite ir su innerText() metodu rašykite visų
// sugeneruotų skaičių sumą.

const h3Element = document.querySelector("h3");
const button2 = document.querySelectorAll("button")[1];
let numbers = [];
button2.addEventListener("click", genNumberAndDisplaySum);
function genNumberAndDisplaySum() {
  numbers.push(rand(1, 10));
  console.log(numbers);
  h3Element.innerText = numbers.reduce((acc, curr) => acc + curr);
}

// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. JS
// pagalba perskaitykite masyvą africa ir naudodami createElement()
// ir kitus reikalingus metodus sukurkite kiekvienam masyvo
// elementui po <li> tagą su elemento stringu viduje ir juos
// įrašykite į <ul> tago vidų. Elementus su tuščiais stringais
// praleiskite ir jiems <li> elementų nekurkite.

const ulElement = document.querySelector("#afrika");
africa.forEach((animal) => {
  if (animal) {
    const li = document.createElement("li");
    const liText = document.createTextNode(animal);
    li.appendChild(liText);
    ulElement.appendChild(li);
  }
});

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input
// laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”.
// Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu
// input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų
// atlikta atitinkama aritmetinė operacija, o jos rezultatas būtų
// atvaizduotas <h5> tage. Pasirinkite patys sau patogiausius
// metodus tai atlikti.

const inputs = document.querySelectorAll("input[type='number']");
const operationButtons = document.querySelectorAll(".operation");
const h5Element = document.querySelector("h5");
operationButtons.forEach((btn) => btn.addEventListener("click", calcAndDisplay));

function calcAndDisplay(e) {
  h5Element.innerText = "";
  if (inputs[0].value && inputs[1].value) {
    const result = operations[e.target.dataset.op](Number(inputs[0].value), Number(inputs[1].value));
    h5Element.innerText = result;
  }
}
const operations = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  minus: (num1, num2) => {
    return num1 - num2;
  },
};

// 5. (BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul>
// tagą. JS pagalba perskaitykite masyvą australia ir kiekvieną
// masyvo elementą įrašykite į strigą su <li> tagais iš abiejų
// pusių, o visus gautus stringus sudėkite į vieną bendrą stringą.
// Tą stirngą naudodami innerHTML() metodą įdėkite į <ul> tago vidų.
// Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.
// Visuose uždaviniuose jeigu jums reikia galite naudoti išorinį css
// stilių, o prie rankiniu būdu HTML’e kuriamų tagų galite pridėti savo
// klases, id ar panašiai.

const ulAustraliaElement = document.querySelector("#australija");

let australiaHtml = "";
australia.forEach((animal) => {
  if (animal === "Dingo") {
    australiaHtml += `<li class='blue'>${animal}</li>`;
  }
  australiaHtml += `<li>${animal}</li>`;
});
ulAustraliaElement.innerHTML = australiaHtml;
