import Input from "./input";
// import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

export default function Formulario({carrito,totalPrice}){


    const [Ticket,setTicket]=useState([])
    const [userData,setUserData]= useState(
        //[]
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
    function onSumbit(){
        let data={
            comprador:userData,
            carrito:carrito
        }
        let newTicket=[...Ticket];
        let newItem={...data}
        newTicket.push(newItem)
        setTicket(newTicket)
    }
    return(

    <div className="formulario"  >
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

    <button onClick={()=> onSumbit()} >Comprar!!!!</button>
    {Ticket.length>0 ?
    (
        console.log(Ticket),
        <h2>Ticket en Consola </h2>
    ):(
        <h2>Esperando Datos</h2>
    )

    }
    </div>

)





}