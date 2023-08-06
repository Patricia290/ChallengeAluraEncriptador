
var textArea = document.querySelector (".texto"); // selecciona clase .texto del Dom
var mensaje = document.querySelector(".mensaje"); // selecciona clase .mensaje del Dom

function encriptar(palabraEncriptada){
    var llaves = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    palabraEncriptada = palabraEncriptada.toLowerCase()
    
    for(var i = 0; i<llaves.length; i++){
        if(palabraEncriptada.includes(llaves[i][0])){
            palabraEncriptada = palabraEncriptada.replaceAll(llaves[i][0],llaves[i][1])
            
        }
    }
    return palabraEncriptada
}

var imagen = document.querySelector(".imagen-gato"); // busca la clase .imagen-gato
var infoimg = document.querySelector(".info-imagen"); // copyright imagen gato
var titulo = document.querySelector(".area-encriptada h2"); // busca la clase .area-encriptada
var titulo2 = document.querySelector(".area-encriptada h3"); // busca la clase .area-encriptada
var bntnoculto = document.querySelector(".copiar") // busca la clase .copiar del boton copiar


function btnEncriptar() {
    
    var validartexto = true; // variable que indica que se da por cierta la funcion de validar texto.

    if (!textArea.value.match(/^[a-z\s!¡¿?]*$/)) {
        // Si el texto no cumple con los criterios permitidos, se muestra la alerta
        validartexto = false; 
        alert("Ingrese solo letras minúsculas, sin caracteres especiales.");
    } //revisa nuevamente la validación de texto, si es falsa, regresa y nuevamente se ejecuta y salta la alerta
    if (!validartexto){
        return;

    }
    var textoencriptado = encriptar(textArea.value)
    mensaje.value = textoencriptado
    textArea.value = "";


    // Ocultar la imagen y los textos en el área de mensaje
    // usamos la funcion document.querySelector para seleccionar los elementos a ocultar
    // usamos la propiedad style.display para seleccionar el estilo css "none" para ocultar los elementos.
    imagen.style.display = "none"; //oculta imagen
    infoimg.style.display = "none"; // oculta link
    titulo.style.display = "none"; // oculta titulos
    titulo2.style.display = "none"; // oculta pequeño parrafo
    bntnoculto.style.visibility = "visible"; //hace visible el boton copiar al momento de hacer click en el boton encriptar

}

function desencriptar(palabraDesencriptada){ // se declara a la inversa las llaves de encriptación de está foma no modifico la funcion
    var llaves = [["enter","e"],["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]];
    palabraDesencriptada = palabraDesencriptada.toLowerCase()
    
    for(var i = 0; i<llaves.length; i++){
        if(palabraDesencriptada.includes(llaves[i][0])){
            palabraDesencriptada = palabraDesencriptada.replaceAll(llaves[i][0],llaves[i][1])
            
        }
    }
    return palabraDesencriptada
}

function btnDesencriptar() {

    var validartexto = true; // variable que indica que se da por cierta la funcion de validar texto.

    if (!textArea.value.match(/^[a-z\s!¡¿?]*$/)) {
        // Si el texto no cumple con los criterios permitidos, se muestra la alerta
        validartexto = false; 
        alert("Ingrese solo letras minúsculas, sin caracteres especiales.");
    } //revisa nuevamente la validación de texto, si es falsa, regresa y nuevamente se ejecuta y salta la alerta
    if (!validartexto){
        return;

    }

    var textoencriptado = desencriptar(textArea.value)
    mensaje.value = textoencriptado
    textArea.value = "";
    imagen.style.display = "none"; 
    infoimg.style.display = "none"; 
    titulo.style.display = "none"; 
    titulo2.style.display = "none"; 
    bntnoculto.style.visibility = "visible";
}

// Asignación del boton copiar 
var btnCopiar = document.querySelector(".copiar")
// Acción al dar un clic al boton copiar con la función copiar. 
btnCopiar.onclick = copiarTexto // se asigna la propiedad onclick a la funcion copiarTexto

function copiarTexto (){
    var copiar = document.querySelector(".mensaje");
    // Seleccionar el elemento del área de mensajes
    copiar.select();
    // Seleccionar el texto dentro del elemento
    navigator.clipboard.writeText(copiar.value)
    //Copia aquello que se encuentra dentro del campo de texto.
    //Alerta de validación de la copia del texto.
    alert("Mensaje Copiado");
    copiar.value = ""; // Borra el texto del área de mensajes
    // Vuelve a enfocar el área de texto para que el cursor vuelva allí
    document.querySelector(".texto").focus();

    // devuelve los estilos al area mensaje al hacer click en el boton copiar
    imagen.style.display = "block"; // muestra la imagen
    infoimg.style.display = "block" // muestra link
    titulo.style.display = "block"; // muestra titulo h2
    titulo2.style.display = "block";// muestra texto p
    bntnoculto.style.visibility = "hidden"; // vuelve a esconder el boton copiar
}

