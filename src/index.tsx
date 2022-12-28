import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import themeMUI from "./styles/themeMUI";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={themeMUI}>
      <App />
    </ThemeProvider>
  </Provider>
);
