import React , {useState} from "react";
import BotonC from "./BotonC";

export default function Add({stock,initial,evtAñadir}){
    const [count, setCount]= useState(initial);
    // console.log(initial)
    function restar(){
        if (count > 1) setCount(count -1)
    }


    function sumar(){
        if(count<=stock) setCount(count+1)
    }

    return(
        
        <div>
            <div>
                <BotonC onClick={restar}> - </BotonC>
                <strong className="count">{count} </strong>
                <BotonC onClick={sumar}> + </BotonC>
            </div>
                <button className="botonAdd" onClick={()=>{ evtAñadir(count)}}>Sumar al Carrito</button>

        </div>
    )
}