/**
 * Descripción
 * @method GuardarLSBP
 */

let GuardarLSBP = () => {
    let cant, tipo, cantt, canttt, tipoo, tipooo;
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
    window.open("formasdepago.html");
    window.open("Efectivo.html");
    window.open("Tajeta.html");
}
/**
 * Descripción
 * @method CargarLS
 */
let CargarLS = () => {
    var cant1, cant2, cant3, tipo1, tipo2, tipo3;
    cant1 = localStorage.getItem("canthambLS");
    cant2 = localStorage.getItem("canthambLS2");
    cant3 = localStorage.getItem("canthambLS3");
    tipo1 = localStorage.getItem("tipohambLS");
    tipo2 = localStorage.getItem("tipohambLS2");
    tipo3 = localStorage.getItem("tipohambLS3");

    var totalf = Number(cant1) * Number(tipo1) + Number(cant2) * Number(tipo2) + Number(cant3) * Number(tipo3);
    localStorage.setItem("totalf", totalf);
    document.getElementById("total").value = totalf;
}
/**
 * Descripción
 * @method GuardarLSHoppi
 */
let GuardarLSHoppi = () => {
    let cant, tipo, cantt, canttt, tipoo, tipooo;
    ;
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
    localStorage.setItem("canthambLS", cant);
    localStorage.setItem("canthambLS2", cantt);
    localStorage.setItem("canthambLS3", canttt);
    localStorage.setItem("tipohambLS", tipo);
    localStorage.setItem("tipohambLS2", tipoo);
    localStorage.setItem("tipohambLS3", tipooo);
    window.open("formasdepago.html");
    window.open("Efectivo.html");
    window.open("Tajeta.html");
}
/**
 * Descripción
 * @method GuardarLSWonder
 */
let GuardarLSWonder = () => {
    let cant, tipo, cantt, canttt, tipoo, tipooo;
    ;
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
    window.open("formasdepago.html");
    window.open("Efectivo.html");
    window.open("Tajeta.html");
}
/**
 * Descripción
 * @method GuardarLSMolly
 */
let GuardarLSMolly = () => {
    let cant, tipo, cantt, canttt, tipoo, tipooo;
    ;
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
    window.open("formasdepago.html");
    window.open("Efectivo.html");
    window.open("Tajeta.html");
}
/**
 * Descripción
 * @method Descuento
 */
let Descuento = () => {

    var descuento, totalFinal, totalf1;
    totalf1 = localStorage.getItem("totalf");

    descuento = Number(totalf1) * (20 / 100);

    totalFinal = Number(totalf1) - Number(descuento);

    localStorage.setItem("totalFinal", totalFinal);

    document.getElementById("descuento").value = descuento;
    document.getElementById("totalfinal").value = totalFinal;
}
/**
 * Descripción
 * @method Vuelto
 */
let Vuelto = () => {
    var vuelto, totalfv;
    const cantidad = document.getElementById("cantidad").value;
    totalfv = localStorage.getItem("totalFinal");
    var numeros = /^[0-9]*$/;

    if (cantidad.search(numeros) || Number(cantidad) < Number(totalfv) || cantidad === "") {
        const dialogocantidad = document.getElementById("dialogocantidad");
        dialogocantidad.showModal();
        let v;
        v = "";
        document.efectivo.vuelto.value = v;

    } else if (Number(cantidad) >= Number(totalfv)) {

        vuelto = Number(cantidad) - Number(totalfv);
        document.getElementById("vuelto").value = vuelto;

    }

}


/**
 * Descripción
 * @method Dibujar
 * @param event
 * @return
 */
var bandera;
let initialX;
let initialY;

function dibujar(event) {

    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

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
 * Descripción
 * @method limpiarCanvas
 */
function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

/**
 * Descripción
 * @method validardatosefectivo
 * @param name
 * @param lastname
 * @param id
 * @param ammount
 */
let validardatosefectivo = (name, lastname, id, ammount) => {

    var letras = /^[a-zA-Z\s]*$/;
    var numeros = /^[0-9]*$/;
    var totalf2;
    let validar = true;
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
    if(validar != false){
        alert("Se realizó la compra con éxito. Gracias por su compra! :D")
    }

}
/**
 * Descripción
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
 * Descripción
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
 * Descripción
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
 * Descripción
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
 * Descripción
 * @method validardatostarjeta
 * @param titular2
 * @param id
 * @param NT2
 * @param vencimiento2
 * @param CDS2
 * @return
 */
let validardatostarjeta = (titular2, id, NT2, vencimiento2, CDS2) => {

    var letras = /^[a-zA-Z\s]*$/;
    var numeros = /^[0-9]*$/;
    let validar = true;

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

    if(validar != false){
        alert("Se realizó la compra con éxito. Gracias por su compra! :D")
    }

}
/**
 * Descripción
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
 * Descripción
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
 * Descripción
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
 * Descripción
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
 * Descripción
 * @method animarhamb
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

