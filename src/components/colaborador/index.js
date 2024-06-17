import './Colaborador.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";

const Colaborador = (props) => {

    const {nombre, foto, puesto, equipo, id, fav} = props.colaboradores;
    const {colorDestaque, eliminarColaborador, actualizarFavorito} = props
 
    return <div className="colaborador">
                <AiFillCloseCircle className='eliminarColaborador' onClick={ () => {
                    eliminarColaborador(id);
                } } />
                <div className="encabezado" style={{backgroundColor: colorDestaque}}>
                    <img src={foto} alt={nombre}/>
                </div>
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                    { fav ? <IoIosHeart color='red' onClick={() => actualizarFavorito(id)}/> : <IoMdHeartEmpty onClick={ () => actualizarFavorito(id) } /> } 
                </div>
           </div>

}

export default Colaborador