import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./Table.jsx";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>
      <Table></Table>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
