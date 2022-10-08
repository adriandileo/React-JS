import React , {useStatus , useEfect} from 'react';
import './App.css';
import NavBar from  './componentes/navBar';
import './componentes/style.css';
// import ItemsListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Routes , Route } from "react-router-dom" ;
import Home from "./pages/home" ;
import Salty from "./pages/salty" ;
import Sweet from "./pages/sweet" ;
import Cafe from "./pages/cafe" ;


function App() {
  useEfect(
    fetch("https://github.com/adriandileo/java/blob/main/db.json").then(
      (respuesta) => { console.log(respuesta)}
    )
  )

  return (
       <div>
          <BrowserRouter>
            <NavBar  />
            <Routes>
              <Route exact path = "/" element={<Home/>} />
              <Route exact path = "/cafe" element={<Cafe/>} />
              <Route exact path = "/sweet" element={<Sweet/>} />
              <Route exact path = "/salty" element={<Salty/>} />
              <Route exact path = "/Cartwidget" element={<Salty/>} />
              <Route exact path = "/cafe/ :cafeId" element={<Cafe/>} />
            </ Routes>
          </BrowserRouter>

        
        
       </div>
    );
}

export default App;
