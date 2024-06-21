import { datos } from "../data/DataCard";
export default function Card() {
  return (
    <>
      {datos.map((info, index) => (
        <div className="  pt-4 rounded-md hover:opacity-75 hover:scale-105 transition-transform duration-300 hover:" key={index}>
          <img
            src={info.imagen}
            alt="Proyecto"
            className=" overflow-hidde w-80"
          />
          <div className=" text-white font-semibold bg-[#2A2A2A] w-80 rounded-md flex flex-col p-2">
            <span className="text-[#C5C5C5]">
              <a href={info.url}>Click para visitar</a>
            </span>
            <p>{info.titulo}</p>
          </div>
         
        </div>
      ))}
    </>
  );
}


