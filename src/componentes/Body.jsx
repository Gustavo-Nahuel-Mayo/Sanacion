
import "../css/body.css"


import Maindiv from "./Maindiv"
import Segundo from "./Segundo"
import Modulo from "./Modulo"
import Certificado from "../imagenes/certificado.jpg"
import Grupovip from "../imagenes/grupovip.png"
import Preguntas from "./Preguntas"
import Testimonios from "./Testimonios"
import Pagohotmart from "./Pagohotmart"
import Tres from "./Tres"
import Cuatro from "./Cuatro"

function Body(){
    return(
    <div className="body">
        
<Maindiv/>
<Segundo/>
<Tres/>
<Cuatro/>
        
        
       
        
        
       <Modulo/>
       <div className="bonoscontainer">
            <h2 className="unirtehoy">Únete a nuestro curso hoy y accede de forma gratuita a:</h2>
            <div className="grid">
                <div>
                    <h2 className="bonos">Certificado de finalización</h2>
                    <img src={Certificado} alt="certificado" id="certificadoimg" />
                    <p id="preciobono">
      Costo: <span style={{ textDecoration: "line-through" }}>50 USD</span> (HOY GRATIS)
    </p>

                </div>
                <div>
                <h2 className="bonos">Grupo privado para aclarar dudas</h2>
                    <img src={Grupovip} alt="grupovip" id="grupovipimg" />
                    <p id="preciobono">
      Costo: <span style={{ textDecoration: "line-through" }}>50 USD</span> (HOY GRATIS)
    </p>

                </div>
            </div>
        </div>



        
       
        
<Testimonios/>
{/* <Quierocurso /> */}
<Pagohotmart/>
       
<Preguntas/>  
        <div className="curso-info">
            <h2>Información del curso:</h2>
            <ul>
                <li><strong>Duración:</strong> Más de 9 horas de estudio</li>
                <li><strong>Idioma:</strong> Español</li>
                <li><strong>Modalidad:</strong> Online y a tu ritmo</li>
                <li><strong>Acceso:</strong> Acceso de por vida</li>
                <li><strong>Garantia:</strong> Te devolvemos tu compra al 100% si no estás contento con tu curso.</li>
            </ul>
        </div>
        <Pagohotmart/>
    </div>
        


    )
}

export default Body