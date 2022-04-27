//PARA ESCUCHAR BOTON COMPRAR Y OBTENER TITULO, PRECIO DEL ITEM DE CADA CARD
function btnComprarListeners(){
    const btnComprar = document.getElementsByClassName('botonComprar')

    for(let i = 0; i< btnComprar.length; i++){
        btnComprar[i].addEventListener('click', btnComprarClickeado)
    }
}


//CUANDO CLICKEO COMPRAR SE TOMAN LOS DATOS DEL PROD DE ESA CARD
function btnComprarClickeado(e){
    const boton = e.target
    
    const comprarProd = boton.parentElement.parentElement
    const tituloProd = comprarProd.getElementsByClassName('card-title')[0].innerText
    const precioProd = comprarProd.getElementsByClassName('precio')[0].innerText
    const imgProd = comprarProd.getElementsByClassName('card-img-top')[0].src
    agregarAlCarrito(tituloProd, precioProd, imgProd)
    
}


function eliminar(e) {
    const botonPresionado = e.target
    botonPresionado.parentElement.parentElement.remove()
    actualizarPrecioTotal()
}


//PARA EVITAR QUE EL INPUT BAJE DE 1
const inputCantidad = document.getElementsByClassName('cantProd')
for(let i=0; i<inputCantidad.length; i++) {
    const inputCantProd = inputCantidad[i]
    inputCantProd.addEventListener('change', inputChange)
}

function inputChange(e){
    const input = e.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    actualizarPrecioTotal()
}