/// 1.Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
let wallet = [...Array(Math.floor(Math.random() * (30 - 10 + 1) + 10))].map((_) => Math.floor(Math.random() * 11));

console.log(wallet, "pinigine, task 1");
document.getElementById("log1").innerHTML = `${wallet}<br/>Jo ilgis:${wallet.length}`;

/// 2.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
const sum = wallet.reduce((acc, curr) => acc + curr);

console.log(sum, "pinigines suma, task 2");
document.getElementById("log2").textContent = sum;

///3.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
const sumPaper = wallet.reduce((acc, curr) => (curr > 2 ? acc + curr : acc), 0);

console.log(sumPaper, "pinigines popieriniu(>2) suma, task 3");
document.getElementById("log3").textContent = sumPaper;

///4.Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
wallet = wallet.map((money) => (money > 2 ? money : 0));

console.log(wallet, "pinigine isleidus metalinius (>2), task 4");
document.getElementById("log4").textContent = wallet;

///5.Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
const max = wallet.reduce((acc, curr) => (curr === acc.max ? { ...acc, quantity: ++acc.quantity } : acc), { max: Math.max(...wallet), quantity: 0 });

console.log("didziausia: ", max.max, "ju yra :", max.quantity, "task 5");
document.getElementById("log5").textContent = `Didziausia reiksme: ${max.max}, ju yra; ${max.quantity}`;

///6.Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
wallet = wallet.map((money, ind) => (!money ? ind : money));

console.log(wallet, "nuliai pakeisti i indeksus, task 6");
document.getElementById("log6").innerHTML = wallet;

///7.Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
console.log(wallet, wallet.length, 30 - wallet.length);
// wallet = [...wallet, ...[...Array(30 - wallet.length)].map((_) => Math.floor(Math.random() * 11))];
//or
wallet = wallet.concat([...Array(30 - wallet.length)].map((_) => Math.floor(Math.random() * 11)));

console.log(wallet, "ilgis: ", wallet.length, "prideta kad ilgis butu 30, task 7");
document.getElementById("log7").innerHTML = `${wallet}, ilgis ${wallet.length}`;

///8.Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
const { coins, paper } = wallet.reduce((acc, curr) => (curr > 2 ? acc.paper.push(curr) && acc : acc.coins.push(curr) && acc), { coins: [], paper: [] });

console.log("coins: ", coins, "paper: ", paper, "task 8");
document.getElementById("log8").textContent = `coins: ${coins}; paper: ${paper};`;

///9.Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
const dividedWallet = [coins, paper];

console.log("pinigine su dviem skyreliais: ", dividedWallet, "task 9");
document.getElementById("log9").textContent = `${JSON.stringify(dividedWallet)}`;

///10.Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
dividedWallet.push(["KIKA", "Euro Vaistinė", "Drogas", "Ačiū", "Lietuvos Geležinkeliai", "Mano RIMI"]);

console.log("pinigine su trim skyreliais: ", dividedWallet, "task 10");
document.getElementById("log10").textContent = `${JSON.stringify(dividedWallet)}`;

///11.Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
dividedWallet[2].sort((a, b) => a.localeCompare(b, "lt", { sensitivity: "base" })); //sensitivity 'base' treats a same as A

console.log("pinigine su trim skyreliais: ", dividedWallet, "task 11");
document.getElementById("log11").textContent = `${JSON.stringify(dividedWallet)}`;

///12.Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
const banks = ["Vienaragio", "Miesto", "Blobnor", "Sveikatos", "Šalies", "Tavo", "Arklio", "Pinigų", "Makaronai", "LLO", "DB", "BlA", "Paskolos", "Milijono"]; // na cia reikia tureti tiek skirtingu banku kiek noresi generuoti skirtingu korteliu... nezinau kaip kitaip.. ar cia isvis nereikejo banku..
dividedWallet[2] = dividedWallet[2].concat([...Array(20 - dividedWallet[2].length)].map((_, ind) => (Math.round(Math.random()) ? `MasterCard ${banks[ind]} bankas` : `Visa ${banks[ind]} bankas`)));

console.log("pinigine su 20 korteliu :", dividedWallet, "task 12");
document.getElementById("log12").textContent = `korteliu skyrelyje yra ${dividedWallet[2].length} korteliu: ${dividedWallet[2]}`;

///13.Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
const visaCount = dividedWallet[2].filter((card) => card.startsWith("Visa")).length;
const masterCardCount = dividedWallet[2].filter((card) => card.startsWith("MasterCard")).length;
mostCardType = visaCount > masterCardCount ? "visa" : visaCount === masterCardCount ? "visa ir MasterCard po lygiai" : "MasterCard";

console.log("Dauguma korteliu yra: ", mostCardType, ",task 13");
document.getElementById("log13").innerHTML = mostCardType;

///14.Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
dividedWallet.push([...Array(10)].map((_) => Math.floor(Math.random() * (9999999999 - 1000000000 + 1) + 1000000000)));

console.log("pinigine su loterijos bilietais: ", dividedWallet, "task 14");
document.getElementById("log14").innerHTML = `${JSON.stringify(dividedWallet)}`;

///15.Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
dividedWallet[3].sort((a, b) => b - a);

console.log("pinigine su isrusiuotais bilietais: ", dividedWallet, "task 15");
document.getElementById("log15").innerHTML = dividedWallet[3];

///16.Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
//generuojant atsitiktinius gali buti arba lygu 500 arba daugiau uz 500 arba kiek maziau..???
let amount = 0;
while (amount < 500) dividedWallet[1].push(Math.floor(Math.random() * (10 - 3 + 1) + 3)) && (amount += dividedWallet[1][dividedWallet.length - 1]);

console.log(`pinigine su pridetais ${amount}`, dividedWallet, "task 16");
document.getElementById("log16").innerHTML = `prideta ${amount} i popieriniu skyrteli:  ${dividedWallet[1]}`;

/// 17.Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
let luckyTicketsAmount = dividedWallet[3].filter((ticket) => ticket % 777 === 0).length;
let win = luckyTicketsAmount > 0 ? "Jūs laimėjote!" : "Nieko nelaimėjote";
console.log(win, "laimingu bilietu: ", luckyTicketsAmount, "task 17");

document.getElementById("log17").innerHTML = `${win}. Laimingu bilietu: ${luckyTicketsAmount}`;

/// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
dividedWallet[dividedWallet.length] = ["šuo", "katė", "automobilis", "namas", "kiemas"].sort((a, b) => a.length - b.length);
console.log("pinigine su isrusiuotom nuotraukom: ", dividedWallet, ", task 18");
document.getElementById("log18").textContent = JSON.stringify(dividedWallet);
