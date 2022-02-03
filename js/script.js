"use strict";

/////////////////////////////////////////////////////////////
///// FOOTER YEAR UPDATE //////
/////////////////////////////////////////////////////////////
const yearEl = document.querySelector(".current-year");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////////////////
///// SMOOTH SCROLLIG EFFECT//////
/////////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");
const checkInput = document.querySelector(".check-input");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const linkEl = link.getAttribute("href");

    // SCROLL BACK TO TOP
    if (linkEl === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // SCROLL TO SPACIFIC SECTION
    if (linkEl !== "#" && linkEl.startsWith("#")) {
      const sectionEl = document.querySelector(linkEl);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // CLOSE MOBILE NAVIGATION
  });
});
