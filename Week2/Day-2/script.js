"use Strict";

document.addEventListener("DOMContentLoaded", () => {
  const newNotification = document.querySelectorAll(".new-notification");
  const readButton = document.querySelector(".read-button");
  const redDot = document.querySelectorAll(".red-dot");
  const notificationCount = document.querySelector(".notification-count");

  function unreadNotificaitions() {
    newNotification.forEach((e) => {
      e.classList.remove("bg-desired-light-blue");
    });
    redDot.forEach((e) => {
      e.classList.remove("inline-block");
      e.classList.add("hidden");
    });
    notificationCount.textContent = 0;
  }

  readButton.addEventListener("click", unreadNotificaitions);
});
