let velocidad = 270;
let altura = 200;
let aterrizaje;

aterrizaje = (velocidad>268 && velocidad <278) && (altura>150 && altura<300) ? "Puede aterrizar": "Aún no puede aterrizar, corregir velocidad y altura";

console.log(aterrizaje);