import "./index.css";
import App from "./App";
import { callServer } from "./server";
import { createContext } from "react";
import { createRoot } from "react-dom/client";
import { VansProvider } from "./context/VansProvider";

callServer();
export const VansContext = createContext(null);

createRoot(document.getElementById("root")).render(
  <VansProvider>
    <App />
  </VansProvider>
);
