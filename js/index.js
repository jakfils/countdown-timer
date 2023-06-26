// Get timer elements
const timerDaysValue = document.getElementById("timer-days");
const timerHoursValue = document.getElementById("timer-hours");
const timerMinsValue = document.getElementById("timer-mins");
const timerSecsValue = document.getElementById("timer-secs");
const dateElement = document.getElementById("date");

// Funtion convert seconds to Date, Hour, Time, Mins and Secs
const secondsToDhms = (seconds) => {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  let dDisplay = d >= 10 ? d : `0${d}`;
  let hDisplay = h >= 10 ? h : `0${h}`;
  let mDisplay = m >= 10 ? m : `0${m}`;
  let sDisplay = s >= 10 ? s : `0${s}`;
  return [dDisplay, hDisplay, mDisplay, sDisplay];
};
// Function Add number of days to current date
const addDays = (date, days) => {
  const newDate = new Date(date.getTime());
  console.log(newDate);
  newDate.setDate(newDate.getDate() + days);
  console.log(newDate);
  return newDate;
};
//get Current date
const today = new Date();
//Set Expire Date
const expireDate = addDays(today, 10);
// Expire Date toLocalString
const dateToShow = expireDate.toLocaleString("en-US", {
  day: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

// Show expire date
dateElement.textContent = dateToShow;

// Initial number of seconds (10days)
let seconds = 863999;

// Update seconds and show timer
setInterval(() => {
  value = secondsToDhms(seconds);
  timerDaysValue.textContent = value[0];
  timerHoursValue.textContent = value[1];
  timerMinsValue.textContent = value[2];
  timerSecsValue.textContent = value[3];
  seconds--;
}, 1000);
