
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ItemsDetails } from "../Itemsdetails/itemdetails";
import FlexWrapper from "../../flexwrapper/flexwrapper";
import { getunitem } from "./items";

//                                  Un solo Item

export default function ItemsListConten(props){
const [objeto , setObjeto] = useState ([])
const {id} = useParams()
// const params = useParams()
// console.log(params)
// const categoryId = params.categoryId
// console.log(categoryId)
  useEffect(
    () => {
      getunitem(id)
      .then((objeto) => {
        setObjeto(objeto)
})
    },[id]
  );
    return(
        <>
        <div>
          <FlexWrapper>
            <div className="orden">

                  <ItemsDetails 
                  objeto={objeto}
                  />
            </div>
          </FlexWrapper>
        </div>
        </>
    )
}

    