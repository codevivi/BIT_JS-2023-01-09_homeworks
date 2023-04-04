// 1. Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(), kuris sukuria naują Marsas objektą, turintį dvi savybes id: rand 100000 - 999999 ir pavadinimas: pagal taisyklę iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”. Metodas grąžina Marsas objektą. Metodą iškvietus trečią, ketvirtą ir t.t. kartus, metodas turi nekurti daugiau naujų Marsas objektų, o grąžinti atsitiktine tvarka, vieną iš dviejų jau sukurtų Marsas objektų. Tarkim penkis kartus iškvietus metodą, turime matyti tik du skirtingus objektus (žiūrim pagal id).

class Marsas {
  static palydovuPavadinimai = ["Fobas", "Deimas"];
  static palydovai = [];
  constructor() {
    if (this.constructor.palydovuPavadinimai.length === 0) {
      return this.constructor.palydovai[Math.floor(Math.random() * this.constructor.palydovai.length)];
    }
    this.id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.pavadinimas = this.constructor.palydovuPavadinimai.pop();
    this.constructor.palydovai.push(this);
  }
  static pridetiPalydova() {
    return new Marsas();
  }
}
console.log("1. Marsas ***************************************************************************");
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());

// 2. Sukurti klasę Puodelis. Puodelis turi dvi savybes: spalva ir ipilta. Sukurti statinį metodą gamintiPuodelius(), kuris pagamina du objektus su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. Sukurti statinį metodą perpilti(), kuris “pilną” puodelį padaro tuščią ir atvirkščiai. Sukurti statinį metodus ispiltiViska(), kuris abu puodelius padaro “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro “pilnus”. Po šių metodų iškvietimo, metodas perpilti() turi veikti korektiškai ir logiškai (arba abu “tušti” arba abu “pilni”).

class Puodelis {
  static puodeliai = null;
  constructor(spalva, ipilta) {
    this.spalva = spalva;
    this.ipilta = ipilta;
  }
  static gamintiPuodelius() {
    if (!this.puodeliai) {
      const puodeliai = [new Puodelis("raudonas", "pilnas"), new Puodelis("geltonas", "tuscias")];
      this.puodeliai = puodeliai;
      console.log("sukurti puodeliai: ", this.puodeliai[0], this.puodeliai[1]);
      return puodeliai;
    }
    throw new Error("puodeliai jau pagaminti");
  }
  static perpilti() {
    const tempSave = this.puodeliai[0].ipilta;
    this.puodeliai[0].ipilta = this.puodeliai[1].ipilta;
    this.puodeliai[1].ipilta = tempSave;
    console.log("perpylus: ", this.puodeliai[0], this.puodeliai[1]);
  }
  static ispiltiIAbu() {
    this.puodeliai = this.puodeliai.map((puodelis) => ({ ...puodelis, ipilta: "pilnas" }));
    console.log("ipylus i abu: ", this.puodeliai[0], this.puodeliai[1]);
  }
  static ispiltiViska() {
    this.puodeliai = this.puodeliai.map((puodelis) => ({ ...puodelis, ipilta: "tuscias" }));
    console.log("ispylus viska: ", this.puodeliai[0], this.puodeliai[1]);
  }
}
console.log("2. Puodelis ***************************************************************************");
const [p1, p2] = Puodelis.gamintiPuodelius();
Puodelis.perpilti();
Puodelis.ispiltiViska();
Puodelis.perpilti();
Puodelis.ispiltiIAbu();
Puodelis.perpilti();

// 3. Sukurti klasę Taskas, kuris turi savybę taskas rand 100-999. Sukurti klasę Taskai, kuris turi savybe taskai, kuri yra masyvas iš 10 Taskas objektų. Sukurkite išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, kuris yra masyvas iš 10 elementų, o kiekvienas elementas yra Taskai objektas. Išrūšiuokite masyvą daugTasku, pagal taskų sumą nuo didžiausio iki mažiausio.

class Taskas {
  constructor() {
    this.taskas = Math.floor(Math.random() * (999 - 100)) + 100;
  }
}
class Taskai {
  constructor() {
    this.taskai = [...Array(10)].map((_) => new Taskas());
  }
}
const daugTasku = [...Array(10)].map((_) => new Taskai());
console.log("3. Taskas ***************************************************************************");
console.log("neisrusiuotas daugTasku: ", daugTasku);
daugTasku.sort((a, b) => b.taskai.reduce((acc, curr) => acc + curr.taskas, 0) - a.taskai.reduce((acc, curr) => acc + curr.taskas, 0));
console.log("isrusiuotas pagal tasku suma daugTasku: ", daugTasku);
console.log("Dar nepadarytas");
// 4. Sukurti klasę Div. Sukūrus naują objektą iš šios klasės HTML’e turi atsirasti naujas <div> tagas su rand 1000 - 9999 skaičiumi viduje. Sukurti metodą spalva(color), kuris keistų to <div> tago spalvą. Taip pat statinį metodą visuSpalva(color), kuris keistų visų <div> tagų, sukurtų per klasę, spalvą.

class Div {
  static stage = document.querySelector(".stage");
  static button = document.querySelector("button");
  static elements = [];
  constructor() {
    this.div = document.createElement("div");
    const text = document.createTextNode(this.rand(1000, 9999));
    this.div.append(text);
    this.constructor.stage.append(this.div);
    this.constructor.elements.push(this);
    this.div.addEventListener("click", () => {
      this.spalva(this.randColor());
    });
    this.constructor.button.addEventListener("click", () => {
      this.constructor.visuSpalva(this.randColor());
    });
  }

  spalva(color) {
    this.div.style.color = color;
    this.div.style.borderColor = color;
  }
  static visuSpalva(color) {
    this.elements.forEach((el) => el.spalva(color));
  }
  rand(min = 1000, max = 9999) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  randColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padEnd(6, "0")
    );
  }
}

const divs = [...Array(200)].map((_) => new Div());

console.log("4. Div ***************************************************************************");
console.log("Results in index.html");
// 5. Sukurti klasę Post. Kuriant objektą iš šios klasės, reikia įrašyti id savybę, pasirinktinai nuo 1 iki 100. Objektas turi turėti visas savybes gautas iš serverio adresu: https://jsonplaceholder.typicode.com/posts/1 (objektas su id: 1).

class Post {
  constructor(id) {
    if (typeof id !== "number" || Number.isNaN(id) || !Number.isInteger(id) || id < 1 || id > 100) {
      throw new Error("Post id must be whole number between 1 and 100");
    }
    return (async () => {
      const post = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());
      return post;
    })();
  }
}
console.log("5. Post ***************************************************************************");
new Post(1).then((post) => console.log(post));
new Post(48).then((post) => console.log(post));
