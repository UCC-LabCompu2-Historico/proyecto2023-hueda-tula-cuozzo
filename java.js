/**
 * Descripción
 * @method cambiarUnidades
 * @param
 * @param
 * @return
 */

let GuardarLSBP= () =>{
    let cant, tipo, cantt, canttt, tipoo, tipooo;
    cant = document.getElementById("cantblack1").value;
    cantt = document.getElementById("cantblack2").value;
    canttt = document.getElementById("cantblack3").value;
    tipo=document.getElementsByName("miss_america")[0].value;
    tipoo=document.getElementsByName("bacon_cheese")[0].value;
    tipooo=document.getElementsByName("vegetariana")[0].value;
    if(tipo=="simple"){
        tipo=1450;
    }
    if(tipo=="doble"){
        tipo=1750;
    }
    if(tipo=="triple"){
        tipo=2000;
    }
    if(tipoo=="simple"){
        tipoo=1650;
    }
    if(tipoo=="doble"){
        tipoo=2000;
    }
    if(tipoo=="triple"){
        tipoo=2300;
    }
    if(tipooo=="simple"){
        tipooo=1350;
    }
    if(tipooo=="doble"){
        tipooo=1500;
    }
    if(tipooo=="triple"){
        tipooo=1750;
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
let CargarLS = ()=>{
    var cant1,cant2,cant3,tipo1,tipo2,tipo3;
    cant1=localStorage.getItem("canthambLS");
    cant2=localStorage.getItem("canthambLS2");
    cant3=localStorage.getItem("canthambLS3");
    tipo1=localStorage.getItem("tipohambLS");
    tipo2=localStorage.getItem("tipohambLS2");
    tipo3=localStorage.getItem("tipohambLS3");
    document.getElementById("total").value=((Number(cant1 )*Number(tipo1)) + (Number(cant2)*Number(tipo2))+ (Number(cant3)*Number(tipo3)));
}


var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY ;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    if(bandera){
        ctx.fillRect(posX - 12, posY - 587, 3, 3);
        ctx.fill;
    }


}
function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}



/*let validardatos = (name, lastname, id, ammount) => {

if( name )


}*/

/*
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


*/
