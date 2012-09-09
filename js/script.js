/* Author: Juan Torres

*/

var segundos = 0;
var milisec = 0;
var countdownEnEjecucion=false;
var modalOpen=false;

function iniciarCronometro(){
    
    if(!countdownEnEjecucion){
        segundos = 60;
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
    $("#divCronometroPrincipal").addClass("tiempoTerminado");
    //countdownEnEjecucion = false;
    return true;
 } 
 else 
    var seg=segundos;
    milisec-=1;
    if(seg<10) seg = '0'+seg;
    $("#relojSegundos").html(seg);
    $("#relojMiliSegundos").html(milisec);
    setTimeout("displayCountDown()",100);
    return true;
} 
 