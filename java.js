/**
 * Carga los datos guardados en el local storage, para que que se calcula el total,
 * el descuento de lo seleccionado por el usuario
 * @method CargarLS
 */
let CargarLS = () => {

    let cant1, cant2, cant3, tipo1, tipo2, tipo3;
    cant1 = localStorage.getItem("canthambLS");
    cant2 = localStorage.getItem("canthambLS2");
    cant3 = localStorage.getItem("canthambLS3");
    tipo1 = localStorage.getItem("tipohambLS");
    tipo2 = localStorage.getItem("tipohambLS2");
    tipo3 = localStorage.getItem("tipohambLS3");


    const totalf = Number(cant1) * Number(tipo1) + Number(cant2) * Number(tipo2) + Number(cant3) * Number(tipo3);
    localStorage.setItem("totalf", totalf);
    document.getElementById("total").value = totalf;
    document.getElementById("descuento").value = 0;

}


/**
 * Almacena la cantidad,el tipo y el precio de hamburguesa seleccionada por el usurio en black pan.
 * @method GuardarLSBP
 */
let GuardarLSBP = () => {

    let cant, tipo, cantt, canttt, tipoo, tipooo, rest;
    rest = "blackpan";


    cant = document.getElementById("cantblack1").value;
    cantt = document.getElementById("cantblack2").value;
    canttt = document.getElementById("cantblack3").value;
    tipo = document.getElementsByName("miss_america")[0].value;
    tipoo = document.getElementsByName("bacon_cheese")[0].value;
    tipooo = document.getElementsByName("vegetariana")[0].value;

    if (tipo == "simple") {
        tipo = 1450;
    }
    if (tipo == "doble") {
        tipo = 1750;
    }
    if (tipo == "triple") {
        tipo = 2000;
    }
    if (tipoo == "simple") {
        tipoo = 1650;
    }
    if (tipoo == "doble") {
        tipoo = 2000;
    }
    if (tipoo == "triple") {
        tipoo = 2300;
    }
    if (tipooo == "simple") {
        tipooo = 1350;
    }
    if (tipooo == "doble") {
        tipooo = 1500;
    }
    if (tipooo == "triple") {
        tipooo = 1750;
    }

    localStorage.setItem("canthambLS", cant);
    localStorage.setItem("canthambLS2", cantt);
    localStorage.setItem("canthambLS3", canttt);
    localStorage.setItem("tipohambLS", tipo);
    localStorage.setItem("tipohambLS2", tipoo);
    localStorage.setItem("tipohambLS3", tipooo);
    localStorage.setItem("restaurante", rest);




}


/**
 * Almacena la cantidad,el tipo y el precio de hamburguesa seleccionada por el usurio en Hoppinnes.
 * @method GuardarLSHoppi
 */
let GuardarLSHoppi = () => {

    let cant, tipo, cantt, canttt, tipoo, tipooo, rest;
    rest = "hopiness";

    cant = document.getElementById("canthoppi1").value;
    cantt = document.getElementById("canthoppi2").value;
    canttt = document.getElementById("canthoppi3").value;
    tipo = document.getElementsByName("argentaburger")[0].value;
    tipoo = document.getElementsByName("cheeseburger")[0].value;
    tipooo = document.getElementsByName("crispyonionburgerveggie")[0].value;

    if (tipo == "simple") {
        tipo = 1150;
    }
    if (tipo == "doble") {
        tipo = 1350;
    }
    if (tipo == "triple") {
        tipo = 1600;
    }
    if (tipoo == "simple") {
        tipoo = 1150;
    }
    if (tipoo == "doble") {
        tipoo = 1350;
    }
    if (tipoo == "triple") {
        tipoo = 1600;
    }
    if (tipooo == "simple") {
        tipooo = 1350;
    }
    if (tipooo == "doble") {
        tipooo = 1500;
    }
    if (tipooo == "triple") {
        tipooo = 1750;
    }

    console.log(arrayBurger);

    localStorage.setItem("canthambLS", cant);
    localStorage.setItem("canthambLS2", cantt);
    localStorage.setItem("canthambLS3", canttt);
    localStorage.setItem("tipohambLS", tipo);
    localStorage.setItem("tipohambLS2", tipoo);
    localStorage.setItem("tipohambLS3", tipooo);
    localStorage.setItem("restaurante", rest);




}


/**
 * Almacena la cantidad,el tipo y el precio de hamburguesa seleccionada por el usurio en Wonder.
 * @method GuardarLSWonder
 */
