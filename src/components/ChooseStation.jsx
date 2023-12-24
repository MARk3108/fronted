import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/choose_station.css';

const ChooseStation = ({ isOpen, onClose }) => {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/stationsList')
      .then(response => {
        console.log(response.data)
        setStations(response.data);
        
      })
      .catch(error => {
        console.error('Ошибка при загрузке станций:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Выбранная станция:', selectedStation);
    // console.log('Выбранная станция:', selectedStation.id); // un
    onClose(selectedStation);
    
  };

  if (!isOpen) return null;

  return (
    <div className={`modal`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Выбор станции для администратора</h2>
        <form className="form-choose-station" onSubmit={handleSubmit}>
          <label htmlFor="stationSelect">Выберите станцию:</label>
          <select
            id="stationSelect"
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
          >
            <option value="">Выберите станцию</option>
            {stations.map(station => (
              <option key={station.id} value={station.title}>
                {station.title}
              </option>
            ))}
          </select>
          <br/><br/>
          <button type="submit">Подтвердить</button>
        </form>
      </div>
    </div>
  );
};

export default ChooseStation;
