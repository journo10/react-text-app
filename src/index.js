import React from "react";
import { createRoot } from "react-dom/client"; //REACT 18
import "./index.css";
import App from "./App";

//REACT 18
const root = createRoot(document.getElementById("root"));
root.render(<App />);
