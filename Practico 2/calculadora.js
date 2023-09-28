let operador = '/';
let resultado = 0;
let num1 = 10;
let num2 = 500;

switch (operador) {
    case "+":
            resultado = num1 + num2;
            console.log("Resultado: "+num1+" "+operador+" "+num2+" = "+ resultado);
        break;

    case "-":
        resultado = num1 - num2;
        console.log("Resultado: "+num1+" "+operador+" "+num2+" = "+ resultado);
    break;

    case "*":
        resultado = num1 * num2;
        console.log("Resultado: "+num1+" "+operador+" "+num2+" = "+ resultado);
    break;
    
    case "/":
        resultado = num1 / num2;
        console.log("Resultado: "+num1+" "+operador+" "+num2+" = "+ resultado);
    break;

    default:
        console.log("Operación Inválida")
        break;
}

