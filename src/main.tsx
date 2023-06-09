import React from "react";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
