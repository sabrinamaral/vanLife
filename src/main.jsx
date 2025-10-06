import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { callServer } from "./server";

callServer();
console.log("call server!!");

createRoot(document.getElementById("root")).render(<App />);
