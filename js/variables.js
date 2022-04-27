//CARGAR PRODUCTOS
let cargoCards = ""

//"API" de objetos JSON
const URL = `${window.location.origin}/js/productosJSON.json`
//conecto cardHTML con JS
const cardDOM = document.querySelector("#contenedorCard")


//CARRITO DE COMPRAS
const botonX = document.getElementsByClassName('botonX')

for (let i = 0; i < botonX.length; i++) {
    const btnX = botonX[i]
    btnX.addEventListener('click', eliminar)
}

//ALERT CREADO CON SWEETALERT2
function alerta(){
    Swal.fire({
    text: 'Este producto ya ha sido agregado',
    icon:'warning',
    confirmButtonText:'ok'
    })
}

function cartelGracias(){
    Swal.fire({
    title: 'Muchas Gracias',
    text: 'Tu producto se agrego a tu carrito ',
    icon:'success',
    confirmButtonText:'ok'
    })
}