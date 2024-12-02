import React from 'react';
import UserCard from '../userCard';

class UserList extends React.Component {


    render (){
        const{users} = this.props;

        const usersComponents = users.map(({id,name,gender})=>{
            return <UserCard
            key = {id} 
            id={id} 
            name={name} 
            gender={gender}/>
        });

        return (
            <article> 
                <h2> Users: </h2>
                {usersComponents}

            </article>
        )
    }
}

export default UserList;