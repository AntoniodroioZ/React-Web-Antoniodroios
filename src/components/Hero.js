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
        <div class="container margen">
            <div class="margen">
                <div class="container" id="inicio">
                    <div class="row py-5 align-items-start borde-5">

                        <div class="col centrar-texto">
                            <h1 data-aos="fade-right" class="centrar text-white">¡Hola y bienvenido a mi pagina web!</h1>
                            <p class="centrar text-white">Mi nombre es Antonio</p>
                        
                            <p class="centrar text-white">Tengo 21 años, estudio Ingeniería en Computación, me gusta la programación, estudio muchas cosas relacionadas a la programación por mi cuenta y me encanta aprender sobre hardware de PC.</p>
                        </div>
                        <div class="col">   
                            <img class="profile-img d-block my-auto icon justify-content-around" data-aos="flip-up" src={profile2} alt="XD"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;