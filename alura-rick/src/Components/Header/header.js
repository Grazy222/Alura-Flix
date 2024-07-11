import "./header.css";

function Header () {
    return(
        <header className="header">
        <h3>AluraRick</h3>
        <nav className="home">
            <ul> 
             <li className="liHome">Home</li>
              <li className="liVideo">Novo Vídeo</li> 
            </ul>
          </nav>
        </header>
    )
}
export default Header