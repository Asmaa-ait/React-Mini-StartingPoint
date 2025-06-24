import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TableCell from "./TableCell.jsx";
import "./app.jsx";

const TableRow = (props) => {
    const { rowColors, rowIndex, setGrid} = props;
    return(
        <tr>
            {rowColors.map((color, colIndex) => (
                <TableCell key={colIndex} color={color} rowIndex={rowIndex} colIndex={colIndex} setGrid={setGrid}/>
            ))}
        </tr>
    );
}

export default TableRow;
