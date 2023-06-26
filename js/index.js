const timerDaysValue = document.getElementById("timer-days");
const timerHoursValue = document.getElementById("timer-hours");
const timerMinsValue = document.getElementById("timer-mins");
const timerSecsValue = document.getElementById("timer-secs");

function secondsToDhms(seconds) {
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
}

let seconds = 894999;

setInterval(() => {
  value = secondsToDhms(seconds);
  timerDaysValue.textContent = value[0];
  timerHoursValue.textContent = value[1];
  timerMinsValue.textContent = value[2];
  timerSecsValue.textContent = value[3];
  seconds--;
}, 1000);
