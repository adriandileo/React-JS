// import logo from './logo.svg';
import './componentes/productos' ;
import './App.css';
import NavBar from  './componentes/navBar';
import './componentes/style.css';
import Items from './componentes/productos';
function App() {
  return (
       <div>
          <NavBar  />
          <ul className='itemsul'>
            <Items  />
            <Items  />
            <Items  />
          </ul>
          
        
       </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
