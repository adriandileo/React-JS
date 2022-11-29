import './App.css';
import NavBar from  './componentes/navBar';
import './componentes/style.css';
import { BrowserRouter, Routes , Route } from "react-router-dom" ;
import Home from "./pages/home" ;
import ItemCategory from './pages/itemcategory';
import ItemsListConten from './componentes/Itemlistcontainer/ItemListContainer';
import {ContextoProvider} from './componentes/Itemsdetails/Cartfunction';
import { CartView } from './componentes/Cartwidget';



function App() {

  return (
       <div>
          <ContextoProvider>

            <BrowserRouter>
            <NavBar  />
            <Routes>
              
              <Route path = "/" element={<Home/>} />
              <Route path='/category/:category' element={<ItemCategory/>} />
              <Route path = "/Cartwidget" element={<CartView/>} />
              <Route path ={`/category/:category/:id`} element={<ItemsListConten/>} />
            </ Routes>
          </BrowserRouter>
          </ContextoProvider>
          
        
        
       </div>
    );
}

export default App;
