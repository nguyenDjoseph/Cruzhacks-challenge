import React, { Component } from "react";

export default class Nav extends Component {
    render() {
        return(
            <ul className="nav-bar">
                <li className="nav-item"><a href="#home">Home</a></li>
                <li className="nav-item"><a href="#announcments">Announcments</a></li>
                <li className="nav-item"><a href="#checkins">Check Ins</a></li>
                <li className="nav-item"><a href="#applications">Applications</a></li>
            </ul>
        )
    }
}