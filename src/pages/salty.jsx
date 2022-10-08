// import Cards from '../componentes/Itemsdetails/Cards';
// import ItemsListContainer from '../componentes/Itemlistcontainer/ItemListContainer';
import React, {useState, useEffect} from "react";

export default function Salty(){

    const [items , setItems] = useState ([])
    useEffect(
      () => {
        fetch("https://my-json-server.typicode.com/adriandileo/items/db")
        .then((response) => {return response.json()} )
        .then((json)=> { setItems(json.salty)})
      },[]
    )
    
    return (
        <div>
            <h1>Cosas Saladas</h1>
            <div>
            {
            items.map((item) => {
              return <div key={item.id}>
                <h3> {item.name}</h3>
                <a href={item.details}>ver detalle</a>
              </div>
            })
          }

            </div>
        </div>
    )
}