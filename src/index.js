import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
{/* <script src="https://apis.google.com/js/client.js"></script> */}



import App from "./App";
import SpinWheel from "./spinwheel";
import Login from "./login";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<App/>}/>
        <Route path="login" element= {<Login/>}/>
        <Route path="spinwheel" element= {<SpinWheel/>}/>
        
        
      </Routes>
      
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById("root")
);
