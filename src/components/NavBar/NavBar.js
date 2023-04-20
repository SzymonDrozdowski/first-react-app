import styles from './NavBar.module.scss';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icon}>
                <a href="/"><i className="fa fa-tasks"></i></a>
            </div>
            <ul className={styles.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="/favorite">Fovorite</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;