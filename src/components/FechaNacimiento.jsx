import { useState } from 'react';
import './FechaNacimiento.css';
import PropTypes from 'prop-types';

const FechaNacimiento = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
  };

  const handleCalculateClick = () => {
    onDateSelect(selectedDate); // Llamar la función que se pasa por props cuando se presiona "Calcular"
  };

  return (
    <>
      <div className="card shadow-lg" style={{ width: '20rem', height: '20rem', margin: '10px 70px' }}>
        <div className="card-header">
          <h1 className="card-title">Fecha de Nacimiento</h1>
        </div>
        <div className="card-body">
          <div className="card-text">
            <p className="text-muted">Ingresa tu fecha de nacimiento</p>
            <input type="date" id="start" name="trip-start" className="form-control"
              value={selectedDate} onChange={handleDateChange}
              min="1900-01-01" max="2020-12-31" />
          </div>
          <button type="button" className="btn btn-danger mt-3" onClick={handleCalculateClick}>Calcular</button>
        </div>
      </div>
    </>
  )
}

FechaNacimiento.propTypes = {
  onDateSelect: PropTypes.func,
};

export default FechaNacimiento;
