import "../css/pagohotmart.css"
import Icono from "../imagenes/ICONO-PAGO-HOTMART.png"
import Flecha from "../imagenes/flecha.png"
import GARANTIA from "../imagenes/GARANTIA.png"

function Pago(){
    return(
        <div className="contenedorprecio">

             <div className="precioreal"><span className="antes">ANTES</span> $<span className="numeroprecio">69.99</span></div>
            <h1 className="preciodescuento"> AHORA $52.49</h1>
         <a href="https://go.hotmart.com/E81836129D?ap=bfbc" rel="noopener noreferrer">
 
  <img src={Icono} alt="icono" id="iconoimg" />
</a>

         <p className="verprecio">Click aquí para ver el precio en tu moneda local</p>
         <div className="garantia">
         <img src={Flecha} alt="flecha" id="flechaimg" /> 
    </div>
         <h2><a id="accederahora" href="https://go.hotmart.com/E81836129D?ap=bfbc">SOLO POR HOY ACCEDER AL 25% DE DESCUENTO</a></h2>
        <div className="garantia">
         <img src={GARANTIA} alt="garantia" id="garantiaimg" />
         </div>
         <div className="garantia">
        <p id="garantia">Te devolvemos tu compra al 100% si no estás contento con tu curso.</p>
        </div>
        </div>
    )
}

export default Pago;