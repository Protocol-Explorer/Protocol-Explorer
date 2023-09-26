import React from "react";
import Link from "next/link";
import styles from "@/styles/telegram.module.css";

const TelegramCall = () => {
  return (
    <div className={styles.telegramcallout}>
      <p>Join our Telegram Group for the latest updates and discussions:</p>
      <Link href="https://t.me/your_telegram_group_or_channel_link">
        <button className={styles.telegrambutton}>Join Telegram</button>
      </Link>
    </div>
  );
};

export default TelegramCall;
