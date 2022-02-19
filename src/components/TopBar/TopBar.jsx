import React from 'react';
import css from "./TopBar.module.css";

function TopBar({ title}) {
    return (
        <div className={css.topBar}>
            <h1>{title}</h1>
        </div>
    );
}

export default TopBar;