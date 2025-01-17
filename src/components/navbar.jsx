import './styles/navbar.scss';
import { Link } from 'react-scroll';
export default function Navbar (){
    return (
        <nav>
            <img src="/pageportafolio.png" alt="portafolio-img" className="pageportafolio"/>
            <ul>
                <li>
                    <Link className='poppins-semibold' to="introduccion" smooth={true} duration={500}>
                    Introducción
                    </Link>
                </li>
                <li>
                    <Link className='poppins-semibold' to="introduccion" smooth={true} duration={500}>
                    Sobre Mí
                    </Link>
                </li>
                <li>
                    <Link className='poppins-semibold' to="introduccion" smooth={true} duration={500}>
                    Proyectos en Progreso
                    </Link></li>
                <li>
                    <Link className='poppins-semibold' to="introduccion" smooth={true} duration={500}>
                    Contacto
                    </Link>
                </li>
            </ul>
        </nav>
      )
}