let GuardarLSWonder = () => {

    let cant, tipo, cantt, canttt, tipoo, tipooo, rest;
    rest = "wonder";

    cant = document.getElementById("cantwonder1").value;
    cantt = document.getElementById("cantwonder2").value;
    canttt = document.getElementById("cantwonder3").value;
    tipo = document.getElementsByName("wonderargentina")[0].value;
    tipoo = document.getElementsByName("wonderveggie")[0].value;
    tipooo = document.getElementsByName("wonderbomba")[0].value;
    if (tipo == "doble") {
        tipo = 2090;
    }
    if (tipo == "triple") {
        tipo = 2450;
    }
    if (tipoo == "simple") {
        tipoo = 1690;
    }
    if (tipoo == "doble") {
        tipoo = 1890;
    }
    if (tipoo == "triple") {
        tipoo = 2190;
    }

    if (tipooo == "doble") {
        tipooo = 2090;
    }
    if (tipooo == "triple") {
        tipooo = 2400;
    }
    localStorage.setItem("canthambLS", cant);
    localStorage.setItem("canthambLS2", cantt);
    localStorage.setItem("canthambLS3", canttt);
    localStorage.setItem("tipohambLS", tipo);
    localStorage.setItem("tipohambLS2", tipoo);
    localStorage.setItem("tipohambLS3", tipooo);
    localStorage.setItem("restaurante", rest);




}


/**
 * Almacena la cantidad,el tipo y el precio de hamburguesa seleccionada por el usurio en molly.
 * @method GuardarLSMolly
 */
let GuardarLSMolly = () => {

    let cant, tipo, cantt, canttt, tipoo, tipooo, rest;
    rest = "molly";

    cant = document.getElementById("cantmolly1").value;
    cantt = document.getElementById("cantmolly2").value;
    canttt = document.getElementById("cantmolly3").value;
    tipo = document.getElementsByName("bigveggie")[0].value;
    tipoo = document.getElementsByName("eggbacon")[0].value;
    tipooo = document.getElementsByName("crispyonion")[0].value;

    if (tipo == "simple") {
        tipo = 1150;
    }
    if (tipo == "doble") {
        tipo = 1350;
    }
    if (tipo == "triple") {
        tipo = 1600;
    }
    if (tipoo == "simple") {
        tipoo = 1250;
    }
    if (tipoo == "doble") {
        tipoo = 1450;
    }
    if (tipoo == "triple") {
        tipoo = 1700;
    }

    if (tipooo == "simple") {
        tipooo = 1350
    }
    if (tipooo == "doble") {
        tipooo = 1500;
    }
    if (tipooo == "triple") {
        tipooo = 1750;
    }
    localStorage.setItem("canthambLS", cant);
    localStorage.setItem("canthambLS2", cantt);
    localStorage.setItem("canthambLS3", canttt);
    localStorage.setItem("tipohambLS", tipo);
    localStorage.setItem("tipohambLS2", tipoo);
    localStorage.setItem("tipohambLS3", tipooo);
    localStorage.setItem("restaurante", rest);





}


/**
 * En base a lo almacenado en el local storage, calcula el descuento de un 20% en base al total a cobrar. Lo almacena en
 * local storage
 * Luego actualiza el total final
 * @method Descuento
 */
let Descuento = () => {

    let descuento, totalFinal, totalf1;
    totalf1 = localStorage.getItem("totalf");

    descuento = Number(totalf1) * (20 / 100);

    totalFinal = Number(totalf1) - Number(descuento);

    localStorage.setItem("totalFinal", totalFinal);
    localStorage.setItem("descuento", descuento)

    document.getElementById("descuento").value = descuento;
    document.getElementById("totalfinal").value = totalFinal;

}


/**
 * Recupera lo almacenado en el local storage como total final y en base a la cantidad con la que va a pagar el usuario
 * calcula el vuelto que debe recibir el mismo. Ademas verifica que la cantidad ingresada sean numeros y que no sea menor
 * que el total.
 * @method Vuelto
 */
let Vuelto = () => {

    let vuelto, totalfv;
    const cantidad = document.getElementById("cantidad").value;
    totalfv = localStorage.getItem("totalFinal");
    const numeros = /^[0-9]*$/;


    if (cantidad.search(numeros) || Number(cantidad) < Number(totalfv) || cantidad === "") {
        const dialogocantidad = document.getElementById("dialogocantidad");
        dialogocantidad.showModal();
        let v;
        v = "";
        document.efectivo.vuelto.value = v;

    } else if (Number(cantidad) >= Number(totalfv)) {

        vuelto = Number(cantidad) - Number(totalfv);
        localStorage.setItem("vuelto", vuelto);
        document.getElementById("vuelto").value = vuelto;

    }
}


