const loginForm = document.querySelector("#loginForm");
const welcomeText = document.querySelector(".login h1");
const HIDDEN = "hidden";
const USERNAME = "username";
function onSubmit(event) {
  const username = event.target[0].value;
  event.preventDefault();
  localStorage.setItem(USERNAME, username);
  welcomeText.innerText = `Welcome ${username} !`;
  welcomeText.classList.remove(HIDDEN);
  loginForm.classList.add(HIDDEN);
  textForm.classList.remove(HIDDEN);
}
loginForm.addEventListener("submit", onSubmit);
if (localStorage.getItem(USERNAME)) {
  welcomeText.innerText = `Welcome ${localStorage.getItem(USERNAME)} !`;
  welcomeText.classList.remove(HIDDEN);
  loginForm.classList.add(HIDDEN);
}
