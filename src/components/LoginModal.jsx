import React, { useState } from 'react';
import '../styles/login.css'; // Файл стилей для оформления модального окна
import tileImage from '../assets/tile.png'; // Импорт изображения
import logo from "../assets/Logo (1).svg"
import LoginServices from '../services/login'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const LoginModal = () => {
  const  navigate=useNavigate(); //хук для перенаправления пользователя на новую страницу 
 
  const [email, setUserEmail] = useState(''); //храним имя 
  const [password, setPassword] = useState('');//храним пароль 
 
  const handleStationChange = (event) => {
    setUserEmail(event.target.value);
    setPassword(event.target.value);
  };
 

 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можете отправлять данные на сервер для авторизации
    
    console.log('Логин:', email);
    console.log('Пароль:', password);
   

    
  };
 const handleLogin = async () => {
  try {
    // Вызываем метод login, который возвращает объект с токенами
    const { access: accessToken } = await LoginServices.login(email, password);

    const response = await axios.get(`http://213.171.4.235:8082/api/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log("data:", response.data);
    
    // Если все успешно, перенаправляем пользователя на нужную страницу
    navigate('/DragAndDrop'); 
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
          
          <label htmlFor="username">Введите свою почту:</label>
          <input className="input-field" type="text" id="username" value={email} onChange={(e) => setUserEmail(e.target.value)} required />
          <label htmlFor="password">Пароль:</label>
          <input className="input-field" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="input-field" onClick={handleLogin} type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
