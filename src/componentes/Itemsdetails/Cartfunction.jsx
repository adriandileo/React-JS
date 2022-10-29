import { useState,createContext } from "react";

const contexto=createContext();

function ContextoProvider(props){
    const[carrito,setCarrito]=useState([])
  console.log(carrito)
    function añadir(item,count){
        let newCarrito=[...carrito];
        let newItem={...item,count}
        newCarrito.push(newItem)
        setCarrito(newCarrito)
    }


    function borrar(idToRemove){
        let newCarrito=carrito.filter((itemInCart) => itemInCart.id !== idToRemove)
        setCarrito(newCarrito)
    }

    function total(){
        let total = 0
        carrito.forEach((itemInCart)=>{
            total=total+ itemInCart.count
        })
        return total
    }

    return (
        <>
          <contexto.Provider
            value={{ carrito, añadir, total, borrar }}
          >
            {props.children}
          </contexto.Provider>
        </>
      );
    
}

export {contexto, ContextoProvider}