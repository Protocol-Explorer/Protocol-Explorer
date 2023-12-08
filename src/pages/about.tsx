// pages/about.js
import React from 'react';
import styles from "@/styles/about.module.css"
import Navbar from '@/components/Navbar';
import TelegramCall from '@/components/TelegramCall';

const About = () => {
  return (
    <div className={styles.page}>
      <TelegramCall />
      <Navbar />
      <p className={styles.intro}>
        Learning to code is broken...we are here to fix it with Protocol Explorer. We have a bias towards making sure you master the fundamentels while getting your hands on a keyboard as quickly as possible. 
      </p>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/rahat.png" alt="Rahat" className={styles.image}/>
          <h2 className={styles.name}>Rahat</h2>
          <p className={styles.blurb}>Musician turned coder turned teacher turned something else. Just building and and helping others build along the way. Take me very seriously.</p>
          <div className={styles.links}>
            <a href="https://www.rahatcodes.com/" target='_blank' className={styles.link}>Website</a>
            <a href="https://twitter.com/Rahatcodes" target='_blank' className={styles.link}>Twitter</a>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className={styles.card}>
           {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/raza.png" alt="Raza" className={styles.image}/>
          <h2 className={styles.name}>Raza</h2>
          <p className={styles.blurb}>A coding nerd voyaging into tech. I try to learn and explain complicated shit. I spent most of my time building and breaking stuff. Don&apos;t take me too seriously.</p>
          <div className={styles.links}>
            <a href="https://www.razacodes.com/" target='_blank' className={styles.link}>Website</a>
            <a href="https://twitter.com/razacodes" target='_blank' className={styles.link}>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
