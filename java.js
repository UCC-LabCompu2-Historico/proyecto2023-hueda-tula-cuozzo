/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method
 * @param
 * @param
 * @return
 */

function calculo() {
    var cant = parseInt(document.getElementById("cantblack1").value)||0;
    var tipo=parseInt(document.getElementsByName("").value) || 0;
    var iva = parseInt(document.getElementById("cantIva").value)||0;
    var subt = cant*pUnit;
    var cantIva = (subt*iva)/100;
    var total=subt+cantIva;

    document.getElementById("IVA").value= cantIva;
    document.getElementById("Total").value=total;
}

// function GuardarLSBP(){
//     let cant, tipo, i;
//     cant = document.getElementById("cantblack1").value;
//     tipo=document.getElementsByName("miss_america")[0].value;
//     if(tipo=="simple"){
//         tipo=1450;
//     }
//     else if(tipo=="doble"){
//         tipo=1750;
//     }
//     else if(tipo=="triple"){
//         tipo=2000;
//     }
//     localStorage.setItem("canthambLS", cant);
//     localStorage.setItem("tipohambLS", tipo);
//     window.open("formasdepago.html");
// }
// function CargarLS(){
//     let cant1, tipo1;
//     cant1=localStorage.getItem("canthambLS");
//     tipo1=localStorage.getItem("tipohambLS");
//     document.getElementById("total").value=Number(cant1)*Number(tipo1);
//
//     }
function cargarWeb(){
    var cant, tipo, urlComp;
    cant=document.getElementById("cantblack1").value;
    tipo=document.getElementsByName("miss_america")[0].value;
    if(tipo=="simple"){
        tipo=1450;
    }
    else if(tipo=="doble"){
        tipo=1750;
    }
    else if(tipo=="triple"){
        tipo=2000;
    }
    urlComp="formasdepago.html#" + cant + "#" + tipo;
    console.log(urlComp)
    window.open(urlComp);

}
function cargarResultado(){
    var urlComp, can, tip;

    urlComp=window.location.href.split("/")[5];
    can=urlComp.split("#")[1];
    tip=urlComp.split("#")[2];
    document.getElementById("dist").value=can*tip;
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
