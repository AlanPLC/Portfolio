import './styles/portfolio.scss'
export default function Portfolio (){

    return(
        <div className="portfolio-main-cont">
            <div className="portfolio-introduccion-cont" id="introduccion">
                <div className='portfolio-introduccion-cont-1'>
                    <img src="/compucactus.png" alt="introduccion-img" className='introduccion-img'/>
                    <div className="intro-info">
                        <p className='poppins-bold' id="lastname">CARRIZO</p>
                        <p className='poppins-bold' id="name">ALAN PABLO LAUTARO</p>
                        <p className='poppins-semibold' id="desc">DESARROLLADOR JUNIOR WEB FULL STACK</p>
                        <p className='poppins-semibold' id="place">ARGENTINA - LA RIOJA</p>
                    </div>
                </div>
                <div className='portfolio-introduccion-cont-2'>
                    <img src="/flecha.png" alt="flecha-img" className='flecha-img'/>
                </div>
                
            </div>
            <div className='portfolio-sobre-mi-cont' id="sobre-mi">
                <div className='portfolio-sobre-mi-cont-1'>
                    <h2 className='poppins-bold'>SOBRE MÍ</h2>
                </div>
                <div className='portfolio-sobre-mi-cont-2'>
                    <img src="./cactus.jpg" alt="sobre-mi-img" className="sobre-mi-img"/>
                    <p id='parrafo-sobre-mi' className='poppins-regular'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum animi dicta vitae voluptas numquam vel iure est deserunt laudantium quia reprehenderit reiciendis fugit, laborum voluptates praesentium, asperiores earum quasi nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quas repellendus est ratione eum, ipsam fuga non laboriosam repudiandae cupiditate debitis iste, beatae distinctio expedita animi quos esse laudantium? Qui.</p>
                 </div>
            </div>
        </div>
    )
}