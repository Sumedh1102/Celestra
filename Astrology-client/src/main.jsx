import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Service from './Pages/Services.jsx'
import Remedies from './Pages/Remedies.jsx'
import Solution from './Pages/Solution.jsx'
import About from './Pages/About.jsx'
import Astrology from './Service/Astrology.jsx'
import Numerology from './Service/Numerology.jsx'
import Palmistry from './Service/Palmistry.jsx'
import Marriage from './Remedies/Marriage.jsx'
import Education from './Remedies/Education.jsx'
import Career from './Remedies/Career.jsx'
import Muhurat from './Remedies/Muhurat.jsx'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Gemstone from './Solution/Gemstone.jsx'
import Gharshanti from './Solution/Gharshanti.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/service",
        element: <Service />,
        children: [
          {
            path: "astrology",
            element: <Astrology />
          },
          {
            path: "numerology",
            element: <Numerology />
          },
          {
            path: "palmistry",
            element: <Palmistry />
          },
        ]
      },
      {
        path: "/remedies",
        element: <Remedies />,
        children: [
          {
            path: "marriage", 
            element: <Marriage />
          },
          {
            path: "education", 
            element: <Education />
          },
          {
            path: "career", 
            element: <Career />
          },
          {
            path: "muhurat",
            element: <Muhurat />
          },
        ],
      },
      {
        path: "/solution",
        element: <Solution />,
        children: [
          {
            path: "gemstone", 
            element: <Gemstone />
          },
          {
            path: "gharshanti", 
            element: <Gharshanti />
          },
        ]
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
