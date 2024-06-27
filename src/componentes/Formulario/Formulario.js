import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    //const { registrarColaborador } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
    }

    return <div className="container d-flex justify-content-center">
    <div className="form p-5 mt-5 bg-custom " >
        <form onSubmit={manejarEnvio}>
            <div className="mb-4 text-center">
                <h5 className="titulo">Rellena el formulario para crear el colaborador</h5>
            </div>
            <div className="mb-4">
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
           </div>
            <div className="mb-4">
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            /> 
            </div>
             <div className="mb-4">
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace
                 de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            </div>
            <div className="mb-4">
                <ListaOpciones
                    valor={equipo}
                    actualizarValor={actualizarEquipo}
                    equipo={props.equipo}
                />
            </div>
            <div className="d-flex justify-content-end gap-2">
                <Boton texto="Crear" className="btn btn-primary"/>
                <Boton texto="Borrar" className="btn btn-secondary"/>
            </div>
        </form>
    </div>
</div>


}

export default Formulario;







