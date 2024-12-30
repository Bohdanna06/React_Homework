import React from 'react';
import UserCard from '../userCard';

class UserList extends React.Component {
    state = {
        users:[
        {
            name: 'Kate', 
            id: '1',
            gender: 'female'
        },
        {
            name: 'Mary',
            id: '2', 
            gender: 'female'
        },
        {
            name: 'John', 
            id: '3', 
            gender: 'male'
        },
        {
            name: 'Nik', 
            id: '4',
            gender: 'male'
        },
        {
            name: 'Jane', 
            id: '5',
        },
        
    ],
};
    render (){
        const{users} = this.state ;

        const usersComponents = users.map(({id, name, gender  })=>{
            return <UserCard
            key = {id}
            id = {id}
            name = {name}
            gender = {gender}/>
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