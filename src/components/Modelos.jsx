import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

function Modelos() {
  return (
    <section id='modelos' className="modelos">
      <div className="md:grid md:grid-cols-2 grid grid-cols-1 grid-rows-1">
        <div className="bg-secondary bg-isoOnda flex justify-center items-center">
          <div>
            <h1 className="text-white font-bold text-center text-3xl md:text-3xl lg:text-6xl mt-12">PLANTA <br />ARQUITECTONICA</h1>
            <img src="/img/NIVEL 1 ALMERIA.png" alt="Nivel 1 de Almería Residencial" className='w-full max-w-sm mx-auto mt-[1rem]' />
          </div>
        </div>
        <div className="bg-isoPeek mt-8 md:mt-0 container mx-auto flex  flex-col justify-center items-center py-8 bg-white"> 
          <h1 className="text-primary font-semilight text-3xl md:text-4xl text-center mb-8">Nivel 1</h1>

          <div className="flex flex-col items-center justify-center text-primary ">
            <ul className="text-md md:text-lg lg:text-xl font-semibold space-y-3 md:space-y-4">
              {[
                { icon: <RiCheckboxBlankCircleFill />, text: 'Sala' },
                { icon: <RiCheckboxBlankCircleFill />, text: 'Comedor' },
                { icon: <RiCheckboxBlankCircleFill />, text: 'Cocina' },
                { icon: <RiCheckboxBlankCircleFill />, text: '1/2 Baño' },
                { icon: <RiCheckboxBlankCircleFill />, text: 'Patio de servicio' },
                { icon: <RiCheckboxBlankCircleFill />, text: 'Estacionamiento' },
              ].map((item, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <span className='text-secondary text-lg'>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modelos