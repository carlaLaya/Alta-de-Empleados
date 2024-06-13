import './CampoTexto.css';



const CampoTexto = (props) => {
    return <div>
    <div class="container d-flex justify-content-center">
      <div class="card p-5 mt-5 bg-custom border-custom">
        <h4 class="card-title mb-4">Rellena el formulario y agrega un nuevo empleado</h4>
        <form action="action_page.php">
          <div class="mb-4">
            <label for="fname" class="form-label">{props.nombre}</label>
            <input type="text" class="form-control" id="fname" name="firstname" placeholder="Nombre" />
          </div>
          <div class="mb-4">
            <label for="fname" class="form-label">{props.puesto}</label>
            <input type="text" class="form-control" id="fname" name="firstname" placeholder="Ingresar Puesto" />
          </div>
          <div class="mb-4">
            <label for="lname" class="form-label">{props.imagen}</label>
            <input type="text" class="form-control" id="lname" name="lastname" placeholder="Foto" />
          </div>
          <div class="mb-4">
            <label for="equipo" class="form-label">{props.equipo}</label>
            <select class="form-select form-control" id="equipo" name="equipo">
              <option value="programacion">Programacion</option>
              <option value="front-end">Front-End</option>
              <option value="data">Data Science</option>
              <option value="Devops">Devops</option>
              <option value="ux y Diseño">UX y Diseño</option>
              <option value="movil">Móvil</option>
              <option value="innovacion y gestion">Innovación y Gestión</option>
            </select>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary">Crear</button>
          </div>
        </form>
      </div>
    </div>
  </div>

}

export default CampoTexto;