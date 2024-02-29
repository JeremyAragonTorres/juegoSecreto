let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('P',`Acertastes el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('P',' El numero secreto es menor');
        }else{
            asignarTextoElemento('P', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("P", "Ya se sortearon todo los numeros posibles")

    }else{
        //Si el numero generado esta incluido en la lista hacemos una operacion si no otro
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
        }

        return numeroGenerado;


    }



}

function condicionesIniciales(){
asignarTextoElemento('h1','juego del numero secreto!');
asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo} `);
numeroSecreto = generarNumeroSecreto();
intentos=1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Desabilitar el boton de nuevo juego
    condicionesIniciales();
    //Inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');


    
}

condicionesIniciales();
