// import React , {useState , useEffect} from 'react';
import './App.css';
import NavBar from  './componentes/navBar';
import './componentes/style.css';
// import ItemsListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Routes , Route } from "react-router-dom" ;
import Home from "./pages/home" ;
import Salty from "./pages/salty" ;
import Sweet from "./pages/sweet" ;
import Cafe from "./pages/cafe" ;
// import getItems from './componentes/Items/items';

function App() {

  return (
       <div>
          <BrowserRouter>
            <NavBar  />
            <Routes>
              
              <Route path = "/" element={<Home/>} />
              <Route path = "/cafe" element={<Cafe/>} />
              <Route path = "/sweet" element={<Sweet/>} />
              <Route path = "/salty" element={<Salty/>} />
              <Route path = "/Cartwidget" element={<Salty/>} />
              <Route path = "/cafe/:cafeId" element={<Cafe/>} />

            </ Routes>
          </BrowserRouter>
        
        
       </div>
    );
}

export default App;
