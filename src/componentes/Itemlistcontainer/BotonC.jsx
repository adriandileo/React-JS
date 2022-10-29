// import { useState } from "react";

export default function BotonC(props){

    function handleClick() {
        if (props.onClick) props.onClick();
      }
      return (
        <button onClick={handleClick}>
          {props.children}
        </button>
      )
}