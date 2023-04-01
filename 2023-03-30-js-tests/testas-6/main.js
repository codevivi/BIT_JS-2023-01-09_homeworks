"use strict";
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Sukurti aplikaciją su mygtuku “Reset” ir į dvi dalis apačioje
// padalintą ekraną. Paspaudus mygtuką “Reset” kairėje pusėje atsiranda
// rand 5, 15 kiekis apskritimų sunumeruoti nuo 1 eilės tvarka, o dešinė
// pusė tuščia. Paspaudus ant bet kokio apskritimo kairėje pusėje jis
// atsiranda dešinėje pusėje, o kairėje išnyksta. Taip iš kairės į dešinę
// turi būti galima perkelti visus apskritimus. Paspaudus ant dešinėje
// pusėje esančio apskritimo jis sugrįžta į kairę pusę ir t.t.
// Apskritimai abiejuose pusėse turi rikiuotis pagal eilės numerį
// didėjimo tvarka. Tvarka turi išlikti dėliojant apskritimus iš vienos
// pusės į kitą.
// Vėl paspaudus mygtuką “Reset” seni apskritimai išnyksta, kairėje
// pusėje vėl atsiranda naujas apskritimų kiekis, dešinė pusė- tuščia.
