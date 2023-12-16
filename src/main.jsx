import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyALz5LqxMX96N06UUSSkCv-K08LUdlNFBs",
  authDomain: "coderhouse-arita.firebaseapp.com",
  projectId: "coderhouse-arita",
  storageBucket: "coderhouse-arita.appspot.com",
  messagingSenderId: "279512354674",
  appId: "1:279512354674:web:d896503cdfa24c3d0457eb",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
