import Cards from "../Itemsdetails/Cards";
import FlexWrapper from "../../flexwrapper/flexwrapper";
import React , {useState, useEffect} from "react";
import Button from "../Itemsdetails/button";
import { Link } from "react-router-dom";


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
      );
      const [items2, setItems2] = useState([])
      useEffect(
          () => {
            fetch("https://my-json-server.typicode.com/adriandileo/items/db")
            .then((response) => {return response.json()} )
            .then((json)=> { setItems2(json.sweet)})
          },[]
        )

    
    return(
    <> 
    <div>
            <FlexWrapper>
                {items.map((items)=> {
                    return(
                <div key={items.id}>
                <Cards title={items.name} detail ={items.details} precio={items.precio}  />
                </div>)})}
                {items1.map((items1)=> {
                    return(
                <div key={items1.id}>
                <Cards title={items1.name} detail ={items1.details} precio={items1.precio}  />
                
                </div>)})}
                {items2.map((items2)=> {
                    return(
                <div key={items2.id}>
                <Cards title={items2.name} detail ={items2.details} precio={items2.precio}  />
                
                </div>)})}
                
            </FlexWrapper> 
    </div>
    </>)
  
}