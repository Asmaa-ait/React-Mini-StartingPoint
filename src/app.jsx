import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Table from "./Table.jsx";
import { useState } from "react";
import { ColorContext } from "./Color.jsx"
import { FillContext } from "./Color.jsx"

const App = () => { 
  const [grid, setGrid] = useState(Array(3).fill().map(() => Array(3).fill("white")));
  const [selectedColor, setColor] = useState("red");
  const addRow = () => {
    const colums = grid[0]?.length || 0;
    const newRow = Array(colums).fill("white");
    setGrid([...grid, newRow]);
  };

  const addColumn = () => {
    if(grid.length === 0){
      setGrid([[ "white" ]]);
    } else{
      const newGrid = grid.map(row => [...row, "white"]);
      setGrid(newGrid);
    }
  };

  const removeRow = () => {
    if(grid.length > 0){
      setGrid(grid.slice(0, -1));
    }
  };

  const removeColumn = () => {
    if(grid.length > 0 && grid[0].length > 0){
      const newGrid = grid.map(row => row.slice(0, -1));
      setGrid(newGrid);
    }
  }

  const changeColor = (e) => {
    setColor(e.target.value);
  }

  const fillGrid = () => {
    const newGrid = grid.map(row => row.map(() => selectedColor));
    setGrid(newGrid);
  };

  const fillUncoloredGrid = () => {
    const newGrid = grid.map(row => row.map(cell => (cell === "white" ? selectedColor : cell)));
    setGrid(newGrid);
  }

  const clearGrid = () => {
    const newGrid = grid.map(row => row.map(() => "white"));
    setGrid(newGrid);
  }

  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>
      <FillContext value={selectedColor}>
        <ColorContext value={selectedColor}>
        <Table grid={grid} setGrid={setGrid}></Table>
      </ColorContext>
      </FillContext>
      <div>
        <button id="add-row" onClick={addRow}>Add Row </button>
        <button id="add-column" onClick={addColumn}>Add Column</button>
        <button id="remove-row" onClick={removeRow}>Remove Row</button> 
        <button id="remove-column" onClick={removeColumn}>Remove Column</button>
        <select id="color-select" onChange={changeColor}>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
        </select>
        <button id="fill-grid" onClick={fillGrid}>Fill Grid</button>
        <button id="fill-uncolored-grid" onClick={fillUncoloredGrid}>Fill Uncolored Grid</button>
        <button id="Clear Grid" onClick={clearGrid}>Clear Grid</button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);


