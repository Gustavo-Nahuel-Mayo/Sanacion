import React, { useState, useEffect } from "react";
import "../css/countdown.css"

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const buenosAiresOffset = 0; // Diferencia horaria de Buenos Aires con respecto a UTC/GMT
      const now = new Date();
      const currentDayEnd = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0
      );
      currentDayEnd.setHours(buenosAiresOffset, 0, 0, 0); // Establecer la hora de Buenos Aires en el objeto de fecha

      const timeRemaining = currentDayEnd - now;

      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);

      setCountdown({
        hours,
        minutes,
        seconds
      });
    };

    const intervalId = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
        
        <div className="reloj">
  <div className="tarjeta horas">
    <h1 className="titulo">HORAS</h1>
    <div className="numero">
      {countdown.hours.toString().padStart(2, "0")}
    </div>
  </div>

  <div className="tarjeta minutos">
    <h1 className="titulo">MINUTOS</h1>
    <div className="numero">
      {countdown.minutes.toString().padStart(2, "0")}
    </div>
  </div>

  <div className="tarjeta segundos">
    <h1 className="titulo">SEGUNDOS</h1>
    <div className="numero">
      {countdown.seconds.toString().padStart(2, "0")}
    </div>
  </div>
</div>

  );
};

export default Countdown;
