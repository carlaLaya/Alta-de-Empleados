import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";

const Formulario = () => {
  return (
    <section>
      <CampoTexto nombre = "Nombre" puesto = "Puesto" imagen="Imágen" equipo ="Equipo"/>     
    </section>
  );
};

export default Formulario;
