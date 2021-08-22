import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./styles/Normalize.css";
import './styles/Navbar.css'; 
import languages1 from '../components/images/languages-1.svg';
import languages2 from '../components/images/languages-2.svg';
import languages3 from '../components/images/languages-3.svg';
import languages4 from '../components/images/languages-4.svg';
import languages5 from '../components/images/languages-5.svg';
import languages6 from '../components/images/languages-6.svg';

import tecnologies1 from '../components/images/tecnologies-1.svg';
import tecnologies2 from '../components/images/tecnologies-2.svg';
import tecnologies3 from '../components/images/tecnologies-3.svg';
import tecnologies4 from '../components/images/tecnologies-4.svg';
import tecnologies5 from '../components/images/tecnologies-5.svg';
import tecnologies6 from '../components/images/tecnologies-6.svg';
import tecnologies7 from '../components/images/tecnologies-7.svg';
import tecnologies8 from '../components/images/tecnologies-8.svg';
import tecnologies9 from '../components/images/tecnologies-9.svg';
import tecnologies10 from '../components/images/tecnologies-10.svg';
import tecnologies11 from '../components/images/tecnologies-11.svg';
import tecnologies12 from '../components/images/tecnologies-12.svg';
import tecnologies13 from '../components/images/tecnologies-13.png';
import tecnologies14 from '../components/images/tecnologies-14.svg';
import tecnologies15 from '../components/images/tecnologies-15.svg';
import tecnologies16 from '../components/images/tecnologies-16.svg';
import tecnologies17 from '../components/images/tecnologies-17.png';
import tecnologies18 from '../components/images/tecnologies-18.svg';

const Tecnologies = () =>{
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, []);

    return(
        <div className="container ">
            <div className="centrar color-verde-base">
                <h2 className="centrar margen-habilidades">Lenguajes y tecnologías</h2>
            </div>
            <div>
                <div className="centrar text-white">
                    <h3>Lenguajes</h3>
                </div>
            </div>
            <br />
            <div className="row align-items-start">
                
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Python
                    </h4>     
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={languages1} alt="" />
                    </div>
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        PHP
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={languages2} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        HTML
                    </h4>   
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={languages3} alt="" />
                    </div>   
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        CSS
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={languages4} alt="" />
                    </div>     
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Java
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={languages5} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        JS
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={languages6} alt="" />
                    </div>    
                </div>
            </div>
            <br />
            <div>
                <div className="centrar text-white">
                    <h3>Tecnologías</h3>
                </div>
            </div>
            <br />
            <div className="row align-items-start">
                
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Laravel
                    </h4>     
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies1} alt="" />
                    </div>
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        React
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies2} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Bootstrap
                    </h4>   
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies3} alt="" />
                    </div>   
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        MySQL
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies4} alt="" />
                    </div>     
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Docker
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies5} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        JSON
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies6} alt="" />
                    </div>    
                </div>
            </div>
            <br />
            <div className="row align-items-start">
                
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        XAMPP
                    </h4>     
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies7} alt="" />
                    </div>
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Firebase
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies8} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Firestore
                    </h4>   
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies9} alt="" />
                    </div>   
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Git
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies10} alt="" />
                    </div>     
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        GitHub
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies11} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        NodeJS
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies12} alt="" />
                    </div>    
                </div>
            </div>
            <div className="row align-items-start">
                
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        MobaXterm
                    </h4>     
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies13} alt="" />
                    </div>
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Postman
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies14} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        DJango
                    </h4>   
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies15} alt="" />
                    </div>   
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Blender
                    </h4> 
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies16} alt="" />
                    </div>     
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Vegas Pro
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies17} alt="" />
                    </div>    
                </div>
                <div className='col'>           
                    <h4 data-aos="zoom-in-down" className='text-white centrar'>
                        Illustrator
                    </h4>  
                    <div className="centrar" >
                        <img data-aos="zoom-in-down" className="languages-img" src={tecnologies18} alt="" />
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default Tecnologies;