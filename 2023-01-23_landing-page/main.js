"use strict";

const expandNavBtn = document.getElementById("expand-mobile-nav");
const navBoxExpanding = document.getElementById("expanding-nav-box");
const header = document.getElementById("header");
const headerBottom = header.getBoundingClientRect().bottom;
const goToTopBtn = document.getElementById("go-to-top-btn");
const sectionLinks = Array.from(document.querySelectorAll("a[data-sectionid]"));
const sectionElements = sectionLinks.map((link) => {
  return document.getElementById(link.dataset.sectionid);
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
    let el = sectionElements[i];
    let top = el.offsetTop - header.offsetHeight - 2;
    let bottom = top + el.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
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
