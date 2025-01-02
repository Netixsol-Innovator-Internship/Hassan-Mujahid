"use Strict";

//opacity-0 pointer-events-none invisible absolute -top-[9999px] // removing features dropdown

const menuButton = document.querySelector(".nav-menu-button");
const closeButton = document.querySelector(".nav-close-button");
const mobileNav = document.querySelector(".mob-nav");
const backdrop = document.querySelector(".backdrop");
const featureButton = document.querySelector(".feature-button");
const companyButton = document.querySelector(".company-button");
const featureDownArrow = document.querySelector(".feature-icon-arrow-down");
const featureUpArrow = document.querySelector(".feature-icon-arrow-up");
const companyDownArrow = document.querySelector(".company-icon-arrow-down");
const companyUpArrow = document.querySelector(".company-icon-arrow-up");
const featureDropdown = document.querySelector(".feature-dropDown");
const companyDropdown = document.querySelector(".company-dropDown");

menuButton.addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  closeButton.classList.remove("hidden");
  mobileNav.classList.remove("translate-x-full");
  backdrop.classList.remove("hidden");
});

closeButton.addEventListener("click", (e) => {
  const ClassesToToggle = [
    "opacity-0",
    "pointer-events-none",
    "invisible",
    "absolute",
    "-top-[9999px]",
  ];

  e.target.classList.add("hidden");
  menuButton.classList.remove("hidden");
  mobileNav.classList.add("translate-x-full");
  backdrop.classList.add("hidden");
  ClassesToToggle.forEach((className) => {
    if (!featureDropdown.classList.contains(className)) {
      featureDownArrow.classList.toggle("hidden");
      featureUpArrow.classList.toggle("hidden");
      featureDropdown.classList.add(className);
    }
    if (!companyDropdown.classList.contains(className)) {
      companyDownArrow.classList.toggle("hidden");
      companyUpArrow.classList.toggle("hidden");
      companyDropdown.classList.add(className);
    }
  });
});

backdrop.addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  closeButton.classList.add("hidden");
  menuButton.classList.remove("hidden");
  mobileNav.classList.add("translate-x-full");
});

featureButton.addEventListener("click", () => {
  const ClassesToToggle = [
    "opacity-0",
    "pointer-events-none",
    "invisible",
    "absolute",
    "-top-[9999px]",
  ];

  featureDownArrow.classList.toggle("hidden");
  featureUpArrow.classList.toggle("hidden");
  ClassesToToggle.forEach((className) =>
    featureDropdown.classList.toggle(className)
  );
});

companyButton.addEventListener("click", () => {
  const ClassesToToggle = [
    "opacity-0",
    "pointer-events-none",
    "invisible",
    "absolute",
    "-top-[9999px]",
  ];

  companyDownArrow.classList.toggle("hidden");
  companyUpArrow.classList.toggle("hidden");
  ClassesToToggle.forEach((className) =>
    companyDropdown.classList.toggle(className)
  );
});
