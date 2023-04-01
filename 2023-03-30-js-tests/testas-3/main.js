"use strict";
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const bitGirls = ["Edita", "Lina", "Brigita", "Deimantė", "Justė"];
const cats = ["Murka", "Rainius", "Meilutė", "Bosas", "Dičkis"];

// 1. Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po
// pridėjimo bitGirls turės 6 elementus).

// 2. Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis
// masyvas turėtų elementus iš mažų, dviejų narių, masyviukų: pirmas
// narys katinuko vardas, antras - katinuko svoris - atsitiktinės
// tekstinės reikšmės - “storas” arba “normalus”.

// 3. bitCats masyve suskaičiuokite kiek yra storų ir normalių
// katinukų.

// 4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo
// raidę, abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą
// raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę
// turėtų atsidurti viršuje.

// 5. (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą
// happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir
// katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir
// Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.
