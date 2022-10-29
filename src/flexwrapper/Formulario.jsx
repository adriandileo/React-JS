import Input from "./input";
// import { useNavigate } from "react-router-dom";
import React, {useState} from "react";


export default function Formulario({carrito,totalPrice}){
    const [ticket,setTicket]=useState({
        userData:"",
        carrito:"",
        total:"",
        dia:""
    })
    const [userData,setUserData]= useState({
        name:"",
        email:"",
        phone:"",
    })
    function ChangeUser(evento){
        const name =evento.target.name
        const value=evento.target.value
        let newUserData={...userData}
        newUserData[name]=value
        setUserData(newUserData)
    }
    function onSumbit(evento,ticket){
     evento.preventDefault();
    let Compra={
        comprador:userData,
        caarrito:carrito,
        total:totalPrice(),
        date:new Date(),
    }
    let newTicket=[...ticket]
    let newCompra={...Compra}
    newTicket.push(newCompra)
    setTicket(newTicket)
    }

return(

    <form className="formulario"  >
        <Input
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={ChangeUser}
        ></Input>
        <Input
        value={userData.phone}
        title="Celular"
        name="phone"
        required={true}
        onChange={ChangeUser}
        ></Input>
        <Input
        value={userData.email}
        title="Email"
        name="email"
        required={false}
        onChange={ChangeUser}
        ></Input>

    <button type="sumbit" onClick={()=> onSumbit()} >Comprar!!!!</button>
    </form>

)





}