
export default function Cards(props){
    console.log (props)

    return(
    
    <div className="card">
        <div>
            <img className="cardImage" src="" alt="" />
        </div>
        <div className="detalles">
            <h2>{props.title}</h2>
            <p>{props.detail}</p>
            <h4>{props.precio} </h4>
        </div>
    </div>
    )

}