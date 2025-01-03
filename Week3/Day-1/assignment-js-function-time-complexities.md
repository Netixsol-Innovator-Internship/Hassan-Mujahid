# Time Complexity Analysis

## Age Calculator App

### `isValidDate`

```javascript
const isValidDate = (day, month, year) => {
  const date = new Date(year, month, day);
  const currentDate = new Date();

  return (
    date.getFullYear() === +year &&
    date.getFullYear() <= currentDate.getFullYear() &&
    date.getFullYear() > 0 &&
    date.getMonth() === +month &&
    date.getDate() === +day
  );
};
```

**Time Complexity:** O(1)  
This function involves creating a `Date` object and performing a fixed number of comparisons, all of which operate in constant time.

### `checkAge`

```javascript
const checkAge = (day, month, year) => {
  const inputDate = new Date(year, month, day);
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
```

**Time Complexity:** O(1)  
The function calculates the difference between two dates and performs a fixed set of operations to adjust for months and days. These operations are independent of input size.

---

## Notifications Page

### `unreadNotifications`

```javascript
function unreadNotificaitions() {
  newNotification.forEach((e) => {
    e.classList.remove("bg-desired-light-blue");
  });
  redDot.forEach((e) => {
    e.classList.remove("inline-block");
    e.classList.add("hidden");
  });
  notificationCount.textContent = 0;
  readButton.disabled = true;
}
```

**Time Complexity:** O(n)  
The function iterates over the `newNotification` and `redDot` arrays, where `n` is the total number of elements in both arrays. The operations inside the loop are constant time.

---

## Interactive Rating Component

### Event Listeners for Buttons (`buttonValue1`, `buttonValue2`, etc.)

```javascript
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
```

**Time Complexity:** O(1) per listener  
Each listener performs a fixed number of DOM manipulations and class additions/removals, which operate in constant time.

### `submitButton` Listener

```javascript
submitButton.addEventListener("click", () => {
  if (rating) {
    ratingCard.classList.add("hidden");
    ThankYouCard.classList.remove("hidden");
    ThankYouCard.classList.add("flex");
    ratingOutput.textContent = rating;
  } else {
    errorMessage.classList.remove("hidden");
  }
});
```

**Time Complexity:** O(1)  
The listener checks a single condition and updates the DOM accordingly, with no loops or recursive operations.

---

# Time Complexity Analysis

## Tip Calculator App

### `showError` and `clearError`

```javascript
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
```

**Time Complexity:** O(1)  
These functions manipulate a fixed set of DOM elements based on the input, with no loops or recursive operations.

### `validateField`

```javascript
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
```

**Time Complexity:** O(1)  
The function evaluates a fixed set of conditions and performs DOM manipulations accordingly. No loops or recursive operations are involved.
