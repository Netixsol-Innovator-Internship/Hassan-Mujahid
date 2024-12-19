# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).

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

- View the optimal layout depending on their device's screen size

### Links

- Solution URL: [solution](https://github.com/Netixsol-Innovator-Internship/Hassan-Mujahid/tree/main/Week1/Day-5)
- Live Site URL: [live site](https://stats-preview-card-solution-by-hassan.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- TailwindCSS
- Mobile-first workflow

### What I learned

In this specific project I learned how to play with screen sizes, image sizes and how to make it responsive for each case. Also I learnt that the problem is not always where you are looking it for, it might be somewhere else.

```html
<div
  class="w-full md:w-[60%] h-auto md:h-[60%] p-5 md:p-10 bg-dark-desaturated-blue rounded-b-lg md:rounded-l-lg md:rounded-br-none flex flex-col justify-center items-center md:items-start"
>
  <div
    class="w-full md:w-[90%] lg:w-[80%] flex flex-col gap-5 md:gap-7 my-5 md:my-7 text-white"
  >
    <h1
      class="text-2xl md:text-3xl text-center md:text-start leading-tight break-words"
    >
      <strong>
        Get <span class="text-soft-violet">insights</span> that help your
        business grow.
      </strong>
    </h1>
    <p
      class="text-center md:text-start text-sm md:text-[15px] text-gray-400 leading-relaxed"
    >
      Discover the benefits of data analytics and make better decisions
      regarding revenue, customer experience, and overall efficiency.
    </p>
    <ul
      class="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10"
    >
      <li class="flex flex-col text-center md:text-start">
        <span class="text-lg md:text-xl font-bold">10k+</span>
        <span class="text-sm md:text-lg text-gray-400">companies</span>
      </li>
      <li class="flex flex-col text-center md:text-start">
        <span class="text-lg md:text-xl font-bold">314</span>
        <span class="text-sm md:text-lg text-gray-400">templates</span>
      </li>
      <li class="flex flex-col text-center md:text-start">
        <span class="text-lg md:text-xl font-bold">12m+</span>
        <span class="text-sm md:text-lg text-gray-400">queries</span>
      </li>
    </ul>
  </div>
</div>
```

## Author

- Website - [Hassan Mujahid](https://stats-preview-card-solution-by-hassan.netlify.app/)
