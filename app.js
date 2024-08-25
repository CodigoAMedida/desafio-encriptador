// Javascript del desencriptador.
let textoEncriptado = '';
let textoIngresado = '';
const caracteresValidos = /^[a-zñ ,.!?\n]+$/     // Caracteres válidos a-z y ñ minúscula, espacios, sin acentuados

function textoValido(textoAValidar){
    // Devuelve true si el texto solo contiene caracteres válidos (sólo letras minúsculas sin acentos)
    return caracteresValidos.test(textoAValidar);
}

function Encriptar() {
    // Funcion para el encriptado de texto
    //Tomo el texto de entrada
    textoIngresado = document.querySelector('#texto__encriptable').value;
    if(textoValido(textoIngresado)){
        textoEncriptado = '';   // Blanqueo el resultado
        // realizo el ciclo de encriptación
        for(let pos = 0; pos < textoIngresado.length; pos++){
            switch(textoIngresado[pos]){
                case 'a':
                    textoEncriptado+='ai';
                    break;
                case 'e':
                    textoEncriptado+='enter';
                    break;
                case 'i':
                    textoEncriptado+='imes';
                    break;
                case 'o':
                    textoEncriptado+='ober';
                    break;
                case 'u':
                    textoEncriptado+='ufat';
                    break;
                default:
                    textoEncriptado+=textoIngresado[pos];
                    break;
            }
          }
        //muestro el texto encriptado
        document.querySelector('#texto__encriptado').value = textoEncriptado;
    }
    else{
        // Error al validar
        alert('El texto a encriptar solo puede contener texto en minúsculas, sin acentos');
        document.querySelector('#texto__encriptado').value = '';
    }
}

function Desencriptar() {
    // funcion para el desencriptado de texto
    let subcadena = '';
    document.querySelector('#texto__encriptado').value = "";
    //Tomo el texto de entrada
    textoIngresado = document.querySelector('#texto__encriptable').value;
    if(textoValido(textoIngresado)){
        // Blanqueo el resultado
        textoEncriptado = '';   // Blanqueo el resultado
        //recorro la cadena de entrada
        for(let pos = 0; pos < textoIngresado.length; pos++){
            // me guardo el texto en una subcadena para comparar
            subcadena = textoIngresado.slice(pos, textoIngresado.length)
            // verifico si la cadena corresponde a texto a desencriptar
            if(subcadena.indexOf('enter', 0) == 0){
                    textoEncriptado+='e';
                pos+=4;
            } else if(subcadena.indexOf('imes', 0) == 0){
                textoEncriptado+='i';
                pos+=3;
            } 
            else if(subcadena.indexOf('ai', 0) == 0){
                textoEncriptado+='a';
                pos++;
            } else if(subcadena.indexOf('ober', 0) == 0){
                textoEncriptado+='o';
                pos+=3;
            } else if(subcadena.indexOf('ufat', 0) == 0){
                textoEncriptado+='u';
                pos+=3;
            } else {
                textoEncriptado+=textoIngresado[pos];
            }
        }    
        document.querySelector('#texto__encriptado').value = textoEncriptado;
    }
    else{
        // Error al validar
        alert('El texto a desencriptar solo puede contener texto en minúsculas, sin acentos');
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function CopiarAlClipboard(){
        // copia la salida al clipboard (ponerlo en un botón)
        document.querySelector('#texto__encriptable').value = textoEncriptado;
        navigator.clipboard.writeText(textoEncriptado);
}
