import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next.js Tutorial </title>
      </Head>

      <Link href="/about"> About </Link>

      <h1 className={styles.helloWorld}>Hello World</h1>
    </div>
  )
}
