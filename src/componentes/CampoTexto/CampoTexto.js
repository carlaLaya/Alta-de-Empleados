//import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}`

    const { type = "text"} = props


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="mb-3">
    <label className="form-label">{props.titulo}</label>
    <input
       //type="text"
        className="form-control"
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
    />
</div>

}

export default CampoTexto;

  


    

   


