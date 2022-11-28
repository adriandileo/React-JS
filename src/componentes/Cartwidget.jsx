import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { contexto } from "./Itemsdetails/Cartfunction";
import Formulario from "../flexwrapper/Formulario";
import FlexWrapper from "../flexwrapper/flexwrapper";

function CartWidget(){
const {total}=useContext(contexto)
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{total()} </span>
        </div>
    )
}

function CartView(){
const {carrito,totalPrice}=useContext(contexto)
if(carrito.length > 0 )
return(
    <div>
    <FlexWrapper>
        {carrito.map((carrito)=>(
            <div className="carrito" key={carrito.id}>
                <h2>{carrito.name} </h2>
                <h4>{carrito.details} </h4>
                <h4>${carrito.precio} </h4>
                <h4>{carrito.count} </h4>
                <h4>Precio Total:${carrito.precio * carrito.count} </h4>
            </div>
        ) )}
        
    </FlexWrapper>
    <Formulario carrito={carrito} PrecioTotal={totalPrice} ></Formulario>
    </div>
);
return(
    <h2>No Hay Nada</h2>
)
}



function Ticket(props, {Ticket}){

return(
    <div>
        <h1>
          Gracias Por Su Compra  
        </h1>
        <h2>{props.comprador}</h2>
        <p>{props.carrito}</p>


    </div>
)    
}

export {CartView,CartWidget,Ticket}