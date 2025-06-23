import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TableRow from "./TableRow.jsx"

const Table = () => {
    return(
        <table className="table">
            <tbody>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
            </tbody>
        </table>
    );
}

export default Table;