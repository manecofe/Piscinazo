import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

function Mainroute() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Mainroute;
