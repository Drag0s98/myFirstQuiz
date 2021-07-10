document.querySelector('form[name="formulario"]').addEventListener('submit', (event) => {
    event.preventDefault()

    // Constructor con la respuestas correctas // 
    const respuestas = {
        sena: document.querySelector('input[value="paris"]:checked'),
        malaga: document.querySelector('input[value="malagueño"]:checked'),
        canarias: document.querySelector('input[value="atlantico"]:checked'),
        turquia: document.querySelector('input[value="ankara"]:checked'),
        volga: document.querySelector('input[value="rusia"]:checked')
    }

    // SOLUCION LARGA DONDE SE MUESTRAN LAS RESPUESTAS INCORRECTAS //

    if (respuestas.sena) {
        console.log("Pregunta uno correcta!");
        document.querySelector('label[class="boxThree"]').style.backgroundColor = "#2CE271"

    } else {
        console.log("Pregunta uno incorrecta")

    }

    if (respuestas.malaga) {
        console.log("Pregunta dos correcta!");
        document.querySelector('section[name="questionTwo"]').querySelector('label[class="boxOne"]').style.backgroundColor = "#2CE271"


    } else {
        console.log("Pregunta dos incorrecta")
    }
    if (respuestas.canarias) {
        console.log("Pregunta tres correcta!");
        document.querySelector('section[name="questionThree"]').querySelector('label[class="boxThree"]').style.backgroundColor = "#2CE271"


    } else {
        console.log("Pregunta tres incorrecta")
    }
    if (respuestas.turquia) {
        console.log("Pregunta cuatro correcta!");
        document.querySelector('section[name="questionFour"]').querySelector('label[class="boxTwo"]').style.backgroundColor = "#2CE271"


    } else {
        console.log("Pregunta cuatro incorrecta")
    }
    if (respuestas.volga) {
        console.log("Pregunta cinco correcta!");
        document.querySelector('section[name="questionFive"]').querySelector('label[class="boxThree"]').style.backgroundColor = "#2CE271"



    } else {
        console.log("Pregunta cinco incorrecta")
    }


    /*
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
        }*/




})