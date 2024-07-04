import { useState, useEffect } from "react"; //va primero
import { v4 as uuid } from "uuid";

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
      nombre: "Carla Laya",
      puesto: "Dev FullStack",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/HarlandLohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },

    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora ",
      fav: false,
    },

    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Instructora",
      fav: false,
    },
  ]);

  // agrego funcionalidad para conservar cambios

  useEffect(() => {
    // Recuperar los datos del localStorage
    const colaboradoresGuardados = localStorage.getItem("colaboradores");
    if (colaboradoresGuardados) {
      actualizarColaboradores(JSON.parse(colaboradoresGuardados));
    }
  }, []);

  useEffect(() => {
    // Guardar los datos en el localStorage
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores]);

  // fin de la prueba

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
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id;
    });

    actualizarColaboradores(nuevosColaboradores);
  };

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    //console.log("Actualizar: ", color, id)
    const equiposActualizados = equipo.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipo(equiposActualizados);
  };

  //lista de equipos
  //const equipo =
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipo([...equipo, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Menu />
      {mostrarFormulario && (
        <Formulario
          equipo={equipo.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          actualizarColor={actualizarColor}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipo.map((equipo) => (
        <Equipo
          datos={equipo}
          like={like}
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
