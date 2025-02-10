let listaAmigos = [];
let resultado;

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(){
    let AmigoIngresado = document.getElementById('amigo'); //Obtiene el "input"
    let nombreIngresado = AmigoIngresado.value.trim(); //Obtiene el valor sin espacios en blanco
    let lista = document.getElementById('listaAmigos'); //Obtine el <ul> correspondiente a lista de amigos
    let resultado = document.getElementById('resultado'); //opchgpt


    if (AmigoIngresado === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    if (listaAmigos.includes(nombreIngresado)){
        alert('Este nombre ya está en la lista.');
        limpiarCaja();
        return;
    }

    listaAmigos.push(nombreIngresado); //Ingresa los valores en el array
    /*  se encarga de mostrar en terminal 
    console.log(nombreIngresado)
    console.log(listaAmigos);
    */
    
    limpiarCaja();
               
    // Funcion para actualizar lista
    actualizarLista();
    
    lista.style.display = "block";
    resultado.innerHTML = '';

    return;
} 


function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //Limpia la lista

    listaAmigos.forEach((nombreIngresado) => {
        let nuevoElementoaIngresar = document.createElement('li');
        nuevoElementoaIngresar.textContent = nombreIngresado;
        lista.appendChild(nuevoElementoaIngresar);
    });

}

function sortearAmigo(){
    let resultado = document.getElementById('resultado'); //opchgpt
    let lista = document.getElementById('listaAmigos')
    
    //Si la cantidad de nombres en el array es menor que 2 nos dara un mensaje
    if(listaAmigos.length < 2){
        alert('Debe haber al menos dos amigos para sortear.');
        return;
    }

    // Numero al azar
    let numerodeAmigoSecreto =  Math.floor(Math.random()*listaAmigos.length);
    
    let AmigoSecreto = listaAmigos[numerodeAmigoSecreto]; //opchgpt

    resultado.innerHTML = `Tu amigo secreto es: ${AmigoSecreto}`;
    lista.style.display = "none";
}