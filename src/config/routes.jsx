import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Notfound from "../pages/Notfound";

import LayoutPublic from "../Layouts/LayoutPublic";
import LayoutPrivate from "../Layouts/LayoutPrivate"
import App from "../pages/App";

import Registro from "../pages/Registro";

export const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <Notfound/>,
      element: <LayoutPublic />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path: "register",
          element: <Registro />
        },
        {
          path: "/app",
          element: <LayoutPrivate />,
          children: [
              {
                  index: true,
                  element: <App />
              }
          ]
        }
      ]
    }

  ]);