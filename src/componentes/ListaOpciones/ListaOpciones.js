import "./ListaOpciones.css";

const ListaOpciones =(props) => {

  const equipo = [
    "Programacion",
    "Front-End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
]

const manejarCambio =(e) =>{
  props.actualizarValor(e.target.value)

  //console.log("cambio", e.target.value)

}
    return <div className="mb-4">
    <label for="equipo" className="form-label">Equipos</label>
    <select className="form-select form-control"  value={props.valor}  onChange={manejarCambio}>
<option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option> 
     {equipo.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
     
    </select>
  </div>
}

export default ListaOpciones

