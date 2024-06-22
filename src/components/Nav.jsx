export default function Nav() {
  return (
    <>
      <header className="fixed    w-full z-10">
        <nav className=" bg-[#222222] text-white font-semibold flex justify-center text-center items-center  h-[82.18px]">
          <a href="/#home" className=" md:ml-10 ml-5 hover:text-[#C5C5C5]">
            Home
          </a>
          <a href="/#proyectos" className="md:ml-10 ml-5 hover:text-[#C5C5C5]">
            Proyectos
          </a>
          <a
            href="/#experiencia"
            className="md:ml-10 ml-5 hover:text-[#C5C5C5]"
          >
            Experiencia
          </a>
          <a
            href="mailto:javicervel25@gmail.com"
            className="md:ml-10 ml-5 hover:text-[#C5C5C5]"
          >
            Contacto
          </a>
        </nav>
      </header>
    </>
  );
}
