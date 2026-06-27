import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>&gt;</span>
        </li>
        <li className={styles.breadcrumbItem}>
          <Link href="/resumes">Resumes</Link>
          <span className={styles.separator}>&gt;</span>
        </li>
        <li className={styles.breadcrumbItem} aria-current="page">
          <span className={styles.current}>Resume templates</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