/**
 * Realizar la firma dentro del recuadro canvas
 * @method Dibujar
 * @param {MouseEvent}-event
 * @return
 */
var bandera;
let initialX;
let initialY;

function dibujar(event) {

    const canvas = document.getElementById("canvasAdibujar");
    const ctx = canvas.getContext("2d");

    let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
    const obtenerXReal = (clientX) => clientX - canvas.getBoundingClientRect().left;
    const obtenerYReal = (clientY) => clientY - canvas.getBoundingClientRect().top;

    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(event.clientX);
    yActual = obtenerYReal(event.clientY);
    ctx.beginPath();
    ctx.moveTo(xAnterior, yAnterior);
    ctx.lineTo(xActual, yActual);
    ctx.closePath();


    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    if (bandera) {

        ctx.fillRect(xActual, yActual, 3, 3);

    }
}


/**
 * Permite limpiar el recuadro de la firma cuando el usuario apreta el boton limpiar firma
 * @method limpiarCanvas
 */
function limpiarCanvas() {

    let canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

}


/**
 * Valida que los datos esten cargados de forma correcta. En caso contrario muestra mensajes de error.
 * Confirma la compra y redirige a la pagina de ticket
 * @method validardatosefectivo
 * @param {string} name - Nombre del comprador
 * @param {string} lastname - Apellido del comprador
 * @param {number} id -Dni del comprador
 * @param {number}ammount - Cantidad con la que va a pagar
 */
let validardatosefectivo = (name, lastname, id, ammount) => {

    const letras = /^[a-zA-Z\s]*$/;
    const numeros = /^[0-9]*$/;
    let totalf2;
    let validar = true;
    let medio;
    totalf2 = localStorage.getItem("totalFinal");

    if (name.search(letras) || name == "") {
        const dialogonombre = document.getElementById("dialogonombre");
        dialogonombre.showModal();
        validar = false;
    }

    if (lastname.search(letras) || lastname == "") {
        const dialogoapellido = document.getElementById("dialogoapellido");
        dialogoapellido.showModal();
        validar = false;

    }

    if (id.search(numeros) || id == "" || id.length !== 8) {
        const dialogodni = document.getElementById("dialogodni");
        dialogodni.showModal();
        validar = false;

    }

    if (ammount.search(numeros) || Number(ammount) < Number(totalf2) || ammount == "") {
        const dialogocantidad = document.getElementById("dialogocantidad");
        dialogocantidad.showModal();
        validar = false;
    }

    if (validar != false) {
        alert("Se realizó la compra con éxito. Gracias por su compra! :D")
        medio = "efectivo";
        localStorage.setItem("medio", medio);
        window.location.href = "Ticket.html";

    }


}


/**
 * Permite que al aparecer el alert sobre el error en la carga del nombre, el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoNombre
 */
let cerrarDialogoNombre = () => {

    let nombre;
    let dialogonombre = document.getElementById("dialogonombre");
    dialogonombre.close();
    nombre = " ";
    document.efectivo.nombre.value = nombre;

}


/**
 * Permite que al aparecer el alert sobre el error en la carga del apellido, el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoApellido
 */
let cerrarDialogoApellido = () => {

    let apellido;
    let dialogoapellido = document.getElementById("dialogoapellido");
    dialogoapellido.close();
    apellido = "";
    document.efectivo.apellido.value = apellido;

}


/**
 * Permite que al aparecer el alert sobre el error en la carga del dni, el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoDNI
 */
let cerrarDialogoDNI = () => {

    let dni;
    let dialogodni = document.getElementById("dialogodni");
    dialogodni.close();
    dni = "";
    document.efectivo.Dni.value = dni;

}


/**
 * Permite que al aparecer el alert sobre el error en la carga de la cantidad con la que va a pagar,
 * el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoCantidad
 */
let cerrarDialogoCantidad = () => {

    let cantidad;
    let dialogocantidad = document.getElementById("dialogocantidad");
    dialogocantidad.close();
    cantidad = "";
    document.efectivo.cantidad.value = cantidad;

}


/**
 * Recibe los datos de la tarjeta del consumidor y valida que sean correctos.
 * Ademas de que ningun campo quede vacio, muestra un alert. Si todo es correcto confirma la compra y redirige al ticket.
 * @method validardatostarjeta
 * @param {string} titular2 - Titular de la tarjeta con la que se va pagar.
 * @param {number} id - Dni del dueño de la tarjeta
 * @param {number} NT2 - Numero de tarjeta
 * @param {number} vencimiento2 - Vencimiento de la tarjeta
 * @param {number}CDS2 - Codigo de seguridad de tarjeta
 * @return
 */
