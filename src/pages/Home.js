import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Abilities from '../components/abilities';
import Footer from '../components/footer';
import Division from '../components/division';
import Tecnologies from '../components/tecnologies';

export default function Home(){
    return(
        <div>      
        {/* <Navbar/> */}
        <Hero/>
        <Division/>
        <Abilities/>
        <Division/>     
        <Tecnologies/> 
        <Footer/>
      </div>
    );

}