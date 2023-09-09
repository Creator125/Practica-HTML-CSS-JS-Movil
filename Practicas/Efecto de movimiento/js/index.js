const poster = document.getElementById('poster');
const alto = poster.clientHeigth;
const ancho = poster.clientWidth;

poster.addEventListener("mousemove",(evt) => {
  const {layerX, layerY} = evt;
  const rotacionY = ((layerX - ancho / 2) / ancho) * 20;
  const rotacionX = ((layerY - alto / 2) / alto) * 20;
  const text = `
      perspective(500px)
      scale(1.1)
      rotateX(${rotacionX}deg)
      rotateY(${rotacionY}deg)`;
  
  poster.style.transform = text;
})

poster.addEventListener("mouseout", () => {
  poster.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)`;
});