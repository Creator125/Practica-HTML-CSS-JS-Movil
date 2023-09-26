const btn = document.querySelector("button");
const body = document.querySelector("body");


btn.addEventListener("click", () => {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
  
  console.log(`Color RGB: rgb(${r},${g},${b})`);
});