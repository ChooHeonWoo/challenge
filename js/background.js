const background = document.querySelector(".backgroundImg");
const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const randomImgNum = Math.floor(Math.random() * imgs.length);
const img = imgs[randomImgNum];
background.src = `img/${img}`;
