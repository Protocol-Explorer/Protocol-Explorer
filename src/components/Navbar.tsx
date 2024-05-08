// components/Navbar.js

import React,{useState} from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import { WrappedBuildError } from "next/dist/server/base-server";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const links = [
    { url: 'https://twitter.com/protocolxplorer', imgPath: '/jutsu.jpg' },
    { url: 'https://twitter.com/Rahatcodes', imgPath: '/rahat.png' },
    { url: 'https://twitter.com/razacodes', imgPath: '/raza.png' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
};
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer} >
      <Link href="/">
        <div className={styles.frame}>
          <div className={styles.grupo}>
            <img className={styles.path} alt="Path" src="jutsulogo.png" />
            <div className={styles.overlapGroupWrapper}>
                <div className={styles.textWrapper}>Explorer</div>
            </div>
            <span className={styles.caminho}>Protocol</span>
          </div>
        </div>
      </Link>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </button>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.showNav:""}`}>
        <Link href="/explore" className={styles.navLink}>
          Explore
        </Link>
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
