import React from 'react';

const NovedadItem = (prop) => {
    const {titulo, subtitulo, cuerpo} = prop;

    return (
        <div className='novedadesSection'>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <div dangerouslySetInnerHTML={{ __html: cuerpo }} />
        </div>
    );
}

export default NovedadItem;