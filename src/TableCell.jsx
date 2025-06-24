import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { ColorContext } from "./Color.jsx"

const TableCell = ({ color, rowIndex, colIndex, setGrid}) => {
    const selectedColor = useContext(ColorContext);
    const handleClick = () => {
        setGrid(prevGrid => {
            const newGrid = [...prevGrid];
            newGrid[rowIndex] = [...newGrid[rowIndex]];
            newGrid[rowIndex][colIndex] = selectedColor;
            return newGrid;
        })
    }
    return(
            <td class="cell" style={{ backgroundColor: color }} onClick={handleClick}></td>
    );
}

export default TableCell;