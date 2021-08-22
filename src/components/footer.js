import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./styles/Normalize.css";
import './styles/Navbar.css'; 


const Footer = () =>{
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, []);

    return(
        <footer className="py-1 bg-dark shadow">
            <br />
            <div className="container">
                <div className="row">
                    <div className="col centrar ">
                        <p className="color-verde-base ">Contacto:</p>
                        <a href="mailto:antoniohernandez49@aragon.unam.mx" className="text-warning centrar contact-space" ><i className="fas fa-envelope"></i></a>
                        <a href="https://www.facebook.com/garcia12345678/" className="text-warning centrar contact-space" target="_blank"><i class="fab fa-facebook"></i></a>
                    </div>
                    <div className="col-7  centrar contenedor-contacto-footer">
                        <p className="text-muted centrar">
                            Esta pagina ha sido creada utilizando React, Bootstrap y Firebase para el hosting del mismo.
                        </p>
                    </div>
                    <div className="col centrar">
                        <a className="navbar-brand color-verde-base btn-footer nav-link" href="#hero">
                            <h1 className="color-verde-base dimensiones-titulo centrar">
                                Antonio
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <div className="color-verde-base centrar">Todos los derechos reservados. 2021 © </div>
            <br />
        </footer>
    );
};

export default Footer;