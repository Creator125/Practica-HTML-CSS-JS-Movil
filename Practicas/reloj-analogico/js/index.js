const hora = document.getElementById("hora");
const minutero = document.getElementById("minutero");
const segundero = document.getElementById("segundero");

const setReloj = setInterval(function reloj(){
  let fechaAhora = new Date();
  let hr = fechaAhora.getHours();
  let min = fechaAhora.getMinutes();
  let seg = fechaAhora.getSeconds();
  
  let calcularHora = hr * 30 * min / 3;
  let calcularMinutos = min * 6;
  let calcularSegundos = seg * 6;
  
  hora.style.transform = `rotate(${calcularHora}deg)`;
  minutero.style.transform = `rotate(${calcularMinutos}deg)`;
  segundero.style.transform = `rotate(${calcularSegundos}deg)`;
}, 1000);