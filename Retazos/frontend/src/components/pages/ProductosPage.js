import React from 'react';
import '../../styles/components/pages/ProductosPage.css';
import '../../App.css'

const ProductosPage = (props) => {
    return (
        <main className='holder'>
             <div class="productos" >
                <div className='contenedor'>
                    <img src="img/productos/telas.jpg" alt="" />
                </div>
                <div className='contenedor'>
                    <img src="img/productos/telas1.png" alt="" />
                </div>
                <div className='contenedor'>
                    <img src="img/productos/telas2.jpg" alt="" />
                </div>
                <div className='contenedor'>
                    <img src="img/productos/telas3.jpg" alt="" />
                </div>
                <div className='contenedor'>
                    <img src="img/productos/telas4.jpg" alt="" />
                </div>
                <div className='contenedor'>
                    <img src="img/productos/telas5.jpg" alt="" />
                </div>
                <div className='contenedor'>
                    <img src="img/productos/telas6.jpg" alt="" />
                </div>
            </div>
        </main>
    );
}

export default ProductosPage;