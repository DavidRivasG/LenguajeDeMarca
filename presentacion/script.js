const profileimage = document.getElementById('foto');

profileimage.addEventListener('mouseover', () => {
    profileimage.style.boxShadow = '0 0px 1000px blue';
    profileimage.src = "imagenes/image.png";
})
profileimage.addEventListener('mouseout', () => {
    profileimage.style.boxShadow = 'none';
    profileimage.src = "imagenes/foto1.jpeg";
})

const nameColorButton = document.getElementById('boton1');

nameColorButton.addEventListener('click', () => {
    const titleName = document.getElementById('fullname');
    if (titleName.style.color == 'red') {
        titleName.style.color = ''; // Cambia el color a negro
        titleName.style = "font-style: italic;";
    } else {
        titleName.style.color = 'red'; // Cambia el color a ro
    }
});

nameColorButton.addEventListener('click', function() {
    console.warn("click --------------")
    alert("alertaaaa")    
})

const botonTexto = document.getElementById('boton2');

botonTexto.addEventListener('click', () => {
    const titleName = document.getElementById('fullname');
    if (titleName.textContent == 'Presentacion de David y Manolo') {
        titleName.textContent = '1 DAW';
    } else {
        titleName.textContent = 'Presentacion de David y Manolo';
    }
});

const botonOcultar = document.getElementById('ocultar');

botonOcultar.addEventListener('click', () => {
    const titleName = document.getElementById('fullname');
    if (titleName.style.display == 'none') {
        titleName.style.display = 'block';
    } else {
        titleName.style.display = 'none';
    }
});

const contactButton = document.getElementById('boton4');

contactButton.addEventListener('click', () => {
    const contactForm = document.getElementById('formulario');
    if (contactForm.style.display === 'none') {
        contactForm.style.display = 'block'; 
    } else {
        contactForm.style.display = 'none'; 
    }
});