import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter,createBrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './as/css/main.css';
import HomePage from "./pages/HomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
