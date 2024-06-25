import "./Boton.css"


const Boton = (props) => {
    return <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button type="submit" className="btn">{props.texto}</button>
  </div>

}

export default Boton;