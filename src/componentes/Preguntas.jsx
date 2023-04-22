import "../css/pregunttas.css"
import Pagos from "../imagenes/compra.jpg"
import React, { useState, useRef } from "react";

function Preguntas() {
  const [collapsed, setCollapsed] = useState({
    pregunta1: true,
    pregunta2: true,
    pregunta3: true,
    pregunta4: true,
    pregunta5: true,
    pregunta6: true,
    pregunta7: true,
    pregunta8: true,
  });

  const moduleRefs = useRef({});

  const handleToggleCollapse = (preguntaId) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [preguntaId]: !prevState[preguntaId],
    }));
  };

  const scrollToModule = (preguntaId) => {
    const moduleTopBeforeCollapse = moduleRefs.current[preguntaId].getBoundingClientRect().top;

    handleToggleCollapse(preguntaId);

    setTimeout(() => {
      const moduleTopAfterCollapse = moduleRefs.current[preguntaId].getBoundingClientRect().top;
      const scrollOffset = moduleTopAfterCollapse - moduleTopBeforeCollapse;
      window.scrollBy({
        top: scrollOffset,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <div className="preguntas-frecuentes">
      <h2 className="titulopreguntas">Preguntas frecuentes</h2>
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta3")}>
        ¿Cuándo inicia el curso?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta3"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta3"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta3"] && (
            <p className="respuesta">
              Todo el contenido es 100% en línea, con clases pregrabadas a las que tendrás acceso luego de la compra del curso. ¡Puedes iniciarlo y desarrollarlo a tu propio ritmo!
            </p>
          )}
        </div>
      </div>
        
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta5")}>
        ¿Cómo realizo el pago?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta5"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta5"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta5"] && (
            <div>
            <p className="respuesta">
              Puedes pagar con tarjeta de crédito, débito, PayPal desde cualquier país del mundo. Además, puedes pagar en EFECTIVO por medio de:
            </p>
            <div  className="pagosenmundo">
            <img src={Pagos} alt="pago" id="pagosimg" />
            
          </div>
          </div>
        )}
        </div>
      </div>
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta6")}>
        ¿Cómo ingreso al programa?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta6"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta6"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta6"] && (
            <p className="respuesta">
          Una vez que realices la compra, te llegará un mensaje al correo electrónico confirmando tu compra y con tus accesos al curso.
            </p>
          )}
        </div>
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta1")}>
          ¿Tengo acceso ilimitado a este curso?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta1"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta1"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta1"] && (
            <p className="respuesta">
              ¡Sí! Luego de que realices la compra vas a poder acceder a las clases cuando y donde quieras. El curso es tuyo de por vida.
            </p>
          )}
        </div>
      </div>
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta2")}>
          ¿Cómo accedo al grupo privado de Facebook?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta2"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta2"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta2"] && (
            <p className="respuesta">
              Una vez accedas al curso encontrarás en el módulo 1 el enlace para acceder al grupo privado.
            </p>
          )}
        </div>
      </div>
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta4")}>
        ¿Cómo obtengo el certificado del curso?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta4"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta4"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta4"] && (
            <p className="respuesta">
              Luego de que termines el curso, la plataforma te brindará automáticamente la opción para descargar el certificado.
            </p>
          )}
        </div>
      </div>
      
      </div>
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta7")}>
        ¿Es seguro comprar por internet?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta7"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta7"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta7"] && (
            <p className="respuesta">
          Sí, 100% seguro. Nuestra página web y la plataforma Hotmart cuentan con un sistema de seguridad y encriptado igual de efectivo que las grandes empresas como Amazon y Google. Tu información se encuentra segura y resguardada. </p>
          )}
        </div>
      </div>
      <div>
        <h3 className="pregunta" onClick={() => scrollToModule("pregunta8")}>
        ¿Qué pasa si no me gustó el taller?
        </h3>
        <div
          ref={(ref) => (moduleRefs.current["pregunta8"] = ref)}
          className={`modulo-desplegable ${collapsed["pregunta8"] ? "collapsed" : ""}`}
        >
          {!collapsed["pregunta8"] && (
            <p className="respuesta">
          Nosotros tenemos la política de reembolso 7 días después de la compra, si no te gustó el taller, te devolvemos todo tu dinero, así que no tienes nada que perder.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preguntas;
