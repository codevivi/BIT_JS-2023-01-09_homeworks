// Duomenų struktūros

const products = [
  "Dviratis",
  "Triratis",
  "Žvakidė",
  "Stalas",
  "Kėdė",
  "Knygų lentyna",
  "Paveikslas su rėmu",
  "Veidrodis",
  "Keturių vietų palapinė",
  "Pripučiama valtis",
  "Meškerė karosams gaudyti",
  "Planšetė",
  "Pastatoma lempa",
  "Vazonas",
  "Baterijų pakrovėjas",
  "Pagalvių komplektas",
  "Oro drėkintuvas",
  "Oro sausintuvas",
  "Kavinukas elektrinis",
  "Kilimas 2 X 3 metrų",
  "Kilimėlis kojoms valyti",
  "Užuolaidos",
  "Vėjo malūnas",
  "Dažai sienoms",
  "Dažai luboms",
  "Medinė dėžė",
];
class Product {
  constructor() {
    let randomPrice = Number.parseFloat((Math.random() * 100 + 1).toFixed(2));
    let randomAmount = Math.floor(Math.random() * 20 + 1);
    let id = Math.floor(Math.random() * products.length);
    this.title = products[id];
    this.price = randomPrice;
    this.amount = randomAmount;
    this.total = Number.parseFloat((randomPrice * randomAmount).toFixed(2));
  }
}

class Saskaita {
  constructor() {
    let products = [...Array(Math.floor(Math.random() * 10) + 1)].map((_) => new Product());
    let total = Number.parseFloat(products.reduce((acc, curr) => acc + curr.total, 0).toFixed(2));
    let vat = Number.parseFloat((total * 0.21).toFixed(2));
    this.number = "INV" + Saskaita.incrementNum().toString().padStart(3, "0");
    this.products = products;
    this.total = total;
    this.vat = vat;
    this.grandTotal = Number.parseFloat((vat + total).toFixed(2));
  }
  static incrementNum() {
    if (!this.num) {
      this.num = 1;
    } else {
      this.num++;
    }
    return this.num;
  }
}

// Sukurti 100 sąskaitų masyvą.

const simtasSaskaitu = [...Array(100)].map((_) => new Saskaita());
console.log(simtasSaskaitu);

document.getElementById("log1").innerHTML = `${JSON.stringify(simtasSaskaitu, null, 4)}`;

// Kiekviena sąskaita yra objektas ir turi po 5 savybes:

// number: pagal taisykle INV001, INV002, … INV099, INV100;
// products: masyvas random ilgio nuo 1 iki 10;
// products masyvo elementai objektai, turintys po 4 savybes:
// title: random iš products masyvo (vienoje sąskaitoje gali būti keli vienodi produktai. Vistiek jų kainos bus skirtingos);
// price: random skaičius su kableliu nuo 1.00 iki 100.00;
// amount: random skaičius nuo 1 iki 20;
// total:  price ir amount sandauga.
// total: visų products masyvo elementų total suma
// vat: 21% nuo total
// grandTotal: vat ir total suma

// Sugeneruotame (ne generavimo metu!) masyve paskaičiuoti ir konsolėje atspausdinti visų sąskaitų grandTotal sumą, produktų sąrašą prie kiekvieno produkto pavadinimo pridedant koks to produkto kiekis yra visose sąskaitose bendrai ir už kokią bendrą sumą.
// Pvz:
// Dviratis 35 479.55
// Triratis 10 457.22
// …..
// Medinė dėžė 47 1025.74

const visuSaskaituSuma = simtasSaskaitu.reduce((acc, curr) => curr.grandTotal + acc, 0).toFixed(2);
const productsListing = products.map((name) => ({ name, amount: 0, total: 0 }));

simtasSaskaitu.forEach((saskaita) => {
  saskaita.products.forEach((product) => {
    let listingProduct = productsListing.find((item) => item.name === product.title);
    listingProduct.amount += product.amount;
    let plusTotal = Number.parseFloat((listingProduct.total + product.total).toFixed(2));
    listingProduct.total = plusTotal;
  });
});

const log2Element = document.getElementById("log2");
console.log(`Visu saskaitu grandTotal suma: ${visuSaskaituSuma}`);
log2Element.innerHTML = `Visu saskaitu grandTotal suma: ${visuSaskaituSuma}`;
productsListing.forEach((item) => {
  let str = `${item.name} ${item.amount} ${item.total}`;
  console.log(str);
  log2Element.innerHTML += `<p>${str}</p>`;
});
