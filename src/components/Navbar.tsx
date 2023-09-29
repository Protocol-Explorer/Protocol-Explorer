// components/Navbar.js

import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/exercises">Train!</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
