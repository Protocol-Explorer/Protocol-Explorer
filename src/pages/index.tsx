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
        <title>Protocol Explorer</title>
        <meta name="description" content="Welcome to Protocol Explorer - Your Gateway to Web3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TelegramCall /> 
      <Navbar />
      <div className={styles.containerHome}>
        <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Code, Play, and Explore the World of Web3</h1>
        <p className={styles.introText}>Welcome to Protocol Explorer, your platform for hands-on coding practice and web3 exploration. Engage with practical coding games and learn about the latest in web3, all in a supportive community of fellow engineers.</p>
          <a href="https://t.me/+vRIl8Wkm0B0zOTQx" target="_blank" className={styles.joinButton}>Join Our Telegram</a>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/jutsu.jpg"
            alt="Protocol Explorering platform"
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
