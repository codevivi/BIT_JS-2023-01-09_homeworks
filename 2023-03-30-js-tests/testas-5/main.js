"use strict";

const colorInput = document.querySelector("#color");
const numberInput = document.querySelector("#number");
const addBtn = document.querySelector("#add");
const deleteBtn = document.querySelector("#delete");
const stageEl = document.querySelector(".stage");
addBtn.addEventListener("click", sukurtiNauja);
deleteBtn.addEventListener("click", istrinti);

const balls = [];

class ColorBall {
  constructor(color, number) {
    this.color = color;
    this.number = number;
  }
}

function sukurtiNauja() {
  if (colorInput.value && numberInput.value) {
    balls.push(new ColorBall(colorInput.value, numberInput.value));
    stageEl.innerHTML = "";
    balls.forEach((ball) => (stageEl.innerHTML += `<div class='ball' style="background-color: ${ball.color}">${ball.number}</div>`));
  }
}

function istrinti() {
  if (balls.length > 0) {
    let el = stageEl.querySelector("div:first-child");
    balls.unshift();
    stageEl.removeChild(el);
  }
}

//19.16
// Reikalavimui JS kodui: turi būti sukurtas masyvas balls ir klasė ColorBall.

// Reikalavimui HTML: turi būti sukurti du laukeliai duomenims įvesti- spalvai ir
// numeriui; vieta, kurioje bus atvaizduojami sukurti rutuliukai, du mygtukai-
// “sukurti naują” ir “ištrinti seniausią”.

// Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra
// reikalingi. Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline
// be jokių ribojimų.

// 1. Sukurti klasę ColorBall, kuri turėtų dvi savybes: color ir
// number. Savybės turi būti įrašomos objekto kūrimo metu.
// Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą
// balls.

// 2. Mygtukas “sukurti naują” turi inicijuoti kodą, kuris perskaitytų
// duomenis iš laukelių ir pagal juos sukurtų naują objektą.

// 3. Masyvas turi būti atvaizduojamas vizualiai HTML’e. Jame esantys
// objektai turi būti atvaizduojami kaip atitinkamos spalvos
// apskritimai su numeriu viduryje.

// 4. Mygtukas “ištrinti seniausią” turi inicijuoti kodą, kuris iš
// masyvo pašaliną seniausią kamuoliuką (seniausias yra masyvo
// pradžioje)

// 5. Pasikeitus masyvo elementams (pridėjus, ištrynus) vizualinis
// masyvo atvaizdas HTML’e turi keistis dinamiškai.
