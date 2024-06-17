import ListaOpciones from '../ListaOpciones'
import Boton from '../boton'
import InputTexto from '../inputTexto'
import './form.css'
import { useState } from 'react'

const Form = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto,   setFoto]   = useState("");
    const [equipo, setEquipo] = useState("");

    const [nuevoEquipo, actualizarEquipo] = useState("");
    const [color, actualizarColor] = useState("");

    const {crearColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        crearColaborador(datosEnviar)
        
    }


    const manejarNuevoEquipo = (e) => {
        e.preventDefault()

        crearEquipo({nombreEquipo :nuevoEquipo, 
                     colorDestaque:color});
    }

 
    return <section className='Formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputTexto titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} actualizarValor={setNombre}/>
            <InputTexto titulo="Puesto" placeholder="Ingresar puesto" required={true} valor={puesto} actualizarValor={setPuesto}/>
            <InputTexto titulo="Foto" placeholder="Ingresar enlace de foto" required={true} valor={foto} actualizarValor={setFoto}/>
            <ListaOpciones equipos={props.equipos} valor={equipo} actualizarValor={setEquipo}/>
            <Boton titulo="Enviar"/>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputTexto titulo="Equipo" placeholder="Ingresar el nombre del nuevo equipo" required={true} valor={nuevoEquipo} actualizarValor={actualizarEquipo}/>
            <InputTexto titulo="Color" placeholder="Ingresar color en HEX" required={true} valor={color} actualizarValor={actualizarColor}/>
            <Boton titulo="Registrar Equipo"/>
        </form>
    </section>
}

export default Form