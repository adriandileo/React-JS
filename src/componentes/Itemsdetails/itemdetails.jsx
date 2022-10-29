import { useState } from "react";
import Add from "../Itemlistcontainer/add";
import { useContext } from "react";
import { contexto } from "./Cartfunction";
import { Link } from "react-router-dom";
                    //      CONTENEDOR

export function ItemsDetails( {objeto}){

 const [count,setCount]=useState(0)

 const {añadir,borrar}=useContext(contexto)

function Onañadir(count){
     añadir(objeto,count)
     setCount(count)
}


if(objeto.id)
    return(

                <div className="cardDetails">
                    <h1>{objeto.name} </h1>
                    <p>{objeto.details} </p>
                    <h4>${objeto.precio} </h4>
                    
                    {count===0 ? (
                        <Add 
                        evtAñadir={Onañadir}
                        title={objeto.name} 
                        stock={objeto.stock} 
                        initial={1}/>
                        ) : (
                            <Link to={"/Cartwidget"}> <button className="botonView">Ver Carrito</button> </Link>
                        )
                        }
                    <button className="botonDelete" onClick={()=> borrar(objeto.id)}>Eliminar</button>
                    
                </div>

    );
    return(
        <h2>Cargando...</h2>
    )
}