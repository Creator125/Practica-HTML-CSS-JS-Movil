let caja = document.querySelector(".caja");

caja.addEventListener("mousemove",(e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let anchoCaja = caja.clientWidth;
  let altoCaja = caja.clientHeight;
  let moverX = (x - anchoCaja / 2);
  let moverY = (y - altoCaja / 2);
  
  caja.style.transform = `translateX(${moverX}px) translateY(${moverY}px)`;
})

caja.addEventListener("mouseout",(e) => {
  caja.style.transform = ``;
})