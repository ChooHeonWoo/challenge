const today = document.querySelector(".today");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const dates = date.getDate();
today.innerText = `${year}년 ${month}월 ${dates}일`;
