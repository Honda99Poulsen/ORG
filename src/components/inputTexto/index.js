import '../inputTexto/inputTexto.css'
import { useState } from 'react'

const InputTexto = (props)=>{

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="input-texto">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.valor} onChange={manejarCambio}/>
    </div>
}

export default InputTexto