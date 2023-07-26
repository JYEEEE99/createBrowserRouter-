import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screen/Home";
import About from "./screen/About";
import Root from "./Root";

const router = createBrowserRouter([(
  {
    path:"/",
    element:<Root />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element: <About />,
      }
    ]
  }
)])

export default router;
