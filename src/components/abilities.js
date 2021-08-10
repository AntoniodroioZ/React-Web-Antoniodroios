import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./styles/Normalize.css";
import './styles/Navbar.css'; 
import Abilities1 from '../components/images/abilities-1.svg';
import Abilities2 from '../components/images/abilities-2.svg';
import Abilities3 from '../components/images/abilities-3.svg';

const Abilities = () =>{
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, []);

    return(
        <div>
            <div className="container margen-habilidades">
                <div className="row align-items-start">

                    <h2 class="centrar color-verde-base">Habilidades</h2>
                    <br /><br /><br />
                    <div className='col'>
                        <h3 className='text-white centrar'>
                            Programación
                        </h3>
                        <p className='text-white'>Actualmente estoy en constante aprendizaje en temas relacionados a programación, nuevos lenguajes o tecnologías.</p>
                        <img data-aos="zoom-in-up" class="habilities-img" src={Abilities1} alt=""></img>
                    </div>
                    <div className='col'>
                        <h3 className='text-white centrar'>
                            Programación
                        </h3>
                        <p className='text-white'>Actualmente estoy en constante aprendizaje en temas relacionados a programación, nuevos lenguajes o tecnologías.</p>
                        <img data-aos="zoom-in-up" class="habilities-img" src={Abilities2} alt=""></img>
                    </div>
                    <div className='col'>
                        <h3 className='text-white centrar'>
                            Programación
                        </h3>
                        <p className='text-white'>Actualmente estoy en constante aprendizaje en temas relacionados a programación, nuevos lenguajes o tecnologías.</p>
                        <img data-aos="zoom-in-up" class="habilities-img" src={Abilities3} alt=""></img>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Abilities;