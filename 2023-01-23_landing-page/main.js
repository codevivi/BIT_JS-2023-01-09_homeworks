"use strict";

const expandNavBtn = document.getElementById("expand-mobile-nav");
const navBoxExpanding = document.getElementById("expanding-nav-box");
const header = document.getElementById("header");
const headerBottom = header.getBoundingClientRect().bottom;
const goToTopBtn = document.getElementById("go-to-top-btn");
const sectionLinks = Array.from(document.querySelectorAll(".section-link"));
console.log(sectionLinks[1].getAttribute("href"));
console.log(sectionLinks[1].href);
// const sectionElements = sectionLinks.map((link) => {
//   return document.querySelector(link.getAttribute('href'));
// });  ///////href gets long in github preview
const sectionElements = Array.from(document.querySelectorAll(".linked-section"));

const sectionTopsAndBottoms = sectionElements.map((el) => {
  //offsetTop is relative to parent;
  let top = el.offsetTop - headerBottom - 4;
  let bottom = top + el.offsetHeight;
  return { top: top, bottom: bottom };
});
let activeLinkInd = null;

setActiveLink();
headerAnimation();

expandNavBtn.addEventListener("click", expandNav);
window.addEventListener("scroll", onScroll);

let debounceTimer;
function onScroll() {
  if (debounceTimer) {
    window.clearTimeout(debounceTimer);
  }
  debounceTimer = window.setTimeout(() => {
    headerAnimation(); //+go to top btn
    setActiveLink();
  }, 100);
}
function setActiveLink() {
  let len = sectionElements.length;
  let linkIsAlreadyActive = false;
  for (let i = 0; i < len; i++) {
    if (scrollY >= sectionTopsAndBottoms[i].top && scrollY < sectionTopsAndBottoms[i].bottom) {
      if (activeLinkInd !== i) {
        if (activeLinkInd !== null) {
          sectionLinks[activeLinkInd].classList.remove("active");
        }
        activeLinkInd = i;
        sectionLinks[i].classList.add("active");
        return;
      } else {
        linkIsAlreadyActive = true;
      }
    }
  }
  if (activeLinkInd !== null && !linkIsAlreadyActive) {
    sectionLinks[activeLinkInd].classList.remove("active");
    activeLinkInd = null;
  }
}

function headerAnimation() {
  //+ go to top Btn
  if (scrollY <= 0) {
    header.classList.remove("on-scroll");
    goToTopBtn.classList.add("hidden");
  } else if (scrollY >= headerBottom) {
    if (!header.classList.contains("on-scroll")) {
      header.classList.add("on-scroll");
      goToTopBtn.classList.remove("hidden");
    }
  }
}
function expandNav() {
  header.classList.toggle("expanded");
}
