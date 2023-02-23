import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode> url은 변하지만 렌더링이 되지 않아서 div로 변환
  <div>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </div>
);
