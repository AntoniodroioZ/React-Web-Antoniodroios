import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./styles/Normalize.css";
import './styles/Navbar.css'; 
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, []);

    return(
        <nav className="navbar navbar-nav-scroll navbar-expand-md navbar-dark bg-dark shadow sticky-top" id="navbar">
            <div className="container-md container-fluid">
                <NavLink className="navbar-brand color-verde-base btn-footer nav-link" to="/">
                    <h1  className="color-verde-base dimensiones-titulo">
                        Antonio
                    </h1>
                </NavLink>
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-link">
                            <NavLink  className= {({ isActive }) => (isActive ? "nav-link text-white centrar-item-nav page-selection":"nav-link text-white centrar-item-nav")} aria-current="page" to="/">
                                <i className="d-block fas fa-home icono-home-navbar color-verde-base"></i> <span className="text-white">Inicio</span>
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink  className={({ isActive }) => (isActive ? "nav-link text-white centrar-item-nav page-selection":"nav-link text-white centrar-item-nav")} to="/portfolio">
                                <i className="d-block fas fa-folder-open icono-portfolio-navbar color-verde-base"></i><span className="text-white">Portafolio</span>
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink  className={({ isActive }) => (isActive ? "nav-link text-white centrar-item-nav page-selection":"nav-link text-white centrar-item-nav")} to="/contact">
                                <i className="d-block far fa-id-card icono-contact-navbar color-verde-base"></i><span className="text-white">Contacto</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;