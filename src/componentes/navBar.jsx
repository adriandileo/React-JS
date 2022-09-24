import CartWidget from "./Cartwidget";
function NavBar(){
    return <nav className="navBar" >
        <div><img src="../componentes/rutaJardinLogo" alt="" /></div>
        <a className="nav" href="../pages/home">Ruta Jardin</a>
        <ul>
            <li className="bar">
                <a className="nav" href="../pages/cafe">Cafe de Especialidad</a>
            </li>
            <li className="bar">
                <a className="nav" href="../pages/sweet">Cosas dulces</a>
            </li>
            <li className="bar">
                <a className="nav" href="../pages/salty">Cosas saladas</a>
            </li>
            <li className="bar">
                
            </li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
}
export default NavBar