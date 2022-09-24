import FlexWrapper from "../flexwrapper/flexwrapper"
import Cards from "./Cards"

export default function ItemsListConten(props){
    return(
        <>
        <div>
            <FlexWrapper>
                <div>
                <Cards title="Gato" detail = "Meow" precio="200" />
                <Cards title= "Perro" detail="Guau" precio="250"></Cards>
                </div>
            </FlexWrapper>  
        </div>
        </>
    )
}