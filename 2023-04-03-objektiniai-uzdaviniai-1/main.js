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
//ir
// 6 Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
//pabandymui darau su tipo tikrinimu

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = [];
    this.metaliniaiPinigai = [];
  }
  ideti(kiekis) {
    console.log("%c idedam " + kiekis, "color:blue");
    if (kiekis < 0 || typeof kiekis !== "number" || Number.isNaN(kiekis)) {
      throw new Error(`Į piniginę galima įdėti tik teigiamą skaičių (number tipo)`);
    }
    kiekis <= 2 ? this.metaliniaiPinigai.push(kiekis) : this.popieriniaiPinigai.push(kiekis);
  }
  skaiciuoti() {
    console.log("bendra suma pinigineje: ");
    console.log(this.popieriniaiPinigai.reduce((acc, curr) => acc + curr, 0) + this.metaliniaiPinigai.reduce((acc, curr) => acc + curr, 0));
  }
  monetos() {
    console.log("monetu kiekis pigineje: ");
    console.log(this.metaliniaiPinigai.length);
  }
  banknotai() {
    console.log("banknotu kiekis pigineje: ");
    console.log(this.popieriniaiPinigai.length);
  }
}

const pinigine1 = new Pinigine();
console.log("2., 6.  Pinigine ***********************************************************************************************");
pinigine1.ideti(5);
pinigine1.skaiciuoti();
pinigine1.monetos();
pinigine1.banknotai();
pinigine1.ideti(2);
pinigine1.skaiciuoti();
pinigine1.monetos();
pinigine1.banknotai();
pinigine1.ideti(100);
pinigine1.skaiciuoti();
pinigine1.monetos();
pinigine1.banknotai();

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
console.log(`%c ${trol1.ilipa(5) || "ilipa 5"}, vaziuoja:`, "color:green");
trol1.vaziuoja();
console.log(`%c ${trol1.ilipa(2) || "ilipa 2"}, vaziuoja:`, "color:green");
trol1.vaziuoja();
console.log(`%c ${trol1.islipa(4) || "islipa 4"}, vaziuoja:`, "color:red");
trol1.vaziuoja();
console.log(`%c ${trol1.islipa(2) || "islipa 2"}, vaziuoja:`, "color:red");
trol1.vaziuoja();
console.log("%c bandom ilaipinti 3, daugiau nei vaziuoja keleiviu:", "color:red");
trol1.islipa(3);
console.log("vaziuoja: ");
trol1.vaziuoja();
try {
  console.log("%c bandom ilaipinti neigiama skaiciu keleiviu:", "color:red");
  trol1.ilipa(-9);
  trol1.vaziuoja();
} catch (e) {
  console.log(e);
}

console.log("4. Troleibusas ***********************************************************************************************");
const trol2 = new Troleibusas();
console.log("%c ilipa 7 i pirma troleibusa", "color:green");
trol1.ilipa(7);
console.log("%c visuose troleibusuose:", "color:darkorange");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("%c ilipa 3 i antra troleibusa", "color:green");
trol2.ilipa(3);
console.log("%c visuose troleibusuose:", "color:darkorange");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("%c islipa 2 is pirmo troleibuso", "color:red");
trol1.islipa(2);
console.log("%c visuose troleibusuose:", "color:darkorange");
trol2.keleiviuSkaiciusVisuoseTroleibusuose();
console.log("%c islipa 1 is antro troleibuso", "color:red");
trol2.islipa(1);
console.log("%c visuose troleibusuose:", "color:darkorange");
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

// 8 Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
  }
  ipilti(kiekis) {
    this.kiekis = kiekis >= this.turis - this.kiekis ? this.turis : this.kiekis + kiekis;
  }
  ispilti() {
    const ispilamasKiekis = this.kiekis;
    this.kiekis = 0;
    return ispilamasKiekis;
  }
  stiklinejeYra() {
    console.log("stiklineje yra: " + this.kiekis);
  }
}

const stikline200 = new Stikline(200);
const stikline150 = new Stikline(150);
const stikline100 = new Stikline(100);

console.log("8. Stikline ***********************************************************************************************");
stikline200.ipilti(stikline200.turis);
console.log("%c pripylus pilna dideleje:", "color: blue");
stikline200.stiklinejeYra();
stikline150.ipilti(stikline200.ispilti());
console.log("%c ispylus i vidutine, dideleje:", "color: blue;");
stikline200.stiklinejeYra();
console.log("vidutineje:");
stikline150.stiklinejeYra();
stikline100.ipilti(stikline150.ispilti());
console.log("%c ispylus i maza, vidutineje:", "color: blue;");
stikline150.stiklinejeYra();
console.log("mazoje:");
stikline100.stiklinejeYra();

// 9.  Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

/// dydis pagal grybo svori ar kieki??? krauti vienetus ar grybo svori..

class Grybas {
  constructor() {
    this.valgomas = Boolean(Math.round(Math.random()));
    this.sukirmijes = Boolean(Math.round(Math.random()));
    this.svoris = Math.floor(Math.random() * (45 - 5)) + 5;
  }
}
class Krepsys {
  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;
  }
  deti(grybas) {
    if (grybas.valgomas && !grybas.sukirmijes) {
      this.prikrauta += grybas.svoris;
    }
    if (this.prikrauta >= this.dydis) {
      return false;
    }
    return true;
  }
}

function eitiGrybauti() {
  const krepsys = new Krepsys();
  function grybauti() {
    //recursive
    if (!krepsys.deti(new Grybas())) {
      return;
    } else {
      grybauti();
    }
  }
  grybauti();
  return krepsys;
}

console.log("9. Grybavimas ***********************************************************************************************");
console.log("Prigrybautas krepsys: ", eitiGrybauti());
