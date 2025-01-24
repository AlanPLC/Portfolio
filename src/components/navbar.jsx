import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './styles/navbar.scss';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <img src="./Introduccion/portafolio.png" alt="portafolio" className='portafolio-mobile-nab'/>

            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
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
                    </Link>
                </li>
                <li>
                    <Link className='poppins-semibold' to="contacto" smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
                <li><img src="./Introduccion/bandera.png" alt="bandera" className='bandera'/></li>
            </ul>

            <button className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}