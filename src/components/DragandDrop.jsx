import React, { useState } from "react";
import "../styles/dragondrop.css"
import ChooseStation from "./ChooseStation";
 const DragAndDrop = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      title: "Первый путь",
      items: [
        { id: 1, wagon: 'Электросостав_1' },
        { id: 2, wagon: 'Вагон 1' },
        { id: 3, wagon: 'Вагон 2' },
        { id: 4, wagon: 'Вагон 3' },
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
   const [isChooseStationOpen, setIsChooseStationOpen] = useState(false); //молальное окно смены станции
  const [selectedStation, setSelectedStation] = useState('Ольжерасская'); //отслеживаем в какой станции мы 
  const [searchTerm, setSearchTerm] = useState(''); // состояние для хранения текста поиска // Состояние для текста поиска
  const [currentRoute,setCurrentRoute]=useState(null);
  const [currentItem,setCurrentItem]=useState(null)
  // открытие модального окна 
  const openChooseStation = () => {
    setIsChooseStationOpen(true);
  };
  const closeChooseStation = (stationName) => {
    setIsChooseStationOpen(false);
    setSelectedStation(stationName);
  };




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

  function dropHandler(e,route,item){
    e.preventDefault()
    const currentIndex=currentRoute.items.indexOf(currentItem)
    currentRoute.items.splice(currentIndex,1)
    const dropIndex=route.items.indexOf(item)
    route.items.splice(dropIndex-1,0,currentItem)
    setRoutes(routes.map(r=>{
      if(r.id===route.id){
      return route
      }
      if(r.id===currentRoute.id){
        return currentRoute
      }
      return r
    }))
  }

  function dragEndHandler(e){
    e.target.style.boxShadow = 'none'
  }

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
        <button onClick={openChooseStation} className="menu__button" >Сменить станцию</button> 
        <ChooseStation isOpen={isChooseStationOpen} onClose={closeChooseStation} />
      </div>
      {routes.map((route) => (
        <div className="route" key={route.id}>
          <div className="route_title">{route.title}</div>
          {route.items.map((item) => (
            <div
              className="item"
              
              // Добавляем класс "highlight", если вагон содержит текст поиска
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, route, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, route, item)}
              draggable={true}
              key={item.id}
            >
              {item.wagon}
            </div>
          ))}
        </div>
      ))}
    
        <div className="footer">
        <button onClick={handleSaveChanges} className="menu_button">
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default DragAndDrop;