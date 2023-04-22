import "../css/temario.css"
import React, { useState, useRef } from "react";

function Modulo() {
  const [collapsed, setCollapsed] = useState({
    modulo1: true,
    modulo2: true,
    modulo3: true,
    modulo4: true,
    modulo5: true,
    modulo6: true,
    modulo7: true,
    modulo8: true,
  });
  const [currentModule, setCurrentModule] = useState(null);
  const moduleRefs = useRef({});

  const handleToggleCollapse = (moduleId) => {
    // Cerrar los demás módulos si se abre uno nuevo
    if (currentModule && currentModule !== moduleId) {
      setCollapsed((prevState) => ({
        ...prevState,
        [currentModule]: true,
      }));
    }

    const moduleTopBeforeCollapse = moduleRefs.current[moduleId].getBoundingClientRect().top;
    setCollapsed((prevState) => ({
      ...prevState,
      [moduleId]: !prevState[moduleId],
    }));

    // Actualizar el estado del módulo actual
    setCurrentModule((prevState) =>
      prevState === moduleId ? null : moduleId
    );

    setTimeout(() => {
      const moduleTopAfterCollapse = moduleRefs.current[moduleId].getBoundingClientRect().top;
      const scrollOffset = moduleTopAfterCollapse - moduleTopBeforeCollapse;
      window.scrollBy({
        top: scrollOffset,
        behavior: "smooth",
      });
    }, 500);
    
  };

  return (
    <div className="containermodulo">
      <h1 className="Temario">TEMARIO</h1>
        <div
        className="modulo-header"
        onClick={() => handleToggleCollapse("modulo1")} // Asignar la función de manejo de clics al encabezado del módulo
>
        Módulo 1: Bienvenida
         </div>

        <div
        ref={(ref) => (moduleRefs.current["modulo1"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo1"] ? "collapsed" : ""}`}
        id="modulo1"
        >
            <ul className="lecciones-lista">
                <li>Lección 1: Bienvenida.</li>
                <li>Lección 2: ¿Quién soy?</li>
                <li>Lección 3: ¿Cómo sacarle el mejor provecho a este curso?</li>
                <li>Lección 4: Preguntas frecuentes.</li>
                <li>Lección 5: Grupo privado de soporte.</li>
                <li>Lección 6: ¿Qué necesitas para para empezar la práctica?</li>
            </ul>
      </div>
      <div
      className="modulo-header"
        onClick={() => handleToggleCollapse("modulo2")} // Asignar la función de manejo de clics al encabezado del módulo
>
  Módulo 2: Práctica espiritual, Sadhana
</div>
<div
        ref={(ref) => (moduleRefs.current["modulo2"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo2"] ? "collapsed" : ""}`}
        id="modulo2"
        >
  <ul className="lecciones-lista">
    <li>Lección 1: Sadhana (práctica espiritual) y Sankalpa (intención).</li>
    <li>Lección 2: ¿Qué necesitas para empezar la práctica?</li>
    <li>Lección 3: Consideraciones importantes para empezar la práctica.</li>
  </ul>
</div>
<div
      className="modulo-header"
        onClick={() => handleToggleCollapse("modulo3")} // Asignar la función de manejo de clics al encabezado del módulo
>
  Módulo 3: La esencia del yoga
</div>
<div
        ref={(ref) => (moduleRefs.current["modulo3"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo3"] ? "collapsed" : ""}`}
        id="modulo3"
        >
  <ul className="lecciones-lista">
    <li>Lección 1: Los 8 pasos del yoga (principios de la práctica)</li>
    <li className="principios">
      Yama: Es un conjunto de reglas éticas que controlan nuestras acciones,
      lenguaje y pensamiento.
    </li>
    <li className="principios">
      Niyama: Significa regla o ley, este paso incorpora la disciplina a nuestras
      acciones hacia los demás y hacia nosotros mismos.
    </li>
    <li className="principios">
      Asana: Significa postura, en este paso lo que se busca es purificar el
      cuerpo y prepararlo para la meditación y así alcanzar el samadhi que es el
      último de los pasos del yoga.
    </li>
    <li className="principios">
      Pranayama: Este paso hace referencia al control de la respiración con el
      fin de cultivar la energía vital (prana).
    </li>
    <li className="principios">
      Pratyahara: Es el control de los sentidos para disminuir las distracciones
      externas con el fin de que la mente pueda mirar hacia adentro.
    </li>
    <li className="principios">
      Dharana: Concentración de la mente, hallana el camino a los pasos 7 y 8
      Dhyana (meditación) y Samadhi (iluminación).
    </li>
    <li className="principios"> Dhyana: Es la meditación. Acto de centrar la mente en único elemento.</li>
    <li className="principios">
      Samadhi: Estado iluminado, en este paso la fluctuaciones de la mente
      quedan neutralizadas y se puede actuar y pensar con ecuanimidad.
    </li>
  </ul>
</div>

<div
      className="modulo-header"
        onClick={() => handleToggleCollapse("modulo4")} // Asignar la función de manejo de clics al encabezado del módulo
>
Módulo 4: Conociendo las posturas del yoga
</div>
<div
        ref={(ref) => (moduleRefs.current["modulo4"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo4"] ? "collapsed" : ""}`}
        id="modulo4"
        >
  <ul className="lecciones-lista">
    <li>Lección 1: Postura de la montaña (Tadasana).</li>
    <li>Lección 2: Postura de la montaña con brazos hacía arriba (Tadasana Urdhva Hastasana).</li>
    <li>Lección 3: Postura de la plancha (Phalakasana) y perro mirando hacía bajo (Adho Mukha Svanasana).</li>
    <li>Lección 4: Postura de la oruga (Ashtanga Namaskara) y postura de la cobra (Bhujangasana).</li>
    <li>Lección 5: Postura de la silla (Utkatasana).</li>
    <li>Lección 6: Postura del guerrero 1 y 2 (Virabhadrasana I & II).</li>
    <li>Lección 7: Postura del guerrero 3 (Virabhadrasana III).</li>
  </ul>
</div>
<div
      className="modulo-header"
        onClick={() => handleToggleCollapse("modulo5")} // Asignar la función de manejo de clics al encabezado del módulo
>
Módulo 5: Clases de yoga
</div>
<div
        ref={(ref) => (moduleRefs.current["modulo5"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo5"] ? "collapsed" : ""}`}
        id="modulo5"
        >
  <ul className="lecciones-lista">
    <li>Lección 1: Estabilidad y fuerza: Vinyasa yoga para fortalecer cuerpo y mente.</li>
    <li>Lección 2: Aprender a fluir: Vinyasa yoga.</li>
    <li>Lección 3: Yoga para desintoxicar.</li>
    <li>Lección 4: Alegría y apertura: Vinyasa para el corazón.</li>
    <li>Lección 5: Equilibrio: Vinyasa para el equilibrio.</li>
    <li>Lección 6: Rendirse y permitir: Yin yoga.</li>
    <li>Lección 7: Amor y expansión: Yoga restaurativo para la ansiedad.</li>
    <li>Lección 8: Yoga restaurativo para dormir.</li>
  </ul>
</div>

<div
      className="modulo-header"
        onClick={() => handleToggleCollapse("modulo6")} // Asignar la función de manejo de clics al encabezado del módulo
>
Módulo 6: Ejercicios de respiración (Pranayama)
</div>
<div
        ref={(ref) => (moduleRefs.current["modulo6"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo6"] ? "collapsed" : ""}`}
        id="modulo6"
        >
  <ul className="lecciones-lista">
    <li>Lección 1: Aprende a respirar (respiración diafragmática)</li>
    <li>Lección 2: Respiración para aliviar el estrés (Sama Vritti o respiración cuadrada).</li>
    <li>Lección 3: Respiración para liberar la tensión y el cansancio (Nadhi Shodhana o respiración de las fosas alternas).</li>
    <li>Lección 4: Respiración para la purificación mental. (Respiración de las 9 rondas)</li>
    <li>Lección 5: Respiración yóguica (Ujjayi o victoriosa).</li>
    <li>Extra: Documento PDF como material de apoyo para los estudiantes con ocho tipos de respiración.</li>
  </ul>
</div>
<div
      className="modulo-header"
        onClick={() => handleToggleCollapse("modulo7")} // Asignar la función de manejo de clics al encabezado del módulo
>
Módulo 7: Meditación
</div>
<div
        ref={(ref) => (moduleRefs.current["modulo7"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo7"] ? "collapsed" : ""}`}
        id="modulo7"
        >
  <ul className="lecciones-lista">
    <li>Lección 1: Introducción + meditación guiada.</li>
    <li>Lección 2: Mudras + meditación para el amor propio.</li>
    <li>Lección 3: Mantras + meditación para conectar con la verdad.</li>
    <li>Lección 4: Meditación para la transformación y los cambios: Sa Ta Na Ma.</li>
    <li>Lección 5: El poder del Journaling.</li>
    <li>Lección 6: Kriya + meditación para la liberación física y mental.</li>
  </ul>
</div>
<div
      className="modulo-header"
        onClick={() => handleToggleCollapse("modulo8")} // Asignar la función de manejo de clics al encabezado del módulo
>
Módulo 8: Un hasta luego
</div>
<div
        ref={(ref) => (moduleRefs.current["modulo8"] = ref)}
        className={`modulo-desplegable ${collapsed["modulo8"] ? "collapsed" : ""}`}
        id="modulo8"
        >
  <ul className="lecciones-lista">
    <li>Lección 1: Despedida</li>
  </ul>
</div>
    </div>
  );
};

export default Modulo;
