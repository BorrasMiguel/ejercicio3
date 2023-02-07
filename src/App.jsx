import './App.css'
import { useState } from 'react'
import Agenda  from './components/Agenda'
import Formulario from './components/Formulario'

function App() {
  const initialState = [
    {nombre: "Miguel", apellidos: "Borras", direccion: "Avenida Andalucia", ciudad: "Linares", codigoPostal: 23700, telefono: 684036091},
    {nombre: "Ana", apellidos: "Casado", direccion: "Avenida Andalucia", ciudad: "Linares", codigoPostal: 23700, telefono: 647839210},
    {nombre: "Lola", apellidos: "Dueñas", direccion: "Calle Colifror", ciudad: "Madrid", codigoPostal: 23400, telefono: 869453271},
  ]

  const [contactos, setContactos] = useState(initialState);

  return (
    <div className="container">
      <h2 className='my-4'>Agenda</h2>
      <Agenda contactos={contactos} setContactos={setContactos}/>
      <h2>Nuevo Contacto</h2>
      <Formulario setContactos={setContactos}/>
    </div>
  )
}

export default App
