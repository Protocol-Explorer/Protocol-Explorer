// components/Navbar.js

import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
      <Image
        className={styles.menuIcon}
        src="/jutsulogo.png"
        alt="Image of jutsu engineer logo"
        width={75}
        height={75}
      />
      </Link>
      <div className={styles.navLinks}>
        <Link href="/exercises" className={styles.navLink} >Train!</Link>
        <Link href="/explore" className={styles.navLink} >Explore</Link>
        <Link href="/blog" className={styles.navLink}>Blog</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
      </div>
      <div className={styles.navActions}>
        <button className={styles.joinButton}>Join Waitlist</button>
      </div>
    </nav>
  );
};

export default Navbar;
