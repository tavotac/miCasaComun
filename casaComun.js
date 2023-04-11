const btnMenuHam = document.querySelector('img.abrir-menuHam');
const menuHam = document.querySelector('nav ul');

btnMenuHam.addEventListener('click', abrirMobilMenu);

function abrirMobilMenu(){
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