import { useState } from "react"; //va primero
import { v4 as uuid } from 'uuid';

import "./App.css";
import Menu from "./componentes/Menu/Menu";
import Formulario from "./componentes/Formulario/Formulario.js";
import Footer from "./componentes/Footer/Footer.js";
import MiOrg from "./componentes/MiOrg/MiOrg.js";
import Equipo from "./componentes/Equipo/Equipo.js";

function App() {
  //const [nombreVariable, funcionActualiza] = useState(valorinicial)
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/carlaLaya.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/carlaLaya.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
    },
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/HarlandLohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },

    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
    },

    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
    },
  ]);

    //console.log(uuid())

  const [equipo, actualizarEquipo] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },

    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#FOF8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //resgistrar equipo

  const registrarColaborador = (colaborador) => {
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
     return colaborador.id !== id
    })

    actualizarColaboradores(nuevosColaboradores)
  };

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    //console.log("Actualizar: ", color, id)
    const equiposActualizados = equipo.map((equipo) =>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipo(equiposActualizados)
  }

  //lista de equipos
  //const equipo =

  return (
    <div>
      <Menu />
      {mostrarFormulario && (
        <Formulario
          equipo={equipo.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          actualizarColor={actualizarColor}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipo.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}

        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
