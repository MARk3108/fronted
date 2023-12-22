//Роутер
// eslint-disable-next-line no-unused-vars
import React from "react";
import RoutersForm from "../components/routesForm";
import MainPage from "../components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
 function App() {
  return (
    <Router>
        <Routes>
          
          <Route path="/ModalRequest" element={<RoutersForm/>}/>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;