import {NavLink} from 'react-router'
import MessageLoader from '../../components/MessageLoader'
// import styles from '../Home/Home.module.scss'
import styles from './Messages.module.scss'


export function Messages(){
    return <div className={styles.container}>
        Messages
        <ul className={styles.listContainer}>
            <li >
                <NavLink to='/' className={styles.list}>Home page </NavLink>
            </li>
            <li>
            <NavLink to='Users' className={styles.list}> User List </NavLink>
            </li>
        </ul>
        <MessageLoader />
    </div>
}