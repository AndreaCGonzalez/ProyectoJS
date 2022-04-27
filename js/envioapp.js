//PAGINA DETALLES DEL ENVIO
document.addEventListener("DOMContentLoaded", recuperoDatosUsuarioJSON)

//borra los datos del usuario
const reestablecerDatos= ()=>{
    localStorage.clear()
    console.warn("se reestablecieron datos del usuario")
}

//Vuelve al inicio y ejecuta fx reestablecer datos
const btnVolverAlInicio = document.getElementById("btnVolverAlInicio")
btnVolverAlInicio.addEventListener("click", reestablecerDatos )
 

