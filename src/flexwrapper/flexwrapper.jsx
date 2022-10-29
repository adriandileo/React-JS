import React from "react";

function FlexWrapper ( props){
    return(
        
        <div className="items" >
            {props.children}
        </div>
    )
}

export default FlexWrapper