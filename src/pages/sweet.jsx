import React, {useState , useEffect} from "react";

export default function Sweet(){

    const [items , setItems] = useState ([])
    useEffect(
      () => {
        fetch("https://my-json-server.typicode.com/adriandileo/items/db")
        .then((response) => {return response.json()} )
        .then((json)=> { setItems(json.sweet)})
      },[]
    )
    
    return (
        <div>
            <h1>Cosas dulces</h1>
            <div>
            {
            items.map((item) => {
              return <div>
                <h3> {item.name}</h3>
                <a href={item.details}>ver detalle</a>
              </div>
            })
          }

            </div>
        </div>
    )
}