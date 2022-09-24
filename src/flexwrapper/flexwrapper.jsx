import React from "react";

function FlexWrapper ( props){
    return(
        
        <div>
            <h1>Nuestros productos</h1>
            {props.children}
        </div>
    )
}

export default FlexWrapper