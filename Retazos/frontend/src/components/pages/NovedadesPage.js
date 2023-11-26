import React from 'react';
import '../../styles/components/pages/NovedadesPage.css';
import '../../App.css'

const NovedadesPage = (props) => {
    return (
        <div className='holder'>
            <h2 className='novedadesTitle'>Novedades</h2>
            <section className='novedadesSection' >
                <h3>Titulo</h3>
                <h4>Subtitulo</h4>
                <p>Cuerpo</p>
            </section>
            <section className='novedadesSection' >
                <h3>Titulo</h3>
                <h4>Subtitulo</h4>
                <p>Cuerpo</p>
            </section>
            <section className='novedadesSection' >
                <h3>Titulo</h3>
                <h4>Subtitulo</h4>
                <p>Cuerpo</p>
            </section>
        </div>
    );
}

export default NovedadesPage;