export async function obtenerClientes () {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
  
    return resultado
  }
  
  export async function obtenerCliente (id) {
    const fetchedCliente = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const cliente = await fetchedCliente.json()
  
    return cliente
  }
  
  export async function agregarCliente (datos) {
    try {
      const respuesta = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      await respuesta.json()
    } catch (e) {
      console.log(e)
    }
  }
  
  export async function actualizarCliente (id, datos) {
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      await respuesta.json()
    } catch (e) {
      console.log(e)
    }
  }
  
  export async function eliminarCliente (id) {
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'DELETE'
      })
  
      await respuesta.json()
    } catch (e) {
      console.log(e)
    }
  }
  