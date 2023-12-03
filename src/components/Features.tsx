import React from 'react';
import Link from 'next/link';
import styles from "@/styles/features.module.css"

const Features = () => {
  return ( 
    <div className={styles.featuresContainer}>
    <Link className={styles.featureItem} href="/feature1">
        <h3 className={styles.featureTitle}>Train!</h3>
        <p className={styles.featureDescription}>Start training with the repetition of writing code</p>
    </Link>
    <Link className={styles.featureItem} href="/feature2">
        <h3 className={styles.featureTitle}>Build</h3>
        <p className={styles.featureDescription}>Play games and build projects to further hone your skills</p>
    </Link>
    <Link className={styles.featureItem} href="/feature3">
        <h3 className={styles.featureTitle}>Explore</h3>
        <p className={styles.featureDescription}>Dive into the technologies and protcols available in web3</p>
    </Link>
  </div>
  );
};

export default Features;