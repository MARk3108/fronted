import React, { useState } from 'react';
import '../styles/login.css'; // Файл стилей для оформления модального окна
import tileImage from '../assets/tile.png'; // Импорт изображения
import logo from "../assets/Logo (1).svg"
import LoginServices from '../services/login'
import { useNavigate } from 'react-router-dom';
const stations = [
  'Станция 1',
  'Станция 2',
  // Добавьте другие станции
];
const user_roles = [
  'Администратор',
  'Обычный пользователь',
  // Добавьте другие станции
];

const LoginModal = () => {
  const  navigate=useNavigate(); //хук для перенаправления пользователя на новую страницу 
  const [selectedStation, setSelectedStation] = useState(''); //храним выбранную станцию 
  const [username, setUsername] = useState(''); //храним имя 
  const [password, setPassword] = useState('');//храним пароль 
  const[user_role,setUserRole]=useState('');//храним выбраную роль 

  const handleStationChange = (event) => {
    setSelectedStation(event.target.value);
    setUserRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можете отправлять данные на сервер для авторизации
    
    console.log('Логин:', username);
    console.log('Пароль:', password);
   

    
  };
  const handleLogin = async () => {
    try {
      // вызываем метод login  куда передаем login password и university 
      // eslint-disable-next-line no-unused-vars
      const token = await LoginServices.login(selectedStation, username,password);
      // console.log('Авторизация прошла успешно. Токен:', token);
      // перенаправляем пользователя на нужную страницу если все успешно 
     navigate('/profil'); 
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={logo} alt="Логотип" className="logo" />
        <br />
        <br />
        <br />
        <img src={tileImage} alt="Логотип" className="logo" /> {/* Use the imported image */}
        <h2>Авторизация APM Диспетчера</h2>
        <form onSubmit={handleSubmit}>
        
          {/* Labels and inputs with their respective classes */}
          <label htmlFor="stationSelect">Станция:</label>
          <select className="input-field" id="stationSelect" value={selectedStation} onChange={handleStationChange}>
          <option value="">Выберите станцию</option>
            {stations.map((station, index) => (
              <option key={index} value={station}>{station}</option>
            ))}
          </select>
          <label htmlFor="username">Логин:</label>
          <input className="input-field" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label htmlFor="password">Пароль:</label>
          <input className="input-field" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="input-field" onClick={handleLogin} type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
