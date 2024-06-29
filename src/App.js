import { useState } from 'react'; //va primero
import './App.css';
import Menu from './componentes/Menu/Menu';
import Formulario from './componentes/Formulario/Formulario.js';
import Footer from './componentes/Footer/Footer.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import Equipo from './componentes/Equipo/Equipo.js';


function App() {
    //const [nombreVariable, funcionActualiza] = useState(valorinicial)
  const [mostrarFormulario , actualizarMostrar] = useState (false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //lista de equipos
  const equipo = [

    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    } ,

    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#D9F7E9"
    } ,
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#FOF8E2"
    } ,
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    } ,
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    } ,
    {
      titulo:  "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    } ,
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    } 

]

  return (
    <div>
      <Menu/>
      {mostrarFormulario && <Formulario equipo = {equipo.map((equipo) => equipo.titulo )} /> }
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
    
     {

     equipo.map( (equipo)=> <Equipo datos={equipo} key={equipo.titulo}/>)

     }


  <Footer/>
    </div>
  );
}

export default App;
