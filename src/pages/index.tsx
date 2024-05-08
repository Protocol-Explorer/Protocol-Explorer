import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import TelegramCall from "@/components/TelegramCall";
import Image from "next/image";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Link from "next/link";
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
              <div className={styles.joinTelegram}>
                <div className={styles.imageWrapper}>
                  <a href="https://t.me/protocolexplorer" target="_blank">
                  
                    <span className={styles.text}><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="23"
                      viewBox="0 0 27 23"
                      fill="none"
                      className={styles.additionalSVG}
                    >
                      <path
                        d="M21.5379 22.5129C21.0209 22.5129 20.1299 21.8879 17.5059 19.9539C15.7409 18.6539 14.4599 17.7299 14.3889 17.7049H14.3809C13.7281 18.1432 13.129 18.6568 12.5959 19.2349C10.8519 20.9019 10.8109 20.9349 10.3819 21.0559C10.3234 21.0761 10.2626 21.0892 10.2009 21.0949H10.1939C10.1862 21.0949 10.1786 21.0933 10.1716 21.0902C10.1645 21.0871 10.1582 21.0826 10.1529 21.0769C10.1219 21.0449 10.1279 20.9599 10.1529 20.7769C10.1709 20.6219 10.2329 19.7379 10.3199 18.4109L10.3369 18.1459C10.4189 16.8639 10.5069 15.6459 10.5369 15.3699L10.5799 14.8699L16.3799 9.63692C21.2419 5.24692 22.1899 4.36192 22.1299 4.08692C22.1179 4.02692 22.0559 4.00092 21.9929 3.98092C21.9606 3.97055 21.9269 3.96515 21.8929 3.96492C21.5529 3.96492 20.6929 4.49392 14.0929 8.65092L7.02094 13.1019L4.56294 12.3319C2.88394 11.8069 1.67194 11.4319 1.31994 11.3219C0.443938 11.0509 0.0119386 10.7649 -6.13669e-05 10.4449C-0.0150614 10.0369 0.661938 9.57192 2.06994 9.02092C2.74894 8.75592 7.79594 6.80392 14.3429 4.27392L15.4009 3.86492C23.3159 0.801918 25.2109 0.0789185 25.9159 0.0789185H25.9409C26.0258 0.0797693 26.1093 0.100254 26.185 0.138768C26.2606 0.177282 26.3263 0.23278 26.3769 0.300919L26.4249 0.349918C26.4661 0.391906 26.5114 0.429754 26.5599 0.462918C26.9969 0.827918 26.9969 0.827918 25.2339 9.13892L25.1449 9.55892V9.56792L24.9069 10.6889L24.6909 11.7129C22.6039 21.5799 22.5309 21.8759 22.0569 22.2729C21.9208 22.4164 21.7353 22.5029 21.5379 22.5149V22.5129Z"
                        fill="#8575A9"
                      />
                    </svg>Join Our Telegram</span>
                  </a>
                </div>
              </div>
              <div className={styles.exploreProtocol}>
              <Link href="/explore" >
                <span className={styles.protocolText}>Explore Protocol</span>
              </Link>
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
                className={styles.jutsuImage}              />
            </div>
          </main>
        </div>
      </div>
      <Features />
      <Footer />
    </>
  ); 
}
