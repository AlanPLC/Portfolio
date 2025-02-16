import './styles/modal.scss'

export default function Modal({isOpen, onClose}){


    return(
        <div className={`modal-overlay ${isOpen ? "isOpen" : ""}`}>
            <div className='modal-content'>
                <div className='modal-head'>
                    <h3 className="poppins-bold">ATRIBUCIONES</h3>
                    <img src="./Footer/close.svg" alt="close" onClick={onClose} className='close'/>
                </div>
                <ul>
                    <li className='poppins-regular-italic'>
                        <img src="./Footer/code2.svg" alt="code2-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/javascript" title="javascript iconos">Javascript iconos creados por Freepik - Flaticon</a>
                    </li>
                    <li className='poppins-regular-italic'>
                        <img src="./Footer/code2.svg" alt="code2-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/nodo-js" title="nodo js iconos">Nodo js iconos creados por Freepik - Flaticon</a>
                    </li>
                    <li className='poppins-regular-italic'>
                        <img src="./Footer/code2.svg" alt="code2-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/css" title="css iconos">Css iconos creados por Pixel perfect - Flaticon</a>
                    </li>
                    <li className='poppins-regular-italic'>
                        <img src="./Footer/code2.svg" alt="code2-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/html-5" title="html 5 iconos">Html 5 iconos creados por Pixel perfect - Flaticon</a>
                    </li>
                    <li className='poppins-regular-italic'>
                        <img src="./Footer/code2.svg" alt="code2-icon" />
                        <a href="https://www.flaticon.es/iconos-gratis/piton" title="pitón iconos">Pitón iconos creados por Freepik - Flaticon</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}