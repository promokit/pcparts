import styles from './header.module.css';

function Header() {
    return (
    <header className={styles.header}>PCPARTS
        <span className={styles.subtitle}>Select the best part for your PC!</span>
    </header>)
}

export default Header;
