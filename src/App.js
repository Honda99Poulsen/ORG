
import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import MiOrg from './components/MiOrg';
import Equipo from './components/equipo';
import Footer from './components/Footer';
import {v4 as uuid} from 'uuid'

// console.log(Header)

function App() {

  const [estadoFormulario, cambiarEstado] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([{
      id: uuid(),
      nombre:"Elias Zavala",
      puesto:"Instructor",
      foto:"https://github.com/harlandlohora.png",
      equipo:"Front End",
      fav: true
  },
  {
    id: uuid(),
    nombre:"Jeny Zavala",
    puesto:"Instructora",
    foto:"https://github.com/honda99poulsen.png",
    equipo:"Programacion",
    fav: false
}]);

  const [equipos, actualizarEquipo] = useState([{
    id: uuid(),
    nombreEquipo: "Programacion",
    colorDestaque: "#57C278",
    colorFondo:"#D9F7E9"
  },
  {
    id: uuid(),
    nombreEquipo: "Front End",
    colorDestaque: "#82CFFA",
    colorFondo:"#E8F8FF"
  },
  {
    id: uuid(),
    nombreEquipo: "Data Science",
    colorDestaque: "#A6D157",
    colorFondo:"#F0F8E2"
  },
  {
    id: uuid(),
    nombreEquipo: "Devops",
    colorDestaque: "#E06B69",
    colorFondo:"#FDE7E8"
  },
  {
    id: uuid(),
    nombreEquipo: "UX y Diseño",
    colorDestaque: "#DB6EBF",
    colorFondo:"#FAE9F5"
  },
  {
    id: uuid(),
    nombreEquipo: "Móvil",
    colorDestaque: "#FFBA05",
    colorFondo:"#FFF5D9"
  },
  {
    id: uuid(),
    nombreEquipo: "Innovación y Gestión",
    colorDestaque: "#FF8A29",
    colorFondo:"#FFEEDF"
  }])

  const cambiarMostrar = () => {
    cambiarEstado(!estadoFormulario);
  } 

  const crearColaborador = (colaborador) => {
      actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    console.log('Colaborador Eliminado', id);

    const colaboradoresActualizados = colaboradores.filter( (colaborador) => {
      return colaborador.id != id;
    } )

    actualizarColaboradores(colaboradoresActualizados);
  }

  const actualizarColor = (color, id) => {
    console.log('Actualizar ', color, id);

    const equiposActualizado = equipos.map( (equipo) => {
      if(equipo.id === id) {
        equipo.colorDestaque = color;
      }

      return equipo
    } )
    
    actualizarEquipo(equiposActualizado)
  }

  const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo);
      actualizarEquipo([...equipos, {...nuevoEquipo, id: uuid}])
  }

  const actualizarFavorito = (id) => {
    console.log('cambio', id);
    const equipoActualizados = colaboradores.map( (colaborador) => {
        if(colaborador.id === id){
          colaborador.fav = !colaborador.fav;
        }

        return colaborador     
    } )

    actualizarColaboradores(equipoActualizados)
  }

  return (
    <div className="App">
      <Header />
      { estadoFormulario && <Form crearColaborador={crearColaborador} equipos={ equipos.map( (equipo) => equipo.nombreEquipo ) } crearEquipo={crearEquipo} />} 
      <MiOrg cambiarEstado={cambiarMostrar}/>
      
      {
       equipos.map( ( equipo ) => <Equipo colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.nombreEquipo )} datos={equipo} key={equipo.nombreEquipo} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} actualizarFavorito={actualizarFavorito} /> ) 
      }
      <Footer/>


    </div>
  );
}

export default App;

