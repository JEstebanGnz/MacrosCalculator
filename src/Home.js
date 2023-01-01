import { Link } from "react-router-dom";

const Home = () => {
    return ( 

        <div className="home">

            <h1>¡Bienvenido!</h1>

            <h2> En este sencillo test podrás obtener de una vez por todas tu guia de alimentacion para empezar tu proceso de recomposicion corporal.</h2>

            <h3> La literatura y el conocimiento cientifico son nuestro derrotero. Todas nuestras estimaciones se encuentran respaldadas por fuentes fidedignas que buscan brindarte un primer acercamiento acertado para que empieces a cambiar tu vida de la mejor manera.</h3>

            <p> ¿Estás listo para empezar?</p>

            <Link to='/Form'><button> ¡Vamos!</button></Link>

        </div>

     );
}
 
export default Home;