import "../css/segundo.css"
import Imagen1 from "../imagenes/imagen1.jpg"

function Segundo() {
    return(
    <div className="segundo">
            <div>
                <img src={Imagen1} alt="Imagen 1" className="izq" />
            </div>
            <div id="texto">
                <h2>Este curso ONLINE es para ti si:</h2>
                <ul>
                    <li>¿Quieres aprender a disminuir tus niveles de estrés y ansiedad?</li>
                    <li>¿Deseas restaurar tu equilibrio y tu paz mental?</li>
                    <li>¿Si ya practicas yoga y deseas profundizar tus conocimientos en la práctica de esta disciplina espiritual?</li>
                    <li>¿Quieres fortalecer tu cuerpo, mente y espíritu?</li>
                    <li>¿Te interesa mejorar tu concentración a la hora de trabajar o estudiar?</li>
                    <li>¿Estás interesado en iniciar una práctica responsable y consciente del yoga que te ayude a recuperar, estabilizar y mantener tu paz interior?</li>
                </ul>
                <h2 id="respondersi">Si respondiste “SI” a cualquiera de las preguntas anteriores…</h2>
                <h2 id="programa">Definitivamente, ¡ESTE PROGRAMA ES PARA TÍ!</h2>
            </div>
        </div>
        )
};

export default Segundo;