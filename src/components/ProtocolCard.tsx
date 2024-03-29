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
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Image
          src={logo}
          alt={`${name} logo`}
          layout="responsive"
          width={70} // standardWidth to fit within the iconWrapper with some padding
          height={70} // standardHeight to match the width and maintain aspect ratio
          objectFit="contain"
          quality={100} // assuming you want the best quality
        />
      </div>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.labelWrapper}>
        {labels.map((label, i) => (
          <p className={styles.label} key={i}>
            {label}
          </p>
        ))}
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
        <Link href={slug} className={styles.link}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProtocolCard;
