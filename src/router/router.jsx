//Роутер
// eslint-disable-next-line no-unused-vars
import React from "react";
import RoutersForm from "../components/routesForm";
import ChooseStation from "../components/ChooseStation";
import LoginModal from "../components/LoginModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DragAndDrop from "../components/DragandDrop";
 function App() {
  return (
    <Router>
        <Routes>
          
          <Route path="/ModalRequest" element={<RoutersForm/>}/>
          <Route path="/" element={<LoginModal/>}/>
          <Route path="/choosestation" element={<ChooseStation/>}/>
          <Route path="/DragAndDrop" element={<DragAndDrop/>}/>
         
          
        </Routes>
    </Router>
  );
}

export default App;