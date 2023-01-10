import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS simple project | Home</title>
        <meta name='keywords' content='developer'></meta>
      </Head>
      <div>
        <h1 className={styles.title}>
          Homepage
        </h1>
        <p className={styles.text}>Sample page created with Next.js </p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum, pariatur cum dolorum voluptas, in eligendi natus fuga dignissimos nobis voluptatibus fugit, soluta perspiciatis quasi deleniti quod eaque ad tempore? </p>
        <Link href="users" className={styles.btn}>See Users List...</Link>
      </div>
    </>
  );
}
