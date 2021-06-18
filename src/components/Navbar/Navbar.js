import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div>
            <ul className={styles.Navbar}>
                <li className={styles.Navbar__link}><Link to="/">Fetch</Link></li>
                <li className={styles.Navbar__link}><Link to="/post">Post</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
