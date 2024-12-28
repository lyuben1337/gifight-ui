import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./assets/styles/styles.css";
import "./assets/styles/toastify.css";
import { Provider } from "react-redux";
import store from "./shared/redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
