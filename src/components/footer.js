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
        <footer class="py-1 bg-dark shadow">
            <br />
            <div class="color-verde-base centrar">Todos los derechos reservados. 2021 © </div>
            <br />
        </footer>
    );
};

export default Footer;