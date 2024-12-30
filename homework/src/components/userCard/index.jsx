import React, { Component } from "react";
import './userCard.css'

class UserCard extends Component {

    state =  {
        isFriend : false 
    }

    handleChangeFriend = (()=>{
        this.setState({
            isFriend : !this.state.isFriend
        })
    }
    )
    
    render() {
    const { id = "", name = "", gender = "" } = this.props;

    const {isFriend} = this.state;

    if(gender === 'male'){
        return (
            <>
            <article className="male commonStyle">
                <h1 className="userName"> Name: {name? name: 'User'}</h1>
                <p className="userId"> ID: {id? id:'No id'}</p>
                <p className="userGender"> Gender: {gender}</p>
                <p className="userState"> {name} is {!isFriend && 'not '}Friend</p>
                <button className="btn" onClick={this.handleChangeFriend}> {isFriend?  'Delete from friend': 'Make friend '}</button>
                </article>
            </>
        )
    } else if (gender === 'female') {
        return (
            <>
            <article className="female commonStyle">
                <h1 className="userName"> Name: {name? name: 'User'}</h1>
                <p className="userId"> ID: {id? id:'No id'}</p>
                <p className="userGender"> Gender: {gender}</p>
                <p className="userState"> {name} is {!isFriend && 'not '}Friend</p>
                <button className="btn" onClick={this.handleChangeFriend}> {isFriend?  'Delete from friend': 'Make friend '}</button>
            </article>
            </>
        )
    } else{
        return (
            <>
            <article className="user commonStyle">
                <h1 className="userName"> Name: {name? name: 'User'}</h1>
                <p className="userId"> ID: {id? id:'No id'}</p>
                <p className="userGender"> Gender:  No gender</p>
                <p className="userState"> {name} is {!isFriend && 'not '}Friend</p>
                <button className="btn" onClick={this.handleChangeFriend}> {isFriend?  'Delete from friend': 'Make friend '}</button>
            </article>
            </>
        )
    }
}
}

export default UserCard;
