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
        <meta
          name="description"
          content="Welcome to Protocol Explorer - Your Gateway to Web3"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TelegramCall />
      <Navbar />
      <div className={styles.containerHome}>
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.worldOf}>The World of Web3</p>
            <h1 className={styles.heading}>
              Learn<span className={styles.textWrapper}>.</span> Build
              <span className={styles.textWrapper}>.</span>
              <br />
              Explore<span className={styles.textWrapper}>.</span>
            </h1>
            <div className={styles.arrowDetails}>
              <img
                className={styles.arrow}
                alt="Arrow"
                src="/arrow.png"
                style={{ marginRight: "5px" }}
              />
              <p className={styles.introText}>
                Welcome to Protocol Explorer, your platform for exploring tech
                in web3.
              </p>
            </div>
            <div className={styles.arrowDetails}>
              <img
                className={styles.arrow}
                alt="Arrow"
                src="/arrow.png"
                style={{ marginRight: "5px" }}
              />
              <p className={styles.introText}>
                Learn about the latest Protocols and tools you can use to start
                building your own apps.
              </p>
            </div>
            <div className={styles.wrappedItems}>
              <div className={styles.imageWrapper}>
                <a href="https://t.me/protocolexplorer" target="_blank">
                  <img
                    loading="lazy"
                    src="/joinTelegram.png"
                    alt="Join Our Telegram"
                  />
                </a>
              </div>
              <div className={styles.exploreProtocol}>
                <img src="/ExploreProtocol.png" alt="Explore Protocol" />
              </div>
            </div>
          </header>
          <main className={styles.mainContent}>
            <div className={styles.imageWrapper1}>
              <Image
                src="/jutsu.jpg"
                alt="Protocol Explorering platform"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </main>
        </div>
      </div>
      <Features />
    </>
  );
}   
