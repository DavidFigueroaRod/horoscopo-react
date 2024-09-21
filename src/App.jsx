import { Fragment, useState } from "react";
import FechaNacimiento from "./components/FechaNacimiento";
import CardHoroscopo from "./components/CardHoroscopo";
import Bienvenida from "./components/Bienvenida";

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [shouldShowHoroscope, setShouldShowHoroscope] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShouldShowHoroscope(true); // Cambiar el estado para mostrar el horóscopo solo cuando se haya calculado
  };

  return (
    <Fragment>
      <Bienvenida />
      <div className="d-flex justify-content-center p-5 mt-5">
        <FechaNacimiento onDateSelect={handleDateSelect} />
        {shouldShowHoroscope && <CardHoroscopo fechaNacimiento={selectedDate} />}
      </div>
    </Fragment>
  );
};

export default App;