let validardatostarjeta = (titular2, id, NT2, vencimiento2, CDS2) => {

    const letras = /^[a-zA-Z\s]*$/;
    const numeros = /^[0-9]*$/;
    let validar = true;
    let medio;

    if (titular2.search(letras) || titular2 == "") {
        const dialogotitular = document.getElementById("dialogotitular");
        dialogotitular.showModal();
        validar = false;

    }

    if (id.search(numeros) || id == "" || id.length !== 8) {
        const dialogodni2 = document.getElementById("dialogodni2");
        dialogodni2.showModal();
        validar = false;

    }

    if (NT2.search(numeros) || NT2 == "") {
        const dialogoNT = document.getElementById("dialogoNT");
        dialogoNT.showModal();
        validar = false;

    }

    if (CDS2.search(numeros) || CDS2 == "") {
        const dialogoCDS2 = document.getElementById("dialogoCDS");
        dialogoCDS2.showModal();
        validar = false;

    }

    if (vencimiento2 == "") {
        const dialogoVen2 = document.getElementById("dialogoVen");
        dialogoVen2.showModal();
        validar = false;
    }

    if (validar != false) {
        alert("Se realizó la compra con éxito. Gracias por su compra! :D")
        medio = "tarjeta";
        localStorage.setItem("medio", medio);
        window.location.href = "Ticket.html";

    }

}


/**
 * Permite que al aparecer el alert sobre el error en la carga del titular de la tarjeta, el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoTitular
 */
let cerrarDialogoTitular = () => {

    let titular;
    let dialogotitular = document.getElementById("dialogotitular");
    dialogotitular.close();
    titular = "";
    document.tarjeta.titular.value = titular;

}


/**
 * Permite que al aparecer el alert sobre el error en la carga del dni, el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoDNI2
 */
let cerrarDialogoDNI2 = () => {
    let dni;
    let dialogodni2 = document.getElementById("dialogodni2");
    dialogodni2.close();
    dni = "";
    document.tarjeta.Dni.value = dni;
}


/**
 * Permite que al aparecer el alert sobre el error en la carga del numero de tarjeta
 * , el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoNT
 */
let cerrarDialogoNT = () => {

    let NT;
    let dialogoNT = document.getElementById("dialogoNT");
    dialogoNT.close();
    NT = "";
    document.tarjeta.NT.value = NT;

}


/**
 * Permite que al aparecer el alert sobre el error en la carga del codigo de seguridad, el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoCDS
 */
let cerrarDialogoCDS = () => {

    let CDS;
    let dialogoCDS = document.getElementById("dialogoCDS");
    dialogoCDS.close();
    CDS = "";
    document.tarjeta.CDS.value = CDS;

}


/**
 * Permite que al aparecer el alert sobre el error en la carga del vencimiento de la tarjeta,
 * el usuario al apretar aceptar pueda volver a cargar
 * @method cerrarDialogoVen
 */
let cerrarDialogoVen = () => {

    let Ven;
    let dialogoVen = document.getElementById("dialogoVen");
    dialogoVen.close();
    Ven = "";
    document.tarjeta.vencimiento.value = Ven;

}


/**
 * Desplaza la imagen de una hamburguesa a lo largo del ancho de la pagina de forma de pago
 * @method animarhamburguesa
 */
var x = 0;
var dx = 2;
let animarhamburguesa = () => {

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "imagenes/hamburAnimada.png";

    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);

    }

    if (x >= canvas.width) {
        x = 0;
    }

    x += dx;
}


/**
 * Crea tres arrays distintos con lo guardado en el localstorage: hamburguesas, precios y cantidad.
 * Verifica el nombre del restaurante y en funcion de eso combina el tipo, con el precio y la cantidad de hamburguesas
 * @method animarhamb
 */

var arrayBurger = [];
let arrayPrices = [];
let arrayCant = [];

