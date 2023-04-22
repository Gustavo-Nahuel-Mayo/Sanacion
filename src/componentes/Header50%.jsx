import "../css/header.css"
import Countdown from "./Countdown";


function Header() {
 
  return (
    <div className="header">
        <header>
          <title> Yoga medicina para el espiritu</title>
        <h1 className="descuento">DESCUENTO DEL 50% TIEMPO LIMITADO</h1>
        
          <Countdown />
  
        </header>
    </div>
  );
}

export default Header;
