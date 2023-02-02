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
<h1>JavaScript homework <small>2023-02-02</small></h1>
<ol>
<li>
  Naršyklėje nupieškite linija iš 400 “*”. Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”.
  <div>
`);

///////////////////////////////////Solution///////////////////////////////////////
///////////////////////////////////
count = 400;
while (count > 0) {
  document.write("<p>" + "*".repeat(50) + "</p>");
  count -= 50;
}
///////////////////////////////////

document.write("<p>Another way</p>");

///////////////////////////////////Solution///////////////////////////////////////
///////////////////////////////////
let stars = "<p>";
count = 1;
while (count <= 400) {
  stars += "*";
  if (count % 50 === 0) {
    stars += "<br>";
  }
  count++;
}
stars += "</p>";
document.write(stars);
///////////////////////////////////

document.write("<p>Another way</p>");

///////////////////////////////////Solution///////////////////////////////////////
///////////////////////////////////
document.write(`<p>${("*".repeat(50) + "<br>").repeat(400 / 50)}</p>`);
///////////////////////////////////

document.write("<p>Another way</p>");

///////////////////////////////////Solution///////////////////////////////////////
///////////////////////////////////
document.write("<p>");
stars = "*".repeat(400);
while (stars.length >= 50) {
  if (stars.length === 400) {
  }
  document.write(stars.slice(-50) + "<br>");
  stars = stars.slice(0, stars.length - 50);
}
document.write("</p>");
///////////////////////////////////

document.write(`</div>
</li>
<li>
  Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150. Skaičiai didesni nei 275 turi būti raudonos spalvos.
  <div>`);

///////////////////////////////////Solution///////////////////////////////////////
///////////////////////////////////
count = 0;
let largerThan50Count = 0;
let str = ``;
while (count < 300) {
  let num = rand(0, 300);
  if (num > 150) {
    largerThan50Count++;
  }
  if (num > 270) {
    str += `<span style="color:red">${num} </span>`;
  } else {
    str += num + ` `;
  }
  count++;
}
document.write(str);
///////////////////////////////////

document.write(`<strong style="color:green">Didesnių už 150 skaičių buvo: ${largerThan50Count} </strong>`);
document.write(`</div>
</li>
<li>
  Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytusi ekrane.
  <div>`);

///////////////////////////////////Solution///////////////////////////////////////
///////////////////////////////////
let num = 77;
let numString = "";
while (num <= 3000) {
  numString += num + ",";
  num += 77;
}
document.write(`<p class="long-string">${numString.slice(0, numString.length - 1)}</p>`);
///////////////////////////////////

document.write(` </div>
</li>
<li>
  Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis. <br />
  +5. Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
  <div>`);

///////////////////////////////////Solution///////////////////////////////////////
///////////////////////////////////
document.write(`<p class="square">`);
let height = 100;
while (height) {
  let width = 100;
  while (width) {
    if (width === height || width + height === 101) {
      document.write(`<span style="color:red">*</span>`);
    } else {
      document.write(`*`);
    }
    width--;
  }
  document.write("<br>");
  height--;
}
document.write(`</p>`);
///////////////////////////////////

document.write(` </div>
</li>
</ol>`);
function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
