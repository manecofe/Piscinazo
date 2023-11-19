import LanguageSwitcher from "./languageSwitcher";
import DarkModeToggle from "./toggledarkmode";
import { useTranslation } from "react-i18next";
function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div className="fixed dark:bg-dark-pink flex top-0 z-10 bg-neon-pink left-0 w-full h-14">
        <div className="flex w-full  items-center align-middle gap-6 px-4 flex-nowrap sm:px-6 lg:px-8">
          <h1 className="text-base font-semibold leading-7 text-white dark:text-slate-300">
            Piscinazo
          </h1>
          <div className="order-last text-center items-center hidden md:flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:pl-6">
            <a href="#servicios" className="text-white">
              {t("Servicios")}
            </a>
            <a href="#proyectos" className="text-white">
              {t("Proyectos")}
            </a>
            <a href="#testimonios" className="text-white">
              {t("Testimonios")}
            </a>
          </div>
          <div className="ml-auto flex">
            <div className="text-center">
              <DarkModeToggle />
            </div>

            <LanguageSwitcher />
            <a
              href="#formulario"
              className=" hidden mx-2 md:flex items-center gap-x-1 rounded-md bg-white dark:bg-slate-300 px-3 py-2 text-sm font-semibold text-neon-pink dark:text-dark-pink shadow-sm hover:bg-neon-pink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              {t("Cotiza con nosotros!")}
            </a>
          </div>
        </div>
      </div>
      <a
        href="#formulario"
        className=" fixed border-2 border-neon-pink z-10 shadow-2xl bottom-10 right-10 mx-2 md:hidden items-center gap-x-1 rounded-md bg-white dark:bg-slate-300 px-3 py-2 text-sm font-semibold text-neon-pink dark:text-dark-pink hover:bg-neon-pink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
      >
        {t("Cotiza con nosotros!")}
      </a>
    </>
  );
}
export default Header;
