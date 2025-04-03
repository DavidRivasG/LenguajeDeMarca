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
    if (titleName.style.color === 'red') {
        titleName.style.color = ''; // Cambia el color a negro
        titleName.style = "font-style: italic;"
    } else {
        titleName.style.color = 'red'; // Cambia el color a rojo
    }
});

nameColorButton.addEventListener('click', function() {
    console.warn("click --------------")
    alert("alertaaaa")    
})

