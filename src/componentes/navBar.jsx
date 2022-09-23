// import rutaJardinLogo from '../componentes/rutaJardinLogo' ;
function NavBar(){
    return <nav className="navBar" >
        <div><img src="../componentes/rutaJardinLogo" alt="" /></div>
        <a className="nav" href="">Ruta Jardin</a>
        <ul>
            <li className="bar">
                <a className="nav" href="">Cafe de Especialidad</a>
            </li>
            <li className="bar">
                <a className="nav" href="">Cosas dulces</a>
            </li>
            <li className="bar">
                <a className="nav" href="">Cosas saladas</a>
            </li>
        </ul>
    </nav>
}
export default NavBar