const preguntasCorrectas = {
    primera : "paris",
    segunda : "malagueño",
    tercera : "atlantico",
    cuarta : "ankara",
    quinta : "rusia"

}
 // Inicializamos el formulario.
document.querySelector('form[name="formulario"]').addEventListener('submit', (event) => {
    event.preventDefault()

    //Extraemos el valor de las respuestas
    let respuestaUno = event.target.elements['sena'].value;
    let respuestaDos =  event.target.elements['malaga'].value;
    let respuestaTres =  event.target.elements['canarias'].value;
    let respuestaCuatro =  event.target.elements['turquia'].value;
    let respuestaCinco =  event.target.elements['volga'].value;

    let labelsUno = document.querySelectorAll('#formulario > section.questionOne > article > label')
    let labelsDos = document.querySelectorAll('#formulario > section.questionTwo > article > label')
    let labelsTres = document.querySelectorAll('#formulario > section.questionThree > article > label')
    let labelsCuatro = document.querySelectorAll('#formulario > section.questionFour > article > label')
    let labelsCinco = document.querySelectorAll('#formulario > section.questionFive > article > label')

    // Pregunta uno 
    if(respuestaUno == preguntasCorrectas.primera){
        labelsUno[2].style.backgroundColor = "#2CE271"
    }else if (respuestaUno == "praga"){
        labelsUno[0].style.backgroundColor = "red"
    }else if(respuestaUno == "madrid"){
        labelsUno[1].style.backgroundColor = "red"
    }else if(respuestaUno == "lisboa"){
        labelsUno[3].style.backgroundColor = "red"
    }

    // Pregunta dos
    if(respuestaDos == preguntasCorrectas.segunda){
        labelsDos[0].style.backgroundColor = "#2CE271"
    }else if (respuestaDos == "malaguiniano"){
        labelsDos[1].style.backgroundColor = "red"
    }else if(respuestaDos == "malagano"){
        labelsDos[2].style.backgroundColor = "red"
    }else if(respuestaDos == "malaguense"){
        labelsDos[3].style.backgroundColor = "red"
    }

    //Pregunta tres 
    if(respuestaTres == preguntasCorrectas.tercera){
        labelsTres[2].style.backgroundColor = "#2CE271"
    }else if (respuestaTres == "pacifico"){
        labelsTres[0].style.backgroundColor = "red"
    }else if(respuestaTres == "indico"){
        labelsTres[1].style.backgroundColor = "red"
    }else if(respuestaTres == "mediterraneo"){
        labelsTres[3].style.backgroundColor = "red"
    }

    //Pregunta cuatro
    if(respuestaCuatro == preguntasCorrectas.cuarta){
        labelsCuatro[1].style.backgroundColor = "#2CE271"
    }else if (respuestaCuatro == "estambul"){
        labelsCuatro[0].style.backgroundColor = "red"
    }else if(respuestaCuatro == "esmirna"){
        labelsCuatro[2].style.backgroundColor = "red"
    }else if(respuestaCuatro == "konya"){
        labelsCuatro[3].style.backgroundColor = "red"
    }

    //Pregunta cinco 
    if(respuestaCinco == preguntasCorrectas.quinta){
        labelsCinco[2].style.backgroundColor = "#2CE271"
    }else if (respuestaCinco == "lituania"){
        labelsCinco[0].style.backgroundColor = "red"
    }else if(respuestaCinco == "ucrania"){
        labelsCinco[1].style.backgroundColor = "red"
    }else if(respuestaCinco == "bielorus"){
        labelsCinco[3].style.backgroundColor = "red"
    }
    
    


})