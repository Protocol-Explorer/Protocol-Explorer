import Head from "next/head";
import Editor from "@monaco-editor/react";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";

export default function Flip() {
  type QuizData = {
    question: string;
    answer: string;
  };

  const [data, setData] = useState<QuizData | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData: QuizData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  return (
    <>
      <Head>
        <title>Jutsu Engineering</title>
        <meta name="description" content="Start practicing Solidity now" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1>Jutsu Engineering</h1>
        <h3>Start practicing your solidity code</h3>
        <button onClick={fetchData}>reveal answer</button>
        {data && (
          <div>
            <p>Answer: {data.answer}</p>
          </div>
        )}
      </main>
    </>
  );
}
