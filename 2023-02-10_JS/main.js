/// elements to log answers to
const logElement1 = document.getElementById("log1");
const logElement2 = document.getElementById("log2");
const logElement2a = document.getElementById("log2a");
const logElement2b = document.getElementById("log2b");
const logElement2c = document.getElementById("log2c");
const logElement2d = document.getElementById("log2d");
const logElement2e = document.getElementById("log2e");
const logElement2f = document.getElementById("log2f");
const logElement2g = document.getElementById("log2g");
const logElement2h = document.getElementById("log2h");
const logElement2i = document.getElementById("log2i");
const logElement3 = document.getElementById("log3");

/// 1.
////////////////////////////////////////
let arr = [];
while (arr.length < 30) {
  arr.push(rand(5, 25));
}
logElement1.textContent = arr;
////////////////////////////////////////

/// 2a
////////////////////////////////////////
let countBiggerThan10 = 0;
arr.forEach((num) => {
  if (num > 10) countBiggerThan10++;
});
logElement2a.textContent = countBiggerThan10;
////////////////////////////////////////

/// 2b
////////////////////////////////////////
let max = Math.max(...arr);
let logStr = `Didžiausia masyvo reikšmė yra: ${max}, indeksuose: `;
arr.forEach((num, i) => {
  if (num === max) logStr += `${i},`;
});
logElement2b.textContent = logStr.slice(0, logStr.length - 1);
////////////////////////////////////////

/// 2c
////////////////////////////////////////
let evenSum = 0;
for (let i = 0; i < arr.length; i += 2) {
  evenSum += arr[i];
}
logElement2c.textContent = evenSum;
////////////////////////////////////////

/// 2d
////////////////////////////////////////
let newArr = arr.map((num, ind) => {
  return num - ind;
});
logElement2d.textContent = newArr;
////////////////////////////////////////

/// 2e
////////////////////////////////////////
while (arr.length <= 39) {
  arr.push(rand(5, 25));
}
logElement2e.textContent = `masyvas turi ${arr.length} elementų:
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
logElement2f.innerHTML = `Naujas masyvas is lyginių indeksų reikšmių: ${arrFromEvenInd}<br/>
Masyvas iš nelyginių indeksų reikšmių: ${arrFromOddInd}`;
////////////////////////////////////////

/// 2g
////////////////////////////////////////
arr.forEach((num, i) => {
  if (num > 15 && i % 2 === 0) {
    arr[i] = 0;
  }
});
logElement2g.textContent = arr;
////////////////////////////////////////

/// 2h
////////////////////////////////////////
let ind = arr.findIndex((num) => num > 10);
logElement2h.textContent = ind;
////////////////////////////////////////

/// 2i
////////////////////////////////////////
arr = arr.filter((num, i) => {
  if (i % 2) {
    return num;
  }
  return false;
});
logElement2i.innerHTML = arr;
////////////////////////////////////////

/// 3.
////////////////////////////////////////
let letterArr = [];
while (letterArr.length < 200) {
  letterArr.push(String.fromCharCode(rand(65, 68)));
}
logElement3.innerHTML = `${letterArr} <br> Ilgis: ${letterArr.length}`;
////////////////////////////////////////

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
