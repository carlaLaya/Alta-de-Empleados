import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
//import Boton from "../Boton/Boton" 


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

   const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        //console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar)
    }

const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({ titulo, colorSecundario: color })
}



    const manejarBorrado = () => {
      actualizarNombre('');
      actualizarPuesto('');
      actualizarFoto('');
      actualizarEquipo('');
      actualizarTitulo('');
      actualizarColor('');


  };

  const Boton = ({ texto, className, onClick, type = 'button' }) => {
    return (
        <button type={type} className={`btn ${className}`} onClick={onClick}>
            {texto}
        </button>
    );
};


    return <div className="container d-flex justify-content-evenly gap-5 align-items-start flex-wrap">
    <div className="form p-5 mt-5 bg-custom " >
        <form onSubmit={manejarEnvio}>
            <div className="mb-4 text-center">
                <h6 className="titulo">Rellena el formulario para crear el colaborador</h6>
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
                <Boton texto="Crear" className="btn btn-primary" type="submit"/>
                <Boton texto="Borrar" className="btn btn-secondary" onClick={manejarBorrado}/>
            </div>
        </form>
    </div>
    <div className="form p-5 mt-5 bg-custom " >
        <form onSubmit={manejarNuevoEquipo}>
            <div className="mb-4 text-center">
                <h6 className="titulo">Rellena el formulario para crear un equipo</h6>
            </div>
            <div className="mb-4">
            <CampoTexto
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
           </div>
            <div className="mb-4">
            <CampoTexto
                titulo="Color"
                placeholder="Ingresar el color"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            /> 
            </div>
         
            <div className="d-flex justify-content-end gap-2">
                <Boton texto="Registrar equipo" className="btn btn-primary" type="submit"/>
                <Boton texto="Borrar" className="btn btn-secondary" onClick={manejarBorrado}/>

            </div>
        </form>
    </div>
</div>




}

export default Formulario;







