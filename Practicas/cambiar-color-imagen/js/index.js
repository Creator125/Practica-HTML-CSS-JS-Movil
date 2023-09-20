let btnaAzul = document.getElementById('azul');
let btnRosa = document.getElementById('rosa');
let btnMarron = document.getElementById('marron');
let cargarImagen = document.getElementById('cargarImagen');

btnaAzul.onclick = () =>{
  cargarImagen.src = "./img/donal_azul.png";
}

btnRosa.onclick = () =>{
  cargarImagen.src = "./img/donal_rosa.png";
}

btnMarron.onclick = () =>{
  cargarImagen.src = "./img/donal_cafe.png";
}