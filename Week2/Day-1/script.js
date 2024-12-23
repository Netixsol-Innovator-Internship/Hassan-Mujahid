"use strict";

const form = document.querySelector(".form");
const dayLabel = document.querySelector(".day-label");
const dayInput = document.querySelector(".day-input");
const monthLabel = document.querySelector(".month-label");
const monthInput = document.querySelector(".month-input");
const yearLabel = document.querySelector(".year-label");
const yearInput = document.querySelector(".year-input");
const yearInvalid = document.querySelector(".year-invalid");
const monthInvalid = document.querySelector(".month-invalid");
const dayInvalid = document.querySelector(".date-invalid");
let yearsOutput = document.querySelector(".output-years");
let monthsOutput = document.querySelector(".output-months");
let daysOutput = document.querySelector(".output-days");

const isValidDate = (day, month, year) => {
  const date = new Date(year, month, day);
  const currentDate = new Date();

  return (
    date.getFullYear() === +year &&
    date.getFullYear() <= currentDate.getFullYear() &&
    date.getMonth() === +month &&
    date.getDate() === +day
  );
};

const checkAge = (day, month, year) => {
  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  const inputDay = inputDate.getDate();
  const inputMonth = inputDate.getMonth();
  const inputYear = inputDate.getFullYear();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  let ageInYears = currentYear - inputYear;
  let ageInMonths = currentMonth - inputMonth;
  let ageInDays = currentDay - inputDay;

  if (ageInDays < 0) {
    --ageInMonths;
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const daysInPreviousMonth = new Date(
      currentYear,
      previousMonth + 1,
      0
    ).getDate();
    ageInDays += daysInPreviousMonth;
  }

  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  return { years: ageInYears, months: ageInMonths, days: ageInDays };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dayInput.classList.remove("focus:border-red-500", "border-red-500");
  monthInput.classList.remove("focus:border-red-500", "border-red-500");
  yearInput.classList.remove("focus:border-red-500", "border-red-500");

  dayInput.classList.add("focus:border-violet-400", "border-gray-200");
  monthInput.classList.add("focus:border-violet-400", "border-gray-200");
  yearInput.classList.add("focus:border-violet-400", "border-gray-200");

  yearInvalid.classList.add("hidden");
  monthInvalid.classList.add("hidden");
  dayInvalid.classList.add("hidden");

  const currentDate = new Date();
  const dayInputValue = dayInput.value;
  const monthInputValue = monthInput.value - 1; // 0-indexed
  const yearInputValue = yearInput.value;
  const inputDateMonthlyDays = new Date(
    yearInputValue,
    monthInputValue + 1,
    0
  ).getDate();
  const isInputValid = isValidDate(
    dayInputValue,
    monthInputValue,
    yearInputValue
  );
  console.log("isValid", isInputValid);
  if (isInputValid) {
    const checkingAge = checkAge(
      dayInputValue,
      monthInputValue,
      yearInputValue
    );
    daysOutput.textContent = checkingAge.days;
    monthsOutput.textContent = checkingAge.months;
    yearsOutput.textContent = checkingAge.years;
  } else {
    dayInput.classList.add("focus:border-red-500", "border-red-500");
    monthInput.classList.add("focus:border-red-500", "border-red-500");
    yearInput.classList.add("focus:border-red-500", "border-red-500");

    dayInput.classList.remove("focus:border-violet-400", "border-gray-200");
    monthInput.classList.remove("focus:border-violet-400", "border-gray-200");
    yearInput.classList.remove("focus:border-violet-400", "border-gray-200");
    console.log(dayInputValue, monthInputValue, yearInputValue);
    if (yearInputValue > currentDate.getFullYear()) {
      yearInvalid.classList.remove("hidden");
    }

    if (+monthInputValue === 0 || +monthInputValue > 11) {
      monthInvalid.classList.remove("hidden");
    }

    if (+dayInputValue === 0 || +dayInputValue > inputDateMonthlyDays) {
      dayInvalid.classList.remove("hidden");
    }
  }
});

console.log(yearInvalid);
console.log(monthInvalid);
