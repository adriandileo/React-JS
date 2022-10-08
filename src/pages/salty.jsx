import Cards from '../componentes/Itemsdetails/Cards';
import ItemsListContainer from '../componentes/Itemlistcontainer/ItemListContainer';

export default function Salty(taste){
    console.log(Cards.props,taste)
    
    
    return (
        <div>
            <h1>Cosas Saladas</h1>
            <ul>
            < ItemsListContainer/>
            </ul>
        </div>
    )
}