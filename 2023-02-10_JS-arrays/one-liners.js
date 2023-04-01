/// 1.Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
let arr = [...Array(30)].map((_) => Math.floor(Math.random() * (25 - 5 + 1) + 5));

console.log(arr, "task 1");
document.getElementById("log1").innerHTML = `${arr}<br/>Jo ilgis:${arr.length}`;

//2.Naudodamiesi 1 uždavinio masyvu:
/// 2a Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
//const countBiggerThan10 = arr.reduce((acc, curr) => (curr > 10 ? ++acc : acc), 0);
//or
const countBiggerThan10 = arr.filter((num) => num > 10).length;

console.log(countBiggerThan10, "task 2a");
document.getElementById("log2a").textContent = countBiggerThan10;

/// 2b Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
const max = arr.reduce((acc, curr, currInd) => (acc.max === curr ? { ...acc, indexes: [...acc.indexes, currInd] } : acc), { max: Math.max(...arr), indexes: [] });

console.log(max, "task 2b");
let logStr = `Didžiausia masyvo reikšmė yra: ${max.max}, indeksuose: ${max.indexes.join(",")}`;
document.getElementById("log2b").textContent = logStr; //to slice off last comma

/// 2c Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
const evenSum = arr.reduce((acc, curr, currInd) => (currInd % 2 === 0 ? acc + curr : acc), 0);

console.log(evenSum, "task 2c");
document.getElementById("log2c").textContent = evenSum;

/// 2d Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
let newArr = arr.map((num, ind) => num - ind);

console.log(newArr, "task 2d");
document.getElementById("log2d").textContent = newArr;

/// 2e Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
arr = [...arr, ...[...Array(39 - arr.length)].map((_) => Math.floor(Math.random() * (25 - 5 + 1) + 5))];

console.log(arr, "task 2e");
document.getElementById("log2e").innerHTML = `masyvas turi ${arr.length} elementų:
paskutinis indeksas: ${arr.length - 1} ${arr}`;

/// 2f Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
const [arrFromEvenInd, arrFromOddInd] = [arr.filter((_, i) => i % 2 === 0), arr.filter((_, i) => i % 2 !== 0)];

console.log(arrFromEvenInd, "fromEvenInd", "task 2f");
console.log(arrFromOddInd, "fromOddInd", "task 2f");
document.getElementById("log2f").innerHTML = `Naujas masyvas is lyginių indeksų reikšmių: ${arrFromEvenInd}<br/>
Masyvas iš nelyginių indeksų reikšmių: ${arrFromOddInd}`;

/// 2g Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
// arr.forEach((num, i) => (i % 2 === 0 && num > 15 ? (arr[i] = 0) : (arr[i] = arr[i]))); //modify in place with forEach
arr = arr.map((num, i) => (i % 2 === 0 && num > 15 ? 0 : num)); //reassign new modified

console.log(arr, "task 2g");
document.getElementById("log2g").textContent = arr;

/// 2h Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
let ind = arr.findIndex((num) => num > 10);

console.log(ind, "task 2h");
document.getElementById("log2h").textContent = ind;

/// 2i Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

arr = arr.filter((_, i) => i % 2);

console.log(arr, "task 2i");
document.getElementById("log2i").textContent = arr;

/// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
const letterArr = [...Array(200)].map((_) => String.fromCharCode(Math.floor(Math.random() * (68 - 65 + 1) + 65)));
const letterCount = letterArr.reduce((acc, curr) => ++acc[curr] && acc, { A: 0, B: 0, C: 0, D: 0 });

console.log(letterArr, letterCount, "task 3");
document.getElementById("log3").innerHTML = `${letterArr} <br> Ilgis: ${letterArr.length}<br/> A: ${letterCount.A}<br/>B: ${letterCount.B}<br/>C:${letterCount.C}<br/>D:${letterCount.D}`;

/// 4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
letterArr.sort();
document.getElementById("log4").textContent = `${letterArr}`;
////////////////////////////////////////

/// 5. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami reiksmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
////////////////////////////////////////

