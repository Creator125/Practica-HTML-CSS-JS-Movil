let textBox = document.querySelector(".textBox");
let contador = document.querySelector(".contador");
maxlength = textBox.getAttribute("maxlength");
textBox.onkeyup = () => {
  contador.innerText = maxlength - textBox.value.length;
}