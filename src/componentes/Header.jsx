import "../css/header.css"
import Countdown from "./Countdown";


function Header() {
 
  return (
    <div className="header">
        <div>
          <title> Yoga medicina para el espiritu</title>
        <h1 className="descuento">DESCUENTO DEL 25% TIEMPO LIMITADO</h1>
        <div className="containercountdown">
          <Countdown />
          </div>
        </div>
    </div>
  );
}

export default Header;
