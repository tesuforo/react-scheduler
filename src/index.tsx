import * as React from "react";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Scheduler } from "@aldabil/react-scheduler";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
