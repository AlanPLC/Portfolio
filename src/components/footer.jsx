import './styles/footer.scss'

export default function Footer({ openModal }) {

    return(
        <footer>
            <p className='poppins-regular'>© 2025 Carrizo Alan Pablo Lautaro. Todos los derechos reservados.</p>

            <div className='atribuciones'>
                <button onClick={openModal}>
                    <p className='poppins-bold'>ATRIBUCIONES</p>
                </button>
            </div>
        </footer>
    )
}