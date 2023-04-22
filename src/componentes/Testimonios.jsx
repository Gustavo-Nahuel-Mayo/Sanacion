import React, { useState } from "react"
import "../css/testimonio.css"
import Test1 from "../imagenes/Test1.jpg"
import Test2 from "../imagenes/Test2.jpg"
import Test3 from "../imagenes/Test3.jpg"
import Test4 from "../imagenes/Test4.jpg"

const Testimonios = () => {
    return (
      <div className="testimonios-container">
        <h2>TESTIMONIOS</h2>
        <div className="testimonios-grid">
          <div className="testimonio">
            <img src={Test1} alt="Testimonio 1" />
          </div>
          <div className="testimonio">
            <img src={Test2} alt="Testimonio 2" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonios;
  