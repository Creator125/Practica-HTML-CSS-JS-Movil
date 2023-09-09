window.addEventListener("load", () => {
  document.getElementById("cambiarColor").addEventListener("click", () => {
      let colorFondo = document.getElementById("colorFondo").value;
      
      document.getElementById("cuerpo").setAttribute("bgcolor", colorFondo);
  })
} )