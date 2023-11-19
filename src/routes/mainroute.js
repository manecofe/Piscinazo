import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/landing";
import { MainProvider } from "../contexts/mainContext";
const router = createBrowserRouter([
  {
    path: "*",
    element: <Landing />,
  },
  /** LEER ANTES. asi es, esta es una muy mala practica
   * pero la verda me molesto mucho la imcompatibilidad
   * entre GH-pages y react router, quizas sea algo de la ultima version
   * asi que el unico remedio que vi fue este
   */
]);

function Mainroute() {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
}

export default Mainroute;
