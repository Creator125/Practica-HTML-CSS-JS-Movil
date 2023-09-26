const btn = document.querySelector("button");
const body = document.querySelector("body");
const colores = ["#13da04", "#1ffffd", "#ff1f1f", "#ffb01f", "#ff1feb", "#f0ff1f", "#000000", "#f9f9f9"];

btn.addEventListener("click", () => {
  const i = parseInt(Math.random() * colores.length)
  body.style.backgroundColor = colores[i]
})