//Роутер
// eslint-disable-next-line no-unused-vars
import React from "react";
import RoutersForm from "../components/routesForm";
import ChooseStation from "../components/ChooseStation";
import LoginModal from "../components/LoginModal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
 function App() {
  return (
    <Router>
        <Routes>
          
          <Route path="/ModalRequest" element={<RoutersForm/>}/>
          <Route path="/" element={<LoginModal/>}/>
          <Route path="/choosestation" element={<ChooseStation/>}/>
          {/* <Route path="/userfiltermodal" element={<UserFilterModal/>}/> */}
          
        </Routes>
    </Router>
  );
}

export default App;