"use Strict";

document.addEventListener("DOMContentLoaded", () => {
  let rating;

  const buttonValue1 = document.querySelector(".button-value-1");
  const buttonValue2 = document.querySelector(".button-value-2");
  const buttonValue3 = document.querySelector(".button-value-3");
  const buttonValue4 = document.querySelector(".button-value-4");
  const buttonValue5 = document.querySelector(".button-value-5");
  const submitButton = document.querySelector(".submit-button");
  const ratingOutput = document.querySelector(".rating-output");
  const ratingCard = document.querySelector(".rating-card");
  const ThankYouCard = document.querySelector(".thank-you-card");
  const errorMessage = document.querySelector(".error-message");

  buttonValue1.addEventListener("click", () => {
    rating = buttonValue1.value;

    buttonValue1.classList.remove(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue2.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue3.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue4.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue5.classList.remove("text-desired-darkest-blue", "bg-white");

    buttonValue1.classList.add("text-desired-darkest-blue", "bg-white");
    buttonValue2.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue3.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue4.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue5.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
  });
  buttonValue2.addEventListener("click", () => {
    rating = buttonValue2.value;

    buttonValue2.classList.remove(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue1.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue3.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue4.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue5.classList.remove("text-desired-darkest-blue", "bg-white");

    buttonValue2.classList.add("text-desired-darkest-blue", "bg-white");
    buttonValue1.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue3.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue4.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue5.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
  });
  buttonValue3.addEventListener("click", () => {
    rating = buttonValue3.value;

    buttonValue3.classList.remove(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue1.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue2.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue4.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue5.classList.remove("text-desired-darkest-blue", "bg-white");

    buttonValue3.classList.add("text-desired-darkest-blue", "bg-white");

    buttonValue1.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue2.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue4.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue5.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
  });
  buttonValue4.addEventListener("click", () => {
    rating = buttonValue4.value;

    buttonValue4.classList.remove(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue1.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue2.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue3.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue5.classList.remove("text-desired-darkest-blue", "bg-white");

    buttonValue4.classList.add("text-desired-darkest-blue", "bg-white");
    buttonValue1.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue2.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue3.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue5.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
  });
  buttonValue5.addEventListener("click", () => {
    rating = buttonValue5.value;

    buttonValue5.classList.remove(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue1.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue2.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue3.classList.remove("text-desired-darkest-blue", "bg-white");
    buttonValue4.classList.remove("text-desired-darkest-blue", "bg-white");

    buttonValue5.classList.add("text-desired-darkest-blue", "bg-white");
    buttonValue1.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue2.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue3.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
    buttonValue4.classList.add(
      "text-desired-light-grey",
      "bg-gray-700",
      "hover:bg-desired-orange"
    );
  });

  submitButton.addEventListener("click", () => {
    if (rating) {
      ratingCard.classList.add("hidden");
      ThankYouCard.classList.remove("hidden");
      ratingOutput.textContent = rating;
    } else {
      errorMessage.classList.remove("hidden");
    }
  });
});
