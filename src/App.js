import { useState } from 'react'; //va primero
import './App.css';
import Menu from './componentes/Menu/Menu';
import Formulario from './componentes/Formulario/Formulario.js';
import Footer from './componentes/Footer/Footer.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';


function App() {
    //const [nombreVariable, funcionActualiza] = useState(valorinicial)
  const [mostrarFormulario , actualizarMostrar] = useState (true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
      <Menu/>
      {mostrarFormulario && <Formulario /> }
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      <Footer titulo = "Proyecto realizado con React.js desarrollado por Carla Laya"/>
    </div>
  );
}

export default App;
