import Cards from "../Itemsdetails/Cards";
import FlexWrapper from "../../flexwrapper/flexwrapper";
import React , {useState, useEffect} from "react";

export default function Itemlist(){
        
    const [items , setItems] = useState ([])
    useEffect(
      () => {
        fetch("https://my-json-server.typicode.com/adriandileo/items/db")
        .then((response) => {return response.json()} )
        .then((json)=> { setItems(json.salty)})
      },[]
    );
    const [items1, setItems1] = useState([])
    useEffect(
        () => {
          fetch("https://my-json-server.typicode.com/adriandileo/items/db")
          .then((response) => {return response.json()} )
          .then((json)=> { setItems1(json.cafe)})
        },[]
      )

    
    return(
    <> 
    <div>
            <FlexWrapper>
                {items.map((items)=> {
                    return(
                <div>
                <Cards title={items.name} detail ={items.details} precio={items.precio}  />
                {/* <a href="">ver detalles</a> */}
                </div>)})}
                {items1.map((items1)=> {
                    return(
                <div>
                <Cards title={items1.name} detail ={items1.details} precio={items1.precio}  />
                {/* <a href="">ver detalles</a> */}
                </div>)})}
                
            </FlexWrapper> 
    </div>
    </>)
  
}