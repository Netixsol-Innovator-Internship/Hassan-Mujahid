# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: [Solution](https://github.com/Netixsol-Innovator-Internship/Hassan-Mujahid/tree/main/Week2/Day-1)
- Live Site URL: [Live-site](https://age-calculator-solution-by-hassan.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- TailwindCSS
- Javascript
- Mobile-first workflow

### What I learned

I have learned DOM, DOM Manipulation and logic building in this specific project.

```js
if (isInputValid) {
  const checkingAge = checkAge(dayInputValue, monthInputValue, yearInputValue);
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
```

## Author

- Website - [Hassan-Mujahid](https://age-calculator-solution-by-hassan.netlify.app/)
