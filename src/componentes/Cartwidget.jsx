import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { contexto } from "./Itemsdetails/Cartfunction";

export default function CartWidget(){
const {total}=useContext(contexto)
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{total()} </span>
        </div>
    )
}