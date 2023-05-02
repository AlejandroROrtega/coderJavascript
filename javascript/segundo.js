//Clase constructora
class Usuario {
    constructor(nombre, apellido, dni, membresia, saldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.membresia = membresia;
    this.saldo = saldo;
};
};

//Función de despedida:
function saludo() {
    alert("Gracias por ser parte de Banco RN. Esperamos verlo pronto.")
}

//Declaramos los clientes mediante objetos:
const cliente1 = new Usuario("Federico", "Martinez", 38213413, "normal", 243770);
const cliente2 = new Usuario("Patricia", "Diaz", 33189673, "normal", 290150);
const cliente3 = new Usuario("Alexis", "Ortiz", 25122433, "gold", 423650);
const cliente4 = new Usuario("Pedro", "Fuentes", 18544700, "diamond", 875700);

//Todos los clientes dentro de un array:
let listadoUsuarios = [cliente1, cliente2, cliente3, cliente4];

alert("Bienvenido al Banco RN");
let solicitud = parseInt(prompt("¿Qué acción desea realiar? (ingrese el número correspondiente) \n1. Consultar saldo \n2. Ingresar saldo \n3. Extraer saldo \n4. Modificar DNI \n5. Consultar la cantidad de clientes"));

//SOLICITUD 1
if (solicitud === 1) {
    let eleccion = parseInt(prompt("Seleccione el cliente del que desea saber el saldo: \n1. Federico Martinez \n2. Patricia Diaz \n3. Alexis Ortiz \n4. Pedro Fuentes"));
    if (eleccion === 1) {
        alert("El saldo total es de $" + cliente1.saldo);
        saludo();
    } else if (eleccion === 2) {
        alert("El saldo total es de $" + cliente2.saldo)
        saludo();
    } else if (eleccion === 3) {
        alert("El saldo total es de $" + cliente3.saldo)
        saludo();
    } else if (eleccion === 4) {
        alert("El saldo total es de $" + cliente4.saldo)
        saludo();
    };
};

//SOLICITUD 2
if (solicitud === 2) {
    let eleccionUsuario = parseInt(prompt("Seleccione el cliente al que desea agregar el saldo: \n1. Federico Martinez \n2. Patricia Diaz \n3. Alexis Ortiz \n4. Pedro Fuentes"));
    let agregarSaldo = parseInt(prompt("¿Cuánto saldo desea ingresar?"));
    if (eleccionUsuario === 1) {
        alert("Saldo añadido con éxito a " + cliente1.nombre + " " + cliente1.apellido);
        cliente1.saldo = cliente1.saldo + agregarSaldo;
        alert("El nuevo saldo es de $" + cliente1.saldo);
        saludo();
    } else if (eleccionUsuario === 2) {
        alert("Saldo añadido con éxito a " + cliente2.nombre + " " + cliente2.apellido);
        cliente2.saldo = cliente2.saldo + agregarSaldo;
        alert("El nuevo saldo es de $" + cliente2);
        saludo();
    } else if (eleccionUsuario === 3) {
        alert("Saldo añadido con éxito a " + cliente3.nombre + " " + cliente3.apellido);
        cliente3.saldo = cliente3.saldo + agregarSaldo;
        alert("El nuevo saldo es de $" + cliente3.saldo);
        saludo();
    } else if (eleccionUsuario === 4) {
        alert("Saldo añadido con éxito a " + cliente4.nombre + " " + cliente4.apellido);
        cliente4.saldo = cliente4.saldo + agregarSaldo;
        alert("El nuevo saldo es de $" + cliente4.saldo);
        saludo();
    }
};

//SOLICITUD 3
if (solicitud === 3) {
    let elegirUsuario = parseInt(prompt("Seleccione el cliente al que desea extraer el saldo: \n1. Federico Martinez \n2. Patricia Diaz \n3. Alexis Ortiz \n4. Pedro Fuentes"));
    let extraerSaldo = parseInt(prompt("¿Cuánto saldo desea extraer?"))
    if (elegirUsuario === 1) {
        alert("Extrajiste $" + extraerSaldo + " con éxito de la cuenta de " + cliente1.nombre + " " + cliente1.apellido)
        cliente1.saldo = cliente1.saldo - extraerSaldo;
        alert("El nuevo saldo es de: $" + cliente1.saldo);
        saludo();
    } else if (elegirUsuario === 2) {
        alert("Extrajiste $" + extraerSaldo + " con éxito de la cuenta de " + cliente2.nombre + " " + cliente2.apellido)
        cliente2.saldo = cliente2.saldo - extraerSaldo;
        alert("El nuevo saldo es de: $" + cliente2.saldo);
        saludo();
    } else if (elegirUsuario === 3) {
        alert("Extrajiste $" + extraerSaldo + " con éxito de la cuenta de " + cliente3.nombre + " " + cliente3.apellido)
        cliente3.saldo = cliente3.saldo - extraerSaldo;
        alert("El nuevo saldo es de: $" + cliente3.saldo);
        saludo();
    } else if (elegirUsuario === 4) {
        alert("Extrajiste $" + extraerSaldo + " con éxito de la cuenta de " + cliente4.nombre + " " + cliente4.apellido)
        cliente4.saldo = cliente4.saldo - extraerSaldo;
        alert("El nuevo saldo es de: $" + cliente4.saldo);
        saludo();
    }
};

//SOLICITUD 4
if (solicitud === 4) {
    let usuarioSeleccionado = parseInt(prompt("Seleccione el cliente al que desea actualiar el DNI: \n1. Federico Martinez \n2. Patricia Diaz \n3. Alexis Ortiz \n4. Pedro Fuentes"));
    let nuevoDni = parseInt(prompt("Ingrese el nuevo DNI"));
    if (usuarioSeleccionado === 1) {
        alert("Modificaste con éxito el DNI de " + cliente1.nombre + " " + cliente1.apellido);
        cliente1.dni = nuevoDni;
        alert("El DNI ahora es: " + cliente1.dni);
        saludo();
    } else if (usuarioSeleccionado === 2) {
        alert("Modificaste con éxito el DNI de " + cliente2.nombre + " " + cliente2.apellido);
        cliente2.dni = nuevoDni;
        alert("El DNI ahora es: " + cliente2.dni);
        saludo();
    } else if (usuarioSeleccionado === 3) {
        alert("Modificaste con éxito el DNI de " + cliente3.nombre + " " + cliente3.apellido);
        cliente3.dni = nuevoDni;
        alert("El DNI ahora es: " + cliente3.dni);
        saludo();
    } else if (usuarioSeleccionado === 4) {
        alert("Modificaste con éxito el DNI de " + cliente4.nombre + " " + cliente4.apellido);
        cliente4.dni = nuevoDni;
        alert("El DNI ahora es: " + cliente4.dni);
        saludo();
    }
};

//SOLICITUD 5
if (solicitud === 5) {
    alert("Nuestro Banco cuenta con un total de " + listadoUsuarios.length + " clientes.")
    saludo();
}