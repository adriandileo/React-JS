import Itemlist from '../componentes/Itemlistcontainer/itemlist';
// import { useParams } from 'react-router-dom';
export default function Home(){
    return (
        <div>
            <h1>Home </h1>
        <ul className='itemsul'>
            <Itemlist  />
            </ul>
        </div> 
    )
}