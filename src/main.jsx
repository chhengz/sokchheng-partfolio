import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/css/main.css";

// service worker
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);

serviceWorkerRegistration.register();
