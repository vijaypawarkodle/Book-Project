import React from "react";
import ReactDOM from 'react-dom/client';
import Reg from "./comp/BookList";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// const root=ReactDOM.createRoot(document.querySelector("root"))
// root.render(
//   <p>vijay pawar</p>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reg/>
    
  </React.StrictMode>
);
