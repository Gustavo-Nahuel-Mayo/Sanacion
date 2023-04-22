import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './componentes/Header';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import Maindiv from './componentes/Maindiv';
import Segundo from './componentes/Segundo';
import Modulo from './componentes/Modulo';
import Testimonios from './componentes/Testimonios';
import Countdown from './componentes/Countdown';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Body />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
