let pagoMes = 10000;
let consumoKWH = 350;

let proxPagoMes = consumoKWH > 300 ? (pagoMes + (pagoMes*0.2)) 
                    : pagoMes ;


console.log("Debido a que su hogar tuvo un consumo de "+consumoKWH+"kwh,");
console.log("en base al ajuste tarifario (hogares con consumo mayor a 300kwh");
console.log("por mes tendrán un aumento del 20%), cumplimos con informarle que se ha");
console.log("ajustado el total a pagar, que será de $"+proxPagoMes);