// components/Navbar.js

import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { url: 'https://twitter.com/protocolxplorer', imgPath: '/jutsu.jpg' },
    { url: 'https://twitter.com/Rahatcodes', imgPath: '/rahat.png' },
    { url: 'https://twitter.com/razacodes', imgPath: '/raza.png' },
  ];
  return (
    <nav className={styles.navbar}>
      <Link href="/">
      <Image
        className={styles.menuIcon}
        src="/jutsulogo.png"
        alt="Image of Protocol Explorer logo"
        width={75}
        height={75}
      />
      </Link>
      <div className={styles.navLinks}>
        <Link href="/explore" className={styles.navLink} >Explore</Link>
        <Link href="/exercises" className={styles.navLink} >Train!</Link>
        <Link href="/blog" className={styles.navLink}>Blog</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
      </div>
      <div className={styles.navActions}>
      {links.map((link, index) => (
        <a href={link.url} key={index} target="_blank" rel="noopener noreferrer" className={styles.circle}>
          <Image src={link.imgPath} alt={`Twitter ${index + 1}`} width={100} height={100} />
        </a>
      ))}
      </div>
    </nav>
  );
};

export default Navbar;
