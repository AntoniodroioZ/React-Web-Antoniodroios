import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./styles/Normalize.css";
import './styles/Navbar.css'; 

const Navbar = () =>{
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, []);

    return(
        <nav className="navbar navbar-nav-scroll navbar-expand-md navbar-dark bg-dark shadow">
            <div className="container-md container-fluid">
                <a className="navbar-brand color-verde-base btn-footer nav-link" href="/">
                    <h1 data-aos="fade-down" className="color-verde-base dimensiones-titulo">
                        Antonio
                    </h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-link">
                            <a data-aos="fade-down" className="nav-link text-white centrar-item-nav" aria-current="page" href="/">
                                <i className="d-block fas fa-home icono-home-navbar color-verde-base"></i> <span className="text-white">Inicio</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a data-aos="fade-down" className="nav-link text-white centrar-item-nav" href="/">
                                <i className="d-block fas fa-folder-open icono-portfolio-navbar color-verde-base"></i><span className="text-white">Portafolio</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a data-aos="fade-down" className="nav-link text-white centrar-item-nav" href="/">
                                <i className="d-block far fa-id-card icono-contact-navbar color-verde-base"></i><span className="text-white">Contacto</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;