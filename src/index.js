import React from "react";
import { createRoot } from "react-dom/client";
import { NativeBaseProvider, extendTheme } from "native-base";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  colors: {
    DarkCyan: `hsl(158, 36%, 37%)`,
    Cream: `hsl(30, 38%, 92%)`,
    VeryDarkBlue: `hsl(212, 21%, 14%)`,
    DarkGrayishBlue: `hsl(228, 12%, 48%)`,
    White: `hsl(0, 0%, 100%)`,
  },
  config: {
    initialColorMode: "light",
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
