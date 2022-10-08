
import React, {useState, useEffect} from "react";
import Itemlist from "./itemlist";

export default function ItemsListConten(props){
    
    const [items , setItems] = useState ([])
    useEffect(
      () => {
        fetch("https://my-json-server.typicode.com/adriandileo/items/db")
        .then((response) => {return response.json()} )
        .then((json)=> { setItems(json.salty)})
      },[]
    );
    useEffect(
        () => {
          fetch("https://my-json-server.typicode.com/adriandileo/items/db")
          .then((response) => {return response.json()} )
          .then((json)=> { setItems(json.cafe)})
        },[]
      )

    
    return(
        <>
        <div>
            <Itemlist items={items} />
        </div>
        </>
    )
}