import React, { Component } from "react";

export default class Data extends Component {
    render() {
        const checkedIn = this.props.data.reduce((acc, el) => {
            return el.isCheckedIn ? acc + 1 : acc;
        }, 0);
        const dietaryRestrictions = this.props.data.reduce((acc,el) => {
            return el.dietaryAccommodations ? acc + 1 : acc;
        }, 0);
        const physicallyHandicapped = this.props.data.reduce((acc,el) => {
            return el.physicalAccommodations ? acc + 1 : acc;
        }, 0);
        return(
            <div className="_data">
                <h1>Data</h1>
                <hr></hr>
                <p>Checked In: {checkedIn} </p>
                <p>Percent: {(checkedIn/(this.props.data.length)*100)}%</p>
                <p>Dietary Restrictions: {dietaryRestrictions}</p>
                <p>Physically Handicapped: {physicallyHandicapped}</p>
            </div>
        )
    }
}