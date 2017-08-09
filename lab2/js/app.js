/*recuperar los elementos que estan en el html */


var dato1=document.getElementById("dato1");//boton de suma evento clic
var dato2=document.getElementById("dato2");
var suma=document.getElementById("suma");
var result=document.getElementById("result");
var resultado;

//evento del clic

suma.addEventListener("click",sumar); //addeventlistener escucha el evento

function sumar(){
    resultado=Number(dato1.value) + Number(dato2.value);
    result.innerHTML=resultado; 
    dato1.value="";
    dato2.value="";
    dato1.focus();
}


