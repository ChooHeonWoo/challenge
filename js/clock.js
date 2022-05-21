const clock = document.querySelector(".clock");
function updateClock() {
  const time = new Date();
  const Hours = String(time.getHours()).padStart(2, 0);
  const Minutes = String(time.getMinutes()).padStart(2, 0);
  const Seconds = String(time.getSeconds()).padStart(2, 0);
  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}
updateClock();
setInterval(updateClock, 1000);
