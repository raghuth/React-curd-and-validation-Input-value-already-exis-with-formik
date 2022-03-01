import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ValidationForm } from "./components/home/input-value-already-exist";

function App() {  
  return (
    <>
      <div style={{ margin: 34 }}>       
          <Routes>
            <Route exact path="/" element={<ValidationForm />} />          
          </Routes>        
      </div>
    </>
  );
}

export default App;
