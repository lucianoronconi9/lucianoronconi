
import React from 'react';

const Saludo = (props) => {
    return <div>
            <h1>Saludos</h1>
            <p>Estoy creando mi primer componente. {props.name}</p>
        </div>  
};

export default Saludo;