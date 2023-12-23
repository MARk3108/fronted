import React, { useState } from "react";
import "../styles/dragondrop.css"
import ChooseStation from "./ChooseStation";
import test from "../assets/State=Default, Transparent=No, Type=Platform Rol full, Color=orange, Sick=No, Status=Default, Delay=No.png"
import ModalSending from '../components/ModalSending'
import LogcatStory from "./logcat";
 const DragAndDrop = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      title: "Первый путь",
      items: [
        { id: 1, wagon: 'Электросостав_1',station: 'Название станции', owner: 'Собственник',  type: 'Тип вагона' },
        { id: 2, wagon: 'Вагон 1',station: 'Название станции', owner: 'Собственник', type: 'Тип вагона' },
        { id: 3, wagon: 'Вагон 2',station: 'Название станции', owner: 'Собственник',  type: 'Тип вагона' },
        { id: 4, wagon: 'Вагон 3',station: 'Название станции', owner: 'Собственник',  type: 'Тип вагона' },
      ],
    },
    {
      id: 2,
      title: "Второй путь",
      items: [
        { id: 1, wagon: 'Электросостав_1' },
        { id: 2, wagon: 'Вагон 1' },
        { id: 3, wagon: 'Вагон 2' },
        { id: 4, wagon: 'Вагон 3' },
      ],
    },
    
    {
      id: 3,
      title: "Третий путь",
      items: [
        { id: 5, wagon: 'Электросостав_2' },
        { id: 6, wagon: 'Вагон 4' },
        { id: 7, wagon: 'Вагон 5' },
        { id: 8, wagon: 'Вагон 6' },
      ],
    },
    {
      id: 4,
      title: "Четвертый путь",
      items: [
        { id: 9, wagon: 'Электросостав_3' },
        { id: 10, wagon: 'Вагон 7' },
        { id: 11, wagon: 'Вагон 8' },
        { id: 12, wagon: 'Вагон 9' },
      ],
    },
    {
      id: 5,
      title: "Пятый путь",
      items: [
        { id: 13, wagon: 'Электросостав_2' },
        { id: 14, wagon: 'Вагон 4' },
        { id: 15, wagon: 'Вагон 5' },
        { id: 16, wagon: 'Вагон 6' },
      ],
    },
    {
      id: 6,
      title: "Шестой путь",
      items: [
        { id: 17, wagon: 'Электросостав_2' },
        { id: 18, wagon: 'Вагон 4' },
        { id: 19, wagon: 'Вагон 5' },
        { id: 20, wagon: 'Вагон 6' },
      ],
    },
    {
      id: 7,
      title: "Седьмой путь",
      items: [
        { id: 21, wagon: 'Электросостав_2' },
        { id: 22, wagon: 'Вагон 4' },
        { id: 23, wagon: 'Вагон 5' },
        { id: 24, wagon: 'Вагон 6' },
      ],
    },
    {
      id: 8,
      title: "Восьмой путь",
      items: [
        { id: 25, wagon: 'Электросостав_2' },
        { id: 26, wagon: 'Вагон 4' },
        { id: 27, wagon: 'Вагон 5' },
        { id: 28, wagon: 'Вагон 6' },
      ],
    },
    {
      id: 9,
      title: "Девятый путь",
      items: [
        { id: 29, wagon: 'Электросостав_2' },
        { id: 30, wagon: 'Вагон 4' },
        { id: 31, wagon: 'Вагон 5' },
        { id: 32, wagon: 'Вагон 6' },
      ],
    },
    {
      id: 10,
      title: "Десятый путь",
      items: [
        { id: 33, wagon: 'Электросостав_2' },
        { id: 34, wagon: 'Вагон 4' },
        { id: 35, wagon: 'Вагон 5' },
        { id: 36, wagon: 'Вагон 6' },
      ],
    },
   
  ]);
  
  //определенное колличество мест на маршруте 
  const maxItemsPerRoute = {
    1: 100,
    2: 6,
    3: 4,
     
  };
   const [isChooseStationOpen, setIsChooseStationOpen] = useState(false); //молальное окно смены станции
   const [isLogCatOpen, setIsLogCatOpen] = useState(false);
   const [selectedStation, setSelectedStation] = useState('Ольжерасская'); //отслеживаем в какой станции мы 
  const [searchTerm, setSearchTerm] = useState(''); // состояние для хранения текста поиска // Состояние для текста поиска
  const [currentRoute,setCurrentRoute]=useState(null); //состояние для текущего пути
  const [currentItem,setCurrentItem]=useState(null) //состояние для текущего 
  // Добавьте состояние для отслеживания открытия/закрытия модального окна и информации о вагоне
const [modalInfo, setModalInfo] = useState(null);
const [modalSendingData,setModalSendingData]= useState(null);

// Функция для открытия модального окна при клики правой кнопки мыши
function handleRightClick(e, item) {
  e.preventDefault();
  setModalInfo(item); // Устанавливаем информацию о вагоне для отображения в модальном окне
}

// Функция для закрытия модального окна
function closeModal() {
  setModalInfo(null); // Закрываем модальное окно
}

