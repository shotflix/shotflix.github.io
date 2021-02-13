const buscar = document.getElementById('buscar')
const iconBuscar = document.getElementById('iconBuscar')
const form = document.getElementById('form')
const iconMenu = document.getElementById('iconMenu')
const removeMenu = document.getElementById('removeMenu')
const nav = document.getElementById('nav')
const inputBuscar = document.getElementById('buscar')
const header = document.querySelector('header')
const ulHeader = document.getElementById('ul-header')

var time;



form.addEventListener('mouseenter', () => {
    (function LimparTimeOut() {
        clearTimeout(time);
    })();
})

form.addEventListener('click', () => {

    if (window.innerWidth < 855) {
        (function aumentarTamanho(){
            buscar.style.height = '40px'
            buscar.style.width = '100%'
        })();
    } else {
        (function aumentarTamanho(){
            buscar.style.height = '40px'
            buscar.style.width = '250px'
        })();
    }

    (function esconderIcon(){
        iconBuscar.style.display = 'none'
    })();
})

form.addEventListener('mouseleave', () => {
    time = setTimeout(() => {
        (function diminuirTamanho(){
            buscar.style.height = '0px'
            buscar.style.width = '0px'
        })();
    
        (function mostrarIcon(){
            iconBuscar.style.display = 'block'
        })();
    }, 2000);
})


iconMenu.addEventListener('click', () => {
    (function mostrarNav() {
        nav.style.width = '50%'
        form.style.display = 'flex'
        ulHeader.style.display = 'block'
    })();

    (function removeIconMenu() {
        iconMenu.style.display = 'none'
    })();

    (function mostrarIconRemoveMenu() {
        removeMenu.style.display = 'block'
    })();
})

removeMenu.addEventListener('click', () => {
    (function mostrarIconMenu() {
        removeMenu.style.display = 'none'
        iconMenu.style.display = 'block'
    })();

    (function removerNavMobile() {
        nav.style.width = '0'
        ulHeader.style.display = 'none'
        form.style.display = 'none'
    })();
})


iconBuscar.addEventListener('click', () => {
    inputBuscar.focus()
    if (window.innerWidth < 855 && inputBuscar.focus) {
        inputBuscar.style.margin = '10px 5px'
    }
})
