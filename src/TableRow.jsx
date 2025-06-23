import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TableCell from "./TableCell.jsx";
import "./app.jsx";

const TableRow = (props) => {
    const { columnCount } = props;
    const columnArray = Array(columnCount).fill(null);
    return(
        <tr columnCount={columnCount}>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {columnArray.map((row) => (
                <TableCell></TableCell>
            ))}
        </tr>
    );
}

export default TableRow;
