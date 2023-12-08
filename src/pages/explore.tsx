import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TelegramCall from "@/components/TelegramCall";
import styles from "@/styles/explore.module.css"
import ProtocolCard from "@/components/ProtocolCard";
import SelectMenu from "@/components/SelectMenu";
import { useState } from 'react';

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
  protocols: Protocol[];
}

export default function Explore({ protocols }:ProtocolPageProps) {
  const [protocolData, setProtocolData] = useState(protocols)
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
      <SelectMenu protocols={protocols} protocolData={protocolData} setProtocolData={setProtocolData} />
      <h1 className={styles.header}>Explore the World of Web3</h1>
      <main className={styles.main}>
        {protocolData.map((protocol, i) => <ProtocolCard key={i} {...protocol} />)}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'protocols'));

  const protocols = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
          path.join('src', 'protocols', filename),
          'utf-8'
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
          slug: filename.replace('.mdx', ''),
          ...frontMatter,
      };
  });

  return {
      props: {
          protocols,
      },
  };
};