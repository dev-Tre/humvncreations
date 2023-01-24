import Head from "next/head";

import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Humvn Creations</title>
        <meta name="description" content="Curated by Tyler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/portfolio/Gallery">
        <h1 className={styles.textLink}>Portfolio</h1>
      </Link>
    </>
  );
}
