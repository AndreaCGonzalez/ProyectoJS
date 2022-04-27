//SE CARGAN LAS CARDS DE PROD EN MI PAGINA
document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
       obtenerContenido(URL)      
    }, 1000);
 })


 //CARRITO
 //SE AGREGA UNA NUEVA FILA DE PROD COMPRADOS AL CARRITO
function agregarAlCarrito(tituloProd, precioProd, imgProd){
   const agregarItem = document.createElement('tr')
   agregarItem.classList.add('filaDeProd')
   const producto = document.getElementsByClassName('filasCarrito')

   const filaProd = producto[0].getElementsByClassName('filaDeProd')
   for (let i = 0; i < filaProd.length; i++){
       const precioProdExistente = filaProd[i].getElementsByClassName('card-title')
       if (precioProdExistente[0].innerText == `${tituloProd}`){
         alerta()
         return
       }
   }

   const contenidoCarrito = `
                           <th scope="row"></th>
                               <td>
                                   <img class="card-image-top" src= ${imgProd} width="100" height="100">
                                   <span class="card-title">${tituloProd}</span>
                               </td>
                               <td>
                                   <span class="precioProd">${precioProd}</span>
                                   </td>
                               <td>
                                   <input class="cantProd" type="number" value="1">
                                   <button class="btn btn-danger button botonX">x</button>
                               </td>
                           </th>`

   agregarItem.innerHTML = contenidoCarrito
   producto[0].append(agregarItem)
   cartelGracias()
   
   agregarItem.getElementsByClassName('botonX')[0].addEventListener('click', eliminar)
   agregarItem.getElementsByClassName('cantProd')[0].addEventListener('change', inputChange)
   actualizarPrecioTotal()
}

//FUNCION QUE MULTIPLICA INPUT POR PRECIO Y LO SUMA AL PRECIO TOTAL
function actualizarPrecioTotal() {
   const contenedorCarrito = document.getElementsByClassName('filasCarrito')[0]
   const filaDeProd = contenedorCarrito.getElementsByClassName('filaDeProd')
   let total = 0
   for(let i=0; i<filaDeProd.length; i++) {
       const fila = filaDeProd[i]
       const precioProd = fila.getElementsByClassName('precioProd')[0]
       const cantProd = fila.getElementsByClassName('cantProd')[0]
       const precio = parseInt(precioProd.innerText.replace('$', ''))
       const cantidad = cantProd.value
       total = total + (precio * cantidad)
   }
   document.getElementsByClassName('precioTotal')[0].innerText = '$' + total
}