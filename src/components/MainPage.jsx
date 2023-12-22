import React, { useState } from 'react';
import '../styles/main_page.css'
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
        <div className="menu"> 
          <button className="menu__button" >Отслеживание движения поездов</button> 
        {/* <HowItWork isHowItWorkModalOpen={isHowItWorkOpen} onHowItWorkModalClose={closeHowItWork} /> */}
         <a  href="#" >Добавить маршрут следования</a>
          <a href="#" >Личный кабинет</a>
        </div>
        <div className="info-block">
          <h1 className="info-block__header">Найдите свою аудиторию</h1>
          <p className="info-block__text">Огромный выбор аудиторий для мероприятий всех форматов.<br/>Бронируйте классы, актовые залы и конференц-залы в вашем институте.</p>
          <div className="info-block-nav">
            <div className="info-block-nav__item"><p className="info__text">аудиторий</p></div>
            <div className="info-block-nav__item"><p className="info__text">мероприятий</p></div>
            <div className="info-block-nav__item"><p className="info__text">учебных заведений</p></div>
          </div>
        </div>
        <div className="content">
          <div className="content__text">
            <h2>Добро пожаловать!</h2>
            <p>Здесь вы можете бронировать аудитории в нашем институте для проведения различных мероприятий.</p>
            {/* {userToken ? ( // Если userToken существует
                <button className="registration-button" onClick={unLogin}>Выход</button>
                         ) : ( // Если userToken отсутствует (равен null)
                           <div>
                           <button className="registration-button" onClick={openAuth}>Вход</button>
                           <button className="registration-button" onClick={openRegistration}>Регистрация</button>
                               <AuthWindow isAuthModalOpen={isAuthOpen} onAuthModalClose={closeAuth} />
                               <RegistrationModal isRegistrationModalOpen={isRegistrationOpen} onRegistrationModalClose={closeRegistration} />
                           </div>
                              )} */}
          </div>
        </div>
        <footer className="footer">
          <p>&copy; 2023 Модуль номерного учета вагонов</p>
        </footer>
      </div>
    );
  };
  export default MainPage;