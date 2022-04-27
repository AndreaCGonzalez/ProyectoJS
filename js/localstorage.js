//me guarda los datos del usuario en JSON
const guardoDatosUsuarioJSON= ()=>{
    const datosForm = {nombre: "", dni: "", tel: "",
                       email:"", dom:"",
                       altura:"", localidad:"", tipoEnvio:""}
        
        datosForm.nombre = nombre.value
        datosForm.dni = dni.value
        datosForm.tel = telefono.value
        datosForm.email = email.value 
        datosForm.dom = domicilio.value
        datosForm.altura = altura.value
        datosForm.localidad = localidad.value
        datosForm.tipoEnvio = tipoEnvio.value 
        localStorage.setItem("datosDelUsuario", JSON.stringify(datosForm))
}


const recuperoDatosUsuarioJSON = ()=>{
    const datosDelUsuario = JSON.parse(localStorage.getItem("datosDelUsuario"))
    
    const nuevosDatosEnvio = document.getElementById("datosDelEnvio")
    const listaDetalles = document.createElement('ul')
    listaDetalles.className= "listaDatosUsuario"
    listaDetalles.innerHTML = `
                                <ul class="listaDatosUsuario">
                                    <li>nombre: ${datosDelUsuario.nombre}</li>
                                    <li>dni: ${datosDelUsuario.dni}</li>
                                    <li>telefono: ${datosDelUsuario.tel}</li>
                                    <li>email: ${datosDelUsuario.email}</li>
                                    <li>domicilio: ${datosDelUsuario.dom}</li>
                                    <li>altura: ${datosDelUsuario.altura}</li>
                                    <li>localidad: ${datosDelUsuario.localidad}</li>
                                    <li>tipo de envío: ${datosDelUsuario.tipoEnvio}</li>
                                </ul>`
                                
    nuevosDatosEnvio.append(listaDetalles)
}