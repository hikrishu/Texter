import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
// } from "react-router-dom";        /// react router for not loading and changing pages, changing components

function App() {
  const [mode, setMode] = useState("#e3f2fd");
  const [textcolor, setTextcolor] = useState("black");
  const [checked, setChecked] = useState(true);

  console.log()


  // for toggling mode
  let toggleMode = () => {
    if (mode === "#e3f2fd") {
      setMode("#2D4356");
      setTextcolor("white");
      setChecked(false);
      document.body.style.backgroundColor = "#435B66"
      showAlert("Dark mode is enabled.", "success")

    } else {
      setMode("#e3f2fd");
      setTextcolor("black");
      setChecked(true);
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled.", "success")
      
    }
  };

  let listLink = {
    l1: "Home",
    l2: "How to Use",
    l3: "About Us",
  };


  // alert
  const [alert, setAlert] = useState(null)

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null)
    }, 1500)
  }


  return (
    //<Router>                  // router doesn't work well in github deployment
    <>
      <Navbar
        title="Texter"
        listLink={listLink}
        mode={mode}
        toggleMode={toggleMode}
        textcolor={textcolor}
        checked={checked}
      />
      <Alert alert={alert} />
      <TextArea showAlert={showAlert} />
    </>
    /* <Switch>
          <Route exact path="/about">
            <AboutUs mode={mode} textcolor={textcolor} />
          </Route>
          <Route exact path="/">
            <Alert alert={alert} />
            <TextArea showAlert={showAlert} />
          </Route>
        </Switch> */
    //</Router>
  );
}

export default App;
