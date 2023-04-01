"use strict";
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
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
