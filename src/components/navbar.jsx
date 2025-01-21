import './styles/navbar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Navbar (){
    return (
        <nav>
            
            <ul>
                <li><img src="./Introduccion/portafolio.png" alt="portafolio" className='portafolio'/></li>
                <li>
                <a
                    className="poppins-semibold"
                    onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
                >
                    Introducción
                </a>
                </li>
                <li>
                    <Link className='poppins-semibold' to="sobre-mi" smooth={true} duration={500}>
                    Sobre Mí
                    </Link>
                </li>
                <li>
                    <Link className='poppins-semibold' to="proyectos" smooth={true} duration={500}>
                    Proyectos
                    </Link></li>
                <li>
                    <Link className='poppins-semibold' to="contacto" smooth={true} duration={500}>
                    Contacto
                    </Link>
                </li>
                <li><img src="./Introduccion/bandera.png" alt="bandera" className='bandera'/></li>
            </ul>
        </nav>
      )
}