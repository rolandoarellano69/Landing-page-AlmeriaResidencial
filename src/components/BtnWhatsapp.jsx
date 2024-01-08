import { RiWhatsappLine } from 'react-icons/ri'
import {motion} from 'framer-motion'

function BtnWhatsapp() {
  return (
    <span className='fixed z-50 xl:bottom-24 bottom-4 left-4 shadow-2xl rounded-full py-4 px-4 text-3xl xl:left-16 items-center'>
      <a href="https://web.whatsapp.com/send?phone=+526631138555&text=Hola,%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20De%20Almería%20Residencial" className='fixed xl:bottom-24 bottom-4 left-4 shadow-2xl rounded-full py-4 px-4 text-3xl xl:left-16 items-center cursor-pointer bg-[#25d366]'>
        <RiWhatsappLine className='text-white' />
      </a>
    </span>
  )
}

export default BtnWhatsapp