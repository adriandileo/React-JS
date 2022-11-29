import Input from "./input";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from "../componentes/Itemlistcontainer/items";



export default function Formulario({carrito}){

    const navigate = useNavigate();
    const [userData,setUserData]= useState(
         {
         name:"",
         email:"",
         phone:"",
     }
    )
    function ChangeUser(evento){
        const name =evento.target.name
        const value=evento.target.value
        let newUserData={...userData}
        newUserData[name]=value
        setUserData(newUserData)
    }
    function onSumbit(evt){
        
        evt.preventDefault();

        const orderData = {
            buyerData: userData,
            cart: carrito,
            date: new Date(),
        };

    createBuyOrder(orderData)

}
    return(

        <form className="formulario"  onSubmit={onSumbit} >    
            <Input
            value={userData.name}
            title="Nombre"
            name="name"
            required={true}
            onChange={ChangeUser}
            />
            <Input
            value={userData.phone}
            title="Celular"
            name="phone"
            required={true}
            onChange={ChangeUser}
            />
            <Input
            value={userData.email}
            title="Email"
            name="email"
            required={false}
            onChange={ChangeUser}
            />
            <button type="submit">Comprar!!!!</button>
        </form>

);





}