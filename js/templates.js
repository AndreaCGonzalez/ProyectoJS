//CARDS DE PRODUCTOS
const contenidoCard = (contenido)=> {
    const {img, titulo, alt, precio} = contenido
       let HTMLCard = ""
             HTMLCard += `
                        <div class="col d-flex-justify-content-center mb-4">
                            <div class="card shadow mb-1 bg-light rounded mb-5" style="width: 16rem;" id="contenidoCard">                           
                                <div class="card-body">
                                    <img src="${img}" class="card-img-top" alt="${alt}" width="200" height="260">
                                    <h5 class="card-title">${titulo}</h5>
                                    <h5 class="precio">$ ${precio}</h5>
                                    <div class="d-grid gap-2">
                                    <button class="btn btn-secondary button botonComprar" id="botonComprar">Comprar</button>
                                    </div>               
                                </div>               
                            </div>
                        </div>`
             
        return HTMLCard
 }
 
 const cardLoadingError = ()=> {
    let HTMLCardError = `<div class="center"> 
                           
                            <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                           
                         </div>`
       return HTMLCardError
 }

//LISTA CON DETALLES DE ENVIO
