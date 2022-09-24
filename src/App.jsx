// import logo from './logo.svg';
import './componentes/ItemListContainer' ;
import './App.css';
import NavBar from  './componentes/navBar';
import './componentes/style.css';
import ItemsListContainer from './componentes/ItemListContainer';

function App() {
  return (
       <div>
          <NavBar  />
          <ul className='itemsul'>
            <ItemsListContainer  />
          </ul>
          
        
       </div>
    );
}

export default App;
