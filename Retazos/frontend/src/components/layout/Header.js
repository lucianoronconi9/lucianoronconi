import React from 'react';
import '../../styles/components/layout/Headers.css';

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src='img/Header.jpg' width='100' alt='Retazos'></img>
                <h1>Retazos</h1>
            </div>
        </header>
    );
}

export default Header;