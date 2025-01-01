"use Strict:";

const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
const tipButtons = document.querySelectorAll(".tip-button");
const customTipInput = document.querySelector("input[placeholder='Custom'");
const errorBill = document.querySelector(".error-bill");
const errorTip = document.querySelector(".error-tip");
const errorPeople = document.querySelector(".error-people");
const resetButton = document.querySelector(".reset-button");
const tipOutput = document.querySelector(".tip-output");
const totalOutput = document.querySelector(".total-output");
const dollarLogo = document.querySelector(".dollar-logo");
const personLogo = document.querySelector(".person-logo");

const interactedFields = new Set();

tipOutput.textContent !== "0.00" || totalOutput.textContent !== "0.00"
  ? (resetButton.disabled = false)
  : (resetButton.disabled = true);

function showError(errorEl) {
  errorEl.classList.remove("hidden");
  if (errorEl === errorBill) {
    bill.classList.add("border-2", "border-red-500");
    dollarLogo.classList.add(
      "-translate-y-8",
      "-translate-y-8",
      "2xl:-translate-y-11",
      "2xl:-translate-y-11"
    );
  }
  if (errorEl === errorPeople) {
    people.classList.add("border-2", "border-red-500");
    personLogo.classList.add(
      "-translate-y-8",
      "-translate-y-8",
      "2xl:-translate-y-11",
      "2xl:-translate-y-11"
    );
  }
}

function clearError(errorEl) {
  errorEl.classList.add("hidden");
  if (errorEl === errorBill) {
    bill.classList.remove("border-2", "border-red-500");
    dollarLogo.classList.remove(
      "-translate-y-8",
      "-translate-y-8",
      "2xl:-translate-y-11",
      "2xl:-translate-y-11"
    );
  }
  if (errorEl === errorPeople) {
    people.classList.remove("border-2", "border-red-500");
    personLogo.classList.remove(
      "-translate-y-8",
      "-translate-y-8",
      "2xl:-translate-y-11",
      "2xl:-translate-y-11"
    );
  }
}

function validateField(input) {
  const value = input.value.trim();

  if (input === bill) {
    const billValue = parseFloat(value);
    if (isNaN(billValue) || billValue <= 0) {
      errorBill.textContent = "Please enter a valid bill amount";
      showError(errorBill);
      return false;
    } else if (billValue > 100000) {
      errorBill.textContent = "Max value 100,000";
      showError(errorBill);
      return false;
    } else {
      clearError(errorBill);
    }
  }

  if (input === people) {
    const peopleValue = parseFloat(value);
    if (isNaN(peopleValue) || peopleValue <= 0) {
      errorPeople.textContent = "Can't be zero";
      showError(errorPeople);
      return false;
    } else if (peopleValue > 250) {
      errorPeople.textContent = "Max people allowed 250";
      showError(errorPeople);
      return false;
    } else {
      clearError(errorPeople);
    }
  }

  if (input === customTipInput) {
    const selectedTip = [...tipButtons].some((btn) =>
      btn.classList.contains("bg-desired-strong-cyan")
    );

    const customTip = parseFloat(value);
    if ((!selectedTip && isNaN(customTip)) || customTip < 0) {
      errorTip.textContent = "Please select or enter a valid tip";
      showError(errorTip);
      return false;
    } else if (!isNaN(customTip) && customTip > 1000) {
      errorTip.textContent = "Max tip allowed 1000%";
      showError(errorTip);
      return false;
    } else {
      clearError(errorTip);
    }
  }

  return true;
}
function validateInputs() {
  let isValid = true;

  interactedFields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function handleFocus(input) {
  interactedFields.add(input);
}

function calculateResults() {
  if (!validateInputs()) return;

  const billInput = parseFloat(bill.value);
  const peopleInput = parseInt(people.value, 10);
  const selectedTip = [...tipButtons].find((btn) =>
    btn.classList.contains("bg-desired-strong-cyan")
  );

  const tipPercentage = selectedTip
    ? parseFloat(selectedTip.value / 100)
    : customTipInput.value / 100;

  const tipPerPerson = +((billInput * tipPercentage) / peopleInput).toFixed(2);
  const totalPerPerson = +(billInput / peopleInput + +tipPerPerson).toFixed(2);

  !!tipPerPerson ? (tipOutput.textContent = tipPerPerson) : "";
  !!totalPerPerson ? (totalOutput.textContent = totalPerPerson) : "";

  tipOutput.textContent !== "0.00" || totalOutput.textContent !== "0.00"
    ? (resetButton.disabled = false)
    : (resetButton.disabled = true);
}

[bill, people, customTipInput].forEach((input) => {
  input.addEventListener("focus", () => handleFocus(input));
  input.addEventListener("blur", () => validateField(input));
  input.addEventListener("input", calculateResults);
});

customTipInput.addEventListener("focus", () => {
  tipButtons.forEach((btn) => {
    btn.classList.remove("bg-desired-strong-cyan", "text-desired-dark-cyan");
    btn.classList.add("bg-desired-dark-cyan", "text-desired-very-light-gray");
  });
});

tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tipButtons.forEach((btn) => {
      btn.classList.remove("bg-desired-strong-cyan", "text-desired-dark-cyan");
      btn.classList.add("bg-desired-dark-cyan", "text-desired-very-light-gray");
    });
    e.target.classList.remove(
      "bg-desired-dark-cyan",
      "text-desired-very-light-gray"
    );
    e.target.classList.add("bg-desired-strong-cyan", "text-desired-dark-cyan");
    handleFocus(customTipInput);
    customTipInput.value = "";
    interactedFields.delete(customTipInput);
    clearError(errorTip);
    calculateResults();
  });
});

resetButton.addEventListener("click", () => {
  interactedFields.clear();
  tipButtons.forEach((btn) => {
    btn.classList.remove("bg-desired-strong-cyan", "text-desired-dark-cyan");
    btn.classList.add("bg-desired-dark-cyan", "text-desired-very-light-gray");
  });
  customTipInput.value = "";
  bill.value = "";
  people.value = "";
  clearError(errorBill);
  clearError(errorTip);
  clearError(errorPeople);
  tipOutput.textContent = "0.00";
  totalOutput.textContent = "0.00";
  tipOutput.textContent !== "0.00" || totalOutput.textContent !== "0.00"
    ? (resetButton.disabled = false)
    : (resetButton.disabled = true);
});