const len = 20;
const makeLetterArr = (len) => [...Array(len)].map((_) => String.fromCharCode(Math.floor(Math.random() * (68 - 65 + 1) + 65)));
const [letterArr1, letterArr2, letterArr3] = [makeLetterArr(len), makeLetterArr(len), makeLetterArr(len)];
const sumArr = letterArr1.map((letter, i) => letter + letterArr2[i] + letterArr3[i]);
const differentCombinations = [...new Set(sumArr)];
//or
//const differentCombinations = sumArr.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [sumArr[0]]);

const mixedLetterCombosCount = sumArr.filter((str) => str !== "AAA" && str !== "BBB" && str !== "CCC" && str !== "DDD").length;

console.log(letterArr1, "task 5 first array");
console.log(letterArr2, "task 5 second array");
console.log(letterArr3, "task 5 third array");
console.log("sumArr", sumArr, "task 5 sum by indexes array");
console.log(differentCombinations.length, "different combinations, task 5");
console.log(mixedLetterCombosCount, "mixedLettersCombosCount, task 5 ");

document.getElementById(
  "log5"
).innerHTML = `${letterArr1}<br/>${letterArr2}<br/>${letterArr3}<br/><br/>Sudėtas masyvas:<br/> ${sumArr}<br/> <br/>Gautos ${mixedLetterCombosCount} kombinacijos,sudarytas NE iš vienos(tos pačios) reikšmės<br/><br/>ir<br/><br/>${differentCombinations.length} skirtingos kombinacijos ("unikaliios kombinacijos"):.<br/> ${differentCombinations}<br/>`;
////////////////////////////////////////

/// 6. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
//neisivaizduoju kaip ta padaryti trumpiau, viena eilute..
let randomUnique1 = generateRandomUniqueNumArr(100);
let randomUnique2 = generateRandomUniqueNumArr(100);

function generateRandomUniqueNumArr(len) {
  let arr = [];
  while (arr.length < len) {
    let randomNum = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    while (arr.indexOf(randomNum) >= 1) {
      //jei toks egzistuoja, generuoti toliau
      randomNum = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
    arr.push(randomNum);
  }
  return arr;
}

console.log(randomUnique1, "task 6 randomunique1");
console.log(randomUnique2, "task 6 randomunique2");
document.getElementById("log6").innerHTML = `${randomUnique1}<br/> ${randomUnique2}`;

/// 7. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
// let diffArr = randomUnique1.filter((num) => !(randomUnique2.indexOf(num) >= 0));
// arba;
let diffArr = randomUnique1.filter((num) => !randomUnique2.includes(num));

console.log(diffArr, "task 7");
document.getElementById("log7").innerHTML = `${diffArr}<br/> jo ilgis: ${diffArr.length}`;

/// 8. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
let repeatArr = randomUnique1.filter((num) => randomUnique2.indexOf(num) >= 0);

console.log(repeatArr, "task 8");
document.getElementById("log8").innerHTML = `${repeatArr}<br/> jo ilgis: ${repeatArr.length}`;

/// 9.Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
//nezinau kaip trumpiau, viena eilute..
let mutantArr = [];
randomUnique1.forEach((num, i) => (mutantArr[num] = randomUnique2[i]));

console.log(mutantArr, "task 9");
document.getElementById("log9").innerHTML = `${mutantArr}<br/>Jo ilgis:${mutantArr.length}`;

/// 10.Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
////nezinau kaip viena eilute.. nebent dviem..

let strangeArr = [];
[...Array(10)].forEach((_, ind) => (ind < 2 ? strangeArr.push(Math.floor(Math.random() * (25 - 5 + 1) + 5)) : strangeArr.push(strangeArr[ind - 1] + strangeArr[ind - 2])));

// while (strangeArr.length < 10) {
//   if (strangeArr.length < 2) {
//     strangeArr.push(Math.floor(Math.random() * (25 - 5 + 1) + 5));
//   } else {
//     let prev = strangeArr[strangeArr.length - 1];
//     let prevPrev = strangeArr[strangeArr.length - 2];
//     strangeArr.push(prev + prevPrev);
//   }
// }
console.log(strangeArr, "task 10");
document.getElementById("log10").textContent = `${strangeArr}`;
