"use strict";
// 1.  Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
//ir
// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 {
  static visiAkmenys = 0;
  static akvk() {
    console.log(this.visiAkmenys);
  }
  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
    this.constructor.visiAkmenys++;
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    this.constructor.visiAkmenys += kiekis;
  }
  kiekPririnktaAkmenu() {
    console.log("%c" + this.akmenuKiekis + " ", "background-color:grey;padding:10px;line-height:30px;border-radius:0 0 50% 50%;color:white;");
  }
  akmenuSkaiciusVisuoseKibiruose() {
    console.log("%c" + Kibiras1.visiAkmenys + " ", "background-color:orange;padding:10px;line-height:30px;border-radius:0 0 50% 50%;color:white;");
  }
}

const k1 = new Kibiras1();
console.log("1. Kibiras ***********************************************************************************************");
console.log(k1);
console.log("pridedam 1 akmeni");
k1.prideti1Akmeni();
k1.kiekPririnktaAkmenu();
console.log("pridedam 9 akmenis");
k1.pridetiDaugAkmenu(9);
k1.kiekPririnktaAkmenu();

console.log("7. Kibiras ***********************************************************************************************");
const k2 = new Kibiras1();
console.log(k1, k2);
console.log("pridedam 9 akmenis i antra kibira");
k2.pridetiDaugAkmenu(9);
console.log("antrame kibire:");
k2.kiekPririnktaAkmenu();
console.log("akmenu visuose kibiruose:");
k1.akmenuSkaiciusVisuoseKibiruose();

// 2 Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

//pabandymui darau su tipo tikrinimu

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }
  ideti(kiekis) {
    if (kiekis < 0 || typeof kiekis !== "number" || Number.isNaN(kiekis)) {
      throw new Error(`Į piniginę galima įdėti tik teigiamą skaičių (number tipo)`);
    }
    kiekis <= 2 ? (this.metaliniaiPinigai += kiekis) : (this.popieriniaiPinigai += kiekis);
  }
  skaiciuoti() {
    console.log(this.popieriniaiPinigai + this.metaliniaiPinigai);
  }
}

const pinigine1 = new Pinigine();
console.log("2. Pinigine ***********************************************************************************************");
console.log(`${pinigine1.ideti(5) || "Idedam 5"}`, pinigine1, "suma: ");
pinigine1.skaiciuoti();
console.log(`${pinigine1.ideti(2) || "Idedam 2"}`, pinigine1, "suma: ");
pinigine1.skaiciuoti();
console.log(`${pinigine1.ideti(100) || "Idedam 100"}`, pinigine1, "suma: ");
pinigine1.skaiciuoti();

try {
  console.log("bandom ideti stringa 100 :");
  pinigine1.ideti("100");
  pinigine1.skaiciuoti();
} catch (e) {
  console.log(e);
}

// 3 Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
//ir
// 4 (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
//pabandymui darau su tipo tikrinimu

class Troleibusas {
  static visiKeleiviai = 0;

  constructor() {
    this.keleiviuSkaicius = 0;
  }

  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    this.visiKeleiviai += keleiviuSkaicius;
  }
  ilipa(keleiviuSkaicius) {
    if (keleiviuSkaicius < 0 || typeof keleiviuSkaicius !== "number" || Number.isNaN(keleiviuSkaicius)) {
      throw new Error(`ilipa metodui pateikite tik teigiama skaičiu (number tipo)`);
    }
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
  }

  islipa(keleiviuSkaicius) {
    if (keleiviuSkaicius <= 0 || typeof keleiviuSkaicius !== "number" || Number.isNaN(keleiviuSkaicius)) {
      throw new Error(`išlipa metodui pateikite tik teigiama,  didesnį už nulį skaičiu (number tipo)`);
    }
    if (keleiviuSkaicius > this.keleiviuSkaicius) {
      this.constructor.bendrasKeleiviuSkaicius(-this.keleiviuSkaicius);
      this.keleiviuSkaicius = 0;
      console.log("Sekmingai islaipinti visi vaziuojantys, bet bandyta islaipinti daugiau keleiviu , nei yra vaziuojanciu");
      return;
    }
    this.keleiviuSkaicius -= keleiviuSkaicius;
    this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
  }

  vaziuoja() {
    console.log(this.keleiviuSkaicius);
  }

  keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(this.constructor.visiKeleiviai);
  }
}

const trol1 = new Troleibusas();
console.log("3. Troleibusas ***********************************************************************************************");
console.log(`${trol1.ilipa(5) || "ilipa 5"}, vaziuoja:`);
trol1.vaziuoja();
console.log(`${trol1.ilipa(2) || "ilipa 2"}, vaziuoja:`);
trol1.vaziuoja();
console.log(`${trol1.islipa(4) || "islipa 4"}, vaziuoja:`);
trol1.vaziuoja();
console.log(`${trol1.islipa(2) || "islipa 2"}, vaziuoja:`);
trol1.vaziuoja();
console.log("bandom ilaipinti 3, daugiau nei vaziuoja keleiviu:");
trol1.islipa(3);
console.log("vaziuoja: ");
trol1.vaziuoja();
try {
  console.log("bandom ilaipinti neigiama skaiciu keleiviu:");
  trol1.ilipa(-9);
  trol1.vaziuoja();
} catch (e) {
  console.log(e);
}

console.log("4. Troleibusas ***********************************************************************************************");
const trol2 = new Troleibusas();
console.log("ilipa 7 i pirma troleibusa");
trol1.ilipa(7);
console.log("visuose troleibusuose:");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("ilipa 3 i antra troleibusa");
trol2.ilipa(3);
console.log("visuose troleibusuose:");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("islipa 2 is pirmo troleibuso");
trol1.islipa(2);
console.log("visuose troleibusuose:");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("islipa 1 is antro troleibuso");
trol2.islipa(1);
console.log("visuose troleibusuose:");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("visuose troleibusuose:");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();

// 5 (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }
  idetiSureli(kiekis) {
    this.#prideti("Sūreliai", kiekis);
  }
  idetiPieno(kiekis) {
    this.#prideti("Pienas", kiekis);
  }
  idetiDuonos(kiekis) {
    this.#prideti("Duona", kiekis);
  }
  #prideti(keyStr, value) {
    this.turinys.has(keyStr) ? this.turinys.set(keyStr, this.turinys.get(keyStr) + value) : this.turinys.set(keyStr, value);
  }
  produktuTurinys() {
    // console.log(this.turinys);
    this.turinys.forEach((item, key) => console.log(key, item));
  }
}

const krepselis = new PirkiniuKrepselis();
console.log("5. Pirkiniu Krepselis (MAP)***********************************************************************************************");
krepselis.idetiDuonos(3);
krepselis.idetiDuonos(2);
krepselis.idetiPieno(2);
krepselis.idetiSureli(10);
krepselis.produktuTurinys();
