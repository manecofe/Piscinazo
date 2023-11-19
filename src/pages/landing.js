import waves from "../assets/svg/layered-waves.svg";
import wavesD from "../assets/svg/layered-waves-dark.svg";
import logo from "../assets/img/Logo-Piscinazo.png";
import logoD from "../assets/img/Logo-Piscinazo-dark.png";
import diseño from "../assets/img/constructor.jpg";
import grua from "../assets/img/grua.jpg";
import hormigas from "../assets/img/ants.jpg";
import moderno from "../assets/img/piscina-moderna.jpg";
import Carousel from "../components/carousel";
import Testimonials from "../components/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../contexts/mainContext";
import {
  faBellConcierge,
  faHammer,
  faPaintbrush,
  faMedal,
  faSquarePollVertical,
  faLightbulb,
  faHandPointRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Form from "../components/form";
import Header from "../components/header";
import Footer from "../components/footer";
const BackImage = require("../assets/img/pool-1.jpg");
const scrollToForm = () => {
  const formSection = document.getElementById("formulario");
  formSection.scrollIntoView({ behavior: "smooth" });
};

function Landing() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  return (
    <>
      <Header />
      <main>
        <div
          className="relative pt-36 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "80vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${BackImage})`,
            }}
          >
            <span className="w-full h-full absolute opacity-50 bg-black dark:opacity-70"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="mx-auto flex flex-col">
                  <h1 className="text-white dark:text-slate-300 font-semibold text-5xl">
                    {t("Tu historia comienza con nosotros.")}
                  </h1>
                  <p className="mt-4 text-lg text-gray-300 dark:text-slate-300">
                    {t(
                      "Imagina tu hogar con una piscina personalizada, diseñada para adaptarse a tu estilo de vida. En nuestra empresa constructora de piscinas, nos especializamos en convertir tus sueños de relajación y entretenimiento en una realidad refrescante."
                    )}
                  </p>
                  <a
                    href="#asd"
                    className="w-max mx-auto transition-colors mt-6 text-white dark:text-slate-300 hover:text-fresh-green border border-fresh-green hover:bg-transparent bg-fresh-green dark:bg-dark-green focus:ring-4 focus:outline-none focus:ring-fresh-green dark:focus:ring-dark-green font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 "
                    onClick={scrollToForm}
                  >
                    <div className="relative -left-20 w-0 h-0 bottom-4 text-5xl transition-all animate-pulse">
                      <FontAwesomeIcon icon={faHandPointRight} />
                    </div>
                    {t("¡Cotiza tu proyecto ahora!")}
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div
                  className="select-none"
                  onDragStart={(e) => e.preventDefault()}
                >
                  <img
                    src={darkMode ? logoD : logo}
                    alt={t("Descripción del SVG")}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute -bottom-0.5 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-fresh-green dark:text-dark-green fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-20 bg-fresh-green dark:bg-dark-green -mt-24">
          <div className="container mx-auto px-4 dark:text-slate-300">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-300 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className=" text-white dark:text-slate-300 text-3xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <FontAwesomeIcon icon={faBellConcierge} />
                    </div>
                    <h6 className="text-xl font-semibold dark:text-slate-800">
                      {t("Excellent Service")}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      {t(
                        "Distinguished for our exceptional pool construction service, we offer a unique experience that exceeds your expectations."
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-300 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white dark:text-slate-300 text-3xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <FontAwesomeIcon icon={faHammer} />
                    </div>
                    <h6 className="text-xl font-semibold dark:text-slate-800">
                      {t("Qualified Engineers")}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      {t(
                        "We have a team of highly qualified engineers dedicated to creating safe, durable, and precisely designed pools."
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-300 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto ">
                    <div className="text-white dark:text-slate-300 text-3xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <FontAwesomeIcon icon={faPaintbrush} />
                    </div>
                    <h6 className="text-xl font-semibold dark:text-slate-800">
                      {t("Modern Designs")}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      {t(
                        "We pride ourselves on offering modern designs that blend contemporary aesthetics with functionality, creating unique and attractive pools."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-16">
              <h1 className="font-semibold text-5xl text-center">
                {t("Our Services")}
              </h1>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-green-600 dark:border-green-800" />
              </div>
            </div>
            <div className="mt-12 my-4">
              <div className="items-center md:mx-12 flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <div className="md:pr-12 flex flex-col">
                    <h1 className="font-semibold text-center md:text-left text-4xl md:text-5xl overflow-clip">
                      {t("Custom Design")}
                    </h1>
                    <p className="mt-4 text-lg text-center md:text-left">
                      {t(
                        "Imagine your home with a pool designed to fit your style, reflecting your lifestyle perfectly. In our pool construction company, we specialize in turning your ideas into a refreshing and unique reality."
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-full my-8 lg:w-6/12 px-4 ml-auto">
                  <img
                    alt={t("Custom Design")}
                    className="max-w-full mx-auto h-[280px] md:h-[500px] rounded-lg shadow-lg"
                    src={diseño}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-green-600 dark:border-green-800" />
              </div>
            </div>
            <div className="mt-12 my-4">
              <div className="items-center md:mx-12 flex flex-row-reverse flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <div className="md:pr-12 flex flex-col">
                    <h1 className="font-semibold text-center md:text-right text-4xl md:text-5xl overflow-clip">
                      {t("Pool Construction")}
                    </h1>
                    <p className="mt-4 text-lg text-center md:text-right">
                      {t(
                        "Turn your space into an oasis with our expert pool construction. Our team of qualified engineers ensures durability and safety in every project, so you can enjoy unforgettable moments."
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-full my-8 lg:w-6/12 px-4 ml-auto">
                  <img
                    alt={t("Pool Construction")}
                    className="max-w-full mx-auto rounded-lg shadow-lg h-[280px] md:h-[500px]"
                    src={grua}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-green-600 dark:border-green-800" />
              </div>
            </div>
            <div className="mt-12 my-4">
              <div className="items-center md:mx-12 flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <div className="md:pr-12 flex flex-col">
                    <h1 className="font-semibold text-center md:text-left text-4xl md:text-5xl overflow-clip">
                      {t("Pool Remodeling")}
                    </h1>
                    <p className="mt-4 text-center md:text-left text-lg">
                      {t(
                        "Transform your existing pool into a modern and functional gem. From aesthetic updates to technological enhancements, we make your pool spectacularly adapt to your current needs."
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-full my-8 lg:w-6/12 px-4 ml-auto">
                  <img
                    alt={t("Pool Remodeling")}
                    className="max-w-full mx-auto rounded-lg shadow-lg h-[280px] md:h-[500px]"
                    src={moderno}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-20 bg-pale-blue dark:bg-dark-cyan dark:text-slate-300">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute -bottom-0.5 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-pale-blue dark:text-dark-cyan fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-1/2 ml-auto mr-auto px-4">
                <img
                  alt={t("Ants building")}
                  className="max-w-full rounded-lg shadow-lg"
                  src={hormigas}
                />
              </div>

              <div className="w-full mt-12 md:mt-0 md:w-1/2 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl text-center font-semibold">
                    {t("A Growing Company")}
                  </h3>
                  <p className="mt-4 text-lg text-center leading-relaxed dark:text-slate-300 text-gray-600">
                    {t(
                      "Our pool construction company is constantly growing and committed to providing the best services to our clients."
                    )}
                  </p>

                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 mr-3">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 dark:text-slate-300">
                            {t("Carefully Designed Components")}
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 mr-3">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 dark:text-slate-300">
                            {t("Incredible Page Examples")}
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 mr-3">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 dark:text-slate-300">
                            {t("Dynamic Components")}
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-0 dark:text-slate-300 bg-pale-blue dark:bg-dark-cyan">
          <div className="flex justify-center md:w-1/2 mx-auto align-middle flex-col text-center">
            <h3 className="text-3xl mx-4 font-semibold">
              {t("Our Completed Projects")}
            </h3>
            <p className="m-4 text-lg leading-relaxed text-gray-600 dark:text-slate-300">
              {t(
                "Our pool construction company is constantly growing and committed to providing the best services to our clients."
              )}
            </p>
          </div>

          <Carousel />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-4 md:mx-24 mt-12 px-4">
            <div className="md:col-span-1 my-auto">
              <h2 className="text-4xl font-semibold text-center">
                {t("What Our Clients Say")}
              </h2>
              <p className="text-lg text-center leading-relaxed m-4 text-gray-600 dark:text-slate-300">
                {t(
                  "Discover the experiences of our satisfied clients who have chosen our pool construction services. Here are some testimonials about their experiences with us."
                )}
              </p>
            </div>

            <div className="md:col-span-1">
              <Testimonials />
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-neon-pink dark:bg-dark-pink">
          <div className="select-none" onDragStart={(e) => e.preventDefault()}>
            <img
              src={darkMode ? wavesD : waves}
              alt="Descripción del SVG"
              className="w-full h-full -my-1"
            />
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  {t("Build Something Extraordinary")}
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
                  {t(
                    "Attribute the potentially record minimum sea ice extent this year to the low amount of ice. According to the National Oceanic and Atmospheric Administration, Ted Scambos."
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 pt-8 px-4 text-center">
                <div className="text-gray-700 text-3xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={faMedal} />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  {t("Excellent Services")}
                </h6>
                <p className="mt-2 mb-4 text-white">
                  {t(
                    "Some quick examples to build the card title and make up the bulk of the card's content."
                  )}
                </p>
              </div>

              <div className="w-full lg:w-3/12 pt-8 px-4 text-center">
                <div className="text-gray-700 text-3xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={faSquarePollVertical} />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {t("Expand Your Market")}
                </h5>
                <p className="mt-2 mb-4 text-white">
                  {t(
                    "Some quick examples to build the card title and make up the bulk of the card's content."
                  )}
                </p>
              </div>

              <div className="w-full lg:w-3/12 pt-8 px-4 text-center">
                <div className="text-gray-700 text-3xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {t("Launch Time")}
                </h5>
                <p className="mt-2 mb-4 text-white">
                  {t(
                    "Some quick examples to build the card title and make up the bulk of the card's content."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="formulario"
          className="relative block py-24 lg:pt-0 bg-neon-pink dark:bg-dark-pink"
        >
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
