import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icon}>
                <a href="/"><i className="fa fa-tasks"></i></a>
            </div>
            <ul className={styles.menu}>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;