let cargararray = () => {

    var cant1, cant2, cant3, tipo1, tipo2, tipo3;
    cant1 = localStorage.getItem("canthambLS");
    cant2 = localStorage.getItem("canthambLS2");
    cant3 = localStorage.getItem("canthambLS3");
    tipo1 = localStorage.getItem("tipohambLS");
    tipo2 = localStorage.getItem("tipohambLS2");
    tipo3 = localStorage.getItem("tipohambLS3");

    if ((localStorage.getItem("restaurante")) === "hopiness") {
        if (cant1 != 0) {
            arrayPrices.push(Number(cant1) * Number(tipo1));
            arrayBurger.push("Argenta Burger");
            arrayCant.push(cant1)

        }
        if (cant2 != 0) {
            arrayPrices.push(Number(cant2) * Number(tipo2));
            arrayBurger.push("Cheese Burger");
            arrayCant.push(cant2)


        }
        if (cant3 != 0) {
            arrayPrices.push(Number(cant3) * Number(tipo3));
            arrayBurger.push("Crispy Onion ");
            arrayCant.push(cant3)


        }
    }

    if ((localStorage.getItem("restaurante")) === "blackpan") {
        if (cant1 != 0) {
            arrayPrices.push(Number(cant1) * Number(tipo1));
            arrayBurger.push("Miss America");
            arrayCant.push(cant1)

        }
        if (cant2 != 0) {
            arrayPrices.push(Number(cant2) * Number(tipo2));
            arrayBurger.push("Bacon Cheese");
            arrayCant.push(cant2)


        }
        if (cant3 != 0) {
            arrayPrices.push(Number(cant3) * Number(tipo3));
            arrayBurger.push("Vegetariana ");
            arrayCant.push(cant3)


        }
    }

    if ((localStorage.getItem("restaurante")) === "molly") {
        if (cant1 != 0) {
            arrayPrices.push(Number(cant1) * Number(tipo1));
            arrayBurger.push("Big Veggie");
            arrayCant.push(cant1)

        }
        if (cant2 != 0) {
            arrayPrices.push(Number(cant2) * Number(tipo2));
            arrayBurger.push("Egg Bacon");
            arrayCant.push(cant2)


        }
        if (cant3 != 0) {
            arrayPrices.push(Number(cant3) * Number(tipo3));
            arrayBurger.push("Crispy Onion ");
            arrayCant.push(cant3)


        }
    }

    if ((localStorage.getItem("restaurante")) === "wonder") {
        if (cant1 != 0) {
            arrayPrices.push(Number(cant1) * Number(tipo1));
            arrayBurger.push(" Argentina");
            arrayCant.push(cant1)

        }
        if (cant2 != 0) {
            arrayPrices.push(Number(cant2) * Number(tipo2));
            arrayBurger.push(" Vegetariana");
            arrayCant.push(cant2)


        }
        if (cant3 != 0) {
            arrayPrices.push(Number(cant3) * Number(tipo3));
            arrayBurger.push(" BBQ ");
            arrayCant.push(cant3)


        }
    }

}


/**
 * Invoca al array burguer y junto con la forma de pago, el total, decuento y cantidad construye el ticket.
 * Utiliza forEach para recorrer el array
 * @method animarhamb
 */
function ticket() {

    var descuento, vuelto, totalfinal, fpago;
    cargararray();

    descuento = localStorage.getItem("descuento");
    vuelto = localStorage.getItem("vuelto");
    fpago = localStorage.getItem("medio");

    if (fpago === "tarjeta") {
        totalfinal = localStorage.getItem("totalf");
    } else {
        totalfinal = localStorage.getItem("totalFinal");
    }

    var canvas = document.getElementById("ticketCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "12pt Verdana";
    ctx.fillStyle = "black";
    let alturarenglon = 57;

    ctx.fillText("-----------------TICKET-----------------", 3, 15);
    ctx.fillText("PRODUCTOS ", 7, 30);
    ctx.fillText("PRECIO", 225, 30);
    ctx.fillText("----------------------------------------", 3, 44);


    arrayBurger.forEach((hamburguesa, id) => {

        ctx.fillText(hamburguesa, 7, alturarenglon);
        ctx.fillText("x", 135, alturarenglon);
        ctx.fillText(arrayCant[id], 143, alturarenglon);
        ctx.fillText(arrayPrices[id], 233, alturarenglon);

        alturarenglon += 20;
    });

    ctx.fillText("----------------------------------------", 3, alturarenglon + 20);
    ctx.fillText("TOTAL: ", 3, alturarenglon + 40);
    ctx.fillText(totalfinal, 89, alturarenglon + 40);

    if (fpago === "efectivo") {
        ctx.fillText("Descuento: ", 3, alturarenglon + 60);
        ctx.fillText(descuento, 100, alturarenglon + 60);
        ctx.fillText("Vuelto: ", 3, alturarenglon + 80);
        ctx.fillText(vuelto, 100, alturarenglon + 80);
    }

    ctx.fillText("Muchas Gracias por su compra 🤍 ", 3, alturarenglon + 100);

}


