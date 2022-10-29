import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom"
// import { ItemsDetails } from "../componentes/Itemsdetails/itemdetails"
import { getCategory } from "../componentes/Itemlistcontainer/items"
import FlexWrapper from "../flexwrapper/flexwrapper"
import Cards from "../componentes/Itemsdetails/Cards" 

//                          Items y Categorias

export default function ItemCategory(props){
console.log(useParams())
const [categoria , setCategory ] = useState([])
const {category} = useParams()
console.log(category)
useEffect(
    () => {
      getCategory(category)
      .then((categoria) => {
        console.log(categoria)
        setCategory(categoria)
})
    },[category]
  );
setTimeout(() => { 
  console.log(categoria)},2000)


    return (
        <div>
            <h1>Cafe de Especialidad</h1>
            <div>
                <FlexWrapper>
                    {categoria.map((categoria)=>{
                    return(
                        // <ItemsDetails 
                        //     key={categoria.id}
                        //     id={categoria.id} 
                        //     category={categoria.category} 
                        //     title={categoria.name} 
                        //     details={categoria.details} 
                        //     precio={categoria.precio}  
                        //     />
                        <Cards
                        key={categoria.id}
                                id={categoria.id} 
                                category={categoria.category} 
                                title={categoria.name} 
                                details={categoria.details} 
                                precio={categoria.precio}  
                        />
                    )} )}
                
                </FlexWrapper>
            </div>
        </div>
    )
}