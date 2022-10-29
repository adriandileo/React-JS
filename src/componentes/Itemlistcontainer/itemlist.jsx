import Cards from "../Itemsdetails/Cards";
import FlexWrapper from "../../flexwrapper/flexwrapper";
import React , {useState, useEffect} from "react";
import {getitems} from "./items";
// import Button from "../Itemsdetails/button";
// import { Link } from "react-router-dom";
//          TODO

export default function Itemlist(){
    const [items , setItems] = useState ([])
    useEffect(
      () => {
        getitems()
        .then((items) => {
        console.log(items)
        setItems(items)
})
},[]);

    
    return(
    <> 
    <div>
            <FlexWrapper>
                {items.map((items)=> {
                  
                    return(
                <div key={items.id}>
                <Cards id={items.id} category={items.category} title={items.name} details ={items.details} precio={items.precio}  />
                </div>
                    )})}
            </FlexWrapper> 
    </div>
    </>)
  
}



