import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

function Modelos() {
  return (

    <section id='modelos' className="md:p-8 p-4 relative bg-primary">
    <picture>
      <source media="(min-width: 768px)" srcSet="/img/Untitled-3-02-01.jpg" />
      <source media="(max-width: 767px)" srcSet="/img/Untitled-3-02-03.jpg" />
      <img src="/img/Untitled-3-02-01.jpg" alt="fachada almeria" className="rounded-lg shadow-lg h-auto w-auto" />
    </picture>
  </section>

  )
}

export default Modelos