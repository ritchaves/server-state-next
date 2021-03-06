import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const card = "m-3 p-5 rounded-md border-eggshell border-2 max-w-xs w-80 h-36";
const Home: NextPage = () => {
  return (
    <div className="row-start-1 row-end-4 col-start-1 col-end-4">
      <Head>
        <title>Pokedex Server State</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex min-h-screen flex-1 flex-col justify-center items-center">
        <h1 className="text-4xl m-10">State libraries</h1>
        <div className="flex justify-center items-center max-w-md	flex-wrap max-w-4xl">
          <Link href="/react-query">
            <a className={card}>
              <h2 className="text-xl">React-Query &rarr;</h2>
              <p>React-query with selector, useQueries, useQuery.</p>
            </a>
          </Link>
          <Link href="/redux-rtk">
            <a className={card}>
              <h2 className="text-xl">RTK &rarr;</h2>
              <p>Example with RTK-Query.</p>
            </a>
          </Link>
          <Link href="/swr">
            <a className={card}>
              <h2 className="text-xl">SWR &rarr;</h2>
              <p>Example with SWR.</p>
            </a>
          </Link>
          <Link href="/comparison">
            <a className={card}>
              <h2 className="text-xl">Comparison &rarr;</h2>
              <p>Bullet points of comparison</p>
            </a>
          </Link>
          <Link href="/redux">
            <a className={card}>
              <h2 className="text-xl">Redux &rarr;</h2>
              <p>Client side: redux</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
