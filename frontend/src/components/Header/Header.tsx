import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Placeholder for Canva logo */}
        <Link href="/" className={styles.logo}>
          Canva
        </Link>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li><Link href="#">Design</Link></li>
          <li><Link href="#">Product</Link></li>
          <li><Link href="#">Plans</Link></li>
          <li><Link href="#">Business</Link></li>
          <li><Link href="#">Education</Link></li>
          <li><Link href="#">Help</Link></li>
        </ul>
      </nav>

      <div className={styles.authButtons}>
        <button className={styles.signUpBtn}>Sign up</button>
        <button className={styles.logInBtn}>Log in</button>
      </div>
    </header>
  );
};

export default Header;
