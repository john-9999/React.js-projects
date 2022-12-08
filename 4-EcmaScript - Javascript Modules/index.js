import React from "react";
import ReactDOM from "react-dom/client";
import {Saludar, UserCard, Navbar } from './Saludar.js';
import Producto from './Producto.js';


const root = ReactDOM.createRoot(document.getElementById("root"));

//ESCRIBIMOS LO QUE CONTIENE ESA FUNCION, LLAMANDO A LA MISMA FUNCION. De paso lo reutilizamos.
root.render(
  <>
    <Saludar></Saludar>
    <UserCard></UserCard>
    <Navbar></Navbar>
    <Producto></Producto>
  </>
);
