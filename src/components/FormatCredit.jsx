
import { RiCircleFill } from "react-icons/ri";

const picsPagos = [
  { text: "Créditos INFONAVIT", },
  { text: "Fovissste" },
  { text: "Bancario", },
  { text: "Economía Americana", },
  { text: "Contado", },
];

function FormatCredit() {
  return (

    <div  className="bg-primary p-6">
      <h1 className="text-sm md:text-3xl lg:text-4xl text-center text-white  font-semibold p-2 md:p-9">
      <span className="border-b-[3px] border-secondary">
          ¿Qué créditos califican?
        </span>
      </h1>

      <div className="md:grid md:grid-cols-2 grid grid-cols-1 grid-rows-1 ">
        <div className="row-start-1 m-[4rem]">
          <img src="/img/familia2.jpeg" alt="Fachadas de Almeria Residencial" className=" rounded-3xl mx-auto" />
        </div>
        <div className="">
          <div className="row-span-3">
            {picsPagos.map((picPago, index) => (
              <ul className="p-1" key={index}>
                <li className="text-white flex items-center justify-start mt-14 gap-1 ">
                  <RiCircleFill className="text-secondary" />
                  <span className="text-white text-sm md:text-2xl lg:text-3xl font-semibold">{picPago.text}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default FormatCredit