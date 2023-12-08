import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import TelegramCall from "@/components/TelegramCall";
import Image from "next/image";
import styles from "@/styles/Protocol.module.css";

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
}

interface ProtocolPageProps {
  protocol: Protocol;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let url = "http://localhost:3000/protocols.json"; // Use your development server URL here
  if (process.env.NODE_ENV === "production") {
    url = "https://www.jutsuengineer.com//protocols.json"; // Use your production URL here
  }
  const res = await fetch(url);
  const protocols: Protocol[] = await res.json();

  const paths = protocols.map((protocol) => ({
    params: { protocol: protocol.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let url = "http://localhost:3000/protocols.json"; // Use your development server URL here
  if (process.env.NODE_ENV === "production") {
    url = "https://www.jutsuengineer.com//protocols.json"; // Use your production URL here
  }
  const res = await fetch(url);
  const protocols: Protocol[] = await res.json();
  const protocol = protocols.find((p) => p.slug === params?.protocol);

  return { props: { protocol } };
};

const ProtocolPage: React.FC<ProtocolPageProps> = ({ protocol }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, logo, heroImage, labels } = protocol;
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
      <main className={styles.container}>
        <div className={styles.titleWapper}>
          <div className={styles.iconWrapper}>
            <Image
              src={logo}
              alt="Jutsu engineering platform"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className={styles.title}>{name}</h1>
        </div>
        {labels.map((label ,i) => <p className={styles.label} key={i}>{label}</p>)}
        <div className={styles.heroImageWrapper}>
          <Image
            src={heroImage}
            alt={`${name} Hero Image`}
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
        </div>
      </main>
    </>
  );
};

export default ProtocolPage;
