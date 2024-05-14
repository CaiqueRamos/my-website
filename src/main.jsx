import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/home";
import { ChakraProvider } from "@chakra-ui/react";
import "./global/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
);
