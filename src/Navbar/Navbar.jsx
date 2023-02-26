import React from "react";
import "./Navbar.css";

function Navbar(props) {
	return (
		<nav className="nav">
            <img src="./icons/logo.png"></img>
            <div className="navbar">
            <ul>
                <li>
                <button class="btn default">Log in</button>
                </li>
                <li>
                <button class="btn default">Log Out</button>
                </li>
            </ul>
            </div>
        </nav>
	);
}

export default Navbar;