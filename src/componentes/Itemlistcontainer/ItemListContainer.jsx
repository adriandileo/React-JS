import FlexWrapper from "../../flexwrapper/flexwrapper"
import Cards from "../Itemsdetails/Cards"

export default function ItemsListConten(props){
    return(
        <>
        <div>
            <FlexWrapper>
                <div>
                <Cards title="Gato" detail = "Meow" precio="200" taste="salty" />
                <Cards title= "Perro" detail="Guau" precio="250" taste="sweet"></Cards>
                </div>
            </FlexWrapper>  
        </div>
        </>
    )
}