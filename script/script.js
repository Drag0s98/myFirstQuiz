document.querySelector('form[name="formulario"]').addEventListener('submit', (event) => {
    event.preventDefault()


    // SOLUCION CORTA  //  
    let validation = document.querySelector('input[value="paris"]:checked') 
        && document.querySelector('input[value="malagueño"]:checked') 
        && document.querySelector('input[value="atlantico"]:checked') 
        && document.querySelector('input[value="ankara"]:checked')
        && document.querySelector('input[value="rusia"]:checked');

    if (validation) {
        console.log("perfecto");
    }
    else {
        console.log("Formulario incorrecto, vuelva a intentarlo");
    }


    // SOLUCION LARGA DONDE SE MUESTRAN LAS RESPUESTAS INCORRECTAS //

    /* if (document.querySelector('input[value="paris"]:checked')) {
         console.log("Pregunta uno correcta!");

     } else {
         alert("Pregunta uno incorrecta")
     }

     if (document.querySelector('input[value="malagueño"]:checked')) {
         console.log("Pregunta dos correcta!");

     } else {
         alert("Pregunta dos incorrecta")
     }
     if (document.querySelector('input[value="atlantico"]:checked')) {
         console.log("Pregunta tres correcta!");

     } else {
         alert("Pregunta tres incorrecta")
     }
     if (document.querySelector('input[value="ankara"]:checked')) {
         console.log("Pregunta cuatro correcta!");

     } else {
         alert("Pregunta cuatro incorrecta")
     }
     if (document.querySelector('input[value="rusia"]:checked')) {
         console.log("Pregunta cinco correcta!");

     } else {
         alert("Pregunta cinco incorrecta")
     } */


})