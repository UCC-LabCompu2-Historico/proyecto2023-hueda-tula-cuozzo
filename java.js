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
    localStorage.setItem("canthamb", cant);
    localStorage.setItem("tipohamb", tipo);
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

let pagarMolly = () =>{

    let totalmolly, cantmolly, preciomolly;
    console.log("Conversion de pie a otros valores");

   if(id == "molly1"){

       const preciomolly = document.getElementsByName("bigveggie")[0].value ;
       const cantmolly = document.getElementById("cantmolly1").value;

       if(preciomolly.value == "simple"){
           totalmolly = totalmolly + (1150 * cantmolly) ;
       }
       if(preciomolly.value == "doble"){
           totalmolly = totalmolly + (1350 * cantmolly) ;
       }
       if(preciomolly.value == "triple"){
           totalmolly = totalmolly + (1600 * cantmolly) ;
       }



   }else if(id == "molly2"){
       const preciomolly = document.getElementsByName("eggbacon")[0].value ;
       const cantmolly = document.getElementById("cantmolly2").value;

       if(preciomolly.value == "simple"){
           totalmolly = totalmolly + (1250 * Number(cantmolly)) ;
       }
       if(preciomolly.value == "doble"){
           totalmolly = totalmolly + (1450 * Number(cantmolly)) ;
       }
       if(preciomolly.value == "triple"){
           totalmolly = totalmolly + (1700 * Number(cantmolly)) ;
       }

        totalmolly = totalmolly + (preciomolly * Number(cantmolly)) ;
    }else if(id == "molly3"){
       const preciomolly = document.getElementsByName("crispyonion")[0].value ;
       const cantmolly = document.getElementById("cantmolly3").value;

       if(preciomolly.value == "simple"){
           totalmolly = totalmolly + (1350 * Number(cantmolly)) ;
       }
       if(preciomolly.value == "doble"){
           totalmolly = totalmolly + (1500 * Number(cantmolly)) ;
       }
       if(preciomolly.value == "triple"){
           totalmolly = totalmolly + (1750 * Number(cantmolly)) ;
       }


   }

    localStorage.setItem("TotalLS", totalmolly);

    window.open("formasdepago.html");
}

let Total = () =>{


    const tot = localStorage.getItem("TotalLS");


    document.getElementById("total").value= tot   ;

}
