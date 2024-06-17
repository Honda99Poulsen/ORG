import './miOrg.css'
import { useState } from 'react';

const MiOrg = (props) => {

    return  <section className="miOrg">
                <h3 className="title">Mi Organizacion</h3>
                <img src="/img/add.png" alt="add" onClick={props.cambiarEstado}/>
            </section>

}

export default MiOrg