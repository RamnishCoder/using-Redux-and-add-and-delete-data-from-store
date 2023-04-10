import React from "react";
import { Routes, Route } from "react-router-dom";
import AddData from "./Pages/AddData";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddData />}></Route>

      </Routes>
    </div>
  );
};

export default App;
