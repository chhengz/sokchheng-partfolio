import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./assets/css/main.css";

// service worker
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
      </AuthProvider>
  </StrictMode>
);

serviceWorkerRegistration.register();
