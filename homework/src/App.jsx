import React from 'react';
import UserList from './components/UserList';


const users = [
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
    }
    
];


function App(){
    return (
    <>
    
    <UserList users = {users}/>
    
    </>
    );
}
export default App;
