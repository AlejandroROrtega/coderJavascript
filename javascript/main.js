//Plantilla de Items
class Item {
    constructor(id, nombre, precio, img, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
        this.categoria = categoria;
    }
};

//Listado de Item
const bluelock6 = new Item(1, "Bluelock 6", 2100, "img/bluelock6.jpg", "Deporte");
const bluelock8 = new Item(2, "Bluelock 8", 2400, "img/bluelock8.jpg", "Deporte");
const darling2 = new Item(3, "Darling in the Franxx 2", 3750, "img/darling2.jpg", "Drama");
const dorohedoro3 = new Item(4, "Dorohedoro 3", 1900, "img/dorohedoro3.jpg", "Terror");
const jigokuraku5 = new Item(5, "Jigokuraku 5", 1500, "img/jigokuraku5.jpg", "Terror");
const mieruko1 = new Item(6, "Mieruko 1", 4300, "img/mieruko1.jpg", "Terror");
const mieruko2 = new Item(7, "Mieruko 2", 4550, "img/mieruko2.jpg", "Terror");
const mobpsycho3 = new Item(8, "Mob Psycho 3", 2570, "img/mobpsycho3.jpg", "Shonen");
const mushihime2 = new Item(9, "Mushishime 2", 3100, "img/mushihime2.jpg", "Romance");
const paradise2 = new Item(10, "Paradise 2", 2000, "img/paradise2.jpg", "Terror");
const tokyo3 = new Item(11, "Tokyo Revengers 3", 6300, "img/tokyo3.jpg", "Drama");
const tokyo4 = new Item(12, "Tokyo Revengers 4", 6500, "img/tokyo4.jpg", "Drama");
const tokyo5 = new Item(13, "Tokyo Revengers 5", 6700, "img/tokyo5.jpg", "Drama");

//Array con todos los Items
const items = [bluelock6, bluelock8, darling2, dorohedoro3, jigokuraku5, mieruko1, mieruko2, mobpsycho3, mushihime2, paradise2, tokyo3, tokyo4, tokyo5];

//Array para el carrito de compras
let carrito = [];

//Chequeamos si hay algo en localStorage
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Ingresamos mediante DOM
const contenedorItems = document.getElementById("contenedorItems");

//Función para generar los Items
const crearItems = () => {
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-6");
        card.innerHTML = `
                <div class="card m-2 cartaProducto">
                    <img class="card-img-tom m-3" src="${item.img}" alt="${item.nombre}">
                    <div class="card-body">
                        <h4>${item.nombre}</h4>
                        <p>Categoria: ${item.categoria}</p>
                        <p>Precio: $${item.precio}</p>
                    </div>
                    <button class="btn btn-info" id="botonAdd${item.id}">Agregar al Carrito</button>
                </div>`
        contenedorItems.appendChild(card);
        const boton = document.getElementById(`botonAdd${item.id}`);
        boton.addEventListener("click", () => {
            addIn(item.id);
            Toastify({
                text: "Producto Agregado",
                duration: 1700,
                newWindow: true,
                close: false,
                gravity: "top",
                position: "right",
                stopOnFocus: false,
                style: {
                    background: "linear-gradient(to right, #a5dc86, #96c93d)",
                },
                onClick: function () { }
            }).showToast();
        })
    })
}

//Generamos los Items
crearItems();

