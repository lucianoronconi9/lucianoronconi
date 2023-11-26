import React from 'react';
import '../../styles/components/pages/HomePage.css';
import '../../App.css'

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src='img/Home/Retazos-index.jpg' alt='RetazosHome'></img>
            </div>
            <div className='hometext'>
                <section>
                    <h2>Bienvenidos</h2>
                    <h3>El lugar donde vas a encontrar todo lo que necesitas para confeccionar tus prendas</h3>
                    <p>Somos un local que provee telas, mercería y accesorios para la costura</p>
                    <p>Las telas se venden por metro, solo te llevas lo que necesitas para confeccionar tus costuras.</p>
                    <p>En mercería contamos con cintería, botones, hilos, corchetes, agujas, blondas, dedales, hombreras, coderas y lo que necesites </p>
                </section>
            </div>
        </main>
    );
}

export default HomePage;