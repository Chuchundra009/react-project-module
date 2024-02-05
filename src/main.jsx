import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./style/index.scss";
import { ComponentsContext } from "./Context/MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ComponentsContext>
      <App />
    </ComponentsContext>
  </React.StrictMode>
);
