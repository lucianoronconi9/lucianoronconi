import React from 'react';
import '../../styles/components/pages/ContactoPage.css'
import '../../App.css'

const ContactoPage = (props) => {
    return (
        <main className='holder contacto'>
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" />
                    </p>
                    <p>
                        <label for="email">Mail</label>
                        <input type="text" name="email" id="email" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" id="telefono" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <input type="text" name="mensaje" id="mensaje" />
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar" /></p>
                </form>
           </div>
           <div class="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 03447-460222</li>
                    <li>Email: contacto@retazos.com.ar</li>
                </ul>
           </div>
        </main>
    );
}

export default ContactoPage;