import React from "react";
import styles from "@/styles/ProtocolCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

type ProtocolCardProps = {
  name: string;
  website: string;
  heroImage: string;
  logo: string;
  twitterLink: string;
  discordLink: string;
  docs: string;
  slug: string;
  description: string;
  labels: string[];
};

const ProtocolCard: React.FC<ProtocolCardProps> = ({
  name,
  logo,
  description,
  labels,
  twitterLink,
  discordLink,
  slug,
}) => {
  const calculateFontSize = (label: string, svgWidth: number) => {
    const factor = 10;
    const minWidth = 200; // Minimum width for the SVG container
    const calculatedWidth = label.length * factor;
    const fontSize = Math.floor(svgWidth / (calculatedWidth / factor));

    // Ensure font size is not too small or too large
    return Math.max(Math.min(fontSize, 16), 8);
  };
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <Image
            src={logo}
            alt={`${name} logo`}
            layout="responsive"
            width={70}
            height={70}
            objectFit="contain"
            quality={100}
          />
        </div>
        <a href={slug} className={styles.link}>
          <img src="/learnMore.svg" alt="Learn More" />
        </a>
      </div>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.labelWrapper}>
        <div className={styles.labelWrapper}>
          {labels.map((label, i) => (
            <label key={i} className={styles.label}>
              {label}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.socials}>
          <a
            href={twitterLink}
            target="_blank"
            className={styles.socialIconWrapper}
          >
            <FontAwesomeIcon className={styles.socialIcon} icon={faXTwitter} />
          </a>
          <a
            href={discordLink}
            target="_blank"
            className={styles.socialIconWrapper}
          >
            <FontAwesomeIcon className={styles.socialIcon} icon={faDiscord} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProtocolCard;
