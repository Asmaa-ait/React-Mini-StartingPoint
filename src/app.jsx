import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// const App = () => {
//   return (
//     <div className="app">
//       <h1 className="title">Hello World</h1>
//     </div>
//   );
// };

const App = () => {
  return (
    <div id="root">
      <h1>Grid Maker</h1>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div>
        <button id="add-row">Add Row</button>
        <button id="add-column">Add Column</button>
        <select id="color-select">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <button id="fill-grid">Fill Grid</button>
        <button id="clear-grid">Clear Grid</button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
