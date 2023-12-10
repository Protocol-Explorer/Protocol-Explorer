import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Layout.module.css";
import Tabs from "./Tabs";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type article = {
  title: string;
  author: string;
  twitter: string;
  link: string;
};

interface Protocol {
  name: string;
  website: string;
  heroImage: string;
  logo: string;
  twitterLink: string;
  discordLink: string;
  docs: string;
  slug: string;
  description: string;
  labels: string[];
  articles: article[];
}

interface ProtocolPageProps {
  protocol: Protocol;
  children?: React.ReactNode;
}

const Layout: React.FC<ProtocolPageProps> = ({ protocol, children }) => {
  const {
    name,
    logo,
    heroImage,
    labels,
    website,
    docs,
    discordLink,
    twitterLink,
  } = protocol;
  return (
    <>
      <Head>
        <title>Protocol Explorer</title>
        <meta name="description" content="Start practicing Solidity now" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
      <Link href="/explore">
            <FontAwesomeIcon className={styles.backArrow} icon={faArrowLeft} />
          </Link>
        <div className={styles.titleWapper}>
          <div className={styles.iconWrapper}>
            <Image
              src={logo}
              alt="Protocol Explorer platform"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className={styles.title}>{name}</h1>
        </div>
        {labels.map((label, i) => (
          <p className={styles.label} key={i}>
            {label}
          </p>
        ))}
        <div className={styles.heroImageWrapper}>
          <Image
            src={heroImage}
            alt={`${name} Hero Image`}
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.pageContent}>
          <Tabs protocol={protocol}>{children}</Tabs>
          <div className={styles.sideMenu}>
            <div className={styles.iconWrapper}>
              <Image
                src={logo}
                alt="Protocol Explorering platform"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3>Start building with {name} Today</h3>
            <div className={styles.links}>
              <a href={website} target="_blank" className={styles.link}>
                Website
              </a>
              <a href={docs} target="_blank" className={styles.link}>
                Docs
              </a>
            </div>
            <div className={styles.socials}>
              <a
                href={twitterLink}
                target="_blank"
                className={styles.socialIconWrapper}
              >
                <FontAwesomeIcon
                  className={styles.socialIcon}
                  icon={faXTwitter}
                />
              </a>
              <a
                href={discordLink}
                target="_blank"
                className={styles.socialIconWrapper}
              >
                <FontAwesomeIcon
                  className={styles.socialIcon}
                  icon={faDiscord}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
