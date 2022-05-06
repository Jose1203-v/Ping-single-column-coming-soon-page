//Se crea la funcion iniciar. 
function iniciar() {
    //Declaración de las constantes que contienen la referencia a los elemento que serán usados por el código.
    const elementoBotonEnviar = document.getElementById("enviar");//Constante con la referencia del elemento del botón para enviar el formulario.
    const elementoFormulario = document.getElementById("formulario");//Constante con la referencia del elemento formulario.
    const elementoInput = document.getElementById("inputEmail");//Constante con la referencia del elemento input.
    const elementoContenedorInputMensajeError = document.querySelector("form > div");
    //Declaración de la variable que se usara para saber si el formulario es valido.
    let valido;
    //Creación del elemento que mostrara el mensaje de error.
    const elementoMensajeError = document.createElement("span");
    //Agregandole el texto que contendra el mensaje de error.
    elementoMensajeError.innerHTML = "Please provide a valid email address";


    //Código para inhabilitar la tecla "Enter" para el elemento input.
    elementoInput.addEventListener("keydown", (evento) => {
        if (evento.key == "Enter") {
            evento.preventDefault();
        }
    });

    elementoBotonEnviar.addEventListener("click", () => {
        valido = elementoFormulario.checkValidity();
        if (valido) {
            console.log("El formulario es valido.");
            elementoFormulario.submit();
        }else {
            elementoInput.style.border = "solid 1px #B7747D";

            elementoContenedorInputMensajeError.appendChild(elementoMensajeError);
            elementoMensajeError.style.paddingLeft = "30px";
            elementoMensajeError.style.color = "#CB8391";
            elementoMensajeError.style.fontSize = "12px";
            elementoMensajeError.style.fontStyle = "italic";

        }
    })
}



addEventListener("load", iniciar);