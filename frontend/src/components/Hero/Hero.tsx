import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Resume templates</h1>
      <p className={styles.subtitle}>
        Land your dream job with captivating CVs you can professionally customize to reflect your true potential with Canva&apos;s free resume templates and easy-to-use design editor.
      </p>
    </section>
  );
};

export default Hero;
