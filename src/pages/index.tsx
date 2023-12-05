import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import TelegramCall from "@/components/TelegramCall";
import Image from "next/image";
import Features from "@/components/Features";

export default function Home() {
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

        <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Code, Play, and Explore the World of Web3</h1>
        <p className={styles.introText}>Welcome to Jutsu Engineer, your platform for hands-on coding practice and web3 exploration. Engage with practical coding games and learn about the latest in web3, all in a supportive community of fellow engineers.</p>
          <button className={styles.joinButton}>Join Waitlist</button>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/jutsu.jpg"
            alt="Jutsu engineering platform"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </main>
    </div>
    <Features />
      </div>
    </>
  );
}
