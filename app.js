let listaAmigos = [];
let resultado;
let numeroMaximo = 10;

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let AmigoIngresado = document.getElementById('amigo').value;
    
    if (AmigoIngresado == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        //Cambiar bloque de programación por uno que cumpla los requerimientos
        listaAmigos.push(AmigoIngresado);
        numeroMaximo = listaAmigos.length;
        console.log(AmigoIngresado)
        console.log(listaAmigos);
        //asignarTextoElemento('ul',`${listaAmigos}`);
        document.getElementById('listaAmigos').value = listaAmigos;
        limpiarCaja();
    }
    return;
}

function sortearAmigo(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo);
    console.log(numeroGenerado);
    resultado = listaAmigos[numeroGenerado];
    asignarTextoElemento('ul',`Tu amigo secreto es: ${resultado}`);
}