import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "./components/custom-ui/toast/ToastProvider.tsx";

import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.Fragment>
        <ToastProvider>
            <App />
        </ToastProvider>
    </React.Fragment>
);
