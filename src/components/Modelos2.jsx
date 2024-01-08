import react from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

function Modelos2() {
  return (

    <section className="modelos">
      <div className="md:grid md:grid-cols-2 grid grid-cols-1 grid-rows-1 ">
        <div className="bg-secondary bg-isoOnda flex flex-col justify-center items-center p-4">
            <img src="/img/NIVEL 2 ALMERIA.png" alt="Nivel 1 de Almería Residencial" className=' w-full max-w-sm mx-auto' />
            <img src="/img/NIVEL 3  ALMERIA.png" alt="Nivel 1 de Almería Residencial" className=' w-full max-w-sm mx-auto mt-6 ' />
        </div>

        <div className="bg-isoPeek container mx-auto flex flex-col justify-center items-center py-4 bg-white">
          <div className=''>
            <h1 className="text-primary font-semilight text-xl md:text-3xl text-center mb-4">Nivel 2</h1>
            <div className="text-primary text-center mb-8">

              <ul className="text-md md:text-lg lg:text-xl font-semibold space-y-3 md:space-y-4">
                {[
                  { icon: <RiCheckboxBlankCircleFill />, text: '2 Recámaras' },
                  { icon: <RiCheckboxBlankCircleFill />, text: 'Baño completo' },
                ].map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <span className='text-secondary text-lg'>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <h1 className="text-primary font-semilight text-xl md:text-3xl text-center mb-4">Nivel 3</h1>

            <div className="text-primary text-center">
              <ul className="text-md md:text-lg lg:text-xl font-semibold space-y-3 md:space-y-4">
                {[
                  { icon: <RiCheckboxBlankCircleFill />, text: '1 Recámara ' },
                  { icon: <RiCheckboxBlankCircleFill />, text: 'Baño completo '  },
                  { icon: <RiCheckboxBlankCircleFill />, text: 'Roof Top' },

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
      </div>
    </section>
  )
}
export default Modelos2
