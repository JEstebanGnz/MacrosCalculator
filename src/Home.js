import { useEffect } from "react";
import { Link } from "react-router-dom";



const Home = () => {

    


    return ( 

        <div className="home">

            <div className="welcomeMessage">
            <h1>¡Bienvenido!</h1>

            <p> En este sencillo test podrás obtener de una vez por todas tu guia de alimentacion para empezar tu proceso de recomposicion corporal.</p>
            <img src="https://cdn-icons-png.flaticon.com/512/1616/1616456.png"></img>

            </div>

            <section className="justification">
            <p> La literatura y el conocimiento cientifico son nuestro derrotero. Todas nuestras estimaciones se encuentran respaldadas por fuentes fidedignas que buscan brindarte un primer acercamiento acertado para que empieces a cambiar tu vida de la mejor manera.</p>
            <img src="https://cdn-icons-png.flaticon.com/512/5010/5010345.png"></img>
            </section>

            <div className="areYouReady">   
            <p> ¿Estás listo para empezar?</p>
            <Link to='/Form'><button> ¡Vamos!</button></Link>
            </div>

        </div>

     );
}
 
export default Home;