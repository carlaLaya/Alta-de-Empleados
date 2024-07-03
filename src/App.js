import { useState } from "react"; //va primero
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
      equipo: "Programación",
      foto: "https://github.com/carlaLaya.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
    },
    {
      equipo: "Programación",
      foto: "https://github.com/carlaLaya.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
    },
    {
      equipo: "Front-End",
      foto: "https://github.com/HarlandLohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },

    {
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
    },

    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
    },
  ]);

  const [equipo, actualizarEquipo] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },

    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#FOF8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
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
  const eliminarColaborador = () => {
    console.log("Eliminar colaborador");
  };

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipo.map((equipo) => {
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
