/// 1.
////////////////////////////////////////
let arr = [];
while (arr.length < 30) {
  arr.push(rand(5, 25));
}
document.getElementById("log1").innerHTML = `${arr}<br/>Jo ilgis:${arr.length}`;
////////////////////////////////////////

/// 2a
////////////////////////////////////////
let countBiggerThan10 = 0;
arr.forEach((num) => {
  if (num > 10) countBiggerThan10++;
});
document.getElementById("log2a").textContent = countBiggerThan10;
////////////////////////////////////////

/// 2b
////////////////////////////////////////
let max = Math.max(...arr);
let logStr = `Didžiausia masyvo reikšmė yra: ${max}, indeksuose: `;
arr.forEach((num, i) => {
  if (num === max) logStr += `${i},`;
});
document.getElementById("log2b").textContent = logStr.slice(0, logStr.length - 1); //to slice off last comma
////////////////////////////////////////

/// 2c
////////////////////////////////////////
let evenSum = 0;
for (let i = 0; i < arr.length; i += 2) {
  evenSum += arr[i];
}
document.getElementById("log2c").textContent = evenSum;
////////////////////////////////////////

/// 2d
////////////////////////////////////////
let newArr = arr.map((num, ind) => {
  return num - ind;
});
document.getElementById("log2d").textContent = newArr;
////////////////////////////////////////

/// 2e
////////////////////////////////////////
while (arr.length <= 39) {
  arr.push(rand(5, 25));
}
document.getElementById("log2e").innerHTML = `masyvas turi ${arr.length} elementų:
paskutinis indeksas: ${arr.length - 1} ${arr}`;
////////////////////////////////////////

/// 2f
////////////////////////////////////////
let arrFromEvenInd = [];
let arrFromOddInd = [];
for (let i = 0; i < arr.length - 1; i += 2) {
  arrFromEvenInd.push(arr[i]);
  arrFromOddInd.push(arr[i + 1]);
}
document.getElementById("log2f").innerHTML = `Naujas masyvas is lyginių indeksų reikšmių: ${arrFromEvenInd}<br/>
Masyvas iš nelyginių indeksų reikšmių: ${arrFromOddInd}`;
////////////////////////////////////////

/// 2g
////////////////////////////////////////
arr.forEach((num, i) => {
  if (num > 15 && i % 2 === 0) {
    arr[i] = 0;
  }
});
document.getElementById("log2g").textContent = arr;
////////////////////////////////////////

/// 2h
////////////////////////////////////////
let ind = arr.findIndex((num) => num > 10);
document.getElementById("log2h").textContent = ind;
////////////////////////////////////////

/// 2i
////////////////////////////////////////
arr = arr.filter((num, i) => {
  if (i % 2) {
    return num;
  }
  return false;
});
document.getElementById("log2i").textContent = arr;
////////////////////////////////////////

/// 3.
////////////////////////////////////////
let letterArr = [];
let letterCount = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
};
while (letterArr.length < 200) {
  let randomLetter = String.fromCharCode(rand(65, 68));
  letterCount[randomLetter]++;
  letterArr.push(randomLetter);
}
document.getElementById("log3").innerHTML = `${letterArr} <br> Ilgis: ${letterArr.length}<br/> A: ${letterCount.A}<br/>B: ${letterCount.B}<br/>C:${letterCount.C}<br/>D:${letterCount.D}`;
////////////////////////////////////////

/// 4.
////////////////////////////////////////
letterArr.sort();
document.getElementById("log4").textContent = `${letterArr}`;
////////////////////////////////////////

/// 5.
////////////////////////////////////////
let multiArr = []; //will store 3 randmom letters arrays
for (let i = 0; i < 3; i++) {
  let arr = [];
  while (arr.length < 200) {
    arr.push(String.fromCharCode(rand(65, 68)));
  }
  multiArr.push(arr);
}

//sum multiple array values by index
let sumArr = [];
for (let i = 0; i < 200; i++) {
  let str = multiArr[0][i] + multiArr[1][i] + multiArr[2][i];
  sumArr.push(str);
}
console.log("sumARR", sumArr.length);
//count all possible combos
let differentCombinations = [];
sumArr.forEach((str) => {
  if (!differentCombinations.includes(str)) {
    differentCombinations.push(str);
  }
});

let mixedLetterCombosCount = 0;

sumArr.forEach((str) => {
  if (str !== "AAA" && str !== "BBB" && str !== "CCC" && str !== "DDD") {
    mixedLetterCombosCount++;
  }
});

document.getElementById(
  "log5"
).innerHTML = `${multiArr[0]}<br/>${multiArr[1]}<br/>${multiArr[2]}<br/><br/>Sudėtas masyvas:<br/> ${sumArr}<br/> <br/>Gautos ${mixedLetterCombosCount} kombinacijos,sudarytas NE iš vienos(tos pačios) reikšmės<br/><br/>ir<br/><br/>${differentCombinations.length} skirtingos kombinacijos ("unikaliios kombinacijos"):.<br/> ${differentCombinations}<br/>`;
////////////////////////////////////////

/// 6.
////////////////////////////////////////
let randomUnique1 = generateRandomUniqueNumArr();
let randomUnique2 = generateRandomUniqueNumArr();
function generateRandomUniqueNumArr() {
  let arr = [];
  while (arr.length < 100) {
    let randomNum = rand(100, 999);
    while (arr.indexOf(randomNum) >= 1) {
      //jei toks egzistuoja, generuoti toliau
      randomNum = rand(100, 999);
    }
    arr.push(randomNum);
  }
  return arr;
}

document.getElementById("log6").innerHTML = `${randomUnique1}<br/> ${randomUnique2}`;

////////////////////////////////////////

/// 7.
////////////////////////////////////////
let diffArr = randomUnique1.filter((num) => {
  return !(randomUnique2.indexOf(num) >= 0);
});

document.getElementById("log7").innerHTML = `${diffArr}<br/> jo ilgis: ${diffArr.length}`;
////////////////////////////////////////
/// 8.
let repeatArr = randomUnique1.filter((num) => {
  return randomUnique2.indexOf(num) >= 0;
});
document.getElementById("log8").innerHTML = `${repeatArr}<br/> jo ilgis: ${repeatArr.length}`;
////////////////////////////////////////
////////////////////////////////////////

/// 9.
let mutantArr = [];
randomUnique1.forEach((num, i) => {
  mutantArr[num] = randomUnique2[i];
});
////////////////////////////////////////
document.getElementById("log9").innerHTML = `${mutantArr}<br/>Jo ilgis:${mutantArr.length}`;
////////////////////////////////////////
/// 10.
let strangeArr = [];
while (strangeArr.length < 10) {
  if (strangeArr.length < 2) {
    strangeArr.push(rand(5, 25));
  } else {
    let prev = strangeArr[strangeArr.length - 1];
    let prevPrev = strangeArr[strangeArr.length - 2];
    strangeArr.push(prev + prevPrev);
  }
}
////////////////////////////////////////
document.getElementById("log10").textContent = `${strangeArr}`;
////////////////////////////////////////
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
