import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";

const App = () => <Main />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
