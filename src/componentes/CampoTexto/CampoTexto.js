import './CampoTexto.css';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';


const CampoTexto = (props) => {

  const manejarEnvios = (e) =>{
    e.preventDefault() //uso prenentDefaul para que no recargue toda la pag
    console.log("manejo envio" , e)
  }

    return <div>
    <div className="container d-flex justify-content-center">
        <div className="card p-5 mt-5 bg-custom border-custom">
            <h5 className="card-title mb-4">Rellena el formulario y agrega un nuevo empleado</h5>
            <form onSubmit={manejarEnvios}>
                <div className="mb-4">
                    <label for="nombre" className="form-label">{props.nombre}</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingresar nombre" required={true} />
                </div>
                <div className="mb-4">
                    <label for="puesto" className="form-label">{props.puesto}</label>
                    <input type="text" className="form-control" id="puesto" name="puesto" placeholder="Ingresar Puesto" required={true} />
                </div>
                <div className="mb-4">
                    <label for="imagen" className="form-label">{props.imagen}</label>
                    <input type="text" className="form-control" id="imagen" name="imagen" placeholder="Foto" required={true}/>
                </div>
                <ListaOpciones />
                <Boton texto="Crear"/>
            </form>
        </div>
    </div>
</div>


}

export default CampoTexto;