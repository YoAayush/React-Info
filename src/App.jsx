import React from 'react';
import Main from './main.jsx';
import Nav from './Nav.jsx';
import { useState } from 'react';
import './App.css';

function App() {

  function clickableIn(){
    document.querySelector(".menu-list").style.display = "flex";
    document.querySelector(".menu-icon").style.display = "none";
    document.querySelector(".close-icon").style.display = "inline";
  }
  
  function clickableOut(){
    document.querySelector(".menu-list").style.display = "none";
    document.querySelector(".menu-icon").style.display = "inline";
    document.querySelector(".close-icon").style.display = "none";
  }

  const[darkMode,setDarkMode] = useState(true)

  function toggle(){
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <>
      <Nav In = {clickableIn} Out = {clickableOut} darkMode = {darkMode} toggleDarkMode = {toggle}/>
      <Main darkMode = {darkMode}/>
    </>
  )
}

export default App;
