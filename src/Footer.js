import linkedin from './images/linkedin.png'
import fb from './images/facebook.svg'
import footer from './images/footer.png'


const Footer = () => {
    return (  

        <div className="Footer">
            
            <p> Todos los derechos reservados. <br/><br/> Ing. Juan Esteban Gonzalez Morales </p>

            <img src={footer} className="background"></img>

            <ul>

           

                <a href="https://www.linkedin.com/in/jestebangonzalez/"> <img src={linkedin} alt="facebook"/></a>

                <a href='https://www.facebook.com/profile.php?id=100011119836045'> <img src={fb}/></a>
          


            </ul>


        </div>

    );
}
 
export default Footer;
