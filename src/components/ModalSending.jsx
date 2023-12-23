import React from 'react';

const ModalSending = ({
  showModal,
  closeModal,
  selectedRoute,
  selectedWagon,
  stationFrom,
  stationTo,
  positionFrom,
  positionTo,
  handleSendData,
}) => {
  if (!showModal) return null;

  return (
    <div className="modal-sending">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Подтвердите что хотите перенести</h2>
        <p><strong>Станция отправления:</strong> {stationFrom}</p>
        <p><strong>Станция назначения:</strong> {stationTo}</p>
        <p><strong>Вагон:</strong> {selectedWagon.wagon}</p>
        <p><strong>Собственник:</strong> {selectedWagon.owner}</p>
        <p><strong>Позиция отправления:</strong> {positionFrom}</p>
        <p><strong>Позиция назначения:</strong> {positionTo}</p>
        <button onClick={handleSendData}>Подтверждаю эти данные </button>
      </div>
    </div>
  );
};

export default ModalSending;
