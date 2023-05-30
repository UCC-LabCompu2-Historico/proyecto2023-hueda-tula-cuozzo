/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method
 * @param
 * @param
 * @return
 */
function GuardarLSBP(){
    let cant, tipo;
    cant = document.getElementById(cantblack1).value;
    tipo=document.getElementsById(miss_america).value;
}

var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }


}
function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx =  canvas.getContext("2d");
    canvas.width = canvas.width;

}


