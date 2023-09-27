import React from 'react';
import styles from '@/styles/blog.module.css'
import TelegramCall from "@/components/TelegramCall";
import Navbar from "@/components/Navbar";

const Blog = () => {
  return (
    <>
    <TelegramCall />
      <Navbar />
    <div className={styles.container}>
        <h1 className={styles.text}>Coming Soon</h1>
    </div>
    </>
);
}

export default Blog