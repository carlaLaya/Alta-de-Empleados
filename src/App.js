import './App.css';
import Menu from './componentes/Menu/Menu';
import Formulario from './componentes/Formulario/Formulario.js';
import Footer from './componentes/Footer/Footer.js';


function App() {
  return (
    <div>
      <Menu/>
      <Formulario/>
      <h5 className='organizacion'>Mi organización</h5>
      <Footer titulo = "Proyecto realizado con React.js desarrollado por Carla Laya"/>
    </div>
  );
}

export default App;
