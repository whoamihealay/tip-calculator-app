/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
