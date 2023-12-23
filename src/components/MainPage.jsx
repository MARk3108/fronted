import React, { useState } from 'react';
import '../styles/'
const MainPage = () => {
  // используем navigate для переключение между страницами
  // const navigate=useNavigate()
    //создается состояние с помощью useState 
  
    // отслеживаем состояние окна авторизации
  //  const [isAuthOpen,setAuthOpen]=useState(false);
  //       const openAuth=()=>{
  //         setAuthOpen(true);
  //       }
  //       const closeAuth=()=>{
  //         setAuthOpen(false);
  //       }
  //  // отслеживаем состояние окна регистрации
  //  const [ isRegistrationOpen,setRegistration]=useState(false);
  //       const openRegistration=()=>{
  //         setRegistration(true)
  //       }
  //       const closeRegistration=()=>{
  //         setRegistration(false)
  //       }
  //  // отслеживание состояния окна принципа работы нашего приложения
  // const [isHowItWorkOpen,setHowItWork]=useState(false);
  //       const openHowItWork=()=>{
  //         setHowItWork(true)
  //       }
  //       const closeHowItWork=()=>{
  //         setHowItWork(false)
  //       }
  // //на нажатие вызывается функция openModal и устанавливает isModalOpen в true тем самым открывается модальное окно
  // // в этом компоненте так же рендарится компонент howItWork куда передаются пропсы isOpen и пропсы onClose функция closeModal
  // //в компоненте howItWork когда isOpen равно true отображается содержимое окна включая кнопку закрытия,когда пользователь нажимает на кнопку срабатывает функция закрытия closeModal
  
  //       let userToken=localStorage.getItem('token') // проверяем токен
  //       console.log(userToken)
  //       const openModal=()=>{
  //         if(userToken){
  //           navigate('/profil');
  //         }else{
  //           alert('Пожалуйста авторизуйтесь или зарегистрируйтесь');
  //         }
  //       };
  //       const openCardsPage=()=>{
  //         if(userToken){
  //           navigate('/Cards')
  //         }else{
  //           alert('Пожалуйста авторизуйтесь или зарегистрируйтесь');
  //         }
  //       }
  //       // Функция выхода из акаунта
  //       const unLogin = () => {
  //         localStorage.removeItem('token'); // Удаляем токен
  //         const updatedUserToken = localStorage.getItem('token'); // Обновляем значение userToken
  //                console.log(updatedUserToken); // Проверьте, что токен удален
  //                // eslint-disable-next-line no-const-assign
  //                userToken=null;
  //               // console.log(userToken);
  //               //Обновляем страницу для отображения кнопок вход и регистрация
  //               window.location.reload();
  //       }
    return (
      <div className="container-main-page">  
        <div className="header">
          <h1>Модуль номерного учета вагонов</h1>
        </div>
        <div className="content">
          <div className="content__text">
            <h2>Добро пожаловать!</h2>
            <p>Здесь вы можете бронировать аудитории в нашем институте для проведения различных мероприятий.</p>
           
          </div>
        </div>
        <footer className="footer">
           <p>&copy; 2023 АРМ дежурного жд станции</p>
        </footer>
      </div>
    );
  };
  export default MainPage;