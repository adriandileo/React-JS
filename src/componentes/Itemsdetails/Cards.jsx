import { Link } from "react-router-dom";
import Button from "./button"

                    //      CONTENEDOR


export default function Cards(props){


    return(
    
    <div className="card">
        <div>
            <img className="cardImage" src="" alt="" />
        </div>
        <div className="detalles">
            <h2>{props.title}</h2>
            <p>{props.detail}</p>
            <h4>{props.precio} </h4>
            <Link to={`/category/${props.category}/${props.id}`}>
            <Button>{props.title} </Button>
            </Link>
            
        </div>
    </div>
    )

}