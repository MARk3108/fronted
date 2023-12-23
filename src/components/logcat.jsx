import React, { useState, useEffect } from 'react';
import jsonData from './logCat.json';
import '../styles/choose_station.css';
const LogcatStory = ({ isOpen, onClose })=>{
    const historyData = jsonData.history;
    if (!isOpen) return null;
  return (
    <div className={`modal`}>
        <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
      <h1>История перемещения вагонов</h1>
        {historyData.map((item, index) => (
          <div key={index}>
            <p>Перемещен вагон {item.vagon_num+" "}
            на позицию {item.new_position+" "}
            на пути {item.way_num}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
    
export default LogcatStory; 