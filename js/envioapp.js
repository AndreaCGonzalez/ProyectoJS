//PAGINA DETALLES DEL ENVIO
document.addEventListener("DOMContentLoaded", recuperoDatosUsuarioJSON)

//volver a la pag ppal
const reestablecerDatos= ()=>{
    localStorage.clear()
    console.warn("se reestablecieron datos del usuario")
}

const btnVolverAlInicio = document.getElementById("btnVolverAlInicio")
btnVolverAlInicio.addEventListener("click", reestablecerDatos )
 

