//import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="mb-3">
    <label className="form-label">{props.titulo}</label>
    <input
        type="text"
        className="form-control"
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
    />
</div>

}

export default CampoTexto;

  /*   /*
    return <div>
    <div className="container d-flex justify-content-center">
    <div className="card p-5 mt-5 bg-custom border-custom">


        <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="titulo">Rellena el formulario y agrega un nuevo empleado</h5>
        </div>



        <form onSubmit={manejarEnvios}>
            <div className="mb-4">
                <label htmlFor="nombre" className="form-label">{props.nombre}</label>
                <input  className="form-control" placeholder="Ingresar nombre" required  value={nombre} actualizarValor={actualizarNombre} />
            </div>
            <div className="mb-4">
                <label htmlFor="puesto" className="form-label">{props.puesto}</label>
                <input type="text" className="form-control" id="puesto" name="puesto" placeholder="Ingresar Puesto" value={puesto} required  actualizarValor={actualizarPuesto} />
            </div>
            <div className="mb-4">
                <label htmlFor="imagen" className="form-label">{props.imagen}</label>
                <input type="text" className="form-control" id="imagen" name="imagen" placeholder="Foto" value={imagen} required actualizarValor={actualizarImagen}/>
            </div>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
 




export default CampoTexto;
  */





    

   


