import React from "react";
import Link from "next/link";
import styles from "@/styles/telegram.module.css";

const TelegramCall = () => {
  return (
    <div className={styles.telegramcallout}>
      <p className={styles.telegramTitle}>
        <Link
          className={styles.telegramJoin}
          href="https://t.me/+vRIl8Wkm0B0zOTQx"
        >
          Join
        </Link>{" "}
        our Telegram Group for the latest updates and discussions!
      </p>
    </div>
  );
};

export default TelegramCall;
