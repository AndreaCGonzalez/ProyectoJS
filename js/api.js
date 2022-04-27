const obtenerContenido = (URL)=> {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const cardContent = data
        cardContent.forEach(contenido => {
            cargoCards += contenidoCard(contenido)
        }); 
        
        cardDOM.innerHTML = cargoCards
        btnComprarListeners()
    })
}