// Функции для открытия модального окна отправки данных на сервер 
// function handleSendClick(e, info) {
//   e.preventDefault();
//   setModalSending(info); // Устанавливаем информацию о вагоне для модального окна отправки
// }
// function closeSendModal() {
//   setModalSending(null); // Закрываем модальное окно
// }




  // открытие модального окна 
  const openChooseStation = () => {
    setIsChooseStationOpen(true);
  };
  const closeChooseStation = (stationName) => {
    setIsChooseStationOpen(false);
    setSelectedStation(stationName);
  };
  const openLogCat = () => {
    setIsLogCatOpen(true);
  }
  const closeLogCat = () =>{
    setIsLogCatOpen(false);
  }



  // функция поиска
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    highlightItems(event.target.value);
  }
  //функция подсвечивания 
  function highlightItems(term) {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
      const wagonName = item.textContent.toLowerCase();
      if (term && wagonName.includes(term.toLowerCase())) {
        item.classList.add('highlight');
      } else {
        item.classList.remove('highlight');
      }
    });
  }
  // отправка данных на сервер 
  const handleSaveChanges = () => {
    
    console.log('Изменения сохранены');
  };
 
  
// Функции для Dragand Drop (из видео)
  function dragOverHandler(e){
e.preventDefault()
if(e.target.className=="item"){
  e.target.style.boxShadow = '0 4px 3px gray'
}
  }
  function dragLeaveHandler(e){
    e.target.style.boxShadow = 'none'
  }
  function dragStartHandler(e,route,item){
    setCurrentRoute(route)
    setCurrentItem(item)
  }

  function dropHandler(e, route, item) {
    e.preventDefault();
  
    const maxItems = maxItemsPerRoute[route.id];
    const currentIndex = currentRoute.items.indexOf(currentItem);
    currentRoute.items.splice(currentIndex, 1);
  
    const dropIndex = route.items.indexOf(item);
    
    if (route.items.length < maxItems) {
      route.items.splice(dropIndex + 1, 0, currentItem);
      // Отображаем модальное окно после перемещения вагона
      setModalSendingData({
        stationFrom: currentRoute.title,
        stationTo: route.title,
        wagon: currentItem,
        positionFrom: currentIndex+1,
        positionTo: dropIndex + 1,
      }); // Отображаем модальное окно после перемещения вагона
    } else {
      // Возвращаем вагон на прежнее место в текущем маршруте, если места закончились
      currentRoute.items.splice(currentIndex, 0, currentItem);
      alert('Места на маршруте закончились');
    }
  
    setRoutes(routes.map((r) => (r.id === route.id ? route : r)));
  }
  const [selectedItems, setSelectedItems] = useState([]);
  const [ctrlPressed, setCtrlPressed] = useState(false);

  function handleMouseDown(item, e) {
    if (!ctrlPressed) {
      setSelectedItems([item]);
    } else {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Control') {
      setCtrlPressed(true);
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Control') {
      setCtrlPressed(false);
    }
  }
  // Добавьте обработчики событий на окне для отслеживания нажатия/отпускания клавиши Ctrl
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="container-main-page">
      <div className="header">
        <h1>Вами выбрана станция {selectedStation && `(${selectedStation})`} </h1>
      </div>
      <div className="menu">
      <input
          className="input-search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Поиск вагона..."
        />
        <button onClick={openLogCat} className="menu__button">История перемещений</button>
        <LogcatStory isOpen={isLogCatOpen} onClose={closeLogCat}/>
        <button onClick={openChooseStation} className="menu__button" >Сменить станцию</button> 
        <ChooseStation isOpen={isChooseStationOpen} onClose={closeChooseStation} />
      </div>
{/*  Модальные окна */}
{modalInfo && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <h2> информация</h2>
      <p>Название: {modalInfo.wagon}</p>
      <p>Станция: {modalInfo.station}</p>          
      <p>Собственник: {modalInfo.owner}</p>
      <p>Тип вагона: {modalInfo.type}</p>
    </div>
  </div>
)}
 {modalSendingData && (
        <ModalSending
          showModal={true}
          closeModal={() => setModalSendingData(null)}
          selectedRoute={modalSendingData.stationFrom}
          selectedWagon={modalSendingData.wagon}
          stationFrom={modalSendingData.stationFrom}
          stationTo={modalSendingData.stationTo}
          positionFrom={modalSendingData.positionFrom}
          positionTo={modalSendingData.positionTo}
          
        />
      )}
  {routes.map((route) => (
        
        <div className="route" key={route.id}>
          <div className="route_title">{route.title}</div>
          {route.items.map((item) => (
            <div
              className="item"
              
              onContextMenu={(e) => handleRightClick(e, item)} // Обработчик для правой кнопки мыши
              // Добавляем класс "highlight", если вагон содержит текст поиска
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, route, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, route, item)}
              draggable={true}
              key={item.id}
              
            >
              <img src={test} alt={item.wagon} />
              <span className="text-over">{item.wagon}</span>
             
            </div>
          ))}
        </div>
      ))}
    
        <div className="footer">
      </div>
    </div>
  );
};

export default DragAndDrop;