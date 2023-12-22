import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/choose_station.css'; // Файл стилей для оформления модального окна

const ChooseStation = ({ isOpen, onClose }) => {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Запрос на сервер при открытии модального окна
      axios.get(' ') //вставить url для получения станции 
        .then(response => {
          setStations(response.data.stations);
        })
        .catch(error => {
          console.error('Ошибка при загрузке станций:', error);
        });
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Действия при выборе станции и подтверждении формы
    console.log('Выбранная станция:', selectedStation);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Выбор станции для диспетчера/администратора</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="stationSelect">Выберите станцию:</label>
          <select id="stationSelect" value={selectedStation} onChange={(e) => setSelectedStation(e.target.value)}>
            <option value="">Выберите станцию</option>
            {stations.map(station => (
              <option key={station.id} value={station.id}>{station.name}</option>
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
