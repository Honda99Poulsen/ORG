import Colaborador from '../colaborador';
import './equipo.css'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{

    //Destructuras
    const {colorFondo, colorDestaque, nombreEquipo, id} = props.datos;

    const {colaboradores, eliminarColaborador, actualizarColor, actualizarFavorito} = props

    const Fondo = {backgroundColor: hexToRgba(colorDestaque, 0.6)};
    const Destaque = {borderColor:colorDestaque}

    return  <>
    {colaboradores.length > 0 && 
    <section className="equipo" style={Fondo}>
            <h3 style={Destaque}>{nombreEquipo}</h3>
            <input className='input-color' type='color' value={colorDestaque} onChange={ (e) =>{
                actualizarColor(e.target.value, id);
            }}/>
            <div className="colaboradores">
            {
                colaboradores.map( (colaborador, index) => <Colaborador colorDestaque={colorDestaque} colaboradores={colaborador} key={index} eliminarColaborador={eliminarColaborador}
                actualizarFavorito={actualizarFavorito} /> )
            }
            </div>
    </section>
}</>

}

export default Equipo