import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datePicker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
       return;
    }
    startButton.disabled = false;
    const timeLeft = selectedDate - currentDate;
    updateTimer(timeLeft);
  },
});

const startButton = document.querySelector("[data-start]");
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  let timeLeft = datePicker.selectedDates[0] - new Date();
  updateTimer(timeLeft);
  const intervalId = setInterval(() => {
    timeLeft = datePicker.selectedDates[0] - new Date();
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      timeLeft = 0;
    }
    updateTimer(timeLeft);
  }, 1000);
});

function updateTimer(timeLeft) {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeLeft / 1000) % 60)
    .toString()
    .padStart(2, "0");
  document.querySelector("[data-days]").textContent = days;
  document.querySelector("[data-hours]").textContent = hours;
  document.querySelector("[data-minutes]").textContent = minutes;
  document.querySelector("[data-seconds]").textContent = seconds;
}
