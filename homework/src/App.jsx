import React from 'react';
import UserCard from './components/index.jsx';

function App(){
    return React.createElement( React.Fragment, null, 
        React.createElement (UserCard,{name: 'Kate', id: '1', gender: 'female'}),
        React.createElement (UserCard,{name: 'Mary', id: '2', gender: 'female'}),
        React.createElement (UserCard,{name: 'John', id: '3', gender: 'male'}),
        React.createElement (UserCard,{name: 'John', id: '4'}),
        React.createElement (UserCard,{ id: '3', gender: 'male'}),
        React.createElement (UserCard,{ name: 'Yan' ,gender: 'male'})
    );
}
export default App;
