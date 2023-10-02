import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>BUSINESS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Kritik Sah</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <p className={styles.profile}>Greetings! I'm Kritik Sah, a fullstack developer (frontend focused) with 3+ years experience. My journey includes frontend leadership at a web3 firm, contributions to a marketing agency and online pharmacy e-com projects, and a strong passion for user-centric UI, Teaching (Own a Youtube Channel with 7.1k Subscriber) and open-source.</p>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
