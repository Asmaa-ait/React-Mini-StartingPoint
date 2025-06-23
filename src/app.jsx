import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Table from "./Table.jsx";
import { useState } from "react";

const App = () => { 
  const [rowCount, setRowCount] = useState(0);
  const addRow = () => {
    setRowCount(rowCount + 1); 
  };

  const [columnCount, setColumnCount] = useState(0);
  const addColumn = () => {
    setColumnCount(columnCount + 1);
  };

  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>
      <Table rowCount={rowCount} columnCount={columnCount}></Table>
      <div>
        <button id="add-row" onClick={addRow}>Add Row </button>
        <button id="add-column" onClick={addColumn}>Add Column</button>
        <button id="remove-row">Remove Row</button> 
        <button id="remove-column">Remove Column</button>
        <select id="color-select">
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
        </select>
        <button id="fill-grid">Fill Grid</button>
        <button id="fill-uncolored-grid">Fill Uncolored Grid</button>
        <button id="Clear Grid">Clear Grid</button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);


