import { useState } from 'react'

export default function Formulario({ setContactos }) {

    //Un estado por cada input
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [direccion, setDireccion] = useState("");
    const [provincia, setProvincia] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [telefono, setTelefono] = useState("");

    //Funciones para recibir el estado de los inputs
    const handleNombre = e => {setNombre(e.target.value)};
    const handleApellidos = e => {setApellidos(e.target.value)};
    const handleDireccion = e => {setDireccion(e.target.value)};
    const handleProvincia = e => {setProvincia(e.target.value)};
    const handleCodigoPostal = e => {setCodigoPostal(e.target.value)};
    const handleTelefono = e => {setTelefono(e.target.value)};

    //Funcion para poder guardar la info del formulario

    function submit(e) {
        e.preventDefault();

        const nuevoContacto = {nombre, apellidos, direccion, provincia, codigoPostal, telefono};

        setContactos(contactoActual => [...contactoActual, nuevoContacto])

        setNombre("");
        setApellidos("");
        setDireccion("");
        setProvincia("");
        setCodigoPostal("")
        setTelefono("");
    }

    return(
        <form onSubmit={submit}>
            <input type="text" className="form-control mb-3" value={nombre} onChange={handleNombre} placeholder="Introduce un nombre"/>
            <input type="text" className="form-control mb-3" value={apellidos} onChange={handleApellidos} placeholder="Introduce los apellidos"/>
            <input type="text" className="form-control mb-3" value={direccion} onChange={handleDireccion} placeholder="Introduce la dirección"/>
            <input type="text" className="form-control mb-3" value={provincia} onChange={handleProvincia} placeholder="Introduce la provincia"/>
            <input type="text" className="form-control mb-3" value={codigoPostal} onChange={handleCodigoPostal} placeholder="Introduce el codigo postal"/>
            <input type="text" className="form-control mb-3" value={telefono} onChange={handleTelefono} placeholder="Introduce el telefono"/>
            <button type="submit" className="btn btn-success">Registrar</button>
        </form>
    )
}