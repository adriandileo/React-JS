
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ItemsDetails } from "../Itemsdetails/itemdetails";
import FlexWrapper from "../../flexwrapper/flexwrapper";
import { getunitem } from "./items";

//                                  Un solo Item

export default function ItemsListConten(props){
const [objeto , setObjeto] = useState ([])
const {id} = useParams()
console.log(id)
// const params = useParams()
// console.log(params)
// const categoryId = params.categoryId
// console.log(categoryId)
  useEffect(
    () => {
      getunitem(id)
      .then((objeto) => {
        console.log(objeto)
        setObjeto(objeto)
})
    },[id]
  );
setTimeout(() => { 
  console.log(objeto)},2000)

    return(
        <>
        <div>
          <FlexWrapper>
            <div>
            {/* {objeto.map((items) =>
              {return (*/}
          
                  <ItemsDetails 
                  objeto={objeto}
                  />
              {/* )}
            )} */}
            </div>
          </FlexWrapper>
        </div>
        </>
    )
}

    