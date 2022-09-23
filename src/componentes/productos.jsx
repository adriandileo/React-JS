export default function Items(){
    let productos = ["Gato"]
    return(
        <div className="producto">
            <div className="imagenProducto">
                <img src="" alt="" />
            </div>
            <div className="descripcionProducto">
                <h3>{productos} </h3>
                <p>descripcion</p>
                <p>precio</p>
            </div>
        </div>
    )
}