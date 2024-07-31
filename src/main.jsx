import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import Projects from "./page/Projects.jsx";
import Contact from "./page/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
    ,

);
