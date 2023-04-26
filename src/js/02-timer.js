import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const dateTimePicker  = document.querySelector('#datetime-picker')
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

let countdownInterval;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const currentDate = new Date();

        if (selectedDate < currentDate) {
          Notiflix.Notify.failure("Please choose a date in the future");
        } else {
          const timeDifference = selectedDate.getTime() - currentDate.getTime();
          startCountdown(timeDifference);
          dateTimePicker.disabled = true;
        }
    },
};

flatpickr(dateTimePicker, options);

function startCountdown(timeDifference) {
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    timeDifference -= 1000;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      startBtn.disabled = false;
      dateTimePicker.disabled = false;
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      return;
    }

    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    days.textContent = remainingDays.toString().padStart(2, "0");
    hours.textContent = remainingHours.toString().padStart(2, "0");
    minutes.textContent = remainingMinutes.toString().padStart(2, "0");
    seconds.textContent = remainingSeconds.toString().padStart(2, "0");
  }, 1000);
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  const selectedDate = dateTimePicker.valueAsDate;
  if (selectedDate) {
    const timeDifference = selectedDate.getTime() - new Date().getTime();
    startCountdown(timeDifference);
  }
});
