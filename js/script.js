/* Author: Juan Torres

*/

var segundos = 0;
var milisec = 0;
var countdownEnEjecucion=false;
var modalOpen=false;

function loadDisplayCountDown(seg){
    
    if(!countdownEnEjecucion){
        segundos = seg;
        countdownEnEjecucion = true;
        displayCountDown();
    }
}

function displayCountDown(){ 


 if (milisec<=0){ 
    milisec=9;
    segundos-=1; 
 } 
 if (segundos<=-1){ 
    milisec=0;
    segundos=0;
    $("#tiempoEspera").html("Ahora ya puede autentificarse");
    $("#tiempoEspera").removeClass("tiempoEspera").addClass("tiempoEsperaOK");
    $("#comentarioTiempoEspera").hide();
    countdownEnEjecucion = false;
    return true;
    
 } 
 else 
    milisec-=1 
    var mensaje = segundos+"."+milisec
    $("#tiempoEspera").html(mensaje);
    if (modalOpen){
        setTimeout("displayCountDown()",100);
    }
       
    
    //displayCountDown(); 
} 
 