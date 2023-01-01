import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        
        <nav className="navbar">
        <h1> NitroVigas </h1>
        <div className="links">

        <Link to='/'> Inicio </Link>
        <Link to='/Contacto'> Contacto </Link>

        </div>
       
        </nav>

    );
}
 
export default Navbar;


