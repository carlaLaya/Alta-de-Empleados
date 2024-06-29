import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
const { colorPrimario, colorSecundario, titulo} = props.datos


    const obj = {
        backgroundColor: colorSecundario
    }
    const estiloTitulo= {borderColor : colorPrimario}
    return (
       <div className="equipo" style={obj}>
        <h5 style={estiloTitulo}>{titulo}</h5>    
        <div className="colaboradores"> 
        <Colaborador/>
        <Colaborador/>
        <Colaborador/>
        <Colaborador/>
        <Colaborador/>
        <Colaborador/>

            </div>   
        </div>
    )
}

export default Equipo;
