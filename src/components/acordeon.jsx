import { useState, useRef } from "react";
import './styles/acordeon.scss';

export default function Acordeon() {

  // Información para lista en Acordeón
  const acordeonData = [
    {
        title: "Referen",
        role: "Desarrollador Full Stack y Diseñador UI/UX (En Progreso)",
        content: "Formo parte de un equipo de desarrollo en una StartUp llamada ONNO. Aunque aún en fase de diseño y prototipado, estamos creando Referen, una aplicación web. Tanto la idea como el desarrollo están protegidos como propiedad intelectual, representando un esfuerzo colaborativo entre diseñadores y desarrolladores. Mi participación incluye:",
        content_list: [
          "Desarrollo de funcionalidades front-end y back-end utilizando tecnologías como React, Node.js y MySQL.",
          "Creación del diseño de la interfaz en Figma, y logotipos utilizando habilidades básicas en Adobe Illustrator y Photoshop.",
          "Diseño responsivo para distintos dispositivos."
        ],
        img_url: "/Proyectos/referen.jpg",
    },
    {
        title: "Prácticas con React Native",
        role: "Desarrollador Mobile",
        content:
        "Explorando el desarrollo de aplicaciones móviles utilizando React Native, Expo y APIs externas. Un ejemplo destacable es una aplicación que consume la PokeAPI, permitiendo a los usuarios explorar información sobre Pokémon en tiempo real. Este proyecto me permitió:",
        content_list: [
          "Aprender a consumir y manejar datos provenientes de APIs.",
          "Mejorar mis habilidades en diseño de interfaces móviles y optimización de la experiencia de usuario.",
        ],
        img_url: "./Proyectos/poke.png",
      
    },
    {
        title: "Gestión de Minimarket",
        role: "Desarrollador Full Stack",
        content: "Desarrollo de mi proyecto final universitario, una aplicación web para la gestión integral de un minimarket, utilizando, React con el empaquetador Vite para el front end; y Node JS con MySQL para el back end. El sistema incluye funcionalidades como:",
        content_list: [
          "Gestión de inventario, proveedores y ventas.",
          "Diseño de un backend eficiente con Node.js y MySQL, junto con un front-end atractivo utilizando React.",
          "Enfoque en seguridad y manejo de datos sensibles.",
          "Link Github: https://github.com/AlanPLC/TP-Final-Lab.-IV"
        ],
        img_url: "./Proyectos/minimarket.png",
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
                  stroke="white"
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
                height: isActive ? `${refHeight.current?.scrollHeight }px ` : "0px",
              }}
            >
              <div className="info">
                <p className="poppins-regular-italic">{item.content}</p>
                <ul>
                  {
                    item.content_list.map((listItem, index)=>(
                      
                      <li key={index} className="poppins-regular-italic">
                        <img src="./Proyectos/code.svg" alt={"Li-Img"}/>
                        <p>{listItem}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <img loading="lazy" key={index} src={item.img_url} alt={"Imagen Proyecto"} className="p-img"/>
  
            </div>
          </div>
        );
      })}
    </div>
  );
}
