
import './App.css';
import Navbar from './components/Navbar';
import TextChange from './components/TextChange';
import Abiut from './components/Abiut';
import Alert from './components/Alert';
import React, { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [color, setColor] = useState('light');
  const [mode, setMode] = useState("Turn Dark Mode");

  const [alert, showAlert] = useState(null);
  const setAlert = (message, type) => {
    showAlert({
      mssg: message,
      type: type
    })
    setTimeout(() => { showAlert(null) }, 2000)
  }

  let changeMode = () => {
    if (color === 'light') {
      setColor('dark');
      setMode('Change To Light Mode ');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setAlert("Dark mode enabled", "Success");


    } else {
      setColor('light');
      setMode('Change To Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setAlert("Light mode enabled", "Success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtil" about="About TextUtils" mode={mode} changeMode={changeMode} color={color} />
        <Alert alert={alert} />
        

        <div className='container my-5' >
        <Routes>
          <Route path="/about" element={<Abiut/>}/>
          <Route path="/editor" element={<TextChange setAlert={setAlert} mode={mode}/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      
    </>  
  );
}

export default App;
