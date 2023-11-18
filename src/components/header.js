function Header() {
  return (
    <div className="fixed flex top-0 z-10 bg-neon-pink left-0 w-full h-14">
      <div className="flex w-full  items-center gap-6 px-4 flex-nowrap sm:px-6 lg:px-8">
        <h1 className="text-base font-semibold leading-7 text-white">
          Piscinazo
        </h1>
        <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
          <a href="#servicios" className="text-white">
            Servicios
          </a>
          <a href="#proyectos" className="text-white">
            Proyectos
          </a>
          <a href="#testimonios" className="text-white">
            Testimonios
          </a>
        </div>
        <a
          href="#formulario"
          className="ml-auto flex items-center gap-x-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neon-pink shadow-sm hover:bg-neon-pink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Cotiza!
        </a>
      </div>
    </div>
  );
}

export default Header;
