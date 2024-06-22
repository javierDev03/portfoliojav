export default function Nav() {
  return (
    <>
      <header className="fixed   w-full z-10">
        <nav className="  bg-[#222222] text-white font-semibold flex justify-center text-center items-center  h-[82.18px] p-2">
          <a href="/#home" className=" ml-10 hover:text-[#C5C5C5]">
            Home
          </a>
          <a href="/#proyectos" className="ml-10 hover:text-[#C5C5C5]">
            Proyectos
          </a>
          <a href="/#experiencia" className="ml-10 hover:text-[#C5C5C5]">
            Experiencia
          </a>
          <a
            href="mailto:javicervel25@gmail.com"
            className="ml-10 pr-7 hover:text-[#C5C5C5]"
          >
            Contacto
          </a>
        </nav>
      </header>
    </>
  );
}
