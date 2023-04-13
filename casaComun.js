const btnMenuHam = document.querySelector('.abrir-menuHam');
const menuHam = document.querySelector('nav ul');
const imageLogo = document.querySelector('img.img-logo');

const pregJuego = document.querySelector('.pregunta');
const respPregJuegoUno = document.querySelector('.opcionUno');
const respPregJuegoDos = document.querySelector('.opcionDos');
const respPregJuegoTres = document.querySelector('.opcionTres');
const respPregunta = document.querySelector('.respPregunta');
const gamePoints = document.querySelector('.gamePoints');

btnMenuHam.addEventListener('click', abrirMenuAdaptable);
imageLogo.addEventListener('click', abrirPrincipalPage);

respPregJuegoUno.addEventListener('click', () => puntajeJuego(1));
respPregJuegoDos.addEventListener('click', () => puntajeJuego(2));
respPregJuegoTres.addEventListener('click', () => puntajeJuego(3));


    function abrirMenuAdaptable(){
        const isAsideClosed = menuHam.classList.contains('inactivo');
        
        if(!isAsideClosed){
            menuHam.classList.add('inactivo');
            btnMenuHam.setAttribute("src", "https://www.husi.org.co/documents/10180/8336274/menu-hamburguesa.svg/5c1b935f-fcba-4200-8b4f-b7d7a77d25b6");
            btnMenuHam.style.filter = 'invert(1)';
        }else{
            menuHam.classList.toggle('inactivo');
            btnMenuHam.setAttribute("src", "https://www.husi.org.co/documents/10180/8336274/cruz.svg/c18a0a4a-8847-4ea3-bc35-445f30a494c5");
            btnMenuHam.style.filter = 'invert(0)';
        }
    }

    function abrirPrincipalPage(){
        window.open("./index.html", "_parent"); 
    }


    function cargaJuego(){
        
        let pregunta = Math.floor(Math.random() * 10);
        let mostrarPregunta = pregunta;
        let respuesta = 0;
        console.info(pregunta)

        switch(mostrarPregunta){
            case 0:
                pregJuego.innerText = '¿Que tipo de agua ocupa el 2.5% del planeta y se encuentra en glaciares, lagos y ríos?';
                respPregJuegoUno.innerText = 'Agua salada';
                respPregJuegoDos.innerText = 'Agua dulce';
                respPregJuegoTres.innerText = 'Agua turbia';
                respuesta = 2;
                respPregunta.innerHTML = respuesta;                
            break;

            case 1:
                pregJuego.innerText = 'Tipo de agua que puede ser reutilizada para el cuidado de plantas y riego.';
                respPregJuegoUno.innerText = 'Agua lluvia';
                respPregJuegoDos.innerText = 'Agua de enjuague de la ropa';
                respPregJuegoTres.innerText = 'Ninguna de las anteriores';
                respuesta = 1;
                respPregunta.innerHTML = respuesta;                  
            break;

            case 2:
                pregJuego.innerText = 'El 69 % del agua dulce se encuentra en hielos y en...';
                respPregJuegoUno.innerText = 'Lagos y ríos';
                respPregJuegoDos.innerText = 'Aguas subterráneas';
                respPregJuegoTres.innerText = 'Glaciares';
                respuesta = 3;
                respPregunta.innerHTML = respuesta;  
            break;

            case 3:
                pregJuego.innerText = 'Se caracteriza por ser un jabón de menor impacto en la contaminación del agua, se emplea en actividades de cocina y lavado de ropa.';
                respPregJuegoUno.innerText = 'Jabones biodegradables';
                respPregJuegoDos.innerText = 'Jabones liquidos';
                respPregJuegoTres.innerText = 'Jabones sólidos';
                respuesta = 1;
                respPregunta.innerHTML = respuesta;  
            break;

            case 4:
                pregJuego.innerText = 'Por malas prácticas humanas, la condición en la calidad del agua se ve implicada, afecta la salud humana y al medio ambiente.';
                respPregJuegoUno.innerText = 'Verdadero';
                respPregJuegoDos.innerText = 'Falso';
                respPregJuegoTres.innerText = 'Ninguna de las anteriores';
                respuesta = 1;
                respPregunta.innerHTML = respuesta;  
            break;

            case 5:
                pregJuego.innerText = 'Se caracteriza por ser un jabón de menor impacto en la contaminación del agua, se emplea en actividades de cocina y lavado de ropa.';
                respPregJuegoUno.innerText = 'Jabones biodegradables';
                respPregJuegoDos.innerText = 'Jabones liquidos';
                respPregJuegoTres.innerText = 'Jabones sólidos';
                respuesta = 1;
                respPregunta.innerHTML = respuesta;  
            break;

            case 6:
                pregJuego.innerText = 'El 69 % del agua dulce se encuentra en hielos y en...';
                respPregJuegoUno.innerText = 'Lagos y ríos';
                respPregJuegoDos.innerText = 'Aguas subterráneas';
                respPregJuegoTres.innerText = 'Glaciares';
                respuesta = 3;
                respPregunta.innerHTML = respuesta;  
            break;

            case 7:
                pregJuego.innerText = 'Tipo de agua que puede ser reutilizada para el cuidado de plantas y riego.';
                respPregJuegoUno.innerText = 'Agua lluvia';
                respPregJuegoDos.innerText = 'Agua de enjuague de la ropa';
                respPregJuegoTres.innerText = 'Ninguna de las anteriores';
                respuesta = 1;
                respPregunta.innerHTML = respuesta;  
            break;

            case 8:
                pregJuego.innerText = '¿Que tipo de agua ocupa el 2.5% del planeta y se encuentra en glaciares, lagos y ríos?';
                respPregJuegoUno.innerText = 'Agua salada';
                respPregJuegoDos.innerText = 'Agua dulce';
                respPregJuegoTres.innerText = 'Agua turbia';
                respuesta = 2;
                respPregunta.innerHTML = respuesta;  
            break;

            case 9:
                pregJuego.innerText = 'Tipo de agua que puede ser reutilizada para el cuidado de plantas y riego.';
                respPregJuegoUno.innerText = 'Agua lluvia';
                respPregJuegoDos.innerText = 'Agua de enjuague de la ropa';
                respPregJuegoTres.innerText = 'Ninguna de las anteriores';
                respuesta = 1;
                respPregunta.innerHTML = respuesta;
            break;

            default:
                console.log('No existe');
            break;
        }

    }
    

    function puntajeJuego(opcionSelec){
        console.warn(opcionSelec)
        if(respPregunta.innerHTML === `${opcionSelec}`){
            let suma = parseInt(gamePoints.innerHTML) + parseInt(2);
            gamePoints.innerText = suma;
            alert('Excelente, sigue asi');
            cargaJuego();
        }else{
            let resta = parseInt(gamePoints.innerHTML) - parseInt(2);
            gamePoints.innerText = resta;
            alert('upps!!!');
            cargaJuego();    
        }
    }
    
    cargaJuego();   