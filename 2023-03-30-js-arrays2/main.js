/// 1.Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
const arr = [];
////////////////////////////////////////
document.getElementById("log1").innerHTML = `${arr}<br/>Jo ilgis:${arr.length}`;
////////////////////////////////////////

/// 2.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
////////////////////////////////////////
document.getElementById("log2").textContent = "";
////////////////////////////////////////

///3.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
////////////////////////////////////////
document.getElementById("log3").textContent = "";
////////////////////////////////////////

///4.Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
////////////////////////////////////////
document.getElementById("log4").textContent = "";
////////////////////////////////////////

///5.Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
////////////////////////////////////////
document.getElementById("log5").textContent = "";
////////////////////////////////////////

///6.Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
////////////////////////////////////////
document.getElementById("log6").innerHTML = "";
////////////////////////////////////////

///7.Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
////////////////////////////////////////
document.getElementById("log7").innerHTML = "";
////////////////////////////////////////

///8.Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
////////////////////////////////////////
document.getElementById("log8").textContent = "";
////////////////////////////////////////

///9.Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
////////////////////////////////////////
document.getElementById("log9").textContent = "";
////////////////////////////////////////

///10.Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
////////////////////////////////////////
document.getElementById("log10").textContent = "";
////////////////////////////////////////

///11.Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
////////////////////////////////////////
document.getElementById("log11").innerHTML = "";
////////////////////////////////////////

///12.Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
////////////////////////////////////////
document.getElementById("log12").textContent = "";
////////////////////////////////////////

///13.Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
////////////////////////////////////////
document.getElementById("log13").innerHTML = "";
////////////////////////////////////////

///14.Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
////////////////////////////////////////
document.getElementById("log14").innerHTML = "";

////////////////////////////////////////

///15.Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
////////////////////////////////////////
document.getElementById("log15").innerHTML = "";
////////////////////////////////////////
///16.Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
document.getElementById("log16").innerHTML = "";
////////////////////////////////////////
////////////////////////////////////////

/// 17.Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
////////////////////////////////////////
document.getElementById("log17").innerHTML = "";
////////////////////////////////////////

/// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
////////////////////////////////////////
document.getElementById("log18").textContent = "";
////////////////////////////////////////

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
