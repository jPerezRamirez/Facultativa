/*recuperar los elementos que estan en el html */


var dato1=document.getElementById("dato1");//boton de suma evento clic
var dato2=document.getElementById("dato2");

var suma=document.getElementById("suma");
var resta=document.getElementById("resta");
var multiplicar=document.getElementById("multiplicar");
var dividir=document.getElementById("dividir");

var result=document.getElementById("result");
var resultado;

//evento del clic

suma.addEventListener("click",sumar); //addeventlistener escucha el evento
resta.addEventListener("click",restar);
multiplicar.addEventListener("click",multiplicacion);
dividir.addEventListener("click",division);

function sumar(){
    resultado=Number(dato1.value) + Number(dato2.value);
    result.innerHTML=resultado; 
    dato1.value="";
    dato2.value="";
  
    dato1.focus();
}

function restar(){
    resultado=Number(dato1.value) - Number(dato2.value);
    result.innerHTML=resultado; 
    dato1.value="";
    dato2.value="";
    dato1.focus();
}

function multiplicacion(){
    resultado=Number(dato1.value) * Number(dato2.value);
    result.innerHTML=resultado; 
    dato1.value="";
    dato2.value="";
    dato1.focus();
}

function division(){
    resultado=Number(dato1.value) / Number(dato2.value);
    result.innerHTML=resultado; 
    dato1.value="";
    dato2.value="";
    dato1.focus();
}


