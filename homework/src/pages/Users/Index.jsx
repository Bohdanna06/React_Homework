import {NavLink} from "react-router";
import UserList from "../../components/UserList";
import styles from './Users.module.scss'

export function Users(){
    return <div className={styles.container}>
        User List
        <ul className={styles.listContainer}>
            <li >
                <NavLink to='/' className={styles.list}>Home page </NavLink>
            </li>
            <li>
            <NavLink to='Messages'  className={styles.list}> Messages </NavLink>
            </li>
        </ul>
        <UserList/>
    </div>
}