import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NovedadItem from '../novedades/NovedadItem';
import '../../styles/components/pages/NovedadesPage.css';
import '../../App.css'

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        }

        cargarNovedades();
    }, []);

    return (
        <section className='holder'>
            <h2>Novedades</h2>
            {loading ? 
            ( <p>Cargando ... </p> ) : 
            (
                novedades.map(item => <NovedadItem 
                        key={item.id}
                        titulo={item.titulo}
                        subtitulo={item.subtitulo}
                        cuerpo={item.cuerpo}
                    />)   
            )}
        </section>

    );
}

export default NovedadesPage;