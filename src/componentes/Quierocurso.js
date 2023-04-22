import React, { useState, useEffect } from "react";
import "../css/quierocurso.css";

function Quierocurso() {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [blink, setBlink] = useState(false); // Agregamos un estado para manejar la clase "blink"

  useEffect(() => {
    let intervalId;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementOffsetTop = document.querySelector(".curso").offsetTop;
      const windowHeight = window.innerHeight;
      const elementHeight = document.querySelector(".curso").clientHeight;

      if (scrollTop > elementOffsetTop - windowHeight + elementHeight) {
        setShowProgressBar(true);

        let currentProgress = 0;
        intervalId = setInterval(() => {
          currentProgress += 1;
          if (currentProgress >= 94) {
            clearInterval(intervalId);
            setBlink(true); // Activamos la clase "blink" después de completar la animación
            // Establecer showProgressBar en false después de completar la animación
            setTimeout(() => {
              setShowProgressBar(false);
              setBlink(false); // Desactivamos la clase "blink"
            }, 1000);
          }
          setProgress(currentProgress);
        }, 15);
      } else {
        setShowProgressBar(false);
        setProgress(0);
        clearInterval(intervalId);
        setBlink(false); // Desactivamos la clase "blink"
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="curso">
      <h3>El 94% de los cupos ya se han vendido</h3>

      {showProgressBar && (
        <div className="progressBar">
          <div
            className={`progressBarFill ${blink ? 'blink' : ''}`} // Agregamos la clase "blink" si el estado blink es verdadero
            style={{ width: `${progress}%` }}
          >
            <div className="progressText">{progress}%</div>
          </div>
        </div>
      )}

      {/* <p>
        APROVECHA ESTA OPORTUNIDAD E INSCRÍBETE AL CURSO CON UN SUPER DESCUENTO
        DEL 50% POR LANZAMIENTO
      </p> */}
    </div>
  );
}

export default Quierocurso;
