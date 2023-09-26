import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import TelegramCall from "@/components/TelegramCall";

export default function newhome() {
  return (
    <>
      <Head>
        <title>Jutsu Engineering</title>
        <meta name="description" content="Start practicing Solidity now" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TelegramCall />
      <Navbar />
      <div className={styles.containerHome}>
        <Head>
          <title>Jutsu Engineer</title>
          <meta
            name="description"
            content="Welcome to Jutsu Engineer - Your Coding Exercise Platform"
          />
        </Head>

        <main className={styles.mainHome}>
          <h1 className={styles.title}>Welcome to Jutsu Engineer</h1>
          <h2 className={styles.subtitle}>Master the Art of Coding</h2>
        </main>

        <footer className={styles.footer}>
          {/* Add footer content if needed */}
        </footer>
      </div>
    </>
  );
}
