//FORMULARIO DE ENVIO
//DOM
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

//Me guarda los datos del usuario al clickear boton
btnFinalizarCompra.addEventListener("click", guardoDatosUsuarioJSON)
