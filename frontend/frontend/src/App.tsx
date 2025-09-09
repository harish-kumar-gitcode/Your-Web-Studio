import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";

function App() {
  //Defining the routes.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/services",
      element: <Home></Home>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
