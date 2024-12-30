import {useEffect, useState} from 'react';
import styles from './Messages.module.scss'

function  MessageLoader () {
    const [messages, setMessage] = useState([]);
    const [isLoading,setIsloading] = useState(false);
    const [error, setError] = useState(null);




    useEffect(()=>{
        setIsloading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((messages) => {

        setMessage(messages);
    })
    .catch((error) => {
        setError(error);
    })
    .finally(() => {
        setIsloading(false);
    });
    },[]);

    const messagesElems = messages.map((message) => (
        <article key={message.id}>
            <h2>{message.title}</h2>
            <h3>By {message.author}</h3>
            <p>{message.text}</p>
        </article>
        ));


    return (
            <div className={styles.messages}>
                {isLoading && <div>LOADING ...</div>}
                {error && <div>ERROR: {error.message}</div>}
                {messagesElems}
            </div>
    );
}

export default MessageLoader;
