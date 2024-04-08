// components/Navbar.js

import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import { WrappedBuildError } from "next/dist/server/base-server";
const Navbar = () => {
  const links = [
    { url: 'https://twitter.com/protocolxplorer', imgPath: '/jutsu.jpg' },
    { url: 'https://twitter.com/Rahatcodes', imgPath: '/rahat.png' },
    { url: 'https://twitter.com/razacodes', imgPath: '/raza.png' },
  ];
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.frame}>
          <div className={styles.grupo}>
            <img className={styles.path} alt="Path" src="jutsulogo.png" />
            <div className={styles.overlapGroupWrapper}>
              <div className={styles.overlapGroup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={80}
                  height={36}
                  viewBox="0 0 106 36"
                  fill="none"
                  x="0"
                >
                  <path
                    d="M18.0001 -1.52588e-05H87.0001C91.774 -1.52588e-05 96.3523 1.89641 99.728 5.27206C103.104 8.64772 105 13.2261 105 18C105 22.7739 103.104 27.3523 99.728 30.7279C96.3523 34.1036 91.774 36 87.0001 36H6.10352e-05V18C6.10352e-05 13.2261 1.89648 8.64772 5.27214 5.27206C8.64779 1.89641 13.2262 -1.52588e-05 18.0001 -1.52588e-05Z"
                    fill="#E4E4F9"
                  />
                </svg>
                <div className={styles.textWrapper}>Explorer</div>
              </div>
            </div>
            <img className={styles.caminho} alt="Caminho" src="/Caminho.png" />
          </div>
        </div>
      </Link>

      <div className={styles.navLinks}>
        <Link href="/explore" className={styles.navLink}>
          Explore
        </Link>
        {/* <Link href="/exercises" className={styles.navLink}>
          Train!
        </Link>
        <Link href="/blog" className={styles.navLink}>
          Blog
        </Link> */}
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
      </div>
      <div className={styles.navActions}>
        {links.map((link, index) => (
          <a
            href={link.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.circle}
          >
            <Image
              src={link.imgPath}
              alt={`Twitter ${index + 1}`}
              width={100}
              height={100}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
