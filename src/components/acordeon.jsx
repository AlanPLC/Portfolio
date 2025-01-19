import { useState, useRef } from "react";
import './styles/acordeon.scss';

export default function Acordeon() {

  // Información para lista en Acordeón
  const acordeonData = [
    {
        title: "Referen",
        role: "Desarrollador Full Stack y Diseñador UI/UX",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem ullam id facilis labore, qui ab, quaerat repudiandae laborum nesciunt aliquam ducimus fuga repellendus natus ad illum, vero doloremque asperiores.",
        img_url: "https://imgur.com/a/Y3BgJz3",
    },
    {
        title: "Prácticas con React Native",
        role: "Desarrollador Mobile",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem ullam id facilis labore, qui ab, quaerat repudiandae laborum nesciunt aliquam ducimus fuga repellendus natus ad illum, vero doloremque asperiores.",
        img_url: "https://imgur.com/a/Y3BgJz3", 
    },
    {
        title: "Gestión de Minimarket",
        role: "Desarrollador Full Stack",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem ullam id facilis labore, qui ab, quaerat repudiandae laborum nesciunt aliquam ducimus fuga repellendus natus ad illum, vero doloremque asperiores.",
        img_url: "https://imgur.com/a/Y3BgJz3", 
    },
  ];

  // Ref altura
  const refHeight = useRef(null); 

  // Estado para rastrear el índice del acordeón abierto
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {acordeonData.map((item, index) => {
        // Verifica si este acordeón está activo
        const isActive = activeIndex === index; 

        return (
          <div className="acordeon" key={index}>
            <button className="ac-visible" onClick={() => toggleAccordion(index)}>
              <div className="ac-head">
                <span className="poppins-bold">{item.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-6 ${isActive ? "rotated" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <p className="poppins-medium">{item.role}</p>
            </button>
            <div
              className={`ac-toggle ${isActive ? "animated" : ""}`}
              ref={refHeight}
              style={{
                height: isActive ? `${refHeight.current?.scrollHeight}px` : "0px",
              }}
            >
              <p>{item.content}</p>
              <img src={item.img_url} alt="IMGS Proyectos" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
