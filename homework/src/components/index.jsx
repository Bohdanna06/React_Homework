import React, { Component } from "react";
import "./userCard/userCard.css";

class UserCard extends Component {
    render() {
    const { id = "", name = "", gender = "" } = this.props;

    if(gender === 'male'){
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
            "h1",
            { className: "userName male" },
            `Name: ${name? name : 'User'}`,
            React.createElement("p", { className: "userId male" }, `ID:  ${id ? id : 'no id'}`),
            React.createElement(
                "p",
                { className: "male" },
                `Gender: ${gender}`
            ))
        );

    } else if(gender === 'female'){
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
            "h1",
            { className: "userName female" },
            `Name: ${name ? name : 'User'}`,
            React.createElement("p", { className: "userId female" }, `ID:  ${id ? id : 'no id'}`),
            React.createElement(
                "p",
                { className: "female" },
                `Gender: ${gender}`
            ))
        );

    } else{
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
            "h1",
            { className: "userName" },
            `Name: ${name? name : 'User"'}`,
            React.createElement("p", { className: "userId" }, `ID:  ${id? id : 'no id'}`),
            React.createElement(
                "p",
                { className: "userGender" },
                `Gender: no gender `
            ))
        );
    }
    }
}
export default UserCard;
