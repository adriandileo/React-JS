import FlexWrapper from "../../flexwrapper/flexwrapper";
import Button from "./button";
// import { useParams } from "react-router-dom";
                    //      CONTENEDOR


export function ItemsDetails(props){
// console.log(useParams())
    return(
        <div>
            <FlexWrapper>
                <div>
                    <h1>{props.title} </h1>
                    <p>{props.details} </p>
                    <h4>{props.precio} </h4>
                    <Button>{props.title} </Button>
                </div>
            </FlexWrapper>
        </div>
    )
}