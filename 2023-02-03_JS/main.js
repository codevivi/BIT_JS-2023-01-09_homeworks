document.write(`
 <style>
      body {
        font-family: monospace;
        min-height: 100vh;
        font-size: 1.3rem;
        text-align: center;
        padding: 2em;
        margin: auto;
        color: #969595;
        background-color: #1b1b1b;
      }

      p {
        line-height: 1;
        padding: 0;
        margin: 0;
      }

      ol {
        margin: auto;
        text-align: left;
      }

      li {
        margin-bottom: 1rem;
      }

      li div {
        margin-top: 1rem;
        position: relative;
      }

      .long-string {
        display: block;
        padding: 1.5rem 0;
        overflow-x: scroll;
        font-size: 0.9rem;
        width: 100%;
        overflow-x: scroll;
      }

      .square {
        font-size: 0.8rem;
        line-height: 0.48rem;
        justify-content: center;
      }
    </style>
`);
document.write(`
<h1>JavaScript homework <small>2023-02-03</small></h1>
<ol>
<li>
Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite <em>keturis</em>  skirtingus scenarijus kai monetos metimą stabdome:
 <ul><li> a) Iškritus herbui:
 <div>
`);
///////////////////////////////////Solution 1 A///////////////////////////////////////
///////////////////////////////////
let skaicius; //starts with undefined (would translate to false(herbas)), but do while loop will run at least once anyway
do {
  skaicius = rand(0, 1);
  document.write(skaicius ? "S" : "H"); //this is shorter conditional (ternary), same possible with if..
} while (skaicius); //herbas yra 0, 0 translates to false, so: while true(skaicius)-laukiam false(0)
///////////////////////////////////

document.write(`</div></li><li> b) Tris kartus iškritus herbui:
 <div>`);

///////////////////////////////////Solution 1 B///////////////////////////////////////
let herbasCount = 0;
while (herbasCount < 3) {
  let skaicius = rand(0, 1);
  if (skaicius) {
    document.write("S");
  } else {
    document.write("H");
    herbasCount++;
  }
}
///////////////////////////////////

document.write(`</div></li><li> c) Tris kartus iš eilės iškritus herbui:
 <div>`);
///////////////////////////////////Solution 1 C///////////////////////////////////////
let str = "";
while (!str.includes("HHH")) {
  skaicius = rand(0, 1);
  document.write(skaicius ? "S" : "H");
  str += skaicius ? "S" : "H";
}

///////////////////////////////////
document.write(`</div></li></ul> 
</li>
<li>
Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
  
  <div>`);

///////////////////////////////////Solution 2 ///////////////////////////////////////
///////////////////////////////////
let pointsKazys = 0;
let pointsPetras = 0;
let laimetojoStr = "LYGIOSIOS";
while (pointsKazys < 222 && pointsPetras < 222) {
  pointsKazys += rand(5, 25);
  pointsPetras += rand(10, 20);
}
if (pointsKazys > pointsPetras) {
  laimetojoStr = "Kazys";
} else if (pointsPetras > pointsKazys) {
  laimetojoStr = "Petras";
}

document.write(`Kazys: ${pointsKazys}, Petras: ${pointsPetras}. Partiją laimėjo: ${laimetojoStr}`);

///////////////////////////////////

document.write(`</div>
</li>
</ol>`);
function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
