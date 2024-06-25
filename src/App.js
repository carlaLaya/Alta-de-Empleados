import './App.css';
import Menu from './componentes/Menu/Menu';
import Formulario from './componentes/Formulario/Formulario.js';
import Footer from './componentes/Footer/Footer.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';


function App() {
  return (
    <div>
      <Menu/>
      <Formulario/>
      <MiOrg/>
      <Footer titulo = "Proyecto realizado con React.js desarrollado por Carla Laya"/>
    </div>
  );
}

export default App;
