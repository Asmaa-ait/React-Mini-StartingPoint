import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TableCell from "./TableCell.jsx";

const TableRow = () => {
    return(
        <tr>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
        </tr>
    );
}

export default TableRow;