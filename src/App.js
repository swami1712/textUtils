import React, { useState } from 'react';

// import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";











function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#092958";
      showAlert("Success", "Dark mode is enabled");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Success", "Light mode is enabled");
    }
  }
  return (
    <>
      {/* <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}/>
        
        <About/>
        
        <Routes>
            <Route exact path="About.js">
              <About/>
            </Route>
            <Route path="/">
            <TextForm formTitle="Enter some text to analyze" alert={alert} showAlert={showAlert} mode={mode} ></TextForm>
            </Route>
        </Routes>

      </Router>
       */}


      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <Routes>

          <Route>
            <Route path="About" element={<About mode={mode} />} />
            <Route path="Textform" element={<TextForm formTitle="Enter some text to analyze" alert={alert} showAlert={showAlert} mode={mode} />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )




}


export default App;
