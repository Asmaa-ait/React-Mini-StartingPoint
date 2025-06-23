import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TableRow from "./TableRow.jsx"

const Table = (props) => {
    const { rowCount } = props;
    const rowArray = Array(rowCount).fill(null);
    return (
        <table className="table">
            <tbody class="tbody">
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                {rowArray.map((row) => (
                    <TableRow></TableRow>
                ))};
            </tbody>
        </table>
    );
}

export default Table;