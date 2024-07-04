import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";
import Menu from "./componentes/Menu/Menu";
import Formulario from "./componentes/Formulario/Formulario.js";
import Footer from "./componentes/Footer/Footer.js";
import MiOrg from "./componentes/MiOrg/MiOrg.js";
import Equipo from "./componentes/Equipo/Equipo.js";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([]);

  // Recuperar los colaboradores desde localStorage al montar el componente
  useEffect(() => {
    const cargarColaboradores = async () => {
      const colaboradoresGuardados = localStorage.getItem("colaboradores");
      if (colaboradoresGuardados) {
        console.log("Cargando colaboradores desde localStorage:", JSON.parse(colaboradoresGuardados));
        actualizarColaboradores(JSON.parse(colaboradoresGuardados));
      }
    };

    cargarColaboradores();
  }, []);

  // Guardar los colaboradores en localStorage cada vez que cambien
  useEffect(() => {
    console.log("Guardando colaboradores en localStorage:", colaboradores);
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores]);

  // Estado inicial del equipo, cargado desde localStorage o datos por defecto
  const [equipo, actualizarEquipo] = useState(() => {
    const equipoGuardado = localStorage.getItem("equipo");
    if (equipoGuardado) {
      return JSON.parse(equipoGuardado);
    } else {
      return [
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
      ];
    }
  });

  // Guardar el equipo en localStorage cada vez que cambie
  useEffect(() => {
    console.log("Guardando equipo en localStorage:", equipo);
    localStorage.setItem("equipo", JSON.stringify(equipo));
  }, [equipo]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const registrarColaborador = (colaborador) => {
    const nuevoColaborador = { ...colaborador, id: uuid() };
    console.log("Registrando nuevo colaborador:", nuevoColaborador);
    actualizarColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    console.log("Eliminando colaborador con id:", id);
    actualizarColaboradores(nuevosColaboradores);
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipo.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipo(equiposActualizados);
  };

  
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipo([...equipo, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
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
