import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Inicio from './pages/inicio.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
    ],
  },
]);

const prueba = fetch('http://127.0.0.1:8000/api/personajes')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
