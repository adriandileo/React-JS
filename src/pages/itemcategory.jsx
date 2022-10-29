import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom"
// import { ItemsDetails } from "../componentes/Itemsdetails/itemdetails"
import { getCategory } from "../componentes/Itemlistcontainer/items"
import FlexWrapper from "../flexwrapper/flexwrapper"
import Cards from "../componentes/Itemsdetails/Cards" 

//                          Items y Categorias

export default function ItemCategory(props){
const [categoria , setCategory ] = useState([])
const {category} = useParams()
useEffect(
    () => {
      getCategory(category)
      .then((categoria) => {
        setCategory(categoria)
})
    },[category]
  );


    return (
        <div>
            <div>
                <FlexWrapper>
                    {categoria.map((categoria)=>{
                    return(
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