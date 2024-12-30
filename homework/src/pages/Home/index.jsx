import styles from './Home.module.scss';
import {NavLink} from 'react-router'


export function HomePage(){
    return <div className={styles.container}>
        Home Page
        <ul className={styles.listContainer}>
            <li >
                <NavLink to='/' className={styles.list}>Home page </NavLink>
            </li>
            <li >
            <NavLink to='Users' className={styles.list}> User List </NavLink>
            </li>
            <li>
            <NavLink to='Messages'  className={styles.list}> Messages </NavLink>
            </li>
        </ul>
    </div>
}