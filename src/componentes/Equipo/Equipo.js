import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;

  const { colaboradores, eliminarColaborador, actualizarColor, like} = props;
  const obj = {
    backgroundColor: colorSecundario
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input 
                  type='color'
                  className="input-color"
                  value={colorSecundario}
                  onChange={(evento) =>{
                  actualizarColor(evento.target.value, id)
                  }}
          />
          <h4 style={estiloTitulo}>{titulo}</h4>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}

              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
