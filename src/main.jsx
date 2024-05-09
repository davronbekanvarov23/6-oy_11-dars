import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import globalContextProvider from "./context/globalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <globalContextProvider>
    
    <Toaster />
    <App />
  </globalContextProvider>
);
