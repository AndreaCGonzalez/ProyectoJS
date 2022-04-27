//FORMULARIO DE ENVIO
//DOM checked conecta
const nombre = document.getElementById("nombre")
const dni = document.getElementById("dni")
const telefono = document.getElementById("tel")
const email = document.getElementById("exampleInputEmail1")
const domicilio = document.getElementById("dom")
const calle = document.getElementById("calle")
const altura = document.getElementById("nro")
const localidad = document.getElementById("localidad")
const tipoEnvio = document.getElementById("exampleDataList")
const btnFinalizarCompra = document.getElementById("btnFinalizarCompra")

// if (btnFinalizarCompra != null) {
    btnFinalizarCompra.addEventListener("click", guardoDatosUsuarioJSON)
// }