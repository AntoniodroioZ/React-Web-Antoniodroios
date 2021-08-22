import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./styles/Normalize.css";
import './styles/Navbar.css'; 
import profile2 from './images/profile-2.svg';

const Hero = () =>{
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, []);

    return(
        <div className="container margen" id="hero">
            <div className="margen">
                <div className="container" id="inicio">
                    <div className="row py-5 align-items-start borde-5">

                        <div className="col centrar-texto">
                            <h1 data-aos="fade-right" className="centrar text-white">¡Hola y bienvenido a antoniodroios.com!</h1>
                            <div className="container linea-div">            
                            </div>
                            <p className="centrar text-white espacio-1rem">Mi nombre es Antonio</p>
                        
                            <p className="centrar text-white">Tengo 21 años, estudio Ingeniería en Computación, me gusta la programación, estudio muchas cosas relacionadas a la programación por mi cuenta y me encanta aprender sobre hardware de PC.</p>
                        </div>
                        <div className="col">   
                            <img className="profile-img d-block my-auto icon justify-content-around" data-aos="flip-up" src={profile2} alt="XD"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;