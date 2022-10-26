// import React , {useState , useEffect} from 'react';
import './App.css';
import NavBar from  './componentes/navBar';
import './componentes/style.css';
// import ItemsListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Routes , Route } from "react-router-dom" ;
import Home from "./pages/home" ;
import ItemCategory from './pages/itemcategory';
import ItemsListConten from './componentes/Itemlistcontainer/ItemListContainer';
// import getItems from './componentes/Items/items';

function App() {

  return (
       <div>
          <BrowserRouter>
            <NavBar  />
            <Routes>
              
              <Route path = "/" element={<Home/>} />
              <Route path='/category/:category' element={<ItemCategory/>} />
              {/* <Route path = "/category/cafe" element={<Cafe/>} />
              <Route path = "/category/sweet" element={<Sweet/>} />
              <Route path = "/category/salty" element={<Salty/>} /> */}
              <Route path = "/Cartwidget"  />
              <Route path ={`/category/:category/:id`} element={<ItemsListConten/>} />

            </ Routes>
          </BrowserRouter>
        
        
       </div>
    );
}

export default App;
