import { useState } from "react";
import { useTranslation } from "react-i18next";
const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { nombre, email, mensaje } = formData;
    alert(
      `Nombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`
    );
  };

  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <div className="flex-auto p-5 lg:p-10 text-center">
              <h4 className="text-2xl font-semibold">
                {t("Want to Get a Quote with Us?")}
              </h4>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                {t("Complete the form and we'll respond within 24 hours.")}
              </p>
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  {t("Full Name")}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder={t("Full Name")}
                  onChange={handleInputChange}
                  value={formData.nombre}
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  {t("Email Address")}
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder={t("Email Address")}
                  onChange={handleInputChange}
                  value={formData.email}
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  {t("Message")}
                </label>
                <textarea
                  rows="4"
                  cols="80"
                  onChange={handleInputChange}
                  value={formData.mensaje}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder={t("Write a message...")}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  {t("Send Message")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
