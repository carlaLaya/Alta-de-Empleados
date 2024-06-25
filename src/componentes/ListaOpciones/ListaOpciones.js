import "./ListaOpciones.css"

const ListaOpciones =() => {
    return <div className="mb-4">
    <label for="equipo" className="form-label">Equipos</label>
    <select className="form-select form-control" id="equipo" name="equipo">

     {equipo.map((equipo, index) => <option key={index}>{equipo}</option>)}
     
    </select>
  </div>
}
const equipo = [
    "Programacion",
    "Front-End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
]

export default ListaOpciones

/*  <option value="programacion">Programacion</option>
      <option value="front-end">Front-End</option>
      <option value="data">Data Science</option>
      <option value="Devops">Devops</option>
      <option value="ux y Diseño">UX y Diseño</option>
      <option value="movil">Móvil</option>
      <option value="innovacion y gestion">Innovación y Gestión</option>*/