//Funcion que evita repetir item en el carrito
const addIn = (id) => {
    const existIn = carrito.find(item => item.id === id);
    if (existIn) {
        existIn.cantidad++;
    } else {
        const item = items.find(item => item.id === id);
        carrito.push(item);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}

//Mostrar carrito
const showCarrito = document.getElementById("showCarrito");
showCarrito.addEventListener("click", () => {
    insertCarrito();
});
const contenedorCarrito = document.getElementById("contenedorCarrito");

//Función que crea a la vista el carrito
const insertCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-6");
        card.innerHTML = `
                <div class="card m-2 cartaProducto">
                        <img class="card-img-tom m-3" src="${item.img}" alt="${item.nombre}">
                    <div class="card-body">
                        <h4>${item.nombre}</h4>
                        <p>Precio unidad: $${item.precio}</p>
                        <p>Cantidad: ${item.cantidad}</p>
                    </div>
                        <button class="btn btn-danger" id="delete${item.id}">Eliminar</button>
                </div>`
        contenedorCarrito.appendChild(card);
        const boton = document.getElementById(`delete${item.id}`);
        boton.addEventListener("click", () => {
            deleteFromCarrito(item.id);
            Toastify({
                text: "Producto Eliminado",
                duration: 1700,
                close: false,
                gravity: "top",
                position: "right",
                stopOnFocus: false,
                style: {
                    background: "linear-gradient(to right, #dc3545, #b02a37)",
                },
                onClick: function () { }
            }).showToast();
        })
    })
    calcularTotal();
};

const deleteFromCarrito = (id) => {
    const item = carrito.find(item => item.id === id);
    let indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    insertCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const clearCarrito = document.getElementById("clearCarrito");
clearCarrito.addEventListener("click", () => {
    Swal.fire({
        icon: "warning",
        title: "¿Estás seguro/a?",
        text: "El carrito se vaciará por completo",
        confirmButtonColor: "#dc3545",
        confirmButtonText: "VACIAR",
        showCancelButton: true,
        cancelButtonText: "CANCELAR"
    }).then((result) => {
        if(result.isConfirmed) {
            clearAllCarrito();
            Swal.fire({
                icon: "success",
                title: "Carrito vaciado correctamente",
                confirmButtonText: "VOLVER A LA TIENDA",
            })
        }
    })
})

//Función que vacia e inica de cero el carrito
const clearAllCarrito = () => {
    carrito = [];
    localStorage.clear();
    insertCarrito();
}

const comprarCarrito = document.getElementById("comprarCarrito");
comprarCarrito.addEventListener("click", () => {
    Swal.fire({
        icon: "question",
        title: "¿Queres finalizar la compra?",
        text: "Tu carrito se vé genial, ¡Adelante!",
        confirmButtonColor: "#157347",
        confirmButtonText: "FINALIZAR",
        showCancelButton: true,
        cancelButtonColor: "#0dcaf0",
        cancelButtonText: "SEGUIR COMPRANDO"
    }).then((result) => {
        if(result.isConfirmed) {
            finalizarCarrito();
            Swal.fire({
                icon: "success",
                title: "COMPRA CON ÉXITO",
                text: "Muchas gracias por elegirnos. No olvides seguirnos en nuestras redes.",
                confirmButtonColor: "#0dcaf0",
                confirmButtonText: "VOLVER AL INICIO"
            })
        }
    })
})

//Función que simula finalizar la compra (es igual a clearAllCarrito pero me parece mejor trabajarlas por separado)
const finalizarCarrito = () => {
    carrito = [];
    localStorage.clear();
    insertCarrito();
}

const montoTotal = document.getElementById("montoTotal");
const calcularTotal = () => {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad
    })
    montoTotal.innerHTML = `${total}`
};

//Comentarios de clientes
const divComentariosClientes = document.getElementById("divComentariosClientes");
const comentariosClientes = "json/comentariosClientes.json";

fetch(comentariosClientes)
    .then(respuesta => respuesta.json())
    .then(comentarios => {
        comentarios.forEach(comentario => {
            divComentariosClientes.innerHTML += `
                                                <div data-aos="flip-left" data-aos-duration="1300" class="cajaComentarios">
                                                    <h4 class="estiloComentario">${comentario.comentario}</h4>
                                                    <p class="estiloNombre">- ${comentario.nombre} ${comentario.apellido}.</p>
                                                </div>
                                                `
        })
    })
    .catch(error => console.log(error))