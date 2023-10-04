let entrada = document.getElementById("entrada");
let btnCargar = document.getElementById("btn-cargar");
let mensajeError = document.getElementById("error");
let salida = document.getElementById("salida");

const objetoRomano = {
  M: 100,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

btnCargar.addEventListener("click", () => {
  entradaARomano(entrada.value);
  entrada.value("");
});

function entradaARomano(num){
  let numero = parseInt(num);
  
  if (num.trim().length == 0){
    mensajeError.innerHTML = "Valor invalido";
    
    return false;
  }
  
  if(numero > 4999 || numero < 1){
    mensajeError.innerHTML = "El valor ingresado se sale del rango";
    
    return false;
  }
  
  mensajeError.innerHTML = "";
  salida.innerHTML = "";
  
  let resultado = "";
  let valorRomano = Object.keys(objetoRomano);
  valorRomano.forEach((clave) => {
    while(objetoRomano[clave] <= numero){
      numero -= objetoRomano[clave];
      resultado += clave;
    }
  });
  salida.innerHTML = resultado;
  }
