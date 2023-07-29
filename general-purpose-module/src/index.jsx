import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from './theme';
import ReactDOM from 'react-dom/client'
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme} >
            <App/>
            <CssBaseline/>
        </ThemeProvider>
    </React.StrictMode>

)

