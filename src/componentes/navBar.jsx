import {CartWidget} from "./Cartwidget";
import React from "react";
import { Link } from "react-router-dom";
function NavBar(){
    return <nav className="navBar" >
        <div>
            <img src="../componentes/rutaJardinLogo" alt="" /></div>
            <Link to={"/"} className="nav"> Ruta Jardin</Link>
        <ul>
            <li className="bar">
                <Link to={"/category/cafe"} className="nav"> Cafe de Especialidad</Link>
            </li>
            <li className="bar">
                <Link to={"/category/sweet"} className="nav"> Cosas Dulces</Link>
            </li>
            <li className="bar">
                <Link to={"/category/salty"} className="nav"> Cosas Saladas</Link>
            </li>
            <li className="bar">
                <Link to={"/Cartwidget"} className="nav"> <CartWidget></CartWidget></Link>
                
            </li>
        </ul>
        
    </nav>
}
export default NavBar