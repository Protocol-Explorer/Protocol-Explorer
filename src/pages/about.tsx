// pages/about.js
import React from "react";
import styles from "@/styles/about.module.css";
import Navbar from "@/components/Navbar";
import TelegramCall from "@/components/TelegramCall";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.centerImg}>
        <Image
          className={styles.circleSvg}
          src="/jutsu.jpg"
          alt="Jutsu"
          width={100}
          height={100}
        />
      </div>
      <p className={styles.intro}>
        Navigating web3 as a developer is a pain...
      </p>
      <p className={styles.intro1}>
        We are here to fix it with Protocol Explorer
      </p>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/rahat.png" alt="Rahat" className={styles.image} />
          <h2 className={styles.name}>Rahat</h2>
          <p className={styles.blurb}>
            Musician turned coder turned teacher turned something else. Just
            building and and helping others build along the way. Take me very
            seriously.
          </p>
          <div>
            <img src="./lineicon.svg" className={styles.line}></img>
          </div>
          <div className={styles.links}>
            <a
              href="https://www.rahatcodes.com/"
              target="_blank"
              className={styles.link}
            >
              Website
            </a>
           
            <a
              href="https://twitter.com/Rahatcodes"
              target="_blank"
              className={styles.socialIconWrapper}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faXTwitter}
              />
            </a>
           
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/raza.png" alt="Raza" className={styles.image} />
          <h2 className={styles.name}>Raza</h2>
          <p className={styles.blurb}>
            A coding nerd voyaging into tech. I try to learn and explain
            complicated shit. I spent most of my time building and breaking
            stuff. Don&apos;t take me too seriously.
          </p>
          <div>
            <img src="./lineicon.svg" className={styles.line1}></img>
          </div>
          <div className={styles.links}>
            <a
              href="https://www.razacodes.com/"
              target="_blank"
              className={styles.link}
            >
              Website
            </a>
            <a
              href="https://twitter.com/razacodes"
              target="_blank"
              className={styles.socialIconWrapper}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={faXTwitter}
              />
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/jutsu.jpg" alt="jutsu" className={styles.image1} />
          <h2 className={styles.name}>Getting your Hands</h2>
          <p className={styles.blurb}>
            We have a bias towards making sure you master the fundamentels while
            getting your hands on a keyboard as quickly as possible.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
