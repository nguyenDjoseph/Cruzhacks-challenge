import React, { Component } from "react";

export default class Hackers extends Component {
    render() {

        const firstTenHackers = this.props.data.slice(0,10);
        const col = ["name", "age", "phone"];
        const hackerHeader = (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
        );

        const hackerBody = firstTenHackers.map(hacker => {
            return (
                <tr>
                    {col.map(el => {
                        return <td>{hacker[el]}</td>;
                    })}
                </tr>
            )
        })

        return(
            <div className="_hackers">
                <h1>Hackers</h1>
                <hr className="hackers-br-ln"></hr>               
                <table className="table table-borderless _hackers">
                    {hackerHeader}
                    {hackerBody}
                </table>
            </div>
        )
    }
}