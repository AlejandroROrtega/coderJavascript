//SISTEMA PARA CALCULAR PRECIO DEL KILO DE LANA

//Variables a utilizar:
const precioKilo = 200;
let cliente = "";
let colorLana = "";
let cantidadKilos = 0;
let precioFinal = 0;
let direccionCliente = 0;

//Función
function cotizarLana() {
    cliente = prompt("¡Bienvenido/a! Ingresa tu nombre:");

    cantidadKilos = parseInt(prompt("Ingrese la cantidad de kilos que desea comprar:"));

    colorLana = prompt("Ingrese el color de lana que desea (Disponible actualmente: 'blanco', 'rojo' o 'azul')");

    while (colorLana != "blanco" && colorLana != "rojo" && colorLana != "azul") {
        colorLana = prompt("Ingrese el color de lana que desea (Disponible actualmente: 'blanco', 'rojo' o 'azul')");
    }

    if (colorLana === "rojo" || colorLana === "azul") {
        precioFinal = (precioKilo * cantidadKilos) * 1.5;
        alert("Información cargada con éxito. Te recordamos que los colores distintos al blanco son un poco más caros.");
    } else {
        precioFinal = precioKilo * cantidadKilos;
        alert("Información cargada con éxito.")
    }

    if (precioFinal >= 2000) {
        alert("¡Por tu compra mayor a $2000 tenes envío gratis!");
        direccionCliente = prompt("¿A dónde lo llevamos?");
    } else if (precioFinal >= 1000) {
        alert("Por tu compra mayor a $1000 ganaste este cúpon de descuento: AROGSP17");
    }

    if (direccionCliente != 0) {
        alert("Muchas gracias " + cliente + ". El monto final de tu compra es de $" + precioFinal + ". En 24 horas recibirás tu pedido en " + direccionCliente + ". Esperamos poder atenderte nuevamente pronto.");
    } else {
        alert("Muchas gracias " + cliente + ". El monto final de tu compra es de $" + precioFinal + ". Esperamos poder atenderte nuevamente pronto.");
    }
};

//Invocación de la función:
cotizarLana()