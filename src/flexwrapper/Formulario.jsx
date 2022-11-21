import Input from "./input";
// import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

export default function Formulario({carrito,totalPrice}){


    const [Ticket,setTicket]=useState([])
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
    function onSumbit(){
        // let data={
        //     comprador:userData,
        //     carrito:carrito
        // }
        let newTicket=[...Ticket];
        let newItem={...userData,...carrito}
        newTicket.push(newItem)
        setTicket(newTicket)
    }
    return(

    <div className="formulario"  >
    {Ticket.length>0 ?
    (
        <div key={userData.name}>
            <h2>Gracias por tu compra</h2>
            <h4>{userData.name} </h4>
            <p>{userData.email} </p>
            <p>{userData.phone} </p>
            {
                carrito.map((carrito)=>{
                    return(
                        <div>
                        <p>{carrito.name} </p>                        
                        </div>
                       
                    )
                })
            }
        </div>
        
    ):(
        
        <div>
            
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
        
    <h2>Esperando Datos</h2>
        </div>
        // <h2>Esperando Datos</h2>
    )

    }
    </div>

)





}