import { Fragment } from "react";
import PropTypes from "prop-types";
import './CardHoroscopo.css';

let img_horoscopo = "";
let mensaje_horoscopo = "";

const CardHoroscopo = ({ fechaNacimiento }) => {
  const horoscopo = calcularHoroscopo(fechaNacimiento);
  return (
    <Fragment>
      <div
        className="card shadow-lg"
        style={{ width: "25rem", height: "22rem", margin: "10px 70px" }}
      >
        <div className="card-header">
          <h1 className="card-title">Horóscopo</h1>
        </div>
        <div className="card-body">
          <div className="card-text">
            <p className="text-muted">Tu signo zodiacal es: {horoscopo}</p>
          </div>
          <div className="d-flex justify-content-center">
            <img id="img_horoscopo" src={img_horoscopo} alt="" />
          </div>
          <div className="card-text">
            <p className="text-muted">{mensaje_horoscopo}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

//Funcion para calcular el horoscopo
function calcularHoroscopo(fechaNacimiento) {
  const fecha = new Date(fechaNacimiento);
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();
  
  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-aries.png";
    mensaje_horoscopo = "Aries es un signo de fuego, muy dinámico y aventurero. En este mes, tendrás una gran energía para emprender nuevos proyectos y alcanzar tus objetivos.";
    return "Aries";
  } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-tauro.png";
    mensaje_horoscopo = "Tauro es un signo de tierra, muy responsable y práctico. En este mes, tendrás una gran estabilidad financiera y podrás disfrutar de tus logros.";
    return "Tauro";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 21)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-geminis.png";
    mensaje_horoscopo = "Geminis es un signo de aire, muy comunicativo y curioso. En este mes, tendrás una gran capacidad para aprender y expandir tus horizontes.";
    return "Geminis";
  } else if ((mes === 6 && dia >= 22) || (mes === 7 && dia <= 22)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-cancer.png";
    mensaje_horoscopo = "Cancer es un signo de agua, muy emocional y protector. En este mes, tendrás una gran capacidad para cuidar a los demás y crear un entorno acogedor.";
    return "Cancer";
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-leo.png";
    mensaje_horoscopo = "Leo es un signo de fuego, muy creativo y apasionado. En este mes, tendrás una gran energía para emprender nuevos proyectos y alcanzar tus objetivos.";
    return "Leo";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-virgo.png";
    mensaje_horoscopo = "Virgo es un signo de tierra, muy analítico y crítico. En este mes, tendrás una gran capacidad para analizar y perfeccionar tus habilidades.";
    return "Virgo";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-libra.png";
    mensaje_horoscopo = "Libra es un signo de aire, muy social y diplomático. En este mes, tendrás una gran capacidad para relacionarte con los demás y encontrar el equilibrio en tus relaciones.";
    return "Libra";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-escorpio.png";
    mensaje_horoscopo = "Escorpio es un signo de agua, muy pasional y misterioso. En este mes, tendrás una gran capacidad para indagar en tus emociones y descubrir tus secretos más profundos.";
    return "Escorpio";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-sagitario.png";
    mensaje_horoscopo = "Sagitario es un signo de fuego, muy aventurero y optimista. En este mes, tendrás una gran capacidad para explorar nuevos horizontes y alcanzar tus objetivos.";
    return "Sagitario";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-capricornio.png";
    mensaje_horoscopo = "Capricornio es un signo de tierra, muy responsable y ambicioso. En este mes, tendrás una gran capacidad para alcanzar tus objetivos y consolidar tus logros.";
    return "Capricornio";
  } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-acuario.png";
    mensaje_horoscopo = "Acuario es un signo de aire, muy innovador y visionario. En este mes, tendrás una gran capacidad para crear y innovar en tus proyectos.";
    return "Acuario";
  } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
    img_horoscopo = "https://rsc.lavanguardia.com/img/horoscopo/ico-piscis.png";
    mensaje_horoscopo = "Piscis es un signo de agua, muy emocional y intuitivo. En este mes, tendrás una gran capacidad para conectar con tus emociones y escuchar tu intuición.";
    return "Piscis";
  } else {
    img_horoscopo = "https://static.vecteezy.com/system/resources/previews/033/294/037/original/line-red-cross-sign-icon-wrong-mark-red-cross-x-symbol-red-grunge-x-icon-cross-brush-sign-vector.jpg";
    mensaje_horoscopo = "";
    return "Fecha inválida";
  }
}

CardHoroscopo.propTypes = {
  fechaNacimiento: PropTypes.string,
};

export default CardHoroscopo;
