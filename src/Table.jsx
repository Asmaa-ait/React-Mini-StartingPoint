import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./TableRow.jsx"

const Table = () => {
    return(
        <table>
            <TableRow></TableRow>
            <TableRow></TableRow>
            <TableRow></TableRow>
        </table>
    );
}