import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { ColorContext } from "./Color.jsx"
import TableRow from "./TableRow.jsx"

const Table = (props) => {
    const { rowCount, columnCount, grid, setGrid } = props;
    const rowArray = Array(rowCount).fill(null);
    const selectedColor = useContext(ColorContext);
    const handleClick = (e) => {
        e.target.style.backgroundColor = selectedColor;
    }
    return (
        <table className="table">
            <tbody>
                {grid.map((rowColors, rowIndex) => (
                    <TableRow key={rowIndex} rowColors={rowColors} rowIndex={rowIndex} setGrid={setGrid}/>
                ))}
            </tbody>
        </table>
    );
}

export default Table;