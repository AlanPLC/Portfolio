import './styles/footer.scss'
export default function Footer() {

    return(
        <footer>
            <p className='poppins-regular'>© 2025 Carrizo Alan Pablo Lautaro. Todos los derechos reservados.</p>

            <div className='atribuciones'>
                <p className='poppins-bold'>Atribuciones íconos Conocimientos</p>
                <ul>
                    <li>
                        <img src="./Proyectos/code.svg" alt="code-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/javascript" title="javascript iconos">Javascript iconos creados por Freepik - Flaticon</a>
                    </li>
                    <li>
                        <img src="./Proyectos/code.svg" alt="code-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/nodo-js" title="nodo js iconos">Nodo js iconos creados por Freepik - Flaticon</a>
                    </li>
                    <li>
                        <img src="./Proyectos/code.svg" alt="code-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/css" title="css iconos">Css iconos creados por Pixel perfect - Flaticon</a>
                    </li>
                    <li>
                        <img src="./Proyectos/code.svg" alt="code-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/html-5" title="html 5 iconos">Html 5 iconos creados por Pixel perfect - Flaticon</a>
                    </li>
                    <li>
                      <img src="./Proyectos/code.svg" alt="code-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/piton" title="pitón iconos">Pitón iconos creados por Freepik - Flaticon</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}