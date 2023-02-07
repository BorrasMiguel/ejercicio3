export default function Agenda({ contactos, setContactos }) {

    const deleteContact = telefono => {
        return e => {
            setContactos(contactos.filter(contacto => contacto.telefono !== telefono))
        }
    }

    return(
        <div className="row">
            {
                contactos.map((contacto, index) => {
                    return <ul className="list-group col-6 mb-4" key={contacto.telefono}>
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{contacto.nombre}</li>
                        <li className="list-group-item">{contacto.apellidos}</li>
                        <li className="list-group-item">{contacto.direccion}</li>
                        <li className="list-group-item">{contacto.ciudad}</li>
                        <li className="list-group-item">{contacto.codigoPostal}</li>
                        <li className="list-group-item">{contacto.telefono}</li>
                        <li className="list-group-item">
                            <button className="btn btn-danger" onClick={deleteContact(contacto.telefono)}>Eliminar</button>
                        </li>
                    </ul>
                })
            }
        </div>
    )
};
