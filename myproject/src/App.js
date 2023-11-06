import React from "react";
import './App.css';
import FunctionalCom from "./Components/FunctionalCom";
import {ClassCom, ClassCom2,ClassCom3} from "./Components/ClassCom";



function App(){
  return (
    <div>
  <h1>Hello! Welcome to this course</h1>
  <h1>This part is about Components</h1>
  <FunctionalCom></FunctionalCom>
  <ClassCom2/>
  
  </div>
  );
}

export default App;
