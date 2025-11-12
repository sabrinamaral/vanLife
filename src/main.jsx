import "./index.css";
import App from "./App";
import { createContext } from "react";
import { createRoot } from "react-dom/client";
import { VansProvider } from "./context/VansProvider";

import "./server";
export const VansContext = createContext(null);

createRoot(document.getElementById("root")).render(
  <VansProvider>
    <App />
  </VansProvider>
);
