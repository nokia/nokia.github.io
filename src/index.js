import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const nokiaRoot = createRoot(document.getElementById("root"));

nokiaRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
