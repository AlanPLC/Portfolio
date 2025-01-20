import './styles/portfolio.scss'
import Acordeon from '../components/acordeon.jsx'
export default function Portfolio (){

    return(
        // Componente Porfolio
        <div className="portfolio-main-cont">

            {/* Sección Introducción */}
            <div className="portfolio-introduccion-cont" >
                <div className='portfolio-introduccion-cont-1'>
                    <img src="/compucactus.png" alt="introduccion-img" className='introduccion-img'/>
                    <div className="intro-info">
                        <p className='poppins-bold' id="lastname">CARRIZO</p>
                        <p className='poppins-bold' id="name">ALAN PABLO LAUTARO</p>
                        <div className='glitch-sec'>
                            <h1 className='poppins-semibold' data-text="DESARROLLADOR WEB FULL STACK" id="desc">DESARROLLADOR WEB FULL STACK</h1>
                        </div>
                    </div>
                </div>
                <div className='portfolio-introduccion-cont-2'>
                    <img src="/flecha.png" alt="flecha-img" className='flecha-img' id="sobre-mi"/>
                </div>
            </div>

            {/* Sección Sobre Mí */}
            <div className='portfolio-sobre-mi-cont' >
                <div className='portfolio-sobre-mi-cont-1'>
                    <h2 className='poppins-bold'>SOBRE MÍ</h2>
                </div>
                <div className='portfolio-sobre-mi-cont-2'>
                    <img src="./sobre-mi-img.jpg" alt="sobre-mi-img" className="sobre-mi-img"/>
                    <p id='parrafo-sobre-mi' className='poppins-regular'>¡Hola! Soy un apasionado del desarrollo web y recientemente me gradué como Técnico Universitario en Programación en la Universidad Tecnológica Nacional. Trabajo como desarrollador fullstack en entornos RESTful utilizando React en el frontend y Node con MySQL en el backend. Siempre estoy buscando nuevos desafíos que me permitan crecer como profesional y aportar valor a proyectos innovadores.</p>
                </div>
            </div>

            {/* Sección Conocimientos */}
            <div className='portfolio-conocimientos-cont'>
                <div className='portfolio-conocimientos-cont-1'>
                    <h2 className='poppins-bold'>CONOCIMIENTOS</h2>
                </div>
                <div className='portfolio-conocimientos-cont-2'>
                    <ul className='conocimientos-list'>
                        <li><img src="./Conocimientos/html-5.png" alt="HTML"/></li>
                        <li><img src="./Conocimientos/css-3.png" alt="CSS"/></li>
                        <li><img src="./Conocimientos/js.png" alt="JavaScript"/></li>
                        <li><img src="./Conocimientos/react.png" alt="React"/></li>
                        <li><img src="./Conocimientos/nodo-js.png" alt="NodeJS"/></li>
                        <li><img src="./Conocimientos/mysql.png" alt="MySQL"/></li>
                        <li><img src="./Conocimientos/git.png" alt="GIT"/></li>
                        <li><img src="./Conocimientos/piton.png" alt="Python"/></li>
                        {/* Duplicado de imagenes para efecto circular */}
                        <li><img src="./Conocimientos/html-5.png" alt="HTML"/></li>
                        <li><img src="./Conocimientos/css-3.png" alt="CSS"/></li>
                        <li><img src="./Conocimientos/js.png" alt="JavaScript"/></li>
                        <li><img src="./Conocimientos/react.png" alt="React"/></li>
                        <li><img src="./Conocimientos/nodo-js.png" alt="NodeJS"/></li>
                        <li><img src="./Conocimientos/mysql.png" alt="MySQL"/></li>
                        <li><img src="./Conocimientos/git.png" alt="GIT"/></li>
                        <li><img src="./Conocimientos/piton.png" alt="Python"/></li>
                    </ul>
                </div>
            </div>

            {/* Sección Proyectos en Progreso  */}

            <div className='portfolio-proyectos-cont' id='proyectos'>
                <div className='portfolio-proyectos-cont-1'>
                    <h2 className='poppins-bold'>PROYECTOS</h2>
                </div>
                <div className='portfolio-proyectos-cont-2'>
                    <Acordeon />
                </div>
            </div>
        </div>
    )
}