import Nav from "../components/Nav";
import Card from "../components/Card";
export default function Home() {
  return (
    <>
      <Nav />
      <section
        className="flex justify-center pt-16"
        id="home"
        data-section="home"
      >
        <div className=" text-center ">
          <div>
            <img
              src="./avatar1.png"
              alt="avatar"
              className=" rounded-full overflow-hidden h-64 mt-20 mx-auto flex justify-center"
            />
          </div>

          <h1 className=" text-white font-bold mt-10 text-5xl pb-2">
            Hola, soy javier
          </h1>
          <p className=" m-1 font-bold text-5xl bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
            Desarrollador Web
          </p>
          <div className="  mt-10 md:w-1/2 md:mx-auto m-3">
            <span className="text-[#C5C5C5] text-xl ">
              Mi nombre es Javier Cervantes, soy un estudiante de 21 años de
              Ingeniería Informática en México, con especialización en
              Desarrollador Frontend.
            </span>
          </div>
          <div className=" space-x-5">
            <a
              href="https://www.linkedin.com/in/francisco-javier-cervantes-velasco-a40517275/"
              className=""
              target="_blank"
            >
              <button className=" bg-white hover:opacity-75 font-bold mt-10  p-4 rounded-full text-xl px-10">
                Linkedin
              </button>
            </a>
            <a href="https://github.com/javierDev03" target="_blank" className="">
              <button className=" bg-black  hover:opacity-75 border-2 border-white text-white font-bold mt-10  p-4 rounded-full text-xl px-10">
                GitHub
              </button>
            </a>
          </div>
          <h2 className=" text-[#C5C5C5] uppercase pt-14 font-semibold tracking-wide ">
            Experiencia con
          </h2>
          <img
            src="./logos.png"
            alt=""
            className="mx-auto pt-14 md:w-auto w-96"
          />
        </div>
      </section>

      <section className=" pt-24 mb-16" id="proyectos" data-section="proyectos">
        <h2 className="flex justify-center uppercase font-bold text-3xl bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Proyectos
        </h2>
        <div className=" md:py-36    mx-auto  lg:max-w-4xl md:max-w-2xl flex justify-center">
          <div className=" flex">
            <div className="grid md:grid-cols-2 gap-12">
              <Card />
            </div>
          </div>
        </div>
      </section>

      <section className="" id="experiencia" data-section="experiencia">
        <h2 className=" pt-24 uppercase text-center text-3xl font-bold flex justify-center bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
          Experiencia
        </h2>
        <div className="py-16 md:py-36 p-2 mx-auto container lg:max-w-4xl md:max-w-2xl text-white text-justify">
          <p className=" font-semibold">
            Freelancer Frontend Developer
            <span className=" float-right text-[#8491A0]">
              Actualmente - Presente
            </span>
          </p>
          <br />
          <span className=" text-[#8491A0]">
            Desde enero de 2022, trabajo como Freelancer Frontend Developer.
            Desarrollé y mantuve aplicaciones web con React.js y Tailwind CSS,
            creando interfaces modernas y responsivas. Utilicé HTML y CSS para
            maquetar páginas, e implementé funcionalidades interactivas con
            JavaScript (ES6+). Gestioné versiones de código con Git y GitHub, y
            manejé bases de datos SQL. Uso Visual Studio Code como IDE,
            realizando pruebas y depuración para asegurar la calidad del código.
            Optimicé el rendimiento de las aplicaciones y colaboré con equipos
            multidisciplinarios, siguiendo mejores prácticas de desarrollo para
            garantizar la escalabilidad y mantenibilidad del código.
          </span>
          <br />
          <br />

          {/* <p className=" font-semibold">
            Lead Software Engineer at Google
            <span className=" float-right text-[#8491A0]">
              Nov 2019 - Present
            </span>
          </p>
          <br />
          <span className=" text-[#8491A0]">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing userddddd
            experiences for millions of users worldwide.
          </span> */}
        </div>
      </section>
      {/* FOOTER */}
      <footer className=" flex bg-[#191919] text-white text-justify  ">
        <div className="text-lef p-2 py-16 md:py-36   mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h3 className=" font-bold text-xl">Contacto</h3>
          <br />
          <span className=" text-[#C5C5C5]">
            Frontend Developer con 1 años de experiencia freelancer con práctica
            en el diseño e implementación de soluciones web robustas, escalables
            e innovadoras.
          </span>
          <br />
          <br />
          <span className="items-center object-center flex">
            <img src="./Email Icon.png" alt="" className="pr-2" />
            <a
              href="mailto:javicervel25@gmail.com"
              className=" font-semibold text-sm text-[#C5C5C5]"
            >
              javicervel250@gmail.com
            </a>
          </span>
          <br />
          <div className="flex">
            <a href="https://www.instagram.com/">
              <img src="./insta.png" alt="" className="pr-5" />
            </a>
            <a href="https://twitter.com/uwur7u7">
              <img src="./x.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
