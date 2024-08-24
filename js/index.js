
const encriptador = document.getElementById("encriptador");
const desincriptadora = document.getElementById("desincriptadora");


const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");


const resultadoEncriptar = document.getElementById("resultado-encriptado");
const resultadoDesencriptar = document.getElementById("resultado-desencriptado");


const autoDestruccionEn = document.getElementById("autoDestruccionEn");
const autoDestruccionDes = document.getElementById("autoDestruccionDes");

const encriptadoDisplay = document.getElementById('en');
const desencriptadoDisplay = document.getElementById('des');


const segundos = 10000; 
const autoDestruccionMs = "El texto se ocultara en 60 segundos para mayor seguridad"

const libreria =  /^[a-z ]+$/;


function mostrarResultado(idLimpiar,idDisplay,info,ingreso){
    ingreso.className = "ocultar-ingreso";
    idDisplay.className = "mostrar-resultado";
   
    ocultarResultado(idLimpiar,idDisplay,info,ingreso);
}

function ocultarResultado(idLimpiar,idDisplay,info,ingreso){
    info.innerHTML = autoDestruccionMs;

    setTimeout(function(){
        idDisplay.className = "resultado";
        ingreso.className = "ingreso-texto";
        limpiarTexto(idLimpiar);
    }, segundos);
}

function encriptacion(){
    if(encriptar.value == ""){
        alert("primero ingrese un texto!!!");
        encriptar.focus();
    }else if (libreria.test(encriptar.value) == false ) {

        alert('No ingresar Mayúsculas, Caracteres Especiales o acentos');;
        limpiarTexto(encriptar);
        
    }else{
        var textoEncriptado = encriptar.value.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
        var textoEncriptado = textoEncriptado.replace(/''/img, "");

        resultadoEncriptar.innerHTML = textoEncriptado;
    
        mostrarResultado(encriptar,encriptadoDisplay,autoDestruccionEn,encriptador);
    }
}

function limpiarTexto(idLimpiar){
    idLimpiar.value = '';
    idLimpiar.focus();
}

function copiarTexto(idCopy){
    idCopy.select();
    idCopy.setSelectionRange(0,99999);
    document.execCommand('copy');
}

function validacionLetras(e){
    var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key);

    if (libreria.test(tecla) == false ) {

        alert('No ingresar Mayúsculas, Caracteres Especiales o acentos');
        return false;
    }
}
 
function desencriptacion(){
    if(desencriptar.value == ""){
        alert("primero ingrese un texto!!!");
        desencriptar.focus();
    }else{

        var textoDesencriptado = desencriptar.value.replace(/enter/img, "e");
        var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
        var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
        var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
        var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
        var textoDesencriptado = textoDesencriptado.replace(/''/img, "");

        resultadoDesencriptar.innerHTML = textoDesencriptado;

        mostrarResultado(desencriptar,desencriptadoDisplay,autoDestruccionDes,desincriptadora);
    }
}

