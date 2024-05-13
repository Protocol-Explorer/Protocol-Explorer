import React from "react";
import Link from "next/link";
import styles from "@/styles/features.module.css";
import boyHolding1 from "/public/boyHolding1.svg";

const Features = () => {
  return (
    <div className={styles.purpleContainer}>
      <div className={styles.div}>
        <div className={styles.div2}>The World of Web3</div>
        <div className={styles.div3}>
          <div className={styles.div4}>
            <Link className={styles.featureItem} href="/explore">
              <div className={styles.div5}>
                <img
                  loading="lazy"
                  src="/exploreBullseye.svg"
                  className={styles.img2}
                />
                <div className={styles.div6}>Explore</div>
                <div className={styles.div7}>Dive into the technologies</div>
                <div className={styles.div8}>and protocols available in</div>
                <div className={styles.div9}>web3</div>
                <img
                  loading="lazy"
                  src="/lineIcon.svg"
                  className={styles.img3}
                />
                <img
                  src="/boyStanding.svg"
                  className={styles.img4}
                  alt="Boy Holding SVG"
                />
              </div>
            </Link>
            <Link className={styles.featureItem} href="">
              <div className={styles.div10}>
                <img
                  loading="lazy"
                  src="/learnIcon.svg"
                  className={styles.img5}
                />
                <div className={styles.div11}>Learn</div>
                <div className={styles.div12}>Dive into documentation, </div>
                <div className={styles.div13}>articles, or videos to help </div>
                <div className={styles.div14}>
                  you learn to use the protocols{" "}
                </div>
                <img
                  loading="lazy"
                  src="/lineIcon.svg"
                  className={styles.img6}
                />
                <img
                  loading="lazy"
                  src="/boyImage.svg"
                  className={styles.img7}
                />
              </div>
            </Link>

            <Link className={styles.featureItem} href="/blog">
              <div className={styles.div15}>
                <img
                  loading="lazy"
                  src="/buildIcon.svg"
                  className={styles.img8}
                />
                <div className={styles.div16}>Build</div>
                <div className={styles.div17}>Build real projects using </div>
                <div className={styles.div18}>the tech made available</div>
                <div className={styles.div19}>from these protocols</div>
                <img
                  loading="lazy"
                  src="/lineIcon.svg"
                  className={styles.img3}
                />
                <img
                  loading="lazy"
                  src="/girlPainting.svg"
                  className={styles.img10}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
