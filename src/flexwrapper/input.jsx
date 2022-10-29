import React from "react";

//                              Contenedor Label

export default function Input(props){
    return (
        <div className="Input">
            <label htmlFor="">{props.title} </label>
            <input 
            type="text"
            value={props.value}
            required={props.required}
            name={props.name}
            onChange={props.onChange}
            
            
            />
        </div>
    )
}