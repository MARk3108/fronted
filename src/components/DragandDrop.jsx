import React, { useState } from "react";
import "../styles/dragondrop.css";
import ChooseStation from "./ChooseStation";
import test from "../assets/State=Default, Transparent=No, Type=Platform Rol full, Color=orange, Sick=No, Status=Default, Delay=No.png";
import ModalSending from "../components/ModalSending";
import LogcatStory from "./logcat";
import { useEffect } from "react";
import axios from "axios";
const DragAndDrop = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      title: "Первый путь",
      items: [
        {
          id: 1,
          wagon: "Локомотив 1",
          station: "Томусинская",
          owner: "ООО РЖД",
          type: "Локомотив",
        },
        {
          id: 2,
          wagon: "Вагон 1",
          station: "Томусинская",
          owner: "ООО РЖД",
          type: "Грузовой вагон",
        },
        {
          id: 3,
          wagon: "Вагон 2",
          station: "Томусинская",
          owner: "ООО РЖД",
          type: "Вагон для проводников",
        },
        {
          id: 4,
          wagon: "Вагон 3",
          station: "Томусинская",
          owner: "ООО РЖД",
          type: "Вагон ресторан",
        },
      ],
    },
    {
      id: 2,
      title: "Второй путь",
      items: [
        { id: 1, wagon: "Локомотив 2" },
        { id: 2, wagon: "Вагон 11" },
        { id: 3, wagon: "Вагон 12" },
        { id: 4, wagon: "Вагон 13" },
      ],
    },

    {
      id: 3,
      title: "Третий путь",
      items: [
        { id: 5, wagon: "Локомотив 3" },
        { id: 6, wagon: "Вагон 4" },
        { id: 7, wagon: "Вагон 5" },
        { id: 8, wagon: "Вагон 6" },
      ],
    },
    {
      id: 4,
      title: "Четвертый путь",
      items: [
        { id: 9, wagon: "Локомотив 4" },
        { id: 10, wagon: "Вагон 7" },
        { id: 11, wagon: "Вагон 8" },
        { id: 12, wagon: "Вагон 9" },
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
  const [selectedStation, setSelectedStation] = useState(""); //отслеживаем в какой станции мы
  const [searchTerm, setSearchTerm] = useState(""); // состояние для хранения текста поиска // Состояние для текста поиска
  const [currentRoute, setCurrentRoute] = useState(null); //состояние для текущего пути
  const [currentItem, setCurrentItem] = useState(null); //состояние для текущего
  // Добавьте состояние для отслеживания открытия/закрытия модального окна и информации о вагоне
  const [modalInfo, setModalInfo] = useState(null);
  const [modalSendingData, setModalSendingData] = useState(null);
  const [stationsData, setStationsData] = useState([]); // Переменная для хранения данных о станциях

  // Функция для открытия модального окна при клики правой кнопки мыши
  function handleRightClick(e, item) {
    e.preventDefault();
    setModalInfo(item); // Устанавливаем информацию о вагоне для отображения в модальном окне
  }

  // Функция для закрытия модального окна
  function closeModal() {
    setModalInfo(null); // Закрываем модальное окно
  }

  
  function handleSendClick(e, info) {
    e.preventDefault();
    setModalSending(info); // Устанавливаем информацию о вагоне для модального окна отправки
  }
  function closeSendModal() {
    setModalSending(null); // Закрываем модальное окно
  }

  useEffect(() => {
    // Выполняем запрос к серверу для получения данных о станциях
    axios
      .get("http://localhost:5000/stations")
      .then((response) => {
        // Здесь обрабатываем полученные данные
        console.log("Данные о станциях:", response.data);
        // Сохраняем полученные данные в переменную stationsData
        setStationsData(response.data);
        // Пример обновления состояния с полученными данными
        // setWays(response.data.ways);
        // setWagons(response.data.wagons);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных о станциях:", error);
      });
  }, []); // useEffect будет выполнен при первом рендере компонента
  // Фильтруем массив данных по станции, которая выбрана в selectedStation
  const filteredData = stationsData.filter(
    (station) => station.title === selectedStation
  );
  // Выводим отфильтрованные данные в консоль
  console.log("Отфильтрованные данные по выбранной станции:", filteredData);
  // filteredData.forEach((path) => {
  //   console.log(...path.data);
  // });
  
 
  

  //Создайте функцию, которая обновит состояние routes, добавляя данные из paths

  // открытие модального окна
  const openChooseStation = () => {
    setIsChooseStationOpen(true);
  };
  const closeChooseStation = (station) => {
    setIsChooseStationOpen(false);
    setSelectedStation(station);
  };
  const openLogCat = () => {
    setIsLogCatOpen(true);
  };
  const closeLogCat = () => {
    setIsLogCatOpen(false);
  };

  // функция поиска
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    highlightItems(event.target.value);
  }
  //функция подсвечивания
  function highlightItems(term) {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      const wagonName = item.textContent.toLowerCase();
      if (term && wagonName.includes(term.toLowerCase())) {
        item.classList.add("highlight");
      } else {
        item.classList.remove("highlight");
      }
    });
  }
  // отправка данных на сервер
  const handleSaveChanges = () => {
    console.log("Изменения сохранены");
  };

  // Функции для Dragand Drop (из видео)
  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className == "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dragStartHandler(e, route, item) {
    setCurrentRoute(route);
    setCurrentItem(item);
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
        positionFrom: currentIndex + 1,
        positionTo: dropIndex + 1,
      }); // Отображаем модальное окно после перемещения вагона
    } else {
      // Возвращаем вагон на прежнее место в текущем маршруте, если места закончились
      currentRoute.items.splice(currentIndex, 0, currentItem);
      alert("Места на маршруте закончились");
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
        setSelectedItems(
          selectedItems.filter((selectedItem) => selectedItem !== item)
        );
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Control") {
      setCtrlPressed(true);
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Control") {
      setCtrlPressed(false);
    }
  }
  // Добавьте обработчики событий на окне для отслеживания нажатия/отпускания клавиши Ctrl
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="container-main-page">
      <div className="header">
        <h1>
          Вами выбрана станция {selectedStation && `(${selectedStation})`}{" "}
        </h1>
      </div>
      <div className="menu">
        <input
          className="input-search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Поиск вагона..."
        />
        <button onClick={openLogCat} className="menu__button">
          История перемещений
        </button>
        <LogcatStory isOpen={isLogCatOpen} onClose={closeLogCat} />
        <button onClick={openChooseStation} className="menu__button">
          Сменить станцию
        </button>
        <ChooseStation
          isOpen={isChooseStationOpen}
          onClose={closeChooseStation}
          setSelectedStation={setSelectedStation}
        />
      </div>
      {/*  Модальные окна */}
      {modalInfo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2> информация</h2>
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

      <div className="footer"></div>
    </div>
  );
};

export default DragAndDrop;
