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
                <h4>  </h4>
                <BotonC onClick={restar}> - </BotonC>
                <strong>{count} </strong>
                <BotonC onClick={sumar}> + </BotonC>
            </div>
                <button onClick={()=>{ evtAñadir(count)}}>Sumar al Cartwidget</button>

        </div>
    )
}