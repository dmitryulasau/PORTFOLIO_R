import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import primaryTheme from "./themes/PrimaryTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={primaryTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
