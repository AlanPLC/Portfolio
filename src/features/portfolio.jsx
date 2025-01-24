import './styles/portfolio.scss'
import Acordeon from '../components/acordeon.jsx'
import Footer from '../components/footer.jsx'
export default function Portfolio (){

    return(
        // Componente Porfolio
        <div className="portfolio-main-cont">

            {/* Sección Introducción */}
            <div className="portfolio-introduccion-cont" >
                <div className='portfolio-introduccion-cont-1'>
                    <img src="./Introduccion/compucactus.svg" alt="introduccion-img" className='introduccion-img'/>
                    <div className="intro-info">
                        <p className='poppins-bold' id="lastname">CARRIZO</p>
                        <p className='poppins-bold' id="name">ALAN PABLO LAUTARO</p>
                        <div className='glitch-sec'>
                            <h1 className='poppins-semibold' data-text="DESARROLLADOR WEB FULL STACK" id="desc">DESARROLLADOR WEB FULL STACK</h1>
                        </div>
                    </div>
                </div>
                <div className='portfolio-introduccion-cont-2'>
                    <img src="/Introduccion/flecha.svg" alt="flecha-img" className='flecha-img' id="sobre-mi"/>
                </div>

            </div>

            {/* Sección Sobre Mí */}
            <div className='portfolio-sobre-mi-cont' >
                <div className='portfolio-sobre-mi-cont-1'>
                    <h2 className='poppins-bold'>SOBRE MÍ</h2>
                </div>
                <div className='portfolio-sobre-mi-cont-2'>
                    <img src="./SobreMi/sobre-mi-img.jpg" loading="lazy" alt="sobre-mi-img" className="sobre-mi-img"/>
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
                        <li><img src="./Conocimientos/html-5.png" loading="lazy" alt="HTML"/></li>
                        <li><img src="./Conocimientos/css-3.png" loading="lazy" alt="CSS"/></li>
                        <li><img src="./Conocimientos/js.png" loading="lazy" alt="JavaScript"/></li>
                        <li><img src="./Conocimientos/react.png" loading="lazy" alt="React"/></li>
                        <li><img src="./Conocimientos/nodo-js.png" loading="lazy" alt="NodeJS"/></li>
                        <li><img src="./Conocimientos/mysql.png" loading="lazy" alt="MySQL"/></li>
                        <li><img src="./Conocimientos/git.png" loading="lazy" alt="GIT"/></li>
                        <li><img src="./Conocimientos/piton.png" loading="lazy" alt="Python"/></li>
                        {/* Duplicado de imagenes para efecto circular */}
                        <li><img src="./Conocimientos/html-5.png" loading="lazy" alt="HTML"/></li>
                        <li><img src="./Conocimientos/css-3.png" loading="lazy" alt="CSS"/></li>
                        <li><img src="./Conocimientos/js.png" loading="lazy" alt="JavaScript"/></li>
                        <li><img src="./Conocimientos/react.png" loading="lazy" alt="React"/></li>
                        <li><img src="./Conocimientos/nodo-js.png" loading="lazy" alt="NodeJS"/></li>
                        <li><img src="./Conocimientos/mysql.png" loading="lazy" alt="MySQL"/></li>
                        <li><img src="./Conocimientos/git.png" loading="lazy" alt="GIT"/></li>
                        <li><img src="./Conocimientos/piton.png" loading="lazy" alt="Python"/></li>
                    </ul>
                </div>
                <hr id='proyectos' style={{opacity:"0"}}/>
            </div>

            {/* Sección Proyectos en Progreso  */}
            
            <div className='portfolio-proyectos-cont'>
                <div className='portfolio-proyectos-cont-1'>
                    <h2 className='poppins-bold'>PROYECTOS</h2>
                </div>
                <div className='portfolio-proyectos-cont-2'>
                    <Acordeon />
                </div>
                <hr id='contacto' style={{opacity:"0"}}/>
            </div>

            {/* Sección Contacto  */}
            <div className='portfolio-contacto-cont' >
                <div className='portfolio-contacto-cont-1'>
                    <h2 className='poppins-bold'>CONTACTO</h2>
                </div>
                
                <div className='portfolio-contacto-cont-2'>
                    <div className="portfolio-contacto-cont-2-A">
                        <div className="correo">
                            <a href="mailto:tuemail@gmail.com"><img loading="lazy" className="icon-svg" src="./Contacto/correo.svg" alt="Email" />  </a>
                            <p id="email-link" className='poppins-regular'>alancarrizo1017@gmail.com</p>
                            <button onClick={() => {
                                const textToCopy = document.getElementById("email-link").textContent;
                                navigator.clipboard
                                    .writeText(textToCopy)
                                    .then(() => alert("Texto copiado al portapapeles"))
                                    .catch(() => alert("Error al copiar el texto"));
                                }} className='copy'>
                                <img loading="lazy" src="./Contacto/copy.svg" alt="Copiar" className='copy'/>
                            </button>
                        </div>
                        <div className="github">
                            <a href="https://github.com/AlanPLC"><img loading="lazy" className="icon-svg" src="./Contacto/github.svg" alt="" /></a>
                            <p id="github-link" className='poppins-regular'>https://github.com/AlanPLC</p>
                            <button onClick={() => {
                                const textToCopy = document.getElementById("github-link").textContent;
                                navigator.clipboard
                                    .writeText(textToCopy)
                                    .then(() => alert("Texto copiado al portapapeles"))
                                    .catch(() => alert("Error al copiar el texto"));
                                }} className='copy'>
                                <img loading="lazy" src="./Contacto/copy.svg" alt="Copiar" className='copy'/>
                            </button>
                        </div>
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/alan-pablo-lautaro-carrizo-795968246/"><img loading="lazy" className="icon-svg" src="./Contacto/linkedin.svg" alt="" /></a>
                            <p id="linkedin-link" className='poppins-regular'>https://www.linkedin.com/in/alan-pablo-lautaro-carrizo-795968246/</p>
                            <button onClick={() => {
                                const textToCopy = document.getElementById("linkedin-link").textContent;
                                navigator.clipboard
                                    .writeText(textToCopy)
                                    .then(() => alert("Texto copiado al portapapeles"))
                                    .catch(() => alert("Error al copiar el texto"));
                                }} className='copy'>
                                <img loading="lazy" src="./Contacto/copy.svg" alt="Copiar" className='copy'/>
                            </button>
                        </div>
                        
                        <button onClick={() => {
                            const link = document.createElement("a");
                            link.href = "./CV.pdf";
                            link.download = "Curriculum_AlanPLC.pdf";
                            link.click();
                        }}>
                            <p className='poppins-bold'>Descargar Currículum</p>
                            <svg className="cv-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/></svg>
                        </button>
                    </div>
                    <div className="portfolio-contacto-cont-2-B">
                        <h3 className='poppins-bold'>Contáctame</h3>
                        <form action="https://formsubmit.co/alancarrizo1017@gmail.com" method="POST">
                            <div className="input-container">
                                <input type="text" id="nombre" name="nombre" required />
                                <label htmlFor="nombre" className='poppins-regular'>Nombre</label>
                            </div>
                            <div className="input-container">
                                <input type="email" id="correo" name="correo" required />
                                <label htmlFor="correo" className='poppins-regular'>Email</label>
                            </div>
                            <div className="input-container">
                                <input type="text" id="asunto" name="asunto" required />
                                <label htmlFor="asunto" className='poppins-regular'>Asunto</label>
                            </div>
                            <div className="input-container">
                                <textarea id="mensaje" name="mensaje" required placeholder='Escribe tu mensaje...' className='poppins-regular'></textarea>
                            </div>
                            <button type="submit" className="poppins-bold